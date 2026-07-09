import type { Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gold-500/15 bg-navy-800/60 transition-colors hover:border-gold-500/40">
      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950">
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-gold-500/30 transition-transform duration-500 group-hover:scale-110"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 11h.01M15 11h.01M9 7h.01M15 7h.01"
          />
        </svg>
        <span className="absolute left-4 top-4 rounded-full border border-gold-500/40 bg-navy-950/80 px-3 py-1 text-xs font-medium tracking-wide text-gold-400">
          {property.type}
        </span>
      </div>

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.15em] text-gold-500/70">
          {property.location}
        </p>
        <h3 className="mt-2 font-serif text-xl text-foreground">
          {property.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-foreground/60">
          {property.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-gold-500/10 pt-4">
          <div className="flex gap-4 text-xs text-foreground/50">
            {property.beds !== undefined && <span>{property.beds} Beds</span>}
            {property.baths !== undefined && <span>{property.baths} Baths</span>}
            <span>{property.area}</span>
          </div>
        </div>

        <p className="mt-4 font-serif text-lg text-gradient-gold">
          {property.price}
        </p>
      </div>
    </article>
  );
}
