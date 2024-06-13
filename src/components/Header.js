"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { GithubButton } from "./ui/GithubButton";
import Image from "next/image";

const NavigationLinks = ({ links }) => (
  <ul className="flex gap-4 items-center">
    {links.map((link, index) => (
      <li key={index} className="rounded-full p-2 px-5 hover:bg-[#2f302d]">
        <Link href={link.href}>{link.title}</Link>
      </li>
    ))}
  </ul>
);

export const Header = () => {
  const { data: currentUser } = useSession();

  return (
    <div className="flex w-full items-center justify-between border-b-gray-800 border-b py-2 xl:px-0 px-4">
      <Link href="/">
        <Image
          src={"/images/logo-header.svg"}
          height={62}
          width={154}
          alt={"Logo"}
        />
      </Link>
      <NavigationLinks
        links={[
          { title: "About", href: "/about" },
          { title: "Leaderboard", href: "/leaderboard" },
          { title: "Projects", href: "/projects" },
        ]}
      />
      <GithubButton currentUser={currentUser} />
    </div>
  );
};
