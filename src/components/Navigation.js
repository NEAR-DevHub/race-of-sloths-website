"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = ({ links, mobile }) => {
  const page = usePathname();

  return (
    <>
      {mobile ? (
        <nav className="flex bg-_main h-[70px] border-t-[#313131] border-t-[1px] w-full fixed bottom-0 z-10 items-center justify-around px-3">
          {links.map((link, index) => (
            <Link
              key={index}
              className={`flex flex-col items-center px-5 ${
                page === link.href ? " text-_green " : "text-white"
              }`}
              href={link.href}
            >
              {link.icon}
              <small>{link.title}</small>
            </Link>
          ))}
        </nav>
      ) : (
        <nav className="flex w-full gap-4 items-center justify-center">
          {links.map((link, index) => (
            <Link
              key={index}
              className="rounded-full p-2 px-5 hover:bg-[#2f302d] hover:text-white"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
};
