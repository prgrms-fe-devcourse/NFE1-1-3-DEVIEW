import { UserInfo } from "@customTypes/userInfo";

type UserProfileProps = {
  userInfo: UserInfo;
};

export const UserProfile = ({ userInfo }: UserProfileProps) => {
  // TODO: 유저 프로필 사진 처리하기
  return (
    <div className="flex items-center gap-4">
      <div className="h-20 w-20 overflow-hidden rounded-full md:h-28 md:w-28">
        <img
          className="h-auto w-full"
          src="https://media.istockphoto.com/id/1012645084/ko/%EB%B2%A1%ED%84%B0/%EC%99%84%EB%B2%BD-%ED%95%9C-%EB%9E%9C%EB%8D%A4-%ED%8C%A8%ED%84%B4-%EB%B2%A1%ED%84%B0.jpg?s=170667a&w=0&k=20&c=_fZKK0-ZyFFLungr9E06AOz8r_M4h8aHYLtU2cEJ-yA="
          alt="프로필 이미지"
        />
      </div>
      <span className="text-16 text-secondary md:text-24">
        {userInfo.username}
        {userInfo.group && `(${userInfo.group})`}
      </span>
    </div>
  );
};
