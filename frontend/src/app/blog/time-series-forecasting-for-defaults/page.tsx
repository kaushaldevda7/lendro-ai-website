import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Time Series Forecasting for Defaults: Predicting Tomorrow\'s Risk Today | Lendro.AI Blog',
  description: 'An in-depth technical exploration of time series forecasting for defaults and how it\'s transforming modern lending infrastructure.',
  keywords: 'Time Series, Forecasting, Risk, ML, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
    canonical: 'https://lendro.ai/blog/time-series-forecasting-for-defaults',
  },
  openGraph: {
    title: 'Time Series Forecasting for Defaults: Predicting Tomorrow\'s Risk Today',
    description: 'An in-depth technical exploration of time series forecasting for defaults and how it\'s transforming modern lending infrastructure.',
    url: 'https://lendro.ai/blog/time-series-forecasting-for-defaults',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-06-16',
    authors: ['Lendro.AI Team'],
    tags: ["Time Series","Forecasting","Risk","ML"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Time Series Forecasting for Defaults: Predicting Tomorrow\'s Risk Today',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Series Forecasting for Defaults: Predicting Tomorrow\'s Risk Today',
    description: 'An in-depth technical exploration of time series forecasting for defaults and how it\'s transforming modern lending infrastructure.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Time Series Forecasting for Defaults: Predicting Tomorrow\'s Risk Today',
  description: 'An in-depth technical exploration of time series forecasting for defaults and how it\'s transforming modern lending infrastructure.',
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
    '@id': 'https://lendro.ai/blog/time-series-forecasting-for-defaults',
  },
  keywords: 'Time Series, Forecasting, Risk, ML, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
        title="Time Series Forecasting for Defaults"
        subtitle="Predicting Tomorrow\'s Risk Today"
        excerpt="An in-depth technical exploration of time series forecasting for defaults and how it\'s transforming modern lending infrastructure."
        category="Technical Deep Dive"
        date="June 15, 2025"
        readTime="9 min read"
        tags={["Time Series","Forecasting","Risk","ML"]}
        slug="time-series-forecasting-for-defaults"
      />
    </>
  );
}
