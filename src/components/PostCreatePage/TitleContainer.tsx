type TitleContainerProps = {
  category: string;
  explain: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TitleContainer = ({ category, explain, placeholder, value, onChange }: TitleContainerProps) => {
  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">{category}</h2>
        <p className="text-20 font-medium text-primary">{explain}</p>
        <div className="relative">
          <input
            name="title"
            value={value}
            onChange={onChange}
            className="h-16 w-full text-gray"
            type="text"
            placeholder={placeholder}
            maxLength={50}
          />
          <span className="text-sm absolute bottom-2 right-2 text-gray">{value.length}/50</span>
        </div>
      </div>
    </div>
  );
};

export default TitleContainer;
