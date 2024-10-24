type VersionAddBtnProps = {
  version: string;
};

export const VersionAddBtn = ({ version }: VersionAddBtnProps) => {
  return <button className="">{version}</button>;
};
export default VersionAddBtn;
