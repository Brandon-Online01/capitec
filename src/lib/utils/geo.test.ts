import { describe, it, expect } from "vitest";
import {
  haversineKm,
  getGeoErrorMessage,
  isRetryableGeoError,
} from "./geo";

describe("haversineKm", () => {
  it("returns 0 for same point", () => {
    expect(haversineKm(0, 0, 0, 0)).toBe(0);
  });

  it("returns positive distance for different points", () => {
    const km = haversineKm(-33.9249, 18.4241, -33.93, 18.43);
    expect(km).toBeGreaterThan(0);
    expect(km).toBeLessThan(10);
  });

  it("is symmetric", () => {
    const a = haversineKm(-34, 18, -35, 19);
    const b = haversineKm(-35, 19, -34, 18);
    expect(a).toBe(b);
  });
});

describe("getGeoErrorMessage", () => {
  it("returns null for PERMISSION_DENIED (code 1)", () => {
    expect(getGeoErrorMessage({ code: 1, message: "" } as GeolocationPositionError)).toBe(null);
  });

  it("returns location unavailable message for POSITION_UNAVAILABLE (code 2)", () => {
    expect(
      getGeoErrorMessage({ code: 2, message: "" } as GeolocationPositionError)
    ).toBe("Location unavailable; map shows all branches.");
  });

  it("returns timeout message for TIMEOUT (code 3)", () => {
    expect(
      getGeoErrorMessage({ code: 3, message: "" } as GeolocationPositionError)
    ).toBe("Location timed out. Tap the locate button to try again.");
  });

  it("returns generic message for unknown code", () => {
    expect(
      getGeoErrorMessage({ code: 0, message: "" } as GeolocationPositionError)
    ).toBe("Could not get your location.");
  });
});

describe("isRetryableGeoError", () => {
  it("returns false for PERMISSION_DENIED (code 1)", () => {
    expect(
      isRetryableGeoError({ code: 1, message: "" } as GeolocationPositionError)
    ).toBe(false);
  });

  it("returns true for POSITION_UNAVAILABLE (code 2)", () => {
    expect(
      isRetryableGeoError({ code: 2, message: "" } as GeolocationPositionError)
    ).toBe(true);
  });

  it("returns true for TIMEOUT (code 3)", () => {
    expect(
      isRetryableGeoError({ code: 3, message: "" } as GeolocationPositionError)
    ).toBe(true);
  });
});
