type questionProps = {
  category: string;
  explain: string;
  placeholder: string;
};

export const Question = ({ category, explain, placeholder }: questionProps) => {
  return (
    <div className="w-full rounded-lg border-2 border-solid border-gray py-7 pl-3 pr-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-24 font-semibold">{category}</h2>
        <p className="text-20 font-medium text-primary">{explain}</p>
        <input className="text-gray" type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Question;
