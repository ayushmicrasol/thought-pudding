import axiosInstance from "@/utils/axios";
import endpoints from "@/utils/endpoints";

export class AuthService {
  static async signInWithGoogle() {
    return await axiosInstance.get(endpoints.login);
  }

  static async verifyTherapist(code: string) {
    return await axiosInstance.post(
      `${endpoints.verifyTherapist}?code=${code}`
    );
  }
  static async addPractice(formData: Record<string, unknown>, code: string) {
    console.log("formData", formData);
    return await axiosInstance.post(
      `${endpoints.addPractice}?code=${code}`,
      formData
    );
  }
}
