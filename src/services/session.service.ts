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
  stats: unknown;
};

export interface FilterParams {
  searchStartDate?: string;
  searchEndDate?: string;
}
interface GetSchedulesParams {
  pageSize: number;
  currentPage: number;
  activeTable: string;
  debouncedSearchText: string;
  finalDate?: string;
  clientId?: string;
  filterparams: FilterParams;
}

export function useGetSchedules(params: GetSchedulesParams) {
  console.log(params, "params................");

  const {
    pageSize,
    currentPage,
    activeTable,
    debouncedSearchText,
    clientId,
    finalDate,
    filterparams,
  } = params;

  const query =
    `pageSize=${pageSize}&pageNumber=${currentPage}&status=${activeTable}&searchText=${debouncedSearchText}&client=${
      clientId ?? ""
    }` +
    (finalDate ? `&startDate=${finalDate}&endDate=${finalDate}` : "") +
    (filterparams && filterparams.searchStartDate && filterparams.searchEndDate
      ? `&startDate=${filterparams.searchStartDate}&endDate=${filterparams.searchEndDate}`
      : "");

  const url = `${endpoints.sessions.schedules}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      sessionData: data?.appointments || [],
      sessionCount: data?.appointmentsCount || 0,
      sessionLoading: isLoading,
      sessionError: error,
      sessionValidating: isValidating,
    }),
    [
      data?.appointments,
      data?.appointmentsCount,
      error,
      isLoading,
      isValidating,
    ]
  );

  return memoizedValue;
}

// Cancel Session
export async function deleteSchedules(singleSessionID: string) {
  const query = `${singleSessionID}`;
  const url = `${endpoints.sessions.cancelSchedule}/${query}`;

  const res = await axiosInstance.put(url);

  console.log(res, "res..........");

  return res;
}

// get activity data
export function useGetScheduleCount(startDate: Date, endDate: Date) {
  const query = `startDate=${startDate}&endDate=${endDate}`;
  const url = `${endpoints.sessions.scheduleCount}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      scheduleCountData: data?.stats || [],
      scheduleCountLoading: isLoading,
      scheduleCountError: error,
      scheduleCountValidating: isValidating,
    }),
    [data?.stats, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// Reschedule
export async function rescheduleSession(
  rescheduleSessionID: string,
  formData: Record<string, string>
) {
  const query = `${rescheduleSessionID}`;
  const url = `${endpoints.sessions.reschedule}/${query}`;

  const res = await axiosInstance.put(url, formData);

  console.log(res, "res..........");

  return res;
}

// Send Reminder
export async function scheduleReminder(sessionID: string) {
  const query = `${sessionID}`;
  const url = `${endpoints.sessions.scheduleReminder}/${query}`;

  const res = await axiosInstance.post(url);

  console.log(res, "res..........");

  return res;
}

// Update Payment
export async function updatePayment(paymentID: string, newAmount: string) {
  const query = `${paymentID}`;
  const url = `${endpoints.sessions.recreatePaymentLink}/${query}`;

  const formData = new FormData();
  formData.append("newAmount", newAmount);

  const res = await axiosInstance.put(url);

  console.log(res, "res..........");

  return res;
}
