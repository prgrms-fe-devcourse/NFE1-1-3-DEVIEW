import { router } from "@/router";
import { getUserInfo } from "@services/auth/getUserInfo";
import { getUserPosts } from "@services/post/getUserPosts";
import { useUserStore } from "@stores/userStore";
import { AccessTokenStorage } from "@utils/localStorage";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  const { setUserInfo } = useUserStore();

  useEffect(() => {
    // 자동 로그인
    if (AccessTokenStorage.hasToken()) {
      getUserInfo().then((data) => {
        setUserInfo(data);
      });
      getUserPosts({ page: 1, limit: 10 }).then((data) => console.log(data));
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
