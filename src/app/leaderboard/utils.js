import Image from "next/image";

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const period = (month, year) => `${month < 10 ? 0 : ""}${month}${year}`;
const previousPeriod = (month, year) => {
  if (month === 1) return `${12}${year - 1}`;
  return `${month - 1 < 10 ? 0 : ""}${month - 1}${year}`;
};

export const LEADERBOARD_PERIODS = [period(month, year), previousPeriod(month, year), "all-time"];
export const PROFILE_PERIODS = [period(month, year), "all-time"];

const preparedDataObj = (item, period) => {
  return {
    place: { className: "md:w-24 w-24 min-w-24", value: item.place },
    name: {
      className: "md:flex-1 w-full min-w-52",
      value: (
        <div className="flex gap-3 items-center w-full">
          <img
            className="rounded-full w-[32px] h-[32px]"
            src={item.user.image}
            alt={item.user.image}
          />
          <div className="truncate">{item.user.login}</div>

          {
            item.rank !== "Unranked" && (
              <div className="ml-auto my-auto"><img
                className="rounded-full min-w-[20px] min-h-[20px] w-[20px] h-[20px]"
                src={`/images/badge-${item.rank.toLowerCase()}.svg`}
                alt={item.rank}
              />
              </div>
            )
          }
        </div >
      ),
      href: `profile/${item.user.login}`,
      sortBy: item.user.login,
    },
    rating: { className: "md:w-44 w-44 min-w-44", value: item.rating },
    prs: { className: "md:w-44 w-44 min-w-44", value: item.contributions },
    weeklyStreak: {
      className: "md:w-44 w-44 min-w-44",
      value: (
        <div className="flex gap-3">
          <Image
            width={21}
            height={21}
            src={"/images/fire2.svg"}
            alt={"fire"}
          />
          <div>
            {item.weekly_streak.current} / {item.weekly_streak.longest}
          </div>
        </div>
      ),
      sortBy: item.weekly_streak.current
    },
    monthlyStreak: {
      className: "md:w-44 w-44 min-w-44",
      value: (
        <div className="flex gap-3">
          <Image
            width={21}
            height={21}
            src={"/images/fire3.svg"}
            alt={"fire"}
          />
          <div>
            {item.monthly_streak.current} / {item.monthly_streak.longest}
          </div>
        </div>
      ),
      sortBy: item.monthly_streak.current,
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

export const headers = () => {
  return [
    { value: "Place", className: "md:w-24 w-24 min-w-24" },
    { value: "Name", className: "md:flex-1 w-52 min-w-52" },
    { value: "Sloth points", className: "md:w-44 w-44 min-w-44" },
    { value: "Pull Requests", className: "md:w-44 w-44 min-w-44" },
    { value: "Weekly Streak", className: "md:w-44 w-44 min-w-44" },
    { value: "Monthly Streak", className: "md:w-44 w-44 min-w-44" },
  ];
};
