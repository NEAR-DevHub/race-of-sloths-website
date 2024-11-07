"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NoUsers({ slothImage, id }) {
    return <div className="flex items-center gap-6 py-2 px-4 bg-_dark_blue rounded-lg">
        <Image src={slothImage} alt="Sloth" width={80} height={80} />
        <p className="text-2xl leading-[27px]">You can be the first one here!</p>
    </div>
}

function User({ id, login, slothPoints }) {
    return <Link className="flex justify-between items-center py-2 px-4 bg-_dark_blue rounded-lg" href={`/profile/${login}`}>
        <div className="flex gap-6 items-center">
            <img src={`https://github.com/${login}.png`} className="rounded-full border-[3px] border-_white" alt="Sloth image" width={80} height={80} />
            <div className="flex flex-col">
                <p className="text-2xl leading-[27px]">{login}</p>
                <p className="text-xs ">Sloth#{String(id).padStart(4, "0")}</p>
            </div>
        </div>
        <div className="flex flex-col ">
            <p className="text-2xl m-auto leading-[27px]">{slothPoints}</p>
            <p className="text-_secondary text-xs">Sloths Points</p>
        </div>
    </Link>
}

function RankSection({ rank, badgeImage, slothImage, users }) {
    return <>
        <Image className="w-full h-auto my-6" src={badgeImage} alt={`${rank} badge`} width={0} height={0} />
        <section className="flex flex-col gap-2">
            {users.map((user) => (
                <User key={user.user_id} id={user.user_id} login={user.user.login} slothPoints={user.sloths_points} />
            ))}
            {users.length === 0 && <NoUsers slothImage={slothImage} />}
        </section>
    </>
}

export default function HallOfFameLeaderboard({ apiUrl }) {
    const [users, setUsers] = useState({ rust: [], platinum: [], gold: [], silver: [], bronze: [] });

    async function fetchLeaderboard() {
        const resp = await fetch(`${apiUrl}/leaderboard/users/hall_of_fame`);
        const data = await resp.json();

        if (data) {
            const records = data.records;
            const rust = records.filter((user) => user.rank === "Rust");
            const platinum = records.filter((user) => user.rank === "Platinum");
            const gold = records.filter((user) => user.rank === "Gold");
            const silver = records.filter((user) => user.rank === "Silver");
            const bronze = records.filter((user) => user.rank === "Bronze");
            console.log(records)
            setUsers({ rust, platinum, gold, silver, bronze });
        }
    }

    useEffect(() => {
        fetchLeaderboard();
    }, [apiUrl]);

    return <section className="flex flex-col ">
        <h1 className="text-[32px] font-semibold">Hall of Fame: <span className="text-_rust">Ranks</span></h1>

        <RankSection rank="Rust" badgeImage="/images/hof-rank-rust.svg" slothImage="/images/sloth-rust.svg" users={users.rust} />
        <RankSection rank="Platinum" badgeImage="/images/hof-rank-platinum.svg" slothImage="/images/sloth-platinum.svg" users={users.platinum} />
        <RankSection rank="Gold" badgeImage="/images/hof-rank-gold.svg" slothImage="/images/sloth-gold.svg" users={users.gold} />
        <RankSection rank="Silver" badgeImage="/images/hof-rank-silver.svg" slothImage="/images/sloth-silver.svg" users={users.silver} />
        <RankSection rank="Bronze" badgeImage="/images/hof-rank-bronze.svg" slothImage="/images/sloth-bronze.svg" users={users.bronze} />
    </section>

}
