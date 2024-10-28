type RadioProps = {
  text: string;
  name: string;
  id: string;
  value: string;
  defaultChecked?: boolean;
};

export const Radio = ({ text, name, id, value, defaultChecked = false }: RadioProps) => {
  return (
    <label
      className="mb-5 inline-block w-fit flex-1 cursor-pointer rounded-lg p-5 text-center text-14 ring-1 ring-lightgray transition-shadow checked:bg-primary hover:ring-primary has-[:checked]:ring-secondary md:p-6 md:text-20"
      htmlFor={id}
    >
      {text}
      <input autoComplete="off" id={id} type="radio" name={name} value={value} hidden defaultChecked={defaultChecked} />
    </label>
  );
};
