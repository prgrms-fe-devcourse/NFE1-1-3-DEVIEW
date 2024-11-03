import { DevDependency } from "@customTypes/post";

type LanVersionTagListProps = {
  devDependencies: DevDependency[];
  devVersions: string[];
};

type DependencyTag = {
  id: string;
  dependency: DevDependency;
  version: string;
};

export const LanVersionTagList = ({ devDependencies, devVersions }: LanVersionTagListProps) => {
  const dependencyTags: DependencyTag[] = devDependencies.map((dep, idx) => ({
    id: `${dep}-${devVersions[idx]}`,
    dependency: dep,
    version: devVersions[idx]
  }));

  return (
    <div className="flex gap-2">
      {dependencyTags.map((tag) => (
        <span
          key={tag.id}
          className="rounded-[0.25rem] border border-solid border-gray px-2 py-[0.125rem] text-12 text-gray"
        >
          {tag.dependency}@{tag.version}
        </span>
      ))}
    </div>
  );
};
