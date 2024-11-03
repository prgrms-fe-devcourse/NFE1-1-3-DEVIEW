import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@services/post/getPostDetail";
import { TPostDetail } from "@customTypes/post";
import { AxiosError } from "axios";
import { ErrorResponse } from "@customTypes/errorResponse";
import { POST_DETAIL_QUERY_KEY } from '@constants/queryKey';

interface UsePostDetailProps {
  postId: string | undefined;
  enabled?: boolean;
}

interface UsePostDetailReturn {
  post: TPostDetail | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  isInvalidId: boolean;
  isFetching: boolean;
}

/**
 * 게시글 상세 정보를 조회하는 훅
 * @param postId - 게시글 ID (undefined 가능)
 * @param enabled - 쿼리 활성화 여부
 */
export default function usePostDetail({ postId, enabled = true }: UsePostDetailProps): UsePostDetailReturn {
  // ID 유효성 체크
  const isInvalidId = !postId;

  const {
    data: post,
    isLoading,
    isError,
    error,
    refetch: originalRefetch,
    isFetching
  } = useQuery<TPostDetail, AxiosError<ErrorResponse>>({
    queryKey: [POST_DETAIL_QUERY_KEY, postId],
    queryFn: () => getPostDetail({ postId: postId! }),
    enabled: enabled && Boolean(postId),
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    refetchOnWindowFocus: false // 창 포커스 시 자동 재조회 비활성화
  });

  // refetch 함수 타입 안전하게 래핑
  const refetch = async () => {
    try {
      await originalRefetch();
    } catch (err) {
      console.error("게시글 재조회 실패:", err);
    }
  };

  return {
    post,
    isLoading,
    isError,
    error: error as Error | null,
    refetch,
    isInvalidId,
    isFetching
  };
}
