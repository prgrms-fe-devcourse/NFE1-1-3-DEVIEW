// CommentWrite.tsx
import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { CommentEditor } from "@/components/PostDetailPage";
import { useCreateComment } from "@/hooks/useCreateComment";
import { toast } from "react-hot-toast";

export const CommentWrite = () => {
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
      <div className="flex flex-col gap-7">
        <div className="flex gap-7">
          <figure className="hidden h-12 w-12 overflow-hidden rounded-full md:block md:h-16 md:w-16">
            <img
              className="h-auto w-full"
              src="https://media.istockphoto.com/id/1012645084/ko/%EB%B2%A1%ED%84%B0/%EC%99%84%EB%B2%BD-%ED%95%9C-%EB%9E%9C%EB%8D%A4-%ED%8C%A8%ED%84%B4-%EB%B2%A1%ED%84%B0.jpg?s=170667a&w=0&k=20&c=_fZKK0-ZyFFLungr9E06AOz8r_M4h8aHYLtU2cEJ-yA="
              alt="프로필 이미지"
            />
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
