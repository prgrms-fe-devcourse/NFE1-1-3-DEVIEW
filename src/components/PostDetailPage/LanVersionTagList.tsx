type LanVersionTagListProps = {
  devDependencies: string[];
  devVersions: string[];
};

export const LanVersionTagList = ({ devDependencies, devVersions }: LanVersionTagListProps) => {
  return (
    <div className="flex gap-2">
      {devDependencies.map((item, idx) => (
        <span
          key={idx}
          className="rounded-[0.25rem] border border-solid border-gray px-2 py-[0.125rem] text-12 text-gray"
        >
          {item}@{devVersions[idx]}
        </span>
      ))}
    </div>
  );
};
