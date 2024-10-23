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
  clients: Array<unknown>;
  clientCount: number;
  stats: unknown;
};

// get activity data
export function useGetClientCount(startDate: Date, endDate: Date) {
  const query = `startDate=${startDate}&endDate=${endDate}`;
  const url = `${endpoints.clients.clientCount}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      clientsCountData: data?.stats || [],
      clientsCountLoading: isLoading,
      clientsCountError: error,
      clientsCountValidating: isValidating,
    }),
    [data?.stats, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export interface FilterParams {
  searchStartDate?: string;
  searchEndDate?: string;
}
// Clints listing
export function useGetClients(
  pageSize: number,
  pageNumber: number,
  activeTable: string,
  debouncedSearchText: string,
  filterparams: FilterParams
) {
  const query =
    `pageSize=${pageSize}&pageNumber=${pageNumber}&status=${activeTable}&searchText=${debouncedSearchText}` +
    (filterparams && filterparams.searchStartDate && filterparams.searchEndDate
      ? `&startDate=${filterparams.searchStartDate}&endDate=${filterparams.searchEndDate}`
      : "");
  const url = `${endpoints.clients.clients}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      clientsData: data?.clients || [],
      clientsCount: data?.clientCount || 0,
      clientsLoading: isLoading,
      clientsError: error,
      clientsValidating: isValidating,
    }),
    [data?.clients, data?.clientCount, error, isLoading, isValidating]
  );

  return memoizedValue;
}

export async function getClientById(singleClientById: string) {
  if (!singleClientById) return;
  const query = `${singleClientById}`;
  const url = `${endpoints.clients.getClientById}/${query}`;
  const response = await axiosInstance.get(url);
  console.log({ response });

  return response.data.data;
}

export function useGetTimeZone() {
  const url = `${endpoints.timeZones}`;

  const { data, isLoading } = useSWR(url, fetcher, swrOptions);
  const memoizedValue = useMemo(
    () => ({
      timeZoneData: data?.timezones,
      timeZoneLoading: isLoading,
    }),
    [data?.timezones, isLoading]
  );
  console.log({ memoizedValue });

  return memoizedValue;
}

export interface UpdatedClientData {
  name: string;
  phone: string;
  age: string;
  gender: string;
  defaultTimezone: string;
  isActive: boolean;
}

export async function putclientById(
  singleClientById: string,
  updatedData: UpdatedClientData
) {
  const url = `${endpoints.clients.putClientById}/${singleClientById}`;
  const res = await axiosInstance.put(url, updatedData);
  return res.data;
}
