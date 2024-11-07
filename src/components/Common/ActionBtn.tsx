type ActionBtnProps = {
  content: string;
  type?: "submit" | "reset";
  color?: "primary" | "gray";
  onClick?: () => void;
  disAbled?: boolean;
};

export const ActionBtn = ({ content, type, onClick, color = "gray", disAbled }: ActionBtnProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-32 rounded-lg px-3 py-4 text-14 font-medium text-white-pure hover:opacity-80 md:w-40 md:text-16 ${
        color === "primary" ? "bg-primary" : "bg-gray"
      }`}
      disabled={disAbled}
    >
      {content}
    </button>
  );
};
