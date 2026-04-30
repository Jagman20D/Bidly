import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "#f8fafc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 24,
          border: "1px solid rgba(148, 163, 184, 0.2)",
          background: "rgba(15, 23, 42, 0.95)",
          padding: "40px",
          boxShadow: "0 24px 80px rgba(15, 23, 42, 0.6)",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: 16, textAlign: "center" }}>
          Bidly-Market
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: 32, textAlign: "center", lineHeight: 1.7 }}>
          Build a better marketplace faster. Create listings, browse items, and launch your
          new auction platform with Supabase and Next.js.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <Link href="/create-listing" style={{ textDecoration: "none" }}>
            <button
              style={{
                minWidth: 180,
                padding: "14px 20px",
                borderRadius: 12,
                border: "none",
                background: "#22c55e",
                color: "#0f172a",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Create Listing
            </button>
          </Link>
          <Link href="/listings" style={{ textDecoration: "none" }}>
            <button
              style={{
                minWidth: 180,
                padding: "14px 20px",
                borderRadius: 12,
                border: "1px solid rgba(241, 245, 249, 0.2)",
                background: "transparent",
                color: "#f8fafc",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              View Listings
            </button>
          </Link>
        </div>

        <p style={{ marginTop: 32, fontSize: "0.9rem", color: "#94a3b8", textAlign: "center" }}>
          Deploy this app, fill in your Supabase keys, then start building your global marketplace.
        </p>
      </div>
    </main>
  );
}
