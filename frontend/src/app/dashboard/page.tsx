"use client";

import { useEffect, useMemo, useState } from "react";
import WeatherBanner from "@/components/WeatherBanner";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5192";

  useEffect(() => {
    fetch(`${apiUrl}/products`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok)
          throw new Error(`Request failed with status ${response.status}`);
        return response.json();
      })
      .then((data: Product[]) => setProducts(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [apiUrl]);

  const totalInventory = useMemo(
    () => products.reduce((sum, item) => sum + item.stock, 0),
    [products],
  );

  const totalValue = useMemo(
    () => products.reduce((sum, item) => sum + item.price * item.stock, 0),
    [products],
  );

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-400">
            MyStore
          </p>
          <h1 className="mt-3 text-4xl font-bold">Dashboard</h1>
          <p className="mt-2 text-slate-300">
            Overview of weather and store performance.
          </p>
        </header>

        <WeatherBanner />

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Products
            </p>
            <p className="mt-3 text-3xl font-bold text-white">
              {loading ? "..." : products.length}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Inventory
            </p>
            <p className="mt-3 text-3xl font-bold text-white">
              {loading ? "..." : totalInventory}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Store value
            </p>
            <p className="mt-3 text-3xl font-bold text-white">
              {loading ? "..." : `$${totalValue.toFixed(2)}`}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-5 text-2xl font-semibold text-cyan-400">
            Recent products
          </h2>

          {loading ? (
            <div className="rounded-xl border border-slate-700 bg-slate-950 p-6 text-slate-300">
              Loading store data...
            </div>
          ) : error ? (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-6 text-red-200">
              {error}
            </div>
          ) : (
            <div className="space-y-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950 p-4"
                >
                  <div>
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-sm text-slate-400">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-cyan-300">
                      ${product.price.toFixed(2)}
                    </p>
                    <p className="text-sm text-slate-400">
                      {product.stock} left
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
