import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import PropertyCard from "@/components/PropertyCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { services } from "@/lib/services";
import { properties } from "@/lib/properties";
import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-navy-100">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--color-navy-50)_0%,_var(--background)_70%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center lg:px-8 lg:py-36">
          <Image
            src="/logo-mark.png"
            alt="Dasips Ventures Limited"
            width={112}
            height={112}
            className="h-24 w-24 lg:h-28 lg:w-28"
            priority
          />
          <p className="mt-8 text-xs uppercase tracking-[0.4em] text-gold-600">
            Dasips Ventures Limited
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-navy-950 sm:text-5xl lg:text-6xl">
            {SITE.headline[0]}{" "}
            <span className="text-gradient-gold">{SITE.headline[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl font-serif text-lg italic text-navy-700/80">
            {SITE.tagline}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-foreground/60">
            A dynamic and innovative company specializing in property
            management, land consultancy, road construction, and drainage
            works &mdash; delivering solutions that add value to communities.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-gold-600/50 px-8 py-3 text-sm font-semibold tracking-wide text-gold-700 transition-colors hover:bg-gold-500/10"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
              Who We Are
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-navy-950 sm:text-4xl">
              A dynamic and innovative company
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              Dasips Ventures Limited specializes in property management,
              land consultancy, road construction, and drainage works. We
              deliver high-quality, sustainable, and cost-effective solutions
              that add value to communities and create enduring legacies for
              generations.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-700 hover:text-gold-600"
            >
              Learn more about us &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "4", label: "Core Services" },
              { value: "100%", label: "Licensed & Reliable" },
              { value: "24/7", label: "Client Support" },
              { value: "2", label: "Trusted Partners" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-navy-100 bg-navy-50 p-6 text-center"
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

      {/* Services */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
                Our Services
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-navy-950 sm:text-4xl">
                Building Value. Delivering Excellence.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold tracking-wide text-gold-700 hover:text-gold-600"
            >
              View all services &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
                Our Portfolio
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-snug text-navy-950 sm:text-4xl">
                Properties We Manage
              </h2>
            </div>
            <Link
              href="/properties"
              className="text-sm font-semibold tracking-wide text-gold-700 hover:text-gold-600"
            >
              View all properties &rarr;
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Partners />
      <Testimonials />
      <FAQ />

      {/* Contact CTA */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8">
          <h2 className="font-serif text-3xl leading-snug text-white sm:text-4xl">
            Ready to start your next{" "}
            <span className="text-gradient-gold">project</span>?
          </h2>
          <p className="mt-6 text-base leading-7 text-white/60">
            Speak with our team to discuss your requirements and discover
            solutions tailored to you.
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
