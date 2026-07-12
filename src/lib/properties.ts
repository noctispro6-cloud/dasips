export type Property = {
  slug: string;
  name: string;
  location: string;
  image: string;
  managedSince?: string;
};

export const properties: Property[] = [
  {
    slug: "kins-apartment",
    name: "Kins Apartment",
    location: "Ngariama",
    image: "/properties/kins-apartment.jpg",
  },
  {
    slug: "lusaka-flats",
    name: "Lusaka Flats",
    location: "Kiambuthi",
    image: "/properties/lusaka-flats.jpg",
  },
  {
    slug: "nice-view-apartments",
    name: "Nice View Apartments",
    location: "Kanjuru",
    image: "/properties/nice-view-apartments.jpg",
  },
  {
    slug: "jj-homes",
    name: "J.J. Homes",
    location: "Dallas Bonanza",
    image: "/properties/jj-homes.jpg",
  },
  {
    slug: "goshen",
    name: "Goshen",
    location: "Dallas Bonanza",
    image: "/properties/goshen.jpg",
  },
  {
    slug: "dallas-bonanza",
    name: "Dallas Bonanza Apartments",
    location: "Dallas Bonanza",
    image: "/properties/dallas-bonanza.jpg",
  },
  {
    slug: "dallas-near-beacon",
    name: "Dallas Apartments",
    location: "Dallas, near Beacon",
    image: "/properties/dallas-near-beacon.jpg",
  },
  {
    slug: "bamaco",
    name: "Bamaco Apartments",
    location: "Bamaco",
    image: "/properties/bamaco.jpg",
  },
];
