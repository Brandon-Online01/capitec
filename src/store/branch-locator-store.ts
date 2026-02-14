import { create } from "zustand";

interface Coords {
  lat: number;
  lng: number;
}

interface BranchLocatorState {
  searchQuery: string;
  selectedBranchId: number | null;
  sidebarOpen: boolean;
  userLocation: Coords | null;
  savedBranchIds: number[];
  setSearchQuery: (query: string) => void;
  setSelectedBranch: (id: number | null) => void;
  toggleSidebar: () => void;
  setUserLocation: (coords: Coords | null) => void;
  addSavedBranch: (id: number) => void;
  removeSavedBranch: (id: number) => void;
  toggleSavedBranch: (id: number) => void;
}

export const useBranchLocatorStore = create<BranchLocatorState>((set) => ({
  searchQuery: "",
  selectedBranchId: null,
  sidebarOpen: true,
  userLocation: null,
  savedBranchIds: [],
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedBranch: (id) => set({ selectedBranchId: id }),
  toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  setUserLocation: (coords) => set({ userLocation: coords }),
  addSavedBranch: (id) =>
    set((s) =>
      s.savedBranchIds.includes(id) ? s : { savedBranchIds: [...s.savedBranchIds, id] }
    ),
  removeSavedBranch: (id) =>
    set((s) => ({ savedBranchIds: s.savedBranchIds.filter((x) => x !== id) })),
  toggleSavedBranch: (id) =>
    set((s) =>
      s.savedBranchIds.includes(id)
        ? { savedBranchIds: s.savedBranchIds.filter((x) => x !== id) }
        : { savedBranchIds: [...s.savedBranchIds, id] }
    ),
}));
