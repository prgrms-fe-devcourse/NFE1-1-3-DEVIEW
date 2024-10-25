type TitleContainerProps = {
  category: string;
  explain: string;
  placeholder: string;
  value: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TitleContainer = ({ category, explain, placeholder, value }: TitleContainerProps) => {
  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">{category}</h2>
        <p className="text-20 font-medium text-primary">{explain}</p>
        <input
          name="title"
          onChange={value}
          className="text-gray h-16"
          type="text"
          placeholder={placeholder}
          maxLength={50}
        />
      </div>
    </div>
  );
};

export default TitleContainer;
