"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';

export default function IntegrationsPage() {
  // Categories of integrations
  const categories = [
    { id: 'core-banking' as const, name: 'Core Banking' },
    { id: 'credit-bureaus' as const, name: 'Credit Bureaus' },
    { id: 'payment-processors' as const, name: 'Payment Processors' },
    { id: 'document-management' as const, name: 'Document Management' },
    { id: 'communication' as const, name: 'Communication' },
    { id: 'accounting' as const, name: 'Accounting & ERP' },
    { id: 'compliance' as const, name: 'Compliance & Reporting' },
    { id: 'data-analytics' as const, name: 'Data & Analytics' },
    { id: 'security' as const, name: 'Security & Identity' }
  ] as const;

  type CategoryId = typeof categories[number]['id'];

  // All integrations organized by category
  const integrations: Record<CategoryId, Array<{ name: string; description: string; logo?: string; featured?: boolean }>> = {
    'core-banking': [
      { name: 'FIS', description: 'Complete core banking platform integration with real-time data sync', featured: true },
      { name: 'Jack Henry', description: 'Seamless integration with Symitar and SilverLake core systems' },
      { name: 'Temenos', description: 'T24 and Infinity platform connectivity for global banking operations' },
      { name: 'Finastra', description: 'Fusion and Essence platform integration for comprehensive banking' }
    ],
    'credit-bureaus': [
      { name: 'Experian', description: 'Real-time credit reports and monitoring with AI-enhanced decisioning', featured: true },
      { name: 'Equifax', description: 'Comprehensive credit data and identity verification services' },
      { name: 'TransUnion', description: 'Advanced analytics and fraud detection capabilities' },
      { name: 'FICO', description: 'Industry-leading credit scoring and risk assessment tools' }
    ],
    'payment-processors': [
      { name: 'Stripe', description: 'Modern payment processing with automated reconciliation', featured: true },
      { name: 'PayPal', description: 'Global payment solutions with instant settlement options' },
      { name: 'Square', description: 'Integrated payment and point-of-sale solutions' },
      { name: 'Adyen', description: 'Enterprise payment platform with global reach' }
    ],
    'document-management': [
      { name: 'DocuSign', description: 'Digital signature and document workflow automation', featured: true },
      { name: 'Adobe Sign', description: 'Enterprise-grade e-signature and document management' },
      { name: 'Box', description: 'Secure cloud storage with advanced collaboration features' },
      { name: 'SharePoint', description: 'Microsoft document management and collaboration platform' }
    ],
    'communication': [
      { name: 'Twilio', description: 'Programmable SMS, voice, and video communication platform', featured: true },
      { name: 'SendGrid', description: 'Email delivery and marketing automation platform' },
      { name: 'Slack', description: 'Team collaboration and workflow automation' },
      { name: 'Microsoft Teams', description: 'Enterprise communication and collaboration suite' }
    ],
    'accounting': [
      { name: 'QuickBooks', description: 'Automated accounting and financial reporting integration', featured: true },
      { name: 'SAP', description: 'Enterprise resource planning and financial management' },
      { name: 'Oracle NetSuite', description: 'Cloud-based ERP and financial management platform' },
      { name: 'Xero', description: 'Modern accounting software with real-time financial insights' }
    ],
    'compliance': [
      { name: 'Thomson Reuters', description: 'Regulatory compliance and risk management solutions', featured: true },
      { name: 'LexisNexis', description: 'Identity verification and fraud prevention platform' },
      { name: 'Compliance.ai', description: 'AI-powered regulatory compliance monitoring' },
      { name: 'NICE Actimize', description: 'Financial crime and compliance management' }
    ],
    'data-analytics': [
      { name: 'Tableau', description: 'Advanced data visualization and business intelligence', featured: true },
      { name: 'Power BI', description: 'Microsoft business analytics and reporting platform' },
      { name: 'Snowflake', description: 'Cloud data platform for analytics and machine learning' },
      { name: 'Databricks', description: 'Unified analytics platform for big data and machine learning' }
    ],
    'security': [
      { name: 'Okta', description: 'Identity and access management with single sign-on', featured: true },
      { name: 'Auth0', description: 'Universal identity platform for secure authentication' },
      { name: 'CyberArk', description: 'Privileged access management and security solutions' },
      { name: 'Ping Identity', description: 'Enterprise identity and access management platform' }
    ]
  };

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
              <span className="text-sm font-medium text-white">40+ Enterprise Integrations</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              <span className="block">Seamless</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                AI Integration Hub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Connect your entire lending ecosystem with our intelligent integration platform. 
              <span className="block mt-2 text-white/80">One API to rule them all.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/platform/admin/integrations-hub" 
                className="px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                Explore Integrations
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Request Integration
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
                <p className="text-white/80 text-sm">Integrations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">9</div>
                <p className="text-white/80 text-sm">Categories</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">5min</div>
                <p className="text-white/80 text-sm">Setup Time</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Most Popular</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Featured Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with industry-leading platforms that power modern lending operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(integrations).map(([categoryId, categoryIntegrations]) => {
              const featuredIntegration = categoryIntegrations.find(integration => integration.featured);
              if (!featuredIntegration) return null;
              
              const category = categories.find(cat => cat.id === categoryId);
              
              return (
                <div key={categoryId} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform">
                        {featuredIntegration.name.substring(0, 2)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{featuredIntegration.name}</h3>
                        <p className="text-[#65A8F3] text-sm font-medium">{category?.name}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredIntegration.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Ready to Deploy</span>
                      </div>
                      <Link 
                        href={`/platform/admin/integrations-hub?category=${categoryId}`}
                        className="text-[#1E51DB] font-semibold hover:text-[#65A8F3] transition-colors flex items-center gap-2"
                      >
                        <span>Configure</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-[#9BD7FB]/5 to-[#65A8F3]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                All Integrations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse our comprehensive library of integrations across all categories
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="px-6 py-3 bg-gradient-to-r from-[#1E51DB]/10 to-[#65A8F3]/10 hover:from-[#1E51DB]/20 hover:to-[#65A8F3]/20 text-[#1E51DB] font-semibold rounded-xl transition-all duration-200 border border-[#65A8F3]/20 hover:border-[#65A8F3]/40"
              >
                {category.name}
              </a>
            ))}
          </div>

          {/* Integration Listings */}
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-20 scroll-mt-24">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-xl flex items-center justify-center text-white font-bold mr-4">
                  {category.name.substring(0, 1)}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{category.name}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {integrations[category.id].map((integration) => (
                  <div key={integration.name} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-xl"></div>
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-xl flex items-center justify-center text-white font-bold text-sm mb-4 group-hover:scale-110 transition-transform">
                        {integration.name.substring(0, 2)}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{integration.name}</h4>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">{integration.description}</p>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-green-600 text-xs font-medium">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>Available</span>
                        </div>
                        <Link 
                          href={`/platform/admin/integrations-hub?category=${category.id}&integration=${integration.name}`}
                          className="text-[#1E51DB] font-semibold text-sm hover:text-[#65A8F3] transition-colors"
                        >
                          Setup →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integration Process */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-r from-[#1E51DB]/3 to-[#65A8F3]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deploy enterprise integrations in minutes with our intelligent setup process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Select & Configure</h3>
                <p className="text-gray-600 leading-relaxed">Choose from our library of pre-built integrations and configure with our intelligent setup wizard.</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Authentication</h3>
                <p className="text-gray-600 leading-relaxed">Connect securely with OAuth 2.0, API keys, or enterprise SSO with bank-grade encryption.</p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#9BD7FB]/10 to-[#1E51DB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deploy & Monitor</h3>
                <p className="text-gray-600 leading-relaxed">Go live instantly with real-time monitoring, automated failover, and 24/7 support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/3 via-[#65A8F3]/3 to-[#9BD7FB]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full border border-[#65A8F3]/20 mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-[#1E51DB]">Enterprise-Grade</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                  Built for Scale
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our integration platform is designed for enterprise lending operations with the security, reliability, and performance you need.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Bank-Grade Security</h4>
                    <p className="text-gray-600">SOC 2 Type II compliance, end-to-end encryption, and zero-trust architecture.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Processing</h4>
                    <p className="text-gray-600">Sub-second response times with intelligent caching and load balancing.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">99.9% Uptime SLA</h4>
                    <p className="text-gray-600">Enterprise-grade reliability with automated failover and disaster recovery.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-3xl p-8 border border-[#65A8F3]/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="text-3xl font-bold text-[#1E51DB] mb-2">10M+</div>
                  <p className="text-gray-600 text-sm">API Calls/Day</p>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="text-3xl font-bold text-[#65A8F3] mb-2">50ms</div>
                  <p className="text-gray-600 text-sm">Avg Response</p>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="text-3xl font-bold text-[#9BD7FB] mb-2">99.9%</div>
                  <p className="text-gray-600 text-sm">Uptime SLA</p>
                </div>
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="text-3xl font-bold text-[#1E51DB] mb-2">24/7</div>
                  <p className="text-gray-600 text-sm">Support</p>
                </div>
              </div>
            </div>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-none">
              <span className="block mb-1">Ready to Connect</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-1">
                Your Tech Stack?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your lending operations with seamless integrations that work out of the box. 
              <span className="block mt-2 text-white/80 font-medium">Start connecting in minutes, not months.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/platform/admin/integrations-hub" 
                className="group px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Start Integrating</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Talk to Expert</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </Link>
            </div>
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
              <p className="text-white/80 text-sm">Deploy integrations faster than making coffee</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-white/80 text-sm">Bank-grade security with SOC 2 compliance</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
              <p className="text-white/80 text-sm">24/7 support from integration specialists</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 