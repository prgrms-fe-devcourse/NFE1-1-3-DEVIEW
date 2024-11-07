import { useUpdateComment } from "@hooks/useCommentUpdate";
import { useEffect, useState } from "react";
import { CodeViewer, CommentEditor, PostDetailActBtn } from "@/components/PostDetailPage";
import { customToast, errorAlert } from "@utils/sweetAlert/alerts";

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

  const onSave = async () => {
    if (!editedContent.replace(/<[^>]*>/g, "").trim()) {
      errorAlert({ title: "댓글 내용을 입력해주세요.", text: "댓글 내용이 비어있습니다." });
      return;
    }

    try {
      await updateCommentMutation.mutateAsync({
        commentId,
        content: editedContent
      });

      customToast({ title: "댓글 수정 완료", icon: "success" });
      onEditComplete();
    } catch {
      errorAlert({ title: "댓글 수정 중 오류가 발생했습니다.", text: "다시 시도해주세요." });
    }
  };

  const onCancel = () => {
    setEditedContent(content);
    onEditComplete();
  };

  if (isEditing) {
    return (
      <div className="flex flex-col gap-4">
        <CommentEditor value={editedContent} onChange={setEditedContent} placeholder="댓글 수정할 수 있습니다" />
        <div className="flex justify-end gap-2">
          <PostDetailActBtn
            onClick={onCancel}
            color="gray"
            isPending={updateCommentMutation.isPending}
            type="button"
            text="취소"
          />
          <PostDetailActBtn
            onClick={onSave}
            color="primary"
            isPending={updateCommentMutation.isPending}
            disabled={!editedContent.replace(/<[^>]*>/g, "").trim()}
            type="button"
            text="저장"
          />
        </div>
      </div>
    );
  }

  return <CodeViewer content={content} />;
};
