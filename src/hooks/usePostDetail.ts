import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@services/post/getPostDetail";
import { TPostDetail } from "@customTypes/post";

export const POST_DETAIL_QUERY_KEY = "postDetail";

type UsePostDetailProps = {
  postId: string | undefined;  // undefined 허용
  enabled?: boolean;
};

type UsePostDetailReturn = {
  post: TPostDetail | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
  isInvalidId: boolean;  // id 유효성 상태 추가
};

export default function usePostDetail({ 
  postId, 
  enabled = true 
}: UsePostDetailProps): UsePostDetailReturn {
  // id 유효성 체크
  const isInvalidId = !postId;

  const {
    data: post,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: [POST_DETAIL_QUERY_KEY, postId],
    queryFn: () => getPostDetail({ postId: postId! }),
    enabled: enabled && Boolean(postId),
    retry: 1,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10
  });

  return {
    post,
    isLoading,
    isError,
    error: error as Error | null,
    refetch,
    isInvalidId
  };
}