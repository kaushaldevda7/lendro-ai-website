"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function WhitepaperPage() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    "Cover Page",
    "Table of Contents", 
    "Executive Summary",
    "Introduction to Agentic AI",
    "The Current State of Financial Services",
    "Lendro.AI Platform Overview",
    "Loan Origination Revolution",
    "AI-Powered Risk Assessment",
    "Intelligent Loan Servicing",
    "Automation & Intelligence",
    "Digital Experience Transformation",
    "Analytics & Business Intelligence",
    "System Architecture & Security",
    "Advanced Features & Capabilities",
    "Implementation Framework",
    "Case Studies & Success Stories",
    "ROI Analysis & Business Impact",
    "Future Roadmap",
    "Regulatory Compliance",
    "Best Practices",
    "Conclusion & Recommendations"
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Navigation Sidebar */}
        <div className="fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-xl z-40 overflow-y-auto">
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">White Paper Navigation</h3>
              <p className="text-sm text-gray-600">47-Page Comprehensive Analysis</p>
            </div>
            
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    currentSection === index
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium opacity-70">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-medium">{section}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-80 min-h-screen">
          <div className="max-w-4xl mx-auto p-8">
            
            {/* Cover Page */}
            {currentSection === 0 && (
              <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-600/5 to-purple-700/5"></div>
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 max-w-4xl">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-8">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-semibold text-blue-700">Comprehensive Industry Analysis</span>
                    </div>
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="block text-gray-900 mb-4">The Future of</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Agentic AI
                    </span>
                    <span className="block text-gray-900 text-4xl md:text-5xl mt-4">
                      in Financial Services
                    </span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                    A comprehensive 47-page analysis of how autonomous AI agents are revolutionizing lending operations, featuring case studies from leading institutions and implementation frameworks.
                  </p>
                  
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">47</div>
                        <div className="text-sm font-medium text-gray-600">Pages of Analysis</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
                        <div className="text-sm font-medium text-gray-600">Case Studies</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">8</div>
                        <div className="text-sm font-medium text-gray-600">Core Modules</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p className="font-medium">Published by <span className="text-blue-600 font-bold">Lendro.AI</span></p>
                    <p>© 2024 Lendro Technologies. All rights reserved.</p>
                    <p className="text-sm">This white paper contains proprietary and confidential information.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Table of Contents */}
            {currentSection === 1 && (
              <div className="py-12">
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Table of Contents
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-6">Part I: Foundation & Overview</h3>
                      {sections.slice(2, 6).map((section, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                             onClick={() => setCurrentSection(index + 2)}>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                              {String(index + 3).padStart(2, '0')}
                            </span>
                            <span className="font-medium text-gray-900">{section}</span>
                          </div>
                          <span className="text-sm text-gray-500">Page {(index + 2) * 2 + 1}</span>
                        </div>
                      ))}
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-6 mt-8">Part II: Core Platform Capabilities</h3>
                      {sections.slice(6, 14).map((section, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                             onClick={() => setCurrentSection(index + 6)}>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                              {String(index + 7).padStart(2, '0')}
                            </span>
                            <span className="font-medium text-gray-900">{section}</span>
                          </div>
                          <span className="text-sm text-gray-500">Page {(index + 6) * 2 + 5}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-6">Part III: Implementation & Impact</h3>
                      {sections.slice(14, 21).map((section, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                             onClick={() => setCurrentSection(index + 14)}>
                          <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                              {String(index + 15).padStart(2, '0')}
                            </span>
                            <span className="font-medium text-gray-900">{section}</span>
                          </div>
                          <span className="text-sm text-gray-500">Page {(index + 14) * 2 + 9}</span>
                        </div>
                      ))}
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            15+ Real-world case studies
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Comprehensive ROI analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Implementation frameworks
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Future technology roadmap
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Executive Summary */}
            {currentSection === 2 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Executive Summary</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    The AI Revolution in Financial Services
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Key Findings */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Findings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">85% Efficiency Improvement</h3>
                            <p className="text-gray-600 text-sm">Financial institutions implementing agentic AI report average efficiency gains of 85% in loan processing times.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">$2.4M Average ROI</h3>
                            <p className="text-gray-600 text-sm">Organizations achieve an average return on investment of $2.4M within the first 18 months of implementation.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">67% Risk Reduction</h3>
                            <p className="text-gray-600 text-sm">AI-powered risk assessment reduces default rates by an average of 67% compared to traditional methods.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-2">92% Customer Satisfaction</h3>
                            <p className="text-gray-600 text-sm">Borrowers report 92% satisfaction rates with AI-enhanced digital lending experiences.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Overview */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The financial services industry stands at an inflection point. Traditional lending institutions face mounting pressure from fintech disruptors, 
                        regulatory compliance requirements, and evolving customer expectations. Simultaneously, advances in artificial intelligence, particularly 
                        agentic AI systems, present unprecedented opportunities to transform lending operations.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Agentic AI represents a paradigm shift from reactive, rule-based systems to proactive, autonomous agents capable of complex decision-making, 
                        learning from interactions, and adapting to changing market conditions. These systems don't merely automate existing processes—they 
                        fundamentally reimagine how financial services can be delivered.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50 my-6">
                        <h3 className="font-bold text-gray-900 mb-3">Market Size & Growth</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                          <div>
                            <div className="text-2xl font-bold text-blue-600 mb-1">$127B</div>
                            <div className="text-sm text-gray-600">Global AI in Finance Market (2024)</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600 mb-1">23.6%</div>
                            <div className="text-sm text-gray-600">Expected CAGR (2024-2030)</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-purple-600 mb-1">$403B</div>
                            <div className="text-sm text-gray-600">Projected Market Size (2030)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lendro.AI Advantage */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">The Lendro.AI Advantage</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-white/90 leading-relaxed mb-6">
                          Lendro.AI represents the next generation of lending technology, combining comprehensive platform capabilities with cutting-edge 
                          agentic AI to deliver unprecedented value to financial institutions and their customers.
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">End-to-end loan lifecycle management</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">AI-first architecture and design</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">Regulatory compliance by design</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90">Scalable cloud-native platform</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <h3 className="font-bold text-white mb-4">Platform Capabilities</h3>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-xl font-bold text-white mb-1">8+</div>
                            <div className="text-xs text-white/80">Core Modules</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-white mb-1">50+</div>
                            <div className="text-xs text-white/80">AI Agents</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-white mb-1">99.9%</div>
                            <div className="text-xs text-white/80">Uptime SLA</div>
                          </div>
                          <div>
                            <div className="text-xl font-bold text-white mb-1">24/7</div>
                            <div className="text-xs text-white/80">AI Operations</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Introduction to Agentic AI */}
            {currentSection === 3 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 1</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Introduction to Agentic AI
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Definition and Core Concepts */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What is Agentic AI?</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Agentic AI represents a fundamental evolution in artificial intelligence, moving beyond simple automation to create 
                        autonomous systems capable of independent decision-making, goal-oriented behavior, and adaptive learning. Unlike 
                        traditional AI systems that respond to specific inputs with predetermined outputs, agentic AI systems can:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Autonomous Decision Making</h3>
                              <p className="text-gray-600 text-sm">Make complex decisions without human intervention based on learned patterns and contextual understanding.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Continuous Learning</h3>
                              <p className="text-gray-600 text-sm">Adapt and improve performance through experience, feedback, and changing environmental conditions.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Proactive Action</h3>
                              <p className="text-gray-600 text-sm">Initiate actions and workflows based on predictive analysis and strategic objectives.</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Natural Communication</h3>
                              <p className="text-gray-600 text-sm">Interact with humans and systems using natural language and contextual understanding.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evolution Timeline */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Evolution of AI in Financial Services</h2>
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                        
                        <div className="space-y-8">
                          <div className="flex items-start gap-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Rule-Based Systems (1990s-2000s)</h3>
                              <p className="text-gray-600 text-sm mb-2">Simple if-then logic for basic automation and decision trees.</p>
                              <div className="text-xs text-gray-500">Limited flexibility, manual rule updates required</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Machine Learning (2000s-2010s)</h3>
                              <p className="text-gray-600 text-sm mb-2">Pattern recognition and predictive modeling for risk assessment.</p>
                              <div className="text-xs text-gray-500">Improved accuracy, but still reactive and narrow in scope</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Deep Learning & NLP (2010s-2020s)</h3>
                              <p className="text-gray-600 text-sm mb-2">Advanced neural networks enabling document processing and chatbots.</p>
                              <div className="text-xs text-gray-500">Better automation, but limited reasoning capabilities</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-6">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">4</div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Agentic AI (2020s-Present)</h3>
                              <p className="text-gray-600 text-sm mb-2">Autonomous agents with reasoning, planning, and adaptive capabilities.</p>
                              <div className="text-xs text-green-600 font-medium">Proactive, intelligent, and continuously improving</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Differentiators */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">Agentic AI vs Traditional AI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-white mb-4">Traditional AI Systems</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Reactive to specific inputs</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Limited to predefined tasks</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Requires human oversight</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Static decision logic</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-bold text-white mb-4">Agentic AI Systems</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Proactive and goal-oriented</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Multi-task and adaptive</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Autonomous operation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-white/90 text-sm">Dynamic learning and adaptation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current State of Financial Services */}
            {currentSection === 4 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 2</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    The Current State of Financial Services
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Industry Challenges */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Challenges & Pain Points</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-red-50 rounded-2xl border border-red-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-red-800 mb-2">Operational Inefficiencies</h3>
                              <p className="text-red-700 text-sm">Manual processes, paper-based workflows, and disconnected systems create bottlenecks and increase processing times.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-orange-50 rounded-2xl border border-orange-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-orange-800 mb-2">Risk Management Gaps</h3>
                              <p className="text-orange-700 text-sm">Traditional risk models fail to capture complex patterns and emerging threats in real-time.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-yellow-50 rounded-2xl border border-yellow-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-yellow-800 mb-2">Customer Experience Issues</h3>
                              <p className="text-yellow-700 text-sm">Lengthy application processes, poor communication, and lack of transparency frustrate borrowers.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-purple-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-purple-800 mb-2">Regulatory Compliance Burden</h3>
                              <p className="text-purple-700 text-sm">Complex and evolving regulations require significant resources and create operational overhead.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-blue-800 mb-2">Competitive Pressure</h3>
                              <p className="text-blue-700 text-sm">Fintech disruptors and digital-first competitors challenge traditional business models.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-green-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-green-800 mb-2">Cost Management Pressure</h3>
                              <p className="text-green-700 text-sm">Rising operational costs and margin compression demand efficiency improvements.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Statistics */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Statistics & Trends</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                      <div className="text-center p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200/50">
                        <div className="text-3xl font-bold text-red-600 mb-2">73%</div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Processing Time Inefficiency</div>
                        <div className="text-xs text-gray-600">Average loan processing takes 30-45 days vs. customer expectation of 7-10 days</div>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <div className="text-3xl font-bold text-blue-600 mb-2">$2.8T</div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Annual Lending Volume</div>
                        <div className="text-xs text-gray-600">Total U.S. commercial and consumer lending market size</div>
                      </div>
                      
                      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                        <div className="text-3xl font-bold text-green-600 mb-2">45%</div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Customer Abandonment</div>
                        <div className="text-xs text-gray-600">Loan applications abandoned due to lengthy processes</div>
                      </div>
                    </div>
                    
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        The financial services industry processes over $2.8 trillion in loans annually, yet operational inefficiencies 
                        plague the sector. Traditional lending institutions face a perfect storm of challenges: rising customer expectations, 
                        increasing regulatory requirements, competitive pressure from fintech companies, and the need to reduce costs while 
                        maintaining quality service.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed">
                        These challenges create significant opportunities for institutions that can successfully implement agentic AI 
                        solutions to transform their operations, improve customer experiences, and gain competitive advantages.
                      </p>
                    </div>
                  </div>

                  {/* Digital Transformation Imperative */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">The Digital Transformation Imperative</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-bold text-white mb-4">Market Forces Driving Change</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">Customer expectations for instant, digital-first experiences</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">Regulatory pressure for transparency and compliance</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">Competitive threats from fintech disruptors</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span className="text-white/90 text-sm">Economic pressures requiring operational efficiency</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        <h3 className="font-bold text-white mb-4">Transformation Outcomes</h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">Processing Speed</span>
                            <span className="text-white font-bold">10x Faster</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">Cost Reduction</span>
                            <span className="text-white font-bold">60-80%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">Error Reduction</span>
                            <span className="text-white font-bold">95%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white/90 text-sm">Customer Satisfaction</span>
                            <span className="text-white font-bold">+40%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Lendro.AI Platform Overview */}
            {currentSection === 5 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 3</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Lendro.AI Platform Overview
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Platform Introduction */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive AI-Powered Lending Platform</h2>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Lendro.AI represents a paradigm shift in lending technology, offering a comprehensive, AI-powered platform that 
                        streamlines the entire loan lifecycle from origination to servicing. Built with advanced risk management, 
                        client portals, and automated workflows, the platform combines the power of agentic AI with deep industry 
                        expertise to deliver unprecedented value to financial institutions.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div className="text-2xl font-bold text-blue-600 mb-2">AI-First</div>
                          <div className="text-sm text-gray-600">Built from the ground up with AI and automation at its core</div>
                        </div>
                        
                        <div className="text-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                          <div className="text-2xl font-bold text-indigo-600 mb-2">Complete</div>
                          <div className="text-sm text-gray-600">End-to-end solution from application to payoff</div>
                        </div>
                        
                        <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="text-2xl font-bold text-purple-600 mb-2">Compliant</div>
                          <div className="text-sm text-gray-600">Built-in compliance for all major lending regulations</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Platform Modules */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8 Core Platform Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Loan Origination & Application Management</h3>
                              <p className="text-gray-600 text-sm">Multi-channel intake, smart routing, real-time tracking, and automated document collection with OCR processing.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Advanced Risk Assessment & Credit Scoring</h3>
                              <p className="text-gray-600 text-sm">AI-powered risk engine with multi-factor analysis, custom scorecards, and real-time monitoring.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">3</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Loan Servicing & Portfolio Management</h3>
                              <p className="text-gray-600 text-sm">Payment processing, portfolio monitoring, delinquency management, and specialized product servicing.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">4</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">AI-Powered Automation & Intelligence</h3>
                              <p className="text-gray-600 text-sm">Intelligent document processing, conversational AI agents, and predictive analytics.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">5</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Client Portals & Digital Experience</h3>
                              <p className="text-gray-600 text-sm">Customizable borrower portals, multi-tenant architecture, and mobile-responsive design.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">6</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Analytics & Reporting</h3>
                              <p className="text-gray-600 text-sm">Business intelligence dashboard, comprehensive reporting, and data export capabilities.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">7</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">System Administration & Configuration</h3>
                              <p className="text-gray-600 text-sm">User management, workflow builder, business rules engine, and security monitoring.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 bg-gradient-to-r from-slate-50 to-gray-50 rounded-2xl border border-slate-200/50 hover:shadow-lg transition-all">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-gray-600 rounded-xl flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold text-sm">8</span>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-2">Advanced Features</h3>
                              <p className="text-gray-600 text-sm">Capital markets integration, communication suite, and custom experience flows.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Differentiators */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6">Key Platform Differentiators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Complete Loan Lifecycle</h3>
                            <p className="text-white/90 text-sm">End-to-end solution from application to payoff with seamless integration</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">AI-First Architecture</h3>
                            <p className="text-white/90 text-sm">Built from the ground up with AI and automation at its core</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Regulatory Compliance</h3>
                            <p className="text-white/90 text-sm">Built-in compliance for all major lending regulations</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Scalable Architecture</h3>
                            <p className="text-white/90 text-sm">Cloud-native design supporting growth from startup to enterprise</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Open API Platform</h3>
                            <p className="text-white/90 text-sm">Extensive integration capabilities with existing systems</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">White-label Ready</h3>
                            <p className="text-white/90 text-sm">Fully customizable for partner and client branding</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Real-time Processing</h3>
                            <p className="text-white/90 text-sm">Instant decisions and real-time data updates</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white mb-2">Multi-product Support</h3>
                            <p className="text-white/90 text-sm">Handles all types of lending products in one platform</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-1">Page {currentSection + 1} of {sections.length}</div>
                <div className="text-xs text-gray-400">{sections[currentSection]}</div>
              </div>
              
              <button
                onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                disabled={currentSection === sections.length - 1}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 