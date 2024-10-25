import { UserInfo } from "@customTypes/userInfo";
import axios from "axios";

type RegisterRequestProps = UserInfo & {
  password: string;
};

export async function register(req: RegisterRequestProps): Promise<void> {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/register`, req);
    return Promise.resolve(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response);
        return Promise.reject(new Error("회원가입 실패"));
      }
    }
    if (error instanceof Error) {
      console.error(error);
      alert(error.message);
    }
    console.error("An unexpected error occurred:", error);
    alert("An unexpected error occurred");
    return Promise.reject(error);
  }
}
