import { router } from "@/router";
import { getUserInfo } from "@services/auth/getUserInfo";
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
        console.log(data);
      });
    }
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
