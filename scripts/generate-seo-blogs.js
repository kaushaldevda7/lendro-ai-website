const fs = require('fs');
const path = require('path');

// Color mappings
const colorGradients = {
  blue: { from: "blue-500", via: "indigo-600", to: "purple-700", light: "blue-50", border: "blue-200" },
  orange: { from: "orange-500", via: "amber-600", to: "yellow-700", light: "orange-50", border: "orange-200" },
  red: { from: "red-500", via: "rose-600", to: "pink-700", light: "red-50", border: "red-200" },
  green: { from: "green-500", via: "emerald-600", to: "teal-700", light: "green-50", border: "green-200" },
  purple: { from: "purple-500", via: "violet-600", to: "indigo-700", light: "purple-50", border: "purple-200" },
  teal: { from: "teal-500", via: "cyan-600", to: "blue-700", light: "teal-50", border: "teal-200" },
  indigo: { from: "indigo-500", via: "blue-600", to: "violet-700", light: "indigo-50", border: "indigo-200" },
  violet: { from: "violet-500", via: "purple-600", to: "fuchsia-700", light: "violet-50", border: "violet-200" },
  emerald: { from: "emerald-500", via: "green-600", to: "teal-700", light: "emerald-50", border: "emerald-200" },
  cyan: { from: "cyan-500", via: "sky-600", to: "blue-700", light: "cyan-50", border: "cyan-200" },
  rose: { from: "rose-500", via: "pink-600", to: "red-700", light: "rose-50", border: "rose-200" },
  slate: { from: "slate-500", via: "gray-600", to: "zinc-700", light: "slate-50", border: "slate-200" },
  amber: { from: "amber-500", via: "yellow-600", to: "orange-700", light: "amber-50", border: "amber-200" },
  pink: { from: "pink-500", via: "rose-600", to: "red-700", light: "pink-50", border: "pink-200" },
  sky: { from: "sky-500", via: "blue-600", to: "indigo-700", light: "sky-50", border: "sky-200" },
  fuchsia: { from: "fuchsia-500", via: "purple-600", to: "violet-700", light: "fuchsia-50", border: "fuchsia-200" }
};

const colors = Object.keys(colorGradients);

