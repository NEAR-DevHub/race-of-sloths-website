import Image from "next/image";

function NoUsers({ slothImage, id }) {
    return <div className="flex items-center gap-6 p-2 bg-_dark_blue rounded-lg">
        <Image src={slothImage} alt="Sloth" width={80} height={80} />
        <p className="text-2xl leading-[27px]">You can be the first one here!</p>
    </div>
}

function User({ id, login, slothPoints }) {
    return <div className="flex justify-between items-center p-2 bg-_dark_blue rounded-lg">
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
    </div>
}

function RankSection({ rank, badgeImage, slothImage, users }) {
    return <>
        <Image className="w-full h-auto my-6" src={badgeImage} alt={`${rank} badge`} width={0} height={0} />
        <section className="flex flex-col gap-2">
            {users.map((user) => (
                <User key={user.id} id={user.id} login={user.login} slothPoints={user.slothPoints} />
            ))}
            {users.length === 0 && <NoUsers slothImage={slothImage} />}
        </section>
    </>
}

export default function HallOfFameLeaderboard({ apiUrl }) {
    return <section className="flex flex-col ">
        <h1 className="text-[32px] font-semibold">Hall of Fame: <span className="text-_rust">Ranks</span></h1>

        <RankSection rank="Rust" badgeImage="/images/hof-rank-rust.svg" slothImage="/images/sloth-rust.svg" percentage="25" users={[]} />
        <RankSection rank="Platinum" badgeImage="/images/hof-rank-platinum.svg" slothImage="/images/sloth-platinum.svg" percentage="20" users={[{
            id: 1,
            login: "akorchyn",
            slothPoints: 100
        }, {
            id: 1,
            login: "akorchyn",
            slothPoints: 100
        }]} />
        <RankSection rank="Gold" badgeImage="/images/hof-rank-gold.svg" slothImage="/images/sloth-gold.svg" percentage="15" users={[]} />
        <RankSection rank="Silver" badgeImage="/images/hof-rank-silver.svg" slothImage="/images/sloth-silver.svg" percentage="10" users={[]} />
        <RankSection rank="Bronze" badgeImage="/images/hof-rank-bronze.svg" slothImage="/images/sloth-bronze.svg" percentage="5" users={[]} />
    </section>

}
