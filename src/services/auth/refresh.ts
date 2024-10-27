import axiosInstance from "@services/axiosInstance";
import axios from "axios";

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
      if (error.response) {
        console.error("리프레시 토큰 에러:", error.response.data);
        throw new RefreshTokenError("리프레시 토큰이 만료되었거나 유효하지 않습니다. 다시 로그인해주세요.");
      }
      throw new Error("서버와의 통신 중 오류가 발생했습니다. 네트워크 연결을 확인해주세요.");
    }
    console.error("예상치 못한 오류가 발생했습니다:", error);
    throw new Error("알 수 없는 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
  }
}
