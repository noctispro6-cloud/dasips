import { whyChooseUs, commitments } from "@/lib/values";

export default function WhyChooseUs() {
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-2xl bg-navy-950 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80">
              Why Choose Dasips
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-gold-400">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 10.5 L9 13.5 L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-green-500/25 bg-navy-50 p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-green-700">
              Our Commitment
            </p>
            <ul className="mt-6 space-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-green-600">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6 10.5 L9 13.5 L14 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
