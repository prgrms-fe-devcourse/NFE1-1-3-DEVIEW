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
        alert(error.response.data.message);
        return Promise.reject(new Error(error.response.data.message));
      }
    }
    if (error instanceof Error) {
      console.error(error);
      alert(error.message);
    }
    alert("예상치 못한 에러가 발생했습니다.");
    return Promise.reject(error);
  }
}
