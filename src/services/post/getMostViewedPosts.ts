import { ErrorResponse } from "@customTypes/errorResponse";
import { PaginationRequestProps } from "@customTypes/pagination";
import { TPost } from "@customTypes/post";
import axiosInstance from "@services/axiosInstance";
import axios, { AxiosError } from "axios";

// 페이지네이션 처리는 되어있지 않습니다.
// 기본 limit은 1로 한 개만 전송됩니다.
type GetMostViewedPostsRequestProps = Partial<Pick<PaginationRequestProps, "limit">>;

type GetMostViewedPostsResponseProps = TPost[];

export async function getMostViewedPosts({
  limit
}: GetMostViewedPostsRequestProps): Promise<GetMostViewedPostsResponseProps> {
  try {
    const response = await axiosInstance.get<GetMostViewedPostsResponseProps>(`/post/most-viewed`, {
      params: {
        limit
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("최다 조회수 게시물 조회 실패", axiosError.response.data);
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
