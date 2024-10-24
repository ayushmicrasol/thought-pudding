import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig,
} from "axios";

const authKey =
  typeof window !== "undefined" ? localStorage.getItem("authKeyTh") : null;

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: process.env.BASE_API_URL as string,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: authKey ? `Bearer ${authKey}` : "", // Use empty string if no token
//   },
// });

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL as string, // Ensure the type is explicitly a string,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${authKey}`,
  },
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong!"
    )
);

export default axiosInstance;

// ----------------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });

    return res.data;
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
};

export const formatTime = (dateStr: string): string => {
  const date = new Date(dateStr);
  // Format the time as HH:MM AM/PM
  return date.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};
