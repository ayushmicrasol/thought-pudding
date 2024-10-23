import React, { useEffect, useState } from "react";
import { RegularNotificationIcon } from "../../../../../public/assets/Svgs";
import { CaretDown } from "@phosphor-icons/react";
import { fetcher, formatDate, formatTime } from "@/utils/axios";
import { mutate } from "swr";
import endpoints from "@/utils/endpoints";
import Image from "next/image";
import { updateStatus } from "@/services/payment.service";

const markAs = [
  "Still pending",
  "Paid Delay",
  "Paid on time",
  "Free Cancellation",
  "Paid Cancellation",
];


interface PaymentTBodyProps {
  TableData: Array<unknown>;
  setIsReminderModal: (value: boolean) => void;
  isReminderModal: boolean;
  setSinglePaymentData: (item: Item) => void;
  paymentLoading: boolean;
  query: string;
}

export interface Item {
  _id: string;
  clientId?: { name: string };
  customerId?: { email: string };
  sessionDate?: string;
  amount?: { value: string };
  paymentType?: string;
  paymentDate?: string;
  status?: string;
}

const PaymentTBody: React.FC<PaymentTBodyProps> = ({
  TableData,
  setIsReminderModal,
  isReminderModal,
  setSinglePaymentData,
  paymentLoading,
  query,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: number]: string;
  }>({});
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handleSelect = (index: number, option: string, itemId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [index]: option }));
    setOpenDropdownIndex(null);
    updateStatus(itemId, option);

    const url = `${endpoints.paymentTracker.getPaymentsByTherapist}?${query}`;

    // Log the URL to verify it's correct
    console.log(url, "mutate URL");

    mutate(url, async () => {
      // This callback can be used to fetch updated data if needed
      await fetcher(url);
    });
  };

  useEffect(() => {
    setSelectedOptions(
      TableData.reduce((acc: { [key: number]: string }, item, index) => {
        acc[index] = (item as Item).status || "Still pending";
        return acc;
      }, {})
    );
  }, [TableData]);

  const renderSkeletonRow = (key: number) => (
    <tr key={key}>
      <td className="p-15px">
        <div className="flex items-center gap-3 animate-pulse">
          <div className="w-[34px] h-[34px] rounded-full bg-gray-200"></div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-1"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </td>
      {Array(6)
        .fill("")
        .map((_, idx) => (
          <td key={idx} className="p-15px">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          </td>
        ))}
      <td className="p-15px">
        <div className="flex gap-5">
          <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
        </div>
      </td>
    </tr>
  );

  return (
    <tbody className="divide-y divide-primary/10">
      {paymentLoading ? (
        Array(5)
          .fill("")
          .map((_, index) => renderSkeletonRow(index)) // Render 5 skeleton rows
      ) : TableData.length > 0 ? (
        (TableData as Item[]).map((item, index) => (
          <tr key={item._id || index}>
            <td className="p-15px">
              <div className="flex items-center gap-3">
                <div className="w-[34px] h-[34px] rounded-full border border-primary/20 bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                  <span className="text-xs_18 text-[#72748D] font-medium">
                    {item?.clientId?.name
                      ?.split(" ")
                      .map((n) => n.charAt(0))
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm/5 font-semibold text-primary">
                    {item?.clientId?.name}
                  </p>
                  <p className="text-xs_18 text-primary/70 font-medium">
                    {item?.customerId?.email}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item?.sessionDate ? formatDate(item?.sessionDate) : "-"}
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item?.sessionDate ? formatTime(item?.sessionDate) : "-"}
            </td>
            <td className="p-15px text-primary text-sm/5 font-semibold">
              ₹ {item?.amount?.value}
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item?.paymentType}
            </td>
            <td className="p-15px relative">
              <div
                className="flex items-center justify-between text-primary cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <p className="text-sm/7 font-medium">
                  {selectedOptions[index]}
                </p>
                <CaretDown size={20} />
              </div>
              {openDropdownIndex === index && (
                <ul className="absolute w-full left-0 py-2.5 rounded-base bg-white shadow-[0px_4px_12px_0px_#00000014] z-10">
                  {markAs.map((option) => (
                    <li
                      key={option}
                      className={`p-2.5 text-xs_18 cursor-pointer ${selectedOptions[index] === option
                        ? "bg-green-600/20 text-green-600 font-medium"
                        : "text-primary"
                        } hover:bg-green-600/10`}
                      onClick={() => handleSelect(index, option, item._id)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </td>
            <td className="p-15px text-primary/70 text-sm/5 font-medium">
              {item?.paymentDate ? formatDate(item?.paymentDate) : "-"}
            </td>
            {item?.status !== "Paid on time" && (
              <td className="p-15px">
                <div className="flex items-center gap-5">
                  <RegularNotificationIcon
                    className="w-5 h-5 cursor-pointer"
                    pathFillColor="#242424"
                    strokeWidth="1.5"
                    onClick={() => {
                      setIsReminderModal(!isReminderModal);
                      setSinglePaymentData(item);
                    }}
                  />
                </div>
              </td>
            )}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={8} className="p-15px text-center text-primary/70">
            <div className="flex flex-col items-center justify-center pt-16 pb-20">
              <Image
                width={1000}
                height={1000}
                src="/assets/images/dashboard/not-found-payment-list.webp"
                alt="no-data"
                className="w-[172px] h-auto"
              />
              <p className="text-xl/6 font-bold pt-3.5 text-primary">
                No Payment Records Yet
              </p>
            </div>
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default PaymentTBody;
