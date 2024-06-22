import Image from "next/image";
import Link from "next/link";

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
  return (
    <footer className="flex w-full pb-12 md:px-24 p-[16px]">
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
            { title: "My Profile", href: "/profile" },
          ]}
        />
        <FooterItems
          links={[
            { title: "About", href: "/about" },
            { title: "Contacts", href: "/contacts" },
            { title: "FAQ", href: "/faq" },
          ]}
        />
        <FooterItems
          links={[
            { title: "Privacy policy", href: "/policy" },
            { title: "Cookie statement", href: "/cookies" },
          ]}
        />
      </section>
    </footer>
  );
};
