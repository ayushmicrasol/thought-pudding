"use client";
import Button from "@/components/common/Button";
import SettingLayout from "@/layout/dashboard/SettingLayout";
import { usePaymentHistory } from "@/services/setting.service";
import { formatDate } from "@/utils/axios";
import { CheckCircle } from "@phosphor-icons/react";
import React from "react";

const subscriptionPlan = [
  {
    title: "Resources to Grow Your Practice",
    Satir: true,
    Freud: false,
    Winnicott: false,
  },
  {
    title: "Practice Woes with Manager",
    Satir: false,
    Freud: true,
    Winnicott: true,
  },
  {
    title: "Unlock Resources for Your Practice",
    Satir: false,
    Freud: true,
    Winnicott: true,
  },
  {
    title: "Sessions to Boost Your Practice",
    Satir: false,
    Freud: false,
    Winnicott: true,
  },
  {
    title: "Newsletter with Key Highlights",
    Satir: true,
    Freud: true,
    Winnicott: true,
  },
];

// const paymentHistory = [
//   {
//     plan: "Satir",
//     amount: "₹1,000",
//     status: true,
//     validity: "30",
//     subscriptionDate: "5,Aug 2024 to 03,Nov 2024",
//     purchaseDate: "5,July 2024",
//   },
//   {
//     plan: "Winnicott",
//     amount: "₹500",
//     status: false,
//     validity: "90",
//     subscriptionDate: "5,Aug 2024 to 03,Nov 2024",
//     purchaseDate: "5,July 2024",
//   },
//   {
//     plan: "Free Trial Plan",
//     amount: "0",
//     status: true,
//     validity: "30",
//     subscriptionDate: "5,Aug 2024 to 03,Nov 2024",
//     purchaseDate: "5,July 2024",
//   },
// ];
export interface PaymentHistoryItem {
  subscriptionId: {
    name: string;
    price: number;
    status: string;
    validDays: string;
  };
  validFrom: string;
  validTill: string;
  createdAt: string;
}
const Subscription = () => {
  const { paymentHistoryData, paymentHistoryLoading } = usePaymentHistory();
  console.log({ paymentHistoryData, paymentHistoryLoading });

  return (
    <SettingLayout>
      <div>
        <h1 className="text-xl_30 font-semibold text-primary">Subscription</h1>
        <div className="mt-5 overflow-hidden w-full border border-primary/10 rounded-base">
          <table className="">
            <thead className="text-left ">
              <tr className="">
                <th className="w-[300px] pt-3.5 pb-5 px-5">
                  <div className="max-w-[224px]">
                    <h2 className="text-[22px] leading-7 font-semibold text-primary">
                      <span className="text-green-600">Simple plan</span> for
                      everything
                    </h2>
                    <p className="text-sm/5 font-medium text-primary pt-2">
                      Find the best plan and the best price that right for you
                    </p>
                  </div>
                </th>
                <th className="w-[255px] pt-3.5 pb-5">
                  <div className="w-full h-[249px] flex flex-col justify-center items-center">
                    <p className="text-xl/6 font-medium text-primary">Satir</p>
                    <p className="pt-8 text-[32px] leading-9 font-semibold text-primary">
                      ₹8.30{" "}
                      <span className="text-xs font-medium">/ Per day</span>
                    </p>
                    <Button
                      variant="lightGreen"
                      className="!text-base_18 w-[150px] mt-10"
                    >
                      PAY ₹249
                    </Button>
                  </div>
                </th>
                <th className="w-[255px] pt-3.5 pb-5">
                  <div className="w-full h-[249px] flex flex-col justify-center items-center bg-primary rounded-lg">
                    <p className="text-xl/6 font-medium text-white">Freud</p>
                    <p className="pt-8 text-[32px] leading-9 font-semibold text-white">
                      ₹33.33{" "}
                      <span className="text-xs font-medium">/ Per day</span>
                    </p>
                    <Button
                      variant="filled"
                      className="!text-base_18 w-[150px] font-semibold mt-10"
                    >
                      PAY ₹1000
                    </Button>
                  </div>
                </th>
                <th className="w-[255px] pt-3.5 pb-5">
                  <div className="w-full h-[249px] flex flex-col justify-center items-center">
                    <p className="text-xl/6 font-medium text-primary">
                      Winnicott
                    </p>
                    <p className="pt-8 text-[32px] leading-9 font-semibold text-primary">
                      ₹16.67{" "}
                      <span className="text-xs font-medium">/ Per day</span>
                    </p>
                    <Button
                      variant="lightGreen"
                      className="!text-base_18 w-[150px] mt-10"
                    >
                      PAY ₹500
                    </Button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptionPlan?.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 1 ? "bg-green-600/15" : ""}
                >
                  <td className="pl-5 py-6.5">
                    <p className="text-base_18 text-primary font-medium">
                      {item.title}
                    </p>
                  </td>
                  <td>
                    <p className="text-center text-primary">
                      {item.Satir === true ? (
                        <CheckCircle
                          size={22}
                          weight="fill"
                          className="mx-auto text-green-500"
                        />
                      ) : (
                        "-"
                      )}
                    </p>
                  </td>
                  <td>
                    <p className="text-center text-primary">
                      {item.Freud === true ? (
                        <CheckCircle
                          size={22}
                          weight="fill"
                          className="mx-auto text-green-500"
                        />
                      ) : (
                        "-"
                      )}
                    </p>
                  </td>
                  <td>
                    <p className="text-center text-primary">
                      {item.Winnicott === true ? (
                        <CheckCircle
                          size={22}
                          weight="fill"
                          className="mx-auto text-green-500"
                        />
                      ) : (
                        "-"
                      )}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-xl_30 font-semibold text-primary pt-7.5">
          Payment history
        </h2>

        <div className="mt-3 overflow-hidden w-full border border-primary/10 rounded-base">
          <table className="w-full">
            <thead className="text-left">
              <tr className="bg-green-600/15 text-sm/5  text-primary uppercase">
                <th className="px-2.5 py-5 font-medium">#</th>
                <th className="px-2.5 py-5 font-medium">plan</th>
                <th className="px-2.5 py-5 font-medium">Amount</th>
                <th className="px-2.5 py-5 font-medium">Status</th>
                <th className="px-2.5 py-5 font-medium">validity</th>
                <th className="px-2.5 py-5 font-medium">subscription date</th>
                <th className="px-2.5 py-5 font-medium">purchase date</th>
              </tr>
            </thead>
            <tbody>
              {(paymentHistoryData as PaymentHistoryItem[])?.map(
                (item, index) => (
                  <tr key={index} className="text-sm/5 text-primary">
                    <td className="px-2.5 py-3">{index + 1}</td>
                    <td className="px-2.5 py-3">
                      {item?.subscriptionId?.name}
                    </td>
                    <td className="px-2.5 py-3">
                      {item?.subscriptionId?.price}
                    </td>
                    <td className="px-2.5 py-3">
                      <p
                        className={`py-1.5 px-3 inline-block ${
                          item?.subscriptionId?.status === "ACTIVE"
                            ? "text-green-500 bg-green-200 rounded-full"
                            : "text-red-500 bg-red-200 rounded-full"
                        }  rounded-full`}
                      >
                        {item?.subscriptionId?.status === "ACTIVE"
                          ? "Active"
                          : "Inactive"}
                      </p>
                    </td>
                    <td className="px-2.5 py-3">
                      {item?.subscriptionId?.validDays} Days
                    </td>
                    <td className="px-2.5 py-3">
                      {formatDate(item.validFrom)} to{" "}
                      {formatDate(item.validTill)}
                    </td>
                    <td className="px-2.5 py-3">
                      {formatDate(item.createdAt)}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </SettingLayout>
  );
};

export default Subscription;
