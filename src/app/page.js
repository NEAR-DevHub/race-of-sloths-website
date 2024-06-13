import { Footer, Header } from "@/components";
import Image from "next/image";

const Hero = () => (
  <article className="flex gap-10 justify-between items-center">
    <section className="flex flex-col gap-[24px] pl-24">
      <p className="text-_green">Supercharge your open source project</p>
      <h1 className="text-4xl">
        Engage your
        <br />
        open source community
      </h1>
      <p>
        Gamify developers' daily routine with friendly competition managed by
        GitHub bot
      </p>
    </section>
    <section>
      <Image
        src={"/images/hero.svg"}
        height={324}
        width={600}
        alt={"Sloth image"}
      />
    </section>
  </article>
);

const HowItWorks = () => {
  const items = [
    {
      image: "/images/bot1.svg",
      title: "1. Include command",
      description: "Contributor tags @race-of-sloths on the pull request",
    },
    {
      image: "/images/bot2.svg",
      image2: "/images/firework-sm.svg",
      title: "2. Bot Response",
      description:
        "Bot responds with a confirmation with additional info in details",
    },
    {
      image: "/images/bot3.svg",
      title: "3. Maintainer score command",
      description:
        "Maintainer responds with a fibonnaci score of [0,1,2,3,5,8,13]",
    },
    {
      image: "/images/bot4.svg",
      title: "4. Bot Response",
      description:
        "Bot responds with a confirmation with additional info in details",
    },
    {
      image: "/images/bot5.svg",
      title: "Final",
      description:
        "After 24 hours from the merge, the bot finalizes score and updates the leaderboard",
    },
  ];

  const HowItWorksItems = ({ title, description, image, image2 }) => (
    <section className="flex justify-between items-center gap-5">
      <div className="w-[380px] flex flex-col gap-2">
        <b>{title}</b>
        <p>{description}</p>
      </div>
      <div className="relative">
        <div className="absolute w-[1px] h-full bg-[#3d3d3d] left-6 z-10" />
        <div className="py-12 relative z-20">
          <Image src={image} height={267} width={518} alt={title} />
          {image2 && (
            <div className="absolute -right-12 top-0 z-30">
              <Image src={image2} height={114} width={97} alt="firework" />
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <article className="flex flex-col">
      <h1 className="text-3xl">How it works</h1>
      <div className="flex flex-col relative">
        {items.map((item, index) => (
          <HowItWorksItems
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            image2={item.image2}
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
        title: "Valueble Contriblution",
        description:
          "Earn +10 rating points per each of your score point earned by submitting valuable pull requests",
        image: "/images/rating1.svg",
      },
      {
        title: "Weekly streak",
        description:
          "Keep your weekly streak with at least one contribution to receive a bonus at the end of the week",
        image: "/images/rating2.svg",
      },
    ],
    [
      {
        title: "Monthly streak",
        description:
          "Keep your monthly streak of high-valuable pull request (scored 8 or above) to receive additional bonus at the end of the month",
        image: "/images/rating3.svg",
      },
      {
        title: "Lifetime bonus",
        description:
          "Keep rocking with your streaks to receive a lifetime bonus to your rating",
        image: "/images/rating4.png",
      },
    ],
  ];

  return (
    <article className="flex flex-col gap-[40px] w-full">
      <h1 className="text-3xl">
        Sreaks <span className="text-_red">it</span> Rating
      </h1>
      {items.map((row, i) => (
        <div key={i} className="flex justify-between gap-[64px]">
          {row.map((item, j) => (
            <div index={`${i}${j}`} className="flex gap-4">
              <Image
                src={item.image}
                height={120}
                width={120}
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

const Leaderboard = () => (
  <article className="flex ">
    <h1 className="text-3xl">Leaderboard</h1>
  </article>
);
const OurMission = () => (
  <article className="flex flex-row gap-[64px] justify-between items-center">
    <section className="flex flex-col gap-[16px]">
      <h1 className="text-3xl">Our mission</h1>
      <p>
        We are developers and we want to bring fun and profit to the
        open-source. The open-source software movement leads the world
        innovation and we want to bring more contributors to the space. There
        are plenty of open issues in the open-source projects, but how to make
        it fun? Join Sloths community to collect race points in weekly quests
        while contributing to the open-source projects. The Race of Sloths
        originated from NEAR ecosystem, so we want to start with the projects
        that helped to build NEAR and expand it from there."
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
      Have a fun <span className="text-_blue">&</span> Contribute
    </h1>
    <div className="flex gap-2">
      <h2 className="text-2xl text-center">Pick the Project</h2>
      <Image
        src="/images/have-a-fun.svg"
        height={29}
        width={82}
        alt="Pick the Project"
      />
    </div>
  </article>
);

export default function Home() {
  return (
    <main className="w-full flex items-center justify-center">
      <article className="w-[1277px] max-w-[1277px] flex  flex-col items-center justify-center">
        <Header />
        <section className="flex w-full flex-col py-12">
          <Hero />
        </section>
        <section className="flex w-full flex-col gap-[80px] py-12 px-24">
          <HowItWorks />
          <StreaksRating />
          <Leaderboard />
          <OurMission />
          <HaveFun />
          <Footer />
        </section>
      </article>
    </main>
  );
}
