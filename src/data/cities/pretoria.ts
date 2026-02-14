import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 9AM-5PM, Sat: 9AM-1PM";
const SERVICES = ["Consulting", "Loans", "ATM", "Deposits"];

const PHONE_PTA = "+27 12";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~28 Pretoria area branches and ATMs */
export const pretoriaBranches: BranchInput[] = [
  { type: "branch", name: "Pretoria Central", lat: -25.7479, lng: 28.2293, address: "22 Church St, Pretoria Central, 0002", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5001`, email: `pretoria.central${EMAIL_SUFFIX}` },
  { type: "atm", name: "Arcadia", lat: -25.7425, lng: 28.2182, address: "88 Church St, Arcadia, 0083", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5002`, email: `arcadia${EMAIL_SUFFIX}` },
  { type: "branch", name: "Menlyn Park", lat: -25.7825, lng: 28.2782, address: "Menlyn Park Shopping Centre, Pretoria, 0063", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_PTA} 123 5003`, email: `menlynpark${EMAIL_SUFFIX}` },
  { type: "atm", name: "Centurion", lat: -25.8585, lng: 28.1882, address: "44 Lenchen Ave, Centurion, 0157", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5004`, email: `centurion${EMAIL_SUFFIX}` },
  { type: "branch", name: "Brooklyn", lat: -25.7625, lng: 28.2482, address: "12 Bronkhorst St, Brooklyn, 0181", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5005`, email: `brooklyn${EMAIL_SUFFIX}` },
  { type: "atm", name: "Hatfield", lat: -25.7485, lng: 28.2382, address: "56 Burnett St, Hatfield, 0028", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5006`, email: `hatfield${EMAIL_SUFFIX}` },
  { type: "branch", name: "Sunnyside", lat: -25.7525, lng: 28.2282, address: "88 Pretorius St, Sunnyside, 0002", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5007`, email: `sunnyside${EMAIL_SUFFIX}` },
  { type: "atm", name: "Wonderboom", lat: -25.6525, lng: 28.1982, address: "22 Lavender Rd, Wonderboom, 0084", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5008`, email: `wonderboom${EMAIL_SUFFIX}` },
  { type: "branch", name: "Gezina", lat: -25.7725, lng: 28.2582, address: "44 Steve Biko Rd, Gezina, 0035", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5009`, email: `gezina${EMAIL_SUFFIX}` },
  { type: "atm", name: "Montana", lat: -25.7025, lng: 28.2682, address: "Montana Park, Pretoria, 0182", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5010`, email: `montana${EMAIL_SUFFIX}` },
  { type: "branch", name: "Silver Lakes", lat: -25.7825, lng: 28.3182, address: "Silver Lakes Mall, Pretoria East, 0081", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_PTA} 123 5011`, email: `silverlakes${EMAIL_SUFFIX}` },
  { type: "atm", name: "Kolonnade", lat: -25.7225, lng: 28.2582, address: "Kolonnade Centre, Montana, 0182", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_PTA} 123 5012`, email: `kolonnade${EMAIL_SUFFIX}` },
  { type: "branch", name: "Irene Village Mall", lat: -25.8825, lng: 28.2182, address: "Irene Village Mall, Centurion, 0157", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_PTA} 123 5013`, email: `irenevillagemall${EMAIL_SUFFIX}` },
  { type: "atm", name: "Woodlands Blvd", lat: -25.8025, lng: 28.2482, address: "Woodlands Blvd, Pretoria East, 0081", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5014`, email: `woodlandsblvd${EMAIL_SUFFIX}` },
  { type: "branch", name: "Lynnwood", lat: -25.7625, lng: 28.2682, address: "88 Lynnwood Rd, Lynnwood, 0081", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5015`, email: `lynnwood${EMAIL_SUFFIX}` },
  { type: "atm", name: "Garsfontein", lat: -25.8025, lng: 28.2982, address: "22 Garsfontein Rd, Garsfontein, 0082", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5016`, email: `garsfontein${EMAIL_SUFFIX}` },
  { type: "branch", name: "Mamelodi", lat: -25.7025, lng: 28.3482, address: "Mamelodi Plaza, Mamelodi, 0122", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5017`, email: `mamelodi${EMAIL_SUFFIX}` },
  { type: "atm", name: "Soshanguve", lat: -25.5325, lng: 28.1082, address: "Soshanguve Plaza, Soshanguve, 0152", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5018`, email: `soshanguve${EMAIL_SUFFIX}` },
  { type: "branch", name: "Atteridgeville", lat: -25.7725, lng: 28.1282, address: "22 Proes St, Atteridgeville, 0008", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5019`, email: `atteridgeville${EMAIL_SUFFIX}` },
  { type: "atm", name: "Cullinan", lat: -25.6725, lng: 28.5182, address: "12 Oak Ave, Cullinan, 1000", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5020`, email: `cullinan${EMAIL_SUFFIX}` },
  { type: "branch", name: "Bronkhorstspruit", lat: -25.8025, lng: 28.7482, address: "44 Church St, Bronkhorstspruit, 1020", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5021`, email: `bronkhorstspruit${EMAIL_SUFFIX}` },
  { type: "atm", name: "Witbank", lat: -25.8725, lng: 29.2282, address: "88 Church St, Witbank, 1035", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5022`, email: `witbank${EMAIL_SUFFIX}` },
  { type: "branch", name: "Middelburg", lat: -25.7685, lng: 29.4682, address: "12 Voortrekker St, Middelburg, 1050", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5023`, email: `middelburg${EMAIL_SUFFIX}` },
  { type: "atm", name: "Groblersdal", lat: -25.1685, lng: 29.3982, address: "56 Kerk St, Groblersdal, 0470", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5024`, email: `groblersdal${EMAIL_SUFFIX}` },
  { type: "branch", name: "Modimolle", lat: -24.7025, lng: 28.4082, address: "22 Voortrekker St, Modimolle, 0510", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5025`, email: `modimolle${EMAIL_SUFFIX}` },
  { type: "atm", name: "Bela-Bela", lat: -24.8825, lng: 28.2982, address: "44 Church St, Bela-Bela, 0480", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5026`, email: `belabela${EMAIL_SUFFIX}` },
  { type: "branch", name: "Thaba Tshwane", lat: -25.7825, lng: 28.1982, address: "DF Malan Dr, Thaba Tshwane, 0143", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5027`, email: `thabatshwane${EMAIL_SUFFIX}` },
  { type: "atm", name: "Waterkloof", lat: -25.7825, lng: 28.2682, address: "44 Garsfontein Rd, Waterkloof, 0181", hours: HOURS, services: SERVICES, phone: `${PHONE_PTA} 123 5028`, email: `waterkloof${EMAIL_SUFFIX}` },
];
