import { create } from "zustand";

type SortStore = {
  sort: "latest" | "views";
  setSort: (sort: "latest" | "views") => void;
};

export const useSortStore = create<SortStore>((set) => ({
  sort: "latest",
  setSort: (sort: "latest" | "views") => set({ sort })
}));
