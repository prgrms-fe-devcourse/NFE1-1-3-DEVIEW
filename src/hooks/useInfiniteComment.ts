import { useInfiniteQuery } from "@tanstack/react-query";
import { getComments } from "@services/comment/getComments";
import { COMMENTS_QUERY_KEY } from "@constants/queryKey";

type UseInfiniteCommentsQueryProps = {
  postId: string;
  limit?: number;
  enabled?: boolean;
};

export function useInfiniteCommentsQuery({ postId, limit = 10, enabled = true }: UseInfiniteCommentsQueryProps) {
  return useInfiniteQuery({
    queryKey: [COMMENTS_QUERY_KEY, postId],
    queryFn: ({ pageParam = 1 }) => getComments({ postId, page: pageParam, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = allPages.length + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
    enabled,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    select: (data) => ({
      pages: data.pages,
      pageParams: data.pageParams,
      comments: data.pages.flatMap((page) => page.comments),
      totalCount: data.pages[0]?.totalComments ?? 0
    })
  });
}
