import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@services/post/createPost";
import { CommonPostRequestProps } from "@customTypes/post";

type CreatePostRequestProps = Pick<
  CommonPostRequestProps,
  "title" | "detail" | "devDependencies" | "code" | "devVersions"
>;

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["post", "create"],
    mutationFn: (data: CreatePostRequestProps) => {
      // // 요청 전 데이터 확인
      // console.log("Mutation Request Data:", {
      //   title: data.title,
      //   detail: data.detail,
      //   code: data.code,
      //   devDependencies: data.devDependencies,
      //   deVersions: data.devVersions
      // });
      return createPost(data);
    },
    onSuccess: (data) => {
      console.log("Mutation Success Data:", data);
      // 게시물 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      // 새로운 게시물을 캐시에 직접 추가
      queryClient.setQueryData(["post", data._id], data);
    },
    onError: (error: Error) => {
      console.error("Mutation Error:", {
        message: error.message,
        stack: error.stack
      });
    }
  });
};
