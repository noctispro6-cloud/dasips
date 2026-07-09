"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-navy-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/logo-mark.png"
            alt="Dasips Ventures Limited"
            width={44}
            height={44}
            className="h-10 w-10 lg:h-11 lg:w-11"
            priority
          />
          <span className="font-serif text-lg tracking-[0.2em] text-gradient-gold uppercase lg:text-xl">
            Dasips
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gold-300/80 transition-colors hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full border border-gold-500/60 px-5 py-2 text-sm font-medium tracking-wide text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-950 md:inline-block"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          className="text-gold-400 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-gold-500/20 bg-navy-950 px-6 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gold-300/90 hover:bg-navy-800 hover:text-gold-400"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-gold-500/60 px-3 py-2 text-center text-sm font-medium text-gold-400 hover:bg-gold-500 hover:text-navy-950"
          >
            Book a Consultation
          </Link>
        </nav>
      )}
    </header>
  );
}
