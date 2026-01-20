import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Lending to the Underbanked: A Moral and Business Imperative | Lendro.AI Blog',
  description: 'A strategic perspective on lending to the underbanked and its implications for the future of lending.',
  keywords: 'Underbanked, Access, Impact, Business, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
    canonical: 'https://lendro.ai/blog/lending-to-the-underbanked',
  },
  openGraph: {
    title: 'Lending to the Underbanked: A Moral and Business Imperative',
    description: 'A strategic perspective on lending to the underbanked and its implications for the future of lending.',
    url: 'https://lendro.ai/blog/lending-to-the-underbanked',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Underbanked","Access","Impact","Business"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Lending to the Underbanked: A Moral and Business Imperative',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lending to the Underbanked: A Moral and Business Imperative',
    description: 'A strategic perspective on lending to the underbanked and its implications for the future of lending.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Lending to the Underbanked: A Moral and Business Imperative',
  description: 'A strategic perspective on lending to the underbanked and its implications for the future of lending.',
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
    '@id': 'https://lendro.ai/blog/lending-to-the-underbanked',
  },
  keywords: 'Underbanked, Access, Impact, Business, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
        title="Lending to the Underbanked"
        subtitle="A Moral and Business Imperative"
        excerpt="A strategic perspective on lending to the underbanked and its implications for the future of lending."
        category="Thought Leadership"
        date="June 15, 2025"
        readTime="6 min read"
        tags={["Underbanked","Access","Impact","Business"]}
        slug="lending-to-the-underbanked"
      />
    </>
  );
}
