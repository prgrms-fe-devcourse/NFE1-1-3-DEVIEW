import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@services/post/getPostDetail";
import { TPostDetail } from "@customTypes/post";
import { AxiosError } from "axios";
import { ErrorResponse } from "@customTypes/errorResponse";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";
import { usePostDetailStore } from "@stores/postDetailStore";
import { useEffect } from "react";

type UsePostDetailProps = {
  postId: string | undefined;
  enabled?: boolean;
};

type UsePostDetailReturn = {
  post: TPostDetail | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  isInvalidId: boolean;
  isFetching: boolean;
};

export function usePostDetail({ postId, enabled = true }: UsePostDetailProps): UsePostDetailReturn {
  const { setPost, setLoading, setError } = usePostDetailStore();

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
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false
  });

  // React Query의 상태를 Zustand store에 동기화
  useEffect(() => {
    setLoading(isLoading);
    if (post) {
      setPost(post);
    }
    if (error) {
      setError(error as Error);
    }
  }, [post, isLoading, error, setPost, setLoading, setError]);

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
