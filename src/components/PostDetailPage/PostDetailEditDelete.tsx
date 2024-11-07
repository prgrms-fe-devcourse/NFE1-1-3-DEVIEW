import { DeleteBtn } from "@components/Common/DeleteBtn";
import { EditBtn } from "@components/Common/EditBtn";
import { usePostDelete } from "@hooks/usePostDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { deleteConfirm, errorAlert, successAlert } from "@utils/sweetAlert/alerts";
import { useNavigate } from "react-router-dom";

export const PostDetailEditDelete = () => {
  const navigate = useNavigate();
  const postId = usePostDetailStore((state) => state.post?._id);
  const { mutate: deletePostMutate, isPending } = usePostDelete({
    onSuccess: () => {
      successAlert({ title: "삭제 성공", text: "게시글이 삭제되었습니다." });
    },
    onError: (error) => {
      errorAlert({ title: "삭제 실패", text: error.message });
    },
    redirectTo: "/"
  });

  const onClickDelete = async () => {
    if (!postId) return;
    const del = await deleteConfirm();
    if (del.isConfirmed) {
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
