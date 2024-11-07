"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function NoUsers({ rank }) {
    return <div className="flex items-center gap-6 py-2 px-4 bg-_dark_blue rounded-lg">
        <Image src={`/images/sloth-${rank.toLowerCase()}.svg`} alt="Sloth" width={80} height={80} />
        <p className="text-2xl leading-[27px]">You can be the first one here!</p>
    </div>
}

function User({ id, login, slothPoints }) {
    return <Link className="flex justify-between items-center py-2 px-4 bg-_dark_blue rounded-lg" href={`/profile/${login}`}>
        <div className="flex gap-6 items-center">
            <img src={`https://github.com/${login}.png`} className="rounded-full border-[3px] border-_white" alt="Sloth image" width={80} height={80} />
            <div className="flex flex-col truncate">
                <p className="text-2xl leading-[27px] truncate ">{login}</p>
                <p className="text-xs  w-full">Sloth#{String(id).padStart(4, "0")}</p>
            </div>
        </div>
        <div className="flex flex-col">
            <p className="text-2xl m-auto leading-[27px]">{slothPoints}</p>
            <p className="text-_secondary truncate text-xs">Sloths Points</p>
        </div>
    </Link>
}


function RankSection({ rank, color, gradient, users, percentage }) {
    return <>
        <section className="flex justify-between w-full my-6 p-4 border border-[#30363D] rounded-lg" style={{ "background": gradient }} >
            <div className="flex gap-4 items-center">
                <Image src={`/images/badge-${rank.toLowerCase()}.svg`} alt={`${rank} sloth`} width={48} height={48} />
                <p className="md:text-[30px] text-[20px]" style={{ color }}>{rank}</p>
            </div>
            <p className="text-[20px] my-auto" style={{ color }}>+{percentage}% SP boost</p>
        </section >
        <section className="flex flex-col gap-2">
            {users.map((user) => (
                <User key={user.user_id} id={user.user_id} login={user.user.login} slothPoints={user.sloths_points} />
            ))}
            {users.length === 0 && <NoUsers rank={rank} />}
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
            setUsers({ rust, platinum, gold, silver, bronze });
        }
    }

    const ranks = [
        { users: users.rust, rank: "Rust", color: "#BE621C", gradient: "radial-gradient(108.53% 100% at 50.28% 0%, #461E02 0%, #161B22 86.5%)", percentage: 25 },
        { users: users.gold, rank: "Platinum", color: "#E5E4E2", gradient: "radial-gradient(189.93% 175% at 50.11% -75%, rgba(133, 156, 184, 0.49) 0%, #161B22 95%)", percentage: 15 },
        { users: users.platinum, rank: "Gold", color: "#FFD700", gradient: "radial-gradient(107.54% 138.75% at 50% -38.75%, rgba(222, 160, 5, 0.55) 0%, #161B22 100%)", percentage: 20 },
        { users: users.silver, rank: "Silver", color: "#A6A5C4", gradient: "radial-gradient(207.5% 207.5% at 50% -115%, rgba(155, 155, 155, 0.92) 0%, #161B22 100%)", percentage: 10 },
        { users: users.bronze, rank: "Bronze", color: "#EA860D", gradient: "radial-gradient(161.88% 161.88% at 50% -61.87%, rgba(165, 101, 30, 0.75) 0%, #161B22 100%)", percentage: 5 }
    ]

    useEffect(() => {
        fetchLeaderboard();
    }, [apiUrl]);

    return <section className="flex flex-col ">
        <h1 className="text-[32px] font-semibold">Hall of Fame: <span className="text-_rust">Ranks</span></h1>
        {
            ranks.map((value) => {
                return <RankSection {...value} />
            })
        }
    </section>

}
