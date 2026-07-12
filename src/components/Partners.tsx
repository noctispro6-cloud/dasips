import Image from "next/image";
import { partners } from "@/lib/values";
import { notableProjects } from "@/lib/projects";

export default function Partners() {
  return (
    <section className="border-b border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
          Trusted Experience
        </p>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-foreground/60">
          Successfully participated in infrastructure and drainage projects
          alongside leading companies and authorities on both local and
          international standards.
        </p>

        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 min-w-[180px] items-center justify-center rounded-xl border border-navy-100 bg-white px-8 shadow-sm"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-2">
          {notableProjects.map((project) => (
            <div
              key={`${project.partner}-${project.location}`}
              className="flex items-center justify-between gap-4 rounded-xl border border-navy-100 bg-white px-6 py-4 shadow-sm"
            >
              <div>
                <p className="font-serif text-base text-foreground">
                  {project.service}
                </p>
                <p className="mt-1 text-sm text-foreground/60">
                  {project.location}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-navy-50 px-3 py-1 text-xs uppercase tracking-wide text-gold-700">
                {project.partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
