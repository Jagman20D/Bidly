import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Welcome to Bidly</h1>

      <Link href="/create-listing">
        <button style={{ padding: "10px 20px", marginTop: 20 }}>
          Create a Listing
        </button>
      </Link>
    </main>
  );
}
