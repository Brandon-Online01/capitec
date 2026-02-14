/**
 * SEO constants: app URL, developer, and company info for metadata and JSON-LD.
 * Set NEXT_PUBLIC_APP_URL in production for canonical URLs and Open Graph.
 */
const APP_URL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_APP_URL) ||
  "https://www.orrbit.co.za";

export const SEO = {
  appUrl: APP_URL,
  appName: "Capitec |",
  defaultTitle:
    "Capitec | Find Your Nearest Capitec Bank Branch or ATM in South Africa",
  defaultDescription:
    "Find your nearest Capitec Bank branch with our free interactive map. Search by location, view branch addresses, operating hours, ATMs, and services. Built by Orrbit for quick branch lookup across South Africa.",
  keywords: [
    "Capitec branches",
    "Capitec Bank branches",
    "nearest Capitec",
    "Capitec ATMs",
    "Capitec South Africa",
    "branch finder",
    "bank branch near me",
    "Capitec hours",
    "Orrbit",
  ],
  locale: "en_ZA",
  developer: {
    name: "Brandon N Nkawu",
    url: "https://www.linkedin.com/in/brandonnkawu/",
    email: "brandonnkawu01@gmail.com",
    website: "https://www.orrbit.co.za/",
  },
  company: {
    name: "Orrbit Systems",
    legalName: "Orrbit Technologies Incorporated",
    url: "https://www.orrbit.co.za/",
    description:
      "Orrbit builds software and digital solutions. The Capitec Branch Locator is a responsive map tool for finding Capitec Bank branches.",
  },
} as const;
