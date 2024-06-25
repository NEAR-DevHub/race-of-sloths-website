import Projects from "./Projects";

export const metadata = {
  title: "Race of Sloths | Projects",
  description: "Race of Sloths Projects",
};

const apiUrl = process.env.API_URL;

export default function ProjectsPage() {
  return <Projects apiUrl={apiUrl} />;
}
