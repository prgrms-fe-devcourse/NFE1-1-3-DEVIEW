// src/store/usePostDetailStore.ts
import { create } from "zustand";
import { TPostDetail } from "@customTypes/post";

type PostDetailState = {
  // 상태
  post: TPostDetail | null;
  isLoading: boolean;
  error: Error | null;

  // 액션
  setPost: (post: TPostDetail | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
  reset: () => void;
};

export const usePostDetailStore = create<PostDetailState>((set) => ({
  // 초기 상태
  post: null,
  isLoading: false,
  error: null,

  // 액션
  setPost: (post) => set({ post }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => set({ post: null, isLoading: false, error: null })
}));
