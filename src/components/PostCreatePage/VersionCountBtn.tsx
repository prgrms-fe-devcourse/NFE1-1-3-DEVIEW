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
      className={`flex size-4 items-center justify-center rounded-full p-4 text-16 text-white-sub transition-all md:size-5 md:p-5 md:text-24 ${
        disabled ? "cursor-not-allowed bg-gray opacity-50" : "cursor-pointer bg-primary hover:opacity-80"
      }`}
    >
      {addOrMinus}
    </button>
  );
};
