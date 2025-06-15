"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';

export default function AICreditPage() {
  // Modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const features = [
    {
      title: 'Risk Scoring Models',
      description: 'Advanced machine learning algorithms that analyze traditional and alternative data sources to generate precise risk scores and probability of default predictions.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Fraud Detection',
      description: 'Real-time fraud detection using behavioral analytics, device fingerprinting, and pattern recognition to identify suspicious applications and protect against losses.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Market Segmentation',
      description: 'Intelligent customer segmentation that identifies distinct borrower profiles and risk categories to optimize pricing strategies and portfolio performance.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forward-looking models that predict future payment behavior, early warning indicators, and portfolio performance trends for proactive risk management.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-600'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance monitoring and explainable AI decisions that meet regulatory requirements including ECOA, FCRA, and fair lending practices.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-teal-500 to-green-600'
    }
  ];

  const benefits = [
    {
      title: 'Faster Decisions',
      description: 'Reduce credit decision time from days to seconds with automated risk assessment.',
      percentage: '94%',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Lower Default Rates',
      description: 'More accurate risk prediction leads to significant reduction in portfolio defaults.',
      percentage: '31%',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Higher Approval Rates',
      description: 'Approve more qualified borrowers with comprehensive risk assessment.',
      percentage: '23%',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Fraud Prevention',
      description: 'Advanced fraud detection prevents losses and protects your portfolio.',
      percentage: '87%',
      color: 'from-cyan-500 to-teal-600'
    }
  ];

  return (
    <Layout>
      {/* Modals */}
      <CalendlyModal 
        isOpen={isScheduleDemoModalOpen} 
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        heading="Get Started with Credit AI Agent"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-700 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
                <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-white">Credit AI Agent</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Intelligent Credit</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                  Risk Assessment
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12">
                Transform credit decisioning with AI that analyzes risk patterns, detects fraud, and ensures compliance while delivering instant, accurate credit decisions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-2xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
                >
                  Schedule Demo
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
                >
                  Get Started
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Credit AI Agent</h3>
                      <p className="text-sm text-gray-500">Analyzing credit applications...</p>
              </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-xl border-l-4 border-purple-500">
                      <p className="text-sm text-gray-700 font-medium">🎯 Risk score calculated: 720 (Low Risk)</p>
                      <p className="text-xs text-gray-600 mt-1">Analyzed 47 data points with 98.3% confidence level</p>
                  </div>
                  
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-xl border-l-4 border-indigo-500">
                      <p className="text-sm text-gray-700 font-medium">🛡️ Fraud check completed</p>
                      <p className="text-xs text-gray-600 mt-1">No suspicious patterns detected across 12 fraud indicators</p>
                  </div>
                  
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-xl border-l-4 border-blue-500">
                      <p className="text-sm text-gray-700 font-medium">✅ Approved with optimal terms</p>
                      <p className="text-xs text-gray-600 mt-1">$25,000 limit at 8.9% APR based on risk profile</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Capabilities */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-indigo-600/5 to-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-700/5 via-indigo-600/5 to-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Advanced Risk Intelligence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Agent Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive credit intelligence that analyzes risk patterns, detects fraud, and ensures regulatory compliance for smarter lending decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {features.slice(3, 5).map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Agentic Conversation Demo */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-500/3 to-indigo-600/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-indigo-600/3 to-blue-700/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
            <div className="lg:col-span-5 h-full flex flex-col">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8 w-fit">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Credit Analysis</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                  Autonomous Credit
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl mt-2">
                  Decision Making
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed flex-grow">
                Experience how our Credit AI Agent processes applications autonomously, analyzing risk factors, detecting fraud patterns, and making instant credit decisions with full regulatory compliance.
              </p>
              
              <div className="mt-auto">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  See Full Demo
                </button>
                  </div>
                </div>
                
            <div className="lg:col-span-7 h-full flex flex-col">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden flex-grow">
                {/* Demo Header */}
                <div className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                        <h3 className="text-xl font-bold text-white">Credit AI Agent</h3>
                        <p className="text-white/80">Autonomous Risk Assessment</p>
                  </div>
                </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  </div>
                </div>
                
                {/* Demo Content */}
                <div className="p-8 space-y-6 flex-grow">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-2xl border-l-4 border-purple-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-purple-700">Executed: Risk Analysis</span>
                  </div>
                      <p className="text-sm text-gray-700">Processed 47 data points including credit history, income verification, and alternative data sources. Generated comprehensive risk profile with 98.3% confidence.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-2xl border-l-4 border-indigo-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-indigo-700">Detected: Fraud Indicators</span>
                  </div>
                      <p className="text-sm text-gray-700">Analyzed behavioral patterns and device fingerprints. No suspicious activity detected across 12 fraud detection models. Application cleared for processing.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-blue-700">Optimized: Credit Terms</span>
                      </div>
                      <p className="text-sm text-gray-700">Calculated optimal pricing based on risk segmentation. Recommended $25,000 limit at 8.9% APR to maximize profitability while ensuring competitive terms.</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-4 rounded-2xl border-l-4 border-cyan-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-cyan-700">Validated: Compliance</span>
                      </div>
                      <p className="text-sm text-gray-700">Verified decision meets ECOA and fair lending requirements. Generated adverse action explanations and documented decision rationale for audit trail.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Real-time Decision Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">2.3s</div>
                        <div className="text-sm text-gray-600">Decision Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600">720</div>
                        <div className="text-sm text-gray-600">Risk Score</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 via-indigo-600/5 to-blue-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-700/5 via-indigo-600/5 to-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Proven Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                Measurable Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Credit AI Agent delivers quantifiable improvements across all key lending performance metrics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform`}>
                    {benefit.percentage}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-cyan-500 via-teal-600 to-emerald-700 text-white py-12 md:py-20 relative overflow-hidden">
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
              <span className="text-sm font-medium text-white">Transform Credit Decisions</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-none py-1">
              <span className="block mb-1">Ready to Deploy Your</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent py-1">
                Credit AI Agent?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join forward-thinking lenders who are already using autonomous AI to assess credit risk faster, detect fraud earlier, and make more profitable lending decisions.
              <span className="block mt-2 text-cyan-200 font-medium">Start lending smarter today.</span>
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
                  <span className="text-lg">Get Started</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  </div>
              </button>
                </div>
                
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  </div>
                <h4 className="text-lg font-semibold text-white mb-2">Instant Decisions</h4>
                <p className="text-white/80 text-sm">Credit decisions in seconds with 98%+ accuracy</p>
                </div>
                
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Fraud Protection</h4>
                <p className="text-white/80 text-sm">Advanced fraud detection with 87% prevention rate</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
              </div>
                <h4 className="text-lg font-semibold text-white mb-2">Full Compliance</h4>
                <p className="text-white/80 text-sm">Built-in regulatory compliance and audit trails</p>
              </div>
              </div>
            </div>
            
          {/* Bottom Accent */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"></div>
              <span>Intelligent credit decisions for modern lenders</span>
              <div className="w-1 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 