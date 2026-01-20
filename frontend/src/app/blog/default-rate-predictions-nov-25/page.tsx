import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Default Rate Predictions: What the Data Shows | Lendro.AI Blog',
  description: 'Data-driven analysis of default rate predictions and what the trends mean for lenders and investors.',
  keywords: 'Defaults, Predictions, Data, Risk, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
    canonical: 'https://lendro.ai/blog/default-rate-predictions-nov-25',
  },
  openGraph: {
    title: 'Default Rate Predictions: What the Data Shows',
    description: 'Data-driven analysis of default rate predictions and what the trends mean for lenders and investors.',
    url: 'https://lendro.ai/blog/default-rate-predictions-nov-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Lendro.AI Team'],
    tags: ["Defaults","Predictions","Data","Risk"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Default Rate Predictions: What the Data Shows',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Default Rate Predictions: What the Data Shows',
    description: 'Data-driven analysis of default rate predictions and what the trends mean for lenders and investors.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Default Rate Predictions: What the Data Shows',
  description: 'Data-driven analysis of default rate predictions and what the trends mean for lenders and investors.',
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
    '@id': 'https://lendro.ai/blog/default-rate-predictions-nov-25',
  },
  keywords: 'Defaults, Predictions, Data, Risk, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
        title="Default Rate Predictions"
        subtitle="What the Data Shows"
        excerpt="Data-driven analysis of default rate predictions and what the trends mean for lenders and investors."
        category="Market Analysis"
        date="November 15, 2025"
        readTime="11 min read"
        tags={["Defaults","Predictions","Data","Risk"]}
        slug="default-rate-predictions-nov-25"
      />
    </>
  );
}
