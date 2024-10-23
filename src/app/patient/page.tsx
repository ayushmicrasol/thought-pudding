"use client";
import Button from "@/components/common/Button";
import DatePicker from "@/components/common/DatePicker";
import TablePagination from "@/components/common/TablePagination";
import Tabs from "@/components/common/Tabs";
import ActivityCard from "@/components/dashboard/common/ActivityCard";
import PatientTBody from "@/components/dashboard/common/table/PatientTBody";
import THeader from "@/components/dashboard/common/table/THeader";
import DaysSelectDropdown from "@/components/dashboard/DaysSelectDropdown";
import EditClientSidebar from "@/components/dashboard/EditClientSidebar";
import SessionDetailModal from "@/components/dashboard/SessionDetailModal";
import DashboardLayout from "@/layout/dashboard/DashboardLayout";
import {
  FilterParams,
  useGetClientCount,
  useGetClients,
} from "@/services/clients.service";
import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const clientsTabs = [
  { label: "All", value: "" },
  { label: "Active", value: "confirmed" },
  { label: "Inactive", value: "pending" },
];

const sessionTableHeader = [
  "Name",
  "Contact Number",
  "Completed session",
  "status",
  "Appointment",
  "actions",
];

const Patient = () => {
  const [isMonthsDropSelect, setIsMonthsDropSelect] = useState("Today");
  const [isFilter, setIsFilter] = useState(false);
  const [isEditClient, setIsEditClient] = useState(false);
  const [singleClientById, setSingleClientById] = useState("");
  const [activeTable, setActiveTable] = useState(clientsTabs[0]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");

  const [searchStartDate, setSearchStartDate] = useState<string | null>(null);
  const [searchEndDate, setSearchEndDate] = useState<string | null>(null);

  const [filterparams, setFilterparams] = useState<FilterParams>({});
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Set the page size as required

  const query =
    `pageSize=${pageSize}&pageNumber=${currentPage}&status=${activeTable}&searchText=${debouncedSearchText}` +
    (filterparams && filterparams.searchStartDate && filterparams.searchEndDate
      ? `&startDate=${filterparams.searchStartDate}&endDate=${filterparams.searchEndDate}`
      : "");

  const { clientsData, clientsLoading, clientsCount } = useGetClients(
    pageSize,
    currentPage,
    activeTable.value,
    debouncedSearchText,
    filterparams
  );

  const totalPages = Math.ceil(clientsCount / pageSize);
  console.log({ clientsData, clientsLoading, clientsCount });
  console.log(activeTable.value, "-----------");
  console.log(singleClientById, "singleClientById......................");

  // activity section start
  const { clientsCountData } = useGetClientCount(startDate, endDate) as {
    clientsCountData: { new?: number; active?: number; in_active?: number };
  };

  const activity = [
    {
      title: "New Patient",
      count: `${clientsCountData?.new || 0}`,
      percentage: "",
    },
    {
      title: "Active Patient",
      count: `${clientsCountData?.active || 0}`,
      percentage: "",
    },
    {
      title: "In Active Patient",
      count: `${clientsCountData?.in_active || 0}`,
      percentage: "",
    },
  ];

  const handleApplySearchFilter = () => {
    // Set filterParams to valuen trigger a new API call
    setFilterparams({
      searchStartDate: searchStartDate ?? "",
      searchEndDate: searchEndDate ?? "",
    });

    // Close the modal after applying the filter
    setIsFilter(false);
  };

  // set search value
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearchText(searchText), 500);
    return () => clearTimeout(handler);
  }, [searchText]);

  return (
    <DashboardLayout>
      <div className="bg-white mt-5 rounded-base overflow-hidden">
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
            <Tabs
              tabs={clientsTabs}
              activeTab={activeTable.label}
              setActiveTab={(tab) => setActiveTable(tab)}
              sessionCount={clientsCount}
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
                <THeader data={sessionTableHeader} />
                <PatientTBody
                  TableData={clientsData}
                  clientsLoading={clientsLoading}
                  setIsEditClient={setIsEditClient}
                  isEditClient={isEditClient}
                  setSingleClientById={setSingleClientById}
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

      <EditClientSidebar
        isEditClient={isEditClient}
        setIsEditClient={setIsEditClient}
        singleClientById={singleClientById}
        query={query}
        // singleClientsData={singleClientsData}
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
            <DatePicker
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
    </DashboardLayout>
  );
};

export default Patient;
