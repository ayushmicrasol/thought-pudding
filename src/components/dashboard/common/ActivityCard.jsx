import { ArrowDownLeft, ArrowUpRight } from "@phosphor-icons/react";
import React from "react";

const ActivityCard = ({ title, count, percentage, borderColor }) => {
  const isNegative = percentage.startsWith("-");
  return (
    <div
      className={`bg-green-600/5 px-5 py-[25px] rounded-base border-l ${borderColor} `}
    >
      <p className="text-lg/7 text-primary">{title}</p>
      <div className="flex items-center gap-4 pt-3">
        <p className=" text-2xl/9 text-primary font-medium">{count}</p>
        <p
          className={`text-sm/4 flex items-center gap-1 ${
            isNegative ? "text-[#FF2727]" : "text-green-400"
          } `}
        >
          {isNegative ? (
            <ArrowDownLeft size={16} />
          ) : (
            <ArrowUpRight size={16} />
          )}{" "}
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default ActivityCard;
