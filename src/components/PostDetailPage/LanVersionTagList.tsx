import { DevDependenciesList } from "@customTypes/post";
type LanVersionTagListProps = {
  dependencyList: DevDependenciesList;
};

export const LanVersionTagList = ({ dependencyList }: LanVersionTagListProps) => {
  return (
    <div className="flex gap-2">
      {dependencyList.map((item, idx) => (
        <span
          key={idx}
          className="rounded-[0.25rem] border border-solid border-gray px-2 py-[0.125rem] text-12 text-gray"
        >
          {item.dependency}@{item.version}
        </span>
      ))}
    </div>
  );
};
