"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import ActivityCard from "@/components/dashboard/common/ActivityCard";
import PaymentTBody from "@/components/dashboard/common/table/PaymentTBody";
import THeade from "@/components/dashboard/common/table/THeade";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {
  ArrowDownLeft,
  ArrowUpRight,
  FunnelSimple,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";

const activity = [
  { title: "Received", session: "₹2,200", percentage: "+12" },
  { title: "Pending", session: "₹1,200", percentage: "+08" },
  { title: "Total Earnings", session: "₹3,200", percentage: "-06" },
];

const sessionTabs = [
  { label: "All (52)" },
  { label: "Paid On Time (20)" },
  { label: "Still Pending (30)" },
  { label: "Paid Delayed (05)" },
  { label: "Cancelled (02)" },
];

const paymentTableHeade = [
  "Name",
  "Session date",
  "Time",
  "Amount",
  "Payment type",
  "Mark as",
  "Payment on",
  "actions",
];

const paymentTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    date: "12 Sep, 2024",
    time: "03:40-04:15 PM",
    amount: "1,000",
    paymentType: "Post Session",
    paymentOn: "08 Sep, 2024",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishank@gmail.com",
    date: "08 Aug, 2024",
    time: "02:00-03:15 PM",
    amount: "2,000",
    paymentType: "Post Session",
    paymentOn: "12 Aug, 2024",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    date: "22 July, 2024",
    time: "12:00-01:30 PM",
    amount: "500",
    paymentType: "Post Session",
    paymentOn: "",
  },
  {
    img: "",
    name: "Neha Kikani",
    email: "nehak@gmail.com",
    date: "18 March, 2024",
    time: "05:00-06:00 PM",
    amount: "250",
    paymentType: "Post Session",
    paymentOn: "",
  },
  {
    img: "",
    name: "Divyesh Sojitra",
    email: "Divyesh@gmail.com",
    date: "05 Sep, 2024",
    time: "01:40-02:30 PM",
    amount: "850",
    paymentType: "Post Session",
    paymentOn: "22 May, 2024",
  },
];
const totalPages = 10; // Define total pages for pagination

const Payment = () => {
  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");
  const [isReminderModal, setIsReminderModal] = useState(false);
  const [isReminderMassageModal, setIsReminderMassageModal] = useState(false);

  const [isFilter, setIsFilter] = useState(false);

  function handleModalTransition(closeModal, openModal) {
    closeModal(false); // Close the currently open modal
    openModal(true); // Open the next modal
  }

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-base overflow-hidden">
        {/* Session header */}
        {/* <div className="flex items-center justify-between p-5 bg-white  shadow-[0px_2px_8px_0px_#2A5F611A] sticky top-28 z-[90]">
          <h1 className="text-2xl/9 text-primary font-semibold">Payment</h1>
          <div className="flex items-center gap-5">
            <Button variant="filled">Find me free slot</Button>
          </div>
        </div> */}

        {/* activity section */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl/6 text-primary font-semibold">Activity</h2>
            <DaysSelectDropdown
              value={isMonthsDropSelect}
              onChange={setIsMonthsDropSelect}
              DropClass=""
            />
          </div>
          <div className="pt-5 grid grid-cols-3 gap-5">
            {activity?.map((items, index) => (
              <ActivityCard
                key={index}
                title={items.title}
                count={items.session}
                percentage={items.percentage}
                borderColor={
                  index === 0
                    ? "border-[#48A400]"
                    : index === 1
                    ? "border-[#1339FF]"
                    : index === 2
                    ? "border-[#FF5C00]"
                    : ""
                }
              />
            ))}
          </div>
        </div>

        {/* table */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <Tabs tabs={sessionTabs} />

            <div className="flex items-center gap-2 max-w-[391px] w-full py-15px px-5 border border-[#9B9DB7] rounded-full text-xs text-primary">
              <MagnifyingGlass className="text-primary/50 min-w-5 w-5 h-5" />
              <input
                type="search"
                placeholder="Search your client name and id"
                className="outline-none w-full placeholder:text-primary/50"
              />
              <span className="text-primary/50">|</span>
              <button
                className="flex items-center bg-green-600/5 py-1 px-2.5 rounded-full gap-3"
                onClick={() => {
                  setIsFilter(!isFilter);
                }}
              >
                <FunnelSimple size={20} className="text-green-600" />
                <div className="w-5 h-5 rounded-full border border-primary/20 text-primary flex items-center justify-center bg-white">
                  <X size={12} />
                </div>
              </button>
            </div>
          </div>
          <div className="pt-10">
            <div className="w-full border border-green-600/25 rounded-base overflow-x-auto">
              <table className="w-full  bg-white">
                <THeade data={paymentTableHeade} />
                <PaymentTBody
                  TableData={paymentTable}
                  setIsReminderModal={setIsReminderModal}
                  isReminderModal={isReminderModal}
                />
              </table>
              <TablePagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </div>

      {/* ====== Session modals ====== */}
      {/* Filter Modal */}
      <SessionDetailModal
        title="Filter"
        isClose={isFilter}
        setIsClose={setIsFilter}
      >
        <div className="py-7.5">
          <p className="text-base/5 text-primary font-medium">Client Status</p>
          <div className="space-y-2.5 pt-3">
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Status" className="w-4.5 h-4.5" />
              Last 7 Days
            </label>
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Status" className="w-4.5 h-4.5" />
              Last 15 Days
            </label>
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Status" className="w-4.5 h-4.5" />
              Last 30 Days
            </label>
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Status" className="w-4.5 h-4.5" />
              Custom Date
            </label>
          </div>
          <div className="space-y-5 pt-6">
            <div>
              <label className="text-base/5 text-primary font-medium">
                Start Date
              </label>
              <DatePicker placeholder={`DD/MM/YYYY`} className={`!mt-3`} />
            </div>
            <div>
              <label className="text-base/5 text-primary font-medium">
                End Date
              </label>
              <DatePicker placeholder={`DD/MM/YYYY`} className={`!mt-3`} />
            </div>
          </div>
          <p className="text-base/5 text-primary font-medium pt-6">
            Payment Mark As
          </p>
          <div className="flex items-center gap-6 pt-3">
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Payment" className="w-4.5 h-4.5" />
              Paid On Time
            </label>
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Payment" className="w-4.5 h-4.5" />
              Still Pending
            </label>
            <label className="flex items-center gap-2.5 text-sm/5 text-gray-500">
              <input type="radio" name="Payment" className="w-4.5 h-4.5" />
              Paid Delayed
            </label>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3.5">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsFilter(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsFilter(false);
            }}
          >
            Apply
          </Button>
        </div>
      </SessionDetailModal>

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
    </DashboardLayout>
  );
};

export default Payment;
