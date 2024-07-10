"use client";

import { Table } from "@/components";
import { useEffect, useState } from "react";
import { headers, preparedData } from "./utils";
import { useSearchParams } from "next/navigation";

export default function Projects({ apiUrl }) {
  const [repos, setRepos] = useState([]);
  const searchParams = useSearchParams();
  const paramsRepo = searchParams.get("repo");
  const paramsOrg = searchParams.get("org");

  async function fetchRepos() {
    const resp = await fetch(`${apiUrl}/leaderboard/repos`);
    const data = await resp.json();

    if (data) {
      let filteredData = data.records;

      if (paramsRepo)
        filteredData = filteredData.filter((data) => data.name === paramsRepo);

      if (paramsOrg)
        filteredData = filteredData.filter(
          (data) =>
            data.organization.name === paramsOrg ||
            data.organization.login === paramsOrg
        );

      const prepared = preparedData(filteredData);
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
