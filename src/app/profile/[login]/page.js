import Profile from "./Profile";

const apiUrl = process.env.API_URL;
const badgeUrl = process.env.BADGE_URL;

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Race of Sloths | ${params.login}`,
    description: "Supercharge your open source project with Race of Sloths",
    openGraph: {
      title: `Race of Sloths | ${params.login}`,
      description: "Supercharge your open source project with Race of Sloths",
    },
    twitter: {
      card: "summary_large_image",
      title: `Race of Sloths | ${params.login}`,
      description: "Supercharge your open source project with Race of Sloths",
    },
  };
}

export default function ProfilePage() {
  return <Profile apiUrl={apiUrl} badgeUrl={badgeUrl} />;
}
