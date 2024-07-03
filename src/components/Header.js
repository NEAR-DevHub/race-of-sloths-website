"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Navigation } from "./Navigation";
import { signIn, useSession } from "next-auth/react";
import { BookOpen, House, Ranking, User } from "@phosphor-icons/react";
import { GithubButton } from "./ui";

const Hero = () => (
  <>
    <article className="md:flex hidden gap-10 justify-between items-center">
      <section className="flex flex-col gap-[24px] pl-24">
        <p className="text-_green">Open source, gamified</p>
        <h1 className="text-4xl">
          A fun way to contribute
          <br />
          to open source
        </h1>
        <p>Contribute, get recognized, and boost your profile</p>
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
    <article className="md:hidden flex flex-col gap-10 justify-between items-center">
      <section>
        <Image
          src={"/images/hero.svg"}
          height={224}
          width={600}
          alt={"Sloth image"}
        />
      </section>
      <section className="flex flex-col gap-[24px] px-[16px] justify-start w-full">
        <p className="text-_green">Open source, gamified</p>
        <h1 className="text-4xl">
          A fun way to contribute
          <br />
          to open source
        </h1>
        <p>Contribute, get recognized, and boost your profile</p>
      </section>
    </article>
  </>
);

export const Header = () => {
  const page = usePathname();
  const { data: githubUser } = useSession();

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-gray-800 border-b py-3 xl:px-0 px-4">
        <Link href="/">
          <Image
            src={"/images/logo-header.svg"}
            height={62}
            width={160}
            alt={"Logo"}
          />
        </Link>
        <div className="md:flex hidden">
          <Navigation
            links={[
              { title: "Home", href: "/" },
              { title: "Leaderboard", href: "/leaderboard" },
              { title: "Projects", href: "/projects" },
            ]}
          />
        </div>
        <div className="md:flex hidden">
          {githubUser ? (
            <Link href={`/profile/${githubUser.user.login}`}>
              <img
                className="rounded-full w-[40px] h-[40px]"
                src={githubUser.user.image}
              />
            </Link>
          ) : (
            <GithubButton
              title={"Continue with GitHub"}
              onClick={() => signIn("github")}
            />
          )}
        </div>
      </div>

      {page === "/" && (
        <section className="flex w-full flex-col py-12">
          <Hero />
        </section>
      )}

      <div className="md:hidden flex">
        <Navigation
          mobile={true}
          links={[
            { title: "Home", href: "/", icon: <House size={28} /> },
            {
              title: "Leaderboard",
              href: "/leaderboard",
              icon: <Ranking size={28} />,
            },
            {
              title: "Projects",
              href: "/projects",
              icon: <BookOpen size={28} />,
            },
            {
              title: "Profile",
              href: `/profile/${githubUser?.user?.login}`,
              icon: <User size={28} />,
            },
          ]}
        />
      </div>
    </>
  );
};
