const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const periods = [`${month < 10 ? 0 : ""}${month}${year}`, "all-time"];

export const preparedData = (data, period) =>
  data.map((item, index) => {
    return {
      place: { className: "md:w-24 w-24", value: index + 1 },
      name: {
        className: "md:flex-1 w-64 min-w-64",
        image: item.user.image,
        value: item.user.name ?? item.user.login,
        href: `profile/${item.user.login}`,
      },
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
    place: {
      className: "md:w-24 w-24",
      value: data.indexOf(item) === -1 ? null : data.indexOf(item) + 1,
    },
    name: {
      className: "md:flex-1 w-64 min-w-64",
      image: githubUser.user.image,
      value: item?.user?.name ?? githubUser.user.login,
      href: `profile/${githubUser.user.login}`,
    },
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
  { value: "Place", className: "md:w-24 w-24" },
  { value: "Name", className: "md:flex-1 w-64 min-w-64" },
  { value: "Rating", className: "md:w-40 w-32" },
  { value: "Pull Requests", className: "md:w-40 w-32" },
  { value: "Streak", className: "md:w-40 w-32" },
];