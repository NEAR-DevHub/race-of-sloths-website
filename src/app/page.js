import Image from "next/image";
import Link from "next/link";
import Leaderboard from "./leaderboard/page";
import CookieConsent from "@/components/CookieConsent";

const HowItWorks = () => {
  const items = [
    {
      image: {
        desktop: "/images/bot1.svg",
        mobile: "/images/bot1-m.svg",
      },
      title: "1. Tag the Bot",
      description:
        "Contributor mentions @race-of-sloths in their pull request on GitHub to join the Race",
    },
    {
      image: {
        desktop: "/images/bot2.svg",
        mobile: "/images/bot2-m.svg",
        secondary: "/images/firework-sm.svg",
      },
      title: "2. Bot Responds",
      description: "The pull request is now a part of the Race",
    },
    {
      image: {
        desktop: "/images/bot3.svg",
        mobile: "/images/bot3-m.svg",
      },
      title: "3. Maintainer Scores",
      description:
        "Repository maintainer scores the pull request using a Fibonacci scale [0, 1, 2, 3, 5, 8, 13]",
    },
    {
      image: {
        desktop: "/images/bot4.svg",
        mobile: "/images/bot4-m.svg",
      },
      title: "4. Leaderboard Updates",
      description:
        "After 24 hours from the merge, the bot finalizes the score and updates the leaderboard",
    },
  ];

  const HowItWorksItems = ({ title, description, image }) => (
    <section className="flex md:flex-row flex-col justify-between items-center gap-5">
      <div className="md:w-[380px] w-full flex flex-col gap-2">
        <b>{title}</b>
        <p>{description}</p>
      </div>
      <div className="md:relative">
        <div className="md:block hidden absolute w-[1px] h-full bg-[#3d3d3d] left-6 z-10" />
        <div className="md:block hidden py-[12px] relative z-20">
          <Image src={image.desktop} height={267} width={518} alt={title} />
          {image.secondary && (
            <div className="absolute -right-12 top-0 z-30">
              <Image
                src={image.secondary}
                height={114}
                width={97}
                alt="firework"
              />
            </div>
          )}
        </div>
        <div className="md:hidden block">
          <Image
            style={{ width: "100%", height: "auto" }}
            src={image.mobile}
            height={0}
            width={0}
            alt={title}
          />
        </div>
      </div>
    </section>
  );

  return (
    <article className="flex flex-col md:gap-0 gap-[40px]">
      <h1 className="text-3xl">How it works</h1>
      <div className="flex flex-col relative md:gap-[0] gap-[40px]">
        {items.map((item, index) => (
          <HowItWorksItems
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </article>
  );
};

const StreaksRating = () => {
  const items = [
    [
      {
        title: "Valuable Contribution",
        description:
          "Earn +10 Sloth points for each score point by submitting valuable pull requests.",
        image: "/images/rating1.svg",
      },
      {
        title: "Weekly streak",
        description:
          "Make at least one contribution each week and earn a bonus on top of your Sloth Points. Consistency is a key!",
        image: "/images/rating2.svg",
      },
    ],
    [
      {
        title: "Monthly streak",
        description:
          "Keep your monthly streak of high-valuable pull requests scored 8 or 13 to receive additional bonus at the end of the month.",
        image: "/images/rating3.svg",
      },
      {
        title: "Lifetime bonus",
        description:
          "Keep rocking with your streaks to receive a lifetime bonus to your Sloth points.",
        image: "/images/rating4.svg",
      },
    ],
  ];

  return (
    <article className="flex flex-col gap-[40px] w-full">
      <h1 className="text-3xl">
        Earn Sloth Points <span className="text-_red">&</span> Recognition
      </h1>
      {items.map((row, i) => (
        <div
          key={i}
          className="flex md:flex-row flex-col justify-between gap-[64px]"
        >
          {row.map((item, j) => (
            <div key={`${i}${j}`} className="flex gap-4 items-center">
              <Image
                src={item.image}
                height={100}
                width={100}
                alt={`rating ${i}${j}`}
              />
              <div className="flex flex-col gap-2 w-[344px]">
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </article>
  );
};

const OurMission = () => (
  <article className="flex md:flex-row flex-col gap-[32px] justify-between md:items-center">
    <section className="flex flex-col gap-[16px]">
      <h1 className="text-3xl">Our mission</h1>
      <p>
        We are developers and we want to bring fun and profit to the
        open-source. The open-source software movement leads the world
        innovation and we want to bring more contributors to the space. There
        are plenty of open issues in the open-source projects, but how to make
        it fun? Join Sloths community to collect race points in weekly quests
        while contributing to the open-source projects.
      </p>
      <p>
        The Race of Sloths originated from NEAR ecosystem, so we want to start
        with the projects that helped to build NEAR and expand it from there.
      </p>
    </section>
    <Image
      src="/images/our-mission.png"
      height={427}
      width={337}
      alt={"our mission"}
    />
  </article>
);

const HaveFun = () => (
  <article className="flex items-center flex-col gap-3">
    <h1 className="text-4xl text-center">
      Have Fun <span className="text-_blue">&</span> Contribute
    </h1>
    <Link href="/projects">
      <div className="flex gap-2">
        <h2 className="text-2xl text-center">Pick a Project</h2>
        <Image
          src="/images/have-a-fun.svg"
          height={29}
          width={82}
          alt="Pick the Project"
        />
      </div>
    </Link>
  </article>
);

export default function Home() {
  return (
    <>
      <section className="flex w-full flex-col gap-[80px]">
        <HowItWorks />
        <StreaksRating />
        <Leaderboard />
        <OurMission />
        <HaveFun />
      </section>
      <CookieConsent />
    </>
  );
}
