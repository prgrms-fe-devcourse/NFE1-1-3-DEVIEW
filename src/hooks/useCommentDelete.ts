import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { TComment } from "@customTypes/comment";
import { deleteComment } from "@services/comment/deleteComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UseCommentDeleteProps = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  postId: string; // postId 추가
};

type CommentPage = {
  comments: TComment[];
  currentPage: number;
  totalPages: number;
  totalComments: number;
};

export function useCommentDelete({ onSuccess, onError, postId }: UseCommentDeleteProps) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComment,

    onMutate: async ({ commentId }) => {
      // 진행 중인 댓글 조회 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: [COMMENTS_QUERY_KEY, postId]
      });

      // 이전 상태 저장
      const previousData = queryClient.getQueryData<{
        pages: CommentPage[];
        pageParams: unknown[];
      }>([COMMENTS_QUERY_KEY, postId]);

      if (previousData) {
        // Optimistic Update: 각 페이지에서 해당 댓글 제거
        const newPages = previousData.pages.map((page) => ({
          ...page,
          comments: page.comments.filter((comment) => comment._id !== commentId),
          totalComments: page.totalComments - 1
        }));
        //Optimistic Update: 댓글 목록 갱신
        queryClient.setQueryData([COMMENTS_QUERY_KEY, postId], {
          ...previousData,
          pages: newPages
        });
      }

      return { previousData };
    },

    onError: (error, _, context) => {
      // 에러 시 이전 상태로 롤백
      if (context?.previousData) {
        queryClient.setQueryData([COMMENTS_QUERY_KEY, postId], context.previousData);
      }
      onError?.(error as Error);
    },

    onSuccess: () => {
      // 성공 시 댓글 목록 갱신
      queryClient.invalidateQueries({
        queryKey: [COMMENTS_QUERY_KEY, postId]
      });
      onSuccess?.();
    }
  });
}
