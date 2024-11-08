import { Loading } from "@components/Common/Loading";
import { TabMenu } from "@components/MyPage/TabMenu";
import { UserProfile } from "@components/MyPage/UserProfile";
import { UserInfo } from "@customTypes/userInfo";
import ErrorPage from "@pages/ErrorPage";
import { getUserInfo } from "@services/auth/getUserInfo";
import { useQuery } from "@tanstack/react-query";
import { errorAlert } from "@utils/sweetAlert/alerts";

export default function MyPage() {
  const {
    data: userInfo,
    isLoading,
    error
  } = useQuery<UserInfo, Error>({
    queryKey: ["userInfo"],
    queryFn: getUserInfo
  });

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-20rem)] items-center justify-center">
        <Loading />
      </div>
    );
  }

  if (error) {
    errorAlert({ title: "유저 정보를 불러오는 중 오류가 발생했습니다.", text: error.message });
    return <ErrorPage />;
  }

  return (
    <div className="flex min-h-[calc(100vh-112px)] max-w flex-col gap-6 p-4 py-12 md:gap-12 2xl:mx-auto">
      {userInfo && <UserProfile userInfo={userInfo} />}
      <TabMenu />
    </div>
  );
}
