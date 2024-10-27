import { refresh } from "@services/auth/refresh";
import { AccessTokenStorage } from "@utils/localStorage";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`, // API의 기본 URL 설정
  timeout: 5000, // 요청 타임아웃 설정
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정,
  withCredentials: true
});

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답이 성공적이면 그대로 반환
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 오류 상태가 401이고 메시지가 "invalid token"인지 확인
    if (error.response?.status === 401 && error.response?.data?.message === "Invalid token") {
      try {
        // 토큰 갱신 시도
        const { accessToken } = await refresh();
        AccessTokenStorage.setToken(accessToken);
        // 새로운 액세스 토큰으로 원래 요청 업데이트
        originalRequest.headers["Authorization"] = AccessTokenStorage.getAuthorizationHeader();

        // 새로운 토큰으로 원래 요청 재시도
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // 토큰 갱신 오류 처리, 있을 경우
        console.error("토큰 갱신 실패: 다시 로그인 해주세요.", refreshError);
        return Promise.reject(refreshError);
      }
    }

    // 401 오류가 아니거나 다른 조건일 경우, 오류와 함께 프로미스 거부
    return Promise.reject(error);
  }
);

export default axiosInstance;
