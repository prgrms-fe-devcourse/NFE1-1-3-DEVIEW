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
    <section className="w-full rounded-lg border border-solid border-gray px-4 py-6 shadow">
      <div className="flex flex-col gap-3">
        <h2 className="text-16 font-semibold md:text-20">{category}</h2>
        <p className="text-14 text-primary md:text-16">{explain}</p>
        <div className="relative">
          <input
            name="title"
            value={value}
            onChange={onChange}
            className="w-full text-14 text-gray"
            type="text"
            placeholder={placeholder}
            maxLength={maxLength}
          />
          <span className="text-sm absolute bottom-2 right-2 text-12 text-gray">
            {value.length}/{maxLength}
          </span>
        </div>
      </div>
    </section>
  );
};
