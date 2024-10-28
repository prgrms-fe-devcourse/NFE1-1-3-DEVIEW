import { UserInfo } from "@customTypes/userInfo";
import { create } from "zustand";

type UserStore = {
  userInfo: UserInfo | null;
  isLoggedIn: boolean;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  isLoggedIn: false,
  setUserInfo: (userInfo: UserInfo) => set({ userInfo, isLoggedIn: true }),
  clearUserInfo: () => set({ userInfo: null, isLoggedIn: false })
}));
