import { create } from "zustand";
import { Socket } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
  setSocket: (newSocket: Socket) => void;
  disconnectSocket: () => void;
}

const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  setSocket: (newSocket: Socket) => set({ socket: newSocket }),
  disconnectSocket: () =>
    set((state) => {
      if (state.socket) {
        state.socket.disconnect();
        console.log("소켓 연결이 해제되었습니다");
      }
      return { socket: null };
    })
}));

export default useSocketStore;
