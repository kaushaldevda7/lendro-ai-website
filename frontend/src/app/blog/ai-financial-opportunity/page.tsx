"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function AIFinancialOpportunityPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll detection for scroll-to-top button
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
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 via-violet-600/10 to-indigo-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/10 via-purple-600/10 to-pink-700/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/#knowledge-hub" className="hover:text-purple-600 transition-colors">Knowledge Hub</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">Market Opportunity</span>
              </div>
            </nav>

            {/* Article Header */}
            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-purple-700">Market Analysis</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  The $2.8 Trillion Opportunity
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  AI in Financial Services
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Breaking down the massive market opportunity for AI-powered lending solutions and what it means for financial institutions of all sizes.
              </p>
              
              {/* Article Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>April 22, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  <span>Market</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  The global financial services industry stands on the precipice of its largest transformation in decades. With a total addressable market of $2.8 trillion, the integration of artificial intelligence into lending operations represents not just an opportunity—it's an imperative for survival and growth in an increasingly competitive landscape.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Size Breakdown</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">$2.8T</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Total Market</div>
                      <div className="text-xs text-gray-600">Global Financial Services</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-violet-600 mb-2">$840B</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Lending Segment</div>
                      <div className="text-xs text-gray-600">AI-Addressable Market</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">$126B</div>
                      <div className="text-sm font-medium text-gray-900 mb-1">Efficiency Gains</div>
                      <div className="text-xs text-gray-600">Annual Savings Potential</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 1: Market Segmentation */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Segmentation & Opportunity</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Banking</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-2xl font-bold text-blue-600 mb-1">$420B</div>
                            <div className="text-sm text-gray-600">Market Size</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600 mb-1">$63B</div>
                            <div className="text-sm text-gray-600">AI Opportunity</div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Traditional banks processing millions of loan applications annually face the highest opportunity for AI transformation. Legacy systems and manual processes create significant efficiency gaps.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Alternative Lending</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-2xl font-bold text-green-600 mb-1">$180B</div>
                            <div className="text-sm text-gray-600">Market Size</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-green-600 mb-1">$36B</div>
                            <div className="text-sm text-gray-600">AI Opportunity</div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Fintech lenders and marketplace platforms are already AI-native but face scaling challenges. Advanced AI agents can unlock exponential growth while maintaining risk standards.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Credit Unions & Community Banks</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="text-2xl font-bold text-purple-600 mb-1">$240B</div>
                            <div className="text-sm text-gray-600">Market Size</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600 mb-1">$27B</div>
                            <div className="text-sm text-gray-600">AI Opportunity</div>
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Smaller institutions face the greatest competitive pressure from AI-powered lenders. Democratized AI solutions can level the playing field and enable community-focused differentiation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Geographic Distribution */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Geographic Market Distribution</h2>
                
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200/50 mb-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm">US</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">$1.2T</div>
                      <div className="text-sm text-gray-600 mb-2">Market Size</div>
                      <div className="text-xs text-blue-600 font-medium">43% of Global</div>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm">EU</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">$840B</div>
                      <div className="text-sm text-gray-600 mb-2">Market Size</div>
                      <div className="text-xs text-green-600 font-medium">30% of Global</div>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm">APAC</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">$560B</div>
                      <div className="text-sm text-gray-600 mb-2">Market Size</div>
                      <div className="text-xs text-purple-600 font-medium">20% of Global</div>
                    </div>
                    
                    <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold text-sm">ROW</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">$200B</div>
                      <div className="text-sm text-gray-600 mb-2">Market Size</div>
                      <div className="text-xs text-orange-600 font-medium">7% of Global</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">North America: Leading Innovation</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Highest AI adoption rates in financial services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Regulatory frameworks supporting innovation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>$180B annual efficiency opportunity</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Europe: Rapid Acceleration</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Open banking driving data accessibility</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>GDPR compliance creating trust advantages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>$126B market transformation potential</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3: Technology Adoption Curve */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Adoption Curve in Financial Services</h2>
                
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200/50 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Adoption Stages</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold">15%</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Early Adopters</h4>
                        <p className="text-gray-700 text-sm">Fintech leaders and digital-first banks with comprehensive AI implementations</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-green-500 h-2 rounded-full w-[15%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold">35%</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Early Majority</h4>
                        <p className="text-gray-700 text-sm">Regional banks and credit unions piloting AI solutions for specific use cases</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-blue-500 h-2 rounded-full w-[35%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold">40%</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Evaluating</h4>
                        <p className="text-gray-700 text-sm">Traditional banks assessing AI strategies and vendor partnerships</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-yellow-500 h-2 rounded-full w-[40%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold">10%</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">Laggards</h4>
                        <p className="text-gray-700 text-sm">Legacy institutions with minimal AI awareness or investment</p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div className="bg-red-500 h-2 rounded-full w-[10%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">The Tipping Point</h3>
                  <p className="text-purple-100 mb-6">
                    We're approaching the critical inflection point where AI adoption accelerates exponentially. Institutions that move now will capture disproportionate market share as the technology becomes table stakes.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2025</div>
                      <div className="text-purple-200 text-sm">Mainstream Adoption</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">75%</div>
                      <div className="text-purple-200 text-sm">Market Penetration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$400B</div>
                      <div className="text-purple-200 text-sm">Annual Value Creation</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Investment Landscape */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Investment & Funding Landscape</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Venture Capital Activity</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">2024 AI FinTech Funding</span>
                        <span className="font-bold text-green-600">$12.4B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">YoY Growth</span>
                        <span className="font-bold text-green-600">+47%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Average Deal Size</span>
                        <span className="font-bold text-green-600">$23M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Unicorns Created</span>
                        <span className="font-bold text-green-600">8</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise Investment</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Bank AI Spending</span>
                        <span className="font-bold text-blue-600">$85B</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">YoY Growth</span>
                        <span className="font-bold text-blue-600">+32%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">ROI Expectations</span>
                        <span className="font-bold text-blue-600">300%+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Payback Period</span>
                        <span className="font-bold text-blue-600">8 months</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Investment Themes</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Risk Management</h4>
                      <p className="text-gray-600 text-sm">Advanced ML models for credit scoring and fraud detection</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Process Automation</h4>
                      <p className="text-gray-600 text-sm">End-to-end workflow optimization and decision automation</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">Customer Experience</h4>
                      <p className="text-gray-600 text-sm">Conversational AI and personalized lending journeys</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Future Projections */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Projections: 2025-2030</h2>
                
                <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-6">5-Year Growth Trajectory</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$4.2T</div>
                      <div className="text-indigo-200 text-sm mb-1">2030 Market Size</div>
                      <div className="text-xs text-indigo-300">50% Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="text-purple-200 text-sm mb-1">AI Penetration</div>
                      <div className="text-xs text-purple-300">vs 15% today</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$680B</div>
                      <div className="text-pink-200 text-sm mb-1">Annual Savings</div>
                      <div className="text-xs text-pink-300">Efficiency Gains</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24%</div>
                      <div className="text-violet-200 text-sm mb-1">CAGR</div>
                      <div className="text-xs text-violet-300">2025-2030</div>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Drivers</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Regulatory approval for AI decision-making</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Open banking data standardization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Cloud infrastructure maturation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Consumer acceptance of AI lending</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Potential Challenges</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Data privacy regulations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Algorithmic bias concerns</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Cybersecurity threats</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Talent acquisition competition</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Seizing the $2.8 Trillion Opportunity</h2>
                
                <div className="bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-800 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">The Winner-Take-Most Dynamic</h3>
                  <p className="text-purple-100 mb-6">
                    In technology-driven markets, early movers often capture disproportionate value. The financial institutions that deploy AI successfully in the next 18 months will establish competitive moats that become increasingly difficult to overcome.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">5x</div>
                      <div className="text-purple-200 text-sm">Market Share Advantage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">40%</div>
                      <div className="text-purple-200 text-sm">Cost Advantage</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">18mo</div>
                      <div className="text-purple-200 text-sm">Window to Lead</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  The $2.8 trillion opportunity in AI-powered financial services isn't just about technology—it's about reimagining what's possible in lending. The institutions that act decisively today will define the industry's future tomorrow.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200/50 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Capture Your Share?</h3>
                <p className="text-gray-700 mb-6">
                  Don't let this historic opportunity pass by. Join the institutions already transforming their lending operations with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/#roi-calculator"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Calculate Your Opportunity
                  </Link>
                  <Link 
                    href="/#contact"
                    className="px-6 py-3 border-2 border-purple-600 text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all duration-300"
                  >
                    Explore Partnership
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
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