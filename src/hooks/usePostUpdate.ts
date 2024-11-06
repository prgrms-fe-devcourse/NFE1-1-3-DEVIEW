import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";
import { updatePost } from "@services/post/updatePost";

type UsePostUpdateProps = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  redirectTo?: string;
};

export function usePostUpdate({ onSuccess, onError, redirectTo }: UsePostUpdateProps = {}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updatePost,

    onSuccess: (_, variables) => {
      // 해당 게시글의 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: [POST_DETAIL_QUERY_KEY, variables.postId]
      });

      // 게시글 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ["posts"]
      });

      if (onSuccess) {
        onSuccess();
      }

      // redirectTo가 제공되지 않았다면 해당 게시글 상세 페이지로 이동
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate(`/post/${variables.postId}`);
      }
    },

    onError: (error) => {
      onError?.(error as Error);
    }
  });
}
