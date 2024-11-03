import DeleteBtn from "@components/Common/DeleteBtn";
import EditBtn from "@components/Common/EditBtn";
import { useCommentDelete } from "@hooks/useCommentDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { toast } from "react-hot-toast";
type CommentEditDeleteProps = {
  commentId: string;
};

export const CommentEditDelete = ({ commentId }: CommentEditDeleteProps) => {
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
  return (
    <div className="flex gap-8">
      <EditBtn />
      <DeleteBtn onClick={onDelete} disabled={isPending} />
    </div>
  );
};

export default CommentEditDelete;
