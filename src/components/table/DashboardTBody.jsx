import Link from "next/link";
import React from "react";
import {
  RegularBinIcon,
  RegularNotificationIcon,
} from "../../../public/assets/Svgs";

const DashboardTBody = ({
  TableData,
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
            <td className="p-15px text-primary/70 text-sm/5">{item.time}</td>
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
            <td className="p-15px text-primary text-sm/5 font-medium">
              {item.amount}
            </td>
            <td className="p-15px text-primary/70 text-sm/5">
              {item.sessionFee}
            </td>
            <td className="p-15px text-primary text-sm/5">
              <div className="flex items-center gap-3">
                {item.previousFee}{" "}
                {item.previousFee === "Pending" && (
                  <div className="relative group cursor-pointer">
                    <span className="w-5 h-5 flex items-center justify-center border border-[#010101] rounded-full">
                      !
                    </span>
                    <div className="absolute w-[322px] py-30px px-5 top-full right-0 rounded-base bg-white shadow-[0px_4px_16px_0px_#2424241A] transition-all duration-500 opacity-0 hidden group-hover:block group-hover:opacity-100 z-10">
                      <h3 className="text-sm/5 text-primary font-medium">
                        Unpaid Session Payment
                      </h3>
                      <ul className="space-y-15px pt-[22px] text-sm/5">
                        <li className="flex items-center justify-between text-primary">
                          <p className="text-xs_18">14th July,2024</p>
                          <span className="py-[2px] px-3 inline-block bg-red-200 text-red-500 rounded-[5px] text-xs/5">
                            Unpaid
                          </span>
                        </li>
                        <li className="flex items-center justify-between text-primary">
                          <p className="text-xs_18">10th July,2024</p>
                          <span className="py-[2px] px-3 inline-block bg-red-200 text-red-500 rounded-[5px] text-xs/5">
                            Unpaid
                          </span>
                        </li>
                        <li className="flex items-center justify-between text-primary">
                          <p className="text-xs_18">7th July,2024</p>
                          <span className="py-[2px] px-3 inline-block bg-red-200 text-red-500 rounded-[5px] text-xs/5">
                            Unpaid
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center justify-between gap-3 text-sm/6 font-medium">
                <Link
                  href={`javascript:void(0)`}
                  onClick={() => setIsRescheduleSession(!isRescheduleSession)}
                  className="text-green-600 underline"
                >
                  Reschedule
                </Link>
                <Link
                  href={`javascript:void(0)`}
                  className="text-green-600 underline"
                >
                  Start Session
                </Link>
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center justify-between gap-3">
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

export default DashboardTBody;
