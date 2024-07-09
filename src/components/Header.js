"use client";

import Link from "next/link";
import Image from "next/image";
import { Navigation } from "./Navigation";
import { signIn, useSession } from "next-auth/react";
import { BookOpen, House, Ranking, User } from "@phosphor-icons/react";
import { GithubButton } from "./ui";

export const Header = () => {
  const { data: githubUser } = useSession();

  return (
    <>
      <div className="flex w-full items-center justify-between border-b-gray-800 border-b py-[8px] md:px-[24px] px-[16px]">
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
