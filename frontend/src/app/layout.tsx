import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// Cache-busting parameter to force social platforms to refresh
const cacheVersion = "v2024-12-17";

export const metadata: Metadata = {
  title: "Lendro.AI - Agentic AI for Lending | Autonomous AI Agents Transform Lending Operations",
  description: "Transform your lending operations with Lendro.AI's autonomous AI agents. Experience unprecedented intelligence in loan origination, credit analysis, servicing, and collections.",
  keywords: "AI lending, agentic AI, loan management, credit analysis, autonomous AI agents, lending automation, financial technology",
  authors: [{ name: "Lendro.AI Team" }],
  creator: "Lendro.AI",
  publisher: "Lendro.AI",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" }
    ],
    apple: { url: "/favicon.svg", type: "image/svg+xml" }
  },
  openGraph: {
    title: "Lendro.AI - Agentic AI for Intelligent Lending",
    description: "Autonomous AI agents that transform lending operations with unprecedented intelligence",
    url: "https://lendro.ai",
    siteName: "Lendro.AI",
    images: [
      {
        url: `https://lendro.ai/og-image.png?${cacheVersion}`,
        width: 1200,
        height: 630,
        alt: "Lendro.AI - Autonomous AI Agents for Lending",
        type: "image/png"
      }
    ],
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lendro.AI - Agentic AI for Intelligent Lending",
    description: "Autonomous AI agents that transform lending operations with unprecedented intelligence",
    images: [`https://lendro.ai/og-image.png?${cacheVersion}`],
    creator: "@LendroAI"
  },
  other: {
    // Additional meta tags for better social sharing
    "og:image:type": "image/png",
    "og:image:width": "1200",
    "og:image:height": "630",
    "twitter:image:alt": "Lendro.AI - Autonomous AI Agents for Lending",
    // Apple-specific meta tags
    "apple-mobile-web-app-title": "Lendro.AI",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    // Microsoft tiles
    "msapplication-TileColor": "#1E51DB",
    "msapplication-config": "none",
    // Theme color
    "theme-color": "#1E51DB"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1E51DB" />
        <meta property="og:image" content={`https://lendro.ai/og-image.png?${cacheVersion}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`https://lendro.ai/og-image.png?${cacheVersion}`} />
        <meta name="twitter:image:alt" content="Lendro.AI - Autonomous AI Agents for Lending" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
