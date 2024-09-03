"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
import { CaretDown, Check, MagnifyingGlass } from "@phosphor-icons/react";
import SessionDetailSidebar from "@/components/dashboard/SessionDetailSidebar";
import CancellationChart from "@/components/dashboard/CancellationChart";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import SelectDropdown from "@/components/SelectDropdown";
import Tabs from "@/components/common/Tabs";

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

const activityTab = [
  { label: "Today" },
  { label: "Week" },
  { label: "This Month" },
  { label: "Last Month" },
];

const sessionTabs = [
  { label: "All" },
  { label: "Upcoming" },
  { label: "Completed" },
];

const Dashboard = () => {
  const [freeSlote, setFreeSlote] = useState(false);
  const [isScheduleSessionModal, setIsScheduleSessionModal] = useState(false);
  const [isSessionDetails, setIsSessionDetails] = useState(false);

  // session Dates Swiper and dropdown start ------------------------------------
  const [isDateDrop, setIsDateDrop] = useState(false);
  const [activeTab, setActiveTab] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [dates, setDates] = useState([]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from({ length: 20 }, (_, i) => 2024 - i);

  useEffect(() => {
    generateDates(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]);

  const generateDates = (month, year) => {
    // Generate the dates based on the selected month and year
    const daysInMonth = new Date(year, months.indexOf(month) + 1, 0).getDate();
    const dateArray = Array.from({ length: daysInMonth }, (_, i) => ({
      day: String(i + 1).padStart(2, "0"),
      weekday: new Date(year, months.indexOf(month), i + 1).toLocaleString(
        "en-US",
        { weekday: "short" }
      ),
    }));
    setDates(dateArray);
  };

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
    setIsDateDrop(false);
  };

  const handleSelectYear = (year) => {
    setSelectedYear(year);
    setIsDateDrop(false);
  };

  useEffect(() => {
    const swiper = document.querySelector(".swiper").swiper;

    // Attach the refs to the swiper instance
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      // Re-init navigation
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  // session Dates Swiper and dropdown end -----------------------------

  return (
    <DashboardLayout>
      <div className="space-y-5">
        <div className="grid md:grid-cols-7 gap-5">
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between md:col-span-12">
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
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between md:col-span-3">
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
          <div className="bg-white px-5 py-11 rounded-base flex items-center justify-between md:col-span-9">
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
            {/* <ul className="flex items-center gap-[30px] text-base/4 font-medium">
              <li className="cursor-pointer p-2.5 text-blue-600 border-b border-blue-600">
                Today
              </li>
              <li className="cursor-pointer p-2.5 text-gray-400">Week</li>
              <li className="cursor-pointer p-2.5 text-gray-400">This Month</li>
              <li className="cursor-pointer p-2.5 text-gray-400">Last Month</li>
            </ul> */}
            <Tabs tabs={activityTab} />
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
              <div className="relative">
                <button
                  className="relative flex items-center gap-2 text-base/6 font-medium text-gray-500"
                  onClick={() => setIsDateDrop(!isDateDrop)}
                >
                  <span>{`${selectedMonth}, ${selectedYear}`}</span>
                  <CaretDown
                    size={20}
                    className={`transition-all duration-300 ${
                      isDateDrop ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`absolute top-full right-0 w-[360px] bg-white rounded-2xl shadow-[0px_4px_12px_0px_#2C58BB1A] overflow-hidden transition-all duration-300 z-20 ${
                    isDateDrop ? "h-[428px]" : "h-0"
                  }`}
                >
                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      className={`p-[22px] font-medium text-sm_18 flex items-end justify-center gap-2 ${
                        activeTab === "month" ? "text-primary" : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab("month")}
                    >
                      {selectedMonth}{" "}
                      {activeTab === "month" && (
                        <CaretDown size={18} weight="fill" />
                      )}
                    </button>
                    <button
                      className={`p-[22px] font-medium text-sm_18 flex items-end justify-center gap-2 ${
                        activeTab === "year" ? "text-primary" : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab("year")}
                    >
                      {selectedYear}
                      {activeTab === "year" && (
                        <CaretDown size={18} weight="fill" />
                      )}
                    </button>
                  </div>
                  <hr className="border-[#CAC4D0]" />
                  <div className="pt-2 pb-5 overflow-y-auto h-full">
                    {activeTab === "month" && (
                      <ul className="month">
                        {months.map((month) => (
                          <li
                            key={month}
                            className={`py-3 px-4 text-sm_18 text-[#1D1B20] cursor-pointer flex items-center gap-4 ${
                              month === selectedMonth ? "bg-blue-600/15" : ""
                            }`}
                            onClick={() => handleSelectMonth(month)}
                          >
                            <div className="w-6">
                              {month === selectedMonth && <Check size={24} />}
                            </div>
                            {month}
                          </li>
                        ))}
                      </ul>
                    )}
                    {activeTab === "year" && (
                      <ul className="years">
                        {years.map((year) => (
                          <li
                            key={year}
                            className={`py-3 px-4 text-sm_18 text-[#1D1B20] cursor-pointer flex items-center  gap-4 ${
                              year === selectedYear ? "bg-blue-600/15" : ""
                            }`}
                            onClick={() => handleSelectYear(year)}
                          >
                            <div className="w-6">
                              {year === selectedYear && <Check size={24} />}
                            </div>
                            {year}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="max-w-[1152px] mx-auto relative">
                <Swiper
                  slidesPerView={9}
                  spaceBetween={30}
                  modules={[Navigation]}
                  className="DateSwiper"
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  onSwiper={(swiper) => {
                    // Swiper navigation initialization
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {dates.map((date) => (
                    <SwiperSlide key={date.day}>
                      <div className="h-[70px] flex items-center justify-center text-center">
                        <button className="text-primary focus:text-blue-600 hover:text-blue-600 transition-all duration-500">
                          <p className="text-[26px] leading-[30px] ">
                            {date.day}
                          </p>
                          <p className="text-sm leading-[30px]">
                            {date.weekday}
                          </p>
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <button
                  ref={prevRef}
                  className="absolute top-1/2 -left-24 transform -translate-y-1/2 rounded-full z-10"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      rx="10"
                      transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 20.5)"
                      fill="#F5F5F7"
                    />
                    <path
                      d="M7.21056 11.0074L11.4901 15.2901C11.6244 15.4245 11.8065 15.5 11.9965 15.5C12.1864 15.5 12.3686 15.4245 12.5029 15.2901C12.6372 15.1557 12.7126 14.9734 12.7126 14.7833C12.7126 14.5932 12.6372 14.4109 12.5029 14.2765L8.72265 10.5006L12.5029 6.7247C12.5697 6.65835 12.6228 6.5794 12.659 6.49242C12.6952 6.40544 12.7139 6.31215 12.7139 6.21792C12.7139 6.12369 12.6952 6.0304 12.659 5.94342C12.6228 5.85644 12.5697 5.77749 12.5029 5.71114C12.4366 5.64423 12.3577 5.59113 12.2708 5.55489C12.1839 5.51866 12.0906 5.5 11.9965 5.5C11.9023 5.5 11.8091 5.51866 11.7222 5.55489C11.6353 5.59113 11.5564 5.64423 11.4901 5.71114L7.21056 9.99378C7.07568 10.1282 7 10.3104 7 10.5004C7 10.6904 7.07568 10.8726 7.21056 11.0074Z"
                      fill="#5E5F6E"
                    />
                  </svg>
                </button>
                <button
                  ref={nextRef}
                  className="absolute top-1/2 -right-24 transform -translate-y-1/2 rounded-full z-10"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="20"
                      height="20"
                      rx="10"
                      transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 20 0.5)"
                      fill="#F5F5F7"
                    />
                    <path
                      d="M12.7894 9.99257L8.50991 5.70994C8.37563 5.57553 8.19346 5.5 8.00348 5.5C7.81351 5.5 7.63134 5.57553 7.49706 5.70994C7.36278 5.84435 7.28741 6.02658 7.28741 6.21665C7.28741 6.40672 7.36278 6.58895 7.49706 6.72336L11.2773 10.4993L7.49706 14.2752C7.43032 14.3416 7.37717 14.4206 7.34101 14.5076C7.30485 14.5946 7.28613 14.6879 7.28613 14.7821C7.28613 14.8763 7.30485 14.9696 7.34101 15.0566C7.37717 15.1436 7.43032 15.2226 7.49706 15.289C7.56342 15.3558 7.64236 15.4089 7.72934 15.4451C7.81632 15.4813 7.90961 15.5 8.00348 15.5C8.09736 15.5 8.19065 15.4813 8.27763 15.4451C8.36461 15.4089 8.44355 15.3558 8.50991 15.289L12.7894 11.0063C12.9243 10.872 13 10.6896 13 10.4996C13 10.3096 12.9243 10.1274 12.7894 9.99257Z"
                      fill="#5E5F6E"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <hr className="border-gray-100 my-15px " />
            <div className="flex items-center justify-between">
              <Tabs tabs={sessionTabs} />

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
            <div className="w-full overflow-x-auto">
              <table className="w-full  bg-white border-y border-gray-100">
                <thead className="text-left">
                  <tr className="bg-blue-100 uppercase">
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      Name
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      Session Time
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      Session status
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      Mobile Number
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      Age
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                      session Amount
                    </th>
                    <th className="px-15px py-5 font-medium text-gray-500 text-sm/5 text-center">
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
                        <td className="p-15px flex items-center gap-3 min-w-[121px]">
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
                        <td className="p-15px text-primary text-sm/5 min-w-[121px]">
                          {item.time}
                        </td>
                        <td className="p-15px min-w-[121px]">
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
                        <td className="p-15px text-primary text-sm/5 min-w-[121px]">
                          {item.number}
                        </td>
                        <td className="p-15px text-primary text-sm/5 min-w-[121px]">
                          {item.age}
                        </td>
                        <td className="p-15px text-primary text-sm/5 min-w-[121px]">
                          {item.amount}
                        </td>
                        <td className="p-15px shadow-[-3px_0px_11.9px_0px_#5E83D30D] text-center">
                          <Button
                            variant="outlined"
                            className={`!px-4.5 !py-2`}
                            onClick={() =>
                              setIsSessionDetails(!isSessionDetails)
                            }
                          >
                            View Details
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between py-[11px] px-5 mt-30px shadow-[0px_-1px_16.5px_0px_#F6F0FF]">
              <div className="flex items-center gap-3">
                <button className="px-2.5 py-2.5 border border-primary rounded-lg text-sm/4 text-primary flex items-center gap-2 capitalize">
                  page : 01 <CaretDown size={20} />
                </button>
                <p className="text-sm/4 text-primary">Of 0 Pages</p>
              </div>
              <div className="flex items-center gap-[11px]">
                <button className="py-2.5 px-5 rounded-lg border border-gray-400 text-gray-400 text-sm/4">
                  Previous
                </button>
                <button className="py-2.5 px-5 rounded-lg border border-primary text-primary text-sm/4">
                  Next
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
              {/* <SelectDropdown /> */}
            </div>
            <table className="min-w-full bg-white border-t border-gray-100">
              <thead className="text-left">
                <tr className="bg-blue-100 uppercase">
                  <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                    Name
                  </th>
                  <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
                    Session
                  </th>
                  <th className="px-15px py-5 font-medium text-gray-500 text-sm/5">
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
                          <p className="text-primary font-medium">
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
                          <p className="text-primary font-medium">
                            ₹{item.tRevenue} Total
                          </p>
                          <div className="text-gray-400">
                            <p>₹{item.cRevenue} Completed</p>
                            <p>₹{item.pRevenue} Pending</p>
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
