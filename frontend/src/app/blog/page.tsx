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
                      'bg-purple-100 text-purple-700 border border-purple-200'
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