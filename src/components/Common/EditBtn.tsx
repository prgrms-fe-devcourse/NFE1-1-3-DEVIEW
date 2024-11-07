import { MdOutlineModeEdit } from "react-icons/md";

type DeleteButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const EditBtn = ({ onClick, disabled }: DeleteButtonProps) => (
  <button type="button" onClick={onClick} disabled={disabled} className="text-red-500 disabled:opacity-50">
    <MdOutlineModeEdit className="hover:fill-red-600 h-4 w-4 md:h-5 md:w-5" />
  </button>
);
