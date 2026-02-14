"use client";

import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class BranchLocatorErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <motion.main
          className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[var(--gray-f5)] p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-xl font-bold text-[var(--gray-333)]">
            Something went wrong
          </h1>
          <p className="text-detail text-center text-[var(--gray-333)]">
            The map or branch list failed to load. Please refresh the page.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="rounded-lg bg-[var(--primary-blue)] px-4 py-2 font-medium text-white transition-colors hover:opacity-90"
          >
            Try again
          </button>
        </motion.main>
      );
    }
    return this.props.children;
  }
}
