"use client";

import { Table } from "@/components";
import { useEffect, useState } from "react";
import { headers, periods, preparedData } from "./utils";
import { Toggle } from "@/components/Toggle";
import { apiUrl } from "../api/constants";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [period, setPeriod] = useState(periods[0]);

  async function fetchLeaderboard() {
    const resp = await fetch(`${apiUrl}/leaderboard/users/${period}`);
    const data = await resp.json();

    if (data) {
      const prepared = preparedData(data.records);
      setLeaderboard(prepared);
    }
  }

  useEffect(() => {
    fetchLeaderboard();
  }, [period]);

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
        fallbackMsg="There are no activity"
      />
    </div>
  );
}
