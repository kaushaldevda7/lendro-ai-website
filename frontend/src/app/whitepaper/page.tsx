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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl flex items-center justify-center">
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
                          <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
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

            {/* Placeholder for other sections - I'll continue restoring them */}
            {currentSection === 10 && (
              <div className="py-12">
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Digital Experience Transformation
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Revolutionizing Customer Engagement</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      In today's digital-first world, customer expectations have fundamentally shifted. Financial institutions must deliver seamless, 
                      intuitive, and personalized digital experiences that rival those of leading technology companies. Lendro.AI's Digital Experience 
                      Transformation module creates comprehensive customer portals and mobile experiences that drive engagement, satisfaction, and loyalty.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                        <div className="text-2xl font-bold text-blue-600 mb-2">94%</div>
                        <div className="text-sm font-medium text-gray-700">Customer Satisfaction</div>
                        <div className="text-xs text-gray-500 mt-1">Digital portal users</div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                        <div className="text-2xl font-bold text-indigo-600 mb-2">67%</div>
                        <div className="text-sm font-medium text-gray-700">Reduction in Support Calls</div>
                        <div className="text-xs text-gray-500 mt-1">Self-service adoption</div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200/50">
                        <div className="text-2xl font-bold text-purple-600 mb-2">3.2x</div>
                        <div className="text-sm font-medium text-gray-700">Higher Engagement</div>
                        <div className="text-xs text-gray-500 mt-1">Mobile app users</div>
                      </div>
                    </div>
                  </div>

                  {/* Customer Portal Features */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Comprehensive Customer Portal</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Account Management</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Real-time account balance & status
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Transaction history & statements
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Payment scheduling & autopay
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Document upload & management
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              Profile & contact updates
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Communication Hub</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              Secure messaging system
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              Notification preferences
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              Live chat integration
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              Video consultation booking
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                              Support ticket tracking
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-200/50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Financial Tools</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Payment calculators
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Refinancing analysis
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Budget planning tools
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Credit score monitoring
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              Financial education resources
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-200/50">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Security & Privacy</h3>
                          </div>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Multi-factor authentication
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Biometric login options
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Session management
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Privacy controls
                            </li>
                            <li className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Activity monitoring
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Experience */}
                  <div className="bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-3xl p-8 text-white shadow-xl">
                    <h2 className="text-2xl font-bold mb-8 text-center">Mobile-First Experience</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                          <h3 className="text-xl font-bold mb-4">Native Mobile Applications</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-blue-300">iOS Features</h4>
                              <ul className="space-y-2 text-sm opacity-90">
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Face ID / Touch ID integration
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Apple Pay integration
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Siri shortcuts
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Widget support
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-green-300">Android Features</h4>
                              <ul className="space-y-2 text-sm opacity-90">
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Fingerprint authentication
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Google Pay integration
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Google Assistant
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Adaptive icons
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
                          <h3 className="text-xl font-bold mb-4">Progressive Web App (PWA)</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-purple-300 mb-3">Core Capabilities</h4>
                              <ul className="space-y-2 text-sm opacity-90">
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Offline functionality
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Push notifications
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  App-like experience
                                </li>
                                <li className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                                  Cross-platform compatibility
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-yellow-300 mb-3">Performance</h4>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Load Time</span>
                                  <span className="text-sm font-bold">< 2s</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Lighthouse Score</span>
                                  <span className="text-sm font-bold">95+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Offline Support</span>
                                  <span className="text-sm font-bold">100%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold mb-2">Mobile Usage</h3>
                          <div className="text-3xl font-bold mb-2">78%</div>
                          <div className="text-sm opacity-90">of customers prefer mobile</div>
                        </div>

                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="font-bold mb-2">App Performance</h3>
                          <div className="text-3xl font-bold mb-2">4.8★</div>
                          <div className="text-sm opacity-90">average app store rating</div>
                        </div>

                        <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h3 className="font-bold mb-2">Engagement</h3>
                          <div className="text-3xl font-bold mb-2">5.2x</div>
                          <div className="text-sm opacity-90">higher than web portal</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personalization Engine */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">AI-Powered Personalization</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Dynamic Content Delivery</h3>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <div>
                                <div className="font-medium">Behavioral Targeting</div>
                                <div className="text-sm text-gray-600">Content adapts based on user behavior patterns</div>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <div>
                                <div className="font-medium">Contextual Recommendations</div>
                                <div className="text-sm text-gray-600">AI suggests relevant products and services</div>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <div>
                                <div className="font-medium">Adaptive Interface</div>
                                <div className="text-sm text-gray-600">UI elements adjust to user preferences</div>
                              </div>
                            </li>
                          </ul>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Smart Notifications</h3>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                              <span className="text-sm text-gray-700">Payment Reminders</span>
                              <span className="text-sm font-bold text-green-600">98% Open Rate</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                              <span className="text-sm text-gray-700">Rate Alerts</span>
                              <span className="text-sm font-bold text-blue-600">87% Engagement</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                              <span className="text-sm text-gray-700">Account Updates</span>
                              <span className="text-sm font-bold text-purple-600">92% Relevance</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Journey Optimization</h3>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                              <div>
                                <div className="font-medium text-gray-900">Onboarding</div>
                                <div className="text-sm text-gray-600">Personalized welcome experience</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                              <div>
                                <div className="font-medium text-gray-900">Engagement</div>
                                <div className="text-sm text-gray-600">Tailored product recommendations</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                              <div>
                                <div className="font-medium text-gray-900">Retention</div>
                                <div className="text-sm text-gray-600">Proactive support and guidance</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Performance Metrics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">User Engagement</span>
                              <span className="text-sm font-bold text-green-600">+156%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Session Duration</span>
                              <span className="text-sm font-bold text-blue-600">+89%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{width: '72%'}}></div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-700">Feature Adoption</span>
                              <span className="text-sm font-bold text-purple-600">+234%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-purple-500 h-2 rounded-full" style={{width: '94%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSection > 10 && (
              <div className="py-12">
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {sections[currentSection]}
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Being Restored</h2>
                    <p className="text-gray-600 mb-6">
                      I'm working on restoring the comprehensive content for "{sections[currentSection]}". 
                      This section will include detailed analysis, case studies, and implementation guidance.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-semibold text-blue-700">Restoring detailed content...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Analytics & Business Intelligence */}
            {currentSection === 11 && (
              <div className="py-12">
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Analytics & Business Intelligence
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>

                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Data-Driven Decision Making</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      In the modern financial landscape, data is the ultimate competitive advantage. Lendro.AI's Analytics & Business Intelligence 
                      module transforms raw data into actionable insights, enabling financial institutions to make informed decisions, optimize 
                      operations, and identify new opportunities. Our comprehensive analytics platform provides real-time visibility into every 
                      aspect of your lending operations.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50 text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-sm font-medium text-gray-700">KPIs Tracked</div>
                        <div className="text-xs text-gray-500 mt-1">Real-time metrics</div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200/50 text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-2">99.9%</div>
                        <div className="text-sm font-medium text-gray-700">Data Accuracy</div>
                        <div className="text-xs text-gray-500 mt-1">Automated validation</div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50 text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">< 5s</div>
                        <div className="text-sm font-medium text-gray-700">Query Response</div>
                        <div className="text-xs text-gray-500 mt-1">Lightning fast</div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl border border-pink-200/50 text-center">
                        <div className="text-2xl font-bold text-pink-600 mb-2">24/7</div>
                        <div className="text-sm font-medium text-gray-700">Monitoring</div>
                        <div className="text-xs text-gray-500 mt-1">Always available</div>
                      </div>
                    </div>
                  </div>

                  {/* Executive Dashboard */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Executive Dashboard</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-6">
                        <div className="p-6 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800 rounded-2xl text-white">
                          <h3 className="text-xl font-bold mb-6 text-center">Portfolio Performance Overview</h3>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Total Portfolio Value</span>
                                  <span className="text-lg font-bold text-green-400">$2.4B</span>
                                </div>
                                <div className="text-xs opacity-70">+12.3% vs last quarter</div>
                              </div>
                              
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Active Loans</span>
                                  <span className="text-lg font-bold text-blue-400">18,542</span>
                                </div>
                                <div className="text-xs opacity-70">+8.7% month over month</div>
                              </div>
                              
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Default Rate</span>
                                  <span className="text-lg font-bold text-yellow-400">2.3%</span>
                                </div>
                                <div className="text-xs opacity-70">-0.8% improvement</div>
                              </div>
                            </div>
                            
                            <div className="space-y-4">
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Avg. Yield Rate</span>
                                  <span className="text-lg font-bold text-purple-400">8.2%</span>
                                </div>
                                <div className="text-xs opacity-70">Industry leading</div>
                              </div>
                              
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Collection Rate</span>
                                  <span className="text-lg font-bold text-green-400">94.7%</span>
                                </div>
                                <div className="text-xs opacity-70">+2.1% vs target</div>
                              </div>
                              
                              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-sm opacity-90">Processing Time</span>
                                  <span className="text-lg font-bold text-indigo-400">4.2 min</span>
                                </div>
                                <div className="text-xs opacity-70">85% faster than industry</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">Key Performance Indicators</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Loan Approval Rate</span>
                                <span className="text-sm font-bold text-green-600">73.2%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '73.2%'}}></div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Customer Satisfaction</span>
                                <span className="text-sm font-bold text-blue-600">92.1%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{width: '92.1%'}}></div>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Operational Efficiency</span>
                                <span className="text-sm font-bold text-purple-600">87.5%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{width: '87.5%'}}></div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-700">Risk Score Accuracy</span>
                                <span className="text-sm font-bold text-indigo-600">96.3%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-indigo-500 h-2 rounded-full" style={{width: '96.3%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl border border-green-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Revenue Trends</h3>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600 mb-1">$47.2M</div>
                              <div className="text-sm text-gray-600">Monthly Revenue</div>
                              <div className="text-xs text-green-600 font-medium">+18.5% YoY</div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Interest Income</span>
                                <span className="font-medium">$32.1M</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Fee Income</span>
                                <span className="font-medium">$8.7M</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Other Revenue</span>
                                <span className="font-medium">$6.4M</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Risk Metrics</h3>
                          <div className="space-y-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-600 mb-1">2.3%</div>
                              <div className="text-sm text-gray-600">Portfolio Risk</div>
                              <div className="text-xs text-green-600 font-medium">-0.8% vs target</div>
                            </div>
                            
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">30+ Days Past Due</span>
                                <span className="font-medium">1.8%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">90+ Days Past Due</span>
                                <span className="font-medium">0.7%</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Charge-offs</span>
                                <span className="font-medium">0.4%</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200/50">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Operational Metrics</h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Applications Processed</span>
                              <span className="text-sm font-bold">2,847</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Avg. Decision Time</span>
                              <span className="text-sm font-bold">4.2 min</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Automation Rate</span>
                              <span className="text-sm font-bold">87%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Customer Inquiries</span>
                              <span className="text-sm font-bold">1,234</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentSection > 11 && (
              <div className="py-12">
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {sections[currentSection]}
                  </h1>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Being Restored</h2>
                    <p className="text-gray-600 mb-6">
                      I'm working on restoring the comprehensive content for "{sections[currentSection]}". 
                      This section will include detailed analysis, case studies, and implementation guidance.
                    </p>
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-200/50">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
                      <span className="text-sm font-semibold text-blue-700">Restoring detailed content...</span>
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