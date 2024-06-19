"use client";

import { apiUrl } from "@/app/api/constants";
import { Table } from "@/components";
import { Toggle } from "@/components/Toggle";
import { Clock, CopySimple } from "@phosphor-icons/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { headers, preparedData } from "./utils";
import { periods } from "@/app/leaderboard/utils";

export default function Page() {
  const params = useParams();
  const [profile, setProfile] = useState();
  const [period, setPeriod] = useState(periods[0]);
  const [contributions, setContributions] = useState([]);

  async function fetchContributions() {
    const resp = await fetch(`${apiUrl}/users/${params.login}/contributions`);
    const data = await resp.json();

    if (data) {
      const prepared = preparedData(data.records);
      setContributions(prepared);
    }
  }

  async function fetchProfile() {
    const resp = await fetch(`${apiUrl}/users/${params.login}`);
    const data = await resp.json();

    if (data) setProfile(data);
  }

  useEffect(() => {
    if (params) fetchProfile();
  }, [params]);

  useEffect(() => {
    if (profile) fetchContributions();
  }, [profile]);

  console.log(profile);

  const Section = ({ children, fullWidth, style }) => (
    <div
      style={style}
      className={`${
        fullWidth ? "w-full" : ""
      } bg-[#161616] border-[1px] border-[#424242] rounded-lg p-[24px]`}
    >
      {children}
    </div>
  );

  const ProfileSection = () => (
    <div>
      <h2 className="text-4xl mb-5">Profile</h2>
      <div className="flex justify-between items-center">
        <Section fullWidth>
          <div className="flex w-full mb-[24px] justify-between items-start">
            <div className="flex gap-[24px] items-center">
              <img
                className="rounded-full w-[80px] h-[80px] border-2 border-white"
                src={profile.user.image}
              />
              <div className="flex flex-col">
                <h2 className="text-2xl">{profile.user.name}</h2>
                <h2 className="text-_secondary">@{profile.user.login}</h2>
              </div>
            </div>
          </div>
          <div>
            <span className="p-1 px-2 mr-2 bg-[#2d2d2d] rounded-md">
              {profile.contributions}
            </span>{" "}
            Total contributions
          </div>
        </Section>
      </div>
    </div>
  );

  const StatisticSection = () => {
    const Statistic = ({ icon, text, value }) => (
      <Section fullWidth>
        <div className="flex flex-row gap-2 items-start">
          <Image src={icon} height={36} width={36} alt={text} />
          <div className="flex flex-col">
            <h2 className="text-4xl">{value}</h2>
            <h2 className="text-_secondary">{text}</h2>
          </div>
        </div>
      </Section>
    );

    return (
      <div className="flex flex-col">
        <div className="flex mb-5 justify-between items-center">
          <h2 className="text-3xl">Statistic</h2>
          <Toggle
            options={["This month", "All time"]}
            selectedOpt={periods.indexOf(period)}
            onClick={(index) => setPeriod(periods[index])}
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          <Statistic
            text="Rating"
            value={profile.rating}
            icon="/images/bolt.svg"
          />
          <Statistic
            text="Place"
            value={profile.leaderboard_places[period]}
            icon="/images/cup.svg"
          />
          <Statistic
            text="Max. Week Streak"
            value={profile.streaks["Weekly Pull Request"].longest}
            icon="/images/fire.svg"
          />
          <Statistic
            text="Month Streak"
            value={
              profile.streaks["Monthly Pull Request with score higher 8"]
                .longest
            }
            icon="/images/fire.svg"
          />
        </div>
      </div>
    );
  };

  const ChallengesSection = () => {
    return (
      <div className="flex flex-col">
        <div className="flex mb-5 justify-between items-center">
          <h2 className="text-3xl">Challenges</h2>
        </div>

        <div className="flex justify-between items-center gap-2">
          <Section
            style={{
              background:
                "radial-gradient(80% 80% at 90% 30%, rgba(42, 229, 186, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, #161616 0%, #161616 100%), #222",
            }}
            fullWidth
          >
            <div className="flex flex-col justify-between h-24">
              <div className="flex justify-between items-center">
                <b className="text-lg">Weekly streak completed</b>
                <Image src="/images/done.svg" width={32} height={32} />
              </div>
              <p className="text-_secondary">
                Well done! Next challenge in 3 days
              </p>
              <p className="text-[#0DC268] flex gap-2">
                <span>Earned +50 </span>
                <Image src="/images/bolt.svg" width={20} height={20} />
              </p>
            </div>
          </Section>
          <Section fullWidth>
            <div className="flex flex-col justify-between h-24">
              <div className="flex justify-between items-center">
                <b className="text-lg">5-month streak</b>
              </div>
              <div className="flex justify-between items-center">
                <p>
                  <span className="text-_secondary">Next earning: </span>
                  <span className="text-[#FFD400]">+5% Lifetime bonus</span>
                </p>
                <span className="text-_secondary flex gap-2 items-center">
                  <Clock className="text-lg" />7 days left
                </span>
              </div>
              <div className="bg-[#353535] rounded-full w-full flex justify-end">
                <div className="h-[16px] rounded-full w-[60%] bg-red-500"></div>
              </div>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  const ShareSection = () => {
    return (
      <div className="flex flex-row justify-between items-center gap-2">
        <div className="flex w-full flex-col gap-2">
          <h2 className="text-3xl">Share your achivemets</h2>
          <ul className="list-disc list-inside">
            <li>Dynamically rendered</li>
            <li>Shareable across the internet</li>
          </ul>
        </div>

        <div className="flex w-full items-center flex-col gap-2">
          <small className="text-_secondary">
            Copy-paste into your GitHub profile README
          </small>
          <Section>
            <div className="gap-3 flex flex-col">
              <code className="text-[#5B75F0]">
                [![<span className="text-white">Race Of Sloths</span>
                ](https://streak-stats.demolab.com/?user=DenverCoder1)](https://git.io/streak-stats)
              </code>
              <button className="w-full p-2 flex justify-center items-center bg-white gap-2 rounded-md text-black font-semibold">
                Copy Code
                <CopySimple className="text-xl" />
              </button>
            </div>
          </Section>
        </div>
      </div>
    );
  };

  const Contributions = () => (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Contributions</h2>
      </div>
      <Table
        headers={headers}
        body={contributions}
        fallbackMsg="There are no contributions"
      />
    </div>
  );

  return (
    <>
      {profile && (
        <div className="flex flex-col gap-[56px]">
          <ProfileSection />
          <StatisticSection />
          <ChallengesSection />
          <ShareSection />
          <Contributions />
        </div>
      )}
    </>
  );
}
