import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section className="border-b border-navy-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            What our clients say
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-navy-100 bg-navy-50 p-8"
            >
              <span className="font-serif text-4xl text-gold-500/60">
                &ldquo;
              </span>
              <blockquote className="-mt-4 flex-1 text-sm leading-6 text-foreground/70">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-navy-100 pt-4">
                <p className="font-serif text-base text-foreground">
                  {t.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-gold-600">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
