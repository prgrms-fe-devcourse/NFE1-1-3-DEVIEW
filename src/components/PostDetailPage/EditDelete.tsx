import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
type EditDeleteProps = {
  isAuthor?: boolean;
};

export const EditDelete = ({ isAuthor }: EditDeleteProps) => {
  if (!isAuthor) return null;
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
