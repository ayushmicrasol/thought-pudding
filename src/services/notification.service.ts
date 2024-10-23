import { fetcher } from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import { useMemo } from "react";
import useSWR from "swr";

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

type NotificationData = {
  data: {
    notifications: Array<unknown>;
  };
};

// All notification
export function useAllNotifications() {
  //   const query = ``;
  const url = `${endpoints.therapistNotification}`;

  const { data, isLoading, error, isValidating } = useSWR<NotificationData>(
    url,
    fetcher,
    swrOptions
  );

  const memoizedValue = useMemo(
    () => ({
      notificationData: data?.data.notifications || [],

      notificationLoading: isLoading,
      notificationError: error,
      notificationValidating: isValidating,
    }),
    [data?.data?.notifications, error, isLoading, isValidating]
  );

  return memoizedValue;
}
