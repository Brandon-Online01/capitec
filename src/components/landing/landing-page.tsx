"use client";

import Link from "next/link";

/**
 * Simple landing hero for the Capitec Branch and ATM Finder.
 * Centered copy, subtext, and a primary CTA to the finder.
 */
export function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-[var(--gray-333)] mb-4">
        Welcome to Capitec Branch and ATM Finder
      </h1>
      <p className="text-base text-gray-600 mb-10 max-w-md">
        View branches, opening hours, and save your favourites in one place.
      </p>
      <Link
        href="/finder"
        className="inline-block rounded-[var(--radius-card)] px-8 py-4 text-lg font-semibold text-white bg-[var(--primary-blue)] shadow-[var(--shadow-card)] hover:opacity-95 transition-opacity"
      >
        Get Started
      </Link>
    </main>
  );
}
