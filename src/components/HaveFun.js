import Link from "next/link";
import Image from "next/image";

export default function HaveFun() {
    return (
        <article className="flex items-center flex-col gap-3">
            <h1 className="text-4xl text-center">
                Have Fun <span className="text-_blue">&</span> Contribute
            </h1>
            <Link href="/projects">
                <div className="flex gap-2">
                    <h2 className="text-2xl text-center">Pick a Project</h2>
                    <Image
                        src="/images/have-a-fun.svg"
                        height={29}
                        width={82}
                        alt="Pick the Project"
                    />
                </div>
            </Link>
        </article>
    );
}
