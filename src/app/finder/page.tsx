"use client";

import { BranchLocatorLayout } from "@/components/layout/branch-locator-layout";
import { BranchLocatorErrorBoundary } from "@/components/error-boundary";

export default function FinderPage() {
  return (
    <BranchLocatorErrorBoundary>
      <BranchLocatorLayout />
    </BranchLocatorErrorBoundary>
  );
}
