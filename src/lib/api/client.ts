import axios from "axios";
import {
  BranchesResponseSchema,
  type BranchesResponse,
} from "@/lib/schemas/branch";
import { MOCK_BRANCHES } from "@/data/branches";

const api = axios.create({
  baseURL: typeof window !== "undefined" ? "" : "http://localhost:3000",
  timeout: 5000,
});

/**
 * Simulates a branch list API call: 1s delay then returns mock data validated with Zod.
 * Used by TanStack Query as the branches queryFn.
 */
export async function fetchBranches(): Promise<BranchesResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = { branches: MOCK_BRANCHES };
  return BranchesResponseSchema.parse(data);
}

export { api };
