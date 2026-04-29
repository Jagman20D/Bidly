export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 flex items-center justify-center">
      <div className="max-w-xl px-6 py-10 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Bidly
        </h1>
        <p className="text-slate-300 mb-6 text-center">
          A simple marketplace where you can list items, place bids, and discover great deals.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold py-2.5 transition">
            Get Started
          </button>
          <button className="w-full rounded-lg border border-slate-600 hover:border-slate-400 text-slate-200 py-2.5 transition">
            View Listings
          </button>
        </div>
        <p className="mt-6 text-xs text-center text-slate-500">
          This is your Bidly landing page. If you can see this live, deployment is working.
        </p>
      </div>
    </main>
  );
}
