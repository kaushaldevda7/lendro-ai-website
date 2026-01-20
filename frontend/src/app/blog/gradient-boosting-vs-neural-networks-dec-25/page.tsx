import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Gradient Boosting vs Neural Networks: Choosing the Right Model Architecture | Lendro.AI Blog',
  description: 'An in-depth technical exploration of gradient boosting vs neural networks and how it\'s transforming modern lending infrastructure.',
  keywords: 'XGBoost, Neural Networks, ML, Architecture, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
    canonical: 'https://lendro.ai/blog/gradient-boosting-vs-neural-networks-dec-25',
  },
  openGraph: {
    title: 'Gradient Boosting vs Neural Networks: Choosing the Right Model Architecture',
    description: 'An in-depth technical exploration of gradient boosting vs neural networks and how it\'s transforming modern lending infrastructure.',
    url: 'https://lendro.ai/blog/gradient-boosting-vs-neural-networks-dec-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-12-15',
    authors: ['Lendro.AI Team'],
    tags: ["XGBoost","Neural Networks","ML","Architecture"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Gradient Boosting vs Neural Networks: Choosing the Right Model Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gradient Boosting vs Neural Networks: Choosing the Right Model Architecture',
    description: 'An in-depth technical exploration of gradient boosting vs neural networks and how it\'s transforming modern lending infrastructure.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Gradient Boosting vs Neural Networks: Choosing the Right Model Architecture',
  description: 'An in-depth technical exploration of gradient boosting vs neural networks and how it\'s transforming modern lending infrastructure.',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '2025-12-15',
  dateModified: '2025-12-15',
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
    '@id': 'https://lendro.ai/blog/gradient-boosting-vs-neural-networks-dec-25',
  },
  keywords: 'XGBoost, Neural Networks, ML, Architecture, AI lending, fintech, credit risk, Lendro.AI, Technical Deep Dive',
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
        title="Gradient Boosting vs Neural Networks"
        subtitle="Choosing the Right Model Architecture"
        excerpt="An in-depth technical exploration of gradient boosting vs neural networks and how it\'s transforming modern lending infrastructure."
        category="Technical Deep Dive"
        date="December 15, 2025"
        readTime="8 min read"
        tags={["XGBoost","Neural Networks","ML","Architecture"]}
        slug="gradient-boosting-vs-neural-networks-dec-25"
      />
    </>
  );
}
