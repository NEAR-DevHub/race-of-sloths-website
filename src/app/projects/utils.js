export const preparedData = (data) =>
  data.map((project) => {
    return {
      project: {
        image: project.organization.image,
        value: project.name,
        value2: `${project.organization.name} /`,
        href: `https://github.com/${project.organization.login}/${project.name}`,
      },
      language: { value: project.repo_language },
      contributor: {
        image: null,
        value: project.contributor_of_the_month.login,
        href: `profile/${project.contributor_of_the_month.login}`,
      },
      openIssues: { value: project.open_issues },
      prs: { value: project.contributions_with_sloth },
    };
  });

export const headers = [
  "Repository",
  "Language",
  "Contributor",
  "Open Issues",
  "Sloths PRs",
];
