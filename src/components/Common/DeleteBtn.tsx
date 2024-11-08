import { RiDeleteBinLine } from "react-icons/ri";

type DeleteButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const DeleteBtn = ({ onClick, disabled }: DeleteButtonProps) => (
  <button type="button" onClick={onClick} disabled={disabled} className="disabled:opacity-50">
    <RiDeleteBinLine className="h-4 w-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:fill-pink md:h-5 md:w-5" />
  </button>
);
