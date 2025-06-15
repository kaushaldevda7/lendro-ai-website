"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';

export default function AIServicingPage() {
  // Modal states
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const features = [
    {
      title: 'Automated Payment Processing',
      description: 'Intelligent automation that streamlines payment collection and processing with AI-powered workflows that reduce manual intervention and improve efficiency.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Intelligent Communication',
      description: 'Engage borrowers with personalized, timely communications through their preferred channels using advanced AI-driven messaging strategies.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Proactive Account Management',
      description: 'Identify potential account issues before they become problems with predictive analytics and early intervention strategies powered by machine learning.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Self-Service Portal',
      description: 'Empower borrowers with an intuitive dashboard for account management, document uploads, and instant assistance through AI-powered interfaces.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Compliance Automation',
      description: 'Ensure regulatory compliance with automated monitoring, reporting, and audit trail maintenance that adapts to changing requirements.',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-600'
    }
  ];

  const benefits = [
    {
      title: 'Reduced Operational Costs',
      description: 'Decrease servicing costs through automation of routine tasks and intelligent workflows.',
      percentage: '46%',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Improved Customer Satisfaction',
      description: 'Enhance borrower experience with responsive, personalized service and proactive support.',
      percentage: '38%',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Lower Delinquency Rates',
      description: 'Detect and address payment issues early to prevent delinquencies and defaults.',
      percentage: '29%',
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Increased Payment Completion',
      description: 'More borrowers complete payments on time with proactive reminders and flexible options.',
      percentage: '34%',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const capabilities = [
    {
      title: 'Payment Processing',
      items: [
        'Multi-channel payment collection',
        'Automatic payment reconciliation',
        'Real-time payment posting',
        'Custom payment plan setup'
      ]
    },
    {
      title: 'Account Management',
      items: [
        'Escrow analysis and adjustments',
        'Interest rate modifications',
        'Document management',
        'Statement generation'
      ]
    },
    {
      title: 'Customer Engagement',
      items: [
        'Intelligent chatbot support',
        'Personalized notifications',
        'Milestone celebrations',
        'Feedback collection and analysis'
      ]
    },
    {
      title: 'Compliance Management',
      items: [
        'Automated regulatory reporting',
        'Compliance monitoring',
        'Audit trail maintenance',
        'Disclosure delivery'
      ]
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
        heading="Get Started with Servicing AI Agent"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700 text-white py-12 md:py-20 relative overflow-hidden">
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
                <span className="text-sm font-medium text-white">Servicing AI Agent</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block">Intelligent Loan</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                  Servicing Automation
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-12">
                Transform loan servicing operations with AI that automates payments, enhances borrower engagement, and ensures compliance while reducing costs and improving satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-2xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
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
                    <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Servicing AI Agent</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                        <p className="text-sm font-medium text-gray-600">Managing loan portfolios</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl border border-indigo-200/50 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-indigo-700 mb-1">Automated payment processing complete</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Processed 1,247 payments across multiple channels with intelligent reconciliation and real-time posting</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-green-700 mb-1">Proactive borrower engagement active</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Sent 342 personalized communications through preferred channels with 87% engagement rate improvement</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-2xl border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-purple-700 mb-1">Early intervention system deployed</p>
                          <p className="text-xs text-gray-600 leading-relaxed">Identified 23 at-risk accounts and initiated proactive support measures with 91% success rate</p>
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 via-purple-600/5 to-pink-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-700/5 via-purple-600/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Intelligent Automation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Agent Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Advanced servicing intelligence that automates operations, enhances borrower engagement, and ensures compliance across your entire loan portfolio.
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
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
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
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-purple-50 backdrop-blur-sm rounded-full border border-indigo-200/50 shadow-sm">
                <div className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 animate-pulse shadow-sm"></div>
                <span className="text-sm font-semibold text-indigo-700">Live Servicing Engine</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                    Autonomous Servicing
                  </span>
                  <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl">
                    Operations in Action
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Experience how our Servicing AI Agent operates with complete autonomy, managing payments, engaging borrowers, and ensuring compliance to transform your servicing operations.
                </p>
              </div>
              
              <div className="pt-4">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
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
                  <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Servicing AI Agent</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-sm"></div>
                            <p className="text-white/90 text-sm font-medium">Managing loan portfolios</p>
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
                      <div className="group bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-2xl border border-indigo-200/50 hover:border-indigo-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-indigo-700">Intelligent Payment Processing</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Processed 1,847 payments across multiple channels. Automated reconciliation and real-time posting with 99.9% accuracy and instant borrower notifications.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-2xl border border-green-200/50 hover:border-green-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-green-700">Proactive Borrower Engagement</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Deployed personalized communication campaigns for 456 borrowers. Achieved 89% engagement rate through optimal timing and channel preferences.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-2xl border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-purple-700">Early Intervention System</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Identified 34 at-risk accounts using predictive analytics. Initiated proactive support measures with 93% success rate in preventing delinquency.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group bg-gradient-to-r from-cyan-50 to-teal-50 p-5 rounded-2xl border border-cyan-200/50 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-md">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                              <span className="text-sm font-bold text-cyan-700">Automated Compliance Monitoring</span>
                            </div>
                            <p className="text-sm text-gray-700 leading-relaxed">Completed regulatory compliance checks for 2,156 accounts. Generated automated reports and maintained audit trails with 100% accuracy.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Metrics Dashboard */}
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h4 className="font-bold text-gray-900">Real-time Servicing Metrics</h4>
                      </div>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1">46%</div>
                          <div className="text-xs font-medium text-gray-600">Cost Reduction</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">89%</div>
                          <div className="text-xs font-medium text-gray-600">Engagement Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">+38%</div>
                          <div className="text-xs font-medium text-gray-600">Satisfaction Score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Enhancement Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full blur-sm opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-sm opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/5 via-purple-600/5 to-pink-700/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-700/5 via-purple-600/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Proven Results</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-700 bg-clip-text text-transparent">
                Measurable Impact
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our Servicing AI Agent delivers quantifiable improvements across all key servicing metrics and borrower satisfaction indicators.
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
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-indigo-600 transition-colors">
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
      <section className="bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-700 text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Color Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-indigo-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/30 to-purple-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Transform Loan Servicing</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              <span className="block mb-2">Ready to Deploy Your</span>
              <span className="block bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent py-2">
                Servicing AI Agent?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join forward-thinking lenders who are already using autonomous AI to automate payments, enhance borrower engagement, and reduce servicing costs.
              <span className="block mt-2 text-cyan-200 font-medium">Start servicing smarter today.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-indigo-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
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
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Automated Processing</h4>
                <p className="text-white/80 text-sm">Process payments and manage accounts automatically</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Smart Engagement</h4>
                <p className="text-white/80 text-sm">Personalized borrower communications and support</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Compliance Assurance</h4>
                <p className="text-white/80 text-sm">Automated regulatory monitoring and reporting</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full"></div>
              <span>Intelligent servicing automation for modern lenders</span>
              <div className="w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 