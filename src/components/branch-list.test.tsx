import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BranchList } from "./branch-list";
import { useBranchLocatorStore } from "@/store/branch-locator-store";
import { fixtureBranch, fixtureBranch2, fixtureBranches } from "@/test/fixtures/branches";

describe("BranchList", () => {
  beforeEach(() => {
    useBranchLocatorStore.setState({
      selectedBranchId: null,
      savedBranchIds: [],
    });
  });

  it("renders list with aria-label", () => {
    render(<BranchList branches={fixtureBranches} />);
    const list = screen.getByRole("list", { name: /branches and atms list/i });
    expect(list).toBeInTheDocument();
  });

  it("renders empty state when branches is empty", () => {
    render(<BranchList branches={[]} />);
    expect(
      screen.getByText(/no branches or atms match your search/i)
    ).toBeInTheDocument();
  });

  it("renders branch names and addresses", () => {
    render(<BranchList branches={[fixtureBranch, fixtureBranch2]} />);
    expect(screen.getByText(fixtureBranch.name)).toBeInTheDocument();
    expect(screen.getByText(fixtureBranch.address)).toBeInTheDocument();
    expect(screen.getByText(fixtureBranch2.name)).toBeInTheDocument();
  });

  it("calls setSelectedBranch when a branch row is clicked", async () => {
    const user = userEvent.setup();
    render(<BranchList branches={[fixtureBranch]} />);
    await user.click(screen.getByText(fixtureBranch.name));
    expect(useBranchLocatorStore.getState().selectedBranchId).toBe(fixtureBranch.id);
  });

  it("toggle save button adds/removes from saved", async () => {
    const user = userEvent.setup();
    render(<BranchList branches={[fixtureBranch]} />);
    const saveBtn = screen.getByRole("button", {
      name: /save branch/i,
    });
    await user.click(saveBtn);
    expect(useBranchLocatorStore.getState().savedBranchIds).toContain(fixtureBranch.id);
    const removeBtn = screen.getByRole("button", { name: /remove from saved/i });
    await user.click(removeBtn);
    expect(useBranchLocatorStore.getState().savedBranchIds).not.toContain(fixtureBranch.id);
  });
});
