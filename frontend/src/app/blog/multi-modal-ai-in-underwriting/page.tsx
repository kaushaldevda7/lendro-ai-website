import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Multi-Modal AI in Underwriting: Processing Documents, Images, and Data | Lendro.AI Blog',
  description: 'An in-depth technical exploration of multi-modal ai in underwriting and how it\'s transforming modern lending infrastructure.',
  keywords: 'Multi-Modal, AI, Underwriting, Vision, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
    canonical: 'https://lendro.ai/blog/multi-modal-ai-in-underwriting',
  },
  openGraph: {
    title: 'Multi-Modal AI in Underwriting: Processing Documents, Images, and Data',
    description: 'An in-depth technical exploration of multi-modal ai in underwriting and how it\'s transforming modern lending infrastructure.',
    url: 'https://lendro.ai/blog/multi-modal-ai-in-underwriting',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Multi-Modal","AI","Underwriting","Vision"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Multi-Modal AI in Underwriting: Processing Documents, Images, and Data',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Modal AI in Underwriting: Processing Documents, Images, and Data',
    description: 'An in-depth technical exploration of multi-modal ai in underwriting and how it\'s transforming modern lending infrastructure.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Multi-Modal AI in Underwriting: Processing Documents, Images, and Data',
  description: 'An in-depth technical exploration of multi-modal ai in underwriting and how it\'s transforming modern lending infrastructure.',
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
    '@id': 'https://lendro.ai/blog/multi-modal-ai-in-underwriting',
  },
  keywords: 'Multi-Modal, AI, Underwriting, Vision, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
  articleSection: 'Technical Deep Dive',
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
        title="Multi-Modal AI in Underwriting"
        subtitle="Processing Documents, Images, and Data"
        excerpt="An in-depth technical exploration of multi-modal ai in underwriting and how it\'s transforming modern lending infrastructure."
        category="Technical Deep Dive"
        date="June 15, 2025"
        readTime="10 min read"
        tags={["Multi-Modal","AI","Underwriting","Vision"]}
        slug="multi-modal-ai-in-underwriting"
      />
    </>
  );
}
