"use client";

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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 via-emerald-600/10 to-teal-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/10 via-green-500/10 to-teal-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-green-600 transition-colors">Blog</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">Thought Leadership</span>
              </div>
            </nav>

            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">Thought Leadership</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  The Personalization Paradox
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  Custom Credit at Scale
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                Examining the broader implications of the personalization paradox for financial institutions and borrowers alike.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>January 12, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10 min read</span>
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
                  Examining the broader implications of the personalization paradox for financial institutions and borrowers alike. This is an exploration of one of the most important topics in modern lending technology.
                </p>

                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Understanding the fundamentals of this topic is crucial for modern lending operations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">AI and machine learning are transforming how we approach these challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
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

                <div className="bg-gradient-to-r from-green-500 via-emerald-600 to-teal-700 rounded-2xl p-8 text-white mb-12">
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

                <div className="bg-gradient-to-r from-green-50 to-white rounded-2xl p-8 border border-green-200/50 text-center mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h3>
                  <p className="text-gray-700 mb-6">
                    Discover how Lendro.AI can help you navigate this transformation with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      Talk to an Expert
                    </Link>
                    <Link
                      href="/blog"
                      className="px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-all duration-300"
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
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
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
