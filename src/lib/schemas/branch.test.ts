import { describe, it, expect } from "vitest";
import { BranchSchema, BranchesResponseSchema } from "./branch";
import { fixtureBranch, fixtureBranches } from "@/test/fixtures/branches";

describe("BranchSchema", () => {
  it("accepts a valid branch", () => {
    expect(BranchSchema.parse(fixtureBranch)).toEqual(fixtureBranch);
  });

  it("accepts a branch with optional phone and email", () => {
    const withContact = { ...fixtureBranch, phone: "+27 21 123", email: "a@b.co" };
    expect(BranchSchema.parse(withContact)).toEqual(withContact);
  });

  it("rejects invalid type", () => {
    expect(() =>
      BranchSchema.parse({ ...fixtureBranch, type: "invalid" })
    ).toThrow();
  });

  it("rejects missing required fields", () => {
    expect(() => BranchSchema.parse({})).toThrow();
    expect(() =>
      BranchSchema.parse({
        id: 1,
        type: "branch",
        name: "X",
        // missing lat, lng, address, hours, services
      })
    ).toThrow();
  });

  it("rejects wrong types for id, lat, lng", () => {
    expect(() =>
      BranchSchema.parse({ ...fixtureBranch, id: "1" })
    ).toThrow();
    expect(() =>
      BranchSchema.parse({ ...fixtureBranch, lat: "33" })
    ).toThrow();
  });
});

describe("BranchesResponseSchema", () => {
  it("accepts valid response with branches array", () => {
    const response = { branches: fixtureBranches };
    expect(BranchesResponseSchema.parse(response)).toEqual(response);
  });

  it("rejects missing branches key", () => {
    expect(() => BranchesResponseSchema.parse({})).toThrow();
  });

  it("rejects invalid branch in array", () => {
    expect(() =>
      BranchesResponseSchema.parse({
        branches: [{ ...fixtureBranch, type: "invalid" }],
      })
    ).toThrow();
  });
});
