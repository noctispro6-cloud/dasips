export type Service = {
  slug: string;
  title: string;
  accent: "navy" | "gold" | "green";
  summary: string;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "property-management",
    title: "Property Management",
    accent: "navy",
    summary:
      "End-to-end management of residential and commercial property, from rent collection to maintenance.",
    items: [
      "Residential & Commercial Property Management",
      "Rent Collection",
      "Tenant Management",
      "Property Maintenance & Facility Management",
    ],
  },
  {
    slug: "land-consultancy",
    title: "Land Consultancy",
    accent: "green",
    summary:
      "Guidance across land acquisition, surveying, and planning to help you invest with confidence.",
    items: [
      "Land Acquisition",
      "Site Identification & Feasibility",
      "Survey Coordination",
      "Land Use Planning",
      "Investment Advisory",
    ],
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    accent: "gold",
    summary:
      "Access and estate road construction built to last, from earthworks through civil engineering.",
    items: ["Access Roads", "Estate Roads", "Earthworks", "Grading & Compaction", "Civil Engineering Works"],
  },
  {
    slug: "drainage-works",
    title: "Drainage Works",
    accent: "navy",
    summary:
      "Storm water and drainage infrastructure that protects property and communities alike.",
    items: [
      "Storm Water Drainage",
      "Culverts Installation",
      "Drain Construction",
      "Drainage Rehabilitation",
      "Erosion Control Solutions",
    ],
  },
];

export const additionalServices = [
  "Project Management",
  "Quantity Surveying",
  "Civil Engineering Consultancy",
  "Feasibility Studies",
  "Maintenance & Aftercare",
];
