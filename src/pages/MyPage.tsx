import { TabMenu } from "@components/MyPage/TabMenu";
import { UserProfile } from "@components/MyPage/UserProfile";
import { UserInfo } from "@customTypes/userInfo";
import { useEffect, useState } from "react";

export default function MyPage() {
  // TODO: api 연결하기 (유저 정보, 내 게시글, 내 댓글, 스크랩)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    setUserInfo({
      id: "test1212",
      username: "홍길동",
      group: "개발자"
    });
  }, []);

  return (
    <div className="mx-4 flex max-w flex-col gap-6 py-12 md:gap-12 xl:mx-auto">
      {userInfo && <UserProfile userInfo={userInfo} />}
      <TabMenu />
    </div>
  );
}
