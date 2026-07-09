import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Dasips Ventures Limited",
  description:
    "Learn about Dasips Ventures Limited, our mission, values, and approach to real estate.",
};

const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in every transaction, building relationships that last well beyond a single sale.",
  },
  {
    title: "Excellence",
    description:
      "Every property in our portfolio is vetted for quality, location, and long-term value before it reaches our clients.",
  },
  {
    title: "Discretion",
    description:
      "We handle every engagement with the confidentiality and care our clients expect from a premium advisory partner.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-gold-500/15 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
            About Dasips
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Exceptional Properties. Enduring Value.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/60">
            Dasips Ventures Limited is a real estate company dedicated to
            connecting discerning clients with residential and commercial
            properties of lasting quality.
          </p>
        </div>
      </section>

      <section className="border-b border-gold-500/15 bg-navy-900">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground">
              Our Story
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              Founded on the belief that real estate should be both a sound
              investment and a source of lasting pride, Dasips Ventures
              Limited has grown into a trusted name across Kenya&rsquo;s
              residential and commercial property markets.
            </p>
            <p className="mt-4 text-base leading-7 text-foreground/60">
              Our team combines local market knowledge with an uncompromising
              standard of service &mdash; guiding clients from the first
              consultation through to a successful close, and beyond.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground">
              Our Mission
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              To deliver exceptional real estate opportunities matched with
              enduring value &mdash; empowering our clients to build wealth
              and legacy through property.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-400 hover:text-gold-300"
            >
              Start a conversation &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
              Our Values
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              What guides us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-gold-500/15 bg-navy-800/60 p-8"
              >
                <h3 className="font-serif text-xl text-gradient-gold">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-foreground/60">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
