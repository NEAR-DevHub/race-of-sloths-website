"use client";

import { Table } from "@/components";
import { useEffect, useState } from "react";
import { headers, LEADERBOARD_PERIODS, preparedData, preparedPinned } from "./utils";
import { Toggle } from "@/components/Toggle";
import { useSession } from "next-auth/react";

export default function Leaderboard({ apiUrl }) {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userData, setUserData] = useState({});
  const [period, setPeriod] = useState(LEADERBOARD_PERIODS[0]);
  const { data: githubUser } = useSession();

  async function fetchLeaderboard() {
    const resp = await fetch(`${apiUrl}/leaderboard/users/${period}`);
    const data = await resp.json();

    if (data) {
      const leaderboardData = preparedData(data.records, period);
      const githubUserData = preparedPinned(data.records, period, githubUser);

      setLeaderboard(leaderboardData);
      setUserData(githubUserData);
    }
  }

  useEffect(() => {
    if (period) fetchLeaderboard();
  }, [period, githubUser]);

  const defaultOptions = ["This month", "Previous", "All time"];
  const options = LEADERBOARD_PERIODS.map((period, index) =>
    period === "102024" ? "Rosctober" : defaultOptions[index]
  );

  return (
    <div className="flex flex-col gap-5">
      <div className="flex md:flex-row flex-col justify-between gap-5">
        <h2 className="text-3xl">Leaderboard</h2>
        <div className="md:w-[400px] w-full">
          <Toggle
            options={options}
            selectedOpt={LEADERBOARD_PERIODS.indexOf(period)}
            onClick={(index) => setPeriod(LEADERBOARD_PERIODS[index])}
          />
        </div>
      </div>
      <Table
        headers={headers(period)}
        body={leaderboard}
        pinned={userData.place > 14 ? userData : null}
        fallbackMsg="There are no activity"
      />
    </div>
  );
}
