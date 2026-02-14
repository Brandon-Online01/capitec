import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8AM-4:30PM, Sat: 8AM-11AM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Consulting"];

const PHONE_BFN = "+27 51";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~12 Bloemfontein area branches and ATMs */
export const bloemfonteinBranches: BranchInput[] = [
  { type: "branch", name: "Bloemfontein Central", lat: -29.1167, lng: 26.2167, address: "15 Maitland St, Bloemfontein Central, 9301", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7001`, email: `bloemfontein.central${EMAIL_SUFFIX}` },
  { type: "atm", name: "Bloemfontein Loch Logan", lat: -29.1085, lng: 26.2282, address: "Loch Logan Waterfront, Bloemfontein, 9301", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_BFN} 123 7002`, email: `bloemfontein.lochlogan${EMAIL_SUFFIX}` },
  { type: "branch", name: "Brandwag", lat: -29.1225, lng: 26.2082, address: "44 Parfitt Ave, Brandwag, 9301", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7003`, email: `brandwag${EMAIL_SUFFIX}` },
  { type: "atm", name: "Langenhovenpark", lat: -29.1025, lng: 26.2482, address: "22 Kellner St, Langenhovenpark, 9330", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7004`, email: `langenhovenpark${EMAIL_SUFFIX}` },
  { type: "branch", name: "Bayswater", lat: -29.1325, lng: 26.1982, address: "88 Nelson Mandela Dr, Bayswater, 9301", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7005`, email: `bayswater${EMAIL_SUFFIX}` },
  { type: "atm", name: "Westdene", lat: -29.1125, lng: 26.2182, address: "12 St Andrew St, Westdene, 9301", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7006`, email: `westdene${EMAIL_SUFFIX}` },
  { type: "branch", name: "Botshabelo", lat: -29.2325, lng: 26.7182, address: "Botshabelo Mall, Botshabelo, 9781", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7007`, email: `botshabelo${EMAIL_SUFFIX}` },
  { type: "atm", name: "Bethlehem", lat: -28.2325, lng: 28.3082, address: "56 Joubert St, Bethlehem, 9700", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7008`, email: `bethlehem${EMAIL_SUFFIX}` },
  { type: "branch", name: "Welkom", lat: -27.9825, lng: 26.7382, address: "12 Church St, Welkom, 9460", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7009`, email: `welkom${EMAIL_SUFFIX}` },
  { type: "atm", name: "Kroonstad", lat: -27.6525, lng: 27.2322, address: "22 Church St, Kroonstad, 9500", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7010`, email: `kroonstad${EMAIL_SUFFIX}` },
  { type: "branch", name: "Ladybrand", lat: -29.1985, lng: 27.4582, address: "44 McKenzie St, Ladybrand, 9745", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7011`, email: `ladybrand${EMAIL_SUFFIX}` },
  { type: "atm", name: "Thaba Nchu", lat: -29.2085, lng: 26.8382, address: "22 Main Rd, Thaba Nchu, 9780", hours: HOURS, services: SERVICES, phone: `${PHONE_BFN} 123 7012`, email: `thabanchu${EMAIL_SUFFIX}` },
];
