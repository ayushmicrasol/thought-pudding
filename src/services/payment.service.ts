import axiosInstance, { fetcher } from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import { useMemo } from "react";
import useSWR from "swr";

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

type ScheduleData = {
  appointments: Array<unknown>;
  appointmentsCount: number;
  allPayTracker: Array<unknown>; // Add this line
  total: number; 
  values?: Array<unknown>; // Add this l
};

export interface FilterParams {
  searchStartDate?: string;
  searchEndDate?: string;
  paymentStatus?: string;
}


interface GetPaymentsParams {
  pageSize: number;
  currentPage: number;
  activeTable: string;
  debouncedSearchText: string;
  filterparams: FilterParams;
  clientId?: string;
}


// get payment listing
export function useGetPayments(params: GetPaymentsParams) {
  const { pageSize, currentPage, activeTable, debouncedSearchText, filterparams, clientId } = params;
   const query = `pageSize=${pageSize}&pageNumber=${currentPage}&${activeTable}=true&searchText=${debouncedSearchText}&clientName=${
    clientId ?? ""
  }` +
    (((filterparams.searchStartDate && filterparams.searchEndDate) || filterparams.paymentStatus) ? `&startDate=${filterparams.searchStartDate}&endDate=${filterparams.searchEndDate}&${filterparams.paymentStatus}=true` : '');

  const url = `${endpoints.paymentTracker.getPaymentsByTherapist}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  console.log(data, "data.................");

  const memoizedValue = useMemo(
    () => ({
      paymentData: data?.allPayTracker || [],
      paymentCount: data?.total || 0,
      paymentLoading: isLoading,
      paymentError: error,
      paymentValidating: isValidating,
    }),
    [data?.allPayTracker, data?.total, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// get activity data
export function useGetPaytracker(startDate: Date, endDate: Date) {
  
  const query = `startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
  const url = `${endpoints.paymentTracker.getStats}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  console.log(data, "data.................");

  const memoizedValue = useMemo(
    () => ({
      paymentTrackerData: data?.values || [],
      paymentTrackerLoading: isLoading,
      paymentTrackerError: error,
      paymentTrackerValidating: isValidating,
    }),
    [data?.values, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// update status
export async function updateStatus(
  selectedStatusId: string,
  status: string,
) {
  const query = `${selectedStatusId}?status=${status}`;
  const url = `${endpoints.paymentTracker.changePaytrackerStatus}/${query}`;

  const res = await axiosInstance.put(url);

  console.log(res, "res..........");

  return res;
}

// get template test status
export async function getTemplateTest(
  clientId: string,
  _id: string,
  templateTest: boolean
) {
  const query = `${clientId}/${_id}?templateTest=${templateTest}`;
  const url = `${endpoints.paymentTracker.sendReminder}/${query}`;

  const res = await axiosInstance.post(url);

  console.log(res, "res..........");

  return res;
}
