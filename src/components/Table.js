"use client";

import { CaretUpDown } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Table = ({ headers, body, pinned }) => {
  const [bodyData, setBodyData] = useState([]);
  const [asc, setAsc] = useState(
    headers.map((_i, index) => {
      return { [index]: false };
    })
  );

  function compare(a, b) {
    return typeof a === "string" && typeof b === "string"
      ? a.localeCompare(b)
      : a - b;
  }

  function sortColumn(index) {
    const sortedBody = bodyData.sort((a, b) => {
      const sortableField = (field) =>
        Object.values(field)[index].sortBy || Object.values(field)[index].value;

      const valA = sortableField(a) || "";
      const valB = sortableField(b) || "";

      return asc[index] ? compare(valA, valB) : compare(valB, valA);
    });

    setAsc({ ...asc, [index]: !asc[index] });
    setBodyData(sortedBody);
  }

  function Cell({ item, pinned }) {
    return (
      <div
        className={`flex items-center p-3 border-r-[1px] last:border-r-0 ${
          pinned ? "border-[#E6E6E6]" : "border-[#424242]"
        } ${item.className}`}
      >
        <div className="flex gap-3 items-center truncate">
          <div className="truncate">
            {item.href ? (
              <Link href={item.href}>{item.value}</Link>
            ) : (
              <span className={item.value ?? "text-_secondary"}>
                {item.value ?? "N/A"}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setBodyData(body);
  }, [body]);

  return (
    <div
      className={`w-full flex flex-col bg-[#1d1d1d] border-[1px] border-[#424242] rounded-xl p-[2px]`}
    >
      <div className="no-scrollbar overflow-y-auto overflow-x-auto max-h-[840px]">
        <div className="flex md:w-full w-fit">
          {headers.map((item, idx) => (
            <div
              role="button"
              key={idx}
              onClick={() => sortColumn(idx)}
              className={`flex whitespace-nowrap justify-between gap-3 items-center px-3 py-2 bg-[#222222] border-b-[1px] border-r-[1px] last:border-r-0 border-[#424242] ${item.className}`}
            >
              {item.value}
              <CaretUpDown className="opacity-50" />
            </div>
          ))}
        </div>
        {bodyData.map((row, i) => (
          <div
            key={i}
            className={`flex md:w-full w-fit border-b-[1px] last:border-b-0 hover:bg-[#222] border-[#424242]`}
          >
            {Object.values(row).map((cell, j) => (
              <Cell key={j} item={cell} />
            ))}
          </div>
        ))}
      </div>
      {pinned && (
        <div className="flex">
          <div className="flex md:w-full w-fit bg-white text-black">
            {Object.values(pinned).map((cell, i) => (
              <Cell key={i} item={cell} pinned={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
