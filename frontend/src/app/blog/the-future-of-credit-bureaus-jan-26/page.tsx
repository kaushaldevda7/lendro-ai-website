import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Future of Credit Bureaus: Disruption or Evolution? | Lendro.AI Blog',
  description: 'A strategic perspective on the future of credit bureaus and its implications for the future of lending.',
  keywords: 'Credit Bureaus, Data, Future, Change, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
    canonical: 'https://lendro.ai/blog/the-future-of-credit-bureaus-jan-26',
  },
  openGraph: {
    title: 'The Future of Credit Bureaus: Disruption or Evolution?',
    description: 'A strategic perspective on the future of credit bureaus and its implications for the future of lending.',
    url: 'https://lendro.ai/blog/the-future-of-credit-bureaus-jan-26',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2026-01-15',
    authors: ['Lendro.AI Team'],
    tags: ["Credit Bureaus","Data","Future","Change"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Future of Credit Bureaus: Disruption or Evolution?',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Future of Credit Bureaus: Disruption or Evolution?',
    description: 'A strategic perspective on the future of credit bureaus and its implications for the future of lending.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Future of Credit Bureaus: Disruption or Evolution?',
  description: 'A strategic perspective on the future of credit bureaus and its implications for the future of lending.',
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
    '@id': 'https://lendro.ai/blog/the-future-of-credit-bureaus-jan-26',
  },
  keywords: 'Credit Bureaus, Data, Future, Change, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
        title="The Future of Credit Bureaus"
        subtitle="Disruption or Evolution?"
        excerpt="A strategic perspective on the future of credit bureaus and its implications for the future of lending."
        category="Thought Leadership"
        date="January 15, 2026"
        readTime="7 min read"
        tags={["Credit Bureaus","Data","Future","Change"]}
        slug="the-future-of-credit-bureaus-jan-26"
      />
    </>
  );
}
