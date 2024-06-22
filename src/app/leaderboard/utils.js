const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const preparedData = (data, period) =>
  data.map((item, index) => {
    return {
      place: { value: index + 1 },
      name: {
        image: item.user.image,
        value: item.user.name ?? item.user.login,
        href: `profile/${item.user.login}`,
      },
      rating: { value: item.rating },
      prs: { value: item.merged_prs },
      streak: {
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
      value: data.indexOf(item) === -1 ? null : data.indexOf(item) + 1,
    },
    name: {
      image: githubUser.user.image,
      value: item?.user?.name ?? githubUser.user.login,
      href: `profile/${githubUser.user.login}`,
    },
    rating: { value: item?.rating },
    prs: { value: item?.merged_prs },
    streak: {
      value:
        period === "all time" ? item?.streak?.longest : item?.streak?.current,
      icon: "/images/fire2.svg",
    },
  };
};

export const headers = ["Place", "Name", "Rating", "Pull Requests", "Streak"];
export const periods = [`${month < 10 ? 0 : ""}${month}${year}`, "all-time"];
