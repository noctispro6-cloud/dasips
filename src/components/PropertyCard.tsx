import Image from "next/image";
import type { Property } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
      <div className="relative h-56 w-full">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-foreground">{property.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-foreground/60">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-gold-600">
            <path
              d="M10 18s6-5.5 6-10a6 6 0 1 0-12 0c0 4.5 6 10 6 10Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="8" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          {property.location}
        </p>
        <p className="mt-3 inline-block rounded-full bg-navy-50 px-3 py-1 text-xs uppercase tracking-wide text-navy-700">
          Managed by Dasips
        </p>
      </div>
    </article>
  );
}
