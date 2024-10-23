import Link from "next/link";
import React from "react";
import {
  RegularBinIcon,
  RegularNotificationIcon,
} from "../../../../../public/assets/Svgs";
import { formatTime } from "@/utils/axios";
import Image from "next/image";

interface DashboardTBodyProps {
  TableData: Array<unknown>;
  sessionLoading?: boolean;
  setIsRescheduleSession?: (value: boolean) => void;
  isReminderModal?: boolean;
  setIsReminderModal?: (value: boolean) => void;
  isCanceledSessionModal?: boolean;
  setIsCanceledSessionModal?: (value: boolean) => void;
  setSingleSessionID?: (value: string) => void;
}

interface Item {
  img?: string;
  name?: string;
  email?: string;
  time?: string;
  status?: string;
  amount?: string;
  sessionFee?: string;
  previousFee?: string;
  fromDate?: string;
  toDate?: string;
  recurrenceDateId?: string;
}

const DashboardTBody: React.FC<DashboardTBodyProps> = ({
  TableData = [],
  sessionLoading,
  setIsRescheduleSession,
  setIsReminderModal,
  isReminderModal,
  setIsCanceledSessionModal,
  isCanceledSessionModal,
  setSingleSessionID,
}) => {
  return (
    <tbody className="divide-y divide-primary/10">
      {sessionLoading ? (
        // Render skeletons when sessionLoading is true
        [...Array(5)].map((_, index) => (
          <tr key={index} className="animate-pulse">
            <td className="p-15px">
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full bg-gray-200"></div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
              </div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-20"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-16"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </td>
            <td className="p-15px">
              <div className="h-4 bg-gray-200 rounded w-28"></div>
            </td>
            <td className="p-15px">
              <div className="flex items-center gap-5">
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              </div>
            </td>
          </tr>
        ))
      ) : TableData.length === 0 ? (
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
        // Render actual table rows when not loading and data is available
        (TableData as Item[])?.map((item: Item, index: number) => {
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
                {formatTime(item?.fromDate ?? "")} -{" "}
                {formatTime(item?.toDate ?? "")}
              </td>
              <td className="p-15px">
                <span
                  className={`inline-block py-1.5 px-3 rounded-full text-sm/5 ${
                    item.status && item.status.trim() === "completed"
                      ? "bg-green-200 text-green-500"
                      : item.status && item.status.trim() === "upcoming"
                      ? "bg-orange-200 text-orange-600"
                      : item.status && item.status.trim() === "cancelled"
                      ? "bg-[#FFEDED] text-[#FF5959]"
                      : ""
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-15px text-primary text-sm/5 font-semibold">
                ₹ {item?.amount}
              </td>
              <td className="p-15px text-primary/70 text-sm/5 font-medium">
                {item.sessionFee || "-"}
              </td>
              <td className="p-15px text-primary text-sm/5">
                <div className="flex items-center gap-3">
                  <p className="font-medium">{item.previousFee || "-"}</p>{" "}
                  {item.previousFee === "Pending" && (
                    <div className="relative group cursor-pointer">
                      <span className="w-5 h-5 flex items-center justify-center border-[1.5px] border-primary text-primary font-medium rounded-full">
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
                <div className="flex items-center gap-6 text-sm/6 font-medium">
                  <Link
                    href={""}
                    className={`underline ${
                      ["completed", "cancelled"].includes(
                        item.status?.trim() ?? ""
                      )
                        ? "text-green-600/50 cursor-not-allowed"
                        : "text-green-600"
                    }`}
                    onClick={() => {
                      if (
                        !["completed", "cancelled"].includes(
                          item.status?.trim() ?? ""
                        )
                      ) {
                        setIsRescheduleSession?.(true);
                        if (item?.recurrenceDateId) {
                          setSingleSessionID?.(item?.recurrenceDateId);
                        }
                      }
                    }}
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
                      onClick={() => setIsReminderModal?.(!isReminderModal)}
                    />
                    <RegularBinIcon
                      className="w-5 h-5  cursor-pointer"
                      strokeWidth={`1.5`}
                      onClick={() => {
                        setIsCanceledSessionModal?.(!isCanceledSessionModal);
                        if (item?.recurrenceDateId) {
                          setSingleSessionID?.(item?.recurrenceDateId);
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

export default DashboardTBody;
