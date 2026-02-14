"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { List, Map as MapIcon, Locate } from "lucide-react";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import { useBranchesQuery } from "@/hooks/use-branches-query";
import { useFilteredBranches } from "@/hooks/use-filtered-branches";
import { getGeoErrorMessage, isRetryableGeoError } from "@/lib/utils/geo";
import { MapLoading } from "@/components/map/map-loading";
import { MapError } from "@/components/map/map-error";
import { SearchBar } from "@/components/search-bar";
import { BranchList } from "@/components/branch-list";
import { BranchDetailModal } from "@/components/branch-detail-modal";
import { BranchDetailAccordion } from "@/components/branch-detail-accordion";

const BranchMap = dynamic(
  () => import("@/components/map/branch-map").then((m) => ({ default: m.BranchMap })),
  { ssr: false, loading: () => <MapLoading /> }
);

export function BranchLocatorLayout() {
  const { data, isLoading, error } = useBranchesQuery();
  const filteredBranches = useFilteredBranches(data?.branches);
  const sidebarOpen = useBranchLocatorStore((s) => s.sidebarOpen);
  const toggleSidebar = useBranchLocatorStore((s) => s.toggleSidebar);
  const selectedBranchId = useBranchLocatorStore((s) => s.selectedBranchId);
  const setSelectedBranch = useBranchLocatorStore((s) => s.setSelectedBranch);
  const setUserLocation = useBranchLocatorStore((s) => s.setUserLocation);
  const userLocation = useBranchLocatorStore((s) => s.userLocation);
  const selectedBranch = data?.branches?.find((b) => b.id === selectedBranchId);
  const [geoError, setGeoError] = useState<string | null>(null);
  const hasRequestedGeo = useRef(false);

  /** Request location with one automatic retry on POSITION_UNAVAILABLE or TIMEOUT (longer timeout, lower accuracy). */
  const requestLocationWithRetry = useCallback(
    (isRetry = false) => {
      const options = isRetry
        ? { enableHighAccuracy: false, timeout: 20000 }
        : { enableHighAccuracy: true, timeout: 20000, maximumAge: 300000 };
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setGeoError(null);
        },
        (err) => {
          if (isRetryableGeoError(err) && !isRetry) {
            requestLocationWithRetry(true);
          } else {
            const message = getGeoErrorMessage(err);
            setGeoError(message ?? null);
          }
        },
        options
      );
    },
    [setUserLocation]
  );

  // On first load, request user location so map centers and list sorts by distance (like other apps).
  useEffect(() => {
    if (hasRequestedGeo.current || userLocation !== null) return;
    if (typeof window === "undefined" || !window.isSecureContext) return;
    if (typeof navigator === "undefined" || !navigator.geolocation) return;

    const requestLocation = () => {
      hasRequestedGeo.current = true;
      requestLocationWithRetry(false);
    };

    // If Permissions API supports geolocation and permission is already denied, skip requesting.
    if (typeof navigator.permissions?.query === "function") {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((status) => {
          if (status.state === "denied") return;
          requestLocation();
        })
        .catch(() => requestLocation());
    } else {
      requestLocation();
    }
  }, [userLocation, setUserLocation, requestLocationWithRetry]);

  function handleMyLocation() {
    setGeoError(null);
    if (typeof window !== "undefined" && !window.isSecureContext) {
      setGeoError("Location is available over HTTPS or localhost only.");
      return;
    }
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setGeoError("Geolocation is not supported.");
      return;
    }
    setSelectedBranch(null);
    requestLocationWithRetry(false);
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center p-4">
        <MapError message={error.message} />
      </main>
    );
  }

  return (
    <main className="flex h-[calc(100vh-1rem)] flex-col overflow-hidden" role="main">
      {/* Intro above map */}
      <section className="shrink-0 px-3 pt-3 pb-1.5 md:px-6" aria-labelledby="branches-heading">
        <h1 id="branches-heading" className="text-2xl font-bold text-[var(--primary-blue)] md:text-3xl">
          Branches
        </h1>
        <p className="mt-1 text-base text-[var(--gray-333)] md:text-lg">
          Use our branch locator below to find your nearest branch or ATM.
        </p>
      </section>

      {/* Map + sidebar row – on small screens map at top then list; on md+ side-by-side */}
      <div className="flex min-h-0 flex-1 flex-col md:flex-row">
      {/* Map – on mobile: prominent at top (min 40vh); on desktop: ~65% of row */}
      <motion.section
        className="relative min-h-[40vh] w-full flex-1 overflow-hidden md:flex-[0_0_65%] md:min-h-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        aria-label="Branch map"
      >
        {isLoading ? (
          <div className="flex h-full items-center justify-center">
            <MapLoading />
          </div>
        ) : data?.branches ? (
          <>
            <BranchMap branches={data.branches} />
            <div className="absolute right-4 top-4 z-[1000] flex flex-col items-end gap-2">
              <button
                type="button"
                onClick={handleMyLocation}
                className="flex h-10 w-10 items-center justify-center rounded bg-white shadow-[var(--shadow-card)] transition-colors hover:bg-[var(--gray-f5)]"
                aria-label="Center map on my location"
              >
                <Locate className="h-5 w-5 text-[var(--primary-blue)]" />
              </button>
              {geoError && (
                <p className="max-w-[200px] rounded bg-white/95 px-2 py-1 text-detail text-[var(--primary-red)]" role="alert">
                  {geoError}
                </p>
              )}
            </div>
          </>
        ) : null}
      </motion.section>

      {/* Sidebar – list + search; collapsible on mobile */}
      <aside
        className={`flex w-full flex-col gap-3 overflow-hidden p-3 md:flex-[0_0_35%] md:min-h-0 md:gap-4 md:p-4 ${sidebarOpen ? "block" : "hidden md:flex"}`}
        aria-label="Branch list and search"
      >
        <div className="shrink-0 space-y-1">
          <h2 className="text-lg font-semibold text-[var(--primary-blue)]">Find a branch near you</h2>
          <p className="text-sm text-[var(--gray-333)]">Enter a location to find a branch or ATM</p>
        </div>
        <div className="flex items-center gap-2">
          <SearchBar />
          <button
            type="button"
            onClick={toggleSidebar}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[var(--primary-blue)] text-white transition-colors hover:opacity-90 md:hidden"
            aria-label={sidebarOpen ? "Hide list" : "Show list"}
          >
            {sidebarOpen ? <MapIcon className="h-5 w-5" /> : <List className="h-5 w-5" />}
          </button>
        </div>
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <p className="mb-2 shrink-0 text-detail text-[var(--gray-333)]" aria-live="polite">
            {filteredBranches.length} location{filteredBranches.length !== 1 ? "s" : ""} (branches &amp; ATMs)
          </p>
          <div className="scroll-panel flex-1 space-y-3" aria-label="Scrollable branch list">
            {selectedBranch && (
              <BranchDetailAccordion key={selectedBranch.id} branch={selectedBranch} />
            )}
            <BranchList branches={filteredBranches} />
          </div>
        </div>
      </aside>

      </div>
      <BranchDetailModal branch={selectedBranch} />
    </main>
  );
}
