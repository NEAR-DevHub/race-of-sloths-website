import localFont from "next/font/local";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import AuthProvider from "./auth-provider";
import "./globals.css";

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
  title: "Rsce of Sloths",
  description: "TBD",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={font.className}>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
