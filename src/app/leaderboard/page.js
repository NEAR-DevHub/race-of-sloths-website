"use client";

import { Table } from "@/components";
import { useEffect, useState } from "react";
import { headers, periods, preparedData, preparedPinned } from "./utils";
import { Toggle } from "@/components/Toggle";
import { apiUrl } from "../api/constants";
import { useSession } from "next-auth/react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [userData, setUserData] = useState({});
  const [period, setPeriod] = useState(periods[0]);
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
    fetchLeaderboard();
  }, [period, githubUser]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Leaderboard</h2>
        <Toggle
          options={["This month", "All time"]}
          onClick={(index) => setPeriod(periods[index])}
        />
      </div>
      <Table
        headers={headers}
        body={leaderboard}
        pinned={userData}
        fallbackMsg="There are no activity"
      />
    </div>
  );
}
