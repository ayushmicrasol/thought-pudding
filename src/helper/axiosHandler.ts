import Auth from "./auth";
import { AxiosError } from "axios"; // Import AxiosError type

export default function axiosHandler(error: AxiosError) {
  if (error.response) {
    if (error.response.status === 401) {
      Auth.signout();
      window.location.href = "/login";
    }
    if (
      error.response.data &&
      (error.response.data as { status?: number }).status === 406
    ) {
      Auth.signout();
      window.location.href = "/login";
    } else {
      return "Something Went Wrong";
    }
    // else{
    //     toast.error(error.response.data.message || error.response.data || 'Something Went Wrong');
    // }
  }
  return;
}
