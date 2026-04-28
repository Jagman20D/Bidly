import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Bidly</h1>

      <Link href="/create-listing">
        <button style={{ padding: "10px 20px", marginTop: "20px" }}>
          Create a Listing
        </button>
      </Link>
    </main>
  );
}

