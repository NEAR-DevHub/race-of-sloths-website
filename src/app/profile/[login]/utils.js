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
  1: "+10",
  2: "+15",
  3: "+20",
  4: "+25",
  5: "+5%",
  6: "+30",
  7: "+35",
  8: "+40",
  9: "+45",
  10: "+5%",
  11: "+50",
  12: "+55",
  13: "+60",
  14: "+65",
  16: "+70",
  15: "+75",
  17: "+80",
  18: "+85",
  19: "+90",
  20: "+5%",
  21: "+100",
};

export const monthlyStrickRewardsMap = {
  1: "+10",
  2: "+20",
  3: "+40",
  4: "+60",
  5: "+5%",
  6: "+80",
  7: "+100",
  8: "+120",
  9: "+140",
  10: "+5%",
  11: "+160",
  12: "+200",
}; 