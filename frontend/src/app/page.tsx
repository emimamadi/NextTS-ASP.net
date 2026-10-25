import Link from "next/link";
import WeatherBanner from "@/components/WeatherBanner";

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

const spotlightCards = [
  { title: "Supermarket deals", text: "From 1M Toman", color: "bg-orange-100" },
  { title: "Tech offers", text: "Up to 40% off", color: "bg-amber-100" },
  { title: "Fashion picks", text: "Fresh arrivals", color: "bg-rose-100" },
];

const featured = [
  { name: "Classic Tee", price: 29.99, category: "Apparel", tag: "Top deal" },
  {
    name: "Noise Cancelling Headphones",
    price: 89.9,
    category: "Electronics",
    tag: "Popular",
  },
  { name: "Eco Bottle", price: 14.5, category: "Lifestyle", tag: "New" },
  { name: "Running Shoes", price: 119.99, category: "Sports", tag: "Hot" },
  {
    name: "Smart Watch",
    price: 149.99,
    category: "Wearables",
    tag: "Best seller",
  },
  {
    name: "Bluetooth Speaker",
    price: 74.5,
    category: "Audio",
    tag: "Top deal",
  },
];

const collections = [
  { title: "Phone & tablet", subtitle: "Latest devices" },
  { title: "Home appliance", subtitle: "Smart living" },
  { title: "Fashion & beauty", subtitle: "Fresh arrivals" },
  { title: "Fitness & sport", subtitle: "Performance gear" },
];

const trustFeatures = [
  { title: "Free shipping", text: "Orders over $75" },
  { title: "Secure checkout", text: "Protected payment" },
  { title: "24/7 support", text: "Always available" },
  { title: "Easy returns", text: "Fast and simple" },
];

const dailyDeals = [
  { title: "Smart speakers", price: "$49.00", badge: "Today" },
  { title: "Portable SSD", price: "$119.00", badge: "Hot" },
  { title: "Desk lamp", price: "$29.00", badge: "New" },
  { title: "Wireless keyboard", price: "$64.00", badge: "Deal" },
];

const brandTiles = [
  "Apple",
  "Samsung",
  "Xiaomi",
  "Nike",
  "Sony",
  "Dell",
  "LG",
  "ASUS",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f6f8] text-slate-900">
      <div className="mx-auto max-w-[1400px] px-4 py-6">
        <section className="mt-6 grid gap-5 xl:grid-cols-[1.7fr_0.9fr]">
          <div className="rounded-[28px] bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 p-6 text-white shadow-lg shadow-orange-200">
            <div className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-sm font-medium text-orange-100">
                  Flash Sale
                </p>
                <h1 className="mt-2 text-3xl font-black xl:text-5xl">
                  Smart tech for everyday life
                </h1>
              </div>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm text-orange-100">Up to</p>
                  <p className="text-3xl font-black">40% OFF</p>
                </div>
                <Link
                  href="/products"
                  className="rounded-full bg-white px-5 py-3 font-bold text-orange-600"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {spotlightCards.map((card) => (
              <div
                key={card.title}
                className={`${card.color} rounded-[24px] p-5 shadow-sm ring-1 ring-slate-200`}
              >
                <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                  Offer
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-800">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6">
          <WeatherBanner />
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-lg text-orange-600">
                ✓
              </div>
              <h3 className="text-lg font-black text-slate-800">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{feature.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                Today’s picks
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-800">
                Daily deals
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-orange-600"
            >
              See more
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {dailyDeals.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-orange-600">
                    {item.badge}
                  </span>
                  <span className="text-xs text-slate-400">★ 4.9</span>
                </div>
                <div className="mt-4 h-28 rounded-[20px] bg-gradient-to-br from-slate-100 via-orange-50 to-amber-100" />
                <h3 className="mt-4 text-lg font-bold text-slate-800">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xl font-black text-slate-900">
                    {item.price}
                  </p>
                  <button className="rounded-xl bg-orange-500 px-3 py-2 text-xs font-bold text-white hover:bg-orange-600">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                Discover brands
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-800">
                Popular brands
              </h2>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {brandTiles.map((brand) => (
              <div
                key={brand}
                className="rounded-[20px] bg-slate-50 p-4 text-center text-sm font-bold text-slate-700 ring-1 ring-slate-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-800">
                Top collections
              </h2>
              <Link
                href="/products"
                className="text-sm font-semibold text-orange-600"
              >
                See all
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {collections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] bg-slate-50 p-4 ring-1 ring-slate-200"
                >
                  <div className="mb-3 h-20 rounded-[18px] bg-gradient-to-r from-orange-100 via-amber-50 to-slate-100" />
                  <p className="text-lg font-bold text-slate-800">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Trending now
                </p>
                <h2 className="mt-1 text-2xl font-black text-slate-800">
                  Best sellers
                </h2>
              </div>
              <Link
                href="/products"
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                See all
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
              {featured.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[24px] bg-slate-50 p-4 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-red-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-red-600">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-400">★ 4.8</span>
                  </div>

                  <div className="mt-4 h-32 rounded-[20px] bg-gradient-to-br from-slate-100 via-orange-50 to-amber-100" />

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span className="rounded-full bg-white px-2 py-1">
                      {item.category}
                    </span>
                    <span>Free shipping</span>
                  </div>

                  <h3 className="mt-3 text-lg font-bold text-slate-800">
                    {item.name}
                  </h3>
                  <div className="mt-3 flex items-end justify-between">
                    <div>
                      <p className="text-2xl font-black text-slate-900">
                        ${item.price.toFixed(2)}
                      </p>
                      <p className="text-xs text-slate-400 line-through">
                        $199.00
                      </p>
                    </div>
                    <button className="rounded-xl bg-orange-500 px-3 py-2 text-xs font-bold text-white hover:bg-orange-600">
                      Add to cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
