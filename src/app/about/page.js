export const metadata = {
  title: "Race of Sloths | About",
  description: "About Race of Sloths",
};

export default function ToS() {
  return (
    <div className="flex w-full flex-col gap-5 items-center">
      <div className="w-full flex flex-col gap-5 md:w-[600px] tracking-wide leading-7">
        <h1 className="text-4xl">About</h1>
        <p className="uppercase font-semibold tracking-wide">
          <b>Race of Sloths</b> &mdash; gamified open-source contributions.
        </p>

        <p>
          Race of Sloths story is rooted in the back of the minds of the people
          behind it since the first days of playing with open-source software
          back in 2000s.
        </p>
        <p>
          Let&apos;s cut it to the race (pun intended) and say that we started
          actively working on it on April 19th, 2024 as part of{" "}
          <a href="https://devhub.near.page" className="underline text-_green">
            NEAR DevHub
          </a>{" "}
          initiative to bring more developers to the{" "}
          <a href="https://near.org" className="underline text-_green">
            NEAR
          </a>{" "}
          ecosystem. Vlad Frolov proposed the initial design of a gamified
          open-source contributions project which did not have a proper name at
          that time but had a very clear goal, how the success could look like,
          why it should work, and why it could fail.
        </p>

        <h2 className="text-xl font-semibold mb-1">Get Set, Go!</h2>
        <p>
          Long story short, on April 25th, we already had a great team of 7
          superhumans working on <b>Race of Sloths</b> naming, visual design,
          implementation, and a ton of other tiny details! Fast-forward to July
          8th, we are live in production!
        </p>

        <p>
          As it is already mentioned in the beginning, you can see that it takes
          time (20+ years we may say), but once we get there, we win the race!
          How about calling it the Race of Sloths? Do you hear a funny irony
          towards the open-source world? Well, that was the idea behind the
          naming.
        </p>

        <p>
          <a
            href="https://github.com/race-of-sloths"
            className="underline text-_green"
          >
            <b>@race-of-sloths</b>
          </a>{" "}
          is a friendly GitHub bot that you, as a contributor, can mention in
          pull requests on GitHub and start collecting Sloths Points immediately
          and keep your streaks continuous.
        </p>

        <h2 className="text-xl font-semibold mb-1">What is Next?</h2>

        <p>
          We&apos;d like to keep it all friendly and fair, so we are starting
          small with only several dozen projects for which we had support from
          the maintainers. We&apos;d like to expand the list with the
          open-source packages that helped us to develop NEAR, and then expand
          it further with the most influential open-source packages overall.
        </p>

        <p>
          With the growing number of contributors and projects, we will
          introduce thematic quests for various ecosystems (NEAR, Rust, JS,
          Python, and more), so you can join the camps. The open-source is not
          about competition, at the end of the day it is about collaboration, so
          let&apos;s race together!
        </p>

        <h2 className="text-xl font-semibold mb-1">
          Yours, Race of Sloths Team
        </h2>
        <p>
          <ul className="list-disc px-5">
            <li>Artur-Yurii Korchynskyi</li>
            <li>Andrew Saichuk</li>
            <li>Sasha Pais</li>
            <li>Volodymyr Chabak</li>
            <li>Gleb Palienko</li>
            <li>Alex Botezatu</li>
            <li>Vlad Frolov</li>
          </ul>
        </p>
      </div>
    </div>
  );
}
