import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useBranchesQuery } from "./use-branches-query";
import { fixtureBranches } from "@/test/fixtures/branches";

vi.mock("@/lib/api/client", () => ({
  fetchBranches: vi.fn(() => Promise.resolve({ branches: fixtureBranches })),
}));

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

describe("useBranchesQuery", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns loading then success with branches data", async () => {
    const { result } = renderHook(() => useBranchesQuery(), {
      wrapper: createWrapper(),
    });
    expect(result.current.isLoading).toBe(true);
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data?.branches).toEqual(fixtureBranches);
    expect(result.current.data?.branches).toHaveLength(fixtureBranches.length);
  });
});
