import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Sign in | MyStore",
  description: "Sign in to your MyStore account.",
};

export default function LoginPage() {
  return (
    <main className="relative overflow-hidden bg-[#f7f5f2] px-4 py-10 sm:px-6 sm:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-amber-100/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white shadow-lg shadow-orange-500/20">
              D
            </span>
            <span>
              <span className="block text-lg font-black leading-tight text-slate-900">
                Digikala
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                MyStore
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-semibold text-slate-500 transition hover:bg-white hover:text-orange-600"
          >
            Back to store
          </Link>
        </div>

        <div className="grid overflow-hidden rounded-[30px] bg-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.28)] ring-1 ring-slate-200/80 lg:min-h-[610px] lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative flex min-h-[350px] flex-col justify-between overflow-hidden bg-[#20242c] p-7 text-white sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-20 h-72 w-72 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-44 -left-28 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                A better way to shop
              </span>
              <h1 className="mt-8 max-w-md text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                Find your
                <br />
                <span className="text-orange-400">next favorite.</span>
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
                Great finds, everyday essentials, and a little inspiration —
                all in one place.
              </p>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-3 sm:max-w-sm">
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <span className="text-2xl" aria-hidden="true">
                  ✦
                </span>
                <p className="mt-3 text-sm font-semibold">Curated finds</p>
                <p className="mt-1 text-xs text-slate-400">
                  Picked for your everyday
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur">
                <span className="text-2xl" aria-hidden="true">
                  ↗
                </span>
                <p className="mt-3 text-sm font-semibold">Fresh deals</p>
                <p className="mt-1 text-xs text-slate-400">
                  Something new to discover
                </p>
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center px-6 py-10 sm:px-12 lg:px-14">
            <div className="w-full max-w-sm">
              <div className="mb-8">
                <p className="text-sm font-bold text-orange-600">Welcome back</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
                  Sign in
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Use your email and password to access your account.
                </p>
              </div>

              <LoginForm />

              <p className="mt-7 border-t border-slate-100 pt-5 text-center text-xs leading-5 text-slate-400">
                Your shopping journey starts here.
              </p>
            </div>
          </section>
        </div>

        <p className="mt-5 text-center text-xs text-slate-400">
          © 2026 MyStore
        </p>
      </div>
    </main>
  );
}
