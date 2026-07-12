import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/properties", label: "Properties" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/services", label: "Property Management" },
      { href: "/services", label: "Land Consultancy" },
      { href: "/services", label: "Road Construction" },
      { href: "/services", label: "Drainage Works" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/logo-mark.png" alt="Dasips Ventures Limited" width={40} height={40} className="h-10 w-10" />
              <span className="font-serif text-lg tracking-[0.2em] text-gradient-gold uppercase">
                Dasips
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              {SITE.tagline} Dasips Ventures Limited delivers property
              management, land consultancy, road construction, and drainage
              works across Kenya.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-gold-400">
                {col.heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-gold-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.15em] text-gold-400">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li>{SITE.address}</li>
              {SITE.phones.map((phone, i) => (
                <li key={phone}>
                  <a href={`tel:${SITE.phoneHrefs[i]}`} className="hover:text-gold-400">
                    {phone}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-400">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-500/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Dasips Ventures Limited. All rights reserved.</p>
          <p className="font-serif italic tracking-wide text-gold-500/70">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
