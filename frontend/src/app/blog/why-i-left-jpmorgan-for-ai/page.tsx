"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function WhyILeftJPMorganPage() {
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
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-amber-600/10 to-yellow-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/10 via-orange-600/10 to-red-700/10 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">Personal Journey</span>
              </div>
            </nav>

            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-orange-50 rounded-full border border-orange-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-orange-700">Personal Journey</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Why I Left JPMorgan
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  To Build AI for Lending
                </span>
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                A personal reflection on leaving a 15-year career at one of the world's largest banks to pursue the vision of truly autonomous lending.
              </p>

              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>April 24, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Dr. Sarah Chen, CEO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">

              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                  "Sarah, you're making VP next year. Are you sure about this?"
                </p>

                <p className="text-gray-700 mb-6">
                  Those words from my mentor at JPMorgan still echo in my mind. It was late 2023, and I had just told her I was leaving to start Lendro.AI. On paper, it made no sense. I had spent 15 years climbing the ladder at one of the world's most prestigious financial institutions. I led a team of 40 data scientists. I had job security, great compensation, and a clear path to even greater success.
                </p>

                <p className="text-gray-700 mb-6">
                  But I had also spent those 15 years watching brilliant ideas die in committee meetings. I watched transformative technology get watered down until it was barely recognizable. And most painfully, I watched people who deserved loans get rejected by systems that couldn't see past a three-digit number.
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200/50 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Moment Everything Changed</h2>
                <p className="text-gray-700 mb-4">
                  It was a Tuesday afternoon in March 2023. I was reviewing our new AI model's performance when something caught my eye. Our system had flagged a loan application for automatic rejection—a small business owner named Maria who wanted $50,000 to expand her bakery.
                </p>
                <p className="text-gray-700 mb-4">
                  On paper, Maria looked risky. Limited credit history. No traditional collateral. But when I dug deeper, I saw something our rigid rules-based system couldn't: a business that had grown 300% year over year. A woman who had never missed rent in 12 years. A community of 500+ loyal customers who left glowing reviews.
                </p>
                <p className="text-gray-700 font-medium">
                  Our AI knew she was creditworthy. But our policies wouldn't let it act on that knowledge.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Innovation Paradox at Big Banks</h2>

                <p className="text-gray-700 mb-6">
                  Here's what I learned in 15 years at JPMorgan: Large financial institutions are really good at talking about innovation. They're really bad at actually doing it.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Three-Year Pilot Problem</h3>
                    <p className="text-gray-700">
                      Every promising AI project I worked on followed the same pattern: 6 months to get funding approved, 12 months to build a pilot, another 12 months of "testing," and then... sunset because "priorities shifted." By the time anything reached production, the technology was already outdated.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Risk of No Risk</h3>
                    <p className="text-gray-700">
                      Banks are so afraid of regulatory scrutiny that they've become afraid of improvement itself. I sat in countless meetings where the question wasn't "Will this help our customers?" but "How might a regulator misinterpret this?" The safest thing to do was nothing—and so often, we did nothing.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">The Talent Exodus</h3>
                    <p className="text-gray-700">
                      The best engineers and data scientists I worked with eventually left. Not for more money—for meaning. They wanted to build things that shipped. Things that mattered. Things that helped real people. At a big bank, that's increasingly rare.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Conversation That Started Lendro.AI</h2>

                <div className="bg-gradient-to-r from-orange-600 via-amber-700 to-yellow-800 rounded-2xl p-8 text-white mb-8">
                  <p className="text-orange-100 text-lg italic mb-6">
                    "What if we built the AI system we always wanted to build? No legacy constraints. No three-year pilots. No committees. Just... the best possible technology for lending decisions."
                  </p>
                  <p className="text-orange-200 text-sm">
                    — A conversation with Michael Rodriguez over bad coffee, September 2023
                  </p>
                </div>

                <p className="text-gray-700 mb-6">
                  Michael and I had worked together on five different "transformative" AI projects at the bank. Four were killed before launch. The fifth was so neutered by compliance that it barely qualified as AI.
                </p>

                <p className="text-gray-700 mb-6">
                  That conversation led to weeks of late-night whiteboarding. What would truly autonomous lending look like? Not "AI-assisted"—actually autonomous. What if an AI could make decisions in seconds that currently take weeks? What if it could see creditworthiness that traditional systems miss? What if it could operate without human bottlenecks?
                </p>

                <p className="text-gray-700 mb-6">
                  The more we talked, the more excited we got. And the more we realized we couldn't build this inside a bank. We had to start fresh.
                </p>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Hardest Part: Leaving</h2>

                <p className="text-gray-700 mb-6">
                  I won't pretend it was easy. I had two kids in private school. A mortgage. A husband who understandably asked, "Are you sure?" approximately 400 times.
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200/50 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What I Gave Up</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Guaranteed salary
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          VP promotion track
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Team of 40 people
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Prestige of a big name
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">What I Gained</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Freedom to build
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Speed of execution
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Real impact
                        </li>
                        <li className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Alignment with purpose
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">A Message to Others Feeling the Same Way</h2>

                <p className="text-gray-700 mb-6">
                  If you're sitting in a big bank, frustrated by the pace of change, wondering if there's a better way—I want you to know: there is. But it requires courage. It requires being okay with uncertainty. It requires believing that the problem is worth solving more than the comfort is worth keeping.
                </p>

                <div className="bg-gradient-to-r from-orange-600 via-amber-700 to-yellow-800 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">My Advice</h3>
                  <ul className="space-y-3 text-orange-100">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">1</div>
                      <span>Don't leave just because you're frustrated. Leave because you have a vision you can't shake.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">2</div>
                      <span>Find co-founders who complement your skills and share your values.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">3</div>
                      <span>Your domain expertise is your unfair advantage. Use it.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">4</div>
                      <span>The best time to start was yesterday. The second best time is now.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200/50 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Want to Be Part of the Journey?</h3>
                <p className="text-gray-700 mb-6">
                  We're always looking for talented people who share our vision. If this story resonates with you, let's talk.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/careers"
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Open Positions
                  </Link>
                  <Link
                    href="/about"
                    className="px-6 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
                  >
                    Meet the Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
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
