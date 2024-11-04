import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateComment } from "@services/comment/updateComment";
import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { InfiniteData } from "@tanstack/react-query";

export function useUpdateComment(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onMutate: async ({ commentId, content }: { commentId: string; content: string }) => {
      const queryKey = [COMMENTS_QUERY_KEY, postId];

      await queryClient.cancelQueries({ queryKey });

      const previousComments = queryClient.getQueryData<InfiniteData<CommonCommentResponseProps>>(queryKey);

      queryClient.setQueryData<InfiniteData<CommonCommentResponseProps>>(queryKey, (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            comments: page.comments.map((comment) => {
              if (comment._id === commentId) {
                return {
                  ...comment,
                  content,
                  updatedAt: new Date().toISOString() // 수정 시각 업데이트
                };
              }
              return comment;
            })
          }))
        };
      });

      return { previousComments };
    },
    onError: (_, __, context) => {
      if (context?.previousComments && postId) {
        queryClient.setQueryData([COMMENTS_QUERY_KEY, postId], context.previousComments);
      }
    },
    onSuccess: (data, variables) => {
      const queryKey = [COMMENTS_QUERY_KEY, postId];

      // 서버에서 받은 데이터로 해당 댓글만 업데이트
      queryClient.setQueryData<InfiniteData<CommonCommentResponseProps>>(queryKey, (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            comments: page.comments.map((comment) => {
              if (comment._id === variables.commentId) {
                // thumbed 값은 기존 값 유지, 나머지는 서버 응답으로 업데이트
                return {
                  ...data,
                  thumbed: comment.thumbed
                };
              }
              return comment;
            })
          }))
        };
      });
    }
  });
}
