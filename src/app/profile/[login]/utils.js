import { ArrowsClockwise, Check } from "@phosphor-icons/react";

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
  data.map((item) => {
    return {
      repository: {
        className: "md:flex-1 w-64 min-w-64",
        value: (
          <div className="flex gap-3 items-center">
            <img
              className="rounded-lg w-[34px] h-[34px] border-[1px] border-[#313131]"
              src={item.organization.image}
              alt={item.organization.image}
            />
            <div>
              <div className="text-_secondary text-xs">
                {item.organization.name ?? item.organization.login} /
              </div>
              <div className="flex gap-2 items-center">
                {item.repository}{" "}
                <span className="text-_secondary">#{item.pr_number}</span>
              </div>
            </div>
          </div>
        ),
        href: item.pull_request_link,
        sortBy: `${item.repository} #${item.pr_number}`,
      },
      date: {
        className: "w-52 min-w-52",
        value: formatDate(item.created_at),
      },
      score: {
        className: "w-40 min-w-40",
        value: item.score,
      },
      rating: {
        className: "w-40 min-w-40",
        value: `+${item.total_rating}`,
        sortBy: item.total_rating,
      },
    };
  });

export const headers = [
  { value: "Contribution", className: "md:flex-1 w-64 min-w-64" },
  { value: "Date", className: "w-52 min-w-52" },
  { value: "Score", className: "w-40 min-w-40" },
  { value: "Sloth Points", className: "w-40 min-w-40" },
];

export const weeklyStrickRewardsMap = {
  1: { value: "+10", percent: false },
  2: { value: "+15", percent: false },
  3: { value: "+20", percent: false },
  4: { value: "+25", percent: false },
  5: { value: "+5%", percent: true },
  6: { value: "+30", percent: false },
  7: { value: "+35", percent: false },
  8: { value: "+40", percent: false },
  9: { value: "+45", percent: false },
  10: { value: "+5%", percent: true },
  11: { value: "+50", percent: false },
  12: { value: "+55", percent: false },
  13: { value: "+60", percent: false },
  14: { value: "+65", percent: false },
  16: { value: "+70", percent: false },
  15: { value: "+75", percent: false },
  17: { value: "+80", percent: false },
  18: { value: "+85", percent: false },
  19: { value: "+90", percent: false },
  20: { value: "+5%", percent: true },
  21: { value: "+100", percent: false },
};

export const monthlyStrickRewardsMap = {
  1: { value: "+10", percent: false },
  2: { value: "+20", percent: false },
  3: { value: "+40", percent: false },
  4: { value: "+60", percent: false },
  5: { value: "+5%", percent: true },
  6: { value: "+80", percent: false },
  7: { value: "+100", percent: false },
  8: { value: "+120", percent: false },
  9: { value: "+140", percent: false },
  10: { value: "+5%", percent: true },
  11: { value: "+160", percent: false },
  12: { value: "+200", percent: false },
};
