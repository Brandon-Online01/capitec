import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8:30AM-4:30PM, Sat: 9AM-12PM";
const SERVICES = ["ATM", "Deposits", "Withdrawals", "Foreign Exchange"];

const PHONE_DBN = "+27 31";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~28 Durban area branches and ATMs */
export const durbanBranches: BranchInput[] = [
  { type: "branch", name: "Durban CBD", lat: -29.8587, lng: 31.0218, address: "100 West St, Durban Central, 4001", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6001`, email: `durban.cbd${EMAIL_SUFFIX}` },
  { type: "atm", name: "Durban North", lat: -29.8485, lng: 31.0382, address: "78 Umhlanga Dr, Durban North, 4051", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6002`, email: `durbannorth${EMAIL_SUFFIX}` },
  { type: "branch", name: "Umhlanga", lat: -29.7285, lng: 31.0882, address: "22 Lighthouse Rd, Umhlanga, 4320", hours: HOURS, services: [...SERVICES, "Consulting"], phone: `${PHONE_DBN} 123 6003`, email: `umhlanga${EMAIL_SUFFIX}` },
  { type: "atm", name: "Westville", lat: -29.8385, lng: 30.9482, address: "44 Jan Smuts Hwy, Westville, 3630", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6004`, email: `westville${EMAIL_SUFFIX}` },
  { type: "branch", name: "Pinetown", lat: -29.8125, lng: 30.8582, address: "88 Old Main Rd, Pinetown, 3610", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6005`, email: `pinetown${EMAIL_SUFFIX}` },
  { type: "atm", name: "Berea", lat: -29.8525, lng: 31.0082, address: "12 Berea Rd, Berea, 4001", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6006`, email: `berea${EMAIL_SUFFIX}` },
  { type: "branch", name: "Morningside", lat: -29.8425, lng: 31.0182, address: "56 Musgrave Rd, Morningside, 4001", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6007`, email: `morningside${EMAIL_SUFFIX}` },
  { type: "atm", name: "Gateway Theatre of Shopping", lat: -29.7185, lng: 31.0782, address: "Gateway Theatre of Shopping, Umhlanga, 4320", hours: "Mon-Sat: 9AM-7PM", services: SERVICES, phone: `${PHONE_DBN} 123 6008`, email: `gateway${EMAIL_SUFFIX}` },
  { type: "branch", name: "Pavilion", lat: -29.8025, lng: 30.8782, address: "Pavilion Shopping Centre, Westville, 3629", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_DBN} 123 6009`, email: `pavilion${EMAIL_SUFFIX}` },
  { type: "atm", name: "Chatsworth", lat: -29.9125, lng: 30.8982, address: "Chatsworth Centre, Chatsworth, 4092", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6010`, email: `chatsworth${EMAIL_SUFFIX}` },
  { type: "branch", name: "Phoenix", lat: -29.7225, lng: 31.0082, address: "Phoenix Plaza, Phoenix, 4068", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6011`, email: `phoenix${EMAIL_SUFFIX}` },
  { type: "atm", name: "Tongaat", lat: -29.5825, lng: 31.1282, address: "22 Main Rd, Tongaat, 4400", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6012`, email: `tongaat${EMAIL_SUFFIX}` },
  { type: "branch", name: "Ballito", lat: -29.5325, lng: 31.2182, address: "Ballito Junction, Ballito, 4420", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_DBN} 123 6013`, email: `ballito${EMAIL_SUFFIX}` },
  { type: "atm", name: "Richards Bay", lat: -28.7825, lng: 32.0382, address: "88 Mckenzie St, Richards Bay, 3900", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6014`, email: `richardsbay${EMAIL_SUFFIX}` },
  { type: "branch", name: "Empangeni", lat: -28.7525, lng: 31.8982, address: "44 Main St, Empangeni, 3880", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6015`, email: `empangeni${EMAIL_SUFFIX}` },
  { type: "atm", name: "Stanger", lat: -29.3285, lng: 31.2882, address: "12 King Shaka St, Stanger, 4450", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6016`, email: `stanger${EMAIL_SUFFIX}` },
  { type: "branch", name: "Port Shepstone", lat: -30.7425, lng: 30.4582, address: "88 Main St, Port Shepstone, 4240", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6017`, email: `portshepstone${EMAIL_SUFFIX}` },
  { type: "atm", name: "Scottburgh", lat: -30.2825, lng: 30.7582, address: "22 Main Rd, Scottburgh, 4180", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6018`, email: `scottburgh${EMAIL_SUFFIX}` },
  { type: "branch", name: "Margate", lat: -30.8585, lng: 30.3682, address: "44 Marine Dr, Margate, 4275", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6019`, email: `margate${EMAIL_SUFFIX}` },
  { type: "atm", name: "Newcastle", lat: -27.7525, lng: 29.9282, address: "88 Scott St, Newcastle, 2940", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6020`, email: `newcastle${EMAIL_SUFFIX}` },
  { type: "branch", name: "Ladysmith", lat: -28.5585, lng: 29.7782, address: "22 Murchison St, Ladysmith, 3370", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6021`, email: `ladysmith${EMAIL_SUFFIX}` },
  { type: "atm", name: "Pietermaritzburg", lat: -29.6025, lng: 30.3782, address: "56 Church St, Pietermaritzburg, 3201", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6022`, email: `pietermaritzburg${EMAIL_SUFFIX}` },
  { type: "branch", name: "Howick", lat: -29.4785, lng: 30.2282, address: "12 Main Rd, Howick, 3290", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6023`, email: `howick${EMAIL_SUFFIX}` },
  { type: "atm", name: "Hillcrest", lat: -29.7825, lng: 30.7682, address: "44 Old Main Rd, Hillcrest, 3650", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6024`, email: `hillcrest${EMAIL_SUFFIX}` },
  { type: "branch", name: "Kloof", lat: -29.8025, lng: 30.8582, address: "22 Village Rd, Kloof, 3610", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6025`, email: `kloof${EMAIL_SUFFIX}` },
  { type: "atm", name: "Amanzimtoti", lat: -30.0525, lng: 30.8882, address: "88 Kingsway, Amanzimtoti, 4125", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6026`, email: `amanzimtoti${EMAIL_SUFFIX}` },
  { type: "branch", name: "Umlazi", lat: -29.9625, lng: 30.8982, address: "Umlazi Mega City, Umlazi, 4031", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_DBN} 123 6027`, email: `umlazi${EMAIL_SUFFIX}` },
  { type: "atm", name: "Verulam", lat: -29.6485, lng: 31.0582, address: "12 Main Rd, Verulam, 4340", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6028`, email: `verulam${EMAIL_SUFFIX}` },
  { type: "branch", name: "Dundee", lat: -28.1585, lng: 30.2382, address: "44 Victoria St, Dundee, 3000", hours: HOURS, services: SERVICES, phone: `${PHONE_DBN} 123 6029`, email: `dundee${EMAIL_SUFFIX}` },
];
