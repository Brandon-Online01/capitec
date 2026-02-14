import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 9AM-5PM, Sat: 9AM-12PM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Consulting"];

const PHONE_EL = "+27 43";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~9 East London area branches and ATMs */
export const eastLondonBranches: BranchInput[] = [
  { type: "branch", name: "East London CBD", lat: -33.0185, lng: 27.9082, address: "88 Oxford St, East London, 5201", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8001`, email: `eastlondon.cbd${EMAIL_SUFFIX}` },
  { type: "atm", name: "Vincent Park", lat: -33.0085, lng: 27.9182, address: "Vincent Park Shopping Centre, East London, 5241", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_EL} 123 8002`, email: `vincentpark${EMAIL_SUFFIX}` },
  { type: "branch", name: "Gonubie", lat: -32.9485, lng: 28.0182, address: "22 Main Rd, Gonubie, 5256", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8003`, email: `gonubie${EMAIL_SUFFIX}` },
  { type: "atm", name: "Mdantsane", lat: -32.9585, lng: 27.7582, address: "Mdantsane City, Mdantsane, 5219", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8004`, email: `mdantsane${EMAIL_SUFFIX}` },
  { type: "branch", name: "Quigney", lat: -33.0285, lng: 27.9282, address: "44 Esplanade, Quigney, 5201", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8005`, email: `quigney${EMAIL_SUFFIX}` },
  { type: "atm", name: "Cambridge", lat: -32.9785, lng: 27.8982, address: "12 Cambridge St, East London, 5201", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8006`, email: `cambridge${EMAIL_SUFFIX}` },
  { type: "branch", name: "King William's Town", lat: -32.8785, lng: 27.3982, address: "56 Alexandra Rd, King William's Town, 5601", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8007`, email: `kingwilliamstown${EMAIL_SUFFIX}` },
  { type: "atm", name: "Bhisho", lat: -32.8485, lng: 27.4382, address: "22 Independence Ave, Bhisho, 5605", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8008`, email: `bhisho${EMAIL_SUFFIX}` },
  { type: "branch", name: "Mthatha", lat: -31.5885, lng: 28.7882, address: "88 Nelson Mandela Dr, Mthatha, 5100", hours: HOURS, services: SERVICES, phone: `${PHONE_EL} 123 8009`, email: `mthatha${EMAIL_SUFFIX}` },
];
