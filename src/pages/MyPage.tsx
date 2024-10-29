import { TabMenu } from "@components/MyPage/TabMenu";
import { UserProfile } from "@components/MyPage/UserProfile";
import { UserInfo } from "@customTypes/userInfo";
import { getUserInfo } from "@services/auth/getUserInfo";
import { useEffect, useState } from "react";

export default function MyPage() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("유저 정보 가져오기 실패");
        }
      }
    };

    fetchUserInfo();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="mx-4 flex max-w flex-col gap-6 py-12 md:gap-12 xl:mx-auto">
      {userInfo && <UserProfile userInfo={userInfo} />}
      <TabMenu />
    </div>
  );
}
