type VersionCountBtnProps = {
  addOrMinus: "+" | "-";
  onClick: () => void;
  disabled?: boolean;
};

export const VersionCountBtn = ({ addOrMinus, onClick, disabled = false }: VersionCountBtnProps) => {
  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      type="button"
      onClick={onBtnClick}
      disabled={disabled}
      className={`size-[3.125rem] rounded-full p-[0.60rem] text-28 text-white-sub transition-all ${
        disabled ? "cursor-not-allowed bg-gray opacity-50" : "cursor-pointer bg-primary hover:opacity-80"
      }`}
    >
      {addOrMinus}
    </button>
  );
};

export default VersionCountBtn;
