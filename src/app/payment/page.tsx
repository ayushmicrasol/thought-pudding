"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import ActivityCard from "@/components/dashboard/common/ActivityCard";
import PaymentTBody, {
  Item,
} from "@/components/dashboard/common/table/PaymentTBody";
import THeader from "@/components/dashboard/common/table/THeader";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {
  FilterParams,
  getTemplateTest,
  useGetPayments,
  useGetPaytracker,
} from "@/services/payment.service";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const sessionTabs = [
  { label: "All", value: "" },
  { label: "Paid On Time", value: "paidOnTime" },
  { label: "Still Pending", value: "stillPending" },
  { label: "Paid Delayed", value: "paidDelayed" },
  { label: "Cancelled", value: "cancelled" },
];

const paymentTableHeader = [
  "Name",
  "Session date",
  "Time",
  "Amount",
  "Payment type",
  "Mark as",
  "Payment on",
  "actions",
];

interface singlePaymentData {
  clientId?: {
    _id: string;
  };
  _id?: string;
}

interface TemplateData {
  receiverData?: {
    name: string;
    email: string;
  };
  emailSubject?: string;
  emailBody?: string;
}

interface PaymentTrackerData {
  collected_payment?: {
    data: number;
    change: number;
  };
  pending_payment?: {
    data: number;
    change: number;
  };
  total_earnings?: {
    data: number;
    change: number;
  };
}

