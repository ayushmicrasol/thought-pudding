"use client";
import CancellationChart from "@/components/dashboard/CancellationChart";
import FreeSlotsSidebar from "@/components/dashboard/FreeSlotsSidebar";
import ScheduleSessionSidebar from "@/components/dashboard/ScheduleSessionSidebar";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import { CaretDown, Check, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  GreenUsersIcon,
  OrangeCalendarIcon,
  PendingPayIcon,
  ReceivedPayIcon,
} from "../../../public/assets/Svgs";

import Button from "@/components/common/Button";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import RescheduleSidebar from "@/components/dashboard/RescheduleSidebar";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardTBody from "@/components/dashboard/common/table/DashboardTBody";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import THeader from "@/components/dashboard/common/table/THeader";
const activity = [
  {
    title: " Received payment",
    count: "₹220",
    icon: <ReceivedPayIcon className="w-30px h-auto" />,
  },
  {
    title: "Pending payment",
    count: "₹220",
    icon: <PendingPayIcon className="w-30px h-auto" />,
  },
  {
    title: "Patient",
    count: "56",
    icon: <GreenUsersIcon className="w-30px h-auto" />,
  },
  {
    title: "Session",
    count: "23",
    icon: <OrangeCalendarIcon className="w-30px h-auto" />,
  },
];

const sessionTableHeader = [
  "Name",
  "Time",
  "status",
  "Amount",
  "this session Fee	",
  "Previous Fee	",
  "Appointment",
  "actions",
];

const sessionTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    time: "03:40-04:15 PM",
    status: "Completed",
    amount: "₹ 2,200",
    sessionFee: "Paid on time",
    previousFee: "Cleared",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishankgajera00@gmail.com",
    time: "02:00-03:15 PM",
    status: "Cancelled",
    amount: "₹ 700",
    sessionFee: "Pending",
    previousFee: "Cleared",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    time: "12:00-01:30 PM",
    status: "Cancelled",
    amount: "₹ 1,800",
    sessionFee: "Pending",
    previousFee: "Pending",
  },
  {
    img: "",
    name: "Neha Kikani",
    email: "nehak@gmail.com",
    time: "05:00-06:00 PM",
    status: "Upcoming",
    amount: "₹ 3,200",
    sessionFee: "Pending",
    previousFee: "Pending",
  },
  {
    img: "",
    name: "Divyesh Sojitra",
    email: "divyeh@gmail.com",
    time: "01:40-02:30 PM",
    status: "Upcoming",
    amount: "₹ 2,200",
    sessionFee: "Pending",
    previousFee: "Cleared",
  },
  {
    img: "",
    name: "Ayush Dobariya",
    email: "ayu@gmail.com",
    time: "01:40-02:30 PM",
    status: "Upcoming",
    amount: "₹ 2",
    sessionFee: "Pending",
    previousFee: "Pending",
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

const sessionTabs = [
  { label: "All (52)" },
  { label: "Upcoming (20)" },
  { label: "Completed (30)" },
  { label: "Cancelled (02)" },
];

const Dashboard = () => {
  const [activeTable, setActiveTable] = useState(sessionTabs[0].label);
  const [freeSlote, setFreeSlote] = useState(false);
  const [isScheduleSessionModal, setIsScheduleSessionModal] = useState(false);
  const [isRescheduleSession, setIsRescheduleSession] = useState(false);
  const [isReminderModal, setIsReminderModal] = useState(false);
  const [isReminderMassageModal, setIsReminderMassageModal] = useState(false);
  const [isCanceledSessionModal, setIsCanceledSessionModal] = useState(false);
  const [isCancellationModal, setIsCancellationModal] = useState(false);
  const [isUpdatePaymentModal, setIsUpdatePaymentModal] = useState(false);
  const [isTerminatingModal, setIsTerminatingModal] = useState(false);

  // select drop down stats

  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");
  const [isMonthsDropSelect2, setIsMonthsDropSelect2] = useState("Today");
  const [isMonthsDropSelect3, setIsMonthsDropSelect3] = useState("Today");

  function handleModalTransition(
    closeModal: (value: boolean) => void,
    openModal: (value: boolean) => void
  ) {
    closeModal(false); // Close the currently open modal
    openModal(true); // Open the next modal
  }

  // session Dates Swiper and dropdown start ------------------------------------
  const [isDateDrop, setIsDateDrop] = useState(false);
  const [activeTab, setActiveTab] = useState("month");
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState("2023");
  const [dates, setDates] = useState<{ day: string; weekday: string }[]>([]);

  // Define refs with proper typing
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const totalPages = 10; // Define total pages for pagination

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
    generateDates(selectedMonth, Number(selectedYear));
  }, [selectedMonth, selectedYear]);

  const generateDates = (month: string, year: number) => {
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

  const handleSelectMonth = (month: string) => {
    setSelectedMonth(month);
    setIsDateDrop(false);
  };

  const handleSelectYear = (year: number) => {
    setSelectedYear(year.toString());
    setIsDateDrop(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-5 pt-5">
        <div className="grid md:grid-cols-7 gap-5">
          <div className="bg-white px-5 py-11 rounded-base md:flex items-center justify-between md:col-span-12">
            <div className="max-w-[422px]">
              <h2 className="text-lg/6 font-semibold text-primary">
                Sync Your Google Calendar
              </h2>
              <p className="text-base/5 text-primary/70 pt-3">
                Schedule Sessions and timely Reminders With just one click.
              </p>
            </div>

            <Button
              variant="filled"
              className="max-w-[177px] w-full mt-5 sm:mt-0"
            >
              Setup calendar
            </Button>
          </div>
          <div className="bg-white px-5 py-10 rounded-base flex items-center justify-between md:col-span-3">
            <div>
              <h2 className="text-lg/6 font-semibold text-primary">
                Hi Anusha!
              </h2>
              <p className="text-base/5 text-primary/70 pt-3">
                You have an exciting week ahead of you
              </p>
            </div>
            <div className="w-[68px] h-auto md:block hidden">
              <Image
                src="/assets/images/dashboard/hand.webp"
                alt="logo"
                width={600}
                height={600}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="bg-white px-5 py-10 rounded-base md:flex items-center justify-between md:col-span-9">
            <div>
              <h2 className="text-lg/6 font-semibold text-primary capitalize">
                New Appointment
              </h2>
              <p className="text-base/5 text-primary/70 pt-3 capitalize">
                Guide users through booking a specific time.
              </p>
            </div>
            <div className="flex gap-5 items-center mt-5 md:mt-0">
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
          <div className="md:flex justify-between items-center">
            <h2 className="text-xl/6 font-semibold text-primary pb-5 md:pb-0">
              Activity
            </h2>
            <DaysSelectDropdown
              value={isMonthsDropSelect3}
              onChange={(value: unknown) =>
                setIsMonthsDropSelect3(value as string)
              }
            />
          </div>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-5 pt-5">
            {activity?.map((item, index) => (
              <div
                key={index}
                className={`p-5  rounded-base flex justify-between items-center ${
                  item.title.trim() === "Received payment"
                    ? "bg-[#FBE9D0]"
                    : item.title.trim() === "Pending payment"
                    ? "bg-[#D8E5FF]"
                    : item.title.trim() === "Patient"
                    ? "bg-[#FBD7D8]"
                    : item.title.trim() === "Session"
                    ? "bg-[#F8DBFF]"
                    : ""
                }`}
              >
                <div>
                  <p className="text-2xl/7 font-medium text-primary">
                    {item.count}
                  </p>
                  <p className="capitalize text-base/5 text-primary  pt-3">
                    {item.title}
                  </p>
                </div>
                <div
                  className={`p-4 rounded-full ${
                    item.title.trim() === "Received payment"
                      ? "bg-[#FFD7A0]"
                      : item.title.trim() === "Pending payment"
                      ? "bg-[#A0BEFF]"
                      : item.title.trim() === "Patient"
                      ? "bg-[#FDC0C1]"
                      : item.title.trim() === "Session"
                      ? "bg-[#F1C2FE]"
                      : ""
                  }`}
                >
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* session area */}
        <div className=" rounded-base bg-white">
          <div className="p-5">
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
                        activeTab === "month"
                          ? "text-primary"
                          : "text-primary/70"
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
                        activeTab === "year"
                          ? "text-primary"
                          : "text-primary/70"
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
                  <div className="pt-2 pb-5 overflow-y-auto h-[calc(100%-50px)]">
                    {activeTab === "month" && (
                      <ul className="month">
                        {months.map((month) => (
                          <li
                            key={month}
                            className={`py-3 px-4 text-sm_18 text-[#1D1B20] cursor-pointer flex items-center gap-4  hover:bg-gray-100/20 ${
                              month === selectedMonth
                                ? "bg-green-600/10 !text-green-600"
                                : ""
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
                            className={`py-3 px-4 text-sm_18 text-[#1D1B20] cursor-pointer flex items-center  gap-4  hover:bg-gray-100/20 ${
                              String(year) === selectedYear
                                ? "bg-green-600/10 !text-green-600"
                                : ""
                            }`}
                            onClick={() => handleSelectYear(year)}
                          >
                            <div className="w-6">
                              {String(year) === selectedYear && (
                                <Check size={24} />
                              )}
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
                    console.log(swiper);
                    // Swiper navigation initialization
                    // swiper.params.navigation.prevEl = prevRef.current;
                    // swiper.params.navigation.nextEl = nextRef.current;
                    // swiper.navigation.init();
                    // swiper.navigation.update();
                  }}
                >
                  {dates.map((date) => (
                    <SwiperSlide key={date.day}>
                      <div className=" flex items-center justify-center text-center">
                        <button className="text-primary focus:text-blue-600 hover:text-blue-600 group transition-all duration-500 relative z-30">
                          <p className="text-[26px] leading-[30px] group-hover:font-semibold group-focus:font-semibold">
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
                  ref={prevRef as React.RefObject<HTMLButtonElement>}
                  className="absolute top-1/2 -left-24 transform -translate-y-1/2 rounded-full z-10 md:block hidden"
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
                  type="button"
                  ref={nextRef as React.RefObject<HTMLButtonElement>}
                  className="absolute top-1/2 -right-24 transform -translate-y-1/2 rounded-full z-10 md:block hidden"
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
              <Tabs
                tabs={sessionTabs}
                activeTab={activeTable}
                setActiveTab={setActiveTable}
              />

              <div className="flex items-center gap-2 max-w-[351px] w-full py-15px px-5 border border-[#9B9DB7] rounded-full text-xs text-primary">
                <MagnifyingGlass size={20} className="text-primary/50" />
                <input
                  type="search"
                  placeholder="Search your client name and id"
                  className="outline-none w-full placeholder:text-primary/50"
                />
              </div>
            </div>

            {/* session table */}
            <div className="pt-30px">
              <div className="w-full border border-green-600/25 rounded-base overflow-x-auto">
                <table className="w-full  bg-white">
                  <THeader data={sessionTableHeader} />
                  <DashboardTBody
                    TableData={sessionTable}
                    setIsRescheduleSession={setIsRescheduleSession}
                    isRescheduleSession={isRescheduleSession}
                    setIsReminderModal={setIsReminderModal}
                    setIsCanceledSessionModal={setIsCanceledSessionModal}
                    isCanceledSessionModal={isCanceledSessionModal}
                  />
                </table>
                <TablePagination totalPages={totalPages} />
              </div>
            </div>
          </div>
        </div>

        {/* Most regular clients and Cancellation */}
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-white rounded-base overflow-hidden">
            <div className="flex items-center justify-between p-5">
              <h2 className="text-xl/6 font-semibold text-primary">
                Most Regular Clients
              </h2>
              <DaysSelectDropdown
                value={isMonthsDropSelect}
                onChange={(value: unknown) =>
                  setIsMonthsDropSelect(value as string)
                }
                DropClass=""
              />
            </div>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full bg-white border-t border-gray-100">
                <thead className="text-left">
                  <tr className="bg-green-600/5 shadow-[0px_2px_8px_0px_#2A5F611F] uppercase">
                    <th className="px-15px py-5 font-semibold text-primary/70 text-sm/5">
                      Client Details
                    </th>
                    <th className="px-15px py-5 font-semibold text-primary/70 text-sm/5">
                      Last Session
                    </th>
                    <th className="px-15px py-5 font-semibold text-primary/70 text-sm/5">
                      Session Summary
                    </th>
                    <th className="px-15px py-5 font-semibold text-primary/70 text-sm/5">
                      Total Revenue
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {regularClientsTable?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="px-15px py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-[34px] h-[34px] rounded-full border border-[#64748B33] bg-[#F5F5F7] overflow-hidden flex items-center justify-center">
                              <span className="text-xs_18 text-[#72748D] font-medium">
                                {item.name
                                  .split(" ")
                                  .map((n) => n.charAt(0))
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm/5 text-primary font-semibold">
                                {item.name}
                              </p>
                              <p className="text-xs_18 text-primary/70 font-medium">
                                {item.email}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-15px py-5">
                          <p className="text-sm/5 text-primary font-semibold">
                            18 Sep,2024
                          </p>
                          <p className="text-sm/5 text-primary/70 pt-[3px] font-medium">
                            2.00 PM, 50 min
                          </p>
                        </td>
                        <td className="px-15px py-5">
                          <p className="text-sm/5 text-primary font-semibold">
                            15 Session
                          </p>
                          <p className="text-sm/5 text-[#14A347] pt-[3px] font-medium">
                            12 Completed
                          </p>
                          <p className="text-sm/5 text-primary/70 pt-[3px] font-medium">
                            3 Pending
                          </p>
                        </td>
                        <td className="px-15px py-5">
                          <p className="text-sm/5 text-primary font-semibold">
                            ₹6,000 Total
                          </p>
                          <p className="text-sm/5 text-[#14A347] pt-[3px] font-medium">
                            +₹1,500 Collected
                          </p>
                          <p className="text-sm/5 text-primary/70 pt-[3px] font-medium">
                            -₹4,500 Pending
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-base overflow-hidden p-5">
            <div className="flex flex-col justify-between h-full">
              <div className="flex items-center justify-between">
                <h2 className="text-xl/6 font-semibold text-primary">
                  Cancellation
                </h2>
                <DaysSelectDropdown
                  value={isMonthsDropSelect2}
                  onChange={(value: unknown) =>
                    setIsMonthsDropSelect2(value as string)
                  }
                />
              </div>
              <div className="pt-[58px]">
                <div className="max-w-[338px] max-h-[338px] w-full h-full mx-auto">
                  <CancellationChart />
                </div>
                <div className="flex items-center gap-8.5 pt-6">
                  <div>
                    <p className="text-sm/5 text-primary">
                      Loss due to cancellation
                    </p>
                    <p className="pt-1 text-primary text-xl_30 font-medium">
                      ₹5,400
                    </p>
                  </div>
                  <div>
                    <p className="text-sm/5 text-primary">
                      Cancellation fees collected
                    </p>
                    <p className="pt-1 text-primary text-xl_30 font-medium">
                      ₹2,100
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FreeSlots Sidebar */}
      <FreeSlotsSidebar freeSlote={freeSlote} setFreeSlote={setFreeSlote} />

      {/* Schedule Session Sidebar */}
      <ScheduleSessionSidebar
        isScheduleSessionModal={isScheduleSessionModal}
        setIsScheduleSessionModal={setIsScheduleSessionModal}
      />

      {/* Reschedule Session sidebar */}
      <RescheduleSidebar
        isRescheduleSession={isRescheduleSession}
        setIsRescheduleSession={setIsRescheduleSession}
      />

      {/* ====== Session modals ====== */}
      {/* Reminder Modal */}
      <SessionDetailModal
        title="Reminder"
        isClose={isReminderModal}
        setIsClose={setIsReminderModal}
      >
        <div className="pt-30px space-y-2.5">
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Session Reminder
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Payment Session
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
          <label className="flex justify-between items-center text-sm/5 text-gray-500">
            Set Both
            <input type="radio" name="reminder" className="w-4.5 h-4.5" />
          </label>
        </div>
        <div className="flex items-center justify-end gap-3.5 pt-[34px]">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsReminderModal(false);
            }}
          >
            No
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() =>
              handleModalTransition(
                setIsReminderModal,
                setIsReminderMassageModal
              )
            }
          >
            Yes
          </Button>
        </div>
      </SessionDetailModal>

      {/* Reminder massage Modal */}
      <SessionDetailModal
        title="Send reminder"
        isClose={isReminderMassageModal}
        setIsClose={setIsReminderMassageModal}
        className={`!max-w-[450px]`}
      >
        <div className="text-base/7 text-primary pt-5">
          <p>
            To:{" "}
            <span className="text-green-600">{`Hetvi <hetvi.micra@gmail.com>`}</span>
          </p>
          <p>
            Subject: <span className="font-semibold">Payment Reminder 🔔</span>
          </p>
          <p className="text-green-600 font-semibold">Hi Hetvi,</p>
          <p className="pt-5">
            This is to remind you that your payment for session on{" "}
          </p>
          <p>
            <span className="font-semibold">19 Sep 2024 at 11:10 AM</span> with
            <span className="font-semibold">Parth Sojitra</span> has been
            pending for sometime. Kindly clear it before your next session.
          </p>
        </div>
        <Button
          variant="filledGreen"
          className={`w-full mt-7.5`}
          onClick={() => {
            setIsReminderMassageModal(false);
          }}
        >
          send reminder
        </Button>
      </SessionDetailModal>

      {/* Session Canceled */}
      <SessionDetailModal
        title="Session Canceled"
        isClose={isCanceledSessionModal}
        setIsClose={setIsCanceledSessionModal}
      >
        <p className="text-gray-500 text-sm/5 pt-5 max-w-[465px]">
          Are you sure you want to mark this session as a Cancel ? This action
          will notify the customer and update your records accordingly.
        </p>
        <div className="flex items-center justify-end gap-3.5 pt-[34px]">
          <Button
            variant="outlinedGreen"
            onClick={() =>
              handleModalTransition(
                setIsCanceledSessionModal,
                setIsTerminatingModal
              )
            }
            className={`min-w-[157px]`}
          >
            Cancel All Sessions
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() =>
              handleModalTransition(
                setIsCanceledSessionModal,
                setIsCancellationModal
              )
            }
          >
            Session Off
          </Button>
        </div>
      </SessionDetailModal>

      {/* Cancellation Fees */}
      <SessionDetailModal
        title="Is There a Cancellation Fees"
        isClose={isCancellationModal}
        setIsClose={setIsCancellationModal}
      >
        <div className="flex items-center justify-end gap-3.5 pt-[34px]">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() =>
              handleModalTransition(
                setIsCancellationModal,
                setIsUpdatePaymentModal
              )
            }
          >
            No
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() =>
              handleModalTransition(
                setIsCancellationModal,
                setIsUpdatePaymentModal
              )
            }
          >
            Yes
          </Button>
        </div>
      </SessionDetailModal>

      {/* Update Payment Session */}
      <SessionDetailModal
        title="Update Payment Session"
        isClose={isUpdatePaymentModal}
        setIsClose={setIsUpdatePaymentModal}
      >
        <p className="text-gray-500 text-sm/5 pt-5 max-w-[465px]">
          We are calling off this session. after you have got it. cancellation
          sum Remember to update the same information in your payment.
        </p>
        <div className="text-end pt-[34px]">
          <Button
            variant="filledGreen"
            className="min-w-[157px]"
            onClick={() => setIsUpdatePaymentModal(false)}
          >
            Okay, got it
          </Button>
        </div>
      </SessionDetailModal>

      {/* Are you terminating the client */}
      <SessionDetailModal
        title="Are you terminating the client"
        isClose={isTerminatingModal}
        setIsClose={setIsTerminatingModal}
      >
        <p className="text-gray-500 text-sm/5  pt-5 max-w-[465px]">
          This action will end all services with the client. Please confirm to
          proceed.
        </p>
        <div className="flex items-center justify-end gap-3.5 pt-[34px]">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsTerminatingModal(false);
              setIsRescheduleSession(true);
            }}
          >
            No
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() => setIsTerminatingModal(false)}
          >
            Yes
          </Button>
        </div>
      </SessionDetailModal>
    </DashboardLayout>
  );
};

export default Dashboard;
