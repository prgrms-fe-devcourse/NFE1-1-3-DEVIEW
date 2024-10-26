import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`, // API의 기본 URL 설정
  timeout: 5000, // 요청 타임아웃 설정
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정,
  withCredentials: true
});

export default axiosInstance;
