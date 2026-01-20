import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Fintech Partnership Trends: Collaboration Over Competition | Lendro.AI Blog',
  description: 'Data-driven analysis of fintech partnership trends and what the trends mean for lenders and investors.',
  keywords: 'Fintech, Partnerships, Collaboration, Trends, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
    canonical: 'https://lendro.ai/blog/fintech-partnership-trends',
  },
  openGraph: {
    title: 'Fintech Partnership Trends: Collaboration Over Competition',
    description: 'Data-driven analysis of fintech partnership trends and what the trends mean for lenders and investors.',
    url: 'https://lendro.ai/blog/fintech-partnership-trends',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Fintech","Partnerships","Collaboration","Trends"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Fintech Partnership Trends: Collaboration Over Competition',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fintech Partnership Trends: Collaboration Over Competition',
    description: 'Data-driven analysis of fintech partnership trends and what the trends mean for lenders and investors.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Fintech Partnership Trends: Collaboration Over Competition',
  description: 'Data-driven analysis of fintech partnership trends and what the trends mean for lenders and investors.',
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
    '@id': 'https://lendro.ai/blog/fintech-partnership-trends',
  },
  keywords: 'Fintech, Partnerships, Collaboration, Trends, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
        title="Fintech Partnership Trends"
        subtitle="Collaboration Over Competition"
        excerpt="Data-driven analysis of fintech partnership trends and what the trends mean for lenders and investors."
        category="Market Analysis"
        date="June 15, 2025"
        readTime="12 min read"
        tags={["Fintech","Partnerships","Collaboration","Trends"]}
        slug="fintech-partnership-trends"
      />
    </>
  );
}
