import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Mortgage Market Outlook: Housing Finance Trends | Lendro.AI Blog',
  description: 'Data-driven analysis of the mortgage market outlook and what the trends mean for lenders and investors.',
  keywords: 'Mortgage, Housing, Outlook, Trends, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
    canonical: 'https://lendro.ai/blog/the-mortgage-market-outlook',
  },
  openGraph: {
    title: 'The Mortgage Market Outlook: Housing Finance Trends',
    description: 'Data-driven analysis of the mortgage market outlook and what the trends mean for lenders and investors.',
    url: 'https://lendro.ai/blog/the-mortgage-market-outlook',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Mortgage","Housing","Outlook","Trends"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Mortgage Market Outlook: Housing Finance Trends',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Mortgage Market Outlook: Housing Finance Trends',
    description: 'Data-driven analysis of the mortgage market outlook and what the trends mean for lenders and investors.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Mortgage Market Outlook: Housing Finance Trends',
  description: 'Data-driven analysis of the mortgage market outlook and what the trends mean for lenders and investors.',
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
    '@id': 'https://lendro.ai/blog/the-mortgage-market-outlook',
  },
  keywords: 'Mortgage, Housing, Outlook, Trends, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
        title="The Mortgage Market Outlook"
        subtitle="Housing Finance Trends"
        excerpt="Data-driven analysis of the mortgage market outlook and what the trends mean for lenders and investors."
        category="Market Analysis"
        date="June 15, 2025"
        readTime="7 min read"
        tags={["Mortgage","Housing","Outlook","Trends"]}
        slug="the-mortgage-market-outlook"
      />
    </>
  );
}
