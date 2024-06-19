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

export const preparedData = (data) =>
  data.map((contribution) => {
    return {
      repository: {
        image: contribution.organization.image,
        value: contribution.repository,
        value2: contribution.organization.name,
      },
      date: { value: formatDate(contribution.created_at) },
      score: {
        value: contribution.score,
      },
      rating: { value: contribution.total_rating },
    };
  });

export const headers = ["Repository", "Date", "Score", "Rating"];
