import { ErrorResponse } from "@customTypes/errorResponse";
import axiosInstance from "@services/axiosInstance";
import axios, { AxiosError } from "axios";
import { TPost } from "@customTypes/post";
type GetRecentUnansweredPostsResponseProps = TPost[];

export async function getRecentUnansweredPosts(): Promise<GetRecentUnansweredPostsResponseProps> {
  try {
    const response = await axiosInstance.get<GetRecentUnansweredPostsResponseProps>(`/post/recent-unanswered`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("최근 게시물 중 답변 없는 게시물 조회 실패", axiosError.response.data);
        throw new Error(axiosError.response.data.message || "요청 실패");
      } else if (axiosError.request) {
        console.error("요청 에러:", axiosError.request);
        throw new Error("서버에 연결할 수 없습니다. 네트워크를 확인해 주세요.");
      }
    }
    console.error("예상치 못한 에러 발생:", error);
    throw new Error("예상치 못한 에러가 발생했습니다. 다시 시도해 주세요.");
  }
}
