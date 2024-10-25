type InfoContentProps = {
  data: { name?: string; id?: string; password?: string; department?: string };
};

export const InfoContent = ({ data }: InfoContentProps) => {
  return (
    <div>
      <p>name: {data.name ?? ""}</p>
      <p>id: {data.id ?? ""}</p>
      <p>password: {data.password ?? ""}</p>
      <p>department: {data.department ?? ""}</p>
    </div>
  );
};
