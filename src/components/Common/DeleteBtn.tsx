import { RiDeleteBinLine } from "react-icons/ri";

type DeleteButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const DeleteBtn = ({ onClick, disabled }: DeleteButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="text-red-500 hover:text-red-600 disabled:opacity-50"
  >
    <RiDeleteBinLine className="h-5 w-5" />
  </button>
);

export default DeleteBtn;