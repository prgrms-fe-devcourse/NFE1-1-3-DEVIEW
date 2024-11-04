import { useEffect } from "react";
import { router } from "@/router";
import { useUserStore } from "@stores/userStore";
import { AccessTokenStorage } from "@utils/localStorage";
import { RouterProvider } from "react-router-dom";
import { autoLogin } from "@services/auth/autoLogin";
import useSocketStore from "@stores/socketStore";

export const App = () => {
  const { setUserInfo, userInfo } = useUserStore();
  const { socket, initializeSocket, disconnectSocket } = useSocketStore();
  console.log(userInfo?.role);

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
          // 로그인한 사용자가 admin인 경우 adminConnected 이벤트 보내기
          if (data.userInfo.role === "admin") {
            console.log("관리자 로그인 메시지 보내기");
            socket?.emit("adminConnect", { message: "Admin user connected successfully" });
          }
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
      <RouterProvider router={router} />
    </>
  );
};
