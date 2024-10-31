import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@services/post/getPostDetail"; // 위에서 정의한 API 함수
import { TPostDetail } from "@customTypes/post";

export const POST_DETAIL_QUERY_KEY = "postDetail";

type UsePostDetailProps = {
  postId: string | undefined;
  enabled?: boolean;
};

type UsePostDetailReturn = {
  post: TPostDetail | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
};

export default function usePostDetail({ postId, enabled = true }: UsePostDetailProps): UsePostDetailReturn {
  const {
    data: post,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: [POST_DETAIL_QUERY_KEY, postId],
    queryFn: () => getPostDetail({ postId }),
    enabled: enabled && Boolean(postId),
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10 // 10분
  });

  return {
    post,
    isLoading,
    isError,
    error: error as Error | null,
    refetch
  };
}
