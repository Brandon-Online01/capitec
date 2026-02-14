"use client";

import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, ScaleControl } from "react-leaflet";
import L from "leaflet";
import type { Branch } from "@/lib/schemas/branch";
import { useBranchLocatorStore } from "@/store/branch-locator-store";

const SA_CENTER: [number, number] = [-29.0, 24.0];
const ZOOM = 5;
const BRANCH_BLUE = "#2F70EF";
const ATM_GREEN = "#16a34a";

/** Building icon (Lucide Building2-style) for branch markers – blue */
function createBranchIcon() {
  return L.divIcon({
    className: "location-marker location-marker-branch",
    html: `<div style="width:28px;height:28px;background:${BRANCH_BLUE};border:2px solid #fff;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2"/>
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
        <path d="M10 12h4"/><path d="M10 8h4"/>
      </svg>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

/** Banknote icon (Lucide-style) for ATM markers – green */
function createAtmIcon() {
  return L.divIcon({
    className: "location-marker location-marker-atm",
    html: `<div style="width:28px;height:28px;background:${ATM_GREEN};border:2px solid #fff;border-radius:4px;box-shadow:0 2px 6px rgba(0,0,0,0.3);display:flex;align-items:center;justify-content:center;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2"/>
        <circle cx="12" cy="12" r="2"/>
        <path d="M6 12h.01M18 12h.01"/>
      </svg>
    </div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
  });
}

function MapController({
  branches,
  selectedId,
  userLocation,
  onUserLocationUsed,
}: {
  branches: Branch[];
  selectedId: number | null;
  userLocation: { lat: number; lng: number } | null;
  onUserLocationUsed: () => void;
}) {
  const map = useMap();
  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (selectedId) {
      const branch = branches.find((b) => b.id === selectedId);
      if (branch) map.setView([branch.lat, branch.lng], 14);
      return;
    }
    if (userLocation) {
      if (reduceMotion) {
        map.setView([userLocation.lat, userLocation.lng], 14);
      } else {
        map.flyTo([userLocation.lat, userLocation.lng], 14);
      }
      onUserLocationUsed();
    }
  }, [selectedId, userLocation, branches, map, onUserLocationUsed]);
  return null;
}

interface BranchMapProps {
  branches: Branch[];
}

export function BranchMap({ branches }: BranchMapProps) {
  const setSelectedBranch = useBranchLocatorStore((s) => s.setSelectedBranch);
  const selectedBranchId = useBranchLocatorStore((s) => s.selectedBranchId);
  const userLocation = useBranchLocatorStore((s) => s.userLocation);
  const branchIcon = useRef(createBranchIcon()).current;
  const atmIcon = useRef(createAtmIcon()).current;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-full w-full overflow-hidden rounded" aria-hidden />;
  }

  return (
    <div className="h-full w-full overflow-hidden rounded">
      <MapContainer
        center={SA_CENTER}
        zoom={ZOOM}
        className="h-full w-full"
        aria-label="Interactive map of branches and ATMs"
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ScaleControl position="bottomleft" imperial={false} />
      <MapController
        branches={branches}
        selectedId={selectedBranchId}
        userLocation={userLocation}
        onUserLocationUsed={() => {}}
      />
      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={[branch.lat, branch.lng]}
          icon={branch.type === "atm" ? atmIcon : branchIcon}
          eventHandlers={{
            click: () => setSelectedBranch(branch.id),
          }}
        >
          <Popup>
            <div className="leaflet-popup-content-font">
              <p>{branch.name}</p>
              <p className="text-xs capitalize text-[var(--gray-333)]/80">{branch.type === "atm" ? "ATM" : "Branch"}</p>
              <p>{branch.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    </div>
  );
}
