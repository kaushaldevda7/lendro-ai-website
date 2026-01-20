import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The End of One-Size-Fits-All: Hyper-Personalized Credit Products | Lendro.AI Blog',
  description: 'A strategic perspective on the end of one-size-fits-all and its implications for the future of lending.',
  keywords: 'Personalization, Products, Innovation, Custom, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
    canonical: 'https://lendro.ai/blog/the-end-of-one-size-fits-all-nov-25',
  },
  openGraph: {
    title: 'The End of One-Size-Fits-All: Hyper-Personalized Credit Products',
    description: 'A strategic perspective on the end of one-size-fits-all and its implications for the future of lending.',
    url: 'https://lendro.ai/blog/the-end-of-one-size-fits-all-nov-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Lendro.AI Team'],
    tags: ["Personalization","Products","Innovation","Custom"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The End of One-Size-Fits-All: Hyper-Personalized Credit Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The End of One-Size-Fits-All: Hyper-Personalized Credit Products',
    description: 'A strategic perspective on the end of one-size-fits-all and its implications for the future of lending.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The End of One-Size-Fits-All: Hyper-Personalized Credit Products',
  description: 'A strategic perspective on the end of one-size-fits-all and its implications for the future of lending.',
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
    '@id': 'https://lendro.ai/blog/the-end-of-one-size-fits-all-nov-25',
  },
  keywords: 'Personalization, Products, Innovation, Custom, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
        title="The End of One-Size-Fits-All"
        subtitle="Hyper-Personalized Credit Products"
        excerpt="A strategic perspective on the end of one-size-fits-all and its implications for the future of lending."
        category="Thought Leadership"
        date="November 15, 2025"
        readTime="8 min read"
        tags={["Personalization","Products","Innovation","Custom"]}
        slug="the-end-of-one-size-fits-all-nov-25"
      />
    </>
  );
}
