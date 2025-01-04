"use client";

export const Toggle = ({ options, onClick, selected }) => {
  return (
    <div className="flex w-full rounded-full border-[1px] border-[#424242]">
      {options.map((option, index) => (
        <button
          key={index}
          className={`p-[10px] w-full text-center ${
            index === selected ? "bg-white rounded-full text-black" : ""
          }`}
          onClick={() => {
            onClick(index);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
