import {
  ownership,
  valuation,
  stewardship
} from "../assets";

export const navLinks = [
  {
    id: "Essence",
    title: "Essence",
  },
  {
    id: "Collection",
    title: "Collection",
  },
  {
    id: "Services",
    title: "Services",
  },
  {
    id: "Access",
    title: "Access",
  },
];

const stats = [
  {
    title: "Countries Present",
    content: "32",
  },
  {
    title: "Private Estates",
    content: "46",
  },
  {
    title: "Circle Members",
    content: "51",
  },
];

const collections = [
  {
    title: "Quiet Excellence",
    company_name: "The highest segment of global real estate.",
    iconBg: "#EBE1CF",
    points: [
      "Every estate in the Collection belongs to the highest segment of global real estate — architecturally, geographically, and financially."
    ],
  },
  {
    title: "Stories Live Here",
    company_name: "History held. Future invited.",
    iconBg: "#EBE1CF",
    points: [
      "Some properties hold centuries of legacy. Others are pristine stages, waiting to hold new meaning. Every home in the Collection carries narrative potential."
    ],
  },
  {
    title: "Beyond Borders",
    company_name: "A collection without geography.",
    iconBg: "#EBE1CF",
    points: [
      "From alpine retreats to desert monoliths — each place is defined not by location, but by atmosphere."
    ],
  },
  {
    title: "No Two Alike",
    company_name: "Singular in form, soul, and setting.",
    iconBg: "#EBE1CF",
    points: [
      "We do not collect types. Each estate is irreproducible — shaped by its own geometry, atmosphere, and relationship to its surroundings."
    ],
  },
];

const services = [
  {
    name: "Ownership Transfers",
    description:
      "We facilitate confidential transitions of high-value estates between trusted parties. Every transfer is handled off-market, guided by legal precision and cultural sensitivity. Whether between families, entities, or generations — discretion is our first principle.",
    image: ownership
  },
  {
    name: "Valuation & Negotiation",
    description:
      "Our valuation process is bespoke, factoring architectural merit, provenance, and long-term asset potential. Negotiations are conducted silently, often between parties who may never meet. Trust and nuance outweigh exposure and speed.",
    image: valuation
  },
  {
    name: "Asset Stewardship",
    description:
      "We don’t just manage properties — we preserve legacies. From architectural conservation to generational wealth management, our stewardship ensures estates retain their value, dignity, and long-term significance. We act as custodians, not controllers.",
    image: stewardship
  },
];

export { stats, collections, services };