import { router } from "@/router";
import { getUserInfo } from "@services/auth/getUserInfo";
import { useUserStore } from "@stores/userStore";
import { AccessTokenStorage } from "@utils/localStorage";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { io, Socket } from "socket.io-client";

const interval = 3000;

export const App = () => {
  const { setUserInfo } = useUserStore();
  const [socket, setSocket] = useState<Socket | null>(null);

  const onSocket = () => {
    const newSocket = io("http://localhost:5000", {
      withCredentials: true
    });

    setSocket(newSocket);

    // 소켓 연결 성공 시 이벤트
    newSocket.on("connect", () => {
      console.log("Socket connected");

      // interval 설정
      const intervalId = setInterval(() => {
        newSocket.emit("message", "클라이언트 -> 서버");
        console.log("emit 실행"); // 디버깅용
      }, interval);

      // 컴포넌트 언마운트 시 정리
      return () => {
        clearInterval(intervalId);
        newSocket.disconnect();
      };
    });

    newSocket.on("message", (data) => console.log(data));
  };

  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [socket]);

  useEffect(() => {
    // 자동 로그인
    if (AccessTokenStorage.hasToken()) {
      getUserInfo().then((data) => {
        setUserInfo(data);
      });
    }
  }, [setUserInfo]);

  return (
    <>
      <button onClick={onSocket}>socket 통신 시작</button>
      <RouterProvider router={router} />
    </>
  );
};
