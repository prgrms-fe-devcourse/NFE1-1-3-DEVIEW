import useSocketStore from "@stores/socketStore";
import { useEffect } from "react";
import { io } from "socket.io-client";

const interval = 3000;

export const useSocketInitialization = () => {
  const { setSocket, disconnectSocket } = useSocketStore();
  const initializeSocket = () => {
    const newSocket = io(import.meta.env.VITE_SERVER_URL, { withCredentials: true });
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Socket connected");
      const intervalId = setInterval(() => {
        newSocket.emit("message", "클라이언트 -> 서버");
      }, interval);

      return () => {
        clearInterval(intervalId);
        disconnectSocket();
      };
    });

    newSocket.on("message", (data) => console.log(data));
  };

  useEffect(() => {
    return () => {
      disconnectSocket();
    };
  }, [disconnectSocket]);

  return { initializeSocket };
};
