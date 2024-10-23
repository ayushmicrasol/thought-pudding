import axiosInstance, { fetcher } from "@/utils/axios";
import endpoints from "@/utils/endpoints";
import { useMemo } from "react";
import useSWR from "swr";

const swrOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

// get setting therapist data
export function useGetSettingData() {
  const url = `${endpoints.setting.therapistSettingData}`;

  const { data, isLoading } = useSWR(url, fetcher, swrOptions);

  console.log(data, "data.................");

  const memoizedValue = useMemo(
    () => ({
      therapistData: data?.therapist,
      therapistLoading: isLoading,
    }),
    [data?.therapist, isLoading]
  );

  return memoizedValue;
}

// set setting therapist data
export async function updateSettingData(formData: Record<string, unknown>) {
  console.log(formData, "formData...............");

  const url = `${endpoints.setting.therapistSettingData}`;

  const res = await axiosInstance.put(url, formData);

  console.log(res, "res..........");

  return res;
}

// get payment listing
export async function uploadProfileImage(upload: FormData) {
  console.log(upload, "formData...............");

  const url = `${endpoints.setting.uploadProfile}`;

  const res = await axiosInstance.post(url, upload, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  console.log(res, "res..........");

  return res;
}

// therapist vpa upate
export async function therapistVpaUpdate(formData: Record<string, unknown>) {
  console.log(formData, "formData...............");

  const url = `${endpoints.setting.therapistVpaUpdate}`;

  const res = await axiosInstance.put(url, formData);

  console.log(res, "res..........");

  return res;
}

// payment menu update
export async function paymentMenuUpdate(formData: Record<string, unknown>) {
  console.log(formData, "formData...............");

  const url = `${endpoints.setting.paymentMenuUpdate}`;

  const res = await axiosInstance.post(url, formData);

  console.log(res, "res..........");

  return res;
}

// get setting calendar sync data
export function useGetResyncCalendarData() {
  const query = `maxResults=${500}`;
  const url = `${endpoints.setting.calendarResync}?${query}`;

  const { data, isLoading } = useSWR(url, fetcher, swrOptions);

  console.log(data, "data.................");

  const memoizedValue = useMemo(
    () => ({
      resyncCalendarData: data,
      resyncCalendarLoading: isLoading,
    }),
    [data, isLoading]
  );

  return memoizedValue;
}

type PaymentHistory = {
  data: {
    subscriptions: Array<unknown>;
  };
};
export function usePaymentHistory() {
  const url = `${endpoints.setting.subscription.paymentHistory}`;

  const { data, isLoading } = useSWR<PaymentHistory>(url, fetcher, swrOptions);

  const memoizedValue = useMemo(
    () => ({
      paymentHistoryData: data?.data?.subscriptions || [],
      paymentHistoryLoading: isLoading,
    }),
    [data?.data?.subscriptions, isLoading]
  );

  return memoizedValue;
}
