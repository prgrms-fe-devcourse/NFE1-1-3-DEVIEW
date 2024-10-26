import { AccessTokenStorage } from "@utils/localStorage";
import axios from "axios";

export async function logout() {
  try {
    await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/logout`,
      {},
      {
        withCredentials: true
      }
    );
    AccessTokenStorage.removeToken();
    location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return Promise.reject(new Error("로그아웃 실패"));
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
