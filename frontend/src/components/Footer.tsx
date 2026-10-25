const footerGroups = [
  {
    title: "Customer service",
    links: ["Contact us", "FAQ", "Shipping & delivery", "Returns"],
  },
  {
    title: "Shopping guide",
    links: ["How to order", "Payment methods", "Gift cards", "Store policies"],
  },
  {
    title: "My account",
    links: ["Login", "Orders", "Wishlist", "Manage profile"],
  },
];

const trustPoints = [
  "Fast delivery",
  "Secure payment",
  "7-day guarantee",
  "Support 24/7",
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 py-10">
        <div className="rounded-[28px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 text-white shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
                Stay in the loop
              </p>
              <h3 className="mt-2 text-2xl font-black">
                Get daily offers and product updates
              </h3>
            </div>

            <div className="flex w-full max-w-xl items-center gap-3 rounded-2xl bg-white/10 p-2">
              <input
                aria-label="Email address"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 text-sm text-white placeholder:text-slate-300 outline-none"
              />
              <button className="rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white hover:bg-orange-400">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-lg font-black text-white">
                D
              </div>
              <div>
                <p className="text-xl font-black text-orange-500">Digikala</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  MyStore
                </p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Your trusted digital marketplace for smarter shopping, curated
              deals, and everyday essentials.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-base font-black text-slate-800">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-orange-600">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {trustPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600"
            >
              {point}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 MyStore. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-orange-600">
              Privacy policy
            </a>
            <a href="#" className="hover:text-orange-600">
              Terms
            </a>
            <a href="#" className="hover:text-orange-600">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
