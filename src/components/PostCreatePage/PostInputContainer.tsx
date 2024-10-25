import { useState } from "react";
type questionProps = {
  category: string;
  explain: string;
  placeholder: string;
};

export const PostInputContainer = ({ category, explain, placeholder }: questionProps) => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">{category}</h2>
        <p className="text-20 font-medium text-primary">{explain}</p>
        <input
          value={value}
          onChange={onChange}
          className="text-gray"
          type="text"
          placeholder={placeholder}
          defaultChecked
        />
      </div>
    </div>
  );
};

export default PostInputContainer;
