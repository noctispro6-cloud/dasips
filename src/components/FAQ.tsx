import { faqs } from "@/lib/faqs";

export default function FAQ() {
  return (
    <section className="border-b border-navy-100 bg-navy-50">
      <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600">
            FAQ
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-snug text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-14 divide-y divide-navy-100 border-t border-b border-navy-100">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-foreground marker:content-none">
                {faq.question}
                <span className="shrink-0 text-xl text-gold-600 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-foreground/60">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
