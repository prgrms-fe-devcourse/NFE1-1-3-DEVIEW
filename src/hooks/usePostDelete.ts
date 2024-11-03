import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";
import { deletePost } from "@services/post/deletePost";

type UsePostDeleteProps = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  redirectTo?: string;
};

type DeletePostParams = {
  postId: string;
};

export function usePostDelete({ onSuccess, onError, redirectTo = "/" }: UsePostDeleteProps = {}) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (params: DeletePostParams) => deletePost(params),

    onSuccess: (_, variables) => {
      queryClient.removeQueries({
        queryKey: [POST_DETAIL_QUERY_KEY, variables.postId]
      });

      queryClient.invalidateQueries({
        queryKey: ["posts"]
      });

      if (onSuccess) {
        onSuccess();
      }

      if (redirectTo) {
        navigate(redirectTo);
      }
    },

    onError: (error) => {
      onError?.(error as Error);
    }
  });
}
