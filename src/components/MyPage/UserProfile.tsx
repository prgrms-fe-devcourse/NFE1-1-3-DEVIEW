import { UserInfo } from "@customTypes/userInfo";
import Avatar from "boring-avatars";

type UserProfileProps = {
  userInfo: UserInfo;
};

export const UserProfile = ({ userInfo }: UserProfileProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-16 w-16 overflow-hidden rounded-full md:h-24 md:w-24">
        <Avatar name={userInfo.userId ?? ""} variant="beam" />
      </div>
      <span className="text-16 text-secondary md:text-20">
        {userInfo.username}
        {userInfo.group && `(${userInfo.group})`}
      </span>
    </div>
  );
};
