import type { Metadata } from "next";
import LocationMap from "@/components/LocationMap";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Dasips Ventures Limited",
  description:
    "Get in touch with Dasips Ventures Limited to discuss your property management, land consultancy, road construction, or drainage works requirements.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
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

      <section className="bg-white">
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
                <li>{SITE.address}</li>
                {SITE.phones.map((phone, i) => (
                  <li key={phone}>
                    <a href={`tel:${SITE.phoneHrefs[i]}`} className="hover:text-gold-600">
                      {phone}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${SITE.email}`} className="hover:text-gold-600">
                    {SITE.email}
                  </a>
                </li>
                <li>{SITE.hours}</li>
              </ul>
            </div>

            <LocationMap
              lat={SITE.lat}
              lon={SITE.lon}
              label="Dasips Ventures Limited office location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
