import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Data as the New Collateral: Rethinking Security in Lending | Lendro.AI Blog',
  description: 'A strategic perspective on data as the new collateral and its implications for the future of lending.',
  keywords: 'Data, Collateral, Innovation, Security, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
    canonical: 'https://lendro.ai/blog/data-as-the-new-collateral-jan-26',
  },
  openGraph: {
    title: 'Data as the New Collateral: Rethinking Security in Lending',
    description: 'A strategic perspective on data as the new collateral and its implications for the future of lending.',
    url: 'https://lendro.ai/blog/data-as-the-new-collateral-jan-26',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2026-01-15',
    authors: ['Lendro.AI Team'],
    tags: ["Data","Collateral","Innovation","Security"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Data as the New Collateral: Rethinking Security in Lending',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data as the New Collateral: Rethinking Security in Lending',
    description: 'A strategic perspective on data as the new collateral and its implications for the future of lending.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Data as the New Collateral: Rethinking Security in Lending',
  description: 'A strategic perspective on data as the new collateral and its implications for the future of lending.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
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
    '@id': 'https://lendro.ai/blog/data-as-the-new-collateral-jan-26',
  },
  keywords: 'Data, Collateral, Innovation, Security, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
  articleSection: 'Thought Leadership',
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
        title="Data as the New Collateral"
        subtitle="Rethinking Security in Lending"
        excerpt="A strategic perspective on data as the new collateral and its implications for the future of lending."
        category="Thought Leadership"
        date="January 15, 2026"
        readTime="10 min read"
        tags={["Data","Collateral","Innovation","Security"]}
        slug="data-as-the-new-collateral-jan-26"
      />
    </>
  );
}
