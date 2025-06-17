"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

type SectionKey = 'origination' | 'risk' | 'servicing' | 'ai' | 'portals' | 'analytics';

interface Feature {
  title: string;
  description: string;
}

interface PlatformSection {
  title: string;
  icon: string;
  features: Feature[];
}

export default function PlatformPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>('origination');

  const platformSections: Record<SectionKey, PlatformSection> = {
    origination: {
      title: 'Loan Origination & Application Management',
      icon: '📋',
      features: [
        {
          title: 'Multi-channel Application Intake',
          description: 'Web forms, API integrations, partner portals with smart routing'
        },
        {
          title: 'Real-time Application Tracking',
          description: 'Complete visibility into application status and progress'
        },
        {
          title: 'Document Collection & Management',
          description: 'Automated document requests with OCR processing'
        },
        {
          title: 'Comprehensive Borrower Profiles',
          description: 'Individual, business, and trust entity support with KYC/AML compliance'
        },
        {
          title: 'Multiple Loan Products',
          description: 'Personal loans, business loans, auto loans, lines of credit, SBA loans, equipment financing'
        }
      ]
    },
    risk: {
      title: 'Advanced Risk Assessment & Credit Scoring',
      icon: '🛡️',
      features: [
        {
          title: 'AI-Powered Risk Engine',
          description: 'Multi-factor risk analysis with predictive analytics and early warning systems'
        },
        {
          title: 'Custom Scorecard Builder',
          description: 'Rule-based scoring with weighted categories and real-time monitoring'
        },
        {
          title: 'Credit Integration',
          description: 'Equifax credit reports with automated credit pulls and detailed analysis'
        },
        {
          title: 'Alternative Data Sources',
          description: 'Bank statements, cash flow analysis, and social data integration'
        },
        {
          title: 'Automated Compliance Checks',
          description: 'FCRA, ECOA, state lending regulations with complete audit trails'
        }
      ]
    },
    servicing: {
      title: 'Loan Servicing & Portfolio Management',
      icon: '💰',
      features: [
        {
          title: 'Multiple Payment Methods',
          description: 'ACH, credit cards, checks, wire transfers with automated scheduling'
        },
        {
          title: 'Real-time Portfolio Analytics',
          description: 'Performance metrics, KPIs, and delinquency management'
        },
        {
          title: 'Collections Integration',
          description: 'Automated collection processes and communications'
        },
        {
          title: 'Specialized Product Servicing',
          description: 'Merchant cash advances, lines of credit, equipment financing, SBA loans'
        },
        {
          title: 'Loan Modifications',
          description: 'Streamlined modification and workout processes'
        }
      ]
    },
    ai: {
      title: 'AI-Powered Automation & Intelligence',
      icon: '🤖',
      features: [
        {
          title: 'Intelligent Document Processing',
          description: 'OCR, data extraction, document classification with automated validation'
        },
        {
          title: 'Conversational AI Agents',
          description: 'Module-specific assistants with natural language processing'
        },
        {
          title: 'Predictive Analytics',
          description: 'Default prediction, market analysis, portfolio optimization'
        },
        {
          title: 'Decision Support',
          description: 'AI-powered recommendations and intelligent workflow automation'
        },
        {
          title: 'Performance Forecasting',
          description: 'Predictive modeling for business planning and optimization'
        }
      ]
    },
    portals: {
      title: 'Client Portals & Digital Experience',
      icon: '🌐',
      features: [
        {
          title: 'Customizable Portal Design',
          description: 'White-label portals with custom branding and domains'
        },
        {
          title: 'Borrower Self-Service',
          description: 'Account management, payment processing, document access'
        },
        {
          title: 'Multi-tenant Architecture',
          description: 'Create and manage multiple client portals with granular control'
        },
        {
          title: 'Mobile-Responsive Design',
          description: 'Cross-platform compatibility with progressive web app features'
        },
        {
          title: 'Authentication Options',
          description: 'SSO, multi-factor authentication, and secure messaging'
        }
      ]
    },
    analytics: {
      title: 'Analytics & Reporting',
      icon: '📊',
      features: [
        {
          title: 'Business Intelligence Dashboard',
          description: 'Real-time metrics with custom dashboards and interactive charts'
        },
        {
          title: 'Comprehensive Reporting',
          description: 'Financial reports, regulatory reports, portfolio analytics'
        },
        {
          title: 'Data Export & Integration',
          description: 'RESTful APIs, multiple export formats, third-party integrations'
        },
        {
          title: 'Custom Reports',
          description: 'Flexible report builder with scheduling and automated alerts'
        },
        {
          title: 'Data Warehousing',
          description: 'Historical data storage and analysis capabilities'
        }
      ]
    }
  };

  const keyDifferentiators = [
    {
      title: 'AI-First Architecture',
      description: 'Built from the ground up with AI and automation at its core',
      icon: '🧠'
    },
    {
      title: 'Complete Loan Lifecycle',
      description: 'End-to-end solution from application to payoff',
      icon: '🔄'
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance for all major lending regulations',
      icon: '⚖️'
    },
    {
      title: 'Scalable Architecture',
      description: 'Cloud-native design supporting growth from startup to enterprise',
      icon: '📈'
    },
    {
      title: 'Open API Platform',
      description: 'Extensive integration capabilities with existing systems',
      icon: '🔗'
    },
    {
      title: 'White-label Ready',
      description: 'Fully customizable for partner and client branding',
      icon: '🎨'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">AI-Powered Lending Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              <span className="block">Complete AI Loan</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Management Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Streamline the entire loan lifecycle from origination to servicing with advanced AI, automated workflows, and comprehensive risk management.
              <span className="block mt-2 text-white/80">Transform your lending operations today.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Request Demo
              </Link>
              <Link 
                href="#capabilities" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Explore Platform
              </Link>
            </div>
            
            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/20">
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">8+</div>
                <p className="text-white/80 text-sm">Core Modules</p>
            </div>
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
                <p className="text-white/80 text-sm">Integrations</p>
            </div>
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Uptime SLA</p>
            </div>
            <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">60%</div>
                <p className="text-white/80 text-sm">Faster Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Comprehensive Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Platform Overview
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive, AI-powered lending platform that streamlines the entire loan lifecycle with advanced risk management, client portals, and automated workflows
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-2xl">
                    🏦
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Core Platform Overview</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-700">Enterprise Ready</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A comprehensive, AI-powered lending platform that streamlines the entire loan lifecycle from origination to servicing, with advanced risk management, client portals, and automated workflows. Built for financial institutions of all sizes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">Multi-channel Intake</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">AI-Powered Automation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#9BD7FB]/5 to-[#1E51DB]/5 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">Real-time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="capabilities" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-[#9BD7FB]/5 to-[#65A8F3]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Platform Capabilities
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive modules covering every aspect of modern lending operations
            </p>
          </div>
          
          {/* Section Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(platformSections).map(([key, section]) => (
                <button
                key={key}
                onClick={() => setActiveSection(key as SectionKey)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === key
                    ? 'bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100 border border-gray-200/50'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                <span className="hidden sm:inline">{section.title.split(' ')[0]} {section.title.split(' ')[1]}</span>
                <span className="sm:hidden">{section.icon}</span>
                </button>
              ))}
          </div>
          
          {/* Active Section Content */}
          <div className="max-w-6xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg text-2xl">
                    {platformSections[activeSection].icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{platformSections[activeSection].title}</h3>
                    <p className="text-gray-600 text-lg">Comprehensive tools and features for modern lending operations</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {platformSections[activeSection].features.map((feature, index) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl border border-gray-200/30 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-r from-[#1E51DB]/3 to-[#65A8F3]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Why Choose Lendro.AI</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Key Differentiators
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What sets our platform apart in the competitive lending technology landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyDifferentiators.map((differentiator, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg text-2xl">
                    {differentiator.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{differentiator.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{differentiator.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Ready to Transform</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-none">
              <span className="block mb-1">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-1">
                Your Lending Operations?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join leading financial institutions who have already transformed their lending operations with Lendro.AI.
              <span className="block mt-2 text-white/80 font-medium">Experience the future of lending technology.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Schedule Demo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                href="/solutions" 
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">View Solutions</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">5-Minute Setup</h4>
                <p className="text-white/80 text-sm">Quick implementation and onboarding</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-white/80 text-sm">Bank-grade security and compliance</p>
            </div>
            
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                <p className="text-white/80 text-sm">24/7 dedicated customer success</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 