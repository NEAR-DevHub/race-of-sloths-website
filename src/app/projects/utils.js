export const preparedData = (data) =>
  data.map((project) => {
    return {
      project: {
        className: "md:flex-1 w-52 min-w-52",
        value: (
          <div className="flex gap-3 items-center">
            <img
              className="rounded-lg w-[34px] h-[34px] border-[1px] border-[#313131]"
              src={project.organization.image}
              alt={project.organization.image}
            />
            <div>
              <div className="text-_secondary text-xs">
                {project.organization.name ?? project.organization.login} /
              </div>
              <div>{project.name}</div>
            </div>
          </div>
        ),
        href: `https://github.com/${project.organization.login}/${project.name}`,
        sortBy: project.name,
      },
      contributor: {
        className: "md:flex-1 w-64 min-w-64",
        value: (
          <>
            {project.contributor_of_the_month && (
              <div className="flex gap-3 items-center">
                <img
                  className="rounded-full w-[34px] h-[34px]"
                  src={project.contributor_of_the_month.image}
                  alt={project.contributor_of_the_month.image}
                />
                <div>{project.contributor_of_the_month.login}</div>
              </div>
            )}
          </>
        ),
        href: `profile/${project.contributor_of_the_month?.login}`,
        sortBy: project.contributor_of_the_month?.login ?? " ",
      },
      language: { className: "w-40 min-w-40", value: project.repo_language },
      openIssues: { className: "w-40 min-w-40", value: project.open_issues },
      prs: {
        className: "w-40 min-w-40",
        value: project.contributions_with_sloth,
      },
    };
  });

export const headers = [
  { value: "Repository", className: "md:flex-1 w-52 min-w-52" },
  { value: "Contributor of the Month", className: "md:flex-1 w-64 min-w-64" },
  { value: "Language", className: "w-40 min-w-40" },
  { value: "Open Issues", className: "w-40 min-w-40" },
  { value: "Sloths PRs", className: "w-40 min-w-40" },
];
