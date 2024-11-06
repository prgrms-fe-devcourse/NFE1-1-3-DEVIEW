import { DeleteBtn } from "@components/Common/DeleteBtn";
import { EditBtn } from "@components/Common/EditBtn";
import { useCommentDelete } from "@hooks/useCommentDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { customConfirm, customToast, errorAlert } from "@utils/sweetAlert/alerts";

type CommentEditDeleteProps = {
  commentId: string;
  isEditing: boolean;
  onEditStateChange: (isEditing: boolean) => void;
};

export const CommentEditDelete = ({ commentId, isEditing, onEditStateChange }: CommentEditDeleteProps) => {
  const postId = usePostDetailStore((state) => state.post?._id);

  const { mutate: deleteCommentMutate, isPending } = useCommentDelete({
    postId: postId!,
    onSuccess: () => {
      customToast({ title: "댓글이 삭제되었습니다." });
    },
    onError: (error) => {
      errorAlert({ title: "댓글 삭제 중 오류가 발생했습니다.", text: error.message });
    }
  });

  const onDelete = async () => {
    if (!postId) return;
    const result = await customConfirm({ title: "댓글 삭제", text: "정말로 삭제하시겠습니까?" });
    if (result.isConfirmed) {
      deleteCommentMutate({ commentId });
    }
  };

  const onEditClick = async () => {
    const result = await customConfirm({ title: "댓글 수정", text: "댓글을 수정하시겠습니까?" });
    if (result.isConfirmed) {
      onEditStateChange(true);
    }
  };

  return (
    <div className="flex gap-2 text-gray md:gap-4">
      <EditBtn onClick={onEditClick} disabled={isEditing} />
      <DeleteBtn onClick={onDelete} disabled={isPending || isEditing} />
    </div>
  );
};
