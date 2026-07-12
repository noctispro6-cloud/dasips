import type { Service } from "@/lib/services";
import { PropertyIcon, LandIcon, RoadIcon, DrainageIcon } from "@/components/icons";

const iconBySlug: Record<string, typeof PropertyIcon> = {
  "property-management": PropertyIcon,
  "land-consultancy": LandIcon,
  "road-construction": RoadIcon,
  "drainage-works": DrainageIcon,
};

const accentClasses = {
  navy: {
    ring: "border-navy-600/25",
    iconBg: "bg-navy-800",
    iconText: "text-gold-400",
    title: "text-foreground",
  },
  gold: {
    ring: "border-gold-500/35",
    iconBg: "bg-gold-500/20",
    iconText: "text-gold-700",
    title: "text-gradient-gold",
  },
  green: {
    ring: "border-green-500/35",
    iconBg: "bg-green-500/20",
    iconText: "text-green-700",
    title: "text-gradient-green",
  },
} as const;

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconBySlug[service.slug];
  const accent = accentClasses[service.accent];

  return (
    <article className={`rounded-2xl border ${accent.ring} bg-white p-7 shadow-sm`}>
      <div className={`flex h-14 w-14 items-center justify-center rounded-full ${accent.iconBg}`}>
        <Icon className={`h-7 w-7 ${accent.iconText}`} />
      </div>
      <h3 className={`mt-5 font-serif text-xl ${accent.title}`}>{service.title}</h3>
      <p className="mt-2 text-sm leading-6 text-foreground/60">{service.summary}</p>
      <ul className="mt-4 space-y-2 border-t border-navy-100 pt-4">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
            <span className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${accent.iconText}`} style={{ backgroundColor: "currentColor" }} />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
