import { MdOutlineModeEdit } from "react-icons/md";

type DeleteButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
};

export const EditBtn = ({ onClick, disabled }: DeleteButtonProps) => (
  <button type="button" onClick={onClick} disabled={disabled} className="disabled:opacity-50">
    <MdOutlineModeEdit className="h-4 w-4 transition-transform duration-200 ease-in-out hover:scale-110 hover:fill-secondary md:h-5 md:w-5" />
  </button>
);
