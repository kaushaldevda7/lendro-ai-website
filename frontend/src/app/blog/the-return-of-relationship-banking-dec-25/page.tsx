import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Return of Relationship Banking: AI Enables Personal Touch at Scale | Lendro.AI Blog',
  description: 'How the return of relationship banking is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Relationship Banking, Personalization, AI, Service, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/the-return-of-relationship-banking-dec-25',
  },
  openGraph: {
    title: 'The Return of Relationship Banking: AI Enables Personal Touch at Scale',
    description: 'How the return of relationship banking is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/the-return-of-relationship-banking-dec-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-12-15',
    authors: ['Lendro.AI Team'],
    tags: ["Relationship Banking","Personalization","AI","Service"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Return of Relationship Banking: AI Enables Personal Touch at Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Return of Relationship Banking: AI Enables Personal Touch at Scale',
    description: 'How the return of relationship banking is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Return of Relationship Banking: AI Enables Personal Touch at Scale',
  description: 'How the return of relationship banking is reshaping the lending landscape and what it means for financial institutions.',
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
    '@id': 'https://lendro.ai/blog/the-return-of-relationship-banking-dec-25',
  },
  keywords: 'Relationship Banking, Personalization, AI, Service, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="The Return of Relationship Banking"
        subtitle="AI Enables Personal Touch at Scale"
        excerpt="How the return of relationship banking is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="December 15, 2025"
        readTime="6 min read"
        tags={["Relationship Banking","Personalization","AI","Service"]}
        slug="the-return-of-relationship-banking-dec-25"
      />
    </>
  );
}
