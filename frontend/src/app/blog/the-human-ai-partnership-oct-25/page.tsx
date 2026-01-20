import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: 'The Human-AI Partnership: Augmentation Over Automation | Lendro.AI Blog',
  description: 'A strategic perspective on the human-ai partnership and its implications for the future of lending.',
  keywords: 'Human-AI, Collaboration, Future, Work, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
    canonical: 'https://lendro.ai/blog/the-human-ai-partnership-oct-25',
  },
  openGraph: {
    title: 'The Human-AI Partnership: Augmentation Over Automation',
    description: 'A strategic perspective on the human-ai partnership and its implications for the future of lending.',
    url: 'https://lendro.ai/blog/the-human-ai-partnership-oct-25',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '2025-10-15',
    authors: ['Lendro.AI Team'],
    tags: ["Human-AI","Collaboration","Future","Work"],
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'The Human-AI Partnership: Augmentation Over Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Human-AI Partnership: Augmentation Over Automation',
    description: 'A strategic perspective on the human-ai partnership and its implications for the future of lending.',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'The Human-AI Partnership: Augmentation Over Automation',
  description: 'A strategic perspective on the human-ai partnership and its implications for the future of lending.',
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
    '@id': 'https://lendro.ai/blog/the-human-ai-partnership-oct-25',
  },
  keywords: 'Human-AI, Collaboration, Future, Work, AI lending, fintech, credit risk, Lendro.AI, Thought Leadership',
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
        title="The Human-AI Partnership"
        subtitle="Augmentation Over Automation"
        excerpt="A strategic perspective on the human-ai partnership and its implications for the future of lending."
        category="Thought Leadership"
        date="October 15, 2025"
        readTime="10 min read"
        tags={["Human-AI","Collaboration","Future","Work"]}
        slug="the-human-ai-partnership-oct-25"
      />
    </>
  );
}
