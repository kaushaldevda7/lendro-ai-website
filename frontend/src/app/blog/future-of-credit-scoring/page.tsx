"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function FutureOfCreditScoringPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-indigo-600/10 to-purple-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 via-blue-600/10 to-cyan-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">Thought Leadership</span>
              </div>
            </nav>

            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Thought Leadership</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  The Future of Credit Scoring
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  Beyond FICO in the AI Era
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Why the 70-year-old credit scoring model is being reimagined, and what it means for lenders and borrowers alike.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>April 23, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Dr. Sarah Chen</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  For over seven decades, FICO scores have been the cornerstone of credit decisions in America. But as we stand at the intersection of artificial intelligence and financial services, a fundamental question emerges: Is a three-digit number really the best way to capture a person's creditworthiness?
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">The FICO Paradigm: A Brief History</h2>
                  <p className="text-gray-700 mb-4">
                    Introduced in 1956 by Bill Fair and Earl Isaac, the FICO score revolutionized lending by providing a standardized, objective measure of credit risk. Before FICO, loan decisions were often subjective, inconsistent, and prone to bias.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-blue-600 mb-2">1956</div>
                      <div className="text-sm text-gray-600">FICO Founded</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">90%+</div>
                      <div className="text-sm text-gray-600">US Lenders Use FICO</div>
                    </div>
                    <div className="text-center p-4 bg-white/60 rounded-xl">
                      <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
                      <div className="text-sm text-gray-600">Data Categories</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Limitations We Can No Longer Ignore</h2>

                <p className="text-gray-700 mb-6">
                  While FICO served us well for decades, its limitations have become increasingly apparent in our data-rich, digitally-connected world:
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Invisibles Problem</h3>
                    <p className="text-gray-700">
                      Approximately 45 million Americans are "credit invisible"—they lack sufficient credit history for a traditional score. These aren't necessarily risky borrowers; they're often young adults, immigrants, or people who prefer cash transactions. AI can analyze alternative data to give these individuals a fair chance.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Point-in-Time Snapshot</h3>
                    <p className="text-gray-700">
                      FICO captures a moment frozen in time. Someone who just paid off massive debt might still carry a low score for months. Conversely, someone on the brink of financial trouble might maintain a high score until the crisis hits. AI models can detect trajectory and momentum.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Limited Data Universe</h3>
                    <p className="text-gray-700">
                      Traditional scoring only considers credit bureau data. But a person's financial health extends far beyond credit cards and loans. Rent payments, utility bills, subscription services, income stability—all of these paint a richer picture that AI can synthesize.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The AI-Powered Alternative</h2>

                <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">What Modern AI Credit Assessment Looks Like</h3>
                  <p className="text-blue-100 mb-6">
                    Instead of five rigid data categories, AI models can process thousands of variables, identifying patterns that human analysts—and traditional algorithms—would never catch.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-white mb-2">Traditional FICO</h4>
                      <ul className="text-blue-200 text-sm space-y-1">
                        <li>• Payment history (35%)</li>
                        <li>• Amounts owed (30%)</li>
                        <li>• Length of credit (15%)</li>
                        <li>• New credit (10%)</li>
                        <li>• Credit mix (10%)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">AI-Enhanced Assessment</h4>
                      <ul className="text-purple-200 text-sm space-y-1">
                        <li>• Thousands of data points</li>
                        <li>• Behavioral patterns over time</li>
                        <li>• Income stability indicators</li>
                        <li>• Financial trajectory analysis</li>
                        <li>• Real-time risk adjustment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  The beauty of machine learning lies in its ability to find non-obvious correlations. Research has shown that factors like how someone scrolls through a loan application, the time of day they apply, and even the consistency of their mobile phone usage patterns can be predictive of default risk.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Real Results</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">25-40%</div>
                      <div className="text-sm text-gray-600">More approvals without increased risk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">15-20%</div>
                      <div className="text-sm text-gray-600">Reduction in default rates</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">60%</div>
                      <div className="text-sm text-gray-600">Faster decisions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Fairness Question</h2>

                <p className="text-gray-700 mb-6">
                  Critics rightfully raise concerns about AI bias. If historical lending data contains bias, won't AI models perpetuate it? The answer is: they can, but they don't have to.
                </p>

                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">How Responsible AI Addresses Bias</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Explainable Decisions</h4>
                        <p className="text-gray-600 text-sm">Every AI decision can be traced back to specific factors, allowing for audit and accountability.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Continuous Monitoring</h4>
                        <p className="text-gray-600 text-sm">AI systems can be monitored in real-time for disparate impact across protected classes.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Debiasing Techniques</h4>
                        <p className="text-gray-600 text-sm">Advanced techniques can actively correct for historical biases in training data.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Looking Ahead: The Hybrid Future</h2>

                <p className="text-gray-700 mb-6">
                  FICO isn't going away tomorrow. The realistic near-term future is a hybrid model where traditional scores serve as a baseline, augmented by AI-driven insights. This approach balances regulatory familiarity with technological advancement.
                </p>

                <div className="bg-gradient-to-r from-purple-600 via-violet-700 to-indigo-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">The Road Ahead</h3>
                  <p className="text-purple-100 mb-6">
                    For lenders, the question isn't whether to adopt AI-enhanced credit assessment—it's how quickly you can implement it before competitors capture the market segments you're missing.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2025</div>
                      <div className="text-purple-200 text-sm">Early adopters gain edge</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2027</div>
                      <div className="text-purple-200 text-sm">Regulatory frameworks mature</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2030</div>
                      <div className="text-purple-200 text-sm">AI scoring becomes standard</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Move Beyond Traditional Scoring?</h3>
                <p className="text-gray-700 mb-6">
                  Discover how Lendro.AI's credit assessment agents can help you approve more creditworthy borrowers while reducing risk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/#roi-calculator"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Calculate Your Opportunity
                  </Link>
                  <Link
                    href="/contact"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    Talk to an Expert
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
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
