import Image from "next/image";

const date = new Date();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const period = (month, year) => `${month < 10 ? 0 : ""}${month}${year}`;
const previousPeriod = (month, year) => {
  if (month === 1) return `12${year - 1}`;
  return `${month - 1 < 10 ? 0 : ""}${month - 1}${year}`;
};

export const DEFAULT_LEADERBOARD_PERIOD = "all-time";
export const LEADERBOARD_PERIODS = [
  period(month, year),
  previousPeriod(month, year),
  "all-time",
];
export const DEFAULT_PROFILE_PERIOD = "all-time";
export const PROFILE_PERIODS = [period(month, year), "all-time"];

const preparedDataObj = (item) => {
  return {
    place: { className: "md:w-24 w-24 min-w-24", value: item.place },
    name: {
      className: "md:flex-1 w-full min-w-52 w-52",
      value: (
        <div className="flex gap-3 items-center w-full">
          <img
            className="rounded-full w-[32px] h-[32px]"
            src={item.user.image}
            alt={item.user.image}
          />
          <div className="truncate">{item.user.login}</div>

          {item.rank !== "Unranked" && (
            <div className="ml-auto my-auto">
              <img
                className="rounded-full min-w-[20px] min-h-[20px] w-[20px] h-[20px]"
                src={`/images/badge-${item.rank.toLowerCase()}.svg`}
                alt={item.rank}
              />
            </div>
          )}
        </div>
      ),
      href: `profile/${item.user.login}`,
      sortBy: item.user.login,
    },
    rating: { className: "md:w-40 w-40 min-w-40", value: item.rating },
    prs: { className: "md:w-40 w-40 min-w-40", value: item.contributions },
    scoredPRs: { className: "md:w-36 w-36 min-w-36", value: item.scored_prs },
    weeklyStreak: {
      className: "md:w-40 w-40 min-w-40",
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
      sortBy: item.weekly_streak.current,
    },
    monthlyStreak: {
      className: "md:w-40 w-40 min-w-40",
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

export const preparedData = (data) => data.map((item) => preparedDataObj(item));

export const preparedPinned = (data, githubUser) => {
  if (!githubUser) return {};

  const item = data.find((d) => d.user.login === githubUser.user.login);
  if (!item) return {};

  return preparedDataObj(item);
};

export const headers = () => {
  return [
    { value: "Place", className: "md:w-24 w-24 min-w-24" },
    { value: "Name", className: "md:flex-1 w-52 min-w-52" },
    { value: "Sloth points", className: "md:w-40 w-40 min-w-40" },
    { value: "Pull Requests", className: "md:w-40 w-40 min-w-40" },
    { value: "Scored PRs", className: "md:w-36 w-36 min-w-36" },
    { value: "Weekly Streak", className: "md:w-40 w-40 min-w-40" },
    { value: "Monthly Streak", className: "md:w-40 w-40 min-w-40" },
  ];
};
