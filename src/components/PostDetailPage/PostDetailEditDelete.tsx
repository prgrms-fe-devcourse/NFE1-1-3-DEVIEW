import DeleteBtn from "@components/Common/DeleteBtn";
import EditBtn from "@components/Common/EditBtn";
import { usePostDelete } from "@hooks/usePostDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//! 수정 기능 추가 예정
export const PostDetailEditDelete = () => {
  const navigate = useNavigate();
  const postId = usePostDetailStore((state) => state.post?._id);
  const { mutate: deletePostMutate, isPending } = usePostDelete({
    onSuccess: () => {
      toast.success("게시물이 삭제되었습니다.");
    },
    onError: (error) => {
      toast.error(error.message || "삭제에 실패했습니다.");
    },
    redirectTo: "/"
  });

  const onClickDelete = () => {
    if (!postId) return;

    if (window.confirm("정말 삭제하시겠습니까?")) {
      deletePostMutate({ postId });
    }
  };

  const onClickEdit = () => {
    navigate(`/post/update/${postId}`);
  };
  return (
    <div className="flex gap-8">
      <EditBtn onClick={onClickEdit} disabled={isPending} />
      <DeleteBtn onClick={onClickDelete} disabled={isPending} />
    </div>
  );
};

export default PostDetailEditDelete;
