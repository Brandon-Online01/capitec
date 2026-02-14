"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { X, Building2, Banknote } from "lucide-react";
import type { Branch } from "@/lib/schemas/branch";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import {
  AddressSection,
  ContactSection,
  HoursSection,
  ServicesSection,
  BranchDetailActions,
} from "./branch-detail-content";

const MOBILE_BREAKPOINT = 768;

const PopularTimesChart = dynamic(
  () =>
    import("@/components/popular-times-chart").then((m) => ({
      default: m.PopularTimesChart,
    })),
  { ssr: false }
);

interface BranchDetailAccordionProps {
  branch: Branch;
}

export function BranchDetailAccordion({ branch }: BranchDetailAccordionProps) {
  const setSelectedBranch = useBranchLocatorStore((s) => s.setSelectedBranch);
  const savedBranchIds = useBranchLocatorStore((s) => s.savedBranchIds);
  const toggleSavedBranch = useBranchLocatorStore((s) => s.toggleSavedBranch);
  const [isMobile, setIsMobile] = useState(true);
  const isSaved = savedBranchIds.includes(branch.id);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobile(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  if (!isMobile) return null;

  return (
    <section
      className="rounded border border-[#e5e5e5] bg-white"
      aria-label="Branch details"
    >
      {/* Header */}
      <div className="flex shrink-0 flex-col border-b border-[var(--gray-f5)] p-3">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center gap-2">
              {branch.type === "atm" ? (
                <Banknote
                  className="h-4 w-4 shrink-0 text-[var(--primary-green)]"
                  aria-hidden
                />
              ) : (
                <Building2
                  className="h-4 w-4 shrink-0 text-[var(--primary-blue)]"
                  aria-hidden
                />
              )}
              <span className="rounded bg-[var(--gray-f5)] px-2 py-0.5 text-xs font-medium capitalize text-[var(--gray-333)]">
                {branch.type === "atm" ? "ATM" : "Branch"}
              </span>
            </div>
            <h2 className="text-lg font-bold text-[var(--gray-333)]">
              {branch.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setSelectedBranch(null)}
            className="flex shrink-0 items-center justify-center rounded bg-[var(--primary-red)] p-2 text-white transition-colors hover:opacity-90"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Accordion sections */}
      <div className="space-y-0 text-detail text-[var(--gray-333)]">
        <details open className="group border-b border-[var(--gray-f5)]">
          <summary className="cursor-pointer p-3 text-sm font-medium text-[var(--gray-333)]/80 hover:bg-[var(--gray-f5)]/50">
            Address
          </summary>
          <div className="border-t border-[var(--gray-f5)] px-3 pb-3 pt-2">
            <AddressSection branch={branch} />
          </div>
        </details>

        <details className="group border-b border-[var(--gray-f5)]">
          <summary className="cursor-pointer p-3 text-sm font-medium text-[var(--gray-333)]/80 hover:bg-[var(--gray-f5)]/50">
            Contact
          </summary>
          <div className="border-t border-[var(--gray-f5)] px-3 pb-3 pt-2">
            <ContactSection branch={branch} />
          </div>
        </details>

        <details className="group border-b border-[var(--gray-f5)]">
          <summary className="cursor-pointer p-3 text-sm font-medium text-[var(--gray-333)]/80 hover:bg-[var(--gray-f5)]/50">
            Operating hours
          </summary>
          <div className="border-t border-[var(--gray-f5)] px-3 pb-3 pt-2">
            <HoursSection branch={branch} />
          </div>
        </details>

        <details className="group border-b border-[var(--gray-f5)]">
          <summary className="cursor-pointer p-3 text-sm font-medium text-[var(--gray-333)]/80 hover:bg-[var(--gray-f5)]/50">
            Services
          </summary>
          <div className="border-t border-[var(--gray-f5)] px-3 pb-3 pt-2">
            <ServicesSection branch={branch} />
          </div>
        </details>

        <details className="group border-b border-[var(--gray-f5)]">
          <summary className="cursor-pointer p-3 text-sm font-medium text-[var(--gray-333)]/80 hover:bg-[var(--gray-f5)]/50">
            Popular times
          </summary>
          <div className="border-t border-[var(--gray-f5)] p-3">
            <PopularTimesChart
              branchId={branch.id}
              branchName={branch.name}
              locationType={branch.type}
            />
          </div>
        </details>
      </div>

      {/* Actions */}
      <div className="border-t border-[var(--gray-f5)] p-3">
        <BranchDetailActions
          branch={branch}
          isSaved={isSaved}
          onToggleSaved={() => toggleSavedBranch(branch.id)}
        />
      </div>
    </section>
  );
}