// Blog post topics pool
const topicsPool = [
  { title: "Reinforcement Learning in Loan Pricing", subtitle: "Dynamic Optimization at Scale", category: "Technical Deep Dive", tags: ["Reinforcement Learning", "Pricing", "Optimization", "ML"] },
  { title: "Vector Databases for Credit Risk", subtitle: "Semantic Search in Financial Data", category: "Technical Deep Dive", tags: ["Vector DB", "Embeddings", "Search", "AI"] },
  { title: "LLMs in Document Understanding", subtitle: "Beyond OCR to True Comprehension", category: "Technical Deep Dive", tags: ["LLM", "NLP", "Documents", "AI"] },
  { title: "Real-Time Feature Stores", subtitle: "Sub-Millisecond Decisioning Infrastructure", category: "Technical Deep Dive", tags: ["Feature Store", "Real-time", "MLOps", "Infrastructure"] },
  { title: "Causal Inference in Credit Risk", subtitle: "Moving Beyond Correlation", category: "Technical Deep Dive", tags: ["Causal AI", "Statistics", "Risk", "ML"] },
  { title: "Automated Model Retraining", subtitle: "CI/CD for Machine Learning", category: "Technical Deep Dive", tags: ["MLOps", "Automation", "DevOps", "Training"] },
  { title: "Anomaly Detection in Transactions", subtitle: "Finding Needles in Haystacks", category: "Technical Deep Dive", tags: ["Anomaly Detection", "Fraud", "ML", "Security"] },
  { title: "Time Series Forecasting for Defaults", subtitle: "Predicting Tomorrow's Risk Today", category: "Technical Deep Dive", tags: ["Time Series", "Forecasting", "Risk", "ML"] },
  { title: "Multi-Modal AI in Underwriting", subtitle: "Processing Documents, Images, and Data", category: "Technical Deep Dive", tags: ["Multi-Modal", "AI", "Underwriting", "Vision"] },
  { title: "Gradient Boosting vs Neural Networks", subtitle: "Choosing the Right Model Architecture", category: "Technical Deep Dive", tags: ["XGBoost", "Neural Networks", "ML", "Architecture"] },
  { title: "Privacy-Preserving Machine Learning", subtitle: "Building Models on Encrypted Data", category: "Technical Deep Dive", tags: ["Privacy", "Encryption", "ML", "Security"] },
  { title: "API Design for Lending Platforms", subtitle: "Building Scalable Integrations", category: "Technical Deep Dive", tags: ["API", "Architecture", "Integration", "Design"] },
  { title: "Kubernetes for ML Workloads", subtitle: "Orchestrating AI at Scale", category: "Technical Deep Dive", tags: ["Kubernetes", "MLOps", "Infrastructure", "Scale"] },
  { title: "Data Lineage in Credit Models", subtitle: "Tracking Every Feature's Journey", category: "Technical Deep Dive", tags: ["Data Lineage", "Governance", "ML", "Compliance"] },
  { title: "Active Learning for Rare Events", subtitle: "Improving Models with Smart Sampling", category: "Technical Deep Dive", tags: ["Active Learning", "Sampling", "ML", "Training"] },
  { title: "Bayesian Methods in Credit Scoring", subtitle: "Quantifying Uncertainty in Predictions", category: "Technical Deep Dive", tags: ["Bayesian", "Statistics", "Credit", "Uncertainty"] },
  { title: "Model Compression for Edge Deployment", subtitle: "Shrinking AI Without Losing Accuracy", category: "Technical Deep Dive", tags: ["Compression", "Edge", "Optimization", "Deployment"] },
  { title: "A/B Testing Credit Models", subtitle: "Scientific Experimentation in Production", category: "Technical Deep Dive", tags: ["A/B Testing", "Experimentation", "ML", "Production"] },
  { title: "Streaming Data Pipelines", subtitle: "Real-Time Data for Real-Time Decisions", category: "Technical Deep Dive", tags: ["Streaming", "Data Pipeline", "Kafka", "Real-time"] },
  { title: "Ensemble Methods in Risk Assessment", subtitle: "Combining Models for Better Predictions", category: "Technical Deep Dive", tags: ["Ensemble", "ML", "Risk", "Models"] },
  { title: "The Rise of Embedded Lending", subtitle: "Finance at the Point of Need", category: "Industry Insights", tags: ["Embedded Finance", "BNPL", "Integration", "Trends"] },
  { title: "Open Banking's Impact on Lending", subtitle: "Data Sharing Reshapes Credit", category: "Industry Insights", tags: ["Open Banking", "APIs", "Data", "Innovation"] },
  { title: "Green Lending Initiatives", subtitle: "Financing the Sustainability Transition", category: "Industry Insights", tags: ["Green Finance", "ESG", "Sustainability", "Climate"] },
  { title: "The Gig Economy Credit Challenge", subtitle: "Lending to the New Workforce", category: "Industry Insights", tags: ["Gig Economy", "Alternative Income", "Underwriting", "Innovation"] },
  { title: "Credit Unions in the Digital Age", subtitle: "Modernizing Member Services", category: "Industry Insights", tags: ["Credit Unions", "Digital", "Members", "Technology"] },
  { title: "Regulatory Technology Evolution", subtitle: "RegTech Meets LendTech", category: "Industry Insights", tags: ["RegTech", "Compliance", "Automation", "Innovation"] },
  { title: "The Return of Relationship Banking", subtitle: "AI Enables Personal Touch at Scale", category: "Industry Insights", tags: ["Relationship Banking", "Personalization", "AI", "Service"] },
  { title: "Cross-Border Lending Opportunities", subtitle: "Technology Erases Geographic Limits", category: "Industry Insights", tags: ["Cross-Border", "International", "Expansion", "Markets"] },
  { title: "Small Business Lending Renaissance", subtitle: "Technology Opens New Doors", category: "Industry Insights", tags: ["SMB", "Small Business", "Access", "Technology"] },
  { title: "Digital Identity Verification", subtitle: "Know Your Customer in the AI Era", category: "Industry Insights", tags: ["Identity", "KYC", "Verification", "Security"] },
  { title: "The Consolidation of Lending Tech", subtitle: "M&A Reshapes the Landscape", category: "Industry Insights", tags: ["M&A", "Consolidation", "Market", "Strategy"] },
  { title: "Voice-Enabled Lending Services", subtitle: "Conversational AI Meets Finance", category: "Industry Insights", tags: ["Voice AI", "Conversational", "Innovation", "UX"] },
  { title: "Instant Payments and Lending", subtitle: "Real-Time Money Movement", category: "Industry Insights", tags: ["Instant Payments", "Real-time", "Infrastructure", "Innovation"] },
  { title: "The Aging Population Credit Gap", subtitle: "Serving Senior Borrowers", category: "Industry Insights", tags: ["Demographics", "Seniors", "Access", "Service"] },
  { title: "Mobile-First Lending Platforms", subtitle: "Smartphones as Loan Officers", category: "Industry Insights", tags: ["Mobile", "App", "UX", "Access"] },
  { title: "Peer-to-Peer Lending Evolution", subtitle: "What's Next for P2P", category: "Industry Insights", tags: ["P2P", "Marketplace", "Evolution", "Trends"] },
  { title: "Commercial Real Estate AI", subtitle: "Smarter Property Financing", category: "Industry Insights", tags: ["CRE", "Real Estate", "AI", "Commercial"] },
  { title: "Invoice Financing Automation", subtitle: "AI Streamlines Working Capital", category: "Industry Insights", tags: ["Invoice", "Working Capital", "B2B", "Automation"] },
  { title: "Healthcare Lending Innovations", subtitle: "Financing Medical Needs", category: "Industry Insights", tags: ["Healthcare", "Medical", "Specialty", "Lending"] },
  { title: "Education Financing Reform", subtitle: "Rethinking Student Debt", category: "Industry Insights", tags: ["Education", "Student Loans", "Reform", "Innovation"] },
  { title: "AI Ethics in Financial Services", subtitle: "Building Responsible Systems", category: "Thought Leadership", tags: ["Ethics", "Responsible AI", "Governance", "Trust"] },
  { title: "The Human-AI Partnership", subtitle: "Augmentation Over Automation", category: "Thought Leadership", tags: ["Human-AI", "Collaboration", "Future", "Work"] },
  { title: "Democratizing Credit Access", subtitle: "AI as the Great Equalizer", category: "Thought Leadership", tags: ["Access", "Inclusion", "Equity", "Impact"] },
  { title: "Building Customer Trust in AI", subtitle: "Transparency as Competitive Advantage", category: "Thought Leadership", tags: ["Trust", "Transparency", "Customer", "Relationship"] },
  { title: "The Future of Credit Bureaus", subtitle: "Disruption or Evolution?", category: "Thought Leadership", tags: ["Credit Bureaus", "Data", "Future", "Change"] },
  { title: "Sustainable Lending Practices", subtitle: "Long-Term Value Creation", category: "Thought Leadership", tags: ["Sustainability", "Long-term", "Value", "Practice"] },
  { title: "Data as the New Collateral", subtitle: "Rethinking Security in Lending", category: "Thought Leadership", tags: ["Data", "Collateral", "Innovation", "Security"] },
  { title: "The Speed vs Accuracy Tradeoff", subtitle: "Finding the Right Balance", category: "Thought Leadership", tags: ["Speed", "Accuracy", "Tradeoffs", "Strategy"] },
  { title: "Lending in a Cashless Society", subtitle: "Digital Money, Digital Credit", category: "Thought Leadership", tags: ["Cashless", "Digital", "Future", "Payments"] },
  { title: "The Role of Human Oversight", subtitle: "Where Judgment Still Matters", category: "Thought Leadership", tags: ["Human", "Oversight", "Judgment", "Control"] },
  { title: "Building Antifragile Lending Systems", subtitle: "Getting Stronger from Stress", category: "Thought Leadership", tags: ["Antifragile", "Resilience", "Systems", "Design"] },
  { title: "The Personalization Paradox", subtitle: "Custom Credit at Scale", category: "Thought Leadership", tags: ["Personalization", "Scale", "Customization", "Balance"] },
  { title: "Lending to the Underbanked", subtitle: "A Moral and Business Imperative", category: "Thought Leadership", tags: ["Underbanked", "Access", "Impact", "Business"] },
  { title: "The Next Generation of Risk", subtitle: "Preparing for Unknown Unknowns", category: "Thought Leadership", tags: ["Risk", "Future", "Preparation", "Uncertainty"] },
  { title: "From Transactions to Relationships", subtitle: "The Evolution of Banking", category: "Thought Leadership", tags: ["Relationships", "Banking", "Evolution", "Service"] },
  { title: "The Talent Gap in AI Lending", subtitle: "Building Teams for the Future", category: "Thought Leadership", tags: ["Talent", "Hiring", "Skills", "Future"] },
  { title: "Interoperability in Financial Services", subtitle: "The Power of Connection", category: "Thought Leadership", tags: ["Interoperability", "Integration", "Standards", "Connection"] },
  { title: "The Attention Economy of Lending", subtitle: "Winning Mindshare in Finance", category: "Thought Leadership", tags: ["Attention", "Marketing", "Engagement", "Competition"] },
  { title: "Lending in Volatile Markets", subtitle: "Stability Through Intelligence", category: "Thought Leadership", tags: ["Volatility", "Markets", "Stability", "Intelligence"] },
  { title: "The End of One-Size-Fits-All", subtitle: "Hyper-Personalized Credit Products", category: "Thought Leadership", tags: ["Personalization", "Products", "Innovation", "Custom"] },
  { title: "Q3 Lending Market Report", subtitle: "Trends and Opportunities", category: "Market Analysis", tags: ["Market Report", "Q3", "Trends", "Analysis"] },
  { title: "Consumer Credit Behavior Shifts", subtitle: "Post-Pandemic Patterns", category: "Market Analysis", tags: ["Consumer", "Behavior", "Trends", "Patterns"] },
  { title: "Venture Capital in LendTech", subtitle: "Where Investors Are Betting", category: "Market Analysis", tags: ["VC", "Investment", "Funding", "Startups"] },
  { title: "Regional Lending Disparities", subtitle: "Geographic Credit Access", category: "Market Analysis", tags: ["Regional", "Geography", "Access", "Disparities"] },
  { title: "Interest Rate Impact Analysis", subtitle: "Navigating Rate Changes", category: "Market Analysis", tags: ["Interest Rates", "Impact", "Strategy", "Analysis"] },
  { title: "Competitive Landscape Update", subtitle: "Who's Winning in AI Lending", category: "Market Analysis", tags: ["Competition", "Landscape", "Players", "Strategy"] },
  { title: "Default Rate Predictions", subtitle: "What the Data Shows", category: "Market Analysis", tags: ["Defaults", "Predictions", "Data", "Risk"] },
  { title: "Emerging Market Opportunities", subtitle: "Global Credit Expansion", category: "Market Analysis", tags: ["Emerging Markets", "Global", "Expansion", "Growth"] },
  { title: "The Mortgage Market Outlook", subtitle: "Housing Finance Trends", category: "Market Analysis", tags: ["Mortgage", "Housing", "Outlook", "Trends"] },
  { title: "Auto Lending Market Dynamics", subtitle: "Vehicle Finance Evolution", category: "Market Analysis", tags: ["Auto", "Vehicle", "Market", "Trends"] },
  { title: "Credit Card Market Analysis", subtitle: "Revolving Credit Trends", category: "Market Analysis", tags: ["Credit Cards", "Revolving", "Market", "Analysis"] },
  { title: "Alternative Lending Growth", subtitle: "Non-Bank Lender Expansion", category: "Market Analysis", tags: ["Alternative", "Non-Bank", "Growth", "Market"] },
  { title: "Delinquency Trend Analysis", subtitle: "Early Warning Indicators", category: "Market Analysis", tags: ["Delinquency", "Trends", "Indicators", "Risk"] },
  { title: "Tech Adoption by Bank Size", subtitle: "How Institutions Are Investing", category: "Market Analysis", tags: ["Technology", "Banks", "Adoption", "Investment"] },
  { title: "Customer Acquisition Costs", subtitle: "The Economics of Growth", category: "Market Analysis", tags: ["CAC", "Acquisition", "Costs", "Economics"] },
  { title: "Regulatory Change Impact", subtitle: "How New Rules Reshape Markets", category: "Market Analysis", tags: ["Regulation", "Impact", "Markets", "Compliance"] },
  { title: "Fintech Partnership Trends", subtitle: "Collaboration Over Competition", category: "Market Analysis", tags: ["Fintech", "Partnerships", "Collaboration", "Trends"] },
  { title: "Credit Demand Forecasting", subtitle: "Predicting Market Needs", category: "Market Analysis", tags: ["Demand", "Forecasting", "Market", "Prediction"] },
  { title: "Pricing Power in Lending", subtitle: "Margin Analysis and Strategy", category: "Market Analysis", tags: ["Pricing", "Margins", "Strategy", "Competition"] },
  { title: "Digital Transformation ROI", subtitle: "Measuring Tech Investment Returns", category: "Market Analysis", tags: ["ROI", "Digital", "Investment", "Returns"] }
];

