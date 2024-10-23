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

// get payment listing
export function useGetDashboardStats() {
  const query = ``;
  const url = `${endpoints.dashboard.getDashboardStats}?${query}`;

  const { data, isLoading, error, isValidating } = useSWR<ScheduleData>(
    url,
    fetcher,
    swrOptions
  );

  console.log(data, "data.................");

  const memoizedValue = useMemo(
    () => ({
      dashboardStatsData: data || [],
      dashboardStatsLoading: isLoading,
      dashboardStatsError: error,
      dashboardStatsValidating: isValidating,
    }),
    [data, error, isLoading, isValidating]
  );

  return memoizedValue;
}

// get payment listing
export async function createSchedule(formData: Record<string, unknown> ) {
  const url = `${endpoints.dashboard.createSchedule}`;

  const res = await axiosInstance.post(url, formData);

  console.log(res, "res..........");



  return res;
}
