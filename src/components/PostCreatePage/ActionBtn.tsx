type ActionBtnProps = {
  content: string;
  type: "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

export const ActionBtn = ({ content, type, onClick, color }: ActionBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`min-ww-[13vw] h-[3.125rem] max-w-[12.5rem] rounded-lg bg-${color || "gray"} px-3 py-4 text-20 font-medium text-white-pure hover:opacity-80`}
    >
      {content}
    </button>
  );
};

export default ActionBtn;
