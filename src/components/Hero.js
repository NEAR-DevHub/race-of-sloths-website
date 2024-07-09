"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export const Hero = () => {
  const page = usePathname();

  return (
    <>
      {page === "/" && (
        <section className="flex w-full flex-col">
          <article className="md:flex hidden gap-10 justify-end">
            <section className="md:pl-24 md:py-12 pl-[16px] flex items-center justify-end w-[calc(50%+638px)]">
              <div className="flex flex-col gap-[24px] w-full">
                <p className="text-_green">Open source, gamified</p>
                <h1 className="text-4xl">
                  A fun way to contribute
                  <br />
                  to open source
                </h1>
                <p>Contribute, get recognized, and boost your profile</p>
              </div>
              <div className="flex w-1/2 justify-end ">
                <Image
                  src={"/images/hero.svg"}
                  height={324}
                  width={600}
                  alt={"Sloth image"}
                />
              </div>
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
        </section>
      )}
    </>
  );
};
