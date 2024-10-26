import { UserInfo } from "@customTypes/userInfo";
import { create } from "zustand";

type UserStore = {
  userInfo: UserInfo | null;
  setUserInfo: (userInfo: UserInfo) => void;
  clearUserInfo: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  setUserInfo: (userInfo: UserInfo) => set({ userInfo }),
  clearUserInfo: () => set({ userInfo: null })
}));
