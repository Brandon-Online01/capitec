import type { Branch } from "@/lib/schemas/branch";

/** Minimal valid branch for tests */
export const fixtureBranch: Branch = {
  id: 1,
  type: "branch",
  name: "Test Branch",
  lat: -33.9249,
  lng: 18.4241,
  address: "123 Test St, Cape Town",
  hours: "Mon–Fri 08:00–17:00",
  services: ["Deposits", "Withdrawals"],
};

/** Second branch for list/distance tests */
export const fixtureBranch2: Branch = {
  id: 2,
  type: "atm",
  name: "Test ATM",
  lat: -33.93,
  lng: 18.43,
  address: "456 Other Ave",
  hours: "24/7",
  services: ["Withdrawals"],
};

/** Branch with optional contact fields */
export const fixtureBranchWithContact: Branch = {
  ...fixtureBranch,
  id: 3,
  name: "Branch With Contact",
  phone: "+27 21 123 4567",
  email: "branch@example.com",
};

export const fixtureBranches: Branch[] = [
  fixtureBranch,
  fixtureBranch2,
  fixtureBranchWithContact,
];
