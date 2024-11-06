import { CommentEditor } from "@/components/PostDetailPage";
import { useCreateComment } from "@/hooks/useCreateComment";
import { useUserStore } from "@stores/userStore";
import { errorAlert, customToast } from "@utils/sweetAlert/alerts";
import Avatar from "boring-avatars";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";

export const CommentWrite = () => {
  const { userInfo } = useUserStore();
  const { id: postId } = useParams<{ id: string }>();
  const [content, setContent] = useState("");

  const { mutate: createComment, isPending } = useCreateComment({
    onSuccess: () => {
      setContent("");
      customToast({ title: "댓글이 작성되었습니다.", text: "댓글이 성공적으로 작성되었습니다." });
    },
    onError: () => {
      errorAlert({ title: "댓글 작성 중 오류가 발생했습니다.", text: "댓글 내용을 입력해주세요." });
    }
  });

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      // content가 비어있거나 공백 문자만 있는 경우
      const trimmedContent = content.replace(/<[^>]*>/g, "").trim();

      if (!postId || !trimmedContent) {
        errorAlert({ title: "댓글 작성 오류", text: "댓글 내용을 입력해주세요." });
        return;
      }

      createComment({
        postId,
        content: content.trim()
      });
    },
    [postId, content, createComment]
  );

  return (
    <form className="flex flex-col gap-12 border-t border-solid border-gray" onSubmit={onSubmit}>
      <h2 className="mt-12 text-16 font-medium md:text-20">Answer</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-7">
          <figure className="hidden h-12 w-12 overflow-hidden rounded-full md:block md:h-16 md:w-16">
            <Avatar name={userInfo?.userId ?? ""} variant="beam" />
          </figure>
          <div className="flex-1">
            <CommentEditor value={content} onChange={setContent} placeholder="답변을 작성해주세요..." />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="primary-btn w-24 rounded-[8px] px-4 py-3 text-14 hover:bg-primary md:text-16"
            disabled={!content.replace(/<[^>]*>/g, "").trim() || isPending}
          >
            {isPending ? "작성 중..." : "댓글 작성"}
          </button>
        </div>
      </div>
    </form>
  );
};
