import { useEffect, useState } from "react";
import { useUpdateComment } from "@hooks/useCommentUpdate";
import { toast } from "react-hot-toast";
import { CodeViewer, CommentEditor } from "@/components/PostDetailPage";

type EditableCodeViewerProps = {
  content: string;
  commentId: string;
  postId: string;
  isEditing: boolean;
  onEditComplete: () => void;
};

export const EditableCodeViewer = ({
  content,
  commentId,
  postId,
  isEditing,
  onEditComplete
}: EditableCodeViewerProps) => {
  const [editedContent, setEditedContent] = useState(content);
  const updateCommentMutation = useUpdateComment(postId);

  // content prop이나 isEditing이 변경될 때마다 editedContent를 초기화
  useEffect(() => {
    setEditedContent(content);
  }, [content, isEditing]);

  const handleSave = async () => {
    if (editedContent.trim() === "") {
      toast.error("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      await updateCommentMutation.mutateAsync({
        commentId,
        content: editedContent
      });

      toast.success("댓글이 수정되었습니다.");
      onEditComplete();
    } catch (e) {
      toast.error("댓글 수정에 실패했습니다.");
      alert(e);
    }
  };

  const handleCancel = () => {
    setEditedContent(content);
    onEditComplete();
  };

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4">
        <CommentEditor value={editedContent} onChange={setEditedContent} placeholder="댓글 수정할 수 있습니다" />
        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="text-sm text-gray-600 border-gray-300 rounded-md hover:bg-gray-50 border px-4 py-2 disabled:opacity-50"
            disabled={updateCommentMutation.isPending}
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 px-4 py-2 disabled:opacity-50"
            disabled={updateCommentMutation.isPending}
          >
            저장
          </button>
        </div>
      </div>
    );
  }

  return <CodeViewer content={content} />;
};
