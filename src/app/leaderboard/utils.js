import Image from "next/image";

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

export const periods = [`${month < 10 ? 0 : ""}${month}${year}`, "all-time"];

const preparedDataObj = (item, period) => {
  return {
    place: { className: "md:w-24 w-24", value: item.place },
    name: {
      className: "md:flex-1 w-56 min-w-56",
      value: (
        <div className="flex gap-3 items-center">
          <img
            className="rounded-full w-[32px] h-[32px]"
            src={item.user.image}
            alt={item.user.image}
          />
          <div>{item.user.name ?? item.user.login}</div>
        </div>
      ),
      href: `profile/${item.user.login}`,
      sortBy: item.user.name ?? item.user.login,
    },
    rating: { className: "md:w-40 w-32", value: item.rating },
    prs: { className: "md:w-40 w-32", value: item.merged_prs },
    streak: {
      className: "md:w-40 w-32",
      value: (
        <div className="flex gap-3">
          <Image
            width={21}
            height={21}
            src={"/images/fire2.svg"}
            alt={"fire"}
          />
          <div>
            {period === "all-time" ? item.streak.longest : item.streak.current}
          </div>
        </div>
      ),
      sortBy: period === "all-time" ? item.streak.longest : item.streak.current,
    },
  };
};

export const preparedData = (data, period) =>
  data.map((item) => preparedDataObj(item, period));

export const preparedPinned = (data, period, githubUser) => {
  if (!githubUser) return {};

  const item = data.find((d) => d.user.login === githubUser.user.login);
  if (!item) return {};

  return preparedDataObj(item, period);
};

export const headers = [
  { value: "Place", className: "md:w-24 w-24" },
  { value: "Name", className: "md:flex-1 w-56 min-w-56" },
  { value: "Sloth points", className: "md:w-40 w-32" },
  { value: "Pull Requests", className: "md:w-40 w-32" },
  { value: "Streak", className: "md:w-40 w-32" },
];
