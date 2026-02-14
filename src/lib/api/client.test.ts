import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchBranches } from "./client";

vi.mock("@/data/branches", () => ({
  MOCK_BRANCHES: [
    {
      id: 1,
      type: "branch",
      name: "Test",
      lat: -33.92,
      lng: 18.42,
      address: "123 Test St",
      hours: "Mon–Fri 09:00–17:00",
      services: ["Deposits"],
    },
  ],
}));

describe("fetchBranches", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns validated BranchesResponse after delay", async () => {
    const promise = fetchBranches();
    vi.advanceTimersByTime(1000);
    const result = await promise;
    expect(result.branches).toHaveLength(1);
    expect(result.branches[0].name).toBe("Test");
    expect(result.branches[0]).toHaveProperty("id");
    expect(result.branches[0]).toHaveProperty("type");
    expect(result.branches[0]).toHaveProperty("name");
    expect(result.branches[0]).toHaveProperty("lat");
    expect(result.branches[0]).toHaveProperty("lng");
    expect(result.branches[0]).toHaveProperty("address");
    expect(result.branches[0]).toHaveProperty("hours");
    expect(result.branches[0]).toHaveProperty("services");
  });
});
