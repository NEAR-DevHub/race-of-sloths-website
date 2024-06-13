"use client";

import { CaretUpDown } from "@phosphor-icons/react";
import { useState } from "react";

export const Table = ({ headers, body }) => {
  const [bodyData, setBodyData] = useState(body);
  const [asc, setAsc] = useState(
    headers.map((_i, index) => {
      return { [index]: false };
    })
  );

  function compare(a, b) {
    return typeof a === "string" || typeof b === "string"
      ? a.localeCompare(b)
      : a - b;
  }

  function sortColumn(index) {
    const sortedBody = bodyData.sort((a, b) => {
      const valA = Object.values(a)[index];
      const valB = Object.values(b)[index];

      return asc[index] ? compare(valA, valB) : compare(valB, valA);
    });

    setAsc({ ...asc, [index]: !asc[index] });
    setBodyData(sortedBody);
  }

  return (
    <table className="w-full flex flex-col bg-[#1d1d1d] border-[1px] border-[#424242] rounded-xl p-[3px]">
      <thead className="flex">
        <tr className="flex w-full">
          {headers.map((item, idx) => (
            <td
              role="button"
              key={idx}
              onClick={() => sortColumn(idx)}
              className="flex w-full justify-between gap-3 items-center py-2 px-3 bg-[#222222] border-b-[1px] border-r-[1px] last:border-r-0 border-[#424242]"
            >
              {item}
              <CaretUpDown className="opacity-50" />
            </td>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((row, i) => (
          <tr
            key={i}
            className="flex flex-row border-b-[1px] last:border-b-0 border-[#424242]"
          >
            {Object.values(row).map((cell, j) => (
              <td
                key={j}
                className="bg-[#1d1d1d] flex-1 py-2 px-3 border-r-[1px] last:border-r-0 border-[#424242]"
              >
                {cell === null ? "N/A" : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
