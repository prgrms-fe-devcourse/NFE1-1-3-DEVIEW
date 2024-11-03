// usePostLike.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { likePost } from "@services/post/likePost";
import { TPostDetail } from "@customTypes/post";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";
export function usePostLike() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePost,
    onMutate: async ({ postId }) => {
      await queryClient.cancelQueries({
        queryKey: [POST_DETAIL_QUERY_KEY, postId]
      });

      const previousPost = queryClient.getQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, postId]);

      if (previousPost) {
        // 즉시 업데이트를 위해 setQueryData 사용
        queryClient.setQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, postId], {
          ...previousPost,
          likesCount: previousPost.liked ? previousPost.likesCount - 1 : previousPost.likesCount + 1,
          liked: !previousPost.liked
        });
      }

      return { previousPost };
    },
    onError: (_, variables, context) => {
      if (context?.previousPost) {
        // 에러 시 롤백, 쿼리 키 수정
        queryClient.setQueryData([POST_DETAIL_QUERY_KEY, variables.postId], context.previousPost);
      }
    },
    onSuccess: (newData, variables) => {
      // 성공 시 업데이트, 쿼리 키 수정
      queryClient.setQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, variables.postId], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          likesCount: newData.likesCount,
          liked: newData.liked
        };
      });
    }
  });
}
