"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

type SectionKey = 'origination' | 'risk' | 'servicing' | 'ai' | 'portals' | 'analytics' | 'documents';

interface Feature {
  title: string;
  description: string;
}

interface PlatformSection {
  title: string;
  icon: React.ReactNode;
  features: Feature[];
}

export default function PlatformPage() {
  const [activeSection, setActiveSection] = useState<SectionKey>('origination');

  const platformSections: Record<SectionKey, PlatformSection> = {
    origination: {
      title: 'Loan Origination & Application Management',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      features: [
        {
          title: 'Multi-channel Application Intake',
          description: 'Web forms, API integrations, and partner portals with smart routing capabilities'
        },
        {
          title: 'Real-time Application Tracking',
          description: 'Complete visibility into application status and progress with automated updates'
        },
        {
          title: 'Document Collection & Management',
          description: 'Automated document requests with OCR processing and intelligent validation'
        },
        {
          title: 'Comprehensive Borrower Profiles',
          description: 'Individual, business, and trust entity support with KYC/AML compliance'
        },
        {
          title: 'Multiple Loan Products',
          description: 'Support for all major loan types including CRE, C&I, and specialty products'
        }
      ]
    },
    risk: {
      title: 'Advanced Risk Assessment & Credit Scoring',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: [
        {
          title: 'AI-Powered Risk Engine',
          description: 'Multi-factor risk analysis with predictive analytics and early warning systems'
        },
        {
          title: 'Custom Scorecard Builder',
          description: 'Rule-based scoring with weighted categories and real-time monitoring capabilities'
        },
        {
          title: 'Credit Integration',
          description: 'Equifax credit reports with automated pulls and detailed analysis'
        },
        {
          title: 'Alternative Data Sources',
          description: 'Bank statements, cash flow analysis, and social data integration'
        },
        {
          title: 'Automated Compliance Checks',
          description: 'FCRA, ECOA, and state lending regulations with complete audit trails'
        }
      ]
    },
    servicing: {
      title: 'Loan Servicing & Portfolio Management',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        {
          title: 'Multiple Payment Methods',
          description: 'ACH, credit cards, checks, and wire transfers with automated scheduling'
        },
        {
          title: 'Real-time Portfolio Analytics',
          description: 'Performance metrics, KPIs, and comprehensive delinquency management tools'
        },
        {
          title: 'Collections Integration',
          description: 'Automated collection processes with intelligent communication workflows'
        },
        {
          title: 'Specialized Product Servicing',
          description: 'Advanced servicing for merchant cash advances, equipment financing, and specialty products'
        },
        {
          title: 'Loan Modifications',
          description: 'Streamlined modification and workout processes with automated documentation'
        }
      ]
    },
    ai: {
      title: 'AI-Powered Automation & Intelligence',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        {
          title: 'Intelligent Document Processing',
          description: 'OCR, data extraction, and document classification with automated validation'
        },
        {
          title: 'Conversational AI Agents',
          description: 'Module-specific assistants with advanced natural language processing capabilities'
        },
        {
          title: 'Predictive Analytics',
          description: 'Default prediction, market analysis, and intelligent portfolio optimization'
        },
        {
          title: 'Decision Support',
          description: 'AI-powered recommendations with intelligent workflow automation features'
        },
        {
          title: 'Performance Forecasting',
          description: 'Predictive modeling for strategic business planning and optimization'
        }
      ]
    },
    portals: {
      title: 'Client Portals & Digital Experience',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 9l3-3m-3 3l3 3m-3-3l-3-3m3 3l-3 3" />
        </svg>
      ),
      features: [
        {
          title: 'Customizable Portal Design',
          description: 'White-label portals with custom branding and personalized domain configuration'
        },
        {
          title: 'Borrower Self-Service',
          description: 'Account management, payment processing, and secure document access'
        },
        {
          title: 'Multi-tenant Architecture',
          description: 'Create and manage multiple client portals with granular control'
        },
        {
          title: 'Mobile-Responsive Design',
          description: 'Cross-platform compatibility with progressive web app features and optimization'
        },
        {
          title: 'Authentication Options',
          description: 'SSO, multi-factor authentication, and secure messaging capabilities'
        }
      ]
    },
    analytics: {
      title: 'Analytics & Reporting',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: [
        {
          title: 'Business Intelligence Dashboard',
          description: 'Real-time metrics with custom dashboards and interactive visualization tools'
        },
        {
          title: 'Comprehensive Reporting',
          description: 'Financial reports, regulatory compliance, and detailed portfolio analytics'
        },
        {
          title: 'Data Export & Integration',
          description: 'RESTful APIs, multiple export formats, and third-party system integrations'
        },
        {
          title: 'Custom Reports',
          description: 'Flexible report builder with automated scheduling and intelligent alerts'
        },
        {
          title: 'Data Warehousing',
          description: 'Historical data storage with advanced analysis and reporting capabilities'
        }
      ]
    },
    documents: {
      title: 'Digital Document Signing & Management',
      icon: (
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      features: [
        {
          title: 'Self-Hosted Document Signing',
          description: 'Fully white-labeled digital signature solution with complete branding control'
        },
        {
          title: 'Advanced E-Signature Workflows',
          description: 'Multi-party signing, conditional logic, and intelligent automated routing'
        },
        {
          title: 'Template Management',
          description: 'Customizable document templates with smart field mapping and automation'
        },
        {
          title: 'Audit Trail & Compliance',
          description: 'Complete signing history with legal compliance and tamper-proof documentation'
        },
        {
          title: 'API Integration',
          description: 'Seamless integration with lending workflows and third-party system connections'
        }
      ]
    }
  };

  const keyDifferentiators = [
    {
      title: 'AI-First Architecture',
      description: 'Built from the ground up with AI and automation at its core',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Complete Loan Lifecycle',
      description: 'End-to-end solution from application to payoff',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance for all major lending regulations',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l3-3m-3 3l-3-3" />
        </svg>
      )
    },
    {
      title: 'Scalable Architecture',
      description: 'Cloud-native design supporting growth from startup to enterprise',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Open API Platform',
      description: 'Extensive integration capabilities with existing systems',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: 'White-label Ready',
      description: 'Fully customizable for partner and client branding',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
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
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">9+</div>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
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
                    <div className="w-2 h-2 bg-[#1E51DB] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm">Multi-channel Intake</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#65A8F3] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm">AI-Powered Automation</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-[#9BD7FB]/5 to-[#1E51DB]/5 rounded-lg">
                    <div className="w-2 h-2 bg-[#9BD7FB] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 font-medium text-sm">Real-time Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Capabilities */}
      <section id="capabilities" className="py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#1E51DB]/3 to-[#65A8F3]/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#65A8F3]/3 to-[#9BD7FB]/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full border border-gray-200 mb-6">
              <div className="w-2 h-2 bg-[#1E51DB] rounded-full mr-2"></div>
              <span className="text-sm font-medium text-gray-700">Platform Overview</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Platform Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive modules covering every aspect of modern lending operations
            </p>
          </div>
          
          {/* Compact Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {Object.entries(platformSections).map(([key, section]) => {
              // Create better tab labels
              const getTabLabel = (title: string, key: string) => {
                const tabLabels: Record<string, string> = {
                  'origination': 'Loan Origination',
                  'risk': 'Risk Assessment',
                  'servicing': 'Loan Servicing',
                  'ai': 'AI Automation',
                  'portals': 'Client Portals',
                  'analytics': 'Analytics & Reports',
                  'documents': 'Document Signing'
                };
                return tabLabels[key] || title.split(' ').slice(0, 2).join(' ');
              };

              return (
                <button
                  key={key}
                  onClick={() => setActiveSection(key as SectionKey)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 min-h-[40px] ${
                    activeSection === key
                      ? 'bg-[#1E51DB] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="w-4 h-4 flex-shrink-0">
                    {section.icon}
                  </div>
                  <span className="hidden sm:inline text-xs leading-tight text-center whitespace-nowrap">
                    {getTabLabel(section.title, key)}
                  </span>
                </button>
              );
            })}
          </div>
          
          {/* Compact Content Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-xl flex items-center justify-center shadow-md">
                  <div className="w-5 h-5">
                    {platformSections[activeSection].icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {platformSections[activeSection].title}
                  </h3>
                  <p className="text-gray-600">Advanced enterprise solutions for lending operations</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {platformSections[activeSection].features.map((feature, index) => (
                  <div key={index} className="group">
                    <div className="p-5 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document Signing Highlight Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-[#1E51DB]/3 to-[#65A8F3]/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-[#65A8F3]/3 to-[#9BD7FB]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">Featured Solution</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Self-Hosted Document Signing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Complete control over your document workflows with our white-labeled, self-hosted signing solution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">Your Brand, Your Infrastructure</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm font-medium text-blue-700">Self-Hosted</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Built on proven Documenso technology, our self-hosted document signing solution gives you complete control over your document workflows while maintaining your brand identity.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-xl">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-900 text-sm">Enterprise Control</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs ml-5">Complete ownership and customization</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-xl">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-900 text-sm">Bank-Grade Security</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs ml-5">End-to-end encryption & compliance</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-xl">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-900 text-sm">Lightning Fast</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs ml-5">Reduce signing time by 90%</p>
                    </div>
                    
                    <div className="p-4 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-xl">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-gray-900 text-sm">API Integration</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-xs ml-5">Seamless workflow integration</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <h4 className="text-xl font-bold text-gray-900 mb-6">Key Use Cases</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-900 mb-1">Loan Documentation</h5>
                      <p className="text-gray-600 text-sm">Streamline loan agreement signing with automated workflows</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50/50 to-emerald-50/50 rounded-xl">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-900 mb-1">Compliance Documents</h5>
                      <p className="text-gray-600 text-sm">Ensure regulatory compliance with automated disclosures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50/50 to-violet-50/50 rounded-xl">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-gray-900 mb-1">Client Onboarding</h5>
                      <p className="text-gray-600 text-sm">Accelerate customer onboarding with digital forms</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  href="/solutions/document-signing"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span>Explore Document Signing</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
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
              <div className="w-2 h-2 bg-[#1E51DB] rounded-full mr-3"></div>
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
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
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
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
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