"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useBranchLocatorStore } from "@/store/branch-locator-store";

export function SearchBar() {
  const searchQuery = useBranchLocatorStore((s) => s.searchQuery);
  const setSearchQuery = useBranchLocatorStore((s) => s.setSearchQuery);

  return (
    <motion.div
      className="relative w-full"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Search
        className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--gray-333)]"
        aria-hidden
      />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by branch name or address…"
        className="w-full rounded border border-[var(--primary-blue)]/30 bg-white py-3 pl-10 pr-10 text-base text-[var(--gray-333)] shadow-[var(--shadow-card)] outline-none transition-colors placeholder:text-gray-400 focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/20"
        aria-label="Search branches by name or location"
      />
      {searchQuery.length > 0 && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded text-[var(--primary-red)] transition-colors hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-[var(--primary-red)]/30"
          aria-label="Clear search"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      )}
    </motion.div>
  );
}
