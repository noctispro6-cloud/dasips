import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/properties", label: "Properties" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/properties", label: "Residential Sales" },
      { href: "/properties", label: "Commercial Leasing" },
      { href: "/contact", label: "Property Management" },
      { href: "/contact", label: "Investment Advisory" },
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
            <p className="mt-4 max-w-xs text-sm leading-6 text-foreground/60">
              Exceptional properties. Enduring value. Dasips Ventures Limited
              curates premium real estate opportunities for discerning
              clients.
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
                      className="text-sm text-foreground/60 transition-colors hover:text-gold-400"
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
            <ul className="mt-4 space-y-3 text-sm text-foreground/60">
              <li>Kilimani, Nairobi, Kenya</li>
              <li>
                <a href="tel:+254700000000" className="hover:text-gold-400">
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@dasips.com" className="hover:text-gold-400">
                  info@dasips.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gold-500/10 pt-8 text-xs text-foreground/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Dasips Ventures Limited. All rights reserved.</p>
          <p className="font-serif italic tracking-wide text-gold-500/70">
            Exceptional Properties. Enduring Value.
          </p>
        </div>
      </div>
    </footer>
  );
}
