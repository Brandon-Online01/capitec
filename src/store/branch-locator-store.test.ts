import { describe, it, expect, beforeEach } from "vitest";
import { useBranchLocatorStore } from "./branch-locator-store";

describe("branch-locator-store", () => {
  beforeEach(() => {
    useBranchLocatorStore.setState({
      searchQuery: "",
      selectedBranchId: null,
      sidebarOpen: true,
      userLocation: null,
      savedBranchIds: [],
    });
  });

  it("has correct initial state", () => {
    const state = useBranchLocatorStore.getState();
    expect(state.searchQuery).toBe("");
    expect(state.selectedBranchId).toBe(null);
    expect(state.sidebarOpen).toBe(true);
    expect(state.userLocation).toBe(null);
    expect(state.savedBranchIds).toEqual([]);
  });

  it("setSearchQuery updates searchQuery", () => {
    useBranchLocatorStore.getState().setSearchQuery("capetown");
    expect(useBranchLocatorStore.getState().searchQuery).toBe("capetown");
  });

  it("setSelectedBranch updates selectedBranchId", () => {
    useBranchLocatorStore.getState().setSelectedBranch(5);
    expect(useBranchLocatorStore.getState().selectedBranchId).toBe(5);
    useBranchLocatorStore.getState().setSelectedBranch(null);
    expect(useBranchLocatorStore.getState().selectedBranchId).toBe(null);
  });

  it("toggleSidebar flips sidebarOpen", () => {
    expect(useBranchLocatorStore.getState().sidebarOpen).toBe(true);
    useBranchLocatorStore.getState().toggleSidebar();
    expect(useBranchLocatorStore.getState().sidebarOpen).toBe(false);
    useBranchLocatorStore.getState().toggleSidebar();
    expect(useBranchLocatorStore.getState().sidebarOpen).toBe(true);
  });

  it("setUserLocation updates userLocation", () => {
    const coords = { lat: -33.92, lng: 18.42 };
    useBranchLocatorStore.getState().setUserLocation(coords);
    expect(useBranchLocatorStore.getState().userLocation).toEqual(coords);
    useBranchLocatorStore.getState().setUserLocation(null);
    expect(useBranchLocatorStore.getState().userLocation).toBe(null);
  });

  it("addSavedBranch adds id and is idempotent", () => {
    useBranchLocatorStore.getState().addSavedBranch(1);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([1]);
    useBranchLocatorStore.getState().addSavedBranch(1);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([1]);
    useBranchLocatorStore.getState().addSavedBranch(2);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([1, 2]);
  });

  it("removeSavedBranch removes id", () => {
    useBranchLocatorStore.getState().addSavedBranch(1);
    useBranchLocatorStore.getState().addSavedBranch(2);
    useBranchLocatorStore.getState().removeSavedBranch(1);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([2]);
  });

  it("toggleSavedBranch adds when not saved and removes when saved", () => {
    useBranchLocatorStore.getState().toggleSavedBranch(1);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([1]);
    useBranchLocatorStore.getState().toggleSavedBranch(1);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([]);
    useBranchLocatorStore.getState().toggleSavedBranch(2);
    expect(useBranchLocatorStore.getState().savedBranchIds).toEqual([2]);
  });
});
