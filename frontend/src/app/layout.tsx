import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

// Cache-busting parameter to force social platforms to refresh
const cacheVersion = "v2024-12-17";

export const metadata: Metadata = {
  title: "Lendro.AI - Agentic AI for Lending | Autonomous AI Agents Transform Lending Operations",
  description: "Transform your lending operations with Lendro.AI's autonomous AI agents. Experience unprecedented intelligence in loan origination, credit analysis, servicing, and collections.",
  keywords: "AI lending, agentic AI, loan management, credit analysis, autonomous AI agents, lending automation, financial technology, lendro, lendro.ai",
  authors: [{ name: "Lendro.AI Team" }],
  creator: "Lendro.AI",
  publisher: "Lendro.AI",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
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

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lendro.ai/#organization",
      "name": "Lendro.AI",
      "alternateName": "Lendro",
      "url": "https://lendro.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lendro.ai/lendro-logo.svg",
        "width": 1417,
        "height": 267
      },
      "description": "Autonomous AI agents that transform lending operations with unprecedented intelligence in loan origination, credit analysis, servicing, and collections.",
      "foundingDate": "2024",
      "industry": "Financial Technology",
      "keywords": "AI lending, agentic AI, loan management, credit analysis, autonomous AI agents, lending automation, financial technology",
      "sameAs": [
        "https://twitter.com/LendroAI",
        "https://linkedin.com/company/lendro-ai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "url": "https://lendro.ai/contact"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://lendro.ai/#website",
      "url": "https://lendro.ai",
      "name": "Lendro.AI - Agentic AI for Intelligent Lending",
      "description": "Transform your lending operations with autonomous AI agents. Experience unprecedented intelligence in loan origination, credit analysis, servicing, and collections.",
      "publisher": {
        "@id": "https://lendro.ai/#organization"
      },
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://lendro.ai/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Lendro.AI Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "AI-powered lending platform with autonomous agents for loan origination, risk assessment, and portfolio management",
      "url": "https://lendro.ai/platform",
      "publisher": {
        "@id": "https://lendro.ai/#organization"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "Contact for pricing"
        }
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1E51DB" />
        <meta property="og:image" content={`https://lendro.ai/og-image.png?${cacheVersion}`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={`https://lendro.ai/og-image.png?${cacheVersion}`} />
        <meta name="twitter:image:alt" content="Lendro.AI - Autonomous AI Agents for Lending" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://lendro.ai" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google-site-verification" content="" />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
