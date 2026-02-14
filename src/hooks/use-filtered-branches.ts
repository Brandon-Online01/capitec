"use client";

import { useMemo } from "react";
import type { Branch } from "@/lib/schemas/branch";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import { haversineKm } from "@/lib/utils/geo";

/** Filter branches by search query (name or address), case-insensitive. When userLocation is set, sort by distance (nearest first). */
export function useFilteredBranches(branches: Branch[] | undefined): Branch[] {
  const searchQuery = useBranchLocatorStore((s) => s.searchQuery);
  const userLocation = useBranchLocatorStore((s) => s.userLocation);
  return useMemo(() => {
    if (!branches) return [];
    const q = searchQuery.trim().toLowerCase();
    let list = q
      ? branches.filter(
          (b) =>
            b.name.toLowerCase().includes(q) || b.address.toLowerCase().includes(q)
        )
      : [...branches];
    if (userLocation) {
      list = list
        .slice()
        .sort(
          (a, b) =>
            haversineKm(userLocation.lat, userLocation.lng, a.lat, a.lng) -
            haversineKm(userLocation.lat, userLocation.lng, b.lat, b.lng)
        );
    }
    return list;
  }, [branches, searchQuery, userLocation]);
}
