"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import Input from "@/components/common/Input";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import FreeSlotsSidebar from "@/components/dashboard/FreeSlotsSidebar";
import RescheduleSidebar from "@/components/dashboard/RescheduleSidebar";
import ScheduleSessionSidebar from "@/components/dashboard/ScheduleSessionSidebar";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import SessionTBody from "@/components/table/SessionTBody";
import THeade from "@/components/table/THeade";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {
  ArrowUpRight,
  FunnelSimple,
  MagnifyingGlass,
  X,
} from "@phosphor-icons/react";
import React, { useState } from "react";

const activity = [
  { title: "Completed Session", session: "120", percentage: "+12" },
  { title: "Reschedule Session", session: "58", percentage: "+08" },
  { title: "Cancel Session", session: "12", percentage: "-06" },
  { title: "Patient", session: "150", percentage: "+18" },
];

const sessionTabs = [
  { label: "All (52)" },
  { label: "Upcoming (20)" },
  { label: "Completed (30)" },
  { label: "Cancelled (02)" },
];

const sessionTableHeade = [
  "Name",
  "Date",
  "Time",
  "Payments",
  "status",
  "Appointment",
  "actions",
];

const sessionTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    date: "12 Sep, 2024",
    time: "03:40-04:15 PM",
    payments: "1,000",
    status: "Completed",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishank@gmail.com",
    date: "08 Aug, 2024",
    time: "02:00-03:15 PM",
    payments: "2,000",
    status: "Cancelled",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    date: "22 July, 2024",
    time: "12:00-01:30 PM",
    payments: "500",
    status: "Cancelled",
  },
  {
    img: "",
    name: "Neha Kikani",
    email: "nehak@gmail.com",
    date: "18 March, 2024",
    time: "05:00-06:00 PM",
    payments: "250",
    status: "Upcoming",
  },
  {
    img: "",
    name: "Divyesh Sojitra",
    email: "Divyesh@gmail.com",
    date: "05 Sep, 2024",
    time: "01:40-02:30 PM",
    payments: "850",
    status: "Upcoming",
  },
];

const totalPages = 10; // Define total pages for pagination

const session = () => {
  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");

  // sidebar
  const [freeSlote, setFreeSlote] = useState(false);
  const [isScheduleSessionModal, setIsScheduleSessionModal] = useState(false);
  const [isRescheduleSession, setIsRescheduleSession] = useState(false);

  // modals
  const [isFilter, setIsFilter] = useState(false);
  const [isUpdatePayment, setIsUpdatePayment] = useState(false);
  const [isReminderModal, setIsReminderModal] = useState(false);
  const [isReminderMassageModal, setIsReminderMassageModal] = useState(false);
  const [isCanceledSessionModal, setIsCanceledSessionModal] = useState(false);
  const [isCancellationModal, setIsCancellationModal] = useState(false);
  const [isUpdatePaymentModal, setIsUpdatePaymentModal] = useState(false);
  const [isTerminatingModal, setIsTerminatingModal] = useState(false);

  function handleModalTransition(closeModal, openModal) {
    closeModal(false); // Close the currently open modal
    openModal(true); // Open the next modal
  }

  return (
    <DashboardLayout>
      <div className="bg-white">
        {/* Session header */}
        <div className="flex items-center justify-between p-5 bg-white  shadow-[0px_2px_8px_0px_#2A5F611A] sticky top-28 z-[90]">
          <h1 className="text-2xl/9 text-primary font-semibold">Session</h1>
          <div className="flex items-center gap-5">
            <Button variant="outlined" onClick={() => setFreeSlote(!freeSlote)}>
              Find me free slot
            </Button>
            <Button
              variant="filled"
              onClick={() => setIsScheduleSessionModal(!isScheduleSessionModal)}
            >
              Schedule a Session
            </Button>
          </div>
        </div>

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
          <div className="pt-5 grid grid-cols-4 gap-5">
            {activity?.map((item, index) => (
              <div
                className={`bg-green-600/5 px-5 py-[25px] rounded-base border-l ${
                  item.title === "Completed Session"
                    ? "border-[#48A400]"
                    : item.title === "Reschedule Session"
                    ? "border-[#1339FF]"
                    : item.title === "Cancel Session"
                    ? "border-[#FF5C00]"
                    : item.title === "Patient"
                    ? "border-[#D813FF]"
                    : ""
                } `}
              >
                <p className="text-lg/7 text-primary">{item.title}</p>
                <div className="flex items-center gap-4 pt-3">
                  <p className=" text-2xl/9 text-primary font-medium">
                    {item.session}
                  </p>
                  <p
                    className={`text-sm/4 flex items-center gap-1 ${
                      item.title === "Cancel Session" ? "" : "text-green-400"
                    }`}
                  >
                    <ArrowUpRight size={16} /> {item.percentage}%
                  </p>
                </div>
              </div>
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
            <div className="w-full border border-gray-100 rounded-base overflow-x-auto">
              <table className="w-full  bg-white">
                <THeade data={sessionTableHeade} />
                <SessionTBody
                  TableData={sessionTable}
                  setIsRescheduleSession={setIsRescheduleSession}
                  isRescheduleSession={isRescheduleSession}
                  setIsUpdatePayment={setIsUpdatePayment}
                  isUpdatePayment={isUpdatePayment}
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

      {/* ====== Side Bars ====== */}

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
      {/* Filter Modal */}
      <SessionDetailModal
        title="Filter"
        isClose={isFilter}
        setIsClose={setIsFilter}
      >
        <div className="py-7.5 space-y-5">
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

      {/* Upadate Payment Modal */}
      <SessionDetailModal
        title="Update Payment"
        isClose={isUpdatePayment}
        setIsClose={setIsUpdatePayment}
      >
        <div className="py-7.5 space-y-5">
          <div>
            <label className="text-base/5 text-primary font-medium">
              Old Amount
            </label>
            <Input type={"number"} placeholder={"0"} icon={`rup`} />
          </div>
          <div>
            <label className="text-base/5 text-primary font-medium">
              New Amount
            </label>
            <Input type={"number"} placeholder={"0"} icon={`rup`} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3.5">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsUpdatePayment(false);
            }}
          >
            Cancel
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={() => {
              setIsUpdatePayment(false);
            }}
          >
            update
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

export default session;
