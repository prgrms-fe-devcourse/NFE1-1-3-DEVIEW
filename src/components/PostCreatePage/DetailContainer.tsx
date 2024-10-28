import { useRef, useEffect } from "react";

type DetailContainerProps = {
  category: string;
  explain: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const DetailContainer = ({ category, explain, placeholder, value, onChange }: DetailContainerProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 텍스트 영역 크기 조절을 위한 함수
  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // 초기 높이 조절 및 value 변경 시 높이 조절
  useEffect(() => {
    adjustHeight();
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e);
    adjustHeight();
  };

  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">{category}</h2>
        <p className="text-20 font-medium text-primary">{explain}</p>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          className="min-h-[88px] w-full resize-none overflow-hidden text-gray"
          placeholder={placeholder}
          maxLength={1000}
        />
      </div>
    </div>
  );
};

export default DetailContainer;
