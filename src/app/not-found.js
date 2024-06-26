import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-200px)] leading-relaxed">
      <Image src="/images/404.svg" width={178} height={103} />
      <p className="text-_secondary">Sloth Not Found</p>
      <Link
        className="bg-white rounded-lg p-2 px-3 text-black font-medium"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
