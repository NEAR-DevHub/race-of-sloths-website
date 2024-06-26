import Profile from "./Profile";

const apiUrl = process.env.API_URL;
const badgeUrl = process.env.BADGE_URL;

export default function ProfilePage() {
  return <Profile apiUrl={apiUrl} badgeUrl={badgeUrl} />;
}
