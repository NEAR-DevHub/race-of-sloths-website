import Profile from "./Profile";

const apiUrl = process.env.API_URL;
const badgeUrl = process.env.BADGE_URL;

export async function generateMetadata({ params }) {
  const { login } = await params;

  return {
    title: `Race of Sloths | ${login}`,
    description: "Supercharge your open source project with Race of Sloths",
    openGraph: {
      title: `Race of Sloths | ${login}`,
      description: "Supercharge your open source project with Race of Sloths",
      images: [
        {
          url: `${badgeUrl}/${login}?type=meta`,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Race of Sloths | ${login}`,
      description: "Supercharge your open source project with Race of Sloths",
      images: [
        {
          url: `${badgeUrl}/${login}?type=meta`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default function ProfilePage() {
  return <Profile apiUrl={apiUrl} badgeUrl={badgeUrl} />;
}
