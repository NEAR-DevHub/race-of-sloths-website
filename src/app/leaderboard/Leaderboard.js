"use client";

import { Table } from "@/components";
import { useEffect, useState, useCallback } from "react";
import {
  headers,
  LEADERBOARD_PERIODS,
  DEFAULT_LEADERBOARD_PERIOD,
  preparedData,
  preparedPinned,
} from "./utils";
import { Toggle } from "@/components/Toggle";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export default function Leaderboard({ apiUrl, minimized, defaultPeriod }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const period =
    searchParams.get("period") ?? defaultPeriod ?? DEFAULT_LEADERBOARD_PERIOD;

  const [leaderboard, setLeaderboard] = useState([]);
  const [userData, setUserData] = useState({});
  const [total, setTotal] = useState(0);
  const { data: githubUser } = useSession();

  const fetchLeaderboard = useCallback(
    async function (minimized) {
      const resp = await fetch(
        `${apiUrl}/leaderboard/users/${period}?limit=1000`
      );
      const data = await resp.json();

      if (data) {
        const leaderboardData = preparedData(data.records);
        const githubUserData = preparedPinned(data.records, githubUser);

        setTotal(leaderboardData.length);
        setLeaderboard(
          minimized ? leaderboardData.slice(0, 10) : leaderboardData
        );
        setUserData(githubUserData);
      }
    },
    [period, githubUser, apiUrl]
  );

  useEffect(() => {
    if (period) fetchLeaderboard(minimized);
  }, [period, minimized, fetchLeaderboard]);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex md:flex-row flex-col justify-between gap-5">
        <h2 className="text-3xl">Leaderboard</h2>
        <div className="md:w-[400px] w-full">
          <Toggle
            options={["This month", "Previous", "All time"]}
            selected={LEADERBOARD_PERIODS.indexOf(period)}
            onClick={(index) =>
              router.push(`?period=${LEADERBOARD_PERIODS[index]}`, {
                scroll: false,
              })
            }
          />
        </div>
      </div>
      <Table
        headers={headers()}
        body={leaderboard}
        pinned={userData.place > 14 ? userData : null}
        fallbackMsg="There are no activity"
      />
      {minimized && (
        <div className="flex flex-col gap-[10px]">
          <p className="text-2xl text-_secondary">
            + {total - leaderboard.length} Contributors
          </p>
          <Link
            href={`/leaderboard?period=${period}`}
            className="flex gap-2 text-2xl items-center text-white "
          >
            Show all <ArrowRight size={23} />
          </Link>
        </div>
      )}
    </div>
  );
}
