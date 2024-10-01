import Link from "next/link";
import React, { useState } from "react";
import {
  RegularBinIcon,
  RegularNotificationIcon,
} from "../../../../../public/assets/Svgs";

const SessionTBody = ({
  TableData,
  setIsUpdatePayment,
  isUpdatePayment,
  setIsRescheduleSession,
  isRescheduleSession,
  setIsReminderModal,
  isReminderModal,
  setIsCanceledSessionModal,
  isCanceledSessionModal,
}) => {
  return (
    <tbody className="divide-y divide-primary/10">
      {TableData?.map((item, index) => {
        const formatName = (name) => {
          return name;
        };

        return (
          <tr key={index}>
            <td className="p-15px">
              <div className="flex items-center gap-3 ">
                <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                  {item.img ? (
                    <img src={item.img} alt="" className="w-full h-full" />
                  ) : (
                    <span className="text-xs_18 text-[#72748D]">
                      {formatName(item.name).split(" ")[0].charAt(0) +
                        formatName(item.name).split(" ")[1].charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-sm/5 font-medium text-primary">
                    {formatName(item.name)}
                  </p>
                  <p className="text-xs_18 text-primary/70">{item.email}</p>
                </div>
              </div>
            </td>
            <td className="p-15px text-primary/70 text-sm/5">{item.date}</td>
            <td className="p-15px text-primary/70 text-sm/5">{item.time}</td>
            <td className="p-15px text-primary text-sm/5 font-medium">
              ₹ {item.payments}
            </td>
            <td className="p-15px">
              <span
                className={`inline-block py-1.5 px-3  rounded-full text-sm/5 ${
                  item.status.trim() === "Completed"
                    ? "bg-green-200 text-green-500"
                    : item.status.trim() === "Upcoming"
                    ? "bg-orange-200 text-orange-600"
                    : item.status.trim() === "Cancelled"
                    ? "bg-[#FFEDED] text-[#FF5959]"
                    : ""
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-6 text-sm/6 font-medium">
                <Link
                  href={`javascript:void(0)`}
                  onClick={() => setIsRescheduleSession(!isRescheduleSession)}
                  className="text-green-600 underline"
                >
                  Reschedule
                </Link>
                <Link
                  href={`javascript:void(0)`}
                  onClick={() => setIsUpdatePayment(!isUpdatePayment)}
                  className="text-green-600 underline"
                >
                  Update payment
                </Link>
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-5">
                <RegularNotificationIcon
                  className="w-5 h-5 cursor-pointer"
                  pathFillColor="#242424"
                  onClick={() => setIsReminderModal(!isReminderModal)}
                />
                <RegularBinIcon
                  className="w-5 h-5  cursor-pointer"
                  onClick={() =>
                    setIsCanceledSessionModal(!isCanceledSessionModal)
                  }
                />
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default SessionTBody;
