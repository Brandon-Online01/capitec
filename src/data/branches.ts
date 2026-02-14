import type { Branch } from "@/lib/schemas/branch";
import { capeTownBranches } from "./cities/cape-town";
import { johannesburgBranches } from "./cities/johannesburg";
import { pretoriaBranches } from "./cities/pretoria";
import { durbanBranches } from "./cities/durban";
import { portElizabethBranches } from "./cities/port-elizabeth";
import { bloemfonteinBranches } from "./cities/bloemfontein";
import { eastLondonBranches } from "./cities/east-london";
import { nelspruitBranches } from "./cities/nelspruit";
import { polokwaneBranches } from "./cities/polokwane";
import { kimberleyBranches } from "./cities/kimberley";
import { otherBranches } from "./cities/other";

const allInputs = [
  ...capeTownBranches,
  ...johannesburgBranches,
  ...pretoriaBranches,
  ...durbanBranches,
  ...portElizabethBranches,
  ...bloemfonteinBranches,
  ...eastLondonBranches,
  ...nelspruitBranches,
  ...polokwaneBranches,
  ...kimberleyBranches,
  ...otherBranches,
];

/** Mock data – branches and ATMs across South Africa, concentrated in major cities */
export const MOCK_BRANCHES: Branch[] = allInputs.map((b, i) => ({
  id: i + 1,
  type: b.type ?? "branch",
  name: b.name,
  lat: b.lat,
  lng: b.lng,
  address: b.address,
  hours: b.hours,
  services: b.services,
  ...(b.phone !== undefined && { phone: b.phone }),
  ...(b.email !== undefined && { email: b.email }),
}));
