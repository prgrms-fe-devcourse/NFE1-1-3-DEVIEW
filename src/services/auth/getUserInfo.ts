import { UserInfo } from "@customTypes/userInfo";
import axiosInstance from "@services/axiosInstance";
import { AccessTokenStorage } from "@utils/localStorage";
import axios from "axios";

type UserResponseProps = UserInfo;

export async function getUserInfo(): Promise<UserResponseProps> {
  try {
    const response = await axiosInstance.get("/auth/user", {
      headers: {
        Authorization: AccessTokenStorage.getAuthorizationHeader()
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        // 서버에서 응답을 받았지만 상태 코드가 2xx가 아닌 경우
        console.error("Server responded with an error:", error.response.data);
        throw new Error("서버에서 오류가 발생했습니다.");
      } else if (error.request) {
        // 요청이 전송되었지만 응답이 수신되지 않은 경우
        console.error("No response received from the server");
        throw new Error("서버로부터 응답을 받지 못했습니다.");
      } else {
        // 요청을 설정하는 동안 오류가 발생한 경우
        console.error("Error setting up the request:", error.message);
        throw new Error("요청 설정 중 오류가 발생했습니다.");
      }
    } else {
      // Axios 오류가 아닌 다른 유형의 오류인 경우
      console.error("An unexpected error occurred:", error);
      throw new Error("예기치 않은 오류가 발생했습니다.");
    }
  }
}
