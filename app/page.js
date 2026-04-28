import Link from "next/link";
import { supabase } from "./lib/supabaseClient";

export default async function Home() {
  const { data: listings, error } = await supabase
    .from("listings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Welcome to Bidly</h1>

      <Link href="/create-listing">
        <button style={{ padding: "10px 20px", marginTop: 20 }}>
          Create a Listing
        </button>
      </Link>

      <section style={{ marginTop: 40 }}>
        <h2>Latest Listings</h2>

        {!listings || listings.length === 0 && <p>No listings yet.</p>}

        {listings && listings.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 20 }}>
            {listings.map((listing) => (
              <div
                key={listing.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: 8,
                  padding: 16,
                }}
              >
                <h3>{listing.title}</h3>
                <p>{listing.description}</p>
                <p><strong>${listing.price}</strong></p>
                {listing.image_url && (
                  <img
                    src={listing.image_url}
                    alt={listing.title}
                    style={{ maxWidth: "100%", marginTop: 10 }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
