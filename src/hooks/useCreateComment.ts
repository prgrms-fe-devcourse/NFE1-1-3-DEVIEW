// useCreateComment.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@services/comment/createComment";
import { COMMENTS_QUERY_KEY } from "@/constants/queryKey";
import { TComment } from "@customTypes/comment";

interface InfiniteCommentsData {
  pages: {
    comments: TComment[];
    currentPage: number;
    totalComments: number;
    totalPages: number;
  }[];
  pageParams: number[];
}

interface UseCreateCommentProps {
  onSuccess?: (data: Omit<TComment, "thumbed">) => void;
  onError?: (error: Error) => void;
}

export function useCreateComment({ onSuccess, onError }: UseCreateCommentProps = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,

    onMutate: async (newComment) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: [COMMENTS_QUERY_KEY, newComment.postId]
      });

      // 이전 상태 저장
      const previousData = queryClient.getQueryData([COMMENTS_QUERY_KEY, newComment.postId]);

      // 낙관적 업데이트
      queryClient.setQueryData([COMMENTS_QUERY_KEY, newComment.postId], (old: InfiniteCommentsData | undefined) => {
        console.log("old", old);
        if (!old?.pages?.[0]) return old;

        const optimisticComment: TComment = {
          _id: `temp-${Date.now()}`,
          id: `temp-${Date.now()}`,
          postId: newComment.postId,
          content: newComment.content,
          author: {
            _id: "current-user",
            id: "current-user",
            userId: "현재 사용자" // 실제로는 현재 로그인한 사용자 정보를 사용
          },
          thumbsCount: 0,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __v: "0",
          thumbed: false,
          isMine: true
        };

        return {
          ...old,
          pages: [
            {
              ...old.pages[0],
              comments: [optimisticComment, ...old.pages[0].comments],
              totalComments: old.pages[0].totalComments + 1
            },
            ...old.pages.slice(1)
          ]
        };
      });

      return { previousData };
    },

    onError: (error, _, context) => {
      // 에러 시 이전 상태로 롤백
      if (context?.previousData) {
        queryClient.setQueryData([COMMENTS_QUERY_KEY, _.postId], context.previousData);
      }
      console.error("댓글 생성 중 오류 발생:", error);
      onError?.(error);
    },

    onSuccess: (data) => {
      onSuccess?.(data);
    },

    onSettled: (_, __, variables) => {
      // 서버와 상태 동기화
      queryClient.invalidateQueries({
        queryKey: [COMMENTS_QUERY_KEY, variables.postId]
      });
    }
  });
}
