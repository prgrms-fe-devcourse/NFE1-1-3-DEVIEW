import { DevDependency } from "@customTypes/post";
import { QueryKey, useSuspenseInfiniteQuery } from "@tanstack/react-query";

type FetchParams = { page: number; limit: number } & Record<string, string | number | DevDependency[]>;

type UseInfiniteProps<T> = {
  key: QueryKey;
  fetchFunc: (params: FetchParams) => Promise<T>;
  limit?: number; // 기본 limit 값을 설정할 수 있도록 추가
};

export default function useSuspenseInfinite<
  T extends {
    currentPage: number;
    totalPages: number;
  }
>({ key, fetchFunc, limit = 10 }: UseInfiniteProps<T>) {
  // 페이지 이동 시 지연을 처리하는 함수
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useSuspenseInfiniteQuery<T, Error>(
    {
      queryKey: key,
      queryFn: async ({ pageParam = 1 }) => {
        if (pageParam !== 1) await delay(1000); // 페이지가 1이 아닐 때만 지연 추가
        return fetchFunc({ page: pageParam as number, limit });
      },
      getNextPageParam: (lastPage) =>
        lastPage.currentPage < lastPage.totalPages ? lastPage.currentPage + 1 : undefined,
      initialPageParam: 1
    }
  );

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error };
}
