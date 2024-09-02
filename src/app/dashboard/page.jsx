"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  GreenUsersIcon,
  OrangeCalendarIcon,
  PendingPayIcon,
  ReceivedPayIcon,
} from "../../../public/assets/Svgs";
import Button from "@/components/Button";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import FreeSlotsSidebar from "@/components/dashboard/FreeSlotsSidebar";
import ScheduleSessionSidebar from "@/components/dashboard/ScheduleSessionSidebar";
import { CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import SessionDetailSidebar from "@/components/dashboard/SessionDetailSidebar";
import CancellationChart from "@/components/dashboard/CancellationChart";

const activity = [
  {
    title: " Received payment",
    count: "₹220",
    icon: <ReceivedPayIcon className="w-10 h-auto" />,
  },
  {
    title: "Pending payment",
    count: "₹220",
    icon: <PendingPayIcon className="w-10 h-auto" />,
  },
  {
    title: "Patient",
    count: "56",
    icon: <GreenUsersIcon className="w-10 h-auto" />,
  },
  {
    title: "Session",
    count: "23",
    icon: <OrangeCalendarIcon className="w-10 h-auto" />,
  },
];

const sessionTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    time: "2.00 PM, 50 min",
    status: "Completed",
    number: "+91 25253 63632",
    age: "43",
    amount: "₹ 2,200",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishankgajera00@gmail.com",
    time: "2.50 PM, 20 min",
    status: "Upcoming",
    number: "+91 25363 15236",
    age: "23",
    amount: "₹ 700",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    time: "3.10 PM, 30 min",
    status: "Upcoming",
    number: "+91 24513 15236",
    age: "45",
    amount: "₹ 1,800",
  },
  {
    img: "",
    name: "Neha Kikani",
    email: "nehak@gmail.com",
    time: "3.40 PM, 20 min",
    status: "Upcoming",
    number: "+91 97653 63632",
    age: "43",
    amount: "₹ 3,200",
  },
  {
    img: "",
    name: "Divyesh Sojitra",
    email: "divyeh@gmail.com",
    time: "3.40 PM, 20 min",
    status: "Upcoming",
    number: "+91 97653 63632",
    age: "43",
    amount: "₹ 2,200",
  },
  {
    img: "",
    name: "Ayush Dobariya",
    email: "ayu@gmail.com",
    time: "3.40 PM, 20 min",
    status: "Upcoming",
    number: "+91 97653 63632",
    age: "15",
    amount: "₹ 2",
  },
];

const regularClientsTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    tSession: "3",
    cSession: "2",
    pSession: "1",
    tRevenue: "6,000",
    cRevenue: "4,500",
    pRevenue: "1,500",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishankgajera00@gmail.com",
    tSession: "3",
    cSession: "2",
    pSession: "1",
    tRevenue: "6,000",
    cRevenue: "1,500",
    pRevenue: "4,500",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    tSession: "5",
    cSession: "2",
    pSession: "1",
    tRevenue: "6,000",
    cRevenue: "1,500",
    pRevenue: "4,500",
  },
];

