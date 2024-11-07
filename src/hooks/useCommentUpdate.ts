import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateComment } from "@services/comment/updateComment";
import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { InfiniteData } from "@tanstack/react-query";

export function useUpdateComment(postId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateComment,
    onMutate: async ({ commentId, content, userId }: { commentId: string; content: string; userId: string }) => {
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
                  updatedAt: new Date().toISOString(),
                  author: {
                    ...comment.author,
                    userId: userId
                  }
                };
              }
              return comment;
            })
          }))
        };
      });

      return { previousComments };
    },
    onSuccess: (data, variables) => {
      const queryKey = [COMMENTS_QUERY_KEY, postId];

      queryClient.setQueryData<InfiniteData<CommonCommentResponseProps>>(queryKey, (old) => {
        if (!old) return old;

        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            comments: page.comments.map((comment) => {
              if (comment._id === variables.commentId) {
                return {
                  ...data,
                  thumbed: comment.thumbed,
                  // author 객체 구조 유지하면서 userId 업데이트
                  author: {
                    ...comment.author,
                    userId: variables.userId
                  }
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
