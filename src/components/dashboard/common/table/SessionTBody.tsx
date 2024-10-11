import Link from "next/link";
import {
  RegularBinIcon,
  RegularNotificationIcon,
} from "../../../../../public/assets/Svgs";
import React from "react";
interface SessionTBodyProps {
  TableData: Array<unknown>; // Define the type of TableData here
  setIsUpdatePayment?: (value: boolean) => void;
  isUpdatePayment?: boolean;
  setIsRescheduleSession?: (value: boolean) => void;
  isRescheduleSession?: boolean;
  setIsReminderModal?: (value: boolean) => void;
  isReminderModal?: boolean;
  setIsCanceledSessionModal?: (value: boolean) => void;
  isCanceledSessionModal?: boolean;
}

interface Item {
  img?: string;
  name?: string;
  email?: string;
  payments: string;
  time?: string;
  status?: string;
  date?: string;
}

const SessionTBody: React.FC<SessionTBodyProps> = ({
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
      {(TableData as Item[])?.map((item, index) => {
        return (
          <tr key={index}>
            <td className="p-15px">
              <div className="flex items-center gap-3 ">
                <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                  <span className="text-xs_18 text-[#72748D] font-medium">
                    {item.name &&
                      item.name
                        .split(" ")
                        .map((n) => n.charAt(0))
                        .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm/5 font-semibold text-primary">
                    {item.name}
                  </p>
                  <p className="text-xs_18 text-primary/70 font-medium">
                    {item.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item.date}
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item.time}
            </td>
            <td className="p-15px text-primary text-sm/5 font-semibold">
              ₹ {item.payments}
            </td>
            <td className="p-15px">
              <span
                className={`inline-block py-1.5 px-3  rounded-full text-sm/5 ${
                  item.status && item.status.trim() === "Completed"
                    ? "bg-green-200 text-green-500"
                    : item.status && item.status.trim() === "Upcoming"
                    ? "bg-orange-200 text-orange-600"
                    : item.status && item.status.trim() === "Cancelled"
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
                  onClick={() => setIsRescheduleSession?.(!isRescheduleSession)}
                  className="text-green-600 underline"
                >
                  Reschedule
                </Link>
                <Link
                  href={`javascript:void(0)`}
                  onClick={() => setIsUpdatePayment?.(!isUpdatePayment)}
                  className="text-green-600 underline"
                >
                  Update Payment
                </Link>
              </div>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-5">
                <RegularNotificationIcon
                  className="w-5 h-5 cursor-pointer"
                  pathFillColor="#242424"
                  strokeWidth={`1.5`}
                  onClick={() => setIsReminderModal?.(!isReminderModal)}
                />
                <RegularBinIcon
                  className="w-5 h-5  cursor-pointer"
                  strokeWidth={`1.5`}
                  onClick={() =>
                    setIsCanceledSessionModal?.(!isCanceledSessionModal)
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
