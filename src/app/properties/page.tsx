import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Properties | Dasips Ventures Limited",
  description:
    "Browse residential and commercial properties curated by Dasips Ventures Limited.",
};

export default function PropertiesPage() {
  return (
    <>
      <section className="border-b border-gold-500/15 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
            Our Portfolio
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Properties
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground/60">
            A curated selection of residential and commercial properties
            across Kenya&rsquo;s most sought-after locations.
          </p>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
