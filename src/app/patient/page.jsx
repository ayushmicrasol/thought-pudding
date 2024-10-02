"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import ActivityCard from "@/components/dashboard/common/ActivityCard";
import PatientTBody from "@/components/dashboard/common/table/PatientTBody";
import THeade from "@/components/dashboard/common/table/THeade";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import EditSessionSidebar from "@/components/dashboard/EditSessionSidebar";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import { FunnelSimple, MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useState } from "react";

const activity = [
  { title: "Total Patient", count: "120", percentage: "+12" },
  { title: "New Patient", count: "58", percentage: "+08" },
  { title: "Active Patient", count: "12", percentage: "-06" },
  { title: "In Active Patient", count: "150", percentage: "+18" },
];

const sessionTabs = [
  { label: "All (52)" },
  { label: "Active (20)" },
  { label: "Inactive (30)" },
];

const sessionTableHeade = [
  "Name",
  "Contact Number",
  "Completed session",
  "status",
  "Appointment",
  "actions",
];

const sessionTable = [
  {
    img: "",
    name: "Abhi Sojitra",
    email: "abhi@gmail.com",
    number: "91-95582-20108",
    session: "4",
    status: "Completed",
  },
  {
    img: "",
    name: "Dishank Gajera",
    email: "dishank@gmail.com",
    number: "91-92562-45210",
    session: "2",
    status: "Cancelled",
  },
  {
    img: "",
    name: "Darshan Tarpada",
    email: "darshant56@gmail.com",
    number: "91-85215-45215",
    session: "6",
    status: "Cancelled",
  },
  {
    img: "",
    name: "Neha Kikani",
    email: "nehak@gmail.com",
    number: "91-90256-78521",
    session: "10",
    status: "Upcoming",
  },
  {
    img: "",
    name: "Divyesh Sojitra",
    email: "Divyesh@gmail.com",
    number: "91-78521-69853",
    session: "8",
    status: "Upcoming",
  },
];

const totalPages = 10; // Define total pages for pagination

const Patient = () => {
  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");
  const [isFilter, setIsFilter] = useState(false);
  const [isEditSession, setIsEditSession] = useState(false);

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-base overflow-hidden">
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
            {activity?.map((items, index) => (
              <ActivityCard
                key={index}
                title={items.title}
                count={items.count}
                percentage={items.percentage}
                borderColor={
                  index === 0
                    ? "border-[#48A400]"
                    : index === 1
                    ? "border-[#1339FF]"
                    : index === 2
                    ? "border-[#FF5C00]"
                    : "border-[#D813FF]"
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
                <THeade data={sessionTableHeade} />
                <PatientTBody
                  TableData={sessionTable}
                  setIsEditSession={setIsEditSession}
                  isEditSession={isEditSession}
                />
              </table>
              <TablePagination totalPages={totalPages} />
            </div>
          </div>
        </div>
      </div>

      <EditSessionSidebar
        isEditSession={isEditSession}
        setIsEditSession={setIsEditSession}
      />
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
    </DashboardLayout>
  );
};

export default Patient;
