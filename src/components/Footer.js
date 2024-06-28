"use client";

import {
  GithubLogo,
  TelegramLogo,
  TwitterLogo,
  XLogo,
} from "@phosphor-icons/react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterItems = ({ links }) => (
  <ul className="flex flex-col gap-2">
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>
          <span className="text-sm">{link.title}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export const Footer = () => {
  const page = usePathname();
  const { data: githubUser } = useSession();

  return (
    <footer className="flex flex-col gap-5 w-full md:px-24 px-[16px] md:pb-12 pb-28">
      <section className="flex md:flex-row flex-col w-full justify-between items-start gap-[24px]">
        <Image
          className="md:hidden block"
          src={"/images/logo-header.svg"}
          height={32}
          width={154}
          alt={"Logo"}
        />
        <Image
          className="md:block hidden"
          src={"/images/logo-footer.svg"}
          height={105}
          width={81}
          alt={"Logo footer"}
        />
        <FooterItems
          links={[
            { title: "Leaderboard", href: "/leaderboard" },
            { title: "Projects", href: "/projects" },
            {
              title: "My Profile",
              href: `/profile/${githubUser?.user.login}`,
            },
          ]}
        />
        <FooterItems
          links={[
            { title: "About project", href: "/" },
            {
              title: "Feedback",
              href: "https://github.com/NEAR-DevHub/race-of-sloths/issues/new/choose",
            },
          ]}
        />
        <FooterItems
          links={[
            { title: "Privacy policy", href: "/policy" },
            { title: "Terms of Service", href: "/tos" },
          ]}
        />
      </section>
      <section className="flex md:flex-row w-full justify-center items-start gap-12 text-white">
        <a href="https://x.com/race_of_sloths" target="_blank">
          <XLogo size={32} />
        </a>
        <a href="https://t.me/race_of_sloths" target="_blank">
          <TelegramLogo size={32} />
        </a>
        <a href="https://github.com/race-of-sloths" target="_blank">
          <GithubLogo size={32} />
        </a>
      </section>
    </footer>
  );
};
