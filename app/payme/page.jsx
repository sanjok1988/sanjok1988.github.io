// app/payme/page.jsx
"use client";

import { useMemo, useState } from "react";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function PaymePage() {
  const [amount, setAmount] = useState("149.00");
  const [currency, setCurrency] = useState("USD");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [reference, setReference] = useState(() =>
    `PM-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  );
  const [method, setMethod] = useState("card");
  const [isLoading, setIsLoading] = useState(false);

  const amountNumber = useMemo(() => {
    const cleaned = amount.replace(/[^\d.]/g, "");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }, [amount]);

  const fee = useMemo(() => {
    const base = amountNumber * 0.024; // demo fee
    return Math.min(Math.max(base, 0), 9.5);
  }, [amountNumber]);

  const total = useMemo(() => amountNumber + fee, [amountNumber, fee]);

  async function onPay(e) {
    e.preventDefault();
    setIsLoading(true);

    // Demo: replace with your real Payme/checkout call.
    await new Promise((r) => setTimeout(r, 900));

    setIsLoading(false);
    alert(
      `Payment initialized\n\nName: ${name || "-"}\nEmail: ${email || "-"}\nMethod: ${
        method
      }\nRef: ${reference}\nTotal: ${formatMoney(total, currency)}`
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(1200px_circle_at_10%_10%,rgba(56,189,248,0.22),transparent_35%),radial-gradient(900px_circle_at_90%_20%,rgba(168,85,247,0.18),transparent_45%),radial-gradient(900px_circle_at_40%_90%,rgba(34,197,94,0.12),transparent_45%)] bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.8)]" />
              Secure Checkout
            </div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Payme Checkout
            </h1>
            <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
              A clean, modern payment page UI for Next.js. Plug in your payment
              provider on submit.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Need help?
            </a>
            <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 sm:block">
              Reference: <span className="font-mono text-slate-100">{reference}</span>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-6 lg:grid-cols-5">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur">
              <div className="border-b border-white/10 p-6">
                <h2 className="text-lg font-semibold">Payment details</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Enter your information and choose a payment method.
                </p>
              </div>

              <form onSubmit={onPay} className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name">
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email">
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </Field>

                  <Field label="Amount">
                    <div className="flex gap-2">
                      <Select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="w-[110px]"
                        ariaLabel="Currency"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                      </Select>
                      <Input
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        inputMode="decimal"
                        placeholder="0.00"
                        required
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                      Demo fee applies. Replace with your real provider fees.
                    </p>
                  </Field>

                  <Field label="Reference">
                    <div className="flex gap-2">
                      <Input
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        className="font-mono"
                        required
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setReference(
                            `PM-${Math.random()
                              .toString(36)
                              .slice(2, 8)
                              .toUpperCase()}`
                          )
                        }
                        className="rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-100 transition hover:bg-white/10"
                        aria-label="Regenerate reference"
                      >
                        New
                      </button>
                    </div>
                  </Field>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-100">
                      Payment method
                    </h3>
                    <span className="text-xs text-slate-400">
                      Choose one to continue
                    </span>
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <MethodCard
                      title="Card"
                      subtitle="Visa, Mastercard"
                      selected={method === "card"}
                      onClick={() => setMethod("card")}
                    />
                    <MethodCard
                      title="Bank"
                      subtitle="Transfer"
                      selected={method === "bank"}
                      onClick={() => setMethod("bank")}
                    />
                    <MethodCard
                      title="Wallet"
                      subtitle="Balance"
                      selected={method === "wallet"}
                      onClick={() => setMethod("wallet")}
                    />
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                    {method === "card" && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Card number">
                          <Input placeholder="1234 5678 9012 3456" />
                        </Field>
                        <Field label="Name on card">
                          <Input placeholder="JANE DOE" />
                        </Field>
                        <Field label="Expiry (MM/YY)">
                          <Input placeholder="08/29" />
                        </Field>
                        <Field label="CVC">
                          <Input placeholder="123" />
                        </Field>
                      </div>
                    )}

                    {method === "bank" && (
                      <div className="space-y-2 text-sm text-slate-200">
                        <p className="font-medium">Bank transfer instructions</p>
                        <p className="text-slate-300">
                          After you click Pay, you will receive bank details and
                          a unique reference to include in your transfer.
                        </p>
                      </div>
                    )}

                    {method === "wallet" && (
                      <div className="space-y-2 text-sm text-slate-200">
                        <p className="font-medium">Pay with wallet</p>
                        <p className="text-slate-300">
                          You’ll be prompted to sign in and confirm the payment.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-400">
                    By continuing, you agree to the Terms and Privacy Policy.
                  </p>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={cx(
                      "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold",
                      "bg-gradient-to-r from-sky-500 via-blue-500 to-violet-500",
                      "shadow-[0_18px_55px_-22px_rgba(56,189,248,0.9)]",
                      "transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                    )}
                  >
                    {isLoading ? "Processing..." : `Pay ${formatMoney(total, currency)}`}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Summary */}
          <aside className="lg:col-span-2">
            <div className="sticky top-6 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h2 className="text-lg font-semibold">Order summary</h2>

                <div className="mt-5 space-y-3">
                  <Row label="Subtotal" value={formatMoney(amountNumber, currency)} />
                  <Row label="Processing fee" value={formatMoney(fee, currency)} />
                  <div className="h-px bg-white/10" />
                  <Row
                    label="Total"
                    value={formatMoney(total, currency)}
                    strong
                  />
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Reference</span>
                    <span className="font-mono text-xs text-slate-200">
                      {reference}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Environment</span>
                    <span className="text-xs text-slate-200">Production-ready UI</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-sm font-semibold">Trust & security</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-200/70" />
                    TLS-secured connection
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-200/70" />
                    PCI-style UI patterns (demo)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-200/70" />
                    Clear totals and reference tracking
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </section>

        <footer className="mt-12 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Payme. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium text-slate-300">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={cx(
        "w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-slate-100",
        "placeholder:text-slate-500 outline-none transition",
        "focus:border-sky-400/50 focus:ring-4 focus:ring-sky-500/15",
        className
      )}
    />
  );
}

function Select({ className, ariaLabel, children, ...props }) {
  return (
    <select
      {...props}
      aria-label={ariaLabel}
      className={cx(
        "rounded-xl border border-white/10 bg-black/30 px-3 py-3 text-sm text-slate-100",
        "outline-none transition focus:border-sky-400/50 focus:ring-4 focus:ring-sky-500/15",
        className
      )}
    >
      {children}
    </select>
  );
}

function MethodCard({ title, subtitle, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "group rounded-2xl border p-4 text-left transition",
        selected
          ? "border-sky-400/40 bg-sky-500/10 shadow-[0_0_0_4px_rgba(56,189,248,0.10)]"
          : "border-white/10 bg-white/5 hover:bg-white/10"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-100">{title}</div>
          <div className="mt-1 text-xs text-slate-400">{subtitle}</div>
        </div>
        <div
          className={cx(
            "mt-1 h-4 w-4 rounded-full border",
            selected ? "border-sky-300 bg-sky-400" : "border-white/20"
          )}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}

function Row({ label, value, strong }) {
  return (
    <div className="flex items-center justify-between">
      <span className={cx("text-sm", strong ? "text-slate-200" : "text-slate-400")}>
        {label}
      </span>
      <span className={cx("text-sm", strong ? "font-semibold text-white" : "text-slate-200")}>
        {value}
      </span>
    </div>
  );
}

function formatMoney(value, currency) {
  const n = Number.isFinite(value) ? value : 0;
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(n);
  } catch {
    return `${n.toFixed(2)} ${currency}`;
  }
}
