export const metadata = {
  title: "Race of Sloths | FAQ",
  description: "Race of Sloths FAQ",
};

export default function FAQ() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl mb-1">FAQ</h1>
      <div className="w-full flex flex-col gap-5 tracking-wide leading-7">
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Why is it called Race of Sloths?
          </h2>
          <p>
            The name is somewhat ironic. Open-source contributions can take time
            to be reviewed and released, which might be perceived as slow-paced.
            However, open-source always wins in the long run. The name was also
            inspired by{" "}
            <a
              href="https://www.youtube.com/watch?v=LUXUeCw0-1c"
              className="underline"
            >
              a sloth from the Zootopia animated film
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">May I participate?</h2>
          <p>
            Yes. Full-time, part-time, and one-time contributors are eligible
            and <i>encouraged</i> to participate! You cannot score your own pull
            requests, but other maintainers can score them.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Is it powered by the NEAR Protocol?
          </h2>
          <p>
            Yes, we have implemented the leaderboard and all the scoring logic
            on the{" "}
            <a href="https://near.org" className="underline">
              NEAR Protocol
            </a>
            . As a result, user profiles are completely public and we encourage
            developers to be creative and build their extensions based on the
            stream of reviewed contributions and leaderboard scores of Race of
            Sloths from{" "}
            <a
              href="https://explorer.near.org/accounts/race-of-sloths.near"
              className="underline"
            >
              race-of-sloths.near
            </a>
            . It is completely permissionless and fully transparent.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">Why should I care?</h2>
          <p>
            We believe that Race of Sloths will add extra motivation and fun to
            the process of contributing to open-source projects. If you are on
            your early career path, a boosted Race of Sloths profile may give
            you an advantage in your career opportunities.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            How hard is it to contribute to Race of Sloths projects?
          </h2>
          <p>
            Each project has its complexity and requires relevant skill and/or
            perseverance, and yet it is often rewarding to crack the challenge.
            The best way to start is to follow the example, so when you start
            looking into the project, check out their README file to get an idea
            if that is something relevant to your skill and area of interest,
            then open recently closed pull requests to see how the communication
            flows, what are the expectations, and then move to the issues to
            find relevant tasks. Overcommunicate, do your best, and you will be
            all set!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">What is Sloth Point?</h2>
          <p>
            You should think about the Sloth Point in the same way you think
            about rating or experience in games. There is no other value in
            Sloth Points, at least now.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            Why should I do streaks?
          </h2>
          <p>
            Streak completion grants you bonus Sloth Points, and certain streak
            milestones grant you a new Sloth rank and a lifetime bonus
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            What is a lifetime bonus?
          </h2>
          <p>
            Once you reach certain milestones in your weekly and monthly
            streaks, you get a new Sloth rank and a lifetime bonus to the Sloth
            Points you earn. Each streak milestone grants you a 5% bonus. If you
            are curious about the details - for example, what are these
            milestones - you can always visit our source code!
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            I am tagging the bot, but the maintainer doesn&apos;t score me. What
            should I do?
          </h2>
          <p>
            Please note that Race participation is voluntary both for
            maintainers and contributors. The project is completely non-profit,
            so there are no contract or monetary obligations for anybody here.
            However, we&apos;re constantly monitoring the situation and have
            connections with maintainers, so in case of total ignorance or
            systematic unfair scoring please contact us
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-1">
            What are the scoring criteria?
          </h2>
          <p>
            We put all the power to decide how to score the particular pull
            request in the maintainer&apos;s hands. To have a fair competition
            between repositories, we propose the following criteria:
          </p>
          <ul className="list-disc px-5 mt-2">
            <li>0/exclude - comma fix, trivial with no added value</li>
            <li>1 - small non-priority feature</li>
            <li>2 - medium non-priority feature, small bug-fix</li>
            <li>3 - small prioritized feature, bug-fix, major improvement</li>
            <li>
              5 - medium prioritized feature, small security vulnerability fix,
              a time-consuming trivial task
            </li>
            <li>8 - critical feature, medium vulnerability fix</li>
            <li>
              13 - significant vulnerability fix, game-changer contribution
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
