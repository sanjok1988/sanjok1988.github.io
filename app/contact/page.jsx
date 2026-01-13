// app/contact/page.jsx
"use client";

import { useState } from "react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: null }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.subject.trim()) e.subject = "Please add a subject.";
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length) {
      setErrors(eObj);
      return;
    }

    setIsLoading(true);
    try {
      // Replace with your API endpoint
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      setErrors({ submit: "Failed to send. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 py-16">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-semibold sm:text-4xl">Contact Us</h1>
          <p className="mt-2 text-sm text-slate-300">
            Have a question, feedback or need support? Send us a message and we'll get back within 24 hours.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <section className="md:col-span-2">
            <div className="rounded-2xl border border-white/6 bg-white/3 p-6">
              <form onSubmit={onSubmit} noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <LabelField label="Full name" htmlFor="name" error={errors.name}>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      autoComplete="name"
                    />
                  </LabelField>

                  <LabelField label="Email" htmlFor="email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      autoComplete="email"
                    />
                  </LabelField>

                  <div className="sm:col-span-2">
                    <LabelField label="Subject" htmlFor="subject" error={errors.subject}>
                      <Input
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                      />
                    </LabelField>
                  </div>

                  <div className="sm:col-span-2">
                    <LabelField label="Message" htmlFor="message" error={errors.message}>
                      <textarea
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                        rows={6}
                        className={cx(
                          "w-full rounded-xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-slate-100",
                          "resize-none placeholder:text-slate-500 outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-500/12"
                        )}
                      />
                    </LabelField>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="text-sm text-slate-300">
                    <span className="block">Prefer other channels?</span>
                    <a
                      href="mailto:support@example.com"
                      className="mt-1 inline-block text-sky-300 hover:underline"
                    >
                      support@example.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    {errors.submit && <div className="text-sm text-rose-400">{errors.submit}</div>}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={cx(
                        "rounded-xl px-5 py-3 text-sm font-semibold",
                        "bg-gradient-to-r from-sky-500 to-violet-500",
                        "shadow-[0_12px_40px_-12px_rgba(59,130,246,0.6)]",
                        "transition hover:brightness-105 disabled:opacity-60 disabled:cursor-not-allowed"
                      )}
                    >
                      {isLoading ? "Sending..." : "Send message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {sent && (
              <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-500/6 px-4 py-3 text-sm text-emerald-200">
                Thanks — your message was sent. We'll reply shortly.
              </div>
            )}
          </section>

          <aside className="rounded-2xl border border-white/6 bg-white/3 p-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-sm text-slate-300">
              We usually respond within one business day.
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <ContactRow label="Email" value="support@example.com" href="mailto:support@example.com" />
              <ContactRow label="Phone" value="+1 (555) 123-4567" href="tel:+15551234567" />
              <ContactRow label="Address" value="123 Elm Street, Suite 500, San Francisco, CA" />
            </div>

            <div className="mt-6 border-t border-white/6 pt-4 text-xs text-slate-400">
              By contacting us you agree to our <a href="#" className="text-sky-300 hover:underline">privacy policy</a>.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LabelField({ label, children, htmlFor, error }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-medium text-slate-300">{label}</span>
        {error ? <span className="text-xs text-rose-400">{error}</span> : null}
      </div>
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-slate-100",
        "placeholder:text-slate-500 outline-none transition",
        "focus:border-sky-400/50 focus:ring-4 focus:ring-sky-500/12"
      )}
    />
  );
}

function ContactRow({ label, value, href }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 flex-none rounded-lg bg-white/5 p-2 text-center text-sm leading-none">
        <span className="sr-only">{label}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={
            label === "Email"
              ? "M3 8.5V18a2 2 0 002 2h14a2 2 0 002-2V8.5M3 8.5L12 13l9-4.5M3 8.5V6a2 2 0 012-2h14a2 2 0 012 2v2.5"
              : label === "Phone"
              ? "M2 7.5A2.5 2.5 0 014.5 5h1A2.5 2.5 0 018 6.5L9 9a1 1 0 01-.2 1L7 12a11 11 0 005 5l1.5-1.8a1 1 0 011-.2l2.5 1a2.5 2.5 0 012.5 2.5v1A2.5 2.5 0 0119.5 22H18"
              : "M12 2.5c-4.69 0-8.5 3.81-8.5 8.5 0 4.689 3.81 8.5 8.5 8.5s8.5-3.811 8.5-8.5c0-4.689-3.81-8.5-8.5-8.5z"
          } />
        </svg>
      </div>
      <div className="grow">
        <div className="text-sm text-slate-300">{label}</div>
        {href ? (
          <a href={href} className="text-sm font-medium text-slate-100 hover:underline">
            {value}
          </a>
        ) : (
          <div className="text-sm font-medium text-slate-100">{value}</div>
        )}
      </div>
    </div>
  );
}
