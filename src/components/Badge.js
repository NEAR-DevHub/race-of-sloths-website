"use client";

import Image from "next/image";
import { useState } from "react";

export const Badge = ({ bonus, lifetime }) => {
  const lifetimeBonus = {
    0: {
      title: `${lifetime} ${lifetime === 1 ? "day" : "days"}`,
      description: "Sloth age",
      textColor: "text-_secondary",
      src: "/images/badge-unranked.svg",
      hoverText: "Finish your 5-week streak to get ranked",
    },
    5: {
      title: "bronze",
      description: "+5% Lifetime bonus",
      textColor: "text-_yellow",
      src: "/images/badge-bronze.svg",
      hoverText: "This bonus will be aplied to your every future contribution",
    },
    10: {
      title: "silver",
      description: "+10% Lifetime bonus",
      textColor: "text-_yellow",
      src: "/images/badge-silver.svg",
      hoverText: "This bonus will be aplied to your every future contribution",
    },
    15: {
      title: "gold",
      description: "+15% Lifetime bonus",
      textColor: "text-_yellow",
      src: "/images/badge-gold.svg",
      hoverText: "This bonus will be aplied to your every future contribution",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(249, 164, 0, 0.20) 0%, rgba(37, 25, 1, 0.00) 100%), var(--bg-3, #222)",
    },
    20: {
      title: "platinum",
      description: "+20% Lifetime bonus",
      textColor: "text-_yellow",
      src: "/images/badge-platinum.svg",
      hoverText: "This bonus will be aplied to your every future contribution",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(37, 0, 249, 0.20) 0%, rgba(106, 91, 247, 0.00) 100%), var(--bg-3, #222)",
    },
    25: {
      title: "rust",
      description: "+25% Lifetime bonus",
      textColor: "text-_yellow",
      src: "/images/badge-rust.svg",
      hoverText: "This bonus will be aplied to your every future contribution",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(255, 0, 0, 0.20) 0%, rgba(145, 68, 17, 0.00) 100%), var(--bg-3, #222)",
    },
  };

  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <button
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-tooltip-target="tooltip-default"
        style={{ background: lifetimeBonus[bonus].gradient ?? "#222" }}
        className="p-4 flex items-center justify-center rounded-xl gap-3"
      >
        <Image
          src={lifetimeBonus[bonus].src}
          height={48}
          width={48}
          alt="badge"
        />
        <div>
          <div className="capitalize text-xl text-left">
            {lifetimeBonus[bonus].title}
          </div>
          <div className={`text-sm ${lifetimeBonus[bonus].textColor}`}>
            {lifetimeBonus[bonus].description}
          </div>
        </div>
      </button>

      {hovered && (
        <div className="absolute w-[240px] -bottom-[66px] md:right-0 p-3 flex items-center bg-[#222] border-[1px] border-[#313131] rounded-xl leading-snug">
          <small>{lifetimeBonus[bonus].hoverText}</small>
        </div>
      )}
    </div>
  );
};
