"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { signIn, useSession } from "next-auth/react";
import { BookOpen, House, Ranking, User } from "@phosphor-icons/react";
import { GithubButton } from "./ui";

const NewsTicker = () => {
  const news = [
    "THANK YOU MAINTAINERS! 🎉 WE'RE REWARDING YOUR DEDICATION WITH 25 SLOTH POINTS FOR EACH SCORED PULL REQUEST. YOUR HARD WORK MAKES OPEN SOURCE AMAZING!",
  ];

  return (
    <div className="bg-_yellow text-_main font-bold overflow-hidden h-10">
      <div
        className="whitespace-nowrap translate-x-full flex items-center h-full"
        style={{
          animation: `ticker 30s linear infinite`,
        }}
      >
        {news.map((item, index) => (
          <span key={index} className="mx-4 inline-block">{item}</span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-${news.length * 100}%); }
        }
      `}</style>
    </div>
  );
};

export const Header = () => {
  const { data: githubUser } = useSession();

  return (
    <>
      <div className="w-full sticky top-0 z-50">
        <div className="flex items-center justify-between bg-_main border-b-[#313131] border-b py-[8px] md:px-[24px] px-[16px]">
          <Link className="md:w-1/4 w-full" href="/">
            <Image
              src={"/images/logo-header.svg"}
              height={32}
              width={154}
              alt={"Logo"}
            />
          </Link>
          <div className="md:flex hidden w-1/2">
            <Navigation
              links={[
                { title: "Home", href: "/" },
                { title: "Leaderboard", href: "/leaderboard" },
                { title: "Hall of Fame", href: "/hall-of-fame" },
                { title: "Projects", href: "/projects" },
              ]}
            />
          </div>
          <div className="md:flex hidden w-1/4 justify-end ">
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
        <Link href="/latest-news" target="_blank">
          <NewsTicker />
        </Link>
      </div>


      <div className="md:hidden flex w-full">
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
              title: "Hall of Fame",
              href: "/hall-of-fame",
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
