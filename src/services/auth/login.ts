import { UserInfo } from "@customTypes/userInfo";
import axios from "axios";

type LoginRequestProps = {
  id: string;
  password: string;
};

type LoginResponseProps = {
  accessToken: string;
  userInfo: UserInfo;
};

export async function login(req: LoginRequestProps): Promise<LoginResponseProps> {
  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, req);
    console.log(response.data);
    return Promise.resolve(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log(error.response);
        return Promise.reject(new Error("로그인 실패"));
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
