export const metadata = {
  title: "Race of Sloths | FAQ",
  description: "Race of Sloths FAQ",
};

export default function FAQ() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl mb-1">FAQ</h2>
      <div className="flex flex-col gap-5">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Why is it called Race of Sloths?
          </h3>
          <p>
            The name is somewhat ironic. Open-source contributions can take time
            to be reviewed and released, and as such it&apos;s somewhat
            slow-paced. However, open source always prevails in the long run.
            The name was also inspired by a sloth named Flash from the Zootopia
            animated film.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Is it powered by the NEAR Protocol?
          </h3>
          <p>
            Yes, we have implemented the leaderboard and all the scoring logic
            on the NEAR Protocol. As a result, user profiles are completely
            public and we encourage developers to be creative and build their
            extensions based on the stream of reviewed contributions and
            leaderboard scores of Race of Sloths. It is completely
            permissionless and fully transparent.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">Why should I care?</h3>
          <p>
            We believe that Race of Sloths will add extra motivation and fun to
            the process of contributing to open-source projects. If you are on
            your early career path, a boosted Race of Sloths profile may give
            you an advantage in your career opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">
            How hard is it to contribute to Race of Sloths projects?
          </h3>
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
          <h3 className="text-xl font-semibold mb-1">What is Sloth Point?</h3>
          <p>
            You should think about the Sloth Point in the same way you think
            about rating or experience in games. There is no other value in
            Sloth Points, at least now.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Why should I do streaks?
          </h3>
          <p>
            Streak completion grants you bonus Sloth Points, and certain streak
            milestones grant you a new Sloth rank and a lifetime bonus
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">
            What is a lifetime bonus?
          </h3>
          <p>
            Once you reach certain milestones in your weekly and monthly
            streaks, you get a new Sloth rank and a lifetime bonus to the Sloth
            Points you earn. Each streak milestone grants you a 5% bonus. If you
            are curious about the details - for example, what are these
            milestones - you can always visit our source code!
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">
            I am tagging the bot, but the maintainer doesn&apos;t score me. What
            should I do?
          </h3>
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
          <h3 className="text-xl font-semibold mb-1">
            What are the scoring criteria?
          </h3>
          <p>
            We put all the power to decide how to score the particular pull
            request in the maintainer&apos;s hands. To have a fair competition
            between repositories, we propose the following criteria:
          </p>
        </div>
      </div>
    </div>
  );
}
