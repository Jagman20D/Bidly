import { createClient } from "../lib/supabaseClient";

export const dynamic = "force-dynamic";

export default async function ListingsPage() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return (
      <main style={{ maxWidth: 960, margin: "60px auto", padding: "0 24px" }}>
        <h1>Listings</h1>
        <p style={{ color: "#f97316" }}>
          Supabase is not configured. Please add `NEXT_PUBLIC_SUPABASE_URL` and
          `NEXT_PUBLIC_SUPABASE_ANON_KEY` to your `.env.local`.
        </p>
      </main>
    );
  }

  const supabase = createClient();
  const { data, error } = await supabase.from("listings").select("*").order("created_at", { ascending: false });

  if (error) {
    return (
      <main style={{ maxWidth: 960, margin: "60px auto", padding: "0 24px" }}>
        <h1>Listings</h1>
        <p style={{ color: "#b91c1c" }}>Failed to load listings: {error.message}</p>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 960, margin: "60px auto", padding: "0 24px" }}>
      <h1 style={{ marginBottom: 24 }}>Live Marketplace Listings</h1>

      {data && data.length > 0 ? (
        <div style={{ display: "grid", gap: 20 }}>
          {data.map((listing: any) => (
            <article
              key={listing.id}
              style={{
                border: "1px solid rgba(148, 163, 184, 0.25)",
                borderRadius: 16,
                padding: 24,
                background: "#f8fafc",
              }}
            >
              <h2 style={{ margin: "0 0 12px", fontSize: "1.5rem" }}>{listing.title}</h2>
              <p style={{ margin: "0 0 12px", lineHeight: 1.6 }}>{listing.description}</p>
              <p style={{ margin: 0, fontWeight: 700 }}>${listing.price?.toFixed(2)}</p>
            </article>
          ))}
        </div>
      ) : (
        <p>No listings yet. Add your first item!</p>
      )}
    </main>
  );
}
