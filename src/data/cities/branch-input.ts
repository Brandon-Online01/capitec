/** Location type: full branch or ATM-only */
export type LocationType = "branch" | "atm";

/** Branch or ATM data without id – used when building MOCK_BRANCHES from city files */
export interface BranchInput {
  type?: LocationType;
  name: string;
  lat: number;
  lng: number;
  address: string;
  hours: string;
  services: string[];
  phone?: string;
  email?: string;
}
