"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of AI at JPMorgan Chase with 15+ years in financial services AI. PhD in Computer Science from Stanford.",
    image: "/team/sarah-chen.jpg",
    linkedin: "https://linkedin.com/in/sarahchen",
    expertise: ["AI Strategy", "Risk Management", "Financial Services"]
  },
  {
    name: "Michael Rodriguez",
    role: "CTO & Co-Founder", 
    bio: "Ex-Principal Engineer at Goldman Sachs, led AI initiatives processing $2B+ in loans. MS in AI from MIT.",
    image: "/team/michael-rodriguez.jpg",
    linkedin: "https://linkedin.com/in/mrodriguez",
    expertise: ["AI Architecture", "Machine Learning", "Scalable Systems"]
  },
  {
    name: "Jennifer Park",
    role: "Chief Product Officer",
    bio: "Former Head of Digital Lending at Wells Fargo, 12+ years transforming lending operations. MBA from Wharton.",
    image: "/team/jennifer-park.jpg",
    linkedin: "https://linkedin.com/in/jenniferpark",
    expertise: ["Product Strategy", "Lending Operations", "User Experience"]
  },
  {
    name: "David Kumar",
    role: "VP of Engineering",
    bio: "Previously Staff Engineer at Stripe, built payment systems handling $100B+ annually. MS Computer Science from Carnegie Mellon.",
    image: "/team/david-kumar.jpg",
    linkedin: "https://linkedin.com/in/davidkumar",
    expertise: ["Distributed Systems", "API Design", "Financial Infrastructure"]
  }
];

const breadcrumbItems = [
  { name: "Home", url: "https://lendro.ai" },
  { name: "About", url: "https://lendro.ai/about" }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Lendro.AI",
  "alternateName": "Lendro",
  "url": "https://lendro.ai",
  "logo": "https://lendro.ai/lendro-logo.svg",
  "description": "Autonomous AI agents that transform lending operations with unprecedented intelligence in loan origination, credit analysis, servicing, and collections.",
  "foundingDate": "2024",
  "industry": "Financial Technology",
  "numberOfEmployees": "25-50",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "CA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://lendro.ai/contact",
    "email": "hello@lendro.ai"
  },
  "sameAs": [
    "https://twitter.com/LendroAI",
    "https://linkedin.com/company/lendro-ai"
  ],
  "employee": teamMembers.map(member => ({
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "worksFor": {
      "@type": "Organization",
      "name": "Lendro.AI"
    }
  }))
};

export default function AboutPage() {
  // Modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  return (
    <Layout>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      {/* Modals */}
      <CalendlyModal 
        isOpen={isScheduleDemoModalOpen} 
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        heading="Get in Touch"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">About Lendro.AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Transforming Lending</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Through Agentic AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              We're pioneering the future of financial services with autonomous AI agents that revolutionize how lending institutions operate, decide, and grow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="px-8 py-4 bg-white text-lendro-primary font-semibold rounded-2xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Schedule Demo
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-lendro-primary/5 via-lendro-secondary/5 to-lendro-tertiary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-lendro-tertiary/5 via-lendro-secondary/5 to-lendro-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
                  <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Our Journey</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                    Our Story
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Lendro.AI was born from a revolutionary vision: to create truly autonomous AI agents that don't just assist with lending decisions—they think, learn, and act independently to optimize entire lending operations.
                </p>
                <p>
                  Our founders, veterans of Fortune 500 financial institutions and AI research labs, witnessed firsthand the limitations of traditional lending technology. They envisioned a future where AI agents could operate with human-level intelligence while processing information at superhuman speed.
                </p>
                <p>
                  Today, we're pioneering the next generation of agentic AI—systems that don't wait for instructions but proactively identify opportunities, solve problems, and drive growth for lending institutions worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-lendro-primary/10 to-lendro-secondary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-lendro-primary mb-2">2024</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-lendro-secondary/10 to-lendro-tertiary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-lendro-secondary mb-2">7</div>
                    <div className="text-sm text-gray-600">AI Agents</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-lendro-tertiary/10 to-lendro-primary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-lendro-tertiary mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-lendro-primary/10 to-lendro-tertiary/10 rounded-2xl">
                    <div className="text-3xl font-bold text-lendro-primary mb-2">∞</div>
                    <div className="text-sm text-gray-600">Growth Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-lendro-primary/3 to-lendro-secondary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-lendro-secondary/3 to-lendro-tertiary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Our Foundation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Mission, Vision & Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that drive our innovation and guide our commitment to transforming the lending industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize advanced AI technology in lending, empowering financial institutions of all sizes to deploy autonomous agents that drive growth, reduce risk, and expand access to capital.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-600/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A future where every lending decision is enhanced by ethical AI agents that operate with transparency, fairness, and unprecedented intelligence to create a more inclusive financial ecosystem.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-violet-600/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation with integrity, transparency in AI decision-making, and an unwavering commitment to creating technology that serves humanity while driving business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-lendro-primary/5 via-lendro-secondary/5 to-lendro-tertiary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-lendro-tertiary/5 via-lendro-secondary/5 to-lendro-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">What Drives Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that shape our technology, guide our decisions, and define our commitment to ethical AI innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Ethical AI</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We build AI agents with fairness, transparency, and accountability at their core. Every decision our systems make can be explained, audited, and trusted by both lenders and borrowers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Autonomous Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We push the boundaries of what's possible with agentic AI, creating systems that don't just follow rules but think creatively to solve complex lending challenges in real-time.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Financial Inclusion</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our AI agents are designed to expand access to capital by identifying creditworthy borrowers that traditional systems might overlook, creating opportunities for underserved communities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-lendro-primary transition-colors">Enterprise Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implement military-grade security measures and maintain the highest compliance standards, ensuring that sensitive financial data is protected at every level of our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Color Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-teal-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-teal-400/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-400/30 to-cyan-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Join the AI Revolution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              <span className="block mb-2">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent py-2">
                Your Lending Operations?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join forward-thinking lenders who are already leveraging our autonomous AI agents to drive growth, reduce risk, and create competitive advantages.
              <span className="block mt-2 text-cyan-200 font-medium">The future of lending starts here.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Schedule Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Implementation</h4>
                <p className="text-white/80 text-sm">Deploy AI agents in weeks with our proven onboarding process</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Grade</h4>
                <p className="text-white/80 text-sm">Bank-level security with SOC 2 compliance and 99.9% uptime</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                <p className="text-white/80 text-sm">Dedicated success team with deep AI and lending expertise</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"></div>
              <span>Pioneering the future of autonomous lending</span>
              <div className="w-1 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry veterans with decades of combined experience in financial services, AI, and technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#1E51DB] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-medium text-gray-700 mb-1">Expertise:</div>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#1E51DB] hover:text-[#65A8F3] transition-colors text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We push the boundaries of what's possible with AI, constantly exploring new ways to solve complex lending challenges.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We build with security at the core, ensuring our clients' data and operations are protected at the highest level.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client Success</h3>
              <p className="text-gray-600 leading-relaxed">
                Our success is measured by our clients' success. We're committed to delivering transformational results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Lending Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join the growing number of lenders leveraging our agentic AI platform to revolutionize their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
} 