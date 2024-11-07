import HallOfFame from "./HallOfFame";

export const metadata = {
    title: "Race of Sloths | Hall of Fame",
    description: "Race of Sloths Hall of Fame",
};

const apiUrl = process.env.API_URL;

export default function HallOfFamePage() {
    return <HallOfFame apiUrl={apiUrl} />;
}