function formatDate(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatISODate(date) {
  return date.toISOString().split('T')[0];
}

function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

function generateExcerpt(title, category) {
  const excerpts = {
    "Technical Deep Dive": `An in-depth technical exploration of ${title.toLowerCase()} and how it's transforming modern lending infrastructure.`,
    "Industry Insights": `How ${title.toLowerCase()} is reshaping the lending landscape and what it means for financial institutions.`,
    "Thought Leadership": `A strategic perspective on ${title.toLowerCase()} and its implications for the future of lending.`,
    "Market Analysis": `Data-driven analysis of ${title.toLowerCase()} and what the trends mean for lenders and investors.`
  };
  return excerpts[category] || excerpts["Industry Insights"];
}

function escapeForJS(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

function generateBlogPost(post) {
  const colorKey = post.color || colors[Math.floor(Math.random() * colors.length)];
  const colorSet = colorGradients[colorKey];
  const fullTitle = `${post.title}: ${post.subtitle}`;
  const canonicalUrl = `https://lendro.ai/blog/${post.slug}`;
  const keywords = [...post.tags, 'AI lending', 'fintech', 'credit risk', 'Lendro.AI', post.category].join(', ');

  return `import type { Metadata } from 'next';
import BlogPostClient from './BlogPostClient';

// SEO Metadata for this blog post
export const metadata: Metadata = {
  title: '${escapeForJS(fullTitle)} | Lendro.AI Blog',
  description: '${escapeForJS(post.excerpt)}',
  keywords: '${escapeForJS(keywords)}',
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
    canonical: '${canonicalUrl}',
  },
  openGraph: {
    title: '${escapeForJS(fullTitle)}',
    description: '${escapeForJS(post.excerpt)}',
    url: '${canonicalUrl}',
    siteName: 'Lendro.AI',
    type: 'article',
    publishedTime: '${post.isoDate}',
    authors: ['Lendro.AI Team'],
    tags: ${JSON.stringify(post.tags)},
    images: [
      {
        url: 'https://lendro.ai/images/og-blog.png',
        width: 1200,
        height: 630,
        alt: '${escapeForJS(fullTitle)}',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '${escapeForJS(fullTitle)}',
    description: '${escapeForJS(post.excerpt)}',
    creator: '@LendroAI',
    images: ['https://lendro.ai/images/og-blog.png'],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: '${escapeForJS(fullTitle)}',
  description: '${escapeForJS(post.excerpt)}',
  image: 'https://lendro.ai/images/og-blog.png',
  datePublished: '${post.isoDate}',
  dateModified: '${post.isoDate}',
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
    '@id': '${canonicalUrl}',
  },
  keywords: '${escapeForJS(keywords)}',
  articleSection: '${post.category}',
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
        title="${escapeForJS(post.title)}"
        subtitle="${escapeForJS(post.subtitle)}"
        excerpt="${escapeForJS(post.excerpt)}"
        category="${post.category}"
        date="${post.date}"
        readTime="${post.readTime}"
        tags={${JSON.stringify(post.tags)}}
        slug="${post.slug}"
      />
    </>
  );
}
`;
}

function generateBlogPostClient(post) {
  const colorKey = post.color || colors[Math.floor(Math.random() * colors.length)];
  const colorSet = colorGradients[colorKey];

  return `"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

interface BlogPostClientProps {
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export default function BlogPostClient({
  title,
  subtitle,
  excerpt,
  category,
  date,
  readTime,
  tags,
  slug
}: BlogPostClientProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-${colorSet.light} via-white to-${colorSet.light.replace('50', '100')}">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-${colorSet.from}/10 via-${colorSet.via}/10 to-${colorSet.to}/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-${colorSet.via}/10 via-${colorSet.from}/10 to-${colorSet.to}/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/" itemProp="item" className="hover:text-${colorSet.from.split('-')[0]}-600 transition-colors">
                    <span itemProp="name">Home</span>
                  </Link>
                  <meta itemProp="position" content="1" />
                </li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href="/blog" itemProp="item" className="hover:text-${colorSet.from.split('-')[0]}-600 transition-colors">
                    <span itemProp="name">Blog</span>
                  </Link>
                  <meta itemProp="position" content="2" />
                </li>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span className="text-gray-900 font-medium" itemProp="name">{category}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </nav>

            <header className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-${colorSet.light} rounded-full border border-${colorSet.border}/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-${colorSet.from} rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-${colorSet.from.split('-')[0]}-700">{category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-${colorSet.from} via-${colorSet.via} to-${colorSet.to} bg-clip-text text-transparent">
                  {title}
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  {subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                {excerpt}
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={date}>{date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Lendro.AI Team</span>
                </div>
              </div>
            </header>
          </div>
        </section>

        <article className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  {excerpt} This is an exploration of one of the most important topics in modern lending technology.
                </p>

                <div className="bg-gradient-to-r from-${colorSet.light} to-${colorSet.light.replace('50', '100')} rounded-2xl p-8 border border-${colorSet.border}/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-${colorSet.from} rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Understanding the fundamentals of this topic is crucial for modern lending operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-${colorSet.from} rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">AI and machine learning are transforming how we approach these challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-${colorSet.from} rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Early adopters will gain significant competitive advantages</span>
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Current Landscape</h2>
                <p className="text-gray-700 mb-6">
                  The lending industry is undergoing a fundamental transformation. Traditional approaches that served us for decades are being challenged by new technologies, changing customer expectations, and evolving regulatory requirements. Understanding where we are today is essential for mapping where we need to go.
                </p>
                <p className="text-gray-700 mb-6">
                  At Lendro.AI, we've spent countless hours analyzing the market, talking to lenders of all sizes, and studying the latest research. What we've found confirms what many industry observers have suspected: the time for change is now.
                </p>

                <div className="bg-gradient-to-r from-${colorSet.from} via-${colorSet.via} to-${colorSet.to} rounded-2xl p-8 text-white mb-12">
                  <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">73%</div>
                      <div className="text-white/80 text-sm">of lenders plan AI investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">40%</div>
                      <div className="text-white/80 text-sm">potential efficiency gains</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2.5x</div>
                      <div className="text-white/80 text-sm">faster decision times</div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why This Matters Now</h2>
                <p className="text-gray-700 mb-6">
                  The convergence of several factors has created a unique moment of opportunity. Advances in machine learning, the availability of alternative data sources, regulatory clarity around AI use, and changing customer expectations have all aligned to make transformation not just possible, but necessary.
                </p>
                <p className="text-gray-700 mb-6">
                  Financial institutions that recognize this moment and act decisively will establish advantages that become increasingly difficult to overcome. Those that wait risk falling behind not just competitors, but customer expectations.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Path Forward</h2>
                <p className="text-gray-700 mb-6">
                  Implementing change at this scale requires careful planning, the right technology partners, and a clear vision. It's not about replacing human judgment but augmenting it. It's not about cutting costs at the expense of service but delivering better outcomes for everyone.
                </p>
                <p className="text-gray-700 mb-6">
                  The organizations that will thrive are those that embrace AI not as a threat to their existing operations but as an enabler of their highest ambitions. The technology exists. The market is ready. The question is: are you?
                </p>

                <aside className="bg-gradient-to-r from-${colorSet.light} to-white rounded-2xl p-8 border border-${colorSet.border}/50 text-center mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h3>
                  <p className="text-gray-700 mb-6">
                    Discover how Lendro.AI can help you navigate this transformation with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-${colorSet.from} to-${colorSet.via} text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Talk to an Expert
                    </Link>
                    <Link
                      href="/blog"
                      className="px-6 py-3 border-2 border-${colorSet.from} text-${colorSet.from.split('-')[0]}-600 font-semibold rounded-xl hover:bg-${colorSet.light} transition-all duration-300"
                    >
                      Read More Articles
                    </Link>
                  </div>
                </aside>
              </div>
            </div>

            {/* Tags Section for SEO */}
            <nav className="mt-8 flex flex-wrap gap-2 justify-center" aria-label="Article tags">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </nav>
          </div>
        </article>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-${colorSet.from} to-${colorSet.via} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </Layout>
  );
}
`;
}

// Main generation function
function regenerateAllBlogPosts() {
  const blogDir = path.join(__dirname, '..', 'frontend', 'src', 'app', 'blog');
  const usedSlugs = new Set();

  // Get all existing blog directories
  const existingDirs = fs.readdirSync(blogDir)
    .filter(item => {
      const itemPath = path.join(blogDir, item);
      return fs.statSync(itemPath).isDirectory();
    });

  console.log(`Found ${existingDirs.length} existing blog directories`);
  console.log('Regenerating all blog posts with SEO metadata...\n');

  let count = 0;

  existingDirs.forEach(slug => {
    // Map slug to topic
    const baseSlug = slug.replace(/-[a-z]{3}-\d{2}$/, ''); // Remove date suffix like -jan-26
    const topic = topicsPool.find(t => createSlug(t.title) === baseSlug) || topicsPool[0];

    // Parse date from slug suffix or use a default
    let date = new Date('2025-06-16');
    const dateMatch = slug.match(/-([a-z]{3})-(\d{2})$/);
    if (dateMatch) {
      const monthMap = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
      const month = monthMap[dateMatch[1]];
      const year = 2000 + parseInt(dateMatch[2]);
      date = new Date(year, month, 15);
    }

    const readTimes = ["6 min read", "7 min read", "8 min read", "9 min read", "10 min read", "11 min read", "12 min read"];

    const post = {
      slug: slug,
      title: topic.title,
      subtitle: topic.subtitle,
      excerpt: generateExcerpt(topic.title, topic.category),
      category: topic.category,
      author: "Lendro.AI Team",
      date: formatDate(date),
      isoDate: formatISODate(date),
      readTime: readTimes[Math.floor(Math.random() * readTimes.length)],
      tags: topic.tags,
      color: colors[count % colors.length]
    };

    const postDir = path.join(blogDir, slug);

    // Generate page.tsx with metadata
    const pageContent = generateBlogPost(post);
    fs.writeFileSync(path.join(postDir, 'page.tsx'), pageContent);

    // Generate BlogPostClient.tsx
    const clientContent = generateBlogPostClient(post);
    fs.writeFileSync(path.join(postDir, 'BlogPostClient.tsx'), clientContent);

    console.log(`Updated: ${slug}`);
    count++;
  });

  console.log(`\nRegenerated ${count} blog posts with full SEO metadata`);
}

// Run the regeneration
regenerateAllBlogPosts();
