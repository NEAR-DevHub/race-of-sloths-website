export const preparedData = (data) =>
  data.map((project) => {
    return {
      project: {
        className: "md:flex-1 w-64 min-w-64",
        image: project.organization.image,
        value: project.name,
        value2: `${project.organization.name} /`,
        href: `https://github.com/${project.organization.login}/${project.name}`,
      },
      contributor: {
        className: "md:flex-1 w-44 min-w-44",
        image: null,
        value: project.contributor_of_the_month?.login,
        href: `profile/${project.contributor_of_the_month?.login}`,
      },
      language: { className: "md:w-40 w-32", value: project.repo_language },
      openIssues: { className: "md:w-40 w-32", value: project.open_issues },
      prs: {
        className: "md:w-40 w-32",
        value: project.contributions_with_sloth,
      },
    };
  });

export const headers = [
  { value: "Repository", className: "md:flex-1 w-64 min-w-64" },
  { value: "Contributor", className: "md:flex-1 w-44 min-w-44" },
  { value: "Language", className: "md:w-40 w-32" },
  { value: "Open Issues", className: "md:w-40 w-32" },
  { value: "Sloths PRs", className: "md:w-40 w-32" },
];
