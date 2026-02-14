import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BranchDetailModal } from "./branch-detail-modal";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import { fixtureBranch } from "@/test/fixtures/branches";

vi.mock("next/dynamic", () => ({
  default: (fn: () => Promise<{ default: React.ComponentType<unknown> }>) => {
    const Component = () => <div data-testid="popular-times-chart">Chart</div>;
    return Component;
  },
}));

describe("BranchDetailModal", () => {
  beforeEach(() => {
    useBranchLocatorStore.setState({
      selectedBranchId: null,
      savedBranchIds: [],
    });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });
  });

  it("renders nothing when branch is undefined", () => {
    const { container } = render(<BranchDetailModal branch={undefined} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders modal with branch info and close button when open (desktop)", async () => {
    useBranchLocatorStore.setState({ selectedBranchId: fixtureBranch.id });
    render(<BranchDetailModal branch={fixtureBranch} />);
    const dialog = screen.getByRole("dialog", { name: /test branch/i });
    expect(dialog).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: fixtureBranch.name })).toBeInTheDocument();
    expect(screen.getByText(fixtureBranch.address)).toBeInTheDocument();
    const closeBtn = screen.getByRole("button", { name: /close/i });
    await userEvent.click(closeBtn);
    expect(useBranchLocatorStore.getState().selectedBranchId).toBe(null);
  });
});
