type VersionCountBtnProps = {
  addOrMinus: "+" | "-";
  onClick: () => void;
};

export const VersionCountBtn = ({ addOrMinus, onClick }: VersionCountBtnProps) => {
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      type="button"
      onClick={onBtnClick}
      className="size-[3.125rem] rounded-full bg-primary p-[0.60rem] text-28 text-white-sub hover:opacity-80"
    >
      {addOrMinus}
    </button>
  );
};

export default VersionCountBtn;
