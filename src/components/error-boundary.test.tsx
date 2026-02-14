import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BranchLocatorErrorBoundary } from "./error-boundary";

function Thrower() {
  throw new Error("test error");
}

function GoodChild() {
  return <span>Good content</span>;
}

describe("BranchLocatorErrorBoundary", () => {
  it("renders children when there is no error", () => {
    render(
      <BranchLocatorErrorBoundary>
        <GoodChild />
      </BranchLocatorErrorBoundary>
    );
    expect(screen.getByText("Good content")).toBeInTheDocument();
  });

  it("renders fallback UI when child throws", () => {
    render(
      <BranchLocatorErrorBoundary>
        <Thrower />
      </BranchLocatorErrorBoundary>
    );
    expect(screen.getByRole("heading", { name: /something went wrong/i })).toBeInTheDocument();
    expect(screen.getByText(/map or branch list failed to load/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
  });

  it("Try again button is present and clickable (re-renders child)", async () => {
    const user = userEvent.setup();
    render(
      <BranchLocatorErrorBoundary>
        <Thrower />
      </BranchLocatorErrorBoundary>
    );
    const tryAgainBtn = screen.getByRole("button", { name: /try again/i });
    expect(tryAgainBtn).toBeInTheDocument();
    await user.click(tryAgainBtn);
    expect(screen.getByRole("heading", { name: /something went wrong/i })).toBeInTheDocument();
  });
});
