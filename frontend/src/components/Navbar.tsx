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

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-[1400px] px-4 py-3">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-black text-white">
              D
            </div>
            <div>
              <p className="text-lg font-black text-orange-500">Digikala</p>
              <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                MyStore
              </p>
            </div>
          </Link>

          <div className="hidden flex-1 md:block">
            <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3">
              <span className="text-lg text-slate-400">⌕</span>
              <input
                aria-label="Search products"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Search products, brands and more"
              />
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <button className="hidden rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600 sm:inline-flex">
              Login / Register
            </button>

            <button
              aria-label="Cart"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
            >
              🛒
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                2
              </span>
            </button>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3">
          <nav className="hidden items-center gap-2 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "rounded-full px-4 py-2 text-sm font-semibold transition",
                    isActive
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-600",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/products"
            className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow hover:bg-orange-600 md:inline-flex"
          >
            Shop now
          </Link>
        </div>

        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:mt-4">
          {categories.map((category) => (
            <button
              key={category}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
            >
              {category}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
