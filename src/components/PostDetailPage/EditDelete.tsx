import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import { usePostDelete } from "@hooks/usePostDelete";
import { usePostDetailStore } from "@stores/postDetailStore";
import { toast } from "react-hot-toast";
//! 수정 기능 추가 예정
export const EditDelete = () => {
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

  return (
    <div className="flex gap-8">
      <button type="button">
        <MdOutlineModeEdit className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={onClickDelete}
        disabled={isPending}
        className="text-red-500 hover:text-red-600 disabled:opacity-50"
      >
        <RiDeleteBinLine className="h-5 w-5" />
      </button>
    </div>
  );
};
