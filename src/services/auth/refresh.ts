import { ErrorResponse } from "@customTypes/errorResponse";
import axiosInstance from "@services/axiosInstance";
import axios, { AxiosError } from "axios";

type RefreshResponseProps = {
  accessToken: string;
};

class RefreshTokenError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RefreshTokenError";
  }
}

export async function refresh(): Promise<RefreshResponseProps> {
  try {
    const response = await axiosInstance.post<RefreshResponseProps>("/auth/refresh");
    console.log("AccessToken이 갱신되었습니다. 로그인하지 않고 계속해서 이용 가능합니다.");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("리프레시 토큰 에러:", axiosError.response.data);
        throw new RefreshTokenError(
          axiosError.response.data.message || "리프레시 토큰이 만료되었거나 유효하지 않습니다. 다시 로그인해주세요."
        );
      } else if (axiosError.request) {
        console.error("요청 에러:", axiosError.request);
        throw new Error("서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.");
      }
    }
    console.error("예상치 못한 에러 발생:", error);
    throw new Error("예상치 못한 에러가 발생했습니다. 다시 시도해 주세요.");
  }
}
