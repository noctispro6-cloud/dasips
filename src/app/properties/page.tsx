import type { Metadata } from "next";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Properties | Dasips Ventures Limited",
  description: "Properties managed by Dasips Ventures Limited.",
};

export default function PropertiesPage() {
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            Our Portfolio
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Properties We Manage
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/60">
            A selection of residential properties under Dasips Ventures
            Limited&rsquo;s property management.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
