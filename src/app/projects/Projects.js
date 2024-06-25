"use client";

import { Table } from "@/components";
import { useEffect, useState } from "react";
import { headers, preparedData } from "./utils";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  async function fetchRepos() {
    const resp = await fetch(`${process.env.API_URL}/leaderboard/repos`);
    const data = await resp.json();

    if (data) {
      const prepared = preparedData(data.records);
      setRepos(prepared);
    }
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <h2 className="text-3xl">Projects</h2>
      <Table
        headers={headers}
        body={repos}
        fallbackMsg="There are no projects"
      />
    </>
  );
}
