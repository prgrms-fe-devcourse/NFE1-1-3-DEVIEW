import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TPostDetail } from "@customTypes/post";
import { POST_DETAIL_QUERY_KEY } from "@constants/queryKey";

type ToggleActionParams = {
  postId: string;
};

type ToggleActionResponse<T extends "liked" | "scraped"> = {
  message: string;
} & {
  [K in T]: boolean;
} & {
  [K in T extends "liked" ? "likesCount" : "scrapsCount"]: number;
};

type ToggleConfig<T extends "liked" | "scraped"> = {
  actionKey: T;
  countKey: T extends "liked" ? "likesCount" : "scrapsCount";
  mutationFn: (params: ToggleActionParams) => Promise<ToggleActionResponse<T>>;
};

export function useToggleAction<T extends "liked" | "scraped">({ actionKey, countKey, mutationFn }: ToggleConfig<T>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onMutate: async ({ postId }) => {
      await queryClient.cancelQueries({
        queryKey: [POST_DETAIL_QUERY_KEY, postId]
      });

      const previousPost = queryClient.getQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, postId]);

      if (previousPost) {
        queryClient.setQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, postId], {
          ...previousPost,
          [countKey]: previousPost[actionKey] ? previousPost[countKey] - 1 : previousPost[countKey] + 1,
          [actionKey]: !previousPost[actionKey]
        });
      }

      return { previousPost };
    },
    onError: (_, variables, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData([POST_DETAIL_QUERY_KEY, variables.postId], context.previousPost);
      }
    },
    onSuccess: (newData, variables) => {
      queryClient.setQueryData<TPostDetail>([POST_DETAIL_QUERY_KEY, variables.postId], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          [countKey]: newData[countKey],
          [actionKey]: newData[actionKey]
        };
      });
    }
  });
}
