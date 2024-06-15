"use client";

import { CaretUpDown } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const Table = ({ headers, body, fallbackMsg }) => {
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

  function Cell({ item }) {
    return (
      <div className="flex gap-2 items-center truncate">
        {item.image && item.organization ? (
          <>
            <img
              className="w-[32px] h-[32px] rounded-md border-[1px] border-[#424242]"
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
  }

  useEffect(() => {
    setBodyData(body);
  }, [body]);

  return (
    <table
      className={`w-full flex flex-col bg-[#1d1d1d] border-[1px] border-[#424242] rounded-xl p-[3px]`}
    >
      <thead className="flex">
        <tr className="flex w-full">
          {headers.map((item, idx) => (
            <td
              role="button"
              key={idx}
              onClick={() => sortColumn(idx)}
              className="flex flex-1 w-full justify-between gap-3 items-center px-3 py-2 bg-[#222222] border-b-[1px] border-r-[1px] last:border-r-0 border-[#424242]"
            >
              {item}
              <CaretUpDown className="opacity-50" />
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="no-scrollbar overflow-y-auto max-h-[860px]">
        {bodyData.length > 0 ? (
          bodyData.map((row, i) => (
            <tr
              key={i}
              className="flex flex-row border-b-[1px] last:border-b-0 hover:bg-[#222] border-[#424242]"
            >
              {Object.values(row).map((cell, j) => (
                <td
                  key={j}
                  className={`flex-1 flex items-center p-3 border-r-[1px] last:border-r-0 border-[#424242]`}
                >
                  {cell.value === null ? "N/A" : <Cell item={cell} />}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <h3 className="p-10 text-center w-full text-xl">{fallbackMsg}</h3>
        )}
      </tbody>
    </table>
  );
};