const Payment = () => {
  const searchParams =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
      : null; // Access the query params

  let clientId: string | null = null;

  if (searchParams) {
    clientId = searchParams.get("client");
  }
  console.log({ clientId }, "----------------- clintID");

  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");
  const [isReminderModal, setIsReminderModal] = useState(false);
  const [isReminderMassageModal, setIsReminderMassageModal] = useState(false);
  const [activeTable, setActiveTable] = useState(sessionTabs[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [singlePaymentData, setSinglePaymentData] = useState<singlePaymentData>(
    {}
  );

  const [templateData, setTemplateData] = useState<TemplateData | null>(null);

  console.log(templateData, "templateData............................");

  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const [isFilter, setIsFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedStatus, setSelectedStatus] = useState("custom"); // default to custom date
  const [searchStartDate, setSearchStartDate] = useState<string | null>(null);
  const [searchEndDate, setSearchEndDate] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState("");

  const [filterparams, setFilterparams] = useState<FilterParams>({});
  const pageSize = 5; // Set the page size as required

  const query =
    `pageSize=${pageSize}&pageNumber=${currentPage}&${
      activeTable?.value
    }=true&searchText=${debouncedSearchText}&clientName=${clientId ?? ""}` +
    ((filterparams.searchStartDate && filterparams.searchEndDate) ||
    filterparams.paymentStatus
      ? `&startDate=${filterparams.searchStartDate}&endDate=${filterparams.searchEndDate}&${filterparams.paymentStatus}=true`
      : "");

  // get payment listing
  const { paymentData, paymentLoading, paymentCount } = useGetPayments({
    pageSize,
    currentPage,
    activeTable: activeTable?.value,
    debouncedSearchText,
    filterparams,
    clientId: clientId ?? "", // Convert null to undefined
  });

  // get payment activity data
  const { paymentTrackerData } = useGetPaytracker(startDate, endDate) as {
    paymentTrackerData: PaymentTrackerData;
  };

  const activity = [
    {
      title: "Received",
      session: `₹${paymentTrackerData?.collected_payment?.data ?? 0}`,
      percentage: `${paymentTrackerData?.collected_payment?.change ?? 0}`,
    },
    {
      title: "Pending",
      session: `₹${paymentTrackerData?.pending_payment?.data ?? 0}`,
      percentage: `${paymentTrackerData?.pending_payment?.change ?? 0}`,
    },
    {
      title: "Total Earnings",
      session: `₹${paymentTrackerData?.total_earnings?.data ?? 0}`,
      percentage: `${paymentTrackerData?.total_earnings?.change ?? 0}`,
    },
  ];

  console.log(paymentTrackerData, "paymentTrackerData");

  const totalPages = Math.ceil(paymentCount / pageSize);

  // set search value
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

  async function getTemplateBodyData() {
    const response = await getTemplateTest(
      singlePaymentData?.clientId?._id ?? "",
      singlePaymentData?._id ?? "",
      isReminderModal
    );

    console.log(response, "response........................");
    setTemplateData(response?.data); // Set the response data in state
  }

  const handleStatusChange = (status: string) => {
    setSelectedStatus(status);

    // Get today's date
    const today = new Date();

    // Clear start and end dates if another option is selected
    if (status !== "custom") {
      let startDate, endDate;

      switch (status) {
        case "last7":
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 7);
          endDate = today;
          break;
        case "last15":
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 15);
          endDate = today;
          break;
        case "last30":
          startDate = new Date(today);
          startDate.setDate(today.getDate() - 30);
          endDate = today;
          break;
        default:
          startDate = null;
          endDate = null;
      }

      // Convert to ISO string with timezone
      const isoStartDate = startDate ? startDate.toISOString() : null;
      const isoEndDate = endDate ? endDate.toISOString() : null;

      setSearchStartDate(isoStartDate); // Set the calculated start date in ISO format
      setSearchEndDate(isoEndDate); // Set the calculated end date in ISO format
    } else {
      // If "custom" is selected, clear the dates
      setSearchStartDate(null);
      setSearchEndDate(null);
    }
  };

  const handleApplySearchFilter = () => {
    // Set filterParams to valuen trigger a new API call
    setFilterparams({
      searchStartDate: searchStartDate ?? "",
      searchEndDate: searchEndDate ?? "",
      paymentStatus,
    });

    // Close the modal after applying the filter
    setIsFilter(false);
  };

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
            <Tabs
              tabs={sessionTabs}
              activeTab={activeTable?.label}
              setActiveTab={(tab) => setActiveTable(tab)}
              sessionCount={paymentCount}
            />

            <div className="flex items-center gap-2 max-w-[391px] w-full py-15px px-5 border border-[#9B9DB7] rounded-full text-xs text-primary">
              <MagnifyingGlass className="text-primary/50 min-w-5 w-5 h-5" />
              <input
                type="search"
                placeholder="Search your client name and id"
                className="outline-none w-full placeholder:text-primary/50"
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
                {/* <div className="w-5 h-5 rounded-full border border-primary/20 text-primary flex items-center justify-center bg-white">
                  <X size={12} />
                </div> */}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="w-full border border-green-600/25 rounded-base overflow-x-auto">
              <table className="w-full  bg-white">
                <THeader data={paymentTableHeader} />
                <PaymentTBody
                  TableData={paymentData}
                  paymentLoading={paymentLoading}
                  setIsReminderModal={setIsReminderModal}
                  isReminderModal={isReminderModal}
                  setSinglePaymentData={(item: Item) =>
                    setSinglePaymentData(item as unknown as singlePaymentData)
                  }
                  query={query}
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
            {["last7", "last15", "last30", "custom"].map((option) => (
              <label
                key={option}
                className="flex items-center gap-2.5 text-sm/5 text-gray-500"
              >
                <input
                  type="radio"
                  name="Status"
                  className="w-4.5 h-4.5"
                  checked={selectedStatus === option}
                  onChange={() => handleStatusChange(option)}
                />
                {option === "custom"
                  ? "Custom Date"
                  : `Last ${
                      option === "last7"
                        ? "7"
                        : option === "last15"
                        ? "15"
                        : "30"
                    } Days`}
              </label>
            ))}
          </div>

          {selectedStatus === "custom" && (
            <div className="space-y-5 pt-6">
              <div>
                <label className="text-base/5 text-primary font-medium">
                  Start Date
                </label>
                <DatePicker
                  value={searchStartDate ?? ""}
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
          )}

          <p className="text-base/5 text-primary font-medium pt-6">
            Payment Mark As
          </p>
          <div className="flex items-center gap-6 pt-3">
            {["paidOnTime", "stillPending", "paidDelayed"].map(
              (paymentOption) => (
                <label
                  key={paymentOption}
                  className="flex items-center gap-2.5 text-sm/5 text-gray-500"
                >
                  <input
                    type="radio"
                    name="Payment"
                    className="w-4.5 h-4.5"
                    onChange={() => setPaymentStatus(paymentOption)}
                  />
                  {paymentOption === "paidOnTime"
                    ? "Paid On Time"
                    : paymentOption === "stillPending"
                    ? "Still Pending"
                    : "Paid Delayed"}
                </label>
              )
            )}
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
            disabled={
              selectedStatus === "custom" &&
              (!searchStartDate || !searchEndDate)
            }
            onClick={handleApplySearchFilter}
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
            onClick={() => {
              handleModalTransition(
                setIsReminderModal,
                setIsReminderMassageModal
              );
              getTemplateBodyData();
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
            <span className="text-green-600">{`${templateData?.receiverData?.name} <${templateData?.receiverData?.email}>`}</span>
          </p>
          <p>
            Subject:{" "}
            <span className="font-semibold">{templateData?.emailSubject}</span>
          </p>
          {/* <p className="text-green-600 font-semibold">Hi Hetvi,</p>
          <p className="pt-5">
            This is to remind you that your payment for session on{" "}
          </p>
          <p>
            <span className="font-semibold">19 Sep 2024 at 11:10 AM</span> with
            <span className="font-semibold">Parth Sojitra</span> has been
            pending for sometime. Kindly clear it before your next session.
          </p> */}
          <div
            dangerouslySetInnerHTML={{ __html: templateData?.emailBody ?? "" }}
          />
        </div>
        <Button
          variant="filledGreen"
          className={`w-full mt-7.5`}
          onClick={() => {
            setIsReminderMassageModal(false);
            getTemplateBodyData();
          }}
        >
          send reminder
        </Button>
      </SessionDetailModal>
    </DashboardLayout>
  );
};

export default Payment;
