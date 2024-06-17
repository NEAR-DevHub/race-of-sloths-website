"use client";

import { CaretUpDown } from "@phosphor-icons/react";
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
    const CellValue = () => (
      <div className="flex gap-2 items-center truncate">
        {item.image && item.organization ? (
          <>
            <img
              className={`w-[32px] h-[32px] rounded-md border-[1px] border-[#424242]`}
              src={item.image}
            />
            <div className="flex flex-col gap-0">
              <small className="text-xs text-_secondary">
                {item.organization} /
              </small>
              <span>{item.value}</span>
            </div>
          </>
        ) : item.image ? (
          <>
            <img
              className="w-[32px] h-[32px] rounded-full border-[1px] border-[#424242]"
              src={item.image}
            />
            <span>{item.value}</span>
          </>
        ) : item.icon ? (
          <>
            <img src={item.icon} />
            <span>{item.value}</span>
          </>
        ) : (
          item.value
        )}
      </div>
    );

    return (
      <td
        className={`flex flex-1 w-full min-w-32 items-center p-3 border-r-[1px] last:border-r-0 ${
          pinned ? "border-[#E6E6E6]" : "border-[#424242]"
        }`}
      >
        {item.value === null || item.value === undefined ? (
          "N/A"
        ) : (
          <CellValue item={item} />
        )}
      </td>
    );
  }

  useEffect(() => {
    setBodyData(body);
  }, [body]);

  return (
    <table
      className={`w-full flex flex-col bg-[#1d1d1d] border-[1px] border-[#424242] rounded-xl p-[2px]`}
    >
      <thead className="flex">
        <tr className="flex w-full">
          {headers.map((item, idx) => (
            <td
              role="button"
              key={idx}
              onClick={() => sortColumn(idx)}
              className="flex flex-1 w-full min-w-32 justify-between gap-3 items-center px-3 py-2 bg-[#222222] border-b-[1px] border-r-[1px] last:border-r-0 border-[#424242]"
            >
              {item}
              <CaretUpDown className="opacity-50" />
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="no-scrollbar overflow-y-auto max-h-[860px]">
        {bodyData.map((row, i) => (
          <tr
            key={i}
            className="flex flex-row border-b-[1px] last:border-b-0 hover:bg-[#222] border-[#424242]"
          >
            {Object.values(row).map((cell, j) => (
              <Cell key={j} item={cell} />
            ))}
          </tr>
        ))}
      </tbody>
      {pinned && (
        <tbody className="flex">
          <tr className="flex w-full bg-white text-black">
            {Object.values(pinned).map((cell, i) => (
              <Cell key={i} item={cell} pinned={true} />
            ))}
          </tr>
        </tbody>
      )}
    </table>
  );
};
