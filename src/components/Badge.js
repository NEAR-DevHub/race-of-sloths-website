"use client";

import Image from "next/image";

export const Badge = ({ type }) => {
  const styleMap = {
    unranked: {
      bonus: 0,
      textColor: "text-_secondary",
      src: "/images/badge-unranked.svg",
    },
    bronze: {
      bonus: "+5",
      textColor: "text-_yellow",
      src: "/images/badge-bronze.svg",
    },
    silver: {
      bonus: "+10",
      textColor: "text-_yellow",
      src: "/images/badge-silver.svg",
    },
    gold: {
      bonus: "+15",
      textColor: "text-_yellow",
      src: "/images/badge-gold.svg",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(249, 164, 0, 0.20) 0%, rgba(37, 25, 1, 0.00) 100%), var(--bg-3, #222)",
    },
    platinum: {
      bonus: "+20",
      textColor: "text-_yellow",
      src: "/images/badge-platinum.svg",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(37, 0, 249, 0.20) 0%, rgba(106, 91, 247, 0.00) 100%), var(--bg-3, #222)",
    },
    rust: {
      bonus: "+25",
      textColor: "text-_yellow",
      src: "/images/badge-rust.svg",
      gradient:
        "radial-gradient(95.11% 105.42% at 50% 0%, rgba(255, 0, 0, 0.20) 0%, rgba(145, 68, 17, 0.00) 100%), var(--bg-3, #222)",
    },
  };

  return (
    <div
      style={{ background: styleMap[type].gradient ?? "#222" }}
      className="p-4 flex items-center justify center rounded-xl gap-3"
    >
      <Image src={styleMap[type].src} height={48} width={48} alt="badge" />
      <div>
        <div className="capitalize text-xl">{type}</div>
        <div className={`text-sm ${1 ? "text-_secondary" : "text-_yellow"}`}>
          {styleMap[type].bonus}% Lifetime bonus
        </div>
      </div>
    </div>
  );
};
