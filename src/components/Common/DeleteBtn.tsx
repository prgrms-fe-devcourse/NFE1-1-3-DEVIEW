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
    <RiDeleteBinLine className="h-4 w-4 md:h-5 md:w-5" />
  </button>
);
