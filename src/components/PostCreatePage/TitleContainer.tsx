type TitleContainerProps = {
  category: string;
  explain: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
};

export const TitleContainer = ({ category, explain, placeholder, value, onChange, maxLength }: TitleContainerProps) => {
  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-20 font-semibold">{category}</h2>
        <p className="text-16 font-medium text-primary">{explain}</p>
        <div className="relative">
          <input
            name="title"
            value={value}
            onChange={onChange}
            className="h-16 w-full text-14 text-gray"
            type="text"
            placeholder={placeholder}
            maxLength={maxLength}
          />
          <span className="text-sm absolute bottom-2 right-2 text-12 text-gray">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
