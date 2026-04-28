export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "60px 20px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        Welcome to Bidly
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        A simple, clean marketplace where you can browse, post, and bid on items.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            background: "#fafafa",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Browse Listings</h2>
          <p style={{ color: "#666" }}>
            Explore items posted by the community and find great deals.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            background: "#fafafa",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Create a Listing</h2>
          <p style={{ color: "#666" }}>
            Post your own items and let others bid on them.
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            background: "#fafafa",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Place Bids</h2>
          <p style={{ color: "#666" }}>
            Participate in auctions and win items at great prices.
          </p>
        </div>
      </div>

      <footer style={{ color: "#aaa", marginTop: "40px" }}>
        © {new Date().getFullYear()} Bidly — Marketplace made simple
      </footer>
    </main>
  );
}
