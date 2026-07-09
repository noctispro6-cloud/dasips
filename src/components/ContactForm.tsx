"use client";

import { useState, type FormEvent } from "react";

const inputClasses =
  "w-full rounded-lg border border-gold-500/20 bg-navy-800/60 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-gold-500/60 focus:outline-none";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-6 rounded-2xl border border-gold-500/30 bg-navy-800/60 p-8 text-center">
        <p className="font-serif text-xl text-gradient-gold">Thank you</p>
        <p className="mt-2 text-sm leading-6 text-foreground/60">
          Your message has been received. A member of our team will be in
          touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className={inputClasses}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className={inputClasses}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className={inputClasses}
      />
      <textarea
        name="message"
        placeholder="Tell us about your requirements"
        rows={5}
        required
        className={inputClasses}
      />
      <button
        type="submit"
        className="mt-2 rounded-full bg-gold-500 px-8 py-3 text-sm font-semibold tracking-wide text-navy-950 transition-colors hover:bg-gold-400"
      >
        Send Message
      </button>
    </form>
  );
}
