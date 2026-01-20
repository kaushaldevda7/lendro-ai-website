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

// Categories (no Personal Journey)
const categories = [
  "Technical Deep Dive",
  "Industry Insights",
  "Thought Leadership",
  "Market Analysis"
];

// Blog post topics pool - will be used to generate posts
const topicsPool = [
  // Technical Deep Dive topics
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

  // Industry Insights topics
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

  // Thought Leadership topics
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

  // Market Analysis topics
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

// Helper function to format date
function formatDate(date) {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Helper function to create slug from title
function createSlug(title) {
  return title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .substring(0, 50);
}

// Generate excerpt based on topic
function generateExcerpt(title, subtitle, category) {
  const excerpts = {
    "Technical Deep Dive": [
      `An in-depth technical exploration of ${title.toLowerCase()} and how it's transforming modern lending infrastructure.`,
      `A deep dive into the technical architecture behind ${title.toLowerCase()} and its practical applications in credit decisioning.`,
      `Understanding the engineering challenges and solutions in implementing ${title.toLowerCase()} for financial services.`
    ],
    "Industry Insights": [
      `How ${title.toLowerCase()} is reshaping the lending landscape and what it means for financial institutions.`,
      `An analysis of ${title.toLowerCase()} and its growing impact on credit access and financial services delivery.`,
      `Exploring the transformation brought by ${title.toLowerCase()} in today's rapidly evolving lending market.`
    ],
    "Thought Leadership": [
      `A strategic perspective on ${title.toLowerCase()} and its implications for the future of lending.`,
      `Examining the broader implications of ${title.toLowerCase()} for financial institutions and borrowers alike.`,
      `Why ${title.toLowerCase()} matters for the future of credit and how leaders should be thinking about it.`
    ],
    "Market Analysis": [
      `Data-driven analysis of ${title.toLowerCase()} and what the trends mean for lenders and investors.`,
      `Breaking down the market dynamics around ${title.toLowerCase()} with actionable insights.`,
      `A comprehensive look at ${title.toLowerCase()} through market data and competitive analysis.`
    ]
  };

  const categoryExcerpts = excerpts[category] || excerpts["Industry Insights"];
  return categoryExcerpts[Math.floor(Math.random() * categoryExcerpts.length)];
}

function generateBlogPost(post) {
  const colorKey = post.color || colors[Math.floor(Math.random() * colors.length)];
  const colorSet = colorGradients[colorKey];

  return `"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function BlogPostPage() {
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
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-${colorSet.from.split('-')[0]}-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-${colorSet.from.split('-')[0]}-600 transition-colors">Blog</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">${post.category}</span>
              </div>
            </nav>

            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-${colorSet.light} rounded-full border border-${colorSet.border}/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-${colorSet.from} rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-${colorSet.from.split('-')[0]}-700">${post.category}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-${colorSet.from} via-${colorSet.via} to-${colorSet.to} bg-clip-text text-transparent">
                  ${post.title}
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  ${post.subtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                ${post.excerpt}
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>${post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>${post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Lendro.AI Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  ${post.excerpt} This is an exploration of one of the most important topics in modern lending technology.
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

                <div className="bg-gradient-to-r from-${colorSet.light} to-white rounded-2xl p-8 border border-${colorSet.border}/50 text-center mt-12">
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-${colorSet.from} to-${colorSet.via} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
function generateBlogPosts(startDate, endDate) {
  const blogDir = path.join(__dirname, '..', 'frontend', 'src', 'app', 'blog');
  const posts = [];
  const usedSlugs = new Set();

  let currentDate = new Date(startDate);
  const end = new Date(endDate);
  let topicIndex = 0;

  while (currentDate <= end) {
    const topic = topicsPool[topicIndex % topicsPool.length];
    let baseSlug = createSlug(topic.title);

    // If slug already used, add month-year suffix
    let slug = baseSlug;
    if (usedSlugs.has(slug)) {
      const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
      const month = monthNames[currentDate.getMonth()];
      const year = currentDate.getFullYear().toString().slice(-2);
      slug = `${baseSlug}-${month}-${year}`;
    }
    usedSlugs.add(slug);

    const readTimes = ["6 min read", "7 min read", "8 min read", "9 min read", "10 min read", "11 min read", "12 min read"];

    const post = {
      slug: slug,
      title: topic.title,
      subtitle: topic.subtitle,
      excerpt: generateExcerpt(topic.title, topic.subtitle, topic.category),
      category: topic.category,
      author: "Lendro.AI Team",
      date: formatDate(currentDate),
      readTime: readTimes[Math.floor(Math.random() * readTimes.length)],
      tags: topic.tags,
      color: colors[topicIndex % colors.length]
    };

    posts.push(post);

    // Create directory and file
    const postDir = path.join(blogDir, slug);
    const postFile = path.join(postDir, 'page.tsx');

    if (!fs.existsSync(postDir)) {
      fs.mkdirSync(postDir, { recursive: true });
    }

    const content = generateBlogPost(post);
    fs.writeFileSync(postFile, content);

    console.log(`Created: ${slug} - ${post.date}`);

    // Move to next day
    currentDate.setDate(currentDate.getDate() + 1);
    topicIndex++;
  }

  return posts;
}

// Generate blog articles array for listing page
function generateArticlesArray(posts) {
  console.log('\n\n// Add these to the blogArticles array in page.tsx:\n');
  posts.forEach(post => {
    console.log(`  {
    title: "${post.title}: ${post.subtitle}",
    excerpt: "${post.excerpt}",
    slug: "${post.slug}",
    category: "${post.category}",
    readTime: "${post.readTime}",
    publishDate: "${post.date}",
    author: "Lendro.AI Team",
    tags: ${JSON.stringify(post.tags)},
    featured: false
  },`);
  });
}

// Run the generator
const startDate = process.argv[2] || '2025-06-16';
const endDate = process.argv[3] || '2026-01-19';

console.log(`Generating blog posts from ${startDate} to ${endDate}...\n`);
const generatedPosts = generateBlogPosts(startDate, endDate);
console.log(`\nGenerated ${generatedPosts.length} blog posts.`);
generateArticlesArray(generatedPosts);
console.log('\n\nDone!');
