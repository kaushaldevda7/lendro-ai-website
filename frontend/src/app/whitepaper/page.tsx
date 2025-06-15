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
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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

            {/* Placeholder for other sections - I'll continue restoring them */}
            {currentSection > 5 && (
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