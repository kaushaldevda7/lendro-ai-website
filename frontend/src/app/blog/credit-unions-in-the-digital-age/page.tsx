import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Credit Unions in the Digital Age: Modernizing Member Services | Lendro.AI Blog',
  description: 'How credit unions in the digital age is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Credit Unions, Digital, Members, Technology, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/credit-unions-in-the-digital-age',
  },
  openGraph: {
    title: 'Credit Unions in the Digital Age: Modernizing Member Services',
    description: 'How credit unions in the digital age is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/credit-unions-in-the-digital-age',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Credit Unions","Digital","Members","Technology"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Credit Unions in the Digital Age: Modernizing Member Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Credit Unions in the Digital Age: Modernizing Member Services',
    description: 'How credit unions in the digital age is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Credit Unions in the Digital Age: Modernizing Member Services',
  description: 'How credit unions in the digital age is reshaping the lending landscape and what it means for financial institutions.',
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
    '@id': 'https://lendro.ai/blog/credit-unions-in-the-digital-age',
  },
  keywords: 'Credit Unions, Digital, Members, Technology, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="Credit Unions in the Digital Age"
        subtitle="Modernizing Member Services"
        excerpt="How credit unions in the digital age is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="June 15, 2025"
        readTime="12 min read"
        tags={["Credit Unions","Digital","Members","Technology"]}
        slug="credit-unions-in-the-digital-age"
      />
    </>
  );
}
