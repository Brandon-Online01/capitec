"use client";

import { motion } from "framer-motion";

export function MapLoading() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 rounded bg-[var(--gray-f5)] p-8 text-[var(--gray-333)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      aria-live="polite"
      aria-label="Loading branches"
    >
      <motion.div
        className="h-10 w-10 rounded-full border-4 border-[var(--primary-blue)] border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-detail font-medium">Loading branches…</p>
    </motion.div>
  );
}
