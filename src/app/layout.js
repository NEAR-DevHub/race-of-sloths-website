import localFont from "next/font/local";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "./auth-provider";
import "./globals.css";
import { Footer, Header } from "@/components";
import { Hero } from "@/components/Hero";

const font = localFont({
  src: [
    {
      path: "../../public/fonts/AeonikFono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/AeonikFono-Regular.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/AeonikFono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Race of Sloths",
  description: "Open source, gamified",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider session={session}>
          <main className="w-full h-full flex flex-col items-center justify-center">
            <Header />
            <Hero />
            <article className="w-full xl:w-[1280px] h-full flex flex-col items-center justify-between gap-[56px]">
              <div className="flex h-full w-full flex-col justify-between">
                <section className="flex w-full flex-col gap-[24px] md:px-24 md:py-12 pt-4 px-[16px]">
                  {children}
                </section>
                <Footer />
              </div>
            </article>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
