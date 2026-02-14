import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useFilteredBranches } from "./use-filtered-branches";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import { fixtureBranch, fixtureBranch2, fixtureBranches } from "@/test/fixtures/branches";

describe("useFilteredBranches", () => {
  beforeEach(() => {
    useBranchLocatorStore.setState({
      searchQuery: "",
      userLocation: null,
    });
  });

  it("returns empty array when branches is undefined", () => {
    const { result } = renderHook(() => useFilteredBranches(undefined));
    expect(result.current).toEqual([]);
  });

  it("returns all branches when searchQuery is empty", () => {
    const { result } = renderHook(() => useFilteredBranches(fixtureBranches));
    expect(result.current).toHaveLength(fixtureBranches.length);
  });

  it("filters by branch name (case-insensitive)", () => {
    const { result } = renderHook(() => useFilteredBranches(fixtureBranches));
    act(() => {
      useBranchLocatorStore.getState().setSearchQuery("test branch");
    });
    expect(result.current).toHaveLength(1);
    expect(result.current[0].name).toBe("Test Branch");
  });

  it("filters by address (case-insensitive)", () => {
    const { result } = renderHook(() => useFilteredBranches(fixtureBranches));
    act(() => {
      useBranchLocatorStore.getState().setSearchQuery("other ave");
    });
    expect(result.current).toHaveLength(1);
    expect(result.current[0].address).toBe("456 Other Ave");
  });

  it("returns empty when no match", () => {
    const { result } = renderHook(() => useFilteredBranches(fixtureBranches));
    act(() => {
      useBranchLocatorStore.getState().setSearchQuery("nonexistent");
    });
    expect(result.current).toEqual([]);
  });

  it("sorts by distance when userLocation is set (nearest first)", () => {
    const branches = [fixtureBranch2, fixtureBranch]; // ATM first, then branch
    const { result } = renderHook(() => useFilteredBranches(branches));
    act(() => {
      useBranchLocatorStore.getState().setUserLocation({
        lat: fixtureBranch.lat,
        lng: fixtureBranch.lng,
      });
    });
    expect(result.current[0].id).toBe(fixtureBranch.id);
    expect(result.current[1].id).toBe(fixtureBranch2.id);
  });
});
