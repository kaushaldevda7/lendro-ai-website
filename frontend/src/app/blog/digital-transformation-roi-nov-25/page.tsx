import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Digital Transformation ROI: Measuring Tech Investment Returns | Lendro.AI Blog',
  description: 'Data-driven analysis of digital transformation roi and what the trends mean for lenders and investors.',
  keywords: 'ROI, Digital, Investment, Returns, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
    canonical: 'https://lendro.ai/blog/digital-transformation-roi-nov-25',
  },
  openGraph: {
    title: 'Digital Transformation ROI: Measuring Tech Investment Returns',
    description: 'Data-driven analysis of digital transformation roi and what the trends mean for lenders and investors.',
    url: 'https://lendro.ai/blog/digital-transformation-roi-nov-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-11-15',
    authors: ['Lendro.AI Team'],
    tags: ["ROI","Digital","Investment","Returns"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Digital Transformation ROI: Measuring Tech Investment Returns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Transformation ROI: Measuring Tech Investment Returns',
    description: 'Data-driven analysis of digital transformation roi and what the trends mean for lenders and investors.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Digital Transformation ROI: Measuring Tech Investment Returns',
  description: 'Data-driven analysis of digital transformation roi and what the trends mean for lenders and investors.',
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
    '@id': 'https://lendro.ai/blog/digital-transformation-roi-nov-25',
  },
  keywords: 'ROI, Digital, Investment, Returns, AI lending, fintech, credit risk, Lendro.AI, Market Analysis',
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
        title="Digital Transformation ROI"
        subtitle="Measuring Tech Investment Returns"
        excerpt="Data-driven analysis of digital transformation roi and what the trends mean for lenders and investors."
        category="Market Analysis"
        date="November 15, 2025"
        readTime="8 min read"
        tags={["ROI","Digital","Investment","Returns"]}
        slug="digital-transformation-roi-nov-25"
      />
    </>
  );
}
