"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Building2, Banknote, Bookmark, BookmarkCheck } from "lucide-react";
import type { Branch } from "@/lib/schemas/branch";
import { useBranchLocatorStore } from "@/store/branch-locator-store";

interface BranchListProps {
  branches: Branch[];
}

export function BranchList({ branches }: BranchListProps) {
  const setSelectedBranch = useBranchLocatorStore((s) => s.setSelectedBranch);
  const savedBranchIds = useBranchLocatorStore((s) => s.savedBranchIds);
  const toggleSavedBranch = useBranchLocatorStore((s) => s.toggleSavedBranch);

  return (
    <ul
      className="flex flex-col gap-2 pb-4"
      role="list"
      aria-label="Branches and ATMs list"
      aria-live="polite"
    >
      <AnimatePresence mode="popLayout">
        {branches.length === 0 ? (
          <motion.li
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded bg-[var(--gray-f5)] p-4 text-detail text-[var(--gray-333)]"
          >
            No branches or ATMs match your search.
          </motion.li>
        ) : (
          branches.map((branch, i) => (
            <motion.li
              key={branch.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: i * 0.05 }}
              className="cursor-pointer rounded border border-[#e5e5e5] bg-white p-4 transition-colors hover:bg-[var(--gray-f5)]"
              onClick={() => setSelectedBranch(branch.id)}
            >
              <div className="flex gap-3">
                {branch.type === "atm" ? (
                  <Banknote className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-green)]" aria-hidden />
                ) : (
                  <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--primary-blue)]" aria-hidden />
                )}
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--gray-333)]">{branch.name}</p>
                  <p className="text-detail text-[var(--gray-333)]/80">{branch.address}</p>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSavedBranch(branch.id);
                  }}
                  className="shrink-0 rounded p-2 text-[var(--gray-333)] transition-colors hover:bg-[var(--gray-f5)]"
                  aria-label={savedBranchIds.includes(branch.id) ? "Remove from saved" : `Save ${branch.type === "atm" ? "ATM" : "branch"}`}
                >
                  {savedBranchIds.includes(branch.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-[var(--primary-blue)]" aria-hidden />
                  ) : (
                    <Bookmark className="h-5 w-5" aria-hidden />
                  )}
                </button>
              </div>
            </motion.li>
          ))
        )}
      </AnimatePresence>
    </ul>
  );
}
