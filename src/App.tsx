import { useEffect } from "react";
import { router } from "@/router";
import { getUserInfo } from "@services/auth/getUserInfo";
import { useUserStore } from "@stores/userStore";
import { AccessTokenStorage } from "@utils/localStorage";
import { RouterProvider } from "react-router-dom";
import { useSocketInitialization } from "@hooks/useSocketInitialization";

export const App = () => {
  const { setUserInfo } = useUserStore();
  const { initializeSocket } = useSocketInitialization();
  useEffect(() => {
    if (AccessTokenStorage.hasToken()) {
      getUserInfo().then((data) => {
        setUserInfo(data);
      });
    }
  }, [setUserInfo]);

  useEffect(() => {
    initializeSocket();
  }, []);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
