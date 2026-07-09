export type Property = {
  slug: string;
  title: string;
  location: string;
  price: string;
  type: "Residential" | "Commercial" | "Land";
  beds?: number;
  baths?: number;
  area: string;
  description: string;
};

export const properties: Property[] = [
  {
    slug: "kilimani-skyline-residence",
    title: "Kilimani Skyline Residence",
    location: "Kilimani, Nairobi",
    price: "KES 45,000,000",
    type: "Residential",
    beds: 4,
    baths: 5,
    area: "3,800 sq ft",
    description:
      "A refined penthouse with panoramic city views, private elevator access, and floor-to-ceiling glazing throughout.",
  },
  {
    slug: "karen-garden-estate",
    title: "Karen Garden Estate",
    location: "Karen, Nairobi",
    price: "KES 120,000,000",
    type: "Residential",
    beds: 6,
    baths: 7,
    area: "1.2 acres",
    description:
      "A gated estate set within mature gardens, featuring a private pool, staff quarters, and a dedicated home theatre.",
  },
  {
    slug: "westlands-corporate-tower",
    title: "Westlands Corporate Tower",
    location: "Westlands, Nairobi",
    price: "KES 350,000,000",
    type: "Commercial",
    area: "22,000 sq ft",
    description:
      "A Grade-A office tower with premium finishes, backup power, and prime frontage along a key business corridor.",
  },
  {
    slug: "diani-beachfront-villa",
    title: "Diani Beachfront Villa",
    location: "Diani, Kwale",
    price: "KES 95,000,000",
    type: "Residential",
    beds: 5,
    baths: 6,
    area: "0.8 acres",
    description:
      "A private beachfront villa with uninterrupted ocean views, infinity pool, and direct beach access.",
  },
  {
    slug: "runda-executive-villa",
    title: "Runda Executive Villa",
    location: "Runda, Nairobi",
    price: "KES 78,000,000",
    type: "Residential",
    beds: 5,
    baths: 6,
    area: "0.5 acres",
    description:
      "An executive residence combining contemporary architecture with lush landscaped grounds in a serene, secure neighborhood.",
  },
  {
    slug: "thika-road-industrial-park",
    title: "Thika Road Industrial Park",
    location: "Thika Road, Nairobi",
    price: "KES 210,000,000",
    type: "Commercial",
    area: "5 acres",
    description:
      "A secure, purpose-built industrial park with warehousing, loading bays, and excellent highway access.",
  },
];
