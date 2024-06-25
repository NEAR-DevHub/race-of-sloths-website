export const preparedData = (data) =>
  data.map((project) => {
    return {
      project: {
        className: "md:flex-1 w-64 min-w-64",
        value: (
          <div className="flex gap-3 items-center">
            <img
              className="rounded-lg w-[34px] h-[34px] border-[1px] border-[#313131]"
              src={project.organization.image}
              alt={project.organization.image}
            />
            <div>
              <div className="text-_secondary text-xs">
                {project.organization.name} /
              </div>
              <div>{project.name}</div>
            </div>
          </div>
        ),
        href: `https://github.com/${project.organization.login}/${project.name}`,
        sortBy: project.name,
      },
      contributor: {
        className: "md:flex-1 w-44 min-w-44",
        value: project.contributor_of_the_month?.login,
        href: `profile/${project.contributor_of_the_month?.login}`,
      },
      language: { className: "md:w-40 w-32", value: project.repo_language },
      openIssues: { className: "md:w-40 w-32", value: project.open_issues },
      prs: {
        className: "md:w-40 w-32",
        value: project.projects_with_sloth,
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
