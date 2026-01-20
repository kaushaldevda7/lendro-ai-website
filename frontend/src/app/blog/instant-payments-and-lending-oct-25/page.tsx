import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Instant Payments and Lending: Real-Time Money Movement | Lendro.AI Blog',
  description: 'How instant payments and lending is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Instant Payments, Real-time, Infrastructure, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/instant-payments-and-lending-oct-25',
  },
  openGraph: {
    title: 'Instant Payments and Lending: Real-Time Money Movement',
    description: 'How instant payments and lending is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/instant-payments-and-lending-oct-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-10-15',
    authors: ['Lendro.AI Team'],
    tags: ["Instant Payments","Real-time","Infrastructure","Innovation"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Instant Payments and Lending: Real-Time Money Movement',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Instant Payments and Lending: Real-Time Money Movement',
    description: 'How instant payments and lending is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Instant Payments and Lending: Real-Time Money Movement',
  description: 'How instant payments and lending is reshaping the lending landscape and what it means for financial institutions.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2025-10-15',
  dateModified: '2025-10-15',
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
    '@id': 'https://lendro.ai/blog/instant-payments-and-lending-oct-25',
  },
  keywords: 'Instant Payments, Real-time, Infrastructure, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="Instant Payments and Lending"
        subtitle="Real-Time Money Movement"
        excerpt="How instant payments and lending is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="October 15, 2025"
        readTime="7 min read"
        tags={["Instant Payments","Real-time","Infrastructure","Innovation"]}
        slug="instant-payments-and-lending-oct-25"
      />
    </>
  );
}
