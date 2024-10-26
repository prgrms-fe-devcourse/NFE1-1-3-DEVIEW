import { useState } from "react";

type InputProps = {
  name: string;
  text?: string;
  errorMessage?: string;
  pattern?: RegExp;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "pattern">;

export const Input = ({ name, text, errorMessage, pattern, ...rest }: InputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (newValue.length === 0) {
      setError("");
      return;
    }

    if (pattern) {
      const regex = new RegExp(pattern);
      const isValid = regex.test(newValue);
      setError(isValid ? "" : errorMessage || "");
    }
  };

  if (errorMessage && !pattern) throw new Error("에러 메시지는 있는데 에러를 판단할 패턴이 없습니다.");
  return (
    <div className="relative mb-6">
      {text && <p className="mb-3 text-secondary">{text}</p>}
      <input autoComplete="off" name={name} value={value} onChange={onChange} {...rest} />
      {error && <p className="absolute mt-1 text-red">{error}</p>}
    </div>
  );
};
