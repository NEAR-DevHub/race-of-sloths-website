export const metadata = {
  title: "Race of Sloths | About",
  description: "About Race of Sloths",
};

export default function ToS() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl">About</h2>
      <div className="flex flex-col gap-3">
        <p>Race of Sloths - gamified open-source contributions.</p>

        <p>
          Race of Sloths story is rooted in the back of the minds of the people
          behind it and originated from the first days of playing with
          open-source software in the early 2000s, but let’s cut it to the race
          (pun intended) and say that we started actively working on it on April
          19th, 2024 as part of NEAR DevHub initiative of the idea of bringing
          more developers to the NEAR ecosystem. Vlad Frolov proposed the
          initial design of a gamified open-source contributions project which
          did not have a proper name at that time but had a very clear goal, how
          the success could look like, why it should work, and why it could
          fail.
        </p>

        <p>
          Long story short, on April 25th, we already had a great team of 7
          superhumans working on Race of Sloths naming, visual design,
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
          @race-of-sloths is a friendly GitHub bot that you, as a contributor,
          can mention in your pull requests on GitHub and start collecting
          Sloths Points immediately and keep your streaks continuous.
        </p>
        <p>
          We’d like to keep it all friendly and fair, so we are starting small
          with only several dozen projects for which we had support from the
          maintainers.We’d like to expand the list with the open - source
          packages that helped us to develop NEAR, and then expand it further
          with the most influential open - source packages overall.
        </p>

        <p>
          With the growing number of contributors and projects, we will
          introduce thematic quests for various ecosystems(NEAR, Rust, JS,
          Python, and more), so you can join the camps.The open - source is not
          about competition, at the end of the day it is about collaboration, so
          let’s race together!
        </p>

        <p>Yours, Race of Sloths Team</p>
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
