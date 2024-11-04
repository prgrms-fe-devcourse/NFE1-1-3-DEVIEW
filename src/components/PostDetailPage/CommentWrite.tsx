// CommentWrite.tsx
import { CommentEditor } from "@/components/PostDetailPage";
import { useCreateComment } from "@/hooks/useCreateComment";
import { useUserStore } from "@stores/userStore";
import Avatar from "boring-avatars";
import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

export const CommentWrite = () => {
  const { userInfo } = useUserStore();
  const { id: postId } = useParams<{ id: string }>();
  const [content, setContent] = useState("");

  const { mutate: createComment, isPending } = useCreateComment({
    onSuccess: () => {
      setContent("");
      toast.success("댓글이 작성되었습니다.");
    },
    onError: () => {
      toast.error("댓글 작성에 실패했습니다. 다시 시도해 주세요.");
    }
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!postId || !content.trim()) return;

      createComment({
        postId,
        content: content.trim()
      });
    },
    [postId, content, createComment]
  );

  return (
    <form className="flex flex-col gap-12 border-t border-solid border-gray" onSubmit={handleSubmit}>
      <h2 className="mt-12 text-20 font-medium">Answer</h2>
      <div className="flex flex-col gap-12">
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
            className="bg-blue-500 text-white hover:bg-blue-600 rounded px-4 py-2 disabled:opacity-50"
            disabled={!content.trim() || isPending}
          >
            {isPending ? "작성 중..." : "댓글 작성"}
          </button>
        </div>
      </div>
    </form>
  );
};
