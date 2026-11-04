"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/dashboard", label: "Dashboard" },
];

const categories = [
  "Smartphones",
  "Laptops",
  "Audio",
  "Wearables",
  "Home",
  "Gaming",
  "Beauty",
  "Sports",
];

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path strokeLinecap="round" d="m16 16 4.2 4.2" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M5.5 20c.5-3.5 2.8-5.5 6.5-5.5s6 2 6.5 5.5" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 4h2l2.2 11.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6.1"
      />
      <circle cx="10" cy="20" r="1" />
      <circle cx="17.5" cy="20" r="1" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_8px_24px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
      <div className="bg-slate-950 text-white">
        <p className="mx-auto max-w-350 px-4 py-2 text-center text-xs font-medium tracking-wide sm:text-sm">
          Great finds, fair prices <span className="px-1 text-orange-400">•</span>
          Free delivery on orders over $75
        </p>
      </div>

      <div className="mx-auto max-w-350 px-4">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 py-4 sm:py-5">
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500"
            aria-label="MyStore home"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black text-white shadow-lg shadow-orange-200 transition group-hover:-rotate-3 group-hover:bg-orange-600">
              D
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-black tracking-tight text-slate-900">
                Digikala
              </span>
              <span className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.24em] text-slate-400">
                MyStore
              </span>
            </span>
          </Link>

          <form
            role="search"
            className="order-last flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-400 transition focus-within:border-orange-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-orange-100 md:order-0 md:ml-3 md:flex-1"
          >
            <SearchIcon />
            <input
              aria-label="Search products"
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              placeholder="Search products, brands and more"
            />
            <span className="hidden rounded-md border border-slate-200 bg-white px-2 py-1 text-[10px] font-medium text-slate-400 lg:inline">
              FIND
            </span>
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              className="inline-flex h-10 items-center gap-2 rounded-xl px-2 text-sm font-semibold text-slate-700 transition hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 sm:px-3"
            >
              <AccountIcon />
              <span className="hidden sm:inline">Sign in</span>
            </Link>
            <span aria-hidden="true" className="hidden h-8 w-px bg-slate-200 sm:block" />
            <button
              type="button"
              aria-label="Cart, 2 items"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
            >
              <CartIcon />
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-orange-500 px-1 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 border-t border-slate-100 py-2.5">
          <nav
            aria-label="Main navigation"
            className="hidden shrink-0 items-center gap-1 md:flex"
          >
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "rounded-lg px-3.5 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-orange-50 text-orange-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-slate-200 md:block"
          />

          <nav
            aria-label="Product categories"
            className="flex min-w-0 gap-1.5 overflow-x-auto py-0.5 scrollbar-none [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className="whitespace-nowrap rounded-lg px-3 py-2 text-xs font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-orange-500 sm:text-sm"
              >
                {category}
              </button>
            ))}
          </nav>

          <Link
            href="/products"
            className="ml-auto hidden shrink-0 items-center gap-1 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-orange-200 transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 lg:inline-flex"
          >
            Shop now <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
