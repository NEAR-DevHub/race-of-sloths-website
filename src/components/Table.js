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
      const valA = Object.values(a)[index].value || "";
      const valB = Object.values(b)[index].value || "";

      return asc[index] ? compare(valA, valB) : compare(valB, valA);
    });

    setAsc({ ...asc, [index]: !asc[index] });
    setBodyData(sortedBody);
  }

  function Cell({ item, pinned }) {
    const TextValue = () => (
      <div className="truncate">
        {item.href ? (
          <Link href={item.href}>{item.value}</Link>
        ) : (
          <span className={item.value ? "" : "text-_secondary"}>
            {item.value || "N/A"}
          </span>
        )}
      </div>
    );

    const CellValue = () => (
      <div className="flex gap-3 items-center truncate">
        {item.image && item.value2 ? (
          <>
            <img
              className={`w-[32px] h-[32px] rounded-md border-[1px] border-[#424242]`}
              src={item.image}
            />
            <div className="flex flex-col gap-0">
              <small className="text-xs text-_secondary">{item.value2}</small>
              <TextValue />
            </div>
          </>
        ) : item.image ? (
          <>
            <img
              className="w-[32px] h-[32px] rounded-full border-[1px] border-[#424242]"
              src={item.image}
            />
            {item.value && <TextValue />}
          </>
        ) : item.icon ? (
          <>
            <img src={item.icon} width={21} height={21} />
            <TextValue />
          </>
        ) : (
          <TextValue />
        )}
      </div>
    );

    return (
      <div
        className={`flex md:w-full w-32 min-w-32 items-center p-3 border-r-[1px] last:border-r-0 ${
          pinned ? "border-[#E6E6E6]" : "border-[#424242]"
        }`}
      >
        <CellValue item={item} />
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
      <div className="no-scrollbar overflow-y-auto overflow-x-auto max-h-[860px]">
        <div className="flex">
          {headers.map((item, idx) => (
            <div
              role="button"
              key={idx}
              onClick={() => sortColumn(idx)}
              className="flex md:w-full w-32 min-w-32 whitespace-nowrap justify-between gap-3 items-center px-3 py-2 bg-[#222222] border-b-[1px] border-r-[1px] last:border-r-0 border-[#424242]"
            >
              {item}
              <CaretUpDown className="opacity-50" />
            </div>
          ))}
        </div>
        {bodyData.map((row, i) => (
          <div
            key={i}
            className="flex md:w-full w-fit border-b-[1px] last:border-b-0 hover:bg-[#222] border-[#424242]"
          >
            {Object.values(row).map((cell, j) => (
              <Cell key={j} item={cell} />
            ))}
          </div>
        ))}
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
    </div>
  );
};
