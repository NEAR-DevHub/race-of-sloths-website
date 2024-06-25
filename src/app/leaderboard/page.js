import Leaderboard from "./Leaderboard";

export const metadata = {
  title: "Race of Sloths | Leaderboard",
  description: "Race of Sloths Leaderboard",
};

const apiUrl = process.env.API_URL;

export default function LeaderboardPage() {
  return <Leaderboard apiUrl={apiUrl} />;
}
