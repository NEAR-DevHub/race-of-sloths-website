import { useState } from "react";

export const Toggle = ({ options, onClick }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex rounded-full border-[1px] border-[#424242]">
      {options.map((option, index) => (
        <button
          key={index}
          className={`p-[10px] w-[200px] text-center ${
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
