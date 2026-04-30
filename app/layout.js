export const metadata = {
  title: "Bidly-Market - Buy, Sell & Trade Online",
  description: "Discover great deals on Bidly-Market, the modern marketplace for buying and selling items. Create listings, place bids, and find unique products from sellers worldwide.",
  keywords: ["marketplace", "buy sell", "online shopping", "auctions", "deals", "bidly-market"],
  authors: [{ name: "Bidly-Market Team" }],
  creator: "Bidly-Market",
  publisher: "Bidly-Market",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bidly-market.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bidly-Market - Buy, Sell & Trade Online",
    description: "Discover great deals on Bidly-Market, the modern marketplace for buying and selling items. Create listings, place bids, and find unique products from sellers worldwide.",
    url: "https://bidly-market.vercel.app",
    siteName: "Bidly-Market",
    images: [
      {
        url: "https://bidly-market.vercel.app/og-image.jpg", // You can add a custom OG image later
        width: 1200,
        height: 630,
        alt: "Bidly-Market",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bidly Marketplace - Buy, Sell & Trade Online",
    description: "Discover great deals on Bidly, the modern marketplace for buying and selling items.",
    images: ["https://bidly-market.vercel.app/og-image.jpg"],
    creator: "@bidly", // Update with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code", // Add this after setting up Google Search Console
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

