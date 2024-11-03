import { useMutation, useQueryClient } from "@tanstack/react-query";
import { thumbComment } from "@services/comment/thumbComment";
import { COMMENTS_QUERY_KEY } from "@constants/queryKey";
import { CommonCommentResponseProps } from "@customTypes/comment";
import { InfiniteData } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export function useThumbComment() {
  const queryClient = useQueryClient();
  const { id: postId } = useParams<{ id: string }>();

  return useMutation({
    mutationFn: thumbComment,
    onMutate: async ({ commentId }) => {
      const queryKey = [COMMENTS_QUERY_KEY, postId];
      
      // 관련된 쿼리들의 refetch 취소
      await queryClient.cancelQueries({ queryKey });

      // 이전 상태 저장
      const previousComments = queryClient.getQueryData<InfiniteData<CommonCommentResponseProps>>(queryKey);

      // 옵티미스틱 업데이트 적용
      queryClient.setQueryData<InfiniteData<CommonCommentResponseProps>>(
        queryKey,
        (old) => {
          if (!old) return old;
          
          return {
            ...old,
            pages: old.pages.map((page) => ({
              ...page,
              comments: page.comments.map((comment) => {
                if (comment._id === commentId) {
                  return {
                    ...comment,
                    thumbed: !comment.thumbed,
                    thumbsCount: comment.thumbed ? comment.thumbsCount - 1 : comment.thumbsCount + 1
                  };
                }
                return comment;
              })
            }))
          };
        }
      );

      return { previousComments };
    },
    onError: (err, variables, context) => {
      if (context?.previousComments && postId) {
        queryClient.setQueryData(
          [COMMENTS_QUERY_KEY, postId],
          context.previousComments
        );
      }
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ 
        queryKey: [COMMENTS_QUERY_KEY, postId]
      });
    }
  });
}