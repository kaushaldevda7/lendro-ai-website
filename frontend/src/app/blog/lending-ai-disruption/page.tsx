"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function LendingAIDisruptionPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 via-emerald-600/10 to-teal-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/10 via-green-600/10 to-lime-700/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/#knowledge-hub" className="hover:text-green-600 transition-colors">Knowledge Hub</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">AI Disruption</span>
              </div>
            </nav>

            {/* Article Header */}
            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">Industry Insights</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Why Traditional Lending
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  is Ripe for AI Disruption
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Analyzing the inefficiencies in current lending processes and how autonomous AI agents can transform operations from application to servicing.
              </p>
              
              {/* Article Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>May 28, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Strategy</span>
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
                  The lending industry, worth over $2.8 trillion globally, operates on processes that haven't fundamentally changed in decades. While other industries have embraced digital transformation, lending remains surprisingly manual, inefficient, and ripe for disruption. The question isn't if AI will transform lending—it's which institutions will lead the charge.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">The Disruption Opportunity</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-green-800 mb-3">Current Pain Points</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>14-day average processing time</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>67% manual document review</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>$1,200 average cost per application</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 mb-3">AI-Powered Future</h3>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>2-hour processing time</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>95% automated processing</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>$180 cost per application</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 1: The Inefficiency Crisis */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Inefficiency Crisis</h2>
                
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200/50 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Where Traditional Lending Falls Short</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-red-600 mb-2">14 Days</div>
                      <div className="text-sm text-gray-700">Average Processing Time</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-orange-600 mb-2">40%</div>
                      <div className="text-sm text-gray-700">Application Abandonment</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-2xl font-bold text-yellow-600 mb-2">$1,200</div>
                      <div className="text-sm text-gray-700">Cost Per Application</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    These inefficiencies aren't just operational challenges—they represent massive competitive disadvantages. In an era where consumers expect instant gratification, a two-week loan approval process feels archaic. Meanwhile, the high cost of manual processing erodes margins and limits scalability.
                  </p>
                </div>
              </div>

              {/* Section 2: The AI Advantage */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The AI Advantage: Beyond Automation</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Intelligent Document Processing</h3>
                        <p className="text-gray-700 mb-4">
                          AI agents can instantly extract, verify, and cross-reference information from any document format—bank statements, tax returns, pay stubs—with 99.7% accuracy. What takes human underwriters hours happens in seconds.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white/60 rounded-lg p-3">
                            <div className="font-semibold text-blue-800 text-sm">Traditional Process</div>
                            <div className="text-gray-600 text-sm">4-6 hours manual review</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3">
                            <div className="font-semibold text-green-800 text-sm">AI Process</div>
                            <div className="text-gray-600 text-sm">15 seconds automated</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Predictive Risk Assessment</h3>
                        <p className="text-gray-700 mb-4">
                          Beyond traditional credit scores, AI analyzes thousands of data points—spending patterns, employment stability, seasonal income variations—to predict default risk with unprecedented accuracy.
                        </p>
                        <div className="bg-white/60 rounded-lg p-4">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Risk Prediction Accuracy</div>
                          <div className="flex items-center gap-4">
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span>Traditional Models</span>
                                <span>73%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full w-[73%]"></div>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span>AI Models</span>
                                <span>96%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full w-[96%]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomous Customer Interaction</h3>
                        <p className="text-gray-700 mb-4">
                          AI agents handle customer inquiries, guide application completion, and provide real-time updates 24/7. They learn from each interaction, becoming more helpful and efficient over time.
                        </p>
                        <div className="grid md:grid-cols-3 gap-3">
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-purple-600">24/7</div>
                            <div className="text-xs text-gray-600">Availability</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-purple-600">3 sec</div>
                            <div className="text-xs text-gray-600">Response Time</div>
                          </div>
                          <div className="bg-white/60 rounded-lg p-3 text-center">
                            <div className="text-lg font-bold text-purple-600">97%</div>
                            <div className="text-xs text-gray-600">Satisfaction</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Market Forces Driving Change */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Market Forces Driving Change</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Consumer Expectations</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Instant approval expectations from digital-first consumers</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Mobile-first application preferences</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Transparent, real-time status updates</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border border-red-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Pressure</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Fintech startups offering instant decisions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Big Tech entering financial services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Alternative lending platforms gaining market share</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Evolution</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Open banking initiatives enabling data sharing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>AI governance frameworks providing clarity</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Digital identity standards reducing friction</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Drivers</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Rising operational costs demanding efficiency</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Margin pressure requiring scale optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>Risk management needs in volatile markets</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: The Transformation Roadmap */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Transformation Roadmap</h2>
                
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200/50">
                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Assessment & Strategy</h3>
                        <p className="text-gray-700 mb-3">Evaluate current processes, identify bottlenecks, and develop a comprehensive AI transformation strategy aligned with business objectives.</p>
                        <div className="text-sm text-green-600 font-medium">Timeline: 4-6 weeks</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Pilot Implementation</h3>
                        <p className="text-gray-700 mb-3">Deploy AI agents for specific use cases—document processing, initial screening, or customer communication—to demonstrate value.</p>
                        <div className="text-sm text-blue-600 font-medium">Timeline: 8-12 weeks</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Full-Scale Deployment</h3>
                        <p className="text-gray-700 mb-3">Roll out comprehensive AI-powered lending platform across all channels, with continuous monitoring and optimization.</p>
                        <div className="text-sm text-purple-600 font-medium">Timeline: 12-16 weeks</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Continuous Evolution</h3>
                        <p className="text-gray-700 mb-3">Leverage machine learning for ongoing improvement, expanding AI capabilities and adapting to market changes.</p>
                        <div className="text-sm text-orange-600 font-medium">Timeline: Ongoing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Time is Now</h2>
                
                <div className="bg-gradient-to-r from-green-600 via-emerald-700 to-teal-800 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">First-Mover Advantage</h3>
                  <p className="text-green-100 mb-6">
                    The lending institutions that embrace AI transformation today will capture disproportionate market share tomorrow. Early adopters are already seeing 3x ROI within the first year of implementation.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="text-green-200 text-sm">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">40%</div>
                      <div className="text-green-200 text-sm">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">300%</div>
                      <div className="text-green-200 text-sm">ROI in Year 1</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  The disruption of traditional lending isn't a distant possibility—it's happening now. The question facing every financial institution is simple: Will you lead the transformation or be left behind by it?
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Lead the Disruption?</h3>
                <p className="text-gray-700 mb-6">
                  Join forward-thinking lenders who are already transforming their operations with AI-powered solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/#roi-calculator"
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Calculate Your Savings
                  </Link>
                  <Link 
                    href="/#contact"
                    className="px-6 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300"
                  >
                    Start Your Transformation
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
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
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