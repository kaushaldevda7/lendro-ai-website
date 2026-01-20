import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Gig Economy Credit Challenge: Lending to the New Workforce | Lendro.AI Blog',
  description: 'How the gig economy credit challenge is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Gig Economy, Alternative Income, Underwriting, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/the-gig-economy-credit-challenge',
  },
  openGraph: {
    title: 'The Gig Economy Credit Challenge: Lending to the New Workforce',
    description: 'How the gig economy credit challenge is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/the-gig-economy-credit-challenge',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Gig Economy","Alternative Income","Underwriting","Innovation"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Gig Economy Credit Challenge: Lending to the New Workforce',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Gig Economy Credit Challenge: Lending to the New Workforce',
    description: 'How the gig economy credit challenge is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Gig Economy Credit Challenge: Lending to the New Workforce',
  description: 'How the gig economy credit challenge is reshaping the lending landscape and what it means for financial institutions.',
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
    '@id': 'https://lendro.ai/blog/the-gig-economy-credit-challenge',
  },
  keywords: 'Gig Economy, Alternative Income, Underwriting, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="The Gig Economy Credit Challenge"
        subtitle="Lending to the New Workforce"
        excerpt="How the gig economy credit challenge is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="June 15, 2025"
        readTime="6 min read"
        tags={["Gig Economy","Alternative Income","Underwriting","Innovation"]}
        slug="the-gig-economy-credit-challenge"
      />
    </>
  );
}
