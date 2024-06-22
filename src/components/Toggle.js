"use client";

import { useState } from "react";

export const Toggle = ({ options, onClick, selectedOpt }) => {
  const [selected, setSelected] = useState(selectedOpt);

  return (
    <div className="flex w-full rounded-full border-[1px] border-[#424242]">
      {options.map((option, index) => (
        <button
          key={index}
          className={`p-[10px] w-full text-center ${
            index === selected ? "bg-white rounded-full text-black" : ""
          }`}
          onClick={() => {
            setSelected(index);
            onClick(index);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
