import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 9AM-5PM, Sat: 9AM-12PM";
const SERVICES = ["ATM", "Deposits", "Loans", "Consulting"];

/** ~18 Port Elizabeth / Gqeberha area branches and ATMs */
export const portElizabethBranches: BranchInput[] = [
  { type: "branch", name: "Port Elizabeth Main", lat: -33.9611, lng: 25.6149, address: "44 Govan Mbeki Ave, Port Elizabeth Central, 6001", hours: HOURS, services: SERVICES, phone: "+27 41 507 1234", email: "portelizabeth.main@capitec.co.za" },
  { type: "atm", name: "Greenacres", lat: -33.9525, lng: 25.5982, address: "Greenacres Shopping Centre, Port Elizabeth, 6045", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: "+27 41 507 1235", email: "greenacres@capitec.co.za" },
  { type: "branch", name: "Walmer", lat: -33.9825, lng: 25.5782, address: "22 Main Rd, Walmer, 6070", hours: HOURS, services: SERVICES, phone: "+27 41 507 1236", email: "walmer@capitec.co.za" },
  { type: "atm", name: "Summerstrand", lat: -33.9825, lng: 25.6582, address: "88 Marine Dr, Summerstrand, 6019", hours: HOURS, services: SERVICES, phone: "+27 41 507 1237", email: "summerstrand@capitec.co.za" },
  { type: "branch", name: "Uitenhage", lat: -33.7685, lng: 25.3982, address: "44 Caledon St, Uitenhage, 6229", hours: HOURS, services: SERVICES, phone: "+27 41 507 1238", email: "uitenhage@capitec.co.za" },
  { type: "atm", name: "Despatch", lat: -33.7985, lng: 25.4482, address: "12 Main Rd, Despatch, 6220", hours: HOURS, services: SERVICES, phone: "+27 41 507 1239", email: "despatch@capitec.co.za" },
  { type: "branch", name: "Motherwell", lat: -33.8185, lng: 25.5782, address: "Motherwell Mall, Motherwell, 6211", hours: HOURS, services: SERVICES, phone: "+27 41 507 1240", email: "motherwell@capitec.co.za" },
  { type: "atm", name: "Grahamstown", lat: -33.3085, lng: 26.5282, address: "56 High St, Grahamstown, 6139", hours: HOURS, services: SERVICES, phone: "+27 46 123 1241", email: "grahamstown@capitec.co.za" },
  { type: "branch", name: "Jeffreys Bay", lat: -34.0525, lng: 24.9182, address: "22 Da Gama Rd, Jeffreys Bay, 6330", hours: HOURS, services: SERVICES, phone: "+27 42 123 1242", email: "jeffreysbay@capitec.co.za" },
  { type: "atm", name: "Humansdorp", lat: -34.0325, lng: 24.7682, address: "88 Main Rd, Humansdorp, 6300", hours: HOURS, services: SERVICES, phone: "+27 42 123 1243", email: "humansdorp@capitec.co.za" },
  { type: "branch", name: "Graaff-Reinet", lat: -32.2525, lng: 24.5382, address: "12 Church St, Graaff-Reinet, 6280", hours: HOURS, services: SERVICES, phone: "+27 49 123 1244", email: "graaffreinet@capitec.co.za" },
  { type: "atm", name: "Cradock", lat: -32.1685, lng: 25.6182, address: "44 Stockenstrom St, Cradock, 5880", hours: HOURS, services: SERVICES, phone: "+27 48 123 1245", email: "cradock@capitec.co.za" },
  { type: "branch", name: "Port Alfred", lat: -33.5985, lng: 26.8982, address: "22 Main Rd, Port Alfred, 6170", hours: HOURS, services: SERVICES, phone: "+27 46 123 1246", email: "portalfred@capitec.co.za" },
  { type: "atm", name: "Alice", lat: -32.7885, lng: 26.8382, address: "12 Main Rd, Alice, 5700", hours: HOURS, services: SERVICES, phone: "+27 40 123 1247", email: "alice@capitec.co.za" },
  { type: "branch", name: "Queenstown", lat: -31.8985, lng: 26.8782, address: "88 Cathcart Rd, Queenstown, 5320", hours: HOURS, services: SERVICES, phone: "+27 45 123 1248", email: "queenstown@capitec.co.za" },
  { type: "atm", name: "East London Gateway", lat: -33.0185, lng: 27.9082, address: "East London Gateway, East London, 5241", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: "+27 43 123 1249", email: "eastlondongateway@capitec.co.za" },
  { type: "branch", name: "Somerset East", lat: -32.7225, lng: 25.5882, address: "12 Church St, Somerset East, 5850", hours: HOURS, services: SERVICES, phone: "+27 42 123 1250", email: "somerseteast@capitec.co.za" },
  { type: "atm", name: "Addo", lat: -33.5685, lng: 25.6982, address: "Main Rd, Addo, 6105", hours: HOURS, services: ["ATM", "Deposits", "Withdrawals"], phone: "+27 42 123 1251", email: "addo@capitec.co.za" },
];
