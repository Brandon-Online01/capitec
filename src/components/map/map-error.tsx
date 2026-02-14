"use client";

import { motion } from "framer-motion";

interface MapErrorProps {
  message?: string;
}

export function MapError({ message = "Failed to load branches." }: MapErrorProps) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 rounded bg-[var(--gray-f5)] p-8 text-[var(--gray-333)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      role="alert"
      aria-live="assertive"
    >
      <p className="text-center font-medium text-[var(--primary-red)]">
        {message}
      </p>
      <p className="text-detail text-center">
        Please refresh the page or try again later.
      </p>
    </motion.div>
  );
}
