function formatDate(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(date);

  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export const daysLeft = (start, end) => {
  const startDate = new Date(start).getTime();
  const endDate = new Date(end).getTime();
  const nowDate = new Date().getTime();

  const diff = (start, end) => Math.round((end - start) / (1000 * 3600 * 24));

  return {
    max: diff(startDate, endDate),
    current: diff(nowDate, endDate),
  };
};

export const preparedData = (data) =>
  data.map((contribution) => {
    return {
      repository: {
        className: "md:flex-1 w-64 min-w-64",
        image: contribution.organization.image,
        value: contribution.repository,
        value2: `${contribution.organization.name} /`,
        href: `https://github.com/${contribution.organization.login}/${contribution.repository}`,
      },
      date: {
        className: "md:flex-1 w-44 min-w-44",
        value: formatDate(contribution.created_at),
      },
      score: {
        className: "md:flex-1 w-44 min-w-44",
        value: contribution.score,
      },
      rating: {
        className: "md:flex-1 w-44 min-w-44",
        value: contribution.total_rating,
      },
    };
  });

export const headers = [
  { value: "Repository", className: "md:flex-1 w-64 min-w-64" },
  { value: "Date", className: "md:flex-1 w-44 min-w-44" },
  { value: "Score", className: "md:flex-1 w-44 min-w-44" },
  { value: "Rating", className: "md:flex-1 w-44 min-w-44" },
];