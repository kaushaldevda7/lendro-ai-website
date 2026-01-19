"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import axios from 'axios';

const blogArticles = [
  {
    title: "Building the Next Generation of AI Risk Models",
    excerpt: "An in-depth exploration of modern machine learning approaches to credit risk assessment, comparing traditional statistical methods with cutting-edge AI techniques.",
    slug: "ai-risk-models",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "June 15, 2025",
    author: "Dr. Sarah Chen",
    tags: ["AI", "Risk Assessment", "Machine Learning", "Credit Scoring"],
    featured: true
  },
  {
    title: "The Future of Work in Lending: AI Collaborators, Not Replacements",
    excerpt: "How AI will transform lending jobs—not by replacing humans, but by empowering them to do more meaningful work.",
    slug: "future-work-lending-industry",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "June 11, 2025",
    author: "Jennifer Park",
    tags: ["Future of Work", "Jobs", "AI Collaboration", "Industry"],
    featured: false
  },
  {
    title: "Model Interpretability Techniques: SHAP, LIME, and Beyond",
    excerpt: "A practitioner's guide to making AI lending decisions explainable using cutting-edge interpretability methods.",
    slug: "model-interpretability-techniques",
    category: "Technical Deep Dive",
    readTime: "12 min read",
    publishDate: "June 10, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Interpretability", "SHAP", "LIME", "Explainability"],
    featured: false
  },
  {
    title: "Alternative Data in Credit Decisions: Beyond Bank Statements and Pay Stubs",
    excerpt: "How non-traditional data sources are enabling more accurate and inclusive credit decisions for underserved populations.",
    slug: "alternative-data-credit-decisions",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "June 9, 2025",
    author: "Michael Rodriguez",
    tags: ["Alternative Data", "Credit Decisions", "Inclusion", "Innovation"],
    featured: false
  },
  {
    title: "What Partnerships Really Look Like: Beyond the Press Release",
    excerpt: "The real story behind our first major partnership—the negotiations, the compromises, and the mutual wins.",
    slug: "partnership-announcement-reflections",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "June 8, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Partnership", "Business Development", "Relationships", "Growth"],
    featured: false
  },
  {
    title: "Climate Risk in Lending Decisions: The Coming Transformation",
    excerpt: "How climate risk is becoming a critical factor in lending decisions and how AI can help lenders adapt.",
    slug: "climate-risk-lending-decisions",
    category: "Thought Leadership",
    readTime: "9 min read",
    publishDate: "June 7, 2025",
    author: "Jennifer Park",
    tags: ["Climate Risk", "ESG", "Sustainability", "Future"],
    featured: false
  },
  {
    title: "Federated Learning in Lending: Better Models Without Sharing Data",
    excerpt: "How federated learning enables collaborative AI model training while keeping sensitive financial data private and secure.",
    slug: "federated-learning-privacy",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "June 6, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Federated Learning", "Privacy", "Collaboration", "Security"],
    featured: false
  },
  {
    title: "Automating Warehouse Lending: AI for Lender of Lenders",
    excerpt: "How AI is transforming warehouse lending operations, improving efficiency for the institutions that fund other lenders.",
    slug: "warehouse-lending-automation",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "June 5, 2025",
    author: "Jennifer Park",
    tags: ["Warehouse Lending", "B2B", "Automation", "Operations"],
    featured: false
  },
  {
    title: "Building a Remote-First Team: Lessons from Distributed Startup Life",
    excerpt: "How we built a cohesive, high-performing team across time zones—and the tools and rituals that make it work.",
    slug: "remote-team-building-startup",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "June 4, 2025",
    author: "Michael Rodriguez, CTO",
    tags: ["Remote Work", "Team", "Culture", "Distributed"],
    featured: false
  },
  {
    title: "The BNPL Phenomenon: Revolution or Risk?",
    excerpt: "A balanced analysis of Buy Now Pay Later lending—its appeal, its risks, and its role in the future of consumer finance.",
    slug: "buy-now-pay-later-analysis",
    category: "Market Analysis",
    readTime: "8 min read",
    publishDate: "June 3, 2025",
    author: "Jennifer Park",
    tags: ["BNPL", "Consumer Finance", "Trends", "Risk"],
    featured: false
  },
  {
    title: "Model Monitoring and Drift Detection: Keeping AI Accurate Over Time",
    excerpt: "The systems and processes we use to ensure our AI models remain accurate as markets, regulations, and behaviors change.",
    slug: "model-monitoring-drift-detection",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "June 2, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Model Monitoring", "Drift", "MLOps", "Quality"],
    featured: false
  },
  {
    title: "Solving the Banking Desert Problem: AI as a Bridge to Financial Access",
    excerpt: "How AI-powered lending can reach underserved communities where traditional banking has failed or retreated.",
    slug: "banking-deserts-ai-solution",
    category: "Thought Leadership",
    readTime: "8 min read",
    publishDate: "June 1, 2025",
    author: "Jennifer Park",
    tags: ["Financial Inclusion", "Banking Deserts", "Access", "Community"],
    featured: false
  },
  {
    title: "AI-Powered Loan Pricing: Finding the Perfect Balance",
    excerpt: "How machine learning optimizes loan pricing to balance profitability, competition, and borrower accessibility.",
    slug: "ai-loan-pricing-optimization",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 31, 2025",
    author: "Michael Rodriguez",
    tags: ["Pricing", "Optimization", "ML", "Strategy"],
    featured: false
  },
  {
    title: "The Pitch That Almost Didn't Happen: How a Technical Glitch Led to Our Best Investment",
    excerpt: "The chaotic story of our Series A pitch—when everything went wrong and somehow came out right.",
    slug: "investor-pitch-story",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "May 30, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Fundraising", "Investors", "Startup Story", "Series A"],
    featured: false
  },
  {
    title: "AI for Mission-Driven Lenders: Technology Meets Social Impact",
    excerpt: "How CDFIs and mission-driven lenders can leverage AI to extend their reach while staying true to their community focus.",
    slug: "cdfi-mission-driven-lending",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "May 29, 2025",
    author: "Jennifer Park",
    tags: ["CDFI", "Social Impact", "Community", "Mission"],
    featured: false
  },
  {
    title: "Why Traditional Lending is Ripe for AI Disruption",
    excerpt: "Analyzing the inefficiencies in current lending processes and how autonomous AI agents can transform operations from application to servicing.",
    slug: "lending-ai-disruption",
    category: "Industry Insights",
    readTime: "6 min read",
    publishDate: "May 28, 2025",
    author: "Michael Rodriguez",
    tags: ["Digital Transformation", "Lending", "AI Automation", "Industry Trends"],
    featured: true
  },
  {
    title: "Continuous Learning in Production ML: AI That Gets Smarter Every Day",
    excerpt: "How we build machine learning systems that continuously improve from new data while maintaining stability and compliance.",
    slug: "continuous-learning-production-ml",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "May 28, 2025",
    author: "Dr. Sarah Chen",
    tags: ["MLOps", "Continuous Learning", "Production", "AI"],
    featured: false
  },
  {
    title: "Technology Reshaping Real Estate Lending: From Appraisals to Approvals",
    excerpt: "How AI and automation are transforming every step of the commercial and residential real estate lending process.",
    slug: "real-estate-lending-technology",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "May 27, 2025",
    author: "Jennifer Park",
    tags: ["Real Estate", "PropTech", "Commercial Lending", "Residential"],
    featured: false
  },
  {
    title: "The Mental Health Side of Founding: Conversations We Don't Have Enough",
    excerpt: "An honest discussion about the psychological challenges of building a startup and how we're creating a healthier company culture.",
    slug: "mental-health-founder-journey",
    category: "Personal Journey",
    readTime: "7 min read",
    publishDate: "May 26, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Mental Health", "Founder", "Wellbeing", "Culture"],
    featured: false
  },
  {
    title: "Embedded Lending and the API Economy: Lending as a Service",
    excerpt: "How APIs are enabling any company to offer lending products, and what this means for the future of financial services.",
    slug: "embedded-lending-api-economy",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 25, 2025",
    author: "Michael Rodriguez",
    tags: ["Embedded Finance", "APIs", "BaaS", "Platform"],
    featured: false
  },
  {
    title: "Graph Neural Networks for Fraud Detection: Seeing Patterns Humans Can't",
    excerpt: "How we use graph neural networks to identify complex fraud rings and synthetic identity schemes that evade traditional detection.",
    slug: "graph-neural-networks-fraud",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "May 24, 2025",
    author: "Michael Rodriguez",
    tags: ["Graph Neural Networks", "Fraud", "Deep Learning", "Patterns"],
    featured: false
  },
  {
    title: "The Meeting That Changed Everything: When a Skeptical Banker Became a Believer",
    excerpt: "The story of a pivotal meeting where a traditional banker's transformation from skeptic to champion showed us our technology was ready.",
    slug: "meeting-that-changed-everything",
    category: "Personal Journey",
    readTime: "5 min read",
    publishDate: "May 23, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Customer Story", "Transformation", "Sales", "Relationships"],
    featured: false
  },
  {
    title: "Global AI Lending Adoption: How Different Markets Are Approaching AI",
    excerpt: "A comparative analysis of AI lending adoption across North America, Europe, Asia, and emerging markets.",
    slug: "global-lending-ai-adoption",
    category: "Market Analysis",
    readTime: "9 min read",
    publishDate: "May 22, 2025",
    author: "Jennifer Park",
    tags: ["Global", "Adoption", "Markets", "International"],
    featured: false
  },
  {
    title: "Feature Engineering for Credit Risk: The Art Behind the Science",
    excerpt: "A deep dive into how we create predictive features from raw data—the creative process that powers our AI models.",
    slug: "feature-engineering-credit-risk",
    category: "Technical Deep Dive",
    readTime: "12 min read",
    publishDate: "May 21, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Feature Engineering", "Data Science", "Credit Risk", "ML"],
    featured: false
  },
  {
    title: "Revolutionizing Student Loan Servicing: AI for the $1.7T Crisis",
    excerpt: "How intelligent automation can improve the student loan experience while helping borrowers find paths to repayment.",
    slug: "student-loan-servicing-revolution",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "May 20, 2025",
    author: "Jennifer Park",
    tags: ["Student Loans", "Servicing", "Education Finance", "Crisis"],
    featured: false
  },
  {
    title: "The Weekend That Saved Our Company: A Startup Survival Story",
    excerpt: "The 72-hour sprint that turned a potential disaster into our biggest breakthrough—and what it taught us about resilience.",
    slug: "weekend-that-saved-company",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "May 19, 2025",
    author: "Michael Rodriguez, CTO",
    tags: ["Startup Story", "Resilience", "Challenge", "Growth"],
    featured: false
  },
  {
    title: "Edge Computing in Loan Processing: Decisions at the Speed of Need",
    excerpt: "How edge computing is enabling instant loan decisions at the point of sale, transforming retail financing.",
    slug: "edge-computing-loan-processing",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "May 18, 2025",
    author: "Michael Rodriguez",
    tags: ["Edge Computing", "Real-time", "POS Financing", "Technology"],
    featured: false
  },
  {
    title: "AI in Collections: Adding Empathy to Automation",
    excerpt: "How AI is transforming collections from confrontational to consultative, improving recovery rates while treating borrowers with dignity.",
    slug: "collections-ai-empathy",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 17, 2025",
    author: "Jennifer Park",
    tags: ["Collections", "Empathy", "Automation", "Recovery"],
    featured: false
  },
  {
    title: "Building Trust in AI Decisions: From Skepticism to Confidence",
    excerpt: "The journey financial institutions take from AI skepticism to full trust—and how to accelerate that journey.",
    slug: "building-trust-in-ai-decisions",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "May 16, 2025",
    author: "Michael Rodriguez",
    tags: ["Trust", "AI Adoption", "Change Management", "Leadership"],
    featured: false
  },
  {
    title: "The Personal Loan Market in 2025: Trends, Opportunities, and Challenges",
    excerpt: "A comprehensive analysis of where the personal loan market stands and where it's headed in the AI era.",
    slug: "personal-loan-market-2025",
    category: "Market Analysis",
    readTime: "8 min read",
    publishDate: "May 15, 2025",
    author: "Jennifer Park",
    tags: ["Personal Loans", "Market Trends", "2025", "Analysis"],
    featured: false
  },
  {
    title: "Synthetic Data in Credit Modeling: Training AI When Real Data Is Scarce",
    excerpt: "How synthetic data generation is solving the cold-start problem in AI lending and enabling privacy-preserving model development.",
    slug: "synthetic-data-credit-modeling",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "May 14, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Synthetic Data", "Privacy", "Data Science", "Training"],
    featured: false
  },
  {
    title: "What Our First Customer Taught Us: The Feedback That Shaped Our Product",
    excerpt: "The honest story of our first customer engagement—the good, the bad, and the pivots we made because of it.",
    slug: "lessons-from-first-customer",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "May 13, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Customer Feedback", "Product", "Iteration", "Learning"],
    featured: false
  },
  {
    title: "Credit Union Digital Transformation: Preserving Community Values with Modern Tech",
    excerpt: "How credit unions can embrace AI without losing the personal touch that defines their member relationships.",
    slug: "credit-union-digital-transformation",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 12, 2025",
    author: "Jennifer Park",
    tags: ["Credit Unions", "Digital Transformation", "Community", "Members"],
    featured: false
  },
  {
    title: "A Day in the Life of an AI Agent: What Happens in Those Milliseconds",
    excerpt: "A detailed walkthrough of what actually happens when an AI agent processes a loan application—from data to decision.",
    slug: "day-in-life-ai-agent",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 11, 2025",
    author: "Michael Rodriguez",
    tags: ["AI Agents", "Processing", "Behind the Scenes", "Technology"],
    featured: false
  },
  {
    title: "AI Lending in a Downturn: How Smart Systems Weather Economic Storms",
    excerpt: "What happens when recession hits? How AI lending systems adapt to changing economic conditions in real-time.",
    slug: "economic-downturn-ai-lending",
    category: "Thought Leadership",
    readTime: "8 min read",
    publishDate: "May 10, 2025",
    author: "Jennifer Park",
    tags: ["Economy", "Recession", "Risk Management", "Adaptability"],
    featured: false
  },
  {
    title: "Transfer Learning for Credit Models: Teaching Old Data New Tricks",
    excerpt: "How transfer learning techniques allow AI models to leverage insights across different lending portfolios and markets.",
    slug: "transfer-learning-credit-models",
    category: "Technical Deep Dive",
    readTime: "11 min read",
    publishDate: "May 9, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Transfer Learning", "Machine Learning", "Credit Models", "AI"],
    featured: false
  },
  {
    title: "Reinventing Auto Loan Underwriting: Beyond Credit Scores and Down Payments",
    excerpt: "How AI is enabling smarter, faster, and fairer auto lending decisions by considering the full picture.",
    slug: "auto-loan-underwriting-ai",
    category: "Industry Insights",
    readTime: "7 min read",
    publishDate: "May 8, 2025",
    author: "Jennifer Park",
    tags: ["Auto Loans", "Underwriting", "AI", "Vehicle Finance"],
    featured: false
  },
  {
    title: "Hiring Our First Engineer: What We Learned About Building a Team",
    excerpt: "The story of our first engineering hire and the unconventional approach that's shaped our entire company culture.",
    slug: "hiring-first-engineer",
    category: "Personal Journey",
    readTime: "6 min read",
    publishDate: "May 7, 2025",
    author: "Michael Rodriguez, CTO",
    tags: ["Hiring", "Team Building", "Culture", "Startup"],
    featured: false
  },
  {
    title: "Fintech vs Traditional Banks: A Tale of Two Lending Worlds",
    excerpt: "Comparing the approaches, technologies, and outcomes of fintech lenders versus traditional financial institutions.",
    slug: "fintech-vs-traditional-banks",
    category: "Market Analysis",
    readTime: "7 min read",
    publishDate: "May 6, 2025",
    author: "Michael Rodriguez",
    tags: ["Fintech", "Banks", "Comparison", "Industry"],
    featured: false
  },
  {
    title: "Predicting Defaults Before They Happen: The Science of Early Warning Systems",
    excerpt: "How machine learning models can identify at-risk loans 6-12 months before traditional indicators show distress.",
    slug: "machine-learning-default-prediction",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "May 5, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Default Prediction", "Machine Learning", "Risk", "Early Warning"],
    featured: false
  },
  {
    title: "The Regulatory Landscape: AI Lending Compliance in 2025",
    excerpt: "A comprehensive guide to navigating the evolving regulatory environment for AI-powered lending solutions.",
    slug: "regulatory-landscape-ai-lending",
    category: "Industry Insights",
    readTime: "10 min read",
    publishDate: "May 4, 2025",
    author: "Jennifer Park",
    tags: ["Regulation", "Compliance", "Legal", "Framework"],
    featured: false
  },
  {
    title: "A Letter to Maria: The Loan That Changed Our Mission",
    excerpt: "An open letter to the small business owner whose rejected loan application became the catalyst for Lendro.AI.",
    slug: "customer-letter-maria-bakery",
    category: "Personal Journey",
    readTime: "5 min read",
    publishDate: "May 3, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Customer Story", "Mission", "Purpose", "Small Business"],
    featured: false
  },
  {
    title: "NLP in Loan Document Processing: Reading at Superhuman Speed",
    excerpt: "How natural language processing is transforming document review from a bottleneck into a competitive advantage.",
    slug: "nlp-loan-document-processing",
    category: "Technical Deep Dive",
    readTime: "8 min read",
    publishDate: "May 2, 2025",
    author: "Michael Rodriguez",
    tags: ["NLP", "Document Processing", "Automation", "AI"],
    featured: false
  },
  {
    title: "AI for Community Banks: David's New Sling Against Goliath",
    excerpt: "How smaller financial institutions can leverage AI to compete with national banks without massive technology budgets.",
    slug: "community-bank-ai-adoption",
    category: "Industry Insights",
    readTime: "6 min read",
    publishDate: "May 1, 2025",
    author: "Jennifer Park",
    tags: ["Community Banks", "Adoption", "Competition", "Technology"],
    featured: false
  },
  {
    title: "AI Bias in Lending: Separating Myths from Reality",
    excerpt: "A data-driven look at AI bias concerns in lending, and how responsible AI can actually be fairer than traditional methods.",
    slug: "ai-bias-lending-myths",
    category: "Thought Leadership",
    readTime: "9 min read",
    publishDate: "April 30, 2025",
    author: "Dr. Sarah Chen",
    tags: ["AI Bias", "Fairness", "Ethics", "Responsible AI"],
    featured: false
  },
  {
    title: "The Future of Mortgage Automation: From 45 Days to 45 Minutes",
    excerpt: "How AI is compressing the mortgage approval timeline while improving accuracy and borrower experience.",
    slug: "mortgage-automation-future",
    category: "Industry Insights",
    readTime: "8 min read",
    publishDate: "April 29, 2025",
    author: "Jennifer Park",
    tags: ["Mortgage", "Automation", "Processing Time", "Home Loans"],
    featured: false
  },
  {
    title: "Our First 100 Days: Lessons from Building a Fintech Startup",
    excerpt: "The mistakes we made, the lessons we learned, and the principles we discovered in our first 100 days building Lendro.AI.",
    slug: "first-100-days-at-lendro",
    category: "Personal Journey",
    readTime: "7 min read",
    publishDate: "April 28, 2025",
    author: "Michael Rodriguez, CTO",
    tags: ["Startup", "Lessons Learned", "Building", "Culture"],
    featured: false
  },
  {
    title: "Explainable AI in Lending: Opening the Black Box",
    excerpt: "How we build AI systems that can explain every decision in plain English—and why that matters for compliance and trust.",
    slug: "explainable-ai-lending-decisions",
    category: "Technical Deep Dive",
    readTime: "10 min read",
    publishDate: "April 27, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Explainable AI", "Compliance", "Transparency", "XAI"],
    featured: false
  },
  {
    title: "The $400B Small Business Gap: Why Traditional Lenders Fail Main Street",
    excerpt: "Exploring the massive unmet need in small business lending and how AI can bridge the gap between entrepreneurs and capital.",
    slug: "small-business-lending-gap",
    category: "Market Analysis",
    readTime: "6 min read",
    publishDate: "April 26, 2025",
    author: "Jennifer Park",
    tags: ["Small Business", "SMB Lending", "Market Gap", "Opportunity"],
    featured: false
  },
  {
    title: "Real-Time Fraud Detection: How AI Catches What Humans Miss",
    excerpt: "Inside the millisecond decisions that protect lenders from sophisticated fraud schemes while minimizing false positives.",
    slug: "real-time-fraud-detection-ai",
    category: "Technical Deep Dive",
    readTime: "9 min read",
    publishDate: "April 25, 2025",
    author: "Michael Rodriguez",
    tags: ["Fraud Detection", "Machine Learning", "Security", "Real-time"],
    featured: false
  },
  {
    title: "Why I Left JPMorgan to Build AI for Lending",
    excerpt: "A personal reflection on leaving a 15-year career at one of the world's largest banks to pursue the vision of truly autonomous lending.",
    slug: "why-i-left-jpmorgan-for-ai",
    category: "Personal Journey",
    readTime: "8 min read",
    publishDate: "April 24, 2025",
    author: "Dr. Sarah Chen, CEO",
    tags: ["Founder Story", "Career", "Vision", "Leadership"],
    featured: false
  },
  {
    title: "The Future of Credit Scoring: Beyond FICO in the AI Era",
    excerpt: "Why the 70-year-old credit scoring model is being reimagined, and what it means for lenders and borrowers alike.",
    slug: "future-of-credit-scoring",
    category: "Thought Leadership",
    readTime: "7 min read",
    publishDate: "April 23, 2025",
    author: "Dr. Sarah Chen",
    tags: ["Credit Scoring", "AI", "Innovation", "FICO"],
    featured: false
  },
  {
    title: "The $2.8 Trillion Opportunity: AI in Financial Services",
    excerpt: "Breaking down the massive market opportunity for AI-powered lending solutions and what it means for financial institutions of all sizes.",
    slug: "ai-financial-opportunity",
    category: "Market Analysis",
    readTime: "5 min read",
    publishDate: "April 22, 2025",
    author: "Jennifer Park",
    tags: ["Market Research", "Financial Services", "AI Investment", "Growth"],
    featured: true
  }
];

const breadcrumbItems = [
  { name: "Home", url: "https://lendro.ai" },
  { name: "Blog", url: "https://lendro.ai/blog" }
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Lendro.AI Blog",
  "description": "Insights, research, and thought leadership on AI-powered lending and financial technology",
  "url": "https://lendro.ai/blog",
  "publisher": {
    "@type": "Organization",
    "name": "Lendro.AI",
    "url": "https://lendro.ai"
  },
  "blogPost": blogArticles.map(article => ({
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "url": `https://lendro.ai/blog/${article.slug}`,
    "datePublished": new Date(article.publishDate).toISOString(),
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lendro.AI"
    }
  }))
};

export default function BlogPage() {
  const featuredArticles = blogArticles.filter(article => article.featured);
  const categories = [...new Set(blogArticles.map(article => article.category))];
  
  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    
    setNewsletterStatus({ loading: true, success: false, error: '' });
    
    try {
      const response = await axios.post('/api/newsletter', {
        email: newsletterEmail,
        source: 'Blog Page'
      });
      
      if (response.data.success) {
        setNewsletterStatus({ loading: false, success: true, error: '' });
        setNewsletterEmail('');
        // Reset success message after 3 seconds
        setTimeout(() => {
          setNewsletterStatus({ loading: false, success: false, error: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      let errorMessage = 'Failed to subscribe. Please try again.';
      
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      
      setNewsletterStatus({ loading: false, success: false, error: errorMessage });
    }
  };

  return (
    <Layout>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Industry Insights & Research</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block">AI Lending</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Insights & Research
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Deep insights from industry leaders, cutting-edge research, and practical guides to transform your lending operations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Featured Articles
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our latest research and insights on the future of AI-powered lending
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="px-4 py-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white rounded-full text-sm font-medium">
              All Articles
            </button>
            {categories.map(category => (
              <button key={category} className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-[#1E51DB] hover:text-[#1E51DB] transition-colors">
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article, index) => (
              <article key={article.slug} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Technical Deep Dive' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                      article.category === 'Industry Insights' ? 'bg-green-100 text-green-700 border border-green-200' :
                      article.category === 'Market Analysis' ? 'bg-purple-100 text-purple-700 border border-purple-200' :
                      article.category === 'Thought Leadership' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' :
                      article.category === 'Personal Journey' ? 'bg-orange-100 text-orange-700 border border-orange-200' :
                      'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}>
                      {article.category}
                    </span>
                    <span className="text-gray-400 text-sm">{article.publishDate.split(',')[0]}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1E51DB] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>By {article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[#1E51DB] font-medium text-sm hover:text-[#65A8F3] transition-colors"
                  >
                    <span>Read Article</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Stay Updated
              </span>
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI lending, industry trends, and research delivered to your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] shadow-sm"
                required
                disabled={newsletterStatus.loading}
              />
              <button 
                type="submit"
                disabled={newsletterStatus.loading}
                className="px-6 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {newsletterStatus.loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {/* Newsletter Status Messages */}
            {newsletterStatus.success && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm text-center">
                  ✅ Successfully subscribed! Thank you for joining our newsletter.
                </p>
              </div>
            )}
            
            {newsletterStatus.error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-sm text-center">
                  ❌ {newsletterStatus.error}
                </p>
              </div>
            )}
            <p className="text-gray-500 text-sm mt-4">
              Join 5,000+ lending professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
} 