import { TabMenu } from "@components/MyPage/TabMenu";
import { UserProfile } from "@components/MyPage/UserProfile";

export default function MyPage() {
  // TODO: 백엔드에서 데이터 받아오기
  const userNickname = "Sample Nickname";

  return (
    <div className="mx-4 flex max-w flex-col gap-6 py-12 md:gap-12 xl:mx-auto">
      <UserProfile nickname={userNickname} />
      <TabMenu />
    </div>
  );
}
