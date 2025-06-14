import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

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
    title: "Lendro.AI - Agentic AI for Lending",
    description: "Autonomous AI agents that transform lending operations with unprecedented intelligence",
    type: "website",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lendro.AI - Agentic AI for Lending",
    description: "Autonomous AI agents that transform lending operations with unprecedented intelligence"
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
