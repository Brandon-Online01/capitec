import type { BranchInput } from "./branch-input";

const HOURS = "Mon-Fri: 8AM-6PM, Sat: 8AM-12PM";
const SERVICES = ["Loans", "Consulting", "ATM", "Deposits"];

const PHONE_JHB = "+27 11";
const EMAIL_SUFFIX = "@capitec.co.za";

/** ~42 Johannesburg area branches and ATMs */
export const johannesburgBranches: BranchInput[] = [
  { type: "branch", name: "Johannesburg CBD", lat: -26.2041, lng: 28.0473, address: "456 High St, Johannesburg CBD, 2000", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4001`, email: `johannesburg.cbd${EMAIL_SUFFIX}` },
  { type: "branch", name: "Sandton City", lat: -26.1085, lng: 28.0558, address: "Sandton City, Sandton, 2196", hours: "Mon-Sat: 9AM-6PM", services: [...SERVICES, "Foreign Exchange"], phone: `${PHONE_JHB} 123 4002`, email: `sandtoncity${EMAIL_SUFFIX}` },
  { type: "atm", name: "Rosebank", lat: -26.1458, lng: 28.0422, address: "88 Oxford Rd, Rosebank, 2196", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4003`, email: `rosebank${EMAIL_SUFFIX}` },
  { type: "branch", name: "Randburg", lat: -26.0954, lng: 28.0122, address: "22 Main Rd, Randburg, 2194", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4004`, email: `randburg${EMAIL_SUFFIX}` },
  { type: "atm", name: "Roodepoort", lat: -26.1625, lng: 27.8722, address: "56 Ontdekkers Rd, Roodepoort, 1724", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4005`, email: `roodepoort${EMAIL_SUFFIX}` },
  { type: "branch", name: "Edenvale", lat: -26.1388, lng: 28.1522, address: "12 Van Riebeeck Ave, Edenvale, 1610", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4006`, email: `edenvale${EMAIL_SUFFIX}` },
  { type: "atm", name: "Benoni", lat: -26.1885, lng: 28.3208, address: "44 Tom Jones St, Benoni, 1501", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4007`, email: `benoni${EMAIL_SUFFIX}` },
  { type: "branch", name: "Boksburg", lat: -26.2125, lng: 28.2582, address: "78 Commissioner St, Boksburg, 1460", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4008`, email: `boksburg${EMAIL_SUFFIX}` },
  { type: "atm", name: "Brakpan", lat: -26.2358, lng: 28.3682, address: "22 Boundary Rd, Brakpan, 1540", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4009`, email: `brakpan${EMAIL_SUFFIX}` },
  { type: "branch", name: "Kempton Park", lat: -26.1025, lng: 28.2322, address: "56 Voortrekker Rd, Kempton Park, 1620", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4010`, email: `kemptonpark${EMAIL_SUFFIX}` },
  { type: "atm", name: "Alberton", lat: -26.2685, lng: 28.1222, address: "88 Church St, Alberton, 1449", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4011`, email: `alberton${EMAIL_SUFFIX}` },
  { type: "branch", name: "Germiston", lat: -26.2185, lng: 28.1682, address: "12 Victoria St, Germiston, 1401", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4012`, email: `germiston${EMAIL_SUFFIX}` },
  { type: "atm", name: "Springs", lat: -26.2525, lng: 28.4422, address: "44 Main Reef Rd, Springs, 1559", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4013`, email: `springs${EMAIL_SUFFIX}` },
  { type: "branch", name: "Northcliff", lat: -26.1325, lng: 27.9582, address: "22 Beyers Naude Dr, Northcliff, 2195", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4014`, email: `northcliff${EMAIL_SUFFIX}` },
  { type: "atm", name: "Fourways", lat: -26.0225, lng: 28.0082, address: "Fourways Mall, Fourways, 2055", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4015`, email: `fourways${EMAIL_SUFFIX}` },
  { type: "branch", name: "Hyde Park", lat: -26.1325, lng: 28.0582, address: "Hyde Park Corner, Hyde Park, 2196", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4016`, email: `hydepark${EMAIL_SUFFIX}` },
  { type: "atm", name: "Eastgate", lat: -26.1425, lng: 28.1522, address: "Eastgate Shopping Centre, Bedfordview, 2008", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4017`, email: `eastgate${EMAIL_SUFFIX}` },
  { type: "branch", name: "Clearwater Mall", lat: -26.0825, lng: 27.8982, address: "Clearwater Mall, Roodepoort, 1724", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4018`, email: `clearwatermall${EMAIL_SUFFIX}` },
  { type: "atm", name: "Cresta", lat: -26.1225, lng: 27.9682, address: "Cresta Shopping Centre, Blackheath, 2195", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4019`, email: `cresta${EMAIL_SUFFIX}` },
  { type: "branch", name: "Southgate", lat: -26.2625, lng: 28.0582, address: "Southgate Mall, Johannesburg South, 2091", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4020`, email: `southgate${EMAIL_SUFFIX}` },
  { type: "atm", name: "Northgate", lat: -26.0825, lng: 28.0122, address: "Northgate Shopping Centre, Northriding, 2169", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4021`, email: `northgate${EMAIL_SUFFIX}` },
  { type: "branch", name: "Melrose Arch", lat: -26.1325, lng: 28.0782, address: "Melrose Arch, Johannesburg, 2196", hours: "Mon-Sun: 9AM-6PM", services: [...SERVICES, "Foreign Exchange"], phone: `${PHONE_JHB} 123 4022`, email: `melrosearch${EMAIL_SUFFIX}` },
  { type: "atm", name: "Soweto - Jabulani", lat: -26.2425, lng: 27.9082, address: "Jabulani Mall, Soweto, 1868", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4023`, email: `soweto.jabulani${EMAIL_SUFFIX}` },
  { type: "branch", name: "Soweto - Maponya", lat: -26.2585, lng: 27.9182, address: "Maponya Mall, Soweto, 1868", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4024`, email: `soweto.maponya${EMAIL_SUFFIX}` },
  { type: "atm", name: "Alexandra", lat: -26.1025, lng: 28.0982, address: "London Rd, Alexandra, 2090", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4025`, email: `alexandra${EMAIL_SUFFIX}` },
  { type: "branch", name: "Midrand", lat: -25.9825, lng: 28.1382, address: "Midrand Mall, Midrand, 1685", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4026`, email: `midrand${EMAIL_SUFFIX}` },
  { type: "atm", name: "Centurion Mall", lat: -25.8585, lng: 28.1882, address: "Centurion Mall, Centurion, 0157", hours: "Mon-Sat: 9AM-6PM", services: SERVICES, phone: `${PHONE_JHB} 123 4027`, email: `centurionmall${EMAIL_SUFFIX}` },
  { type: "branch", name: "Montecasino", lat: -26.0125, lng: 28.0122, address: "Montecasino Blvd, Fourways, 2055", hours: "Mon-Sun: 9AM-8PM", services: SERVICES, phone: `${PHONE_JHB} 123 4028`, email: `montecasino${EMAIL_SUFFIX}` },
  { type: "atm", name: "Sandton Gautrain", lat: -26.1085, lng: 28.0558, address: "Sandton Station, Sandton, 2196", hours: "Mon-Fri: 6AM-8PM", services: ["ATM", "Deposits", "Withdrawals"], phone: `${PHONE_JHB} 123 4029`, email: `sandton.gautrain${EMAIL_SUFFIX}` },
  { type: "branch", name: "Parkhurst", lat: -26.1425, lng: 28.0422, address: "44 4th Ave, Parkhurst, 2193", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4030`, email: `parkhurst${EMAIL_SUFFIX}` },
  { type: "atm", name: "Greenside", lat: -26.1385, lng: 28.0322, address: "22 Greenway Rd, Greenside, 2193", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4031`, email: `greenside${EMAIL_SUFFIX}` },
  { type: "branch", name: "Emmarentia", lat: -26.1525, lng: 28.0182, address: "88 Barry Hertzog Ave, Emmarentia, 2195", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4032`, email: `emmarentia${EMAIL_SUFFIX}` },
  { type: "atm", name: "Florida", lat: -26.1725, lng: 27.9082, address: "Florida Rd, Florida, 1710", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4033`, email: `florida${EMAIL_SUFFIX}` },
  { type: "branch", name: "Krugersdorp", lat: -26.1025, lng: 27.7682, address: "22 Paardekraal Dr, Krugersdorp, 1740", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4034`, email: `krugersdorp${EMAIL_SUFFIX}` },
  { type: "atm", name: "Randfontein", lat: -26.1825, lng: 27.7022, address: "56 Main St, Randfontein, 1760", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4035`, email: `randfontein${EMAIL_SUFFIX}` },
  { type: "branch", name: "Carletonville", lat: -26.4025, lng: 27.3982, address: "12 Commissioner St, Carletonville, 2500", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4036`, email: `carletonville${EMAIL_SUFFIX}` },
  { type: "atm", name: "Vereeniging", lat: -26.6725, lng: 27.9282, address: "88 Voortrekker St, Vereeniging, 1930", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4037`, email: `vereeniging${EMAIL_SUFFIX}` },
  { type: "branch", name: "Vanderbijlpark", lat: -26.7025, lng: 27.8382, address: "44 President St, Vanderbijlpark, 1911", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4038`, email: `vanderbijlpark${EMAIL_SUFFIX}` },
  { type: "atm", name: "Klerksdorp", lat: -26.8525, lng: 26.6682, address: "22 Church St, Klerksdorp, 2570", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4039`, email: `klerksdorp${EMAIL_SUFFIX}` },
  { type: "branch", name: "Potchefstroom", lat: -26.7158, lng: 27.1022, address: "56 James Moroka Ave, Potchefstroom, 2531", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4040`, email: `potchefstroom${EMAIL_SUFFIX}` },
  { type: "atm", name: "Welkom", lat: -27.9825, lng: 26.7382, address: "12 Church St, Welkom, 9460", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4041`, email: `welkom${EMAIL_SUFFIX}` },
  { type: "branch", name: "Virginia", lat: -28.1025, lng: 26.8582, address: "88 Main St, Virginia, 9430", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4042`, email: `virginia${EMAIL_SUFFIX}` },
  { type: "atm", name: "Kroonstad", lat: -27.6525, lng: 27.2322, address: "22 Church St, Kroonstad, 9500", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4043`, email: `kroonstad${EMAIL_SUFFIX}` },
  { type: "branch", name: "Parys", lat: -26.9025, lng: 27.4582, address: "44 Bree St, Parys, 9585", hours: HOURS, services: SERVICES, phone: `${PHONE_JHB} 123 4044`, email: `parys${EMAIL_SUFFIX}` },
];
