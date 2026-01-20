import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'Open Banking\'s Impact on Lending: Data Sharing Reshapes Credit | Lendro.AI Blog',
  description: 'How open banking\'s impact on lending is reshaping the lending landscape and what it means for financial institutions.',
  keywords: 'Open Banking, APIs, Data, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
    canonical: 'https://lendro.ai/blog/open-bankings-impact-on-lending-dec-25',
  },
  openGraph: {
    title: 'Open Banking\'s Impact on Lending: Data Sharing Reshapes Credit',
    description: 'How open banking\'s impact on lending is reshaping the lending landscape and what it means for financial institutions.',
    url: 'https://lendro.ai/blog/open-bankings-impact-on-lending-dec-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-12-15',
    authors: ['Lendro.AI Team'],
    tags: ["Open Banking","APIs","Data","Innovation"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Open Banking\'s Impact on Lending: Data Sharing Reshapes Credit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Banking\'s Impact on Lending: Data Sharing Reshapes Credit',
    description: 'How open banking\'s impact on lending is reshaping the lending landscape and what it means for financial institutions.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Open Banking\'s Impact on Lending: Data Sharing Reshapes Credit',
  description: 'How open banking\'s impact on lending is reshaping the lending landscape and what it means for financial institutions.',
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
    '@id': 'https://lendro.ai/blog/open-bankings-impact-on-lending-dec-25',
  },
  keywords: 'Open Banking, APIs, Data, Innovation, AI lending, fintech, credit risk, Lendro.AI, Industry Insights',
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
        title="Open Banking\'s Impact on Lending"
        subtitle="Data Sharing Reshapes Credit"
        excerpt="How open banking\'s impact on lending is reshaping the lending landscape and what it means for financial institutions."
        category="Industry Insights"
        date="December 15, 2025"
        readTime="6 min read"
        tags={["Open Banking","APIs","Data","Innovation"]}
        slug="open-bankings-impact-on-lending-dec-25"
      />
    </>
  );
}
