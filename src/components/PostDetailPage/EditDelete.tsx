import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
// import { usePostDetailStore } from "@stores/postDetailStore";

//!수정 삭제 기능 구현 필요
export const EditDelete = () => {
  
  
  return (
    <div className="flex gap-8">
      <button type="button">
        <MdOutlineModeEdit />
      </button>
      <button type="button">
        <RiDeleteBinLine />
      </button>
    </div>
  );
};
