import { UserInfo } from "@customTypes/userInfo";
import { AccessTokenStorage } from "@utils/localStorage";
import axios from "axios";

type MyselfResponseProps = UserInfo;

export async function myself(): Promise<MyselfResponseProps> {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/auth/myself`, {
      headers: {
        Authorization: AccessTokenStorage.getAuthorizationHeader()
      }
    });
    return Promise.resolve(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return Promise.reject(new Error("Error message"));
      }
    }
    if (error instanceof Error) {
      console.error(error);
      alert(error.message);
    }
    alert("An unexpected error occurred");
    return Promise.reject(error);
  }
}
