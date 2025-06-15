"use client";

import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';

export default function Home() {
  const { state } = useAuth();
  const { isAuthenticated } = state;
  const router = useRouter();
  
  // Modal states
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [isStartTrialModalOpen, setIsStartTrialModalOpen] = useState(false);
  
  // AI Assistant showcase states
  const [activeAssistant, setActiveAssistant] = useState(0);
  const assistantOptions = [
    {
      id: 'relations',
      name: 'Relations AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      description: 'Enhance customer relationships with personalized interactions and insights.',
      capabilities: [
        'Customer sentiment analysis',
        'Personalized communication',
        'Retention risk prediction',
        'Relationship scoring',
        'Proactive engagement'
      ],
      messages: [
        { sender: 'user', text: 'Show me our customer retention status' },
        { sender: 'ai', text: 'I\'ve autonomously analyzed 2,847 customer profiles and identified 47 at-risk accounts. I\'ve already initiated personalized retention campaigns for high-value segments and scheduled proactive outreach for the next 72 hours.' }
      ]
    },
    {
      id: 'originations',
      name: 'Originations AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      description: 'Streamline loan applications and improve approval processes.',
      capabilities: [
        'Application processing',
        'Document verification',
        'Workflow optimization',
        'Bottleneck detection',
        'Auto-routing decisions'
      ],
      messages: [
        { sender: 'user', text: 'What\'s happening with loan applications today?' },
        { sender: 'ai', text: 'I\'ve processed 23 applications this morning with an average decision time of 4.2 minutes. I detected a verification bottleneck and automatically rerouted 8 applications through alternative pathways, maintaining our 78% approval rate.' }
      ]
    },
    {
      id: 'spreading',
      name: 'Spreading AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 002 2m0 0V17m0-10a2 2 0 012 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600',
      description: 'Automate financial statement analysis and spreading processes.',
      capabilities: [
        'Financial statement parsing',
        'Cash flow analysis',
        'Ratio calculations',
        'Trend identification',
        'Data normalization'
      ],
      messages: [
        { sender: 'user', text: 'How are the financial spreads looking today?' },
        { sender: 'ai', text: 'I\'ve automatically processed 18 financial statements and identified 3 with cash flow inconsistencies. I\'ve normalized the data across different accounting standards and flagged 2 borrowers showing 23% revenue decline that require immediate attention.' }
      ]
    },
    {
      id: 'credit',
      name: 'Credit AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-purple-500 to-violet-600',
      description: 'Enhance risk assessment and optimize lending decisions.',
      capabilities: [
        'Risk scoring models',
        'Fraud detection',
        'Credit analysis',
        'Market segmentation',
        'Pricing optimization'
      ],
      messages: [
        { sender: 'user', text: 'Any risk concerns I should know about?' },
        { sender: 'ai', text: 'I\'ve flagged 3 applications with potential synthetic identity patterns and prevented $2.3M in fraud exposure. My models have also identified a new market segment with 15% higher profitability that we should consider targeting.' }
      ]
    },
    {
      id: 'servicing',
      name: 'Servicing AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-yellow-500 to-amber-600',
      description: 'Automate loan servicing and improve customer experience.',
      capabilities: [
        'Payment monitoring',
        'Early intervention',
        'Account restructuring',
        'Customer communications',
        'Performance tracking'
      ],
      messages: [
        { sender: 'user', text: 'How are our loan accounts performing?' },
        { sender: 'ai', text: 'I\'ve proactively contacted 156 borrowers showing early stress signals and automatically restructured 23 payment plans overnight. This prevented 89% of projected delinquencies while maintaining positive customer relationships.' }
      ]
    },
    {
      id: 'collections',
      name: 'Collections AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-red-500 to-rose-600',
      description: 'Optimize recovery efforts and reduce defaults.',
      capabilities: [
        'Behavioral analytics',
        'Recovery strategies',
        'Payment negotiations',
        'Legal compliance',
        'Portfolio optimization'
      ],
      messages: [
        { sender: 'user', text: 'What\'s our collections performance looking like?' },
        { sender: 'ai', text: 'I\'ve deployed targeted recovery strategies across 340 accounts using behavioral analytics. Recovery rates improved 31% this quarter, and I\'ve negotiated 67 payment plans while maintaining customer satisfaction above 7.2/10.' }
      ]
    },
    {
      id: 'treasury',
      name: 'Treasury AI Agent',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: 'from-cyan-500 to-teal-600',
      description: 'Optimize liquidity management and financial operations.',
      capabilities: [
        'Liquidity forecasting',
        'Funding optimization',
        'Rate predictions',
        'Cash flow management',
        'Risk hedging'
      ],
      messages: [
        { sender: 'user', text: 'How\'s our liquidity position?' },
        { sender: 'ai', text: 'I\'ve optimized our funding mix across 12 sources and executed a $5.2M rebalancing based on rate predictions. I also forecasted a cash flow gap in Week 3 and pre-arranged credit facilities, saving us 0.15% in emergency rates.' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAssistant((current) => (current + 1) % assistantOptions.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [assistantOptions.length]);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/platform/dashboard');
    }
  }, [isAuthenticated, router]);

  return (
    <Layout>
      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isScheduleDemoModalOpen} 
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
      
      {/* Other Modals */}
      <ContactFormModal 
        isOpen={isGetStartedModalOpen} 
        onClose={() => setIsGetStartedModalOpen(false)}
        heading="Get Started"
      />
      
      <ContactFormModal 
        isOpen={isStartTrialModalOpen} 
        onClose={() => setIsStartTrialModalOpen(false)}
        heading="Start Free Trial"
      />
      
      {/* AI Assistants Showcase Section - Now at the top */}
      <section className="pb-12 md:pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/50"></div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-lendro-primary/10 via-lendro-secondary/10 to-lendro-tertiary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-20 pt-8 md:pt-12">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Next-Generation AI Technology</span>
          </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[0.9]">
              <span className="block">
                <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                  Agentic AI
                </span>
              </span>
              <span className="block text-gray-900 text-4xl md:text-5xl lg:text-6xl mt-2">
                for Lending
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Autonomous agents that think, learn, and act—transforming lending operations with unprecedented intelligence.
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span>Fully Autonomous</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>Real-time Learning</span>
            </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                <span>Intelligent Actions</span>
              </div>
            </div>
            </div>
            
          {/* Agent Selection */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {assistantOptions.map((assistant, index) => (
                <button
                  key={assistant.id}
                  onClick={() => setActiveAssistant(index)}
                  className={`group relative px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 ${
                    activeAssistant === index 
                      ? 'bg-white shadow-xl scale-105 border border-gray-200' 
                      : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 border border-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-r ${assistant.color} flex items-center justify-center text-white transition-transform group-hover:scale-110`}>
                      {assistant.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900 text-xs md:text-sm">
                        {assistant.name.replace(' AI Agent', '')}
                      </div>
                      <div className="text-xs text-gray-500 hidden md:block">AI Agent</div>
                    </div>
                  </div>
                  {activeAssistant === index && (
                    <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 md:w-8 h-1 bg-gradient-to-r ${assistant.color} rounded-full`}></div>
                  )}
                </button>
              ))}
            </div>
            </div>
            
          {/* Main Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Agent Details Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden h-full flex flex-col">
                {/* Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${assistantOptions[activeAssistant].color} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${assistantOptions[activeAssistant].color} flex items-center justify-center text-white mr-4 shadow-lg`}>
                      {assistantOptions[activeAssistant].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {assistantOptions[activeAssistant].name}
                      </h3>
                      <p className="text-gray-500">Autonomous Intelligence</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {assistantOptions[activeAssistant].description}
                  </p>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    <div className="grid grid-cols-1 gap-3">
                      {assistantOptions[activeAssistant].capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                          <div className={`w-2 h-2 bg-gradient-to-r ${assistantOptions[activeAssistant].color} rounded-full`}></div>
                          <span className="text-gray-700 font-medium">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsScheduleDemoModalOpen(true)}
                    className={`w-full py-4 px-6 bg-gradient-to-r ${assistantOptions[activeAssistant].color} text-white rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-auto`}
                  >
                    <span>Deploy {assistantOptions[activeAssistant].name.split(' ')[0]} Agent</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
                </div>
              </div>
              
            {/* Interactive Demo */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Demo Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-4 h-4 bg-gradient-to-r ${assistantOptions[activeAssistant].color} rounded-full animate-pulse`}></div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{assistantOptions[activeAssistant].name}</h3>
                        <p className="text-sm text-gray-500">Live Demo Environment</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    </div>
                  </div>
                  
                {/* Chat Interface */}
                <div className="p-6 h-[400px] bg-gradient-to-b from-gray-50 to-white overflow-y-auto">
                  <div className="space-y-6">
                      {assistantOptions[activeAssistant].messages.map((message, idx) => (
                        <div 
                          key={`${assistantOptions[activeAssistant].id}-msg-${idx}`}
                        className={`flex items-start gap-4 ${message.sender === 'user' ? 'flex-row-reverse' : ''} animate-fadeIn`}
                        style={{ animationDelay: `${idx * 0.3}s` }}
                      >
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0 ${
                          message.sender === 'ai' 
                            ? `bg-gradient-to-r ${assistantOptions[activeAssistant].color}` 
                            : 'bg-gray-600'
                        }`}>
                          {message.sender === 'ai' ? 'AI' : 'U'}
                            </div>
                        
                        <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                          message.sender === 'ai' 
                            ? 'bg-white border border-gray-100' 
                            : 'bg-gray-100 border border-gray-200'
                        }`}>
                          <p className="text-gray-800 leading-relaxed">{message.text}</p>
                          </div>
                        </div>
                      ))}
                      
                    {/* Typing Indicator */}
                    <div className="flex items-start gap-4 animate-fadeIn">
                      <div className={`w-10 h-10 rounded-2xl bg-gradient-to-r ${assistantOptions[activeAssistant].color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                          AI
                        </div>
                      <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                {/* Input Area */}
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="flex items-center gap-4">
                      <input 
                        type="text" 
                      placeholder="Ask your AI agent anything..." 
                      className="flex-1 border border-gray-200 rounded-2xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all"
                      />
                      <button className={`bg-gradient-to-r ${assistantOptions[activeAssistant].color} text-white py-2 px-3 sm:px-4 rounded-r-md hover:opacity-90 transition-colors`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 gap-3">
              {assistantOptions.map((_, index) => (
                <button
                  key={`nav-${index}`}
                  onClick={() => setActiveAssistant(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeAssistant === index 
                    ? `bg-gradient-to-r ${assistantOptions[index].color} scale-125` 
                    : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to agent ${index + 1}`}
                />
              ))}
          </div>
        </div>
      </section>

      {/* New Inspiring Hero Section */}
      <section className="bg-gradient-to-br from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-relaxed mb-8">
              Intelligent Lending
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Reimagined
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transform your financial institution with AI-powered lending solutions that deliver unprecedented speed, accuracy, and insight. The future of lending is here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)} 
                className="px-8 py-4 bg-white text-lendro-primary font-semibold rounded-lg hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Experience the Future
              </button>
              <Link 
                href="/solutions" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Explore Solutions
              </Link>
            </div>
            
            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Uptime Reliability</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">60%</div>
                <p className="text-white/80 text-sm">Faster Processing</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
                <p className="text-white/80 text-sm">Integrations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">3x</div>
                <p className="text-white/80 text-sm">ROI Increase</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Configuration Dashboard Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-lendro-primary/5 via-lendro-secondary/5 to-lendro-tertiary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-lendro-tertiary/5 via-lendro-secondary/5 to-lendro-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Enterprise-Grade Platform</span>
          </div>
          
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Intelligent Configuration
              </span>
              <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                Built for Scale
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Configure every aspect of your lending operations with AI-powered insights and real-time optimization
            </p>
            </div>
            
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">AI Configuration Dashboard</h3>
                    <p className="text-white/80">Real-time optimization and control</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {/* Risk Assessment Panel */}
              <div className="p-8 border-r border-gray-200/50 bg-gradient-to-b from-white to-gray-50/50">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800">Risk Assessment</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Risk Tolerance</label>
                    <div className="w-full bg-gray-200 rounded-full h-3 relative">
                      <div className="bg-gradient-to-r from-purple-500 to-violet-600 h-3 rounded-full w-3/4 relative">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-purple-500 rounded-full shadow-lg"></div>
                    </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Conservative</span>
                      <span className="font-medium text-purple-600">Moderate</span>
                      <span>Aggressive</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Credit Score Threshold</label>
                    <div className="flex items-center bg-gray-50 rounded-xl p-3">
                      <input type="text" value="680" readOnly className="w-16 bg-transparent text-center text-gray-900 font-bold text-lg" />
                      <div className="ml-3 text-sm text-gray-600">Minimum Score</div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex items-center">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <label className="text-sm font-medium text-green-800">AI Fraud Detection Active</label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Approval Workflow Panel */}
              <div className="p-8 border-r border-gray-200/50 bg-gradient-to-b from-white to-blue-50/30">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800">Approval Workflow</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Auto-approve</span>
                      <span className="text-lg font-bold text-green-600">$25K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Manual review</span>
                      <span className="text-lg font-bold text-yellow-600">$100K</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full w-2/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Executive approval</span>
                      <span className="text-lg font-bold text-red-600">$250K+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-4">
                    <div className="flex items-center">
                      <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <label className="text-sm font-medium text-blue-800">Parallel Processing Enabled</label>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Parameters Panel */}
              <div className="p-8 border-r border-gray-200/50 bg-gradient-to-b from-white to-green-50/30">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800">AI Parameters</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Model Confidence</label>
                    <div className="relative">
                      <select className="block w-full bg-white border border-gray-200 rounded-xl shadow-sm py-3 px-4 text-gray-900 font-medium focus:ring-2 focus:ring-green-500 focus:border-green-500">
                      <option>High (95%+)</option>
                      <option>Medium (85%+)</option>
                      <option>Low (75%+)</option>
                    </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Data Sources</label>
                    <div className="space-y-3">
                      <div className="flex items-center bg-white rounded-lg p-3 border border-gray-100">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                        <label className="text-sm font-medium text-gray-700">Credit Bureaus</label>
                      </div>
                      <div className="flex items-center bg-white rounded-lg p-3 border border-gray-100">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                      </div>
                        <label className="text-sm font-medium text-gray-700">Banking History</label>
                    </div>
                      <div className="flex items-center bg-white rounded-lg p-3 border border-gray-100">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <label className="text-sm font-medium text-gray-700">Alternative Data</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Performance Metrics Panel */}
              <div className="p-8 bg-gradient-to-b from-white to-orange-50/30">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800">Live Metrics</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Approval Rate</span>
                      <span className="text-2xl font-bold text-green-600">72.4%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full w-[72%] relative">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Default Rate</span>
                      <span className="text-2xl font-bold text-red-600">2.1%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-red-500 to-rose-600 h-3 rounded-full w-[21%] relative">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-gray-700">Processing Time</span>
                      <span className="text-2xl font-bold text-blue-600">4.2h</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full w-[35%] relative">
                        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 border border-orange-200">
                    <div className="text-center">
                      <div className="text-sm font-medium text-orange-800 mb-1">System Status</div>
                      <div className="flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm font-bold text-green-700">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-lendro-primary/3 to-lendro-secondary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-lendro-secondary/3 to-lendro-tertiary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Built by Industry Veterans</span>
          </div>
          
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Proven Experience
              </span>
              <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                Real Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our founding team brings decades of experience from leading financial institutions, having delivered transformational results across the industry
              </p>
            </div>

          {/* Experience Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  15+
          </div>
                <p className="text-gray-600 font-medium">Years Experience</p>
        </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  $5B+
                </div>
                <p className="text-gray-600 font-medium">Loans Managed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-gray-600 font-medium">AI Projects Led</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  3
                </div>
                <p className="text-gray-600 font-medium">Major Institutions</p>
              </div>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Innovation Showcase */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lendro-primary/10 to-lendro-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-2xl flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">Industry Recognition</h4>
                    <p className="text-gray-600">Award-Winning Innovation</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">FinTech Innovation Award 2023</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-800">AI Excellence in Banking</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
          </div>
                    <span className="font-medium text-gray-800">Published Research Papers</span>
        </div>
                </div>
                
                <div className="bg-gradient-to-r from-lendro-primary/5 to-lendro-secondary/5 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-lendro-primary mb-1">Top 1%</div>
                    <p className="text-sm text-gray-600">Industry Innovators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transformation Impact */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lendro-secondary/10 to-lendro-tertiary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-lendro-secondary to-lendro-tertiary rounded-2xl flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">Transformation Impact</h4>
                    <p className="text-gray-600">Measurable Results</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                    <p className="text-xs text-gray-600">Faster Processing</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">$2.1B</div>
                    <p className="text-xs text-gray-600">Portfolio Managed</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">99.3%</div>
                    <p className="text-xs text-gray-600">Model Accuracy</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">100K+</div>
                    <p className="text-xs text-gray-600">Applications</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-lendro-secondary/5 to-lendro-tertiary/5 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-lendro-secondary to-lendro-tertiary rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Proven at Enterprise Scale</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="bg-gradient-to-br from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        {/* Floating Color Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Ready to Transform Your Lending?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-none">
              <span className="block mb-1">Experience the Future of</span>
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent py-1">
                Agentic AI Lending
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join the next generation of lenders leveraging autonomous AI agents to revolutionize their operations. 
              <span className="block mt-2 text-yellow-200 font-medium">Your competitive advantage starts here.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Schedule Live Demo</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </div>
              </button>
              
              <button 
                onClick={() => setIsGetStartedModalOpen(true)}
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Get Started Today</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  </div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h4>
                <p className="text-white/80 text-sm">Go live in weeks, not months with our proven implementation process</p>
                </div>
                
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-white/80 text-sm">Bank-grade security with SOC 2 compliance and end-to-end encryption</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
              </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                <p className="text-white/80 text-sm">Dedicated success team with deep lending and AI expertise</p>
                </div>
              </div>
            </div>
          
          {/* Bottom Accent */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <div className="w-1 h-1 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full"></div>
              <span>Trusted by forward-thinking lenders</span>
              <div className="w-1 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"></div>
        </div>
      </div>
        </div>
      </section>

      {/* Knowledge Hub Section */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-lendro-primary/3 to-lendro-secondary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-lendro-secondary/3 to-lendro-tertiary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-lendro-tertiary/3 to-lendro-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Industry Insights & Research</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deep insights from industry leaders, cutting-edge research, and practical guides to transform your lending operations
            </p>
          </div>

          {/* Featured Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Featured White Paper */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lendro-primary/10 to-lendro-secondary/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-lendro-primary/10 to-lendro-secondary/10 rounded-full border border-lendro-primary/20">
                    <span className="text-xs font-medium text-lendro-primary">Featured White Paper</span>
        </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        </div>
      </div>
      
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-lendro-primary transition-colors">
                  The Future of Agentic AI in Financial Services
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  A comprehensive 47-page analysis of how autonomous AI agents are revolutionizing lending operations, featuring case studies from leading institutions and implementation frameworks.
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>December 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span>47 pages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>2.3K views</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsGetStartedModalOpen(true)}
                    className="px-6 py-3 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    <span>Download Free</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </button>
                  </div>
              </div>
            </div>

            {/* Quick Access Resources */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">ROI Calculator</h4>
                    <p className="text-gray-500 text-sm">Interactive Tool</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Calculate your potential savings and ROI with AI-powered lending automation.</p>
                <button className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors flex items-center gap-1">
                  <span>Try Calculator</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                </div>
                
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Webinar Series</h4>
                    <p className="text-gray-500 text-sm">Live Sessions</p>
              </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Join our monthly deep-dives into AI lending trends and best practices.</p>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors flex items-center gap-1">
                  <span>View Schedule</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
              </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Implementation Guide</h4>
                    <p className="text-gray-500 text-sm">Step-by-Step</p>
                </div>
              </div>
                <p className="text-gray-600 text-sm mb-4">Complete roadmap for deploying AI agents in your lending operations.</p>
                <button className="text-purple-600 font-medium text-sm hover:text-purple-700 transition-colors flex items-center gap-1">
                  <span>Download Guide</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
            </div>
        </div>
      </div>
      
          {/* Research Papers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 rounded-full border border-orange-200">
                  <span className="text-xs font-medium text-orange-700">Research Paper</span>
                </div>
                <div className="text-gray-400 text-sm">Nov 2024</div>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-lendro-primary transition-colors">
                Machine Learning Risk Models: A Comparative Analysis
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Comprehensive study of ML algorithms in credit risk assessment, comparing traditional and modern approaches.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-gray-400 text-xs">24 pages • 1.8K downloads</div>
                <button className="text-orange-600 font-medium text-sm hover:text-orange-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-teal-100 rounded-full border border-teal-200">
                  <span className="text-xs font-medium text-teal-700">Case Study</span>
                </div>
                <div className="text-gray-400 text-sm">Oct 2024</div>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-lendro-primary transition-colors">
                Regional Bank Transformation: 300% Efficiency Gain
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                How a mid-size regional bank achieved unprecedented efficiency through AI agent deployment.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-gray-400 text-xs">16 pages • 2.1K downloads</div>
                <button className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-pink-100 rounded-full border border-pink-200">
                  <span className="text-xs font-medium text-pink-700">Industry Report</span>
                </div>
                <div className="text-gray-400 text-sm">Sep 2024</div>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-lendro-primary transition-colors">
                The State of AI in Lending: 2024 Industry Survey
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Insights from 500+ lending executives on AI adoption, challenges, and future outlook.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-gray-400 text-xs">32 pages • 3.2K downloads</div>
                <button className="text-pink-600 font-medium text-sm hover:text-pink-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-lendro-primary/10 to-lendro-secondary/10 rounded-full blur-2xl"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                  Stay Ahead of the Curve
                </span>
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Get the latest insights, research, and industry trends delivered to your inbox monthly
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lendro-primary/50 focus:border-lendro-primary shadow-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
                  Subscribe Now
          </button>
        </div>
              <p className="text-gray-500 text-sm mt-4">
                Join 5,000+ lending professionals. Unsubscribe anytime.
              </p>
      </div>
    </div>
        </div>
      </section>
    </Layout>
  );
}
