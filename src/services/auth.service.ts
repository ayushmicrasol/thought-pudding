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
  
 static async addPractice(formData : any) {
  return await axiosInstance.post(
    `${endpoints.addPractice}`,  
    formData ,{
    headers: { "Content-Type": "multipart/form-data" },
  }                      
  );
}

}
