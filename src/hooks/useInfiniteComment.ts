import { useInfiniteQuery } from "@tanstack/react-query";
// import { GetCommentsRequestProps, GetCommentsResponseProps } from "@customTypes";
import { getComments } from "@services/comment/getComments";

export const COMMENTS_QUERY_KEY = "commentList";

type UseInfiniteCommentsQueryProps = {
  postId: string;
  limit?: number;
  enabled?: boolean;
};

export default function useInfiniteCommentsQuery({
  postId,
  limit = 10,
  enabled = true
}: UseInfiniteCommentsQueryProps) {
  return useInfiniteQuery({
    queryKey: [COMMENTS_QUERY_KEY, postId],
    queryFn: ({ pageParam = 1 }) => getComments({ postId, page: pageParam, limit }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      // console.log("===== Page Calculation Debug =====");
      // console.log("Current Page:", lastPage.currentPage);
      // console.log("Total Pages:", lastPage.totalPages);
      // console.log("Total Comments:", lastPage.totalComments);
      // console.log("Loaded Pages:", allPages.length);

      // 현재 페이지가 전체 페이지 수보다 작으면 다음 페이지 호출
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
