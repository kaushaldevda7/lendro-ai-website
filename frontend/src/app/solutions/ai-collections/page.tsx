"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';

export default function AICollectionsPage() {
  // Modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const features = [
    {
      title: 'Intelligent Delinquency Prediction',
      description: 'AI-powered early warning system that identifies at-risk accounts before they become delinquent, enabling proactive intervention strategies.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'Personalized Collection Strategies',
      description: 'Tailored approaches for different borrower segments based on risk level, payment history, and communication preferences.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Omnichannel Communication',
      description: 'Engage borrowers through their preferred channels with optimized messaging and timing to maximize response rates.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: 'from-yellow-500 to-orange-600'
    },
    {
      title: 'Compliance & Documentation',
      description: 'Automated compliance monitoring and comprehensive documentation of all collection activities to ensure regulatory adherence.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Automated Recovery Workflows',
      description: 'Streamlined processes that automatically execute collection strategies based on account status and borrower behavior patterns.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600'
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
        heading="Get Started with Collections AI Agent"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-500 via-orange-600 to-yellow-700 text-white py-12 md:py-20 relative overflow-hidden">
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
                <span className="text-sm font-medium text-white">Collections AI Agent</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Intelligent Debt</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                  Recovery Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12">
                Transform collections operations with AI that predicts delinquency, personalizes recovery strategies, and maximizes collection rates while maintaining positive borrower relationships.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="px-8 py-4 bg-white text-red-600 font-semibold rounded-2xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
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
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-100/50">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Collections AI Agent</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                        <p className="text-sm font-medium text-gray-600">Optimizing recovery strategies</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-2xl border border-red-200/50 hover:border-red-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-red-700 mb-1">Early delinquency prediction active</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Identified 127 at-risk accounts using predictive analytics with 94% accuracy rate for proactive intervention</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-2xl border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-orange-700 mb-1">Personalized outreach campaigns deployed</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Executed 892 targeted communications across preferred channels with 73% response rate improvement</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-green-700 mb-1">Compliance monitoring complete</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Automated regulatory compliance checks for 2,341 accounts with 100% adherence to FDCPA guidelines</p>
                        </div>
                      </div>
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/5 via-orange-600/5 to-yellow-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-700/5 via-orange-600/5 to-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Intelligent Recovery</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-600 to-yellow-700 bg-clip-text text-transparent">
                Agent Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced collections intelligence that predicts delinquency, personalizes recovery strategies, and ensures compliance across your entire portfolio.
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
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
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
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
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
      <section className="bg-gradient-to-br from-slate-50 via-white to-gray-50 py-16 md:py-24 relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-red-50 to-orange-50 backdrop-blur-sm rounded-full border border-red-200/50 shadow-sm">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mr-3 animate-pulse shadow-sm"></div>
                <span className="text-sm font-semibold text-red-700">Live Collections Engine</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2">
                    Autonomous Collections
                  </span>
                  <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl">
                    Operations in Action
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Experience how our Collections AI Agent operates with complete autonomy, predicting delinquency, personalizing recovery strategies, and maximizing collection rates while maintaining compliance.
                </p>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-2xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">Experience Full Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Main Demo Container */}
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                  {/* Enhanced Demo Header */}
                  <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Collections AI Agent</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                            <p className="text-white/90 text-sm font-medium">Optimizing recovery strategies</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-white/20 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                        <div className="w-3 h-3 bg-white rounded-full shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Demo Content */}
                  <div className="p-8 space-y-6">
                    <div className="space-y-5">
                      <div className="group bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-2xl border border-red-200/50 hover:border-red-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-red-700">Predictive Delinquency Analysis</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Identified 247 accounts with 90%+ probability of delinquency in next 30 days. Initiated proactive outreach campaigns with personalized messaging strategies.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-orange-50 to-yellow-50 p-5 rounded-2xl border border-orange-200/50 hover:border-orange-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-orange-700">Omnichannel Recovery Campaigns</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Executed 1,342 personalized communications across SMS, email, and voice channels. Achieved 68% response rate with optimized timing and messaging.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-green-700">Automated Compliance Monitoring</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Monitored 3,456 collection activities for FDCPA compliance. Maintained 100% regulatory adherence with automated documentation and audit trails.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-200/50 hover:border-blue-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-blue-700">Intelligent Recovery Workflows</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Automated 789 payment plan negotiations and hardship evaluations. Achieved 84% resolution rate with tailored recovery strategies.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Metrics Dashboard */}
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900">Real-time Collections Metrics</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-1">52%</div>
                          <div className="text-xs font-medium text-gray-600">Recovery Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-1">68%</div>
                          <div className="text-xs font-medium text-gray-600">Response Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">-34%</div>
                          <div className="text-xs font-medium text-gray-600">Charge-off Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Enhancement Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/5 via-orange-600/5 to-yellow-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-yellow-700/5 via-orange-600/5 to-red-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Proven Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 via-orange-600 to-yellow-700 bg-clip-text text-transparent">
                Measurable Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Collections AI Agent delivers quantifiable improvements across all key collection metrics and borrower satisfaction indicators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500 to-pink-600 opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  52%
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  Higher Recovery Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Increase collection success through predictive analytics and personalized recovery strategies.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-600 opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 to-yellow-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  68%
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  Better Response Rates
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Achieve higher borrower engagement through optimized timing and channel preferences.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  34%
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  Reduced Charge-offs
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lower loan losses through early intervention and effective collection strategies.
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4 group-hover:scale-110 transition-transform">
                  41%
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
                  Improved Efficiency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Increase collector productivity with intelligent account prioritization and automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-red-500 via-orange-600 to-yellow-700 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Color Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400/30 to-red-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-orange-400/30 to-yellow-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-red-400/30 to-orange-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Transform Collections Operations</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              <span className="block mb-2">Ready to Deploy Your</span>
              <span className="block bg-gradient-to-r from-pink-300 via-red-300 to-orange-300 bg-clip-text text-transparent py-2">
                Collections AI Agent?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join forward-thinking lenders who are already using autonomous AI to predict delinquency, personalize recovery strategies, and maximize collection rates.
              <span className="block mt-2 text-pink-200 font-medium">Start collecting smarter today.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 to-red-500 text-white font-semibold rounded-2xl hover:from-pink-500 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Predictive Analytics</h4>
                <p className="text-white/80 text-sm">Identify at-risk accounts before they become delinquent</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Smart Communication</h4>
                <p className="text-white/80 text-sm">Personalized outreach through preferred channels</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Compliance Assurance</h4>
                <p className="text-white/80 text-sm">Automated regulatory monitoring and documentation</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"></div>
              <span>Intelligent collections automation for modern lenders</span>
              <div className="w-1 h-1 bg-gradient-to-r from-red-400 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 