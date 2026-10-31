"use client";

import { useCallback, useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
};

const emptyForm = {
  name: "",
  category: "",
  price: "",
  stock: "",
};

const categories = [
  "Smartphones",
  "Laptops",
  "Wearables",
  "Audio",
  "Home",
  "Gaming",
  "Beauty",
  "Sports",
];

const promoCards = [
  { title: "Supermarket deals", text: "From 1M Toman" },
  { title: "Tech offers", text: "Up to 40% off" },
  { title: "Fashion picks", text: "Fresh arrivals" },
];

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5192";

  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/products`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: Product[] = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load products");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    void Promise.resolve().then(loadProducts);
  }, [loadProducts]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim() || !form.category.trim()) {
      return;
    }

    const payload = {
      name: form.name.trim(),
      category: form.category.trim(),
      price: Number(form.price) || 0,
      stock: Number(form.stock) || 0,
    };

    const method = editingId !== null ? "PUT" : "POST";
    const url =
      editingId !== null
        ? `${apiUrl}/products/${editingId}`
        : `${apiUrl}/products`;

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to save product");
      }

      setForm(emptyForm);
      setEditingId(null);
      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to save product");
    }
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setForm({
      name: product.name,
      category: product.category,
      price: String(product.price),
      stock: String(product.stock),
    });
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`${apiUrl}/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Unable to delete product");
      }

      if (editingId === id) {
        setEditingId(null);
        setForm(emptyForm);
      }

      await loadProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete product");
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f6f8] text-slate-900">
      <div className="mx-auto max-w-350 px-4 py-6">
        <header className="rounded-[28px] bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-lg font-bold text-white">
                D
              </div>
              <div>
                <p className="text-xl font-black text-orange-500">Digikala</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                  MyStore edition
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-2xl items-center gap-3 rounded-2xl bg-slate-100 px-4 py-3">
              <span className="text-lg text-slate-400">⌕</span>
              <input
                aria-label="Search products"
                className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                placeholder="Search in products, brands and more"
              />
            </div>

            <button className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-600">
              Login / Register
            </button>
          </div>

          <nav className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-600"
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        <section className="mt-6 grid gap-5 xl:grid-cols-[1.7fr_0.9fr]">
          <div className="rounded-[28px] bg-linear-to-r from-orange-500 via-orange-400 to-amber-300 p-6 text-white shadow-lg shadow-orange-200">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-orange-100">
                  Flash Sale
                </p>
                <h1 className="mt-2 text-3xl font-black xl:text-5xl">
                  Smart tech for every day life
                </h1>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-orange-100">Up to</p>
                  <p className="text-3xl font-black">40% OFF</p>
                </div>
                <button className="rounded-full bg-white px-5 py-3 font-bold text-orange-600">
                  Shop now
                </button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {promoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  Offer
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-800">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[350px_minmax(0,1fr)]">
          <aside className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-800">
                {editingId !== null ? "Edit product" : "Add product"}
              </h2>
              <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-bold text-orange-600">
                Admin
              </span>
            </div>

            {error && (
              <div className="mb-4 rounded-2xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-600">
                  Product name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 outline-none focus:border-orange-300 focus:bg-white"
                  placeholder="e.g. Smart watch"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-600">
                  Category
                </label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 placeholder:text-slate-400 outline-none focus:border-orange-300 focus:bg-white"
                  placeholder="e.g. Wearables"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    Price
                  </label>
                  <input
                    name="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none focus:border-orange-300 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-600">
                    Stock
                  </label>
                  <input
                    name="stock"
                    type="number"
                    min="0"
                    step="1"
                    value={form.stock}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 outline-none focus:border-orange-300 focus:bg-white"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-orange-500 px-4 py-3 font-bold text-white transition hover:bg-orange-600"
                >
                  {editingId !== null ? "Update product" : "Add product"}
                </button>
                {editingId !== null && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingId(null);
                      setForm(emptyForm);
                    }}
                    className="rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 font-semibold text-slate-600"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </aside>

          <div className="space-y-5">
            <div className="flex items-center justify-between rounded-3xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Trending now
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-800">
                  Best sellers
                </h2>
              </div>
              <button className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                See all
              </button>
            </div>

            {loading ? (
              <div className="rounded-3xl bg-white p-10 text-center text-slate-600 shadow-sm ring-1 ring-slate-200">
                Loading products...
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
                {products.map((product) => (
                  <article
                    key={product.id}
                    className="rounded-[26px] bg-white p-4 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between">
                      <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600">
                        Top deal
                      </span>
                      <span className="text-xs text-slate-400">
                        {product.stock} left
                      </span>
                    </div>

                    <div className="mt-4 h-40 rounded-[22px] bg-linear-to-br from-slate-100 via-orange-50 to-amber-100" />

                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                      <span className="rounded-full bg-slate-100 px-2 py-1">
                        {product.category}
                      </span>
                      <span>★ 4.8</span>
                    </div>

                    <h3 className="mt-3 text-lg font-bold text-slate-800">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-400 line-through">
                      <span>$199.00</span>
                    </div>

                    <div className="mt-2 flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-black text-slate-900">
                          ${product.price.toFixed(2)}
                        </p>
                        <p className="text-xs text-green-600">Free shipping</p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(product)}
                          className="rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(product.id)}
                          className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs font-bold text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
