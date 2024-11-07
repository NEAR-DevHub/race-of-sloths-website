import Image from "next/image";
import HallOfFameLeaderboard from "./HallOfFameLeaderboard";
import HaveFun from "@/components/HaveFun";
import Link from "next/link";


function Hero() {
    return (
        <section className="flex w-full flex-col">
            <article className="md:flex hidden gap-10 justify-between">
                <section className="md:py-12 flex items-center ">
                    <div className="flex flex-col gap-[24px] w-full">
                        <h1 className="text-4xl">
                            Meet the elite
                            <br />
                            sloth squad
                        </h1>
                        <p>Hall of Fame is the place where passion for open-source
                            <br />
                            development and contribution consistency honours
                            <br />
                            Sloths with a nitro boost in the Race.</p>
                        <p className="text-_yellow">Keep your streaks up and build your legacy!</p>
                    </div>
                    <div className="flex">
                        <Image
                            className="w-[600px] xl:w-[850px] h-auto"
                            src={"/images/hof-hero.svg"}
                            height={0}
                            width={0}
                            alt={"Sloth image"}
                        />
                    </div>
                </section>
            </article >
            <article className="md:hidden flex flex-col gap-10 justify-between items-center">
                <section className="p-10">
                    <Image
                        src={"/images/hof-hero.svg"}
                        height={600}
                        width={600}
                        alt={"Sloth image"}
                    />
                </section>
                <section className="flex flex-col gap-[24px] px-[16px] justify-start w-full">
                    <h1 className="text-4xl">
                        Meet the elite
                        <br />
                        sloth squad
                    </h1>
                    <p>Hall of Fame is the place where passion for open-source
                        development and contribution consistency honours
                        Sloths with a nitro boost in the Race.</p>
                    <p className="text-_yellow">Keep your streaks up and build your legacy!</p>
                </section>
            </article>
        </section >
    );
}

function Line() {
    return <hr className="w-full h-0 border-_shadow" />
}

function HowItWorks() {
    return <section className="flex w-full flex-col gap-6">
        <h1 className="text-4xl">How to get into the <span className="text-_yellow">Hall of Fame</span></h1>
        <p>Complete the following quests to gain additional ranks <br /> in the Sloth Hall of Fame:</p>
        <Image className="w-full h-auto" src={"/images/hof-howto1.svg"} height={600} width={600} alt={"How it works"} />
        <Image className="w-full h-auto" src={"/images/hof-howto2.svg"} height={600} width={600} alt={"How it works"} />


    </section>
}

function Questions() {
    return <Link className="flex justify-center " href="/faq">
        <h2 className="text-lg font-semibold bg-white rounded-full text-_main px-6 py-3">GOT QUESTIONS? ASK US!</h2>
    </Link>
}

export default function HallOfFame({ apiUrl }) {
    return (
        <>
            <section className="flex w-full flex-col gap-[80px]">
                <Hero />
                <Line />
                <HowItWorks />
                <Line />
                <HallOfFameLeaderboard apiUrl={apiUrl} />
                <Questions />
                <HaveFun />

            </section>
        </>
    );
}
