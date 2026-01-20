import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Commercial Real Estate AI: Smarter Property Financing | Lendro.AI Blog',
  description: 'How commercial real estate ai is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'CRE, Real Estate, AI, Commercial, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
  authors: [{ name: 'Lendro.AI Team' }],
  creator: 'Lendro.AI',
  publisher: 'Lendro.AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lendro.ai/blog/commercial-real-estate-ai',
  },
  openGraph: {
    title: 'Commercial Real Estate AI: Smarter Property Financing',
    description: 'How commercial real estate ai is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/commercial-real-estate-ai',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["CRE","Real Estate","AI","Commercial"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Commercial Real Estate AI: Smarter Property Financing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Real Estate AI: Smarter Property Financing',
    description: 'How commercial real estate ai is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Commercial Real Estate AI: Smarter Property Financing',
  description: 'How commercial real estate ai is reshaping the lending landscape and what it means for financial institutions.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2025-06-16',
  dateModified: '2025-06-16',
  author: {
    '@type': 'Organization',
    name: 'Lendro.AI',
    url: 'https://lendro.ai',
    logo: 'https://lendro.ai/images/logo.png',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lendro.AI',
    url: 'https://lendro.ai',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lendro.ai/images/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://lendro.ai/blog/commercial-real-estate-ai',
  },
  keywords: 'CRE, Real Estate, AI, Commercial, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
  articleSection: 'Industry Insights',
  wordCount: 1500,
  inLanguage: 'en-US',
};

export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostClient
        title="Commercial Real Estate AI"
        subtitle="Smarter Property Financing"
        excerpt="How commercial real estate ai is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="June 15, 2025"
        readTime="12 min read"
        tags={["CRE","Real Estate","AI","Commercial"]}
        slug="commercial-real-estate-ai"
      />
    </>
  );
}
