export const preparedData = (data) =>
  data.map((repo) => {
    return {
      repo: {
        image: repo.organization.image,
        organization: repo.organization.name,
        value: repo.name,
      },
      language: { value: repo.repo_language },
      contributor: {
        image: null,
        value: repo.contributor_of_the_month,
      },
      openIssues: { value: repo.open_issues },
      prs: { value: repo.contributions_with_sloth },
    };
  });

export const headers = [
  "Repositories",
  "Language",
  "Contributor",
  "Open Issues",
  "Sloths PRs",
];
