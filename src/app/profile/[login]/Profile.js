"use client";

import { Badge, CopyButton, Table } from "@/components";
import { Toggle } from "@/components/Toggle";
import { Calendar, CalendarDots, Clock, SignOut } from "@phosphor-icons/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  daysLeft,
  headers,
  monthlyStrickRewardsMap,
  preparedData,
  weeklyStrickRewardsMap,
} from "./utils";
import { periods } from "@/app/leaderboard/utils";
import { GithubButton, ProgressBar } from "@/components/ui";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Profile({ apiUrl, badgeUrl }) {
  const params = useParams();
  const [profile, setProfile] = useState(undefined);
  const [period, setPeriod] = useState(periods[0]);
  const [contributions, setContributions] = useState([]);
  const { data: githubUser } = useSession();
  const router = useRouter();

  async function fetchContributions() {
    const resp = await fetch(`${apiUrl}/users/${params.login}/contributions`);
    const data = await resp.json();

    if (data) {
      const prepared = preparedData(data.records);
      setContributions(prepared);
    }
  }

  async function fetchProfile() {
    try {
      const resp = await fetch(`${apiUrl}/users/${params.login}`);
      const data = await resp.json();

      if (data) {
        setProfile(data);
      }
    } catch (err) {
      setProfile(null);
    }
  }

  useEffect(() => {
    if (params) fetchProfile();
  }, [params]);

  useEffect(() => {
    if (profile) fetchContributions();
  }, [profile]);

  useEffect(() => {
    if (githubUser && params.login === "undefined")
      router.push(`/profile/${githubUser.user.login}`, { scroll: false });
  }, [githubUser]);

  const isCurrentUser = githubUser?.user?.login === profile?.user?.login;
  const contributionDays = daysLeft(
    profile?.first_contribution,
    new Date()
  ).max;

  const Section = ({ children, className, style }) => (
    <div
      style={style}
      className={`bg-[#161616] border-[1px] border-[#424242] rounded-2xl p-[24px] ${className}`}
    >
      {children}
    </div>
  );

  const ProfileSection = () => (
    <div>
      <div className="flex justify-between items-center my-5">
        <h2 className="text-4xl">Profile</h2>
        {isCurrentUser && (
          <GithubButton
            title="Sign Out"
            onClick={signOut}
            icon={<SignOut weight="bold" />}
          />
        )}
      </div>
      <div className="flex justify-between items-center">
        <Section className="w-full flex flex-col gap-[24px]">
          <div className="flex w-full md:flex-row flex-col gap-[24px] justify-between">
            <div className="flex gap-[24px] items-center">
              <img
                className="rounded-full w-[80px] h-[80px]"
                src={profile.user.image}
              />
              <div className="flex flex-col">
                <h2 className="text-2xl">{profile.user.name ?? "Unknown"}</h2>
                <h2 className="text-_secondary">@{profile.user.login}</h2>
              </div>
            </div>
            <Badge bonus={profile.lifetime_bonus} lifetime={contributionDays} />
          </div>
          <div>
            <span className="p-1 px-2 mr-2 bg-[#2d2d2d] rounded-md">
              {profile?.global.contributions ?? "N/A"}
            </span>{" "}
            Total contributions
          </div>
        </Section>
      </div>
    </div>
  );

  const StatisticSection = () => {
    const Statistic = ({ icon, text, value }) => (
      <Section className="w-full p-[12px] px-[8px]">
        <div className="flex flex-row gap-2 md:items-start items-center">
          <Image src={icon} height={40} width={40} alt={text} />
          <div className="flex flex-col">
            <h2 className="md:text-4xl text-3xl">{value ?? 0}</h2>
            <h2 className="text-_secondary md:text-base text-xs md:leading-normal leading-tight">
              {text}
            </h2>
          </div>
        </div>
      </Section>
    );

    return (
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col gap-3 mb-5 justify-between md:items-center">
          <h2 className="text-3xl">Statistics</h2>
          <div className="md:w-[400px] w-full">
            <Toggle
              options={["This month", "All time"]}
              selectedOpt={periods.indexOf(period)}
              onClick={(index) => setPeriod(periods[index])}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 justify-between items-center gap-2">
          <Statistic
            text="Sloth Points"
            value={
              period === "all-time"
                ? profile.global.rating
                : profile.monthly.rating
            }
            icon="/images/bolt.svg"
          />
          <Statistic
            text="Place"
            value={profile.leaderboard_places[period]}
            icon="/images/cup.svg"
          />
          <Statistic
            text="Week Streak"
            value={
              profile.streaks.find((s) => s.streak_type == "Weekly")[
                period === "all-time" ? "longest" : "current"
              ]
            }
            icon="/images/fire.svg"
          />
          <Statistic
            text="Month Streak"
            value={
              profile.streaks.find((s) => s.streak_type == "Monthly")[
                period === "all-time" ? "longest" : "current"
              ]
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
        <div className="mb-5">
          <h2 className="text-3xl">Challenges</h2>
        </div>

        <div className="flex md:flex-row flex-col justify-between items-center gap-2">
          {profile.streaks.map((streak, index) => {
            const dateDiff = daysLeft(streak.start_time, streak.end_time);

            return (
              <>
                {streak.achived ? (
                  <Section
                    key={`section_1_${index}`}
                    style={{
                      background:
                        "radial-gradient(80% 80% at 90% 30%, rgba(42, 229, 186, 0.20) 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(0deg, #161616 0%, #161616 100%), #222",
                    }}
                    className="w-full"
                  >
                    <div className="flex flex-col justify-between md:h-24 h-full">
                      <div className="flex justify-between items-center">
                        <b className="text-lg">{streak.name}</b>
                        <Image
                          src="/images/done.svg"
                          width={32}
                          height={32}
                          alt="done"
                        />
                      </div>
                      <p className="text-_secondary">
                        Well done! Next challenge in{" "}
                        {daysLeft(new Date(), streak.end_time).current} days
                      </p>
                      <p className="text-[#0DC268] flex gap-2">
                        <span>
                          Earned{" "}
                          {streak.streak_type === "Weekly"
                            ? weeklyStrickRewardsMap[streak.current]
                            : monthlyStrickRewardsMap[streak.current]}
                        </span>
                        <Image
                          src="/images/bolt.svg"
                          width={20}
                          height={20}
                          alt="bolt"
                        />
                      </p>
                    </div>
                  </Section>
                ) : (
                  <Section key={`section_2_${index}`} className="w-full">
                    <div className="flex flex-col justify-between md:h-24 h-full">
                      <div className="flex justify-between items-center">
                        <b className="text-lg">{streak.name}</b>
                      </div>
                      <div className="flex md:flex-row flex-col justify-between">
                        <p>
                          <span className="text-_secondary">
                            Next earning:{" "}
                          </span>
                          <span className="text-[#FFD400]">
                            {streak.streak_type === "Weekly"
                              ? weeklyStrickRewardsMap[streak.current + 1]
                              : monthlyStrickRewardsMap[
                                  streak.current + 1
                                ]}{" "}
                            Lifetime bonus
                          </span>
                        </p>
                        <span className="text-_secondary md:my-0 my-3 flex gap-2 items-center justify-end">
                          <Clock className="text-lg" />
                          <span>
                            {dateDiff.current} day
                            {dateDiff.current === 1 ? "" : "s"} left
                          </span>
                        </span>
                      </div>
                      <ProgressBar
                        value={
                          (
                            dateDiff.current.toFixed() / dateDiff.max.toFixed()
                          ).toFixed(1) * 100
                        }
                      />
                    </div>
                  </Section>
                )}
              </>
            );
          })}
        </div>
      </div>
    );
  };

  const ShareSection = () => {
    return (
      <div className="flex md:flex-row flex-col justify-between items-center gap-2">
        <div className="flex w-full flex-col gap-3">
          <h2 className="text-3xl">Share your achivemets</h2>
          <ul className="list-disc list-inside p-3">
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
                ![<span className="text-white">Race Of Sloths</span>
                ]({badgeUrl}/{params.login})
              </code>
              <CopyButton
                text={`![Race Of Sloths](${badgeUrl}/${params.login})`}
              />
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

  if (profile === undefined) return <></>;

  return (
    <div className="flex flex-col gap-[56px]">
      {profile ? (
        <>
          <ProfileSection />
          <StatisticSection />
          {isCurrentUser && (
            <>
              <ChallengesSection />
              <ShareSection />
            </>
          )}
          <Contributions />
        </>
      ) : params.login === "undefined" && !githubUser ? (
        <div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-200px)] leading-relaxed">
          <h2 className="text-4xl">Profile</h2>
          <p className="text-_secondary">Log in using your Github account</p>
          <div className="mt-5">
            <GithubButton
              title={"Continue with GitHub"}
              onClick={() => signIn("github")}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-5 justify-center items-center h-[calc(100vh-200px)] leading-relaxed">
          <h2 className="text-4xl text-center">
            You don&apos;t have any contributions <br /> within the Race yet
          </h2>
          <p className="text-_secondary">
            <p>
              1. Check out{" "}
              <Link className="text-_green hover:underline" href="/">
                how it works
              </Link>
            </p>
            <p>
              2. Pick a{" "}
              <Link className="text-_green hover:underline" href="/projects">
                repository
              </Link>{" "}
              to contribute
            </p>
            <p>
              3. Make at least one contribution, get scored and start the Race!
            </p>
          </p>
        </div>
      )}
    </div>
  );
}
