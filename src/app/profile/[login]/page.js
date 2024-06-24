import { apiUrl } from "@/app/api/constants";
import Profile from "./Profile";

export async function generateMetadata({ params, searchParams }, parent) {
  const resp = await fetch(`${apiUrl}/users/${params.login}/badge`);
  const data = await resp.text();

  return {
    title: `Race of Sloths | ${params.login}`,
    description: "Supercharge your open source project with Race of Sloths",
    twitter: {
      card: "summary",
      title: `Race of Sloths | ${params.login}`,
      image: data,
      description: "Supercharge your open source project with Race of Sloths",
    },
  };
}

export default function ProfilePage() {
  return <Profile />;
}
