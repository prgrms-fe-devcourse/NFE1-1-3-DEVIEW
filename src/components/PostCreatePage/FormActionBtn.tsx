type FormActionBtnProps = {
  content: string;
  type: "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

export const FormActionBtn = ({ content, type, onClick, color }: FormActionBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[3.125rem] min-w-[12.5rem] rounded-lg bg-${color || "gray"} px-3 py-4 text-20 font-medium text-white-pure hover:opacity-80`}
    >
      {content}
    </button>
  );
};

export default FormActionBtn;
