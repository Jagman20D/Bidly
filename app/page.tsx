export default function Home() {
  return (
    <main style={{
      padding: "40px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Welcome to Bidly
      </h1>

      <p style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#555" }}>
        A simple marketplace where you can browse, post, and bid on listings.
      </p>

      <section style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fafafa"
      }}>
        <h2 style={{ marginBottom: "10px" }}>Get Started</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>Browse listings</li>
          <li>Create your own listing</li>
          <li>Place bids and win items</li>
        </ul>
      </section>

      <footer style={{ marginTop: "40px", color: "#888" }}>
        © {new Date().getFullYear()} Bidly
      </footer>
    </main>
  );
}
