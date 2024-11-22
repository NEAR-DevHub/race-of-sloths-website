"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export const Hero = () => {
  const page = usePathname();

  return (
    <>
      {page === "/" && (
        <section className="flex w-full flex-col">
          <article className="md:flex hidden gap-10 justify-between">
            <section className="md:py-12 flex items-center ">
              <div className="flex flex-col gap-[24px] w-full">
                <p className="text-_green">Open source, gamified</p>
                <h1 className="text-4xl">
                  A fun way to contribute
                  <br />
                  to open source
                </h1>
                <p>Contribute, get recognized, and boost your profile</p>
              </div>
              <div className="flex">
                <Image
                  className="w-[600px] md:w-[850px] h-auto"
                  src={"/images/hero-logo.svg"}
                  height={0}
                  width={0}
                  alt={"Sloth image"}
                />
              </div>
            </section>
          </article>
          <article className="md:hidden flex flex-col gap-10 justify-between items-center">
            <section className="p-10">
              <Image
                src={"/images/hero-logo.svg"}
                height={600}
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
