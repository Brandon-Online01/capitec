"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "@/lib/api/client";

const BRANCHES_QUERY_KEY = ["branches"] as const;

export function useBranchesQuery() {
  return useQuery({
    queryKey: BRANCHES_QUERY_KEY,
    queryFn: fetchBranches,
  });
}
