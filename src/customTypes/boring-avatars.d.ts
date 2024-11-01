declare module "boring-avatars" {
  import { FC } from "react";

  interface AvatarProps {
    size?: number | string;
    name: string;
    variant: "marble" | "beam" | "pixel" | "sunset" | "ring" | "bauhaus";
    colors?: string[];
    square?: boolean;
    title?: boolean;
  }

  const Avatar: FC<AvatarProps>;

  export default Avatar;
}
