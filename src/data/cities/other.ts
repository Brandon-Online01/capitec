import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 9AM-5PM, Sat: 9AM-12PM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Consulting"];

const PHONE_OTHER = "+27 14";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~6 branches and ATMs in smaller towns */
export const otherBranches: BranchInput[] = [
  { type: "branch", name: "Rustenburg", lat: -25.6685, lng: 27.2482, address: "88 Church St, Rustenburg, 0300", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3001`, email: `rustenburg${EMAIL_SUFFIX}` },
  { type: "atm", name: "Brits", lat: -25.6385, lng: 27.7782, address: "22 Walter St, Brits, 0250", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3002`, email: `brits${EMAIL_SUFFIX}` },
  { type: "branch", name: "Warmbaths", lat: -24.8825, lng: 28.2982, address: "44 Church St, Bela-Bela, 0480", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3003`, email: `warmbaths${EMAIL_SUFFIX}` },
  { type: "atm", name: "Vryheid", lat: -27.7685, lng: 30.7982, address: "12 Kerk St, Vryheid, 3100", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3004`, email: `vryheid${EMAIL_SUFFIX}` },
  { type: "branch", name: "Standerton", lat: -26.9485, lng: 29.2482, address: "56 President St, Standerton, 2430", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3005`, email: `standerton${EMAIL_SUFFIX}` },
  { type: "atm", name: "Secunda", lat: -26.5185, lng: 29.1982, address: "88 Trichardt Rd, Secunda, 2302", hours: HOURS, services: SERVICES, phone: `${PHONE_OTHER} 123 3006`, email: `secunda${EMAIL_SUFFIX}` },
];
