import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Rise of Embedded Lending: Finance at the Point of Need | Lendro.AI Blog',
  description: 'How the rise of embedded lending is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Embedded Finance, BNPL, Integration, Trends, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/the-rise-of-embedded-lending-sep-25',
  },
  openGraph: {
    title: 'The Rise of Embedded Lending: Finance at the Point of Need',
    description: 'How the rise of embedded lending is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/the-rise-of-embedded-lending-sep-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-09-15',
    authors: ['Lendro.AI Team'],
    tags: ["Embedded Finance","BNPL","Integration","Trends"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Rise of Embedded Lending: Finance at the Point of Need',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rise of Embedded Lending: Finance at the Point of Need',
    description: 'How the rise of embedded lending is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Rise of Embedded Lending: Finance at the Point of Need',
  description: 'How the rise of embedded lending is reshaping the lending landscape and what it means for financial institutions.',
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
    '@id': 'https://lendro.ai/blog/the-rise-of-embedded-lending-sep-25',
  },
  keywords: 'Embedded Finance, BNPL, Integration, Trends, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="The Rise of Embedded Lending"
        subtitle="Finance at the Point of Need"
        excerpt="How the rise of embedded lending is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="September 15, 2025"
        readTime="8 min read"
        tags={["Embedded Finance","BNPL","Integration","Trends"]}
        slug="the-rise-of-embedded-lending-sep-25"
      />
    </>
  );
}
