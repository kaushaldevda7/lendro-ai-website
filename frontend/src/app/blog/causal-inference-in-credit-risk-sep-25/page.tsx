import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Causal Inference in Credit Risk: Moving Beyond Correlation | Lendro.AI Blog',
  description: 'An in-depth technical exploration of causal inference in credit risk and how it\'s transforming modern lending infrastructure.',
  keywords: 'Causal AI, Statistics, Risk, ML, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
    canonical: 'https://lendro.ai/blog/causal-inference-in-credit-risk-sep-25',
  },
  openGraph: {
    title: 'Causal Inference in Credit Risk: Moving Beyond Correlation',
    description: 'An in-depth technical exploration of causal inference in credit risk and how it\'s transforming modern lending infrastructure.',
    url: 'https://lendro.ai/blog/causal-inference-in-credit-risk-sep-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-09-15',
    authors: ['Lendro.AI Team'],
    tags: ["Causal AI","Statistics","Risk","ML"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Causal Inference in Credit Risk: Moving Beyond Correlation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Causal Inference in Credit Risk: Moving Beyond Correlation',
    description: 'An in-depth technical exploration of causal inference in credit risk and how it\'s transforming modern lending infrastructure.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Causal Inference in Credit Risk: Moving Beyond Correlation',
  description: 'An in-depth technical exploration of causal inference in credit risk and how it\'s transforming modern lending infrastructure.',
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
    '@id': 'https://lendro.ai/blog/causal-inference-in-credit-risk-sep-25',
  },
  keywords: 'Causal AI, Statistics, Risk, ML, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
        title="Causal Inference in Credit Risk"
        subtitle="Moving Beyond Correlation"
        excerpt="An in-depth technical exploration of causal inference in credit risk and how it\'s transforming modern lending infrastructure."
        category="Technical Deep Dive"
        date="September 15, 2025"
        readTime="9 min read"
        tags={["Causal AI","Statistics","Risk","ML"]}
        slug="causal-inference-in-credit-risk-sep-25"
      />
    </>
  );
}
