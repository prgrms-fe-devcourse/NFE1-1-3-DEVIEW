import { DevDependencies } from "@customTypes/post";

type PostListIconProps = {
  devDependencies: DevDependencies | string;
};
export const PostListIcon = ({ devDependencies }: PostListIconProps) => {
  return (
    <div className="h-14 w-14">
      <img src={`/assets/dev_icons/${devDependencies}.svg`} />
    </div>
  );
};
