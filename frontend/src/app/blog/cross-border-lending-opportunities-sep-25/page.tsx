import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Cross-Border Lending Opportunities: Technology Erases Geographic Limits | Lendro.AI Blog',
  description: 'How cross-border lending opportunities is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Cross-Border, International, Expansion, Markets, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/cross-border-lending-opportunities-sep-25',
  },
  openGraph: {
    title: 'Cross-Border Lending Opportunities: Technology Erases Geographic Limits',
    description: 'How cross-border lending opportunities is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/cross-border-lending-opportunities-sep-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-09-15',
    authors: ['Lendro.AI Team'],
    tags: ["Cross-Border","International","Expansion","Markets"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Cross-Border Lending Opportunities: Technology Erases Geographic Limits',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cross-Border Lending Opportunities: Technology Erases Geographic Limits',
    description: 'How cross-border lending opportunities is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Cross-Border Lending Opportunities: Technology Erases Geographic Limits',
  description: 'How cross-border lending opportunities is reshaping the lending landscape and what it means for financial institutions.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2025-09-15',
  dateModified: '2025-09-15',
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
    '@id': 'https://lendro.ai/blog/cross-border-lending-opportunities-sep-25',
  },
  keywords: 'Cross-Border, International, Expansion, Markets, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="Cross-Border Lending Opportunities"
        subtitle="Technology Erases Geographic Limits"
        excerpt="How cross-border lending opportunities is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="September 15, 2025"
        readTime="7 min read"
        tags={["Cross-Border","International","Expansion","Markets"]}
        slug="cross-border-lending-opportunities-sep-25"
      />
    </>
  );
}
