import axiosInstance from "@/utils/axios";
import endpoints from "@/utils/endpoints";

export class AuthService {
  static async signInWithGoogle() {
    return await axiosInstance.get(endpoints.login);
  }
}
