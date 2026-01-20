import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Alternative Lending Growth: Non-Bank Lender Expansion | Lendro.AI Blog',
  description: 'Data-driven analysis of alternative lending growth and what the trends mean for lenders and investors.',
  keywords: 'Alternative, Non-Bank, Growth, Market, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
    canonical: 'https://lendro.ai/blog/alternative-lending-growth-nov-25',
  },
  openGraph: {
    title: 'Alternative Lending Growth: Non-Bank Lender Expansion',
    description: 'Data-driven analysis of alternative lending growth and what the trends mean for lenders and investors.',
    url: 'https://lendro.ai/blog/alternative-lending-growth-nov-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Lendro.AI Team'],
    tags: ["Alternative","Non-Bank","Growth","Market"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Alternative Lending Growth: Non-Bank Lender Expansion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alternative Lending Growth: Non-Bank Lender Expansion',
    description: 'Data-driven analysis of alternative lending growth and what the trends mean for lenders and investors.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Alternative Lending Growth: Non-Bank Lender Expansion',
  description: 'Data-driven analysis of alternative lending growth and what the trends mean for lenders and investors.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2025-11-15',
  dateModified: '2025-11-15',
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
    '@id': 'https://lendro.ai/blog/alternative-lending-growth-nov-25',
  },
  keywords: 'Alternative, Non-Bank, Growth, Market, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
  articleSection: 'Market Analysis',
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
        title="Alternative Lending Growth"
        subtitle="Non-Bank Lender Expansion"
        excerpt="Data-driven analysis of alternative lending growth and what the trends mean for lenders and investors."
        category="Market Analysis"
        date="November 15, 2025"
        readTime="11 min read"
        tags={["Alternative","Non-Bank","Growth","Market"]}
        slug="alternative-lending-growth-nov-25"
      />
    </>
  );
}
