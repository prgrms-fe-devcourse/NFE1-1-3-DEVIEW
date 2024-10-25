import { UserProfile } from "@components/MyPage/UserProfile";

export default function MyPage() {
  // TODO: 백엔드에서 데이터 받아오기
  const userNickname = "Sample Nickname";

  return (
    <div className="mx-4 max-w md:mx-auto">
      <UserProfile nickname={userNickname} />
    </div>
  );
}
