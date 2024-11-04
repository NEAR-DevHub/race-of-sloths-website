import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Fetches leaderboard data from the API
 * @returns {Promise<Array>} Array of user records
 */
async function fetchLeaderboardData() {
    const response = await fetch('https://api.race-of-sloths.com/leaderboard/users/rosctober2024');
    const data = await response.json();
    return data.records;
}

/**
 * Calculates and distributes rewards based on user ratings
 * @param {Array} users - Array of user records
 * @param {number} rewardPool - Total reward pool in USD
 * @param {number} minimumRating - Minimum rating required for eligibility
 * @returns {Array} Array of users with their calculated rewards
 */
function distributeRewards(users, rewardPool = 10000, minimumRating = 100) {
    const eligibleUsers = users.filter(user => user.rating >= minimumRating);
    const totalRating = eligibleUsers.reduce((sum, user) => sum + user.rating, 0);
    const valuePerRating = rewardPool / totalRating;

    const rewardsDistribution = eligibleUsers.map(user => {
        const reward = (user.rating * valuePerRating).toFixed(2);
        return {
            login: user.user.login,
            name: user.user.name || user.user.login,
            rating: user.rating,
            reward: parseFloat(reward),
            rewardUSD: `$${reward}`
        };
    });

    return rewardsDistribution.sort((a, b) => b.reward - a.reward);
}

/**
 * Generates markdown content for reward distribution
 * @param {Array} rewards - Array of calculated rewards
 * @returns {string} Markdown formatted content
 */
function generateMarkdown(rewards) {
    const totalEligible = rewards.length;
    const totalDistributed = rewards.reduce((sum, user) => sum + user.reward, 0);
    const totalPoints = rewards.reduce((sum, user) => sum + user.rating, 0);

    const markdown = `# Race of Sloths - October 2024 Reward Distribution
**Total Reward Pool**: $10,000 USD  
**Minimum Rating Required**: 100  
**Distribution Date**: ${new Date().toISOString().split('T')[0]}

## Summary
- **Total Eligible Users**: ${totalEligible}
- **Total Distributed**: $${totalDistributed.toFixed(2)}
- **Total Points After Minimum Filtering**: ${totalPoints}
- **Distribution Method**: Proportional to user rating
- **Minimum Rating**: 100 points

## Detailed Distribution

| Rank | User | Rating | Reward (USD) | Share (%) |
|------|------|--------|--------------|-----------|
${rewards.map((user, index) => {
        const share = ((user.reward / totalDistributed) * 100).toFixed(2);
        return `| ${index + 1} | @${user.login} | ${user.rating} | $${user.reward.toFixed(2)} | ${share}% |`;
    }).join('\n')}

## Distribution Notes
- Rewards were calculated based on individual rating proportions
- Only users with ratings of 100 or higher were eligible
- All amounts are in USD and rounded to 2 decimal places
- Users are referenced by their GitHub handles (@username)

## Calculation Method
The reward for each user was calculated using the following formula:
\`\`\`
Individual Reward = (User Rating / Total Eligible Ratings) × Total Reward Pool
\`\`\`

---
*Generated on ${new Date().toISOString()} via Race of Sloths reward distribution system*
*Data source: [Race of Sloths API](https://api.race-of-sloths.com/leaderboard/users/rosctober2024)*`;

    return markdown;
}

/**
 * Main function to generate reward distribution markdown
 */
async function generateRewardDistribution() {
    try {
        const users = await fetchLeaderboardData();
        const rewards = distributeRewards(users);
        const markdown = generateMarkdown(rewards);

        const outputPath = path.join(__dirname, '../../reward-distribution.md');
        fs.writeFileSync(outputPath, markdown);

        console.log(`Reward distribution markdown generated at: ${outputPath}`);
    } catch (error) {
        console.error('Error generating reward distribution:', error);
    }
}

// Export functions
export {
    distributeRewards,
    generateRewardDistribution,
    fetchLeaderboardData
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
    generateRewardDistribution();
} 
