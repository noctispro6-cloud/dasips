import Image from "next/image";
import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function Home() {
  const featured = properties.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gold-500/15">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-navy-700)_0%,_var(--color-navy-950)_70%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:px-8 lg:py-36">
          <Image
            src="/logo-mark.png"
            alt="Dasips Ventures Limited"
            width={96}
            height={96}
            className="h-20 w-20 lg:h-24 lg:w-24"
            priority
          />
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-gold-400/80">
            Dasips Ventures Limited
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
            Exceptional Properties.{" "}
            <span className="text-gradient-gold">Enduring Value.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-foreground/60">
            We curate distinguished residential and commercial real estate
            for clients who expect nothing less than excellence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/properties"
              className="rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gold-500/50 px-8 py-3 text-sm font-semibold tracking-wide text-gold-400 transition-colors hover:bg-gold-500/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-gold-500/15 bg-navy-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
              Who We Are
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              A trusted name in premium real estate
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              Dasips Ventures Limited brings together deep market expertise
              and a discerning eye for quality to connect clients with
              properties of lasting value &mdash; from private residences to
              landmark commercial developments.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-400 hover:text-gold-300"
            >
              Learn more about us &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "15+", label: "Years of Experience" },
              { value: "200+", label: "Properties Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "6", label: "Regions Covered" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-gold-500/15 bg-navy-800/60 p-6 text-center"
              >
                <p className="font-serif text-3xl text-gradient-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wide text-foreground/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="border-b border-gold-500/15 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
                Featured Listings
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
                Handpicked opportunities
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-sm font-semibold tracking-wide text-gold-400 hover:text-gold-300"
            >
              View all properties &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-navy-900">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h2 className="font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            Ready to find your next{" "}
            <span className="text-gradient-gold">property</span>?
          </h2>
          <p className="mt-6 text-base leading-7 text-foreground/60">
            Speak with our team to discuss your requirements and discover
            opportunities tailored to you.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
