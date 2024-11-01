import { create } from "zustand";

type FilterState = {
  selectedFilters: string[];
  addFilter: (filter: string) => void;
  deleteFilter: (filter: string) => void;
  clearFilters: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  selectedFilters: [],
  addFilter: (filter) => set((state) => ({ selectedFilters: [...state.selectedFilters, filter] })),
  deleteFilter: (filter) =>
    set((state) => ({ selectedFilters: state.selectedFilters.filter((item) => item !== filter) })),
  clearFilters: () => set({ selectedFilters: [] })
}));
