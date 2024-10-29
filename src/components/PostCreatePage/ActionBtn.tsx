type ActionBtnProps = {
  content: string;
  type: "submit" | "reset";
  color?: "primary" | "gray"; // color 타입을 명확히 지정
  onClick?: () => void;
};

export const ActionBtn = ({ content, type, onClick, color = "gray" }: ActionBtnProps) => {
  // 방법 1: 조건부 클래스명
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-[3.125rem] w-40 md:w-[12.5rem] rounded-lg px-3 py-4 text-20 font-medium text-white-pure hover:opacity-80 ${
        color === "primary" ? "bg-primary" : "bg-gray"
      }`}
    >
      {content}
    </button>
  );
};

export default ActionBtn;
