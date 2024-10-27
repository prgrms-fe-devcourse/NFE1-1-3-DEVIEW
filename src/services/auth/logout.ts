import { ErrorResponse } from "@customTypes/errorResponse";
import axiosInstance from "@services/axiosInstance";
import { AccessTokenStorage } from "@utils/localStorage";
import axios, { AxiosError } from "axios";

export async function logout(): Promise<void> {
  try {
    await axiosInstance.post(
      "/auth/logout",
      {},
      {
        withCredentials: true
      }
    );
    AccessTokenStorage.removeToken();
    location.reload();
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("로그아웃 실패:", axiosError.response.data);
        throw new Error(axiosError.response.data.message || "로그아웃 실패");
      } else if (axiosError.request) {
        console.error("요청 에러:", axiosError.request);
        throw new Error("서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.");
      }
    }
    console.error("예상치 못한 에러 발생:", error);
    throw new Error("예상치 못한 에러가 발생했습니다. 다시 시도해 주세요.");
  }
}
