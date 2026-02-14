import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8:30AM-4:30PM, Sat: 8:30AM-12PM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Consulting"];

const PHONE_NEL = "+27 13";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~7 Nelspruit / Mbombela area branches and ATMs */
export const nelspruitBranches: BranchInput[] = [
  { type: "branch", name: "Nelspruit Central", lat: -25.4685, lng: 30.9782, address: "44 Ferreira St, Nelspruit, 1200", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9001`, email: `nelspruit.central${EMAIL_SUFFIX}` },
  { type: "atm", name: "Riverside Mall", lat: -25.4585, lng: 30.9882, address: "Riverside Mall, Nelspruit, 1201", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_NEL} 123 9002`, email: `riversidemall${EMAIL_SUFFIX}` },
  { type: "branch", name: "White River", lat: -25.3285, lng: 31.0182, address: "22 Main Rd, White River, 1240", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9003`, email: `whiteriver${EMAIL_SUFFIX}` },
  { type: "atm", name: "Malelane", lat: -25.4685, lng: 31.5182, address: "12 R40, Malelane, 1320", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9004`, email: `malelane${EMAIL_SUFFIX}` },
  { type: "branch", name: "Barberton", lat: -25.7885, lng: 31.0582, address: "56 Pilgrim St, Barberton, 1300", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9005`, email: `barberton${EMAIL_SUFFIX}` },
  { type: "atm", name: "Witrivier", lat: -25.3285, lng: 31.0282, address: "88 Main Rd, Witrivier, 1240", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9006`, email: `witrivier${EMAIL_SUFFIX}` },
  { type: "branch", name: "Hazyview", lat: -25.0485, lng: 31.1282, address: "22 Main Rd, Hazyview, 1242", hours: HOURS, services: SERVICES, phone: `${PHONE_NEL} 123 9007`, email: `hazyview${EMAIL_SUFFIX}` },
];
