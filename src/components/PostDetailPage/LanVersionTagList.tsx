import { TechVersion } from "@customTypes/postDetail";

type LanVersionTagListProps = {
  techLists: TechVersion[];
};

export const LanVersionTagList = ({ techLists }: LanVersionTagListProps) => {
  return (
    <div className="flex gap-2">
      {techLists.map((tech) => (
        <span
          key={tech.id}
          className="rounded-[0.25rem] border border-solid border-gray px-2 py-[0.125rem] text-12 text-gray"
        >
          {tech.lan}@{tech.version}
        </span>
      ))}
    </div>
  );
};
