"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import Input from "@/components/common/Input";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import ActivityCard from "@/components/dashboard/common/ActivityCard";
import SessionTBody, {
  Item,
} from "@/components/dashboard/common/table/SessionTBody";
import THeader from "@/components/dashboard/common/table/THeader";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import RescheduleSidebar from "@/components/dashboard/RescheduleSidebar";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {
  deleteSchedules,
  scheduleReminder,
  updatePayment,
  useGetScheduleCount,
  useGetSchedules,
} from "@/services/session.service";
import { fetcher, formatDate, formatTime } from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import { FilterParams } from "@/services/session.service";

const sessionTabs = [
  { label: "All ", value: "" },
  { label: "Upcoming ", value: "upcoming" },
  { label: "Completed ", value: "completed" },
  { label: "Cancelled ", value: "cancelled" },
];

const sessionTableHeader = [
  "Name",
  "Date",
  "Time",
  "Payments",
  "status",
  "Appointment",
  "actions",
];

export interface SessionData {
  name?: string;
  email?: string;
  tillDate?: Date;
  fromDate?: Date;
}

const Session = () => {
  const searchParams = useSearchParams();

  const clientId = searchParams.get("client"); // Get 'client' from query
  console.log({ clientId }, "----------------- clintID");

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5; // Set the page size as required

  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [activeTable, setActiveTable] = useState(sessionTabs[0]);

  // sidebar
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
  const [singleSessionID, setSingleSessionID] = useState("");
  const [paymentID, setPaymentID] = useState("");
  const [rescheduleSessionID, setRescheduleSessionID] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isUpdating, setIsUpdating] = useState(false);
  const [newAmount, setNewAmount] = useState<string | "">("");

  const [searchStartDate, setSearchStartDate] = useState<string | null>(null);
  const [searchEndDate, setSearchEndDate] = useState<string | null>(null);
  const [filterparams, setFilterparams] = useState<FilterParams>({}); // Control refetching

  // activity section start
  const { scheduleCountData } = useGetScheduleCount(startDate, endDate) as {
    scheduleCountData: {
      completed_sessions?: number;
      rescheduled_sessions?: number;
      cancelled_sessions?: number;
    };
  };

  const activity = [
    {
      title: "Completed Session",
      session: `${scheduleCountData?.completed_sessions || 0}`,
      percentage: "",
    },
    {
      title: "Reschedule Session",
      session: `${scheduleCountData?.rescheduled_sessions || 0}`,
      percentage: "",
    },
    {
      title: "Cancel Session",
      session: `${scheduleCountData?.cancelled_sessions || 0}`,
      percentage: "",
    },
  ];
  // activity section end

  // send remider start
  const [singleSessionData, setSingleSessionData] =
    useState<SessionData | null>(null);

  async function reminderSessionData() {
    const response = await scheduleReminder(singleSessionID);
    console.log(response, "response........................");
  }

  console.log(filterparams, "filterparams....................");

  const query =
    `pageSize=${pageSize}&pageNumber=${currentPage}&status=${activeTable.value}` +
    `&searchText=${debouncedSearchText}` +
    `&client=${clientId ?? ""}` +
    (filterparams &&
    filterparams?.searchStartDate &&
    filterparams?.searchEndDate
      ? `&startDate=${filterparams?.searchStartDate}&endDate=${filterparams?.searchEndDate}`
      : "");

  const { sessionData, sessionLoading, sessionCount } = useGetSchedules({
    pageSize,
    currentPage,
    activeTable: activeTable.value,
    debouncedSearchText,
    clientId: clientId?.toString() ?? "",
    filterparams,
  });

  const totalPages = Math.ceil(sessionCount / pageSize);
  console.log({ sessionData, sessionLoading, sessionCount });

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchText(searchText), 500);
    return () => clearTimeout(handler);
  }, [searchText]);

  function handleModalTransition(
    closeModal: (value: boolean) => void,
    openModal: (value: boolean) => void
  ) {
    closeModal(false); // Close the currently open modal
    openModal(true); // Open the next modal
  }

  const deleteSingleSession = async () => {
    try {
      await deleteSchedules(singleSessionID);
      console.log("Session deleted successfully.");

      const url = `${endpoints.sessions.schedules}?${query}`;

      // Log the URL to verify it's correct
      console.log(url, "mutate URL");

      mutate(url, async () => {
        await fetcher(url);
      });
    } catch (error) {
      console.error("Failed to delete the session.", error);
    }
  };

  const handleApplySearchFilter = () => {
    // Set filterParams to valuen trigger a new API call
    setFilterparams({
      searchStartDate: searchStartDate ?? "",
      searchEndDate: searchEndDate ?? "",
    });

    // Close the modal after applying the filter
    setIsFilter(false);
  };

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-base overflow-hidden">
        {/* Session header */}

        {/* activity section */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl/6 text-primary font-semibold">Activity</h2>
            <DaysSelectDropdown
              value={isMonthsDropSelect}
              onChange={(value: unknown) =>
                setIsMonthsDropSelect(value as string)
              }
              DropClass=""
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <div className="pt-5 grid grid-cols-3 gap-5">
            {activity?.map((items, index) => (
              <ActivityCard
                key={index}
                title={items.title}
                count={items.session}
                percentage=""
                borderColor={
                  index === 0
                    ? "border-[#48A400]"
                    : index === 1
                    ? "border-[#1339FF]"
                    : "border-[#FF5C00]"
                }
              />
            ))}
          </div>
        </div>

        {/* table */}
        <div className="p-5">
          <div className="flex items-center justify-between">
            <Tabs
              tabs={sessionTabs}
              activeTab={activeTable.label}
              setActiveTab={(tab) => setActiveTable(tab)}
              sessionCount={sessionCount}
            />

            <div className="flex items-center gap-2 max-w-[391px] w-full py-15px px-5 border border-[#9B9DB7] rounded-full text-xs text-primary">
              <MagnifyingGlass className="text-primary/50 min-w-5 w-5 h-5" />
              <input
                type="search"
                placeholder="Search your client name and id"
                className="outline-none w-full placeholder:text-primary/50"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <span className="text-primary/50">|</span>
              <div className="flex items-center bg-green-600/5 py-1 px-2.5 rounded-full gap-3">
                <FunnelSimple
                  size={20}
                  className="text-green-600 cursor-pointer"
                  onClick={() => {
                    setIsFilter(!isFilter);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="pt-10">
            <div className="w-full border border-green-600/25 rounded-base overflow-x-auto">
              <table className="w-full  bg-white">
                <THeader data={sessionTableHeader} />
                <SessionTBody
                  TableData={sessionData}
                  sessionLoading={sessionLoading}
                  setIsRescheduleSession={setIsRescheduleSession}
                  isRescheduleSession={isRescheduleSession}
                  setIsUpdatePayment={setIsUpdatePayment}
                  isUpdatePayment={isUpdatePayment}
                  setIsReminderModal={setIsReminderModal}
                  setIsCanceledSessionModal={setIsCanceledSessionModal}
                  isCanceledSessionModal={isCanceledSessionModal}
                  setSingleSessionID={setSingleSessionID}
                  setPaymentID={setPaymentID}
                  setRescheduleSessionID={setRescheduleSessionID}
                  setSingleSessionData={(item: Item) =>
                    setSingleSessionData(item as unknown as SessionData)
                  }
                />
              </table>
              <TablePagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ====== Side Bars ====== */}
      {/* Reschedule Session sidebar */}
      <RescheduleSidebar
        isRescheduleSession={isRescheduleSession}
        setIsRescheduleSession={setIsRescheduleSession}
        singleSessionID={rescheduleSessionID}
        query={query}
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
            <DatePicker
              value={searchStartDate ?? ""}
              // value={searchStartDate ? searchStartDate.toISOString() : ""}
              placeholder={`DD/MM/YYYY`}
              className={`!mt-3`}
              onChange={(date) => {
                setSearchStartDate(date);
              }}
            />
          </div>
          <div>
            <label className="text-base/5 text-primary font-medium">
              End Date
            </label>
            <DatePicker
              value={searchEndDate ?? ""}
              placeholder={`DD/MM/YYYY`}
              className={`!mt-3`}
              onChange={(date) => {
                setSearchEndDate(date);
              }}
            />
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
            onClick={handleApplySearchFilter}
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
            <Input
              value=""
              onChange={() => {}}
              name="oldAmount"
              type="number"
              placeholder="0"
              icon="rup"
              disabled={true}
            />
          </div>
          <div>
            <label className="text-base/5 text-primary font-medium">
              New Amount
            </label>
            <Input
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              name="newAmount"
              type="number"
              placeholder="0"
              icon="rup"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3.5">
          <Button
            variant="outlinedGreen"
            className={`min-w-[157px]`}
            onClick={() => setIsUpdatePayment(false)}
            disabled={isUpdating} // Disable button when updating
          >
            Cancel
          </Button>
          <Button
            variant="filledGreen"
            className={`min-w-[157px]`}
            onClick={async () => {
              if (newAmount) {
                setIsUpdating(true);
                try {
                  await updatePayment(paymentID, newAmount);
                  console.log("Payment updated successfully.");

                  const url = `${endpoints.sessions.schedules}?${query}`;

                  // Log the URL to verify it's correct
                  console.log(url, "mutate URL");

                  mutate(url, async () => {
                    // This callback can be used to fetch updated data if needed
                    await fetcher(url);
                  });

                  setIsUpdatePayment(false);
                } catch (error) {
                  console.error("Payment update failed:", error);
                } finally {
                  setIsUpdating(false);
                }
              }
            }}
            disabled={isUpdating} // Disable button when updating
          >
            {isUpdating ? "Updating..." : "Update"}
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
            onClick={() => {
              handleModalTransition(
                setIsReminderModal,
                setIsReminderMassageModal
              );
            }}
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
            <span className="text-green-600">{`${
              singleSessionData?.name || "-"
            } <${singleSessionData?.email || "-"}>`}</span>
          </p>
          <p>
            Subject: <span className="font-semibold">Payment Reminder 🔔</span>
          </p>
          <p className="text-green-600 font-semibold">
            {singleSessionData?.name || "-"}
          </p>
          <p className="pt-5">
            This is to remind you that your payment for session on{" "}
          </p>
          <p>
            <span className="font-semibold">
              {singleSessionData &&
                formatDate(
                  moment(singleSessionData.tillDate).format("YYYY-MM-DD")
                )}{" "}
              at{" "}
              {singleSessionData &&
                formatTime(moment(singleSessionData.fromDate).format("HH:mm"))}
            </span>{" "}
            with <span className="font-semibold">Parth Sojitra</span> has been
            pending for sometime. Kindly clear it before your next session.
          </p>
        </div>
        <Button
          variant="filledGreen"
          className={`w-full mt-7.5`}
          onClick={() => {
            setIsReminderMassageModal(false);
            reminderSessionData();
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
        title="Is There a Cancellation Fees?"
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
            onClick={() => {
              handleModalTransition(
                setIsCancellationModal,
                setIsUpdatePaymentModal
              );
            }}
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
            onClick={() => {
              setIsUpdatePaymentModal(false);
              deleteSingleSession();
            }}
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

export default Session;
