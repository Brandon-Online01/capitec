import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "./search-bar";
import { useBranchLocatorStore } from "@/store/branch-locator-store";

describe("SearchBar", () => {
  beforeEach(() => {
    useBranchLocatorStore.setState({ searchQuery: "" });
  });

  it("renders search input with correct aria-label", () => {
    render(<SearchBar />);
    const input = screen.getByRole("searchbox", {
      name: /search branches by name or location/i,
    });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Search by branch name or address…");
  });

  it("updates store when user types", async () => {
    const user = userEvent.setup();
    render(<SearchBar />);
    const input = screen.getByRole("searchbox", {
      name: /search branches by name or location/i,
    });
    await user.type(input, "Cape");
    expect(useBranchLocatorStore.getState().searchQuery).toBe("Cape");
  });

  it("shows clear button when search has content and clears on click", async () => {
    const user = userEvent.setup();
    useBranchLocatorStore.setState({ searchQuery: "test" });
    render(<SearchBar />);
    const clearBtn = screen.getByRole("button", { name: /clear search/i });
    expect(clearBtn).toBeInTheDocument();
    await user.click(clearBtn);
    expect(useBranchLocatorStore.getState().searchQuery).toBe("");
  });

  it("does not show clear button when search is empty", () => {
    render(<SearchBar />);
    expect(screen.queryByRole("button", { name: /clear search/i })).not.toBeInTheDocument();
  });
});
