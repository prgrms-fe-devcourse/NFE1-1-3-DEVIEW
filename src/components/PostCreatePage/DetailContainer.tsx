import { useRef, useEffect } from "react";

type DetailContainerProps = {
  category: string;
  explain: string;
  placeholder: string;
  value: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export const DetailContainer = ({
  category,
  explain,
  placeholder,
  value,
  onChange,
  maxLength
}: DetailContainerProps) => {
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
    <section className="relative w-full rounded-lg border border-solid border-gray px-4 py-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-16 font-semibold md:text-20">{category}</h2>
        <p className="text-14 text-primary md:text-16">{explain}</p>
        <textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          className="min-h-[88px] w-full resize-none overflow-hidden text-14 text-gray"
          placeholder={placeholder}
          maxLength={maxLength}
        />
        <span className="text-sm absolute bottom-9 right-8 text-12 text-gray">
          {value.length}/{maxLength}
        </span>
      </div>
    </section>
  );
};

export default DetailContainer;
