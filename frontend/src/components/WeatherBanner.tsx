"use client";

import { useEffect, useState } from "react";

type WeatherForecast = {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

export default function WeatherBanner() {
  const [forecast, setForecast] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5192";

    fetch(`${apiUrl}/weatherforecast`, { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        return response.json();
      })
      .then((data: WeatherForecast[]) => setForecast(data))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const today = forecast[0];

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/15 via-slate-900 to-blue-500/15 p-5 shadow-lg shadow-cyan-950/20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Weather
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Today&apos;s forecast
          </h3>
        </div>
        <span className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
          Live
        </span>
      </div>

      {loading && <p className="mt-4 text-slate-300">Loading weather...</p>}

      {error && <p className="mt-4 text-red-300">{error}</p>}

      {!loading && !error && today && (
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-4xl font-bold text-cyan-300">
              {today.temperatureC}°C
            </p>
            <p className="mt-1 text-lg text-slate-200">{today.summary}</p>
          </div>
          <div className="text-right text-sm text-slate-300">
            <p>{today.date}</p>
            <p>{today.temperatureF}°F</p>
          </div>
        </div>
      )}
    </div>
  );
}
