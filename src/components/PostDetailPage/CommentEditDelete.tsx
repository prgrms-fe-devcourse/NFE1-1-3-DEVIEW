import DeleteBtn from "@components/Common/DeleteBtn";
import EditBtn from "@components/Common/EditBtn";
import { useCommentDelete } from "@hooks/useCommentDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { toast } from "react-hot-toast";

type CommentEditDeleteProps = {
  commentId: string;
  isEditing: boolean; // isEditing을 props로 받도록 수정
  onEditStateChange: (isEditing: boolean) => void;
};

export const CommentEditDelete = ({ commentId, isEditing, onEditStateChange }: CommentEditDeleteProps) => {
  const postId = usePostDetailStore((state) => state.post?._id);

  const { mutate: deleteCommentMutate, isPending } = useCommentDelete({
    postId: postId!,
    onSuccess: () => {
      toast.success("댓글이 삭제되었습니다.");
    },
    onError: (error) => {
      toast.error(error.message || "삭제에 실패했습니다.");
    }
  });

  const onDelete = () => {
    if (!postId) return;

    if (window.confirm("정말 이 댓글을 삭제하시겠습니까?")) {
      deleteCommentMutate({ commentId });
    }
  };

  const handleEditClick = () => {
    onEditStateChange(true);
  };

  return (
    <div className="flex gap-2 text-gray md:gap-4">
      <EditBtn onClick={handleEditClick} disabled={isEditing} />
      <DeleteBtn onClick={onDelete} disabled={isPending || isEditing} />
    </div>
  );
};

export default CommentEditDelete;
