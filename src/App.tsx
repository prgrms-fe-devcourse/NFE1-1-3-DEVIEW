import { useEffect } from "react";
import { router } from "@/router";
import { useUserStore } from "@stores/userStore";
import { AccessTokenStorage } from "@utils/localStorage";
import { RouterProvider } from "react-router-dom";
import { autoLogin } from "@services/auth/autoLogin";
import useSocketStore from "@stores/socketStore";

export const App = () => {
  const { setUserInfo } = useUserStore();
  const { socket, initializeSocket, disconnectSocket } = useSocketStore();

  useEffect(() => {
    initializeSocket();
    console.log("소켓이 연결되었습니다.");
    return () => {
      disconnectSocket();
      console.log("소켓 연결이 해제되었습니다.");
    };
  }, [initializeSocket, disconnectSocket]);

  useEffect(() => {
    const performAutoLogin = async () => {
      if (AccessTokenStorage.hasToken()) {
        try {
          const data = await autoLogin({ socketId: socket?.id || "" });
          AccessTokenStorage.setToken(data.accessToken);
          setUserInfo(data.userInfo);
          console.log("자동 로그인 성공");
        } catch (error) {
          console.error("자동 로그인 실패:", error);
        }
      }
    };

    if (socket) {
      socket.on("connect", () => {
        console.log("소켓 연결 완료");
        performAutoLogin();
      });
    }
  }, [socket, setUserInfo]);

  return (
    <>
      <button onClick={() => socket?.emit("message", "hello")}>hello</button>
      <RouterProvider router={router} />
    </>
  );
};
