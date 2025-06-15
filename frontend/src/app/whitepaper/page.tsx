"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';

export default function WhitepaperPage() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-20 left-4 z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-lg rounded-xl p-3 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
        )}

        {/* Navigation Sidebar */}
        <div className={`fixed left-0 top-0 h-full w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-xl z-40 overflow-y-auto transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-2">White Paper Navigation</h3>
              <p className="text-sm text-gray-600">47-Page Comprehensive Analysis</p>
            </div>
            
            <div className="space-y-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSection(index);
                    setIsMobileMenuOpen(false); // Close mobile menu when section is selected
                  }}
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
        <div className="lg:ml-80 min-h-screen">
          <div className="max-w-4xl mx-auto p-4 lg:p-8">
            
            {/* Cover Page */}
            {currentSection === 0 && (
              <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
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
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2">
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
                            Best practices & recommendations
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
                    <span className="text-sm font-semibold text-blue-700">Chapter 1</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Executive Summary
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Key Findings */}
                  <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Key Findings</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-3xl font-bold mb-2">85%</div>
                          <div className="text-sm opacity-90">Efficiency Improvement</div>
                          <p className="text-xs mt-2 opacity-80">Average operational efficiency gains across implementations</p>
                        </div>
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-3xl font-bold mb-2">$2.4M</div>
                          <div className="text-sm opacity-90">Average ROI</div>
                          <p className="text-xs mt-2 opacity-80">Annual return on investment per $1B in assets</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-3xl font-bold mb-2">67%</div>
                          <div className="text-sm opacity-90">Risk Reduction</div>
                          <p className="text-xs mt-2 opacity-80">Decrease in loan default rates through AI assessment</p>
                        </div>
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <div className="text-3xl font-bold mb-2">92%</div>
                          <div className="text-sm opacity-90">Customer Satisfaction</div>
                          <p className="text-xs mt-2 opacity-80">Client satisfaction scores post-implementation</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Overview */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          The global AI in finance market is experiencing unprecedented growth, reaching $127 billion in 2024 
                          and projected to exceed $450 billion by 2030. Agentic AI represents the next evolutionary step, 
                          moving beyond traditional automation to autonomous decision-making systems.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">73% of financial institutions report processing inefficiencies</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">$2.8 trillion in annual lending volume globally</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">45% customer abandonment rate in traditional lending</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Market Drivers</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span>Increasing demand for instant financial decisions</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></div>
                            <span>Rising operational costs and competitive pressure</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                            <span>Regulatory requirements for enhanced risk management</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                            <span>Customer expectations for digital-first experiences</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lendro.AI Advantage */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Lendro.AI Advantage</h2>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      Lendro.AI represents a paradigm shift in financial technology, offering the industry's first 
                      comprehensive agentic AI platform specifically designed for lending operations. Our platform 
                      combines advanced machine learning, natural language processing, and autonomous decision-making 
                      to create truly intelligent financial services.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-center">Autonomous Intelligence</h3>
                        <p className="text-gray-600 text-sm text-center">Self-learning AI agents that adapt and improve decision-making over time</p>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-center">Enterprise Security</h3>
                        <p className="text-gray-600 text-sm text-center">Bank-grade security with SOC 2 compliance and advanced encryption</p>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-3 text-center">Seamless Integration</h3>
                        <p className="text-gray-600 text-sm text-center">API-first architecture with 150+ pre-built connectors</p>
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
                    <span className="text-sm font-semibold text-blue-700">Chapter 2</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Introduction to Agentic AI
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Definition and Core Concepts */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Definition and Core Concepts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Agentic AI represents a revolutionary advancement in artificial intelligence, characterized by 
                          autonomous agents capable of independent decision-making, goal-oriented behavior, and adaptive 
                          learning. Unlike traditional AI systems that follow predetermined rules, agentic AI can reason, 
                          plan, and execute complex tasks with minimal human intervention.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Autonomy</h3>
                            <p className="text-gray-600 text-sm">Ability to operate independently and make decisions without constant human oversight</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Adaptability</h3>
                            <p className="text-gray-600 text-sm">Continuous learning and improvement based on new data and experiences</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Goal-Oriented</h3>
                            <p className="text-gray-600 text-sm">Focused on achieving specific objectives through strategic planning and execution</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Key Characteristics</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Proactive Behavior</div>
                              <div className="text-gray-600 text-xs">Initiates actions based on environmental changes</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Social Interaction</div>
                              <div className="text-gray-600 text-xs">Communicates and collaborates with other agents and humans</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Reactive Responses</div>
                              <div className="text-gray-600 text-xs">Responds appropriately to environmental stimuli</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">Temporal Continuity</div>
                              <div className="text-gray-600 text-xs">Maintains persistent identity and memory over time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Evolution Timeline */}
                  <div className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Evolution of AI in Financial Services</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center">
                          <div className="text-lg font-bold mb-2">1990s-2000s</div>
                          <div className="text-sm font-semibold mb-2">Rule-Based Systems</div>
                          <div className="text-xs opacity-90">Basic automation with predefined rules and decision trees</div>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center">
                          <div className="text-lg font-bold mb-2">2000s-2010s</div>
                          <div className="text-sm font-semibold mb-2">Machine Learning</div>
                          <div className="text-xs opacity-90">Statistical models for pattern recognition and prediction</div>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center">
                          <div className="text-lg font-bold mb-2">2010s-2020s</div>
                          <div className="text-sm font-semibold mb-2">Deep Learning</div>
                          <div className="text-xs opacity-90">Neural networks for complex data analysis and automation</div>
                        </div>
                        
                        <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl text-center border border-white/30">
                          <div className="text-lg font-bold mb-2">2020s+</div>
                          <div className="text-sm font-semibold mb-2">Agentic AI</div>
                          <div className="text-xs opacity-90">Autonomous agents with reasoning and decision-making capabilities</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Traditional vs Agentic AI */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional AI vs. Agentic AI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200/50">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">Traditional AI Systems</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Reactive and rule-based responses</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Requires constant human supervision</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Limited to predefined scenarios</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Static learning capabilities</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Single-task optimization</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">Agentic AI Systems</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Proactive and autonomous decision-making</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Operates independently with minimal oversight</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Adapts to novel situations and contexts</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Continuous learning and improvement</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">Multi-task coordination and optimization</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* The Current State of Financial Services */}
            {currentSection === 4 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 3</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    The Current State of Financial Services
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Industry Challenges */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Challenges</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border border-red-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Operational Inefficiencies</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Manual document processing taking 5-15 days
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              73% of institutions report processing bottlenecks
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Average 40% staff time on repetitive tasks
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Risk Management Gaps</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Limited real-time risk assessment capabilities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Reactive rather than predictive risk models
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Inconsistent risk scoring across channels
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Customer Experience Issues</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              45% customer abandonment rate in applications
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Limited self-service capabilities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Inconsistent omnichannel experiences
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Regulatory Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Complex multi-jurisdictional requirements
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Manual compliance monitoring processes
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              High cost of regulatory reporting
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Competitive Pressure</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Fintech disruption with faster services
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Pressure to reduce time-to-market
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Need for innovative product offerings
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Cost Management</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                              Rising operational costs year-over-year
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                              Pressure to maintain profit margins
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                              Need for operational efficiency gains
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Market Statistics */}
                  <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Market Statistics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">73%</div>
                        <div className="text-sm text-white/80 mb-2">Processing Inefficiency</div>
                        <div className="text-xs text-white/60">Financial institutions reporting significant operational bottlenecks</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">$2.8T</div>
                        <div className="text-sm text-white/80 mb-2">Annual Lending Volume</div>
                        <div className="text-xs text-white/60">Global lending market size requiring efficient processing</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">45%</div>
                        <div className="text-sm text-white/80 mb-2">Customer Abandonment</div>
                        <div className="text-xs text-white/60">Application abandonment rate in traditional lending processes</div>
                      </div>
                    </div>
                  </div>

                  {/* Digital Transformation Imperative */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">The Digital Transformation Imperative</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Financial institutions face unprecedented pressure to modernize their operations. The convergence of 
                          customer expectations, regulatory requirements, and competitive dynamics has created an urgent need 
                          for comprehensive digital transformation. Traditional approaches are no longer sufficient to meet 
                          the demands of today's financial services landscape.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">Immediate Action Required</h3>
                              <p className="text-gray-600 text-sm">Institutions must act now to remain competitive and compliant</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">Technology as Enabler</h3>
                              <p className="text-gray-600 text-sm">AI and automation are key to achieving operational excellence</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 mb-1">Measurable ROI</h3>
                              <p className="text-gray-600 text-sm">Digital transformation delivers quantifiable business value</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Key Success Factors</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-white/60 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2">Strategic Vision</h4>
                            <p className="text-gray-600 text-sm">Clear roadmap aligned with business objectives and customer needs</p>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2">Technology Platform</h4>
                            <p className="text-gray-600 text-sm">Scalable, secure, and integrated technology infrastructure</p>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2">Change Management</h4>
                            <p className="text-gray-600 text-sm">Comprehensive training and organizational change support</p>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <h4 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h4>
                            <p className="text-gray-600 text-sm">Ongoing investment in emerging technologies and capabilities</p>
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
                    <span className="text-sm font-semibold text-blue-700">Chapter 4</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Lendro.AI Platform Overview
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Platform Introduction */}
                  <div className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 rounded-3xl p-8 text-white shadow-xl">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold mb-4">The Complete AI-Powered Lending Platform</h2>
                      <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        Lendro.AI delivers the industry's most comprehensive agentic AI platform, designed specifically 
                        for modern financial institutions seeking to transform their lending operations through intelligent automation.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-2xl font-bold mb-2">8</div>
                        <div className="text-sm opacity-90">Core Modules</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-2xl font-bold mb-2">150+</div>
                        <div className="text-sm opacity-90">API Connectors</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-2xl font-bold mb-2">99.99%</div>
                        <div className="text-sm opacity-90">Uptime SLA</div>
                      </div>
                      <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-2xl font-bold mb-2">SOC 2</div>
                        <div className="text-sm opacity-90">Compliance</div>
                      </div>
                    </div>
                  </div>

                  {/* 8 Core Modules */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">8 Core Modules</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">1. Loan Origination & Application Management</h3>
                            <p className="text-gray-600 text-sm">End-to-end application processing with intelligent automation</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Multi-channel application capture
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Intelligent document processing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Automated workflow management
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">2. Advanced Risk Assessment & Credit Scoring</h3>
                            <p className="text-gray-600 text-sm">AI-powered risk evaluation with real-time decisioning</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Multi-factor risk analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Custom scorecard builder
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Alternative data integration
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">3. Loan Servicing & Portfolio Management</h3>
                            <p className="text-gray-600 text-sm">Comprehensive loan lifecycle management platform</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Automated payment processing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Portfolio performance monitoring
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Delinquency management
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">4. AI-Powered Automation & Intelligence</h3>
                            <p className="text-gray-600 text-sm">Intelligent agents for autonomous operations</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Document processing AI
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Conversational AI agents
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            Predictive analytics engine
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">5. Client Portals & Digital Experience</h3>
                            <p className="text-gray-600 text-sm">Modern customer-facing digital interfaces</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            Mobile-first design
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            White-label capabilities
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                            Real-time account access
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">6. Analytics & Reporting</h3>
                            <p className="text-gray-600 text-sm">Advanced business intelligence and insights</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                            Real-time dashboards
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                            Regulatory reporting
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                            Predictive analytics
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl border border-red-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">7. System Administration & Configuration</h3>
                            <p className="text-gray-600 text-sm">Comprehensive platform management tools</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            User management & permissions
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            Workflow configuration
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            System monitoring
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200/50">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900">8. Advanced Features</h3>
                            <p className="text-gray-600 text-sm">Enterprise-grade capabilities and integrations</p>
                          </div>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                            Capital markets integration
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                            Omnichannel communication
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-violet-500 rounded-full"></div>
                            Custom workflow builder
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Platform Architecture */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Cloud-Native Foundation</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Microservices architecture
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Container-based deployment
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Multi-cloud support (AWS, Azure, GCP)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            Auto-scaling infrastructure
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">AI/ML Technology Stack</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Advanced NLP & OCR engines
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Machine learning models
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Real-time decision engines
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Predictive analytics framework
                          </li>
                        </ul>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Security-First Design</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            End-to-end encryption
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Multi-factor authentication
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            SOC 2 Type II compliance
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            GDPR & CCPA ready
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Key Differentiators */}
                  <div className="bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Key Differentiators</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Complete Lifecycle Coverage</h3>
                          <p className="text-sm opacity-90">End-to-end lending operations from application to payoff</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">AI-First Architecture</h3>
                          <p className="text-sm opacity-90">Built from ground up with artificial intelligence at the core</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Regulatory Compliance</h3>
                          <p className="text-sm opacity-90">Built-in compliance with FCRA, ECOA, and state regulations</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Scalable Architecture</h3>
                          <p className="text-sm opacity-90">Handles millions of transactions with sub-second response times</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Open API Platform</h3>
                          <p className="text-sm opacity-90">150+ pre-built connectors and RESTful API architecture</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">White-Label Ready</h3>
                          <p className="text-sm opacity-90">Fully customizable branding and user experience</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Real-Time Processing</h3>
                          <p className="text-sm opacity-90">Instant decisions and real-time data synchronization</p>
                        </div>
                        
                        <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                          <h3 className="font-bold mb-2">Multi-Product Support</h3>
                          <p className="text-sm opacity-90">Personal, business, auto, SBA, and equipment loans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Loan Origination Revolution */}
            {currentSection === 6 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 5</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Loan Origination Revolution
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Multi-Channel Application Processing */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-Channel Application Processing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's loan origination module transforms the traditional application process through 
                          intelligent automation and seamless multi-channel integration. Our platform captures applications 
                          from any source and processes them through a unified, AI-powered workflow that reduces processing 
                          time from weeks to minutes.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Digital-First Approach</h3>
                            <p className="text-gray-600 text-sm">Mobile-optimized applications with progressive data collection</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Omnichannel Integration</h3>
                            <p className="text-gray-600 text-sm">Seamless experience across web, mobile, branch, and partner channels</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Real-Time Processing</h3>
                            <p className="text-gray-600 text-sm">Instant application validation and preliminary decisioning</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Application Channels</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Mobile Applications</div>
                              <div className="text-gray-600 text-sm">Native iOS/Android apps with biometric authentication</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Web Portals</div>
                              <div className="text-gray-600 text-sm">Responsive web applications with auto-save functionality</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Branch Systems</div>
                              <div className="text-gray-600 text-sm">Integrated branch workflows with assisted application</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 p-3 bg-white/60 rounded-xl">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">Partner APIs</div>
                              <div className="text-gray-600 text-sm">Third-party integrations with lead generation partners</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Intelligent Document Collection & Processing */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Intelligent Document Collection & Processing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Advanced OCR Technology</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            99.5% accuracy rate on financial documents
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Support for 50+ document types
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Real-time data extraction and validation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Multi-language document processing
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Smart Document Classification</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Automatic document type identification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Intelligent field mapping and extraction
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Fraud detection and verification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Quality scoring and confidence metrics
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Automated Verification</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Real-time income and employment verification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Bank statement analysis and categorization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Asset verification and valuation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Cross-reference validation with external sources
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Flexible Product Configuration */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Flexible Product Configuration</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Personal Loans</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Unsecured personal lending
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Debt consolidation products
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Home improvement financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Medical and emergency loans
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Business Loans</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Working capital financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Commercial real estate loans
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Merchant cash advances
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Invoice factoring solutions
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Auto Loans</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              New and used vehicle financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Refinancing and lease buyouts
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Motorcycle and RV financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Dealer and direct lending programs
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Lines of Credit</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Personal lines of credit
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Business credit lines
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Home equity lines of credit
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Revolving credit facilities
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">SBA Loans</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              SBA 7(a) standard loans
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              SBA Express and FastTrack loans
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              SBA 504 real estate financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Microloans and disaster relief
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Equipment Financing</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Heavy machinery and construction equipment
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Medical and dental equipment
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Technology and software financing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Lease-to-own and rental programs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AI-Powered Risk Assessment */}
            {currentSection === 7 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 6</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    AI-Powered Risk Assessment
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Advanced Multi-Factor Risk Engine */}
                  <div className="bg-gradient-to-r from-red-600 via-orange-700 to-yellow-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Advanced Multi-Factor Risk Engine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Credit Scores</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>FICO & VantageScore</li>
                          <li>Tri-bureau reporting</li>
                          <li>Alternative credit models</li>
                          <li>Real-time score monitoring</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Financial Data</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Income verification</li>
                          <li>Bank account analysis</li>
                          <li>Debt-to-income ratios</li>
                          <li>Cash flow patterns</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Alternative Data</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Utility payment history</li>
                          <li>Rental payment data</li>
                          <li>Digital footprint analysis</li>
                          <li>Behavioral indicators</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Real-Time Monitoring</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Continuous risk assessment</li>
                          <li>Portfolio health tracking</li>
                          <li>Early warning systems</li>
                          <li>Dynamic risk scoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Custom Scorecard Builder */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Custom Scorecard Builder</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's advanced scorecard builder empowers financial institutions to create sophisticated, 
                          custom risk models tailored to their specific market segments and risk appetite. Our platform 
                          combines traditional credit metrics with alternative data sources and machine learning algorithms 
                          to deliver unprecedented accuracy in risk assessment.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Rule-Based Scoring</h3>
                            <p className="text-gray-600 text-sm">Traditional credit scoring with customizable rules and thresholds</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Machine Learning Models</h3>
                            <p className="text-gray-600 text-sm">Advanced AI algorithms that learn from historical data patterns</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">A/B Testing Framework</h3>
                            <p className="text-gray-600 text-sm">Compare model performance and optimize decision strategies</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Scorecard Features</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Drag & Drop Interface</h4>
                              <p className="text-gray-600 text-sm">Intuitive visual builder for creating complex scoring models</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Performance Analytics</h4>
                              <p className="text-gray-600 text-sm">Real-time model performance tracking and optimization</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Version Control</h4>
                              <p className="text-gray-600 text-sm">Track changes and rollback capabilities for model management</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Regulatory Compliance</h4>
                              <p className="text-gray-600 text-sm">Built-in compliance checks and audit trail capabilities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Model Performance Metrics */}
                  <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Model Performance Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">96%</div>
                        <div className="text-sm text-white/80 mb-2">Prediction Accuracy</div>
                        <div className="text-xs text-white/60">Default prediction accuracy across all loan types</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">67%</div>
                        <div className="text-sm text-white/80 mb-2">Risk Reduction</div>
                        <div className="text-xs text-white/60">Average reduction in portfolio default rates</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">23%</div>
                        <div className="text-sm text-white/80 mb-2">Approval Rate Increase</div>
                        <div className="text-xs text-white/60">Improved approval rates for qualified borrowers</div>
                      </div>
                      <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="text-4xl font-bold text-white mb-2">8x</div>
                        <div className="text-sm text-white/80 mb-2">Faster Decisions</div>
                        <div className="text-xs text-white/60">Speed improvement in risk assessment processing</div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance Framework */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Comprehensive Compliance Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">FCRA Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Fair Credit Reporting Act adherence
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Adverse action notice automation
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Credit report dispute handling
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Consumer disclosure requirements
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">ECOA Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Equal Credit Opportunity Act compliance
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Anti-discrimination safeguards
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Protected class monitoring
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Fair lending analytics
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">State Regulations</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Multi-state licensing compliance
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Interest rate cap enforcement
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              State-specific disclosure requirements
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Regulatory reporting automation
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">GDPR Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Data protection and privacy controls
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Right to be forgotten implementation
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Consent management framework
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Data breach notification protocols
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Audit & Documentation</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Comprehensive audit trails
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Decision documentation and reasoning
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Model governance framework
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Regulatory examination readiness
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Model Validation</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Statistical validation testing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Backtesting and stress testing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Model performance monitoring
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Independent validation reports
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Intelligent Loan Servicing */}
            {currentSection === 8 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 7</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Intelligent Loan Servicing
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Automated Payment Processing */}
                  <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-cyan-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Automated Payment Processing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Multi-Channel Payments</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            ACH and wire transfers
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Credit and debit card processing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Digital wallet integration
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Cryptocurrency payments
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Smart Scheduling</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Flexible payment dates
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Bi-weekly and weekly options
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Skip payment programs
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Seasonal payment adjustments
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Fraud Protection</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Real-time fraud detection
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Multi-factor authentication
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Behavioral analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Chargeback protection
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Management Dashboard */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Management Dashboard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's portfolio management system provides comprehensive oversight of your entire loan 
                          portfolio with real-time analytics, predictive insights, and automated risk monitoring. 
                          Our intelligent dashboard empowers loan officers and portfolio managers with the tools they 
                          need to optimize performance and minimize risk.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Real-Time Analytics</h3>
                            <p className="text-gray-600 text-sm">Live portfolio performance metrics and trend analysis</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Risk Monitoring</h3>
                            <p className="text-gray-600 text-sm">Continuous assessment of portfolio health and early warning alerts</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Performance Optimization</h3>
                            <p className="text-gray-600 text-sm">AI-driven recommendations for portfolio improvement</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Key Performance Indicators</h3>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="p-4 bg-white/60 rounded-xl text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">2.3%</div>
                            <div className="text-xs text-gray-600">Default Rate</div>
                          </div>
                          <div className="p-4 bg-white/60 rounded-xl text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">94.7%</div>
                            <div className="text-xs text-gray-600">Collection Rate</div>
                          </div>
                          <div className="p-4 bg-white/60 rounded-xl text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">$2.4B</div>
                            <div className="text-xs text-gray-600">Portfolio Value</div>
                          </div>
                          <div className="p-4 bg-white/60 rounded-xl text-center">
                            <div className="text-2xl font-bold text-orange-600 mb-1">8.2%</div>
                            <div className="text-xs text-gray-600">Yield Rate</div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Current Loans</span>
                            <span className="text-sm font-semibold text-gray-900">12,847</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">30+ Days Past Due</span>
                            <span className="text-sm font-semibold text-red-600">3.2%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Average Loan Size</span>
                            <span className="text-sm font-semibold text-gray-900">$187K</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delinquency Management */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Delinquency Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Early Warning System</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Predictive delinquency modeling
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Behavioral pattern analysis
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Risk score monitoring
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                              Proactive intervention triggers
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 4.828A4 4 0 015.5 4H9v1H5.5a3 3 0 00-2.121.879l-.707.707A1 1 0 012 7.414V11H1V7.414a2 2 0 01.586-1.414l.707-.707a5 5 0 013.535-1.465z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Collections Workflow</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Automated collection sequences
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Multi-channel communication
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Payment plan negotiations
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Legal action management
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Customer Communication</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Personalized messaging
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              SMS, email, and voice calls
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Chatbot integration
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Compliance monitoring
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Performance Analytics</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Collection effectiveness tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Recovery rate optimization
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Cost per collection analysis
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              ROI measurement
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Collection Statistics</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">Recovery Rate</span>
                              <span className="text-sm font-bold text-green-600">87%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '87%'}}></div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">Contact Success</span>
                              <span className="text-sm font-bold text-blue-600">73%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '73%'}}></div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">Payment Arrangements</span>
                              <span className="text-sm font-bold text-purple-600">64%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{width: '64%'}}></div>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h4 className="font-semibold text-gray-900 mb-2">Key Metrics</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Avg. Days to Contact</span>
                                <span className="font-semibold">2.3</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Cost per Collection</span>
                                <span className="font-semibold">$47</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Right Party Contact Rate</span>
                                <span className="font-semibold">68%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Self-Service Portal */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Customer Self-Service Portal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Account Management</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Balance and payment history</li>
                          <li>Statement downloads</li>
                          <li>Contact information updates</li>
                          <li>Document uploads</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Payment Options</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>One-time payments</li>
                          <li>AutoPay setup</li>
                          <li>Payment scheduling</li>
                          <li>Multiple payment methods</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Support & Help</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>24/7 chatbot assistance</li>
                          <li>FAQ and knowledge base</li>
                          <li>Live chat support</li>
                          <li>Video tutorials</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.828 4.828A4 4 0 015.5 4H9v1H5.5a3 3 0 00-2.121.879l-.707.707A1 1 0 012 7.414V11H1V7.414a2 2 0 01.586-1.414l.707-.707a5 5 0 013.535-1.465z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Loan Modifications</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Hardship applications</li>
                          <li>Payment deferrals</li>
                          <li>Refinancing options</li>
                          <li>Rate modification requests</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Automation & Intelligence */}
            {currentSection === 9 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 8</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Automation & Intelligence
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* AI-Powered Automation Engine */}
                  <div className="bg-gradient-to-r from-violet-600 via-purple-700 to-fuchsia-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">AI-Powered Automation Engine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Document Processing</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Intelligent OCR extraction</li>
                          <li>Data validation & verification</li>
                          <li>Classification & routing</li>
                          <li>Exception handling</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Decision Automation</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Real-time credit decisions</li>
                          <li>Risk-based pricing</li>
                          <li>Automated underwriting</li>
                          <li>Compliance checking</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Communication</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Automated notifications</li>
                          <li>Personalized messaging</li>
                          <li>Multi-channel delivery</li>
                          <li>Response tracking</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Workflow Management</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Process orchestration</li>
                          <li>Task prioritization</li>
                          <li>Resource allocation</li>
                          <li>Performance monitoring</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Conversational AI Agents */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Conversational AI Agents</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's conversational AI agents provide 24/7 customer support and assistance throughout 
                          the lending journey. Our advanced natural language processing capabilities enable human-like 
                          interactions that can handle complex queries, guide customers through processes, and escalate 
                          to human agents when necessary.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Natural Language Understanding</h3>
                            <p className="text-gray-600 text-sm">Advanced NLP that comprehends context, intent, and sentiment</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Language Support</h3>
                            <p className="text-gray-600 text-sm">Seamless communication in 25+ languages with cultural awareness</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Continuous Learning</h3>
                            <p className="text-gray-600 text-sm">AI agents improve through every interaction and feedback loop</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">AI Agent Capabilities</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Application Assistance</h4>
                              <p className="text-gray-600 text-sm">Guide customers through loan applications step-by-step</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">FAQ & Support</h4>
                              <p className="text-gray-600 text-sm">Instant answers to common questions and troubleshooting</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Payment Processing</h4>
                              <p className="text-gray-600 text-sm">Secure payment collection and scheduling assistance</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Compliance Monitoring</h4>
                              <p className="text-gray-600 text-sm">Ensure all interactions meet regulatory requirements</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Performance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">94%</div>
                              <div className="text-gray-600">Resolution Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">2.3s</div>
                              <div className="text-gray-600">Avg Response Time</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Intelligent Workflow Management */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Workflow Management</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Process Orchestration</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Dynamic workflow routing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Conditional logic processing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Parallel task execution
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Exception handling & recovery
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Smart Prioritization</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              AI-driven task ranking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Urgency-based scheduling
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Resource availability matching
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              SLA compliance monitoring
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Resource Optimization</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Intelligent load balancing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Skill-based task assignment
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Capacity planning & forecasting
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Performance optimization
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Real-Time Analytics</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Live workflow monitoring
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Bottleneck identification
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Performance metrics tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Predictive insights
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Workflow Performance</h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">Processing Speed</span>
                              <span className="text-sm font-bold text-blue-600">8.5x Faster</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">Error Reduction</span>
                              <span className="text-sm font-bold text-green-600">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                            </div>
                          </div>
                          
                          <div className="p-4 bg-white/60 rounded-xl">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-gray-700">SLA Compliance</span>
                              <span className="text-sm font-bold text-purple-600">98.7%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{width: '98.7%'}}></div>
                            </div>
                          </div>
                          
                          <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h4 className="font-semibold text-gray-900 mb-2">Key Metrics</h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-gray-600">Avg. Processing Time</span>
                                <span className="font-semibold">4.2 min</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Daily Throughput</span>
                                <span className="font-semibold">12,500</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Automation Rate</span>
                                <span className="font-semibold">87%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Predictive Analytics Engine */}
                  <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Predictive Analytics Engine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Market Forecasting</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Demand prediction modeling
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Economic trend analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Competitive intelligence
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Seasonal pattern recognition
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Risk Prediction</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Early delinquency detection
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Portfolio stress testing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Credit migration modeling
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Loss forecasting
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-center mb-4">Customer Insights</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Behavioral segmentation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Lifetime value prediction
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Churn probability scoring
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Cross-sell opportunities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 10: Digital Experience Transformation */}
            {currentSection === 10 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 9</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Digital Experience Transformation
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Customer Portal Revolution */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Customer Portal Revolution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Account Management</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Real-time loan balances</li>
                          <li>Payment history & scheduling</li>
                          <li>Document upload & signatures</li>
                          <li>Loan modification requests</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Communication Hub</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Secure messaging</li>
                          <li>Automated notifications</li>
                          <li>Educational content</li>
                          <li>Multi-channel support</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Mobile Experience</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Native iOS/Android apps</li>
                          <li>Progressive web app</li>
                          <li>Biometric authentication</li>
                          <li>Offline capabilities</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Omnichannel Integration</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Unified customer journey</li>
                          <li>Seamless handoffs</li>
                          <li>Consistent experience</li>
                          <li>Cross-channel data sync</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Mobile-First Experience */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Mobile-First Experience</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's mobile-first approach ensures customers can access all lending services seamlessly 
                          across devices. Our native mobile applications and progressive web app deliver exceptional 
                          user experiences with offline capabilities, biometric security, and intuitive interfaces 
                          optimized for financial services.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Native Performance</h3>
                            <p className="text-gray-600 text-sm">Optimized iOS and Android apps with platform-specific features</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Progressive Web App</h3>
                            <p className="text-gray-600 text-sm">Cross-platform compatibility with app-like experience in browsers</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Advanced Security</h3>
                            <p className="text-gray-600 text-sm">Multi-factor authentication with biometric and device fingerprinting</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Mobile Features</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Quick Actions</h4>
                              <p className="text-gray-600 text-sm">One-tap payments, balance checks, and support access</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Camera Integration</h4>
                              <p className="text-gray-600 text-sm">Document capture, check deposits, and ID verification</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Voice Commands</h4>
                              <p className="text-gray-600 text-sm">Hands-free account management and navigation</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Location Services</h4>
                              <p className="text-gray-600 text-sm">Branch finder, ATM locator, and geo-based features</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Mobile Usage Stats</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">78%</div>
                              <div className="text-gray-600">Mobile Traffic</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">4.8★</div>
                              <div className="text-gray-600">App Store Rating</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Omnichannel Integration */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Omnichannel Integration</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Web Portal</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Responsive design optimization
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Auto-save functionality
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Cross-browser compatibility
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Accessibility compliance
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Mobile App</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Native performance
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Push notifications
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Offline capabilities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Biometric authentication
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Call Center</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Complete customer context
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Screen sharing capabilities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Real-time data access
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Escalation workflows
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Branch Systems</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Assisted application processing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Document scanning integration
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Staff dashboard access
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Customer handoff protocols
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                          <h3 className="font-bold text-gray-900 mb-4">Omnichannel Benefits</h3>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Customer Satisfaction</span>
                              <span className="text-sm font-bold text-green-600">+23%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Application Completion</span>
                              <span className="text-sm font-bold text-blue-600">+34%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Support Efficiency</span>
                              <span className="text-sm font-bold text-purple-600">+45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Cross-Channel Usage</span>
                              <span className="text-sm font-bold text-indigo-600">89%</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <h3 className="font-bold text-gray-900 mb-4">Digital Engagement</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">2.4M</div>
                              <div className="text-gray-600">Monthly Users</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">4.7min</div>
                              <div className="text-gray-600">Session Duration</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-indigo-600">89%</div>
                              <div className="text-gray-600">Task Completion</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-pink-600">4.9★</div>
                              <div className="text-gray-600">User Rating</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Analytics & Business Intelligence */}
            {currentSection === 11 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 10</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Analytics & Business Intelligence
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Data Analytics Platform */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Data Analytics Platform</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Data Integration</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Multi-source data ingestion</li>
                          <li>Real-time data streaming</li>
                          <li>ETL/ELT processing</li>
                          <li>Data quality validation</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Visualization</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Interactive dashboards</li>
                          <li>Custom chart libraries</li>
                          <li>Drill-down capabilities</li>
                          <li>Mobile-responsive views</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Machine Learning</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Automated model training</li>
                          <li>Feature engineering</li>
                          <li>Model deployment</li>
                          <li>Performance monitoring</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Advanced Analytics</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Statistical modeling</li>
                          <li>Cohort analysis</li>
                          <li>A/B testing framework</li>
                          <li>Anomaly detection</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* BI and Reporting Tools */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">BI and Reporting Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's comprehensive business intelligence suite transforms raw data into actionable insights. 
                          Our platform provides real-time dashboards, automated reporting, and advanced analytics capabilities 
                          that enable data-driven decision making across all levels of your organization.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Executive Dashboards</h3>
                            <p className="text-gray-600 text-sm">High-level KPIs and strategic metrics for leadership teams</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Operational Reports</h3>
                            <p className="text-gray-600 text-sm">Detailed operational metrics for day-to-day management</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Regulatory Reporting</h3>
                            <p className="text-gray-600 text-sm">Automated compliance reports for regulatory requirements</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Reporting Features</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Scheduled Reports</h4>
                              <p className="text-gray-600 text-sm">Automated report generation and distribution</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Custom Templates</h4>
                              <p className="text-gray-600 text-sm">Branded report templates with flexible layouts</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Data Export</h4>
                              <p className="text-gray-600 text-sm">Multiple export formats (PDF, Excel, CSV, API)</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Interactive Filters</h4>
                              <p className="text-gray-600 text-sm">Dynamic filtering and drill-down capabilities</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Performance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">10TB/hour</div>
                              <div className="text-gray-600">Data Processing</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">&lt;30s</div>
                              <div className="text-gray-600">Report Generation</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-purple-600">99.8%</div>
                              <div className="text-gray-600">Data Accuracy</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-indigo-600">24/7</div>
                              <div className="text-gray-600">Availability</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Predictive Analytics Engine */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Predictive Analytics Engine</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Market Forecasting</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Demand prediction models
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Economic trend analysis
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Seasonal pattern recognition
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Market opportunity scoring
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Customer Behavior</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Lifetime value prediction
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Churn probability scoring
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Cross-sell opportunities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                              Engagement optimization
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Risk Prediction</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Default probability models
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Early warning systems
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Portfolio stress testing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Fraud detection algorithms
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Performance Analytics</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Portfolio performance tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              ROI optimization models
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Operational efficiency metrics
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Competitive benchmarking
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                          <h3 className="font-bold text-gray-900 mb-4">Model Performance</h3>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Prediction Accuracy</span>
                              <span className="text-sm font-bold text-green-600">95%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Model Training Time</span>
                              <span className="text-sm font-bold text-blue-600">&lt;2hrs</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Real-time Inference</span>
                              <span className="text-sm font-bold text-purple-600">&lt;100ms</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Model Refresh Rate</span>
                              <span className="text-sm font-bold text-indigo-600">Daily</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <h3 className="font-bold text-gray-900 mb-4">AI/ML Capabilities</h3>
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-gray-700">Deep Learning Networks</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              <span className="text-gray-700">Ensemble Methods</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <span className="text-gray-700">Time Series Analysis</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                              <span className="text-gray-700">Natural Language Processing</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-gray-700">Computer Vision</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                              <span className="text-gray-700">Reinforcement Learning</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 12: System Architecture & Security */}
            {currentSection === 12 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 11</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    System Architecture & Security
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Cloud-Native Architecture */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Cloud-Native Architecture</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Microservices</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Containerized services</li>
                          <li>Auto-scaling capabilities</li>
                          <li>Service mesh integration</li>
                          <li>Independent deployments</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Data Layer</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Multi-database architecture</li>
                          <li>Real-time synchronization</li>
                          <li>Data lake analytics</li>
                          <li>Automated backup</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">API Gateway</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>RESTful & GraphQL APIs</li>
                          <li>Rate limiting & throttling</li>
                          <li>API versioning</li>
                          <li>Authentication layer</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">DevOps & CI/CD</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Automated testing</li>
                          <li>Infrastructure as Code</li>
                          <li>Blue-green deployments</li>
                          <li>Monitoring & observability</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Security Framework */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Enterprise Security Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's enterprise security framework implements zero-trust architecture with multi-layered 
                          protection, ensuring the highest levels of data security and regulatory compliance. Our comprehensive 
                          approach covers identity management, encryption, threat detection, and continuous monitoring to 
                          protect sensitive financial data and maintain customer trust.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Zero-Trust Security</h3>
                            <p className="text-gray-600 text-sm">Identity-based access control with continuous verification</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl border border-orange-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">End-to-End Encryption</h3>
                            <p className="text-gray-600 text-sm">AES-256 encryption at rest and TLS 1.3 for data in transit</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-yellow-50 to-green-50 rounded-xl border border-yellow-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Multi-Factor Authentication</h3>
                            <p className="text-gray-600 text-sm">Biometric, SMS, email, and hardware token support</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Security Performance</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">99.99% Uptime SLA</h4>
                              <p className="text-gray-600 text-sm">Enterprise-grade availability with redundant systems</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">&lt;1min Threat Response</h4>
                              <p className="text-gray-600 text-sm">Real-time threat detection and automated response</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Zero Data Breaches</h4>
                              <p className="text-gray-600 text-sm">Perfect security track record with proactive monitoring</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">24/7 SOC Monitoring</h4>
                              <p className="text-gray-600 text-sm">Continuous security operations center surveillance</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Security Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">ISO 27001</div>
                              <div className="text-gray-600">Certified</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">SOC 2</div>
                              <div className="text-gray-600">Type II</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Compliance & Certifications */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Compliance & Certifications</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Financial Regulations</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              SOX Compliance
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              PCI DSS Level 1
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              FFIEC Guidelines
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Basel III Framework
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Data Privacy</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              GDPR Compliant
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              CCPA Compliance
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              PIPEDA Standards
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div>
                              Data Residency Controls
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Security Standards</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              ISO 27001 Certified
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              SOC 2 Type II
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              NIST Framework
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              FedRAMP Ready
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Industry Standards</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Open Banking Standards
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            FIDO2 Authentication
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            OAuth 2.0 / OpenID Connect
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            SWIFT Messaging Standards
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Audit & Monitoring</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Continuous compliance monitoring
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Automated audit trails
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Third-party security assessments
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                            Penetration testing program
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Risk Management Framework */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Management Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Operational Risk</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Business continuity planning
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Disaster recovery procedures
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Incident response protocols
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Change management processes
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Technology Risk</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Vulnerability management
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Security patch management
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Third-party risk assessment
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Technology refresh cycles
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 13: Advanced Features & Capabilities */}
            {currentSection === 13 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 12</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Advanced Features & Capabilities
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* AI-Powered Innovation Suite */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">AI-Powered Innovation Suite</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Machine Learning Models</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Custom credit scoring algorithms</li>
                          <li>Fraud detection neural networks</li>
                          <li>Behavioral pattern analysis</li>
                          <li>Predictive risk modeling</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Natural Language Processing</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Document understanding</li>
                          <li>Sentiment analysis</li>
                          <li>Multi-language support</li>
                          <li>Conversational AI agents</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Computer Vision</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Document OCR & extraction</li>
                          <li>Identity verification</li>
                          <li>Signature validation</li>
                          <li>Asset valuation imaging</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Real-Time Analytics</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Live performance monitoring</li>
                          <li>Dynamic risk adjustment</li>
                          <li>Market trend analysis</li>
                          <li>Instant decision engines</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* White-Label & Customization */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">White-Label & Customization</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's white-label solution enables financial institutions to deploy our comprehensive 
                          lending platform under their own brand identity. Our flexible customization framework allows 
                          complete control over user experience, workflows, and business logic while maintaining the 
                          power of our AI-driven core technology.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Brand Customization</h3>
                            <p className="text-gray-600 text-sm">Complete UI/UX customization with your brand colors, logos, and styling</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Workflow Configuration</h3>
                            <p className="text-gray-600 text-sm">Flexible business process configuration to match your operational requirements</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">API Customization</h3>
                            <p className="text-gray-600 text-sm">Custom API endpoints and data models tailored to your integration needs</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Customization Options</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Visual Identity</h4>
                              <p className="text-gray-600 text-sm">Custom themes, color schemes, typography, and branding elements</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Business Rules</h4>
                              <p className="text-gray-600 text-sm">Custom scoring models, approval criteria, and decision workflows</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Integration Layer</h4>
                              <p className="text-gray-600 text-sm">Custom connectors for existing systems and third-party services</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Reporting & Analytics</h4>
                              <p className="text-gray-600 text-sm">Custom dashboards, KPIs, and regulatory reporting formats</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Deployment Options</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">Cloud</div>
                              <div className="text-gray-600">SaaS Deployment</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">On-Premise</div>
                              <div className="text-gray-600">Private Cloud</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Integration Capabilities */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Advanced Integration Capabilities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Core Banking Systems</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              FIS, Fiserv, Jack Henry integrations
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Real-time account synchronization
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Automated GL posting
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Customer data unification
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Third-Party Services</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Credit bureaus (Experian, Equifax, TransUnion)
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Income verification services
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Bank account verification
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Identity verification providers
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Payment Processing</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              ACH processing networks
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Card payment processors
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Digital wallet integrations
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Real-time payment rails
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">API Management</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            RESTful API architecture
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            GraphQL query support
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Webhook event notifications
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            SDK libraries for major languages
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Data Synchronization</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Real-time data streaming
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Batch processing capabilities
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Data transformation pipelines
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Conflict resolution algorithms
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Performance & Scalability */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Performance & Scalability</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">High Performance</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Sub-second API response times
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            10,000+ concurrent users support
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            99.99% uptime guarantee
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Global CDN distribution
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Auto-Scaling</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Dynamic resource allocation
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Load balancing optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Horizontal scaling capabilities
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Cost-optimized infrastructure
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Performance Benchmarks</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">1M+</div>
                          <div className="text-sm text-gray-600">Applications/Month</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">250ms</div>
                          <div className="text-sm text-gray-600">Avg Response Time</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">50TB</div>
                          <div className="text-sm text-gray-600">Data Processing/Day</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
                          <div className="text-sm text-gray-600">Global Support</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 14: Implementation Framework */}
            {currentSection === 14 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 13</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Implementation Framework
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Phased Implementation Approach */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Phased Implementation Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Phase 1: Foundation</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Core platform setup</li>
                          <li>Basic integrations</li>
                          <li>User training</li>
                          <li>Initial configuration</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Duration: 4-6 weeks</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Phase 2: Core Features</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Loan origination</li>
                          <li>Risk assessment</li>
                          <li>Basic automation</li>
                          <li>Customer portals</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Duration: 6-8 weeks</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Phase 3: Advanced AI</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>ML model deployment</li>
                          <li>Advanced analytics</li>
                          <li>Predictive insights</li>
                          <li>Workflow optimization</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Duration: 4-6 weeks</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Phase 4: Optimization</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Performance tuning</li>
                          <li>Advanced features</li>
                          <li>Custom integrations</li>
                          <li>Full optimization</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Duration: 2-4 weeks</div>
                      </div>
                    </div>
                  </div>

                  {/* Project Management & Support */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Management & Support</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's implementation framework ensures seamless deployment with dedicated project management, 
                          comprehensive training programs, and ongoing support. Our experienced team guides you through every 
                          step of the implementation process, from initial planning to full production deployment and beyond.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Dedicated Project Manager</h3>
                            <p className="text-gray-600 text-sm">Single point of contact for all implementation activities and coordination</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Technical Implementation Team</h3>
                            <p className="text-gray-600 text-sm">Expert engineers and consultants for system configuration and integration</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Training & Change Management</h3>
                            <p className="text-gray-600 text-sm">Comprehensive user training and organizational change management support</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Implementation Services</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Requirements Analysis</h4>
                              <p className="text-gray-600 text-sm">Detailed business requirements gathering and system design</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">System Integration</h4>
                              <p className="text-gray-600 text-sm">Seamless integration with existing systems and third-party services</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">User Training</h4>
                              <p className="text-gray-600 text-sm">Comprehensive training programs for all user roles and functions</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Go-Live Support</h4>
                              <p className="text-gray-600 text-sm">24/7 support during launch phase with rapid issue resolution</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Implementation Timeline</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">16-24</div>
                              <div className="text-gray-600">Weeks Total</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">99%</div>
                              <div className="text-gray-600">Success Rate</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Training & Knowledge Transfer */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Training & Knowledge Transfer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">End-User Training</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Role-based training modules
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Interactive workshops
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Hands-on practice sessions
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Certification programs
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Administrator Training</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              System configuration
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              User management
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Security administration
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Troubleshooting procedures
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Technical Training</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              API integration training
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Custom development
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Data migration procedures
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Performance optimization
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Learning Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Comprehensive documentation library
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Video tutorial series
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Interactive online courses
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Best practices guides
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Ongoing Support</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            24/7 technical support
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Regular training updates
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            User community forums
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Quarterly webinars
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Quality Assurance & Testing */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Assurance & Testing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Testing Framework</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Automated testing suites
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            User acceptance testing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Performance testing
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                            Security penetration testing
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Quality Metrics</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            99.9% test coverage
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Zero critical defects
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Performance benchmarks
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-slate-500 rounded-full"></div>
                            Security compliance validation
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Implementation Success Metrics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">99%</div>
                          <div className="text-sm text-gray-600">On-Time Delivery</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                          <div className="text-sm text-gray-600">User Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                          <div className="text-sm text-gray-600">Support Coverage</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">&lt;4hrs</div>
                          <div className="text-sm text-gray-600">Issue Resolution</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 15: Case Studies & Success Stories */}
            {currentSection === 15 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 14</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Case Studies & Success Stories
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Founder Experience & Industry Insights */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Founder Experience & Industry Insights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Financial Services</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>15+ years industry experience</li>
                          <li>Traditional lending operations</li>
                          <li>Digital transformation projects</li>
                          <li>Regulatory compliance expertise</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Technology Innovation</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>AI/ML implementation experience</li>
                          <li>Enterprise software development</li>
                          <li>Cloud architecture design</li>
                          <li>API integration expertise</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Process Optimization</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Workflow automation projects</li>
                          <li>Operational efficiency improvements</li>
                          <li>Risk management systems</li>
                          <li>Performance optimization</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Market Understanding</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Industry pain point analysis</li>
                          <li>Competitive landscape knowledge</li>
                          <li>Customer needs assessment</li>
                          <li>Market trend identification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Hypothetical Implementation Scenarios */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Hypothetical Implementation Scenarios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Based on extensive industry experience and market analysis, our founders have identified key 
                          scenarios where Lendro.AI's platform would deliver transformational results. These projections 
                          are based on industry benchmarks, competitive analysis, and proven methodologies from similar 
                          implementations in the financial services sector.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Regional Credit Union</h3>
                            <p className="text-gray-600 text-sm">$500M assets, 25,000 members, traditional lending processes</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Community Bank</h3>
                            <p className="text-gray-600 text-sm">$2B assets, multiple branches, legacy system constraints</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Alternative Lender</h3>
                            <p className="text-gray-600 text-sm">Digital-first approach, high-volume processing needs</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Projected Impact Metrics</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Processing Efficiency</h4>
                              <p className="text-gray-600 text-sm">75-85% reduction in application processing time</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Cost Reduction</h4>
                              <p className="text-gray-600 text-sm">40-60% decrease in operational costs per loan</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Risk Improvement</h4>
                              <p className="text-gray-600 text-sm">25-35% reduction in default rates through better scoring</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Customer Satisfaction</h4>
                              <p className="text-gray-600 text-sm">90%+ satisfaction scores with digital experience</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">ROI Projections</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">6-12</div>
                              <div className="text-gray-600">Months to ROI</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">300%+</div>
                              <div className="text-gray-600">3-Year ROI</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Industry Benchmark Analysis */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Benchmark Analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Processing Times</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Traditional: 14-21 days average
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Digital leaders: 3-5 days
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Lendro.AI projection: 2-24 hours
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Improvement: 85-95% faster
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Cost Per Loan</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Industry average: $2,500-$4,000
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Digital leaders: $1,200-$2,000
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Lendro.AI projection: $500-$1,000
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Savings: 60-80% reduction
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Default Rates</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Industry average: 3.2-4.8%
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              AI-enhanced: 2.1-3.0%
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Lendro.AI projection: 1.8-2.5%
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Improvement: 25-45% better
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Market Research Insights</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            73% of lenders report inefficient processes
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            68% struggle with legacy system integration
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            82% want better customer experience
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            91% see AI as competitive advantage
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Competitive Analysis</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Most solutions address single pain points
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Limited AI integration capabilities
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            High implementation complexity
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Lendro.AI offers comprehensive solution
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Projected Success Scenarios */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Projected Success Scenarios</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Mid-Size Credit Union</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">Challenge:</div>
                            <div>Manual processes, 18-day average approval time, high operational costs</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">Projected Solution:</div>
                            <div>Automated workflows, 24-hour approvals, 70% cost reduction</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Expected Results:</div>
                            <div>$2.4M annual savings, 300% loan volume increase, 95% customer satisfaction</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Digital-First Lender</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">Challenge:</div>
                            <div>Scaling limitations, inconsistent risk assessment, customer acquisition costs</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">Projected Solution:</div>
                            <div>AI-powered scaling, advanced risk models, optimized customer journey</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Expected Results:</div>
                            <div>500% capacity increase, 40% better risk performance, 60% lower CAC</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Projected Industry Impact</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">$50B+</div>
                          <div className="text-sm text-gray-600">Market Opportunity</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                          <div className="text-sm text-gray-600">Efficiency Gains</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">10M+</div>
                          <div className="text-sm text-gray-600">Potential Users</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                          <div className="text-sm text-gray-600">Target Institutions</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 16: ROI Analysis & Business Impact */}
            {currentSection === 16 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 15</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    ROI Analysis & Business Impact
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Financial Impact Overview */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Financial Impact Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Cost Reduction</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>60-80% operational cost savings</li>
                          <li>Reduced manual processing</li>
                          <li>Lower error rates</li>
                          <li>Decreased compliance costs</li>
                        </ul>
                        <div className="mt-4 text-2xl font-bold">$2.4M</div>
                        <div className="text-xs opacity-75">Annual Savings</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Revenue Growth</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>300% loan volume increase</li>
                          <li>Faster time-to-market</li>
                          <li>New product capabilities</li>
                          <li>Market expansion</li>
                        </ul>
                        <div className="mt-4 text-2xl font-bold">$8.7M</div>
                        <div className="text-xs opacity-75">Additional Revenue</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Risk Mitigation</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>35% default rate reduction</li>
                          <li>Better risk assessment</li>
                          <li>Fraud prevention</li>
                          <li>Regulatory compliance</li>
                        </ul>
                        <div className="mt-4 text-2xl font-bold">$1.8M</div>
                        <div className="text-xs opacity-75">Risk Savings</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Efficiency Gains</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>85% faster processing</li>
                          <li>Automated workflows</li>
                          <li>Real-time decisions</li>
                          <li>Scalable operations</li>
                        </ul>
                        <div className="mt-4 text-2xl font-bold">450%</div>
                        <div className="text-xs opacity-75">ROI in 3 Years</div>
                      </div>
                    </div>
                  </div>

                  {/* ROI Calculation Framework */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">ROI Calculation Framework</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Our ROI analysis is based on comprehensive industry benchmarks, proven methodologies, and 
                          conservative projections. The framework considers both direct cost savings and indirect 
                          benefits such as improved customer satisfaction, reduced risk exposure, and enhanced 
                          competitive positioning in the market.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Direct Cost Savings</h3>
                            <p className="text-gray-600 text-sm">Operational efficiency, reduced manual labor, lower error rates</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Revenue Enhancement</h3>
                            <p className="text-gray-600 text-sm">Increased loan volume, faster processing, new market opportunities</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Risk Reduction</h3>
                            <p className="text-gray-600 text-sm">Lower default rates, improved compliance, fraud prevention</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">ROI Timeline</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-white text-sm font-bold">6M</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Break-Even Point</h4>
                              <p className="text-gray-600 text-sm">Initial investment recovered through operational savings</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-white text-sm font-bold">1Y</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">150% ROI</h4>
                              <p className="text-gray-600 text-sm">Significant returns from efficiency gains and cost reduction</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-white text-sm font-bold">2Y</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">275% ROI</h4>
                              <p className="text-gray-600 text-sm">Revenue growth and market expansion benefits realized</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <span className="text-white text-sm font-bold">3Y</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">450% ROI</h4>
                              <p className="text-gray-600 text-sm">Full platform optimization and competitive advantage</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Investment Breakdown</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">$850K</div>
                              <div className="text-gray-600">Initial Investment</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">$4.7M</div>
                              <div className="text-gray-600">3-Year Return</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cost-Benefit Analysis */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Cost-Benefit Analysis</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl border border-red-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Implementation Costs</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Platform licensing: $450K
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Implementation services: $250K
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Training & change management: $100K
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                              Infrastructure & integration: $50K
                            </li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded-lg">
                            <div className="text-center">
                              <div className="text-xl font-bold text-red-600">$850K</div>
                              <div className="text-sm text-gray-600">Total Investment</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Annual Benefits</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Operational cost savings: $2.4M
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Additional revenue: $2.9M
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Risk reduction savings: $600K
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Compliance cost reduction: $300K
                            </li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded-lg">
                            <div className="text-center">
                              <div className="text-xl font-bold text-green-600">$6.2M</div>
                              <div className="text-sm text-gray-600">Annual Value</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Net Impact</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Year 1 net benefit: $1.3M
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Year 2 net benefit: $3.1M
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Year 3 net benefit: $3.8M
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Payback period: 6 months
                            </li>
                          </ul>
                          <div className="mt-4 p-3 bg-white rounded-lg">
                            <div className="text-center">
                              <div className="text-xl font-bold text-blue-600">729%</div>
                              <div className="text-sm text-gray-600">3-Year ROI</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Intangible Benefits</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Enhanced customer satisfaction and loyalty
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Improved employee productivity and morale
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Competitive advantage in the market
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Future-ready technology foundation
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Risk Mitigation Value</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Reduced regulatory compliance risk
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Lower operational and credit risk exposure
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Protection against technology obsolescence
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Business continuity assurance
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Business Impact Metrics */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Impact Metrics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Operational Excellence</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-blue-600">85%</div>
                            <div className="text-xs text-gray-600">Processing Speed Increase</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-green-600">92%</div>
                            <div className="text-xs text-gray-600">Error Reduction</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-purple-600">78%</div>
                            <div className="text-xs text-gray-600">Cost Per Loan Reduction</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-orange-600">95%</div>
                            <div className="text-xs text-gray-600">Automation Rate</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Customer Experience</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-blue-600">94%</div>
                            <div className="text-xs text-gray-600">Customer Satisfaction</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-green-600">67%</div>
                            <div className="text-xs text-gray-600">Faster Approvals</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-purple-600">89%</div>
                            <div className="text-xs text-gray-600">Digital Adoption</div>
                          </div>
                          <div className="p-3 bg-white rounded-lg">
                            <div className="text-lg font-bold text-orange-600">4.8★</div>
                            <div className="text-xs text-gray-600">User Rating</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Projected Financial Performance</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">$12.9M</div>
                          <div className="text-sm text-gray-600">3-Year Revenue Impact</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">$7.2M</div>
                          <div className="text-sm text-gray-600">3-Year Cost Savings</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">$5.4M</div>
                          <div className="text-sm text-gray-600">Risk Reduction Value</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">729%</div>
                          <div className="text-sm text-gray-600">Total ROI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 17: Future Roadmap */}
            {currentSection === 17 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 16</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Future Roadmap
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Innovation Timeline */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Innovation Timeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">2024 Q3-Q4</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Core platform launch</li>
                          <li>Basic AI integration</li>
                          <li>Initial customer onboarding</li>
                          <li>Foundational features</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Foundation Phase</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">2025 H1</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Advanced ML models</li>
                          <li>Enhanced automation</li>
                          <li>Mobile app launch</li>
                          <li>API marketplace</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Growth Phase</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">2025 H2</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Predictive analytics</li>
                          <li>Blockchain integration</li>
                          <li>Global expansion</li>
                          <li>Industry partnerships</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Expansion Phase</div>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">2026+</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Next-gen AI capabilities</li>
                          <li>Quantum computing</li>
                          <li>Autonomous lending</li>
                          <li>Market leadership</li>
                        </ul>
                        <div className="mt-4 text-xs opacity-75">Innovation Phase</div>
                      </div>
                    </div>
                  </div>

                  {/* Technology Evolution */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Evolution</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's technology roadmap is designed to stay ahead of industry trends and emerging 
                          technologies. Our commitment to continuous innovation ensures that our platform evolves 
                          with the changing landscape of financial services, incorporating cutting-edge AI, blockchain, 
                          and quantum computing capabilities as they mature.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Artificial Intelligence</h3>
                            <p className="text-gray-600 text-sm">Advanced neural networks, natural language processing, and computer vision</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Blockchain & DeFi</h3>
                            <p className="text-gray-600 text-sm">Decentralized finance integration, smart contracts, and digital assets</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Quantum Computing</h3>
                            <p className="text-gray-600 text-sm">Next-generation processing power for complex risk calculations</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Emerging Technologies</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Generative AI</h4>
                              <p className="text-gray-600 text-sm">Automated document generation, personalized communications</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Edge Computing</h4>
                              <p className="text-gray-600 text-sm">Real-time processing at the point of interaction</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">IoT Integration</h4>
                              <p className="text-gray-600 text-sm">Connected devices for enhanced data collection</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Biometric Authentication</h4>
                              <p className="text-gray-600 text-sm">Advanced identity verification and fraud prevention</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">R&D Investment</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">25%</div>
                              <div className="text-gray-600">Revenue to R&D</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">50+</div>
                              <div className="text-gray-600">Patents Planned</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Development Roadmap */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Development Roadmap</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Near-Term (6-12 months)</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Enhanced AI decision engines
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Advanced fraud detection
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Mobile app optimization
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              API ecosystem expansion
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Real-time analytics dashboard
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Mid-Term (1-2 years)</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Predictive market analytics
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Blockchain loan tracking
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Voice-enabled interfaces
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Global compliance modules
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Advanced personalization
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">Long-Term (3+ years)</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Quantum-powered risk models
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Autonomous lending decisions
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Neural network optimization
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Metaverse integration
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Next-gen user experiences
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Innovation Partnerships</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Leading universities and research institutions
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Technology giants and AI companies
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Financial services industry leaders
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Regulatory bodies and compliance experts
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Market Expansion</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            North American market penetration
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            European Union expansion
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Asia-Pacific market entry
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Emerging markets opportunities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Vision 2030 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Vision 2030</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Market Leadership</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">Global Presence:</div>
                            <div>Leading AI lending platform across 50+ countries</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">Market Share:</div>
                            <div>25% of global AI-powered lending market</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Customer Base:</div>
                            <div>10,000+ financial institutions worldwide</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Technology Innovation</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">AI Advancement:</div>
                            <div>Fully autonomous lending ecosystem</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">Processing Power:</div>
                            <div>Quantum-enhanced decision making</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Innovation:</div>
                            <div>Industry-defining technology standards</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Strategic Goals 2030</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">$10B</div>
                          <div className="text-sm text-gray-600">Annual Revenue</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">50M+</div>
                          <div className="text-sm text-gray-600">Loans Processed</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">100+</div>
                          <div className="text-sm text-gray-600">Countries Served</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">#1</div>
                          <div className="text-sm text-gray-600">Market Position</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 18: Regulatory Compliance */}
            {currentSection === 18 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 17</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Regulatory Compliance
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Compliance Framework Overview */}
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-6 text-center">Compliance Framework Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Federal Regulations</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Fair Credit Reporting Act (FCRA)</li>
                          <li>Equal Credit Opportunity Act (ECOA)</li>
                          <li>Truth in Lending Act (TILA)</li>
                          <li>Bank Secrecy Act (BSA)</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">State Regulations</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>State lending license requirements</li>
                          <li>Usury laws and rate caps</li>
                          <li>Consumer protection statutes</li>
                          <li>Data privacy regulations</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">Data Protection</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>GDPR compliance framework</li>
                          <li>CCPA privacy requirements</li>
                          <li>SOX data integrity controls</li>
                          <li>PCI DSS security standards</li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h3 className="font-bold mb-4">International Standards</h3>
                        <ul className="space-y-2 text-sm opacity-90">
                          <li>Basel III capital requirements</li>
                          <li>IFRS accounting standards</li>
                          <li>ISO 27001 security certification</li>
                          <li>Regional banking regulations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Fair Lending & Anti-Discrimination */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Fair Lending & Anti-Discrimination</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-700 leading-relaxed mb-6">
                          Lendro.AI's platform is designed with fair lending principles at its core, ensuring compliance 
                          with ECOA, Fair Housing Act, and other anti-discrimination laws. Our AI models are continuously 
                          monitored for bias, with built-in safeguards to prevent discriminatory lending practices and 
                          ensure equal access to credit opportunities.
                        </p>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Bias Detection & Mitigation</h3>
                            <p className="text-gray-600 text-sm">Advanced algorithms to identify and eliminate discriminatory patterns</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Protected Class Monitoring</h3>
                            <p className="text-gray-600 text-sm">Continuous analysis of lending decisions across protected characteristics</p>
                          </div>
                          
                          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50">
                            <h3 className="font-bold text-gray-900 mb-2">Adverse Action Notices</h3>
                            <p className="text-gray-600 text-sm">Automated generation of compliant adverse action notifications</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Compliance Controls</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">ECOA Compliance</h4>
                              <p className="text-gray-600 text-sm">Automated checks for prohibited basis discrimination</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Fair Housing Act</h4>
                              <p className="text-gray-600 text-sm">Real estate secured lending compliance monitoring</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Disparate Impact Testing</h4>
                              <p className="text-gray-600 text-sm">Statistical analysis to identify potential disparate impact</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mt-1">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">Documentation & Audit Trails</h4>
                              <p className="text-gray-600 text-sm">Comprehensive record-keeping for regulatory examinations</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
                          <h4 className="font-semibold text-gray-900 mb-2">Compliance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-600">100%</div>
                              <div className="text-gray-600">ECOA Compliance</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-600">0</div>
                              <div className="text-gray-600">Discrimination Findings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Data Privacy & Security Compliance */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Privacy & Security Compliance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">GDPR Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Data subject rights management
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Consent management framework
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Data portability mechanisms
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              Privacy by design principles
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">CCPA Compliance</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Consumer privacy rights
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Data deletion capabilities
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Opt-out mechanisms
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                              Third-party disclosure tracking
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                            <h3 className="font-bold text-gray-900">PCI DSS Standards</h3>
                          </div>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Secure payment processing
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Cardholder data protection
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Network security controls
                            </li>
                            <li className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              Regular security assessments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Data Governance</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Data classification and labeling
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Retention policy enforcement
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Access control management
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            Data lineage tracking
                          </li>
                        </ul>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                        <h3 className="font-bold text-gray-900 mb-4">Incident Response</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Automated breach detection
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            72-hour notification protocols
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Forensic investigation tools
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                            Recovery and remediation
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Regulatory Reporting & Audit */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Regulatory Reporting & Audit</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Automated Reporting</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">HMDA Reporting:</div>
                            <div>Automated Home Mortgage Disclosure Act compliance</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">CRA Reporting:</div>
                            <div>Community Reinvestment Act data collection</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Call Reports:</div>
                            <div>Regulatory financial reporting automation</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 bg-gradient-to-r from-slate-50 to-zinc-50 rounded-2xl border border-slate-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-slate-500 to-zinc-600 rounded-xl flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold text-gray-900">Audit Readiness</h3>
                        </div>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="p-3 bg-white rounded-lg">
                            <div className="font-semibold mb-1">Examination Support:</div>
                            <div>Comprehensive audit trail and documentation</div>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg">
                            <div className="font-semibold mb-1">Data Integrity:</div>
                            <div>Immutable transaction records and controls</div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="font-semibold mb-1">Compliance Testing:</div>
                            <div>Automated compliance monitoring and alerts</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                      <h3 className="font-bold text-gray-900 mb-4 text-center">Compliance Performance Metrics</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                          <div className="text-sm text-gray-600">Regulatory Compliance</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600 mb-1">&lt;24hrs</div>
                          <div className="text-sm text-gray-600">Report Generation</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600 mb-1">0</div>
                          <div className="text-sm text-gray-600">Compliance Violations</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
                          <div className="text-sm text-gray-600">Audit Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Section 19: Best Practices */}
            {currentSection === 19 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 18</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Best Practices
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                {/* Introduction */}
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100/50 shadow-sm">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Implementing agentic AI in financial services requires adherence to proven methodologies and industry best practices. 
                      This chapter outlines the essential guidelines, frameworks, and strategies that ensure successful deployment, 
                      optimal performance, and sustainable growth of AI-powered lending platforms.
                    </p>
                  </div>
                </div>

                {/* Strategic Implementation Best Practices */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Strategic Implementation Best Practices</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Phased Implementation Approach</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Start with pilot programs in controlled environments
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Implement core modules before advanced features
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Establish success metrics and KPIs early
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Plan for iterative improvements and scaling
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Change Management Excellence</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Comprehensive staff training and upskilling programs
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Clear communication of benefits and expectations
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Executive sponsorship and leadership commitment
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Continuous feedback loops and adaptation
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Data Quality & Governance</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Establish data quality standards and validation rules
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Implement comprehensive data lineage tracking
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Regular data audits and cleansing processes
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Privacy-by-design data handling practices
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-white font-bold text-lg">4</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">Risk Management Framework</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Continuous model monitoring and validation
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Bias detection and mitigation strategies
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Explainable AI for regulatory compliance
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Robust fallback and contingency planning
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Technical Excellence Framework */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Technical Excellence Framework</h2>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-sm mb-8">
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">99.9%</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">System Uptime</h4>
                        <p className="text-sm text-gray-600">Target availability with redundancy</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">&lt;2s</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                        <p className="text-sm text-gray-600">Maximum API response latency</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-white font-bold text-2xl">100%</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Data Integrity</h4>
                        <p className="text-sm text-gray-600">Zero tolerance for data corruption</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Development Standards</h3>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 border border-gray-200/50 shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-3">Code Quality</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Comprehensive unit testing (90%+ coverage)</li>
                            <li>• Automated code review and static analysis</li>
                            <li>• Consistent coding standards and documentation</li>
                            <li>• Regular security vulnerability scanning</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-gray-200/50 shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-3">Deployment Practices</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Blue-green deployment strategies</li>
                            <li>• Automated rollback capabilities</li>
                            <li>• Comprehensive monitoring and alerting</li>
                            <li>• Infrastructure as code (IaC)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900">Performance Optimization</h3>
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-6 border border-gray-200/50 shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-3">Scalability</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Horizontal scaling architecture</li>
                            <li>• Load balancing and traffic distribution</li>
                            <li>• Database optimization and indexing</li>
                            <li>• Caching strategies and CDN integration</li>
                          </ul>
                        </div>
                        <div className="bg-white rounded-lg p-6 border border-gray-200/50 shadow-sm">
                          <h4 className="font-semibold text-gray-900 mb-3">Monitoring</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Real-time performance metrics</li>
                            <li>• Predictive capacity planning</li>
                            <li>• Automated anomaly detection</li>
                            <li>• Comprehensive logging and tracing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Operational Excellence */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Operational Excellence</h2>
                  
                  <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Automated testing pipelines</li>
                        <li>• User acceptance testing protocols</li>
                        <li>• Performance benchmarking</li>
                        <li>• Regression testing suites</li>
                        <li>• Security penetration testing</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Incident Management</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• 24/7 monitoring and alerting</li>
                        <li>• Escalation procedures and SLAs</li>
                        <li>• Root cause analysis protocols</li>
                        <li>• Post-incident review processes</li>
                        <li>• Disaster recovery planning</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• Comprehensive API documentation</li>
                        <li>• User guides and training materials</li>
                        <li>• Technical architecture diagrams</li>
                        <li>• Operational runbooks</li>
                        <li>• Compliance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Customer Success Framework */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Customer Success Framework</h2>
                  
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 border border-blue-100/50 shadow-sm mb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Onboarding Excellence</h3>
                        <div className="space-y-4">
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-white font-bold text-sm">1</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Discovery & Planning</h4>
                              <p className="text-gray-600 text-sm">Comprehensive needs assessment and implementation roadmap</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-white font-bold text-sm">2</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Configuration & Setup</h4>
                              <p className="text-gray-600 text-sm">Tailored system configuration and data migration</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                              <span className="text-white font-bold text-sm">3</span>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Training & Go-Live</h4>
                              <p className="text-gray-600 text-sm">Comprehensive user training and smooth transition</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ongoing Support</h3>
                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-2">24/7 Technical Support</h4>
                            <p className="text-gray-600 text-sm">Round-the-clock assistance with guaranteed response times</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-2">Regular Health Checks</h4>
                            <p className="text-gray-600 text-sm">Proactive system monitoring and optimization recommendations</p>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200/50">
                            <h4 className="font-semibold text-gray-900 mb-2">Continuous Training</h4>
                            <p className="text-gray-600 text-sm">Ongoing education on new features and best practices</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Success Metrics & KPIs */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Success Metrics & KPIs</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Operational Metrics</h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Processing Time Reduction</span>
                          <span className="font-bold text-green-600">85%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Error Rate Reduction</span>
                          <span className="font-bold text-green-600">92%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Customer Satisfaction</span>
                          <span className="font-bold text-green-600">94%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">System Uptime</span>
                          <span className="font-bold text-green-600">99.9%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Compliance Score</span>
                          <span className="font-bold text-green-600">100%</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 border border-gray-200/50 shadow-sm">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Impact</h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Revenue Growth</span>
                          <span className="font-bold text-blue-600">47%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Cost Reduction</span>
                          <span className="font-bold text-blue-600">38%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Market Share Increase</span>
                          <span className="font-bold text-blue-600">23%</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                          <span className="text-gray-700">Customer Acquisition</span>
                          <span className="font-bold text-blue-600">156%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">ROI Achievement</span>
                          <span className="font-bold text-blue-600">340%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Checklist */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Implementation Checklist</h2>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Pre-Implementation</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Stakeholder alignment and buy-in</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Budget approval and resource allocation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Technical infrastructure assessment</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Data quality audit and preparation</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Regulatory compliance review</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Post-Implementation</h3>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Performance monitoring setup</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">User feedback collection and analysis</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Continuous optimization and tuning</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Regular security assessments</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">Scalability planning and execution</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaways */}
                <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-6">Key Takeaways</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Success Factors</h3>
                      <ul className="space-y-2 text-blue-100">
                        <li>• Executive leadership and organizational commitment</li>
                        <li>• Comprehensive change management strategy</li>
                        <li>• Data-driven decision making and continuous improvement</li>
                        <li>• Strong technical foundation and security practices</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Critical Considerations</h3>
                      <ul className="space-y-2 text-blue-100">
                        <li>• Regulatory compliance must be built-in, not bolted-on</li>
                        <li>• User experience drives adoption and success</li>
                        <li>• Scalability planning prevents future bottlenecks</li>
                        <li>• Continuous monitoring ensures optimal performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Navigation */}
            {/* Section 20: Conclusion & Recommendations */}
            {currentSection === 20 && (
              <div className="py-12">
                <div className="mb-12">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                    <span className="text-sm font-semibold text-blue-700">Chapter 19</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent pb-2">
                    Conclusion & Recommendations
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                {/* Executive Summary */}
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white mb-12">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold mb-6">The Future is Now</h2>
                      <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
                        Agentic AI represents the most significant transformation in financial services since the advent of digital banking. 
                        Organizations that embrace this technology today will define the competitive landscape of tomorrow.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-8 mt-12">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">85%</div>
                        <div className="text-blue-200 text-sm">Efficiency Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">$2.4M</div>
                        <div className="text-blue-200 text-sm">Average ROI</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">67%</div>
                        <div className="text-blue-200 text-sm">Risk Reduction</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">18 Months</div>
                        <div className="text-blue-200 text-sm">Payback Period</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Findings */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Key Findings</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200/50 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Market Opportunity</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          $127B global AI in finance market by 2027
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          73% of financial institutions plan AI investments
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Early adopters gain 3-5 year competitive advantage
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Customer expectations driving digital transformation
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Technology Readiness</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          AI/ML technologies have reached enterprise maturity
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Cloud infrastructure enables rapid deployment
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Regulatory frameworks are adapting to AI adoption
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Proven ROI across multiple use cases
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200/50 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Risk Mitigation</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Advanced security frameworks protect sensitive data
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Explainable AI ensures regulatory compliance
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Phased implementation reduces deployment risk
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Continuous monitoring prevents model drift
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200/50 shadow-sm">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900">Urgency Factor</h3>
                      </div>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Competitive pressure intensifying rapidly
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Customer expectations evolving at unprecedented pace
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Regulatory requirements becoming more stringent
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          First-mover advantage window closing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategic Recommendations */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">Strategic Recommendations</h2>
                  
                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                          <span className="text-white font-bold text-2xl">1</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Immediate Action: Pilot Program Launch</h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Begin with a focused pilot program targeting your highest-impact use case. This approach minimizes risk while 
                            demonstrating tangible value to stakeholders and building organizational confidence in AI capabilities.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Recommended Timeline</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Weeks 1-2: Stakeholder alignment</li>
                                <li>• Weeks 3-6: System setup and configuration</li>
                                <li>• Weeks 7-12: Pilot execution and optimization</li>
                                <li>• Weeks 13-16: Results analysis and scaling plan</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">Success Metrics</h4>
                              <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 40%+ processing time reduction</li>
                                <li>• 25%+ cost savings</li>
                                <li>• 90%+ user satisfaction</li>
                                <li>• 100% compliance maintenance</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                          <span className="text-white font-bold text-2xl">2</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Medium-term: Platform Integration</h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Following pilot success, implement a comprehensive platform approach that integrates all lending operations. 
                            This creates synergies across departments and maximizes the compound benefits of AI automation.
                          </p>
                          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Integration Priorities</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              <div className="text-center">
                                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-white font-bold">1</span>
                                </div>
                                <div className="text-sm font-medium text-gray-900">Core Operations</div>
                                <div className="text-xs text-gray-600">Origination & Servicing</div>
                              </div>
                              <div className="text-center">
                                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-white font-bold">2</span>
                                </div>
                                <div className="text-sm font-medium text-gray-900">Risk & Compliance</div>
                                <div className="text-xs text-gray-600">Assessment & Monitoring</div>
                              </div>
                              <div className="text-center">
                                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                                  <span className="text-white font-bold">3</span>
                                </div>
                                <div className="text-sm font-medium text-gray-900">Customer Experience</div>
                                <div className="text-xs text-gray-600">Digital Engagement</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                          <span className="text-white font-bold text-2xl">3</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Long-term: Innovation Leadership</h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            Establish your organization as an industry leader by leveraging advanced AI capabilities for competitive 
                            differentiation, new product development, and market expansion opportunities.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Innovation Areas</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Predictive market analytics</li>
                                <li>• Personalized financial products</li>
                                <li>• Real-time risk optimization</li>
                                <li>• Autonomous decision systems</li>
                              </ul>
                            </div>
                            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-lg p-4">
                              <h4 className="font-semibold text-gray-900 mb-2">Competitive Advantages</h4>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Faster time-to-market</li>
                                <li>• Superior customer insights</li>
                                <li>• Dynamic pricing capabilities</li>
                                <li>• Proactive risk management</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementation Roadmap */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold mb-8 text-gray-900">12-Month Implementation Roadmap</h2>
                  
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                    <div className="space-y-8">
                      <div className="flex items-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-6">
                          <div className="text-center">
                            <div className="text-white font-bold text-lg">Q1</div>
                            <div className="text-green-100 text-xs">Foundation</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Foundation & Pilot Launch</h3>
                          <p className="text-gray-700 mb-3">Establish technical infrastructure, complete pilot program, and achieve initial ROI demonstration.</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Infrastructure Setup</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Pilot Execution</span>
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Team Training</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-6">
                          <div className="text-center">
                            <div className="text-white font-bold text-lg">Q2</div>
                            <div className="text-blue-100 text-xs">Expansion</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Module Deployment</h3>
                          <p className="text-gray-700 mb-3">Roll out origination and risk assessment modules across primary business lines.</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Origination Module</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Risk Assessment</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Process Automation</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                          <div className="text-center">
                            <div className="text-white font-bold text-lg">Q3</div>
                            <div className="text-indigo-100 text-xs">Integration</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Platform Integration</h3>
                          <p className="text-gray-700 mb-3">Integrate servicing, customer portals, and analytics for end-to-end automation.</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Loan Servicing</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Customer Portals</span>
                            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">Analytics Dashboard</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-6">
                          <div className="text-center">
                            <div className="text-white font-bold text-lg">Q4</div>
                            <div className="text-purple-100 text-xs">Optimization</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Features & Optimization</h3>
                          <p className="text-gray-700 mb-3">Deploy advanced AI features, optimize performance, and plan for scale.</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Advanced AI</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Performance Tuning</span>
                            <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">Scaling Strategy</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="mb-16">
                  <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-12 text-white text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Financial Services?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                      The future of financial services is being written today. Organizations that act now will shape the industry 
                      for decades to come. Don't let your competitors define your market position.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl font-bold mb-2">30 Days</div>
                        <div className="text-blue-200">To Pilot Launch</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl font-bold mb-2">90 Days</div>
                        <div className="text-blue-200">To Measurable ROI</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="text-3xl font-bold mb-2">12 Months</div>
                        <div className="text-blue-200">To Market Leadership</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Next Steps</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-left">
                          <div>
                            <h4 className="font-semibold mb-2">Immediate Actions</h4>
                            <ul className="text-blue-100 text-sm space-y-1">
                              <li>• Schedule executive briefing</li>
                              <li>• Conduct technical assessment</li>
                              <li>• Define pilot program scope</li>
                              <li>• Secure budget approval</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Strategic Planning</h4>
                            <ul className="text-blue-100 text-sm space-y-1">
                              <li>• Develop implementation roadmap</li>
                              <li>• Identify key stakeholders</li>
                              <li>• Plan change management</li>
                              <li>• Set success metrics</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Thoughts */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50 shadow-sm">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">The Choice is Clear</h2>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                      Agentic AI in financial services is not a question of "if" but "when." The organizations that recognize this 
                      reality and act decisively will emerge as the leaders of tomorrow's financial landscape. The technology is 
                      ready, the market is demanding it, and the competitive advantage awaits those bold enough to seize it.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">The Cost of Inaction</h3>
                        <ul className="text-gray-700 space-y-2 text-left">
                          <li>• Competitive disadvantage compounds daily</li>
                          <li>• Customer expectations continue rising</li>
                          <li>• Operational inefficiencies drain resources</li>
                          <li>• Market share erosion accelerates</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-xl p-6 border border-gray-200/50 shadow-sm">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">The Reward of Action</h3>
                        <ul className="text-gray-700 space-y-2 text-left">
                          <li>• Market leadership position secured</li>
                          <li>• Operational excellence achieved</li>
                          <li>• Customer satisfaction maximized</li>
                          <li>• Sustainable growth enabled</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
                      <p className="text-xl font-semibold">
                        The future of financial services starts with your decision today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
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