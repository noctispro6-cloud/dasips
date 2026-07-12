import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { services, additionalServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Dasips Ventures Limited",
  description:
    "Property management, land consultancy, road construction, and drainage works from Dasips Ventures Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            Our Services
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Dynamic and Innovative Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/60">
            Dasips Ventures Limited specializes in property management, land
            consultancy, road construction, and drainage works &mdash;
            delivering high-quality, sustainable, and cost-effective
            solutions that add value to communities.
          </p>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gold-600">
            Additional Services
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {additionalServices.map((item) => (
              <span
                key={item}
                className="rounded-full border border-gold-500/30 bg-navy-50 px-5 py-2 text-sm text-foreground/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
