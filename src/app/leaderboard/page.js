"use client";

import { useEffect, useState } from "react";

const API_ENDPOINT = "https://race-of-sloths.fly.dev";
export default function Page() {
  const [repos, setRepos] = useState([]);

  async function fetchRepos() {
    const resp = await fetch(`${API_ENDPOINT}/api/leaderboard/repos`);
    const data = await resp.json();
    console.log(data);
    setRepos(data);
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return <h1>Leaderboard ...</h1>;
}
