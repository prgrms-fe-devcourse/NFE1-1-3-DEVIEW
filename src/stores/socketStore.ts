// useSocketStore.ts
import { create } from "zustand";
import { Socket, io } from "socket.io-client";

interface SocketState {
  socket: Socket | null;
  initializeSocket: () => void;
  disconnectSocket: () => void;
}

export const useSocketStore = create<SocketState>((set) => ({
  socket: null,
  initializeSocket: () => {
    const newSocket = io(import.meta.env.VITE_SERVER_URL, { withCredentials: true });
    set({ socket: newSocket });
  },
  disconnectSocket: () =>
    set((state) => {
      if (state.socket) {
        state.socket.disconnect();
      }
      return { socket: null };
    })
}));
