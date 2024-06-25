const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const periods = [`${month < 10 ? 0 : ""}${month}${year}`, "all-time"];

export const preparedData = (data, period) =>
  data.map((item, index) => {
    return {
      name: {
        className: "md:flex-1 w-56 min-w-56",
        image: item.user.image,
        value: item.user.name ?? item.user.login,
        href: `profile/${item.user.login}`,
      },
      score: { className: "md:w-40 w-32", value: item.score },
      rating: { className: "md:w-40 w-32", value: item.rating },
      prs: { className: "md:w-40 w-32", value: item.merged_prs },
      streak: {
        className: "md:w-40 w-32",
        value:
          period === "all time" ? item.streak.longest : item.streak.current,
        icon: "/images/fire2.svg",
      },
    };
  });

export const preparedPinned = (data, period, githubUser) => {
  if (!githubUser) return {};

  const item = data.find((d) => d.user.login === githubUser.user.login);

  return {
    name: {
      className: "md:flex-1 w-56 min-w-56",
      image: githubUser.user.image,
      value: item?.user?.name ?? githubUser.user.login,
      href: `profile/${githubUser.user.login}`,
    },
    score: { className: "md:w-40 w-32", value: item?.score },
    rating: { className: "md:w-40 w-32", value: item?.rating },
    prs: { className: "md:w-40 w-32", value: item?.merged_prs },
    streak: {
      className: "md:w-40 w-32",
      value:
        period === "all time" ? item?.streak?.longest : item?.streak?.current,
      icon: "/images/fire2.svg",
    },
  };
};

export const headers = [
  { value: "Name", className: "md:flex-1 w-56 min-w-56" },
  { value: "Score", className: "md:w-40 w-32" },
  { value: "Rating", className: "md:w-40 w-32" },
  { value: "Pull Requests", className: "md:w-40 w-32" },
  { value: "Streak", className: "md:w-40 w-32" },
];