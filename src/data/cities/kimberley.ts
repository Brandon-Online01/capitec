import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8:30AM-4:30PM, Sat: 8:30AM-11:30AM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Consulting"];

const PHONE_KIM = "+27 53";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~5 Kimberley area branches and ATMs */
export const kimberleyBranches: BranchInput[] = [
  { type: "branch", name: "Kimberley Central", lat: -28.7385, lng: 24.7582, address: "88 Main St, Kimberley, 8301", hours: HOURS, services: SERVICES, phone: `${PHONE_KIM} 123 2001`, email: `kimberley.central${EMAIL_SUFFIX}` },
  { type: "atm", name: "Diamond Pavilion", lat: -28.7285, lng: 24.7682, address: "Diamond Pavilion Mall, Kimberley, 8301", hours: "Mon-Sat: 9AM-5PM", services: SERVICES, phone: `${PHONE_KIM} 123 2002`, email: `diamondpavilion${EMAIL_SUFFIX}` },
  { type: "branch", name: "Galeshewe", lat: -28.7485, lng: 24.7782, address: "22 Phakamile St, Galeshewe, 8345", hours: HOURS, services: SERVICES, phone: `${PHONE_KIM} 123 2003`, email: `galeshewe${EMAIL_SUFFIX}` },
  { type: "atm", name: "Upington", lat: -28.4585, lng: 21.2382, address: "44 Scott St, Upington, 8800", hours: HOURS, services: SERVICES, phone: `${PHONE_KIM} 123 2004`, email: `upington${EMAIL_SUFFIX}` },
  { type: "branch", name: "Kuruman", lat: -27.4585, lng: 23.4482, address: "12 Main St, Kuruman, 8460", hours: HOURS, services: SERVICES, phone: `${PHONE_KIM} 123 2005`, email: `kuruman${EMAIL_SUFFIX}` },
];