const Dashboard = () => {
  const [freeSlote, setFreeSlote] = useState(false);
  const [isScheduleSessionModal, setIsScheduleSessionModal] = useState(false);
  const [isSessionDetails, setIsSessionDetails] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-5">
        <div className="grid grid-cols-7 gap-5">
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between col-span-12">
            <div className="max-w-[422px]">
              <h2 className="text-lg/6 font-semibold text-primary">
                Sync Your Google Calendar
              </h2>
              <p className="text-base/5 text-primary pt-3">
                Schedule Sessions and timely Reminders With just one click.
              </p>
            </div>

            <Button variant="filled" className="max-w-[177px] w-full">
              Setup calendar
            </Button>
          </div>
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between col-span-3">
            <div>
              <h2 className="text-lg/6 font-semibold text-[#242424]">
                Hi Anusha!
              </h2>
              <p className="text-base/5 text-gray-400 pt-3">
                You have an exciting week ahead of you
              </p>
            </div>
            <div className="w-[68px] h-auto">
              <Image
                src="/assets/images/dashboard/hand.webp"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between col-span-9">
            <div>
              <h2 className="text-lg/6 font-semibold text-[#242424] capitalize">
                New Appointment
              </h2>
              <p className="text-base/5 text-gray-400 pt-3 capitalize">
                Guide users through booking a specific time.
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <Button
                onClick={() => setFreeSlote(!freeSlote)}
                variant="default"
              >
                Find me free slot
              </Button>
              <Button
                onClick={() =>
                  setIsScheduleSessionModal(!isScheduleSessionModal)
                }
                variant="outlined"
              >
                schedule a session
              </Button>
            </div>
          </div>
        </div>
        {/* Activity */}
        <div className="p-5 rounded-base bg-white">
          <div className="flex justify-between items-center">
            <h2 className="text-xl/6 font-semibold text-primary">Activity</h2>
            <ul className="flex items-center gap-[30px] text-base/4 font-medium">
              <li className="cursor-pointer p-2.5 text-blue-600 border-b border-blue-600">
                Today
              </li>
              <li className="cursor-pointer p-2.5 text-gray-400">Week</li>
              <li className="cursor-pointer p-2.5 text-gray-400">This Month</li>
              <li className="cursor-pointer p-2.5 text-gray-400">Last Month</li>
            </ul>
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-5 pt-5">
            {activity?.map((item, index) => (
              <div
                key={index}
                className={`p-5  rounded-base flex justify-between items-end ${
                  item.title.trim() === "Received payment"
                    ? "shadow-[0px_4px_16px_0px_#EB63B71F]"
                    : item.title.trim() === "Pending payment"
                    ? "shadow-[0px_4px_16px_0px_#3CC1FC29]"
                    : item.title.trim() === "Patient"
                    ? "shadow-[0px_4px_16px_0px_#449C6326]"
                    : item.title.trim() === "Session"
                    ? "shadow-[0px_4px_16px_0px_#F8930026]"
                    : ""
                }`}
              >
                <div>
                  <p className="capitalize text-base/5 text-primary">
                    {item.title}
                  </p>
                  <p className="text-2xl/8 font-semibold text-primary pt-[18px]">
                    {item.count}
                  </p>
                </div>
                <div>{item.icon}</div>
              </div>
            ))}
          </div>
        </div>
        {/* session */}
        <div className=" rounded-base bg-white">
          <div className="p-5 pb-0">
            <div className="flex items-center justify-between">
              <h2 className="text-xl/6 font-semibold text-primary">Session</h2>
              <button className="relative flex items-center gap-2 text-base/6 font-medium text-[#5E585A]">
                <span>July, 2024</span> <CaretDown size={20} />
              </button>
            </div>
            <div className="flex items-center justify-between pt-5">
              <ul className="flex items-center gap-[30px] text-base/4 font-medium text-[#A2A4B4]">
                <li className="cursor-pointer p-2.5 text-[#242424] border-b border-[#242424]">
                  All
                </li>
                <li className="cursor-pointer p-2.5">Upcoming</li>
                <li className="cursor-pointer p-2.5">Completed</li>
              </ul>
              <div className="flex items-center gap-2 max-w-[351px] w-full py-15px px-5 border border-[#9B9DB7] rounded-full text-xs text-primary">
                <MagnifyingGlass size={20} className="text-[#A2A4B4]" />
                <input
                  type="search"
                  placeholder="Search your client name and id"
                  className="outline-none w-full"
                />
              </div>
            </div>
          </div>
          {/* session table */}
          <div className="pt-30px">
            <table className="min-w-full bg-white border-y border-gray-100">
              <thead className="text-left">
                <tr className="bg-blue-100 uppercase">
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Name
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Session Time
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Session status
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Mobile Number
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Age
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    session Amount
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5 text-center">
                    Appointment
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {sessionTable?.map((item, index) => {
                  const formatName = (name) => {
                    const nameParts = name.split(" ");
                    const firstName = nameParts[0];
                    const lastNameInitial = nameParts[1]?.charAt(0);
                    return `${firstName} ${lastNameInitial} (${name})`;
                  };

                  return (
                    <tr key={index}>
                      <td className="px-2.5 py-15px flex items-center gap-3 min-w-[121px]">
                        <div className="w-[34px] h-[34px] rounded-full border border-[#64748B33] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full"
                            />
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
                          <p className="text-xs_18 text-gray-400">
                            {item.email}
                          </p>
                        </div>
                      </td>
                      <td className="px-2.5 py-15px text-primary text-sm/5 min-w-[121px]">
                        {item.time}
                      </td>
                      <td className="px-2.5 py-15px min-w-[121px]">
                        <span
                          className={`inline-block py-1.5 px-3  rounded-full text-sm/5 ${
                            item.status.trim() === "Completed"
                              ? "bg-green-200 text-green-500"
                              : item.status.trim() === "Upcoming"
                              ? "bg-orange-200 text-orange-600"
                              : ""
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td className="px-2.5 py-15px text-primary text-sm/5 min-w-[121px]">
                        {item.number}
                      </td>
                      <td className="px-2.5 py-15px text-primary text-sm/5 min-w-[121px]">
                        {item.age}
                      </td>
                      <td className="px-2.5 py-15px text-primary text-sm/5 min-w-[121px]">
                        {item.amount}
                      </td>
                      <td className="px-2.5 py-15px shadow-[-3px_0px_11.9px_0px_#5E83D30D] text-center">
                        <Button
                          variant="outlined"
                          className={`!px-4.5 !py-2`}
                          onClick={() => setIsSessionDetails(!isSessionDetails)}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="flex items-center justify-between py-[11px] px-5 mt-30px shadow-[0px_-1px_16.5px_0px_#F6F0FF]">
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 border border-primary rounded-xl text-sm/4 text-primary">
                  1
                </button>
                <p className="text-sm/4 text-primary">of 0 pages</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <button className="py-15px px-5 rounded-xl border border-gray-400 text-gray-400 text-sm/4">
                  Previous
                </button>
                <button className="py-15px px-5 rounded-xl border border-primary text-primary text-sm/4">
                  Next Page
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Most regular clients and Cancellation */}
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 bg-white rounded-base overflow-hidden">
            <div className="flex items-center justify-between p-5">
              <h2 className="text-xl/6 font-semibold text-primary">
                Most regular clients
              </h2>
              <button className="relative flex items-center gap-2 text-base/6 font-medium text-[#5E585A]">
                <span>This Month</span> <CaretDown size={20} />
              </button>
            </div>
            <table className="min-w-full bg-white border-t border-gray-100">
              <thead className="text-left">
                <tr className="bg-blue-100 uppercase">
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Name
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Session
                  </th>
                  <th className="px-2.5 py-5 font-medium text-gray-500 text-sm/5">
                    Total Revenue
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {regularClientsTable?.map((item, index) => {
                  const formatName = (name) => {
                    const nameParts = name.split(" ");
                    const firstName = nameParts[0];
                    const lastNameInitial = nameParts[1]?.charAt(0);
                    return `${firstName} ${lastNameInitial} (${name})`;
                  };

                  return (
                    <tr key={index}>
                      <td className="px-15px py-[35px] flex items-center gap-3">
                        <div className="w-[34px] h-[34px] rounded-full border border-[#64748B33] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                          {item.img ? (
                            <img
                              src={item.img}
                              alt=""
                              className="w-full h-full"
                            />
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
                          <p className="text-xs_18 text-gray-400">
                            {item.email}
                          </p>
                        </div>
                      </td>
                      <td className="px-15px py-[35px]">
                        <div className=" flex items-center gap-5 text-sm/5">
                          <p className="text-primary">
                            {item.tSession} Session
                          </p>
                          <div className="text-gray-400">
                            <p>{item.cSession} Completed</p>
                            <p>{item.pSession} Pending</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-15px py-[35px]">
                        <div className=" flex items-center gap-5 text-sm/5">
                          <p className="text-primary">
                            {item.tRevenue} Session
                          </p>
                          <div className="text-gray-400">
                            <p>{item.cRevenue} Completed</p>
                            <p>{item.pRevenue} Pending</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-span-2 bg-white rounded-base overflow-hidden">
            <div className="flex items-center justify-between p-5">
              <h2 className="text-xl/6 font-semibold text-primary">
                Cancellation
              </h2>
              <button className="relative flex items-center gap-2 text-base/6 font-medium text-[#5E585A]">
                <span>This Month</span> <CaretDown size={20} />
              </button>
            </div>
            <div className="flex items-center justify-center mt-5">
              <div className="max-w-[338px] max-h-[338px] w-full h-full">
                <CancellationChart />
              </div>
              {/* <div className=" bg-white p-10">
                <div className="w-full h-full border-2 border-[#BABABA] border-dashed rounded-full text-center flex justify-center items-center">
                  <div>
                    <h3 className="text-xl/7 text-black font-semibold">70</h3>
                    <p className="text-sm/7 text-black font-medium">
                      Session cancelled
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <FreeSlotsSidebar freeSlote={freeSlote} setFreeSlote={setFreeSlote} />
      <ScheduleSessionSidebar
        isScheduleSessionModal={isScheduleSessionModal}
        setIsScheduleSessionModal={setIsScheduleSessionModal}
      />
      <SessionDetailSidebar
        isSessionDetails={isSessionDetails}
        setIsSessionDetails={setIsSessionDetails}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
