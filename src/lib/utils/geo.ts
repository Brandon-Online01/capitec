/**
 * Haversine distance in km between two lat/lng points.
 */
export function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth radius in km
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

/** User-facing message for geolocation errors. Returns null for PERMISSION_DENIED so caller can clear error. */
export function getGeoErrorMessage(error: GeolocationPositionError): string | null {
  switch (error.code) {
    case 1: // PERMISSION_DENIED
      return null;
    case 2: // POSITION_UNAVAILABLE
      return "Location unavailable; map shows all branches.";
    case 3: // TIMEOUT
      return "Location timed out. Tap the locate button to try again.";
    default:
      return "Could not get your location.";
  }
}

/** True if the error is worth retrying (e.g. POSITION_UNAVAILABLE or TIMEOUT, not PERMISSION_DENIED). */
export function isRetryableGeoError(error: GeolocationPositionError): boolean {
  return error.code === 2 || error.code === 3;
}
