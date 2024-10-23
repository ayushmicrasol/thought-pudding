import {
  RegularBinIcon,
  RegularNotificationIcon,
} from "../../../../../public/assets/Svgs";
import React from "react";
import { formatDate, formatTime } from "@/utils/axios";
import Image from "next/image";

interface SessionTBodyProps {
  TableData: Array<unknown>; // Define the type of TableData here
  sessionLoading: boolean;
  setIsUpdatePayment?: (value: boolean) => void;
  isUpdatePayment?: boolean;
  setIsRescheduleSession?: (value: boolean) => void;
  isRescheduleSession?: boolean;
  setIsReminderModal?: (value: boolean) => void;
  isReminderModal?: boolean;
  setIsCanceledSessionModal?: (value: boolean) => void;
  isCanceledSessionModal?: boolean;
  setSingleSessionID?: (value: string) => void;
  setPaymentID?: (value: string) => void;
  setRescheduleSessionID?: (value: string) => void;
  setSingleSessionData: (value: Item) => void;
}

export interface Item {
  img?: string;
  name?: string;
  email?: string;
  amount: string;
  time?: string;
  status?: string;
  date?: string;
  fromDate: string;
  toDate: string;
  tillDate: string;
  recurrenceDateId?: string;
  _id: string;
}

const SessionTBody: React.FC<SessionTBodyProps> = ({
  TableData,
  setIsUpdatePayment,
  // isUpdatePayment,
  setIsRescheduleSession,
  // isRescheduleSession,
  setIsReminderModal,
  isReminderModal,
  setIsCanceledSessionModal,
  isCanceledSessionModal,
  sessionLoading,
  setSingleSessionID,
  setPaymentID,
  setRescheduleSessionID,
  setSingleSessionData,
}) => {
  const skeletonRows = Array(5).fill(0); // Adjust the number to match the desired skeleton rows

  return (
    <tbody className="divide-y divide-primary/10">
      {sessionLoading ? (
        skeletonRows.map((_, index) => (
          <tr key={index} className="animate-pulse">
            <td className="p-15px">
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full bg-gray-200"></div>
                <div className="space-y-2">
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-3 w-40 bg-gray-200 rounded"></div>
                </div>
              </div>
            </td>
            <td className="p-15px">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 w-36 bg-gray-200 rounded"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </td>
            <td className="p-15px">
              <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
            </td>
            <td className="p-15px">
              <div className="flex gap-5">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              </div>
            </td>
          </tr>
        ))
      ) : TableData?.length === 0 ? (
        // Display a "Data is not found" message if TableData is empty and not loading
        <tr>
          <td
            colSpan={8}
            className="p-15px text-center text-primary/70 text-sm/5"
          >
            <div className="flex flex-col items-center justify-center pt-16 pb-20">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/dashboard/not-found-session-list.webp"
                alt="no-data"
                className="w-[185px] h-auto"
              />
              <p className="text-xl/6 font-bold pt-4 text-primary">
                No Sessions Found!
              </p>
            </div>
          </td>
        </tr>
      ) : (
        (TableData as Item[])?.map((item, index) => {
          {
            console.log(item, "item");
          }
          return (
            <tr key={index}>
              <td className="p-15px">
                <div className="flex items-center gap-3">
                  <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                    <span className="text-xs_18 text-[#72748D] font-medium uppercase">
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
                {formatDate(item.fromDate)} - {formatDate(item.toDate)}
              </td>
              <td className="p-15px text-primary/70 text-sm/5 font-medium uppercase">
                {formatTime(item.fromDate)} - {formatTime(item.toDate)}
              </td>
              <td className="p-15px text-primary text-sm/5 font-semibold">
                ₹ {item.amount}
              </td>
              <td className="p-15px">
                <span
                  className={`inline-block py-1.5 px-3 rounded-full text-sm/5 capitalize ${
                    item.status && item.status.trim() === "completed"
                      ? "bg-green-200 text-green-500"
                      : item.status &&
                        ["Upcoming", "confirmed"].includes(item.status.trim())
                      ? "bg-orange-200 text-orange-600"
                      : item.status && item.status.trim() === "cancelled"
                      ? "bg-[#FFEDED] text-[#FF5959]"
                      : item.status && item.status.trim() === "rescheduled"
                      ? "bg-yellow-600/10 text-yellow-600"
                      : ""
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-15px">
                <div className="flex items-center gap-6 text-sm/6 font-medium">
                  <button
                    onClick={() => {
                      if (
                        !["completed", "cancelled"].includes(
                          item.status?.trim() ?? ""
                        )
                      ) {
                        setIsRescheduleSession?.(true);
                        setRescheduleSessionID?.(item?.recurrenceDateId || "");
                      }
                    }}
                    className={`underline ${
                      ["completed", "cancelled"].includes(
                        item.status?.trim() ?? ""
                      )
                        ? "text-green-600/50 cursor-not-allowed"
                        : "text-green-600"
                    }`}
                  >
                    Reschedule
                  </button>

                  <button
                    onClick={() => {
                      if (
                        !["completed", "cancelled"].includes(
                          item.status?.trim() ?? ""
                        )
                      ) {
                        setIsUpdatePayment?.(true);
                        setPaymentID?.(item?.recurrenceDateId || ""); // Store the session ID
                      }
                    }}
                    className={`underline ${
                      ["completed", "cancelled"].includes(
                        item.status?.trim() ?? ""
                      )
                        ? "text-green-600/50 cursor-not-allowed"
                        : "text-green-600"
                    }`}
                  >
                    Update Payment
                  </button>
                </div>
              </td>
              <td className="p-15px">
                {item.status &&
                ["completed", "cancelled"].includes(item.status.trim()) ? (
                  <div className="flex items-center gap-5">
                    <span>-</span>
                    <span>-</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <RegularNotificationIcon
                      className="w-5 h-5 cursor-pointer"
                      pathFillColor="#242424"
                      strokeWidth={`1.5`}
                      onClick={() => {
                        setIsReminderModal?.(!isReminderModal);
                        setSingleSessionData?.(item);
                        if (item?.recurrenceDateId) {
                          setSingleSessionID?.(item.recurrenceDateId);
                        }
                      }}
                    />
                    <RegularBinIcon
                      className="w-5 h-5 cursor-pointer"
                      strokeWidth={`1.5`}
                      onClick={() => {
                        setIsCanceledSessionModal?.(!isCanceledSessionModal);
                        if (item?.recurrenceDateId) {
                          setSingleSessionID?.(item.recurrenceDateId);
                        }
                      }}
                    />
                  </div>
                )}
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default SessionTBody;
