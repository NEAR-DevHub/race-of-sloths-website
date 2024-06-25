"use client";

import { Check, CopySimple } from "@phosphor-icons/react";
import { useState } from "react";

export const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
      }}
      className="w-full p-2 flex justify-center items-center bg-white gap-2 rounded-md text-black font-semibold"
    >
      {copied ? "Copied" : "Copy Code"}
      {copied ? (
        <Check className="text-xl" />
      ) : (
        <CopySimple className="text-xl" />
      )}
    </button>
  );
};
