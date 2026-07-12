import type { Metadata } from "next";
import Link from "next/link";
import { values, mission, vision } from "@/lib/values";

export const metadata: Metadata = {
  title: "About | Dasips Ventures Limited",
  description:
    "Learn about Dasips Ventures Limited, our mission, values, and approach to property management, land consultancy, road construction, and drainage works.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            About Dasips
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Exceptional Property. Enduring Legacy.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/60">
            Dasips Ventures Limited is a dynamic and innovative company
            specializing in property management, land consultancy, road
            construction, and drainage works.
          </p>
        </div>
      </section>

      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground">
              Our Mission
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              {mission}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl leading-snug text-foreground">
              Our Vision
            </h2>
            <p className="mt-6 text-base leading-7 text-foreground/60">
              {vision}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-semibold tracking-wide text-gold-700 hover:text-gold-600"
            >
              Start a conversation &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
              Our Values
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
              What guides us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-navy-100 bg-navy-50 p-6"
              >
                <h3 className="font-serif text-lg text-gradient-gold">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-foreground/60">
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
