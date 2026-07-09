import type { Metadata } from "next";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Dasips Ventures Limited",
  description:
    "Get in touch with Dasips Ventures Limited to discuss your real estate requirements.",
};

const OFFICE_ADDRESS = "Kilimani, Nairobi, Kenya";
const OFFICE_LAT = -1.2905;
const OFFICE_LON = 36.7818;

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-gold-500/15 bg-navy-950">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
            Get In Touch
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-snug text-foreground sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground/60">
            Tell us about your property goals and a member of our team will
            be in touch shortly.
          </p>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-2xl text-foreground">
              Send us a message
            </h2>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h2 className="font-serif text-2xl text-foreground">
                Visit our office
              </h2>
              <ul className="mt-6 space-y-3 text-sm text-foreground/60">
                <li>{OFFICE_ADDRESS}</li>
                <li>
                  <a href="tel:+254700000000" className="hover:text-gold-400">
                    +254 700 000 000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dasips.com"
                    className="hover:text-gold-400"
                  >
                    info@dasips.com
                  </a>
                </li>
                <li>Monday &mdash; Friday, 8:00am &mdash; 5:00pm</li>
              </ul>
            </div>

            <LocationMap
              lat={OFFICE_LAT}
              lon={OFFICE_LON}
              label="Dasips Ventures Limited office location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
