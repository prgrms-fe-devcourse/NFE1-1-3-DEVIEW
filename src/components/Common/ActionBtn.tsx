type ActionBtnProps = {
  content: string;
  type: "submit" | "reset";
  color?: "primary" | "gray";
  onClick?: () => void;
};

export const ActionBtn = ({ content, type, onClick, color = "gray" }: ActionBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[3.125rem] w-40 rounded-lg px-3 py-4 text-20 font-medium text-white-pure hover:opacity-80 md:w-[12.5rem] ${
        color === "primary" ? "bg-primary" : "bg-gray"
      }`}
    >
      {content}
    </button>
  );
};

export default ActionBtn;
