"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
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

interface BranchDetailModalProps {
  branch: Branch | undefined;
}

export function BranchDetailModal({ branch }: BranchDetailModalProps) {
  const setSelectedBranch = useBranchLocatorStore((s) => s.setSelectedBranch);
  const selectedBranchId = useBranchLocatorStore((s) => s.selectedBranchId);
  const savedBranchIds = useBranchLocatorStore((s) => s.savedBranchIds);
  const toggleSavedBranch = useBranchLocatorStore((s) => s.toggleSavedBranch);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveRef = useRef<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(true);
  const isSaved = branch ? savedBranchIds.includes(branch.id) : false;

  const open = Boolean(selectedBranchId && branch);

  /** Close modal and restore focus to the element that had it before open (for keyboard/screen reader). */
  const handleClose = useCallback(() => {
    const prev = previousActiveRef.current;
    setSelectedBranch(null);
    requestAnimationFrame(() => prev?.focus());
  }, [setSelectedBranch]);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobile(!mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (open) {
      previousActiveRef.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, handleClose]);

  if (!branch) return null;

  /** On mobile, do not render modal – branch details shown inline via BranchDetailAccordion. */
  if (isMobile && open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            aria-hidden
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="branch-modal-title"
            aria-label="Branch details"
            className="fixed inset-x-0 bottom-0 z-50 flex max-h-[85vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl md:inset-auto md:top-4 md:right-4 md:bottom-4 md:max-h-none md:max-w-md md:rounded"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex shrink-0 flex-col border-b border-[var(--gray-f5)] p-3 md:p-4">
              <div className="flex items-start justify-between gap-3">
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
                  <h2 id="branch-modal-title" className="text-xl font-bold text-[var(--gray-333)]">
                    {branch.name}
                  </h2>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={handleClose}
                  className="flex shrink-0 items-center justify-center rounded bg-[var(--primary-red)] p-2 text-white transition-colors hover:opacity-90"
                  aria-label="Close"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div
              className="scroll-panel flex-1 p-4 md:p-6"
              aria-label="Scrollable branch details"
            >
              <div className="space-y-4 text-detail text-[var(--gray-333)]">
                <section aria-labelledby="branch-address-heading">
                  <h3
                    id="branch-address-heading"
                    className="mb-1 text-sm font-medium text-[var(--gray-333)]/80"
                  >
                    Address
                  </h3>
                  <AddressSection branch={branch} />
                </section>

                <section aria-labelledby="branch-contact-heading">
                  <h3
                    id="branch-contact-heading"
                    className="mb-1 text-sm font-medium text-[var(--gray-333)]/80"
                  >
                    Contact
                  </h3>
                  <ContactSection branch={branch} />
                </section>

                <section aria-labelledby="branch-hours-heading">
                  <h3
                    id="branch-hours-heading"
                    className="mb-1 text-sm font-medium text-[var(--gray-333)]/80"
                  >
                    Operating hours
                  </h3>
                  <HoursSection branch={branch} />
                </section>

                <section aria-labelledby="branch-services-heading">
                  <h3
                    id="branch-services-heading"
                    className="mb-1 text-sm font-medium text-[var(--gray-333)]/80"
                  >
                    Services
                  </h3>
                  <ServicesSection branch={branch} />
                </section>

                <PopularTimesChart
                  branchId={branch.id}
                  branchName={branch.name}
                  locationType={branch.type}
                />
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-[var(--gray-f5)] pt-4">
                <BranchDetailActions
                  branch={branch}
                  isSaved={isSaved}
                  onToggleSaved={() => toggleSavedBranch(branch.id)}
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
