type PostDetailActBtnProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  color: "primary" | "gray";
  isPending?: boolean;
  text: string;
  disabled?: boolean;
};

export const PostDetailActBtn = ({ onClick, type, color, isPending, text, disabled }: PostDetailActBtnProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`primary-btn rounded-[8px] px-4 py-3 text-14 md:w-24 md:text-16 ${color === "primary" ? "bg-primary hover:bg-primary/80" : "bg-gray hover:bg-gray/80"} disabled:opacity-50`}
      disabled={isPending || disabled}
    >
      {isPending ? `${text} 중...` : text}
    </button>
  );
};
