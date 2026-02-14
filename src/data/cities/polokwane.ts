import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8:30AM-4:30PM, Sat: 8:30AM-12PM";
const SERVICES = ["ATM", "Deposits", "Consulting", "Loans"];

const PHONE_POL = "+27 15";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~7 Polokwane area branches and ATMs */
export const polokwaneBranches: BranchInput[] = [
  { type: "branch", name: "Polokwane Central", lat: -23.8985, lng: 29.4482, address: "88 Church St, Polokwane, 0700", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1001`, email: `polokwane.central${EMAIL_SUFFIX}` },
  { type: "atm", name: "Mall of the North", lat: -23.8785, lng: 29.4582, address: "Mall of the North, Polokwane, 0699", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_POL} 123 1002`, email: `mallofthenorth${EMAIL_SUFFIX}` },
  { type: "branch", name: "Bendor", lat: -23.8885, lng: 29.4682, address: "22 Bendor St, Bendor, 0699", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1003`, email: `bendor${EMAIL_SUFFIX}` },
  { type: "atm", name: "Tzaneen", lat: -23.8285, lng: 30.1582, address: "44 Agatha St, Tzaneen, 0850", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1004`, email: `tzaneen${EMAIL_SUFFIX}` },
  { type: "branch", name: "Lephalale", lat: -23.6685, lng: 27.7482, address: "12 Nelson Mandela Dr, Lephalale, 0555", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1005`, email: `lephalale${EMAIL_SUFFIX}` },
  { type: "atm", name: "Mokopane", lat: -24.1885, lng: 29.0182, address: "56 Thabo Mbeki Dr, Mokopane, 0600", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1006`, email: `mokopane${EMAIL_SUFFIX}` },
  { type: "branch", name: "Louis Trichardt", lat: -23.0485, lng: 29.9082, address: "88 Songozwi Rd, Louis Trichardt, 0920", hours: HOURS, services: SERVICES, phone: `${PHONE_POL} 123 1007`, email: `louistrichardt${EMAIL_SUFFIX}` },
];
