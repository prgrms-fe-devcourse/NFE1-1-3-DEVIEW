type VersionAddBtnProps = {
  addOrMinus: string;
};

export const VersionAddBtn = ({ addOrMinus }: VersionAddBtnProps) => {
  return <button className="">{addOrMinus}</button>;
};
export default VersionAddBtn;
