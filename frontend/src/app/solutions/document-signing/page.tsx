"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ContactFormModal from '@/components/ui/ContactFormModal';
import CalendlyModal from '@/components/ui/CalendlyModal';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const breadcrumbItems = [
  { name: "Home", url: "https://lendro.ai" },
  { name: "Solutions", url: "https://lendro.ai/solutions" },
  { name: "Document Signing", url: "https://lendro.ai/solutions/document-signing" }
];

export default function DocumentSigningPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScheduleDemoModalOpen, setIsScheduleDemoModalOpen] = useState(false);

  const coreFeatures = [
    {
      title: "Self-Hosted & White-Labeled",
      description: "Complete control with your own branding, domain, and infrastructure. No third-party dependencies.",
      icon: "🏠",
      highlight: "Enterprise Control"
    },
    {
      title: "Advanced E-Signature Workflows",
      description: "Multi-party signing sequences, conditional routing, and automated notifications.",
      icon: "🔄",
      highlight: "Smart Automation"
    },
    {
      title: "Template Management System",
      description: "Create, customize, and manage document templates with intelligent field mapping.",
      icon: "📋",
      highlight: "Efficiency Boost"
    },
    {
      title: "Legal Compliance & Audit Trails",
      description: "ESIGN Act compliant with tamper-proof documents and comprehensive audit logs.",
      icon: "⚖️",
      highlight: "Regulatory Ready"
    },
    {
      title: "API-First Integration",
      description: "Seamlessly integrate with your existing lending platform and third-party systems.",
      icon: "🔗",
      highlight: "Seamless Integration"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade encryption, SSO support, and advanced access controls.",
      icon: "🔒",
      highlight: "Maximum Security"
    }
  ];

  const useCases = [
    {
      title: "Loan Documentation",
      description: "Streamline loan agreement signing with automated workflows and real-time status tracking.",
      icon: "💰",
      benefits: ["Faster loan closings", "Reduced errors", "Better compliance"]
    },
    {
      title: "Compliance Documents",
      description: "Ensure regulatory compliance with automated disclosures and acknowledgment workflows.",
      icon: "📜",
      benefits: ["Regulatory compliance", "Audit trails", "Risk reduction"]
    },
    {
      title: "Client Onboarding",
      description: "Accelerate customer onboarding with digital forms and signature collection.",
      icon: "👥",
      benefits: ["Faster onboarding", "Better experience", "Higher conversion"]
    },
    {
      title: "Internal Approvals",
      description: "Digitize internal approval processes and document workflows for efficiency.",
      icon: "✅",
      benefits: ["Process efficiency", "Clear accountability", "Faster decisions"]
    }
  ];

  const technicalSpecs = [
    {
      category: "Deployment Options",
      features: [
        "Self-hosted on your infrastructure",
        "Cloud deployment with private instances",
        "Hybrid deployment configurations",
        "Docker containerization support"
      ]
    },
    {
      category: "Integration Capabilities",
      features: [
        "RESTful API with comprehensive documentation",
        "Webhook notifications for real-time updates",
        "Single Sign-On (SSO) integration",
        "LDAP/Active Directory support"
      ]
    },
    {
      category: "Security & Compliance",
      features: [
        "End-to-end encryption (AES-256)",
        "ESIGN Act and eIDAS compliance",
        "SOC 2 Type II compliant infrastructure",
        "GDPR and CCPA privacy compliance"
      ]
    },
    {
      category: "Customization",
      features: [
        "Complete white-label branding",
        "Custom domain configuration",
        "Branded email templates",
        "Customizable user interface themes"
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Professional",
      price: "Contact for Pricing",
      description: "Perfect for growing lending operations",
      features: [
        "Up to 1,000 documents/month",
        "5 user accounts",
        "Basic templates",
        "Email support",
        "Standard integrations"
      ],
      highlight: false
    },
    {
      name: "Enterprise",
      price: "Contact for Pricing",
      description: "Advanced features for large-scale operations",
      features: [
        "Unlimited documents",
        "Unlimited users",
        "Advanced workflows",
        "Priority support",
        "Custom integrations",
        "Dedicated success manager"
      ],
      highlight: true
    },
    {
      name: "White-Label",
      price: "Contact for Pricing",
      description: "Complete solution for service providers",
      features: [
        "Multi-tenant architecture",
        "Partner portal access",
        "Revenue sharing options",
        "Co-branded solutions",
        "API white-labeling",
        "Implementation support"
      ],
      highlight: false
    }
  ];

  return (
    <Layout>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Modals */}
      <CalendlyModal 
        isOpen={isScheduleDemoModalOpen} 
        onClose={() => setIsScheduleDemoModalOpen(false)}
      />
      
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
        heading="Get Document Signing Solution"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-white/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
                <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-white">Self-Hosted Document Signing</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="block">Your Brand,</span>
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                  Your Infrastructure
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Complete control over your document signing experience with our self-hosted, white-labeled solution. 
                <span className="block mt-2 text-white/80">Built on proven Documenso technology.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <button 
                  onClick={() => setIsScheduleDemoModalOpen(true)}
                  className="px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
                >
                  Schedule Demo
                </button>
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
                >
                  Get Pricing
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-white/20 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Self-Hosted Control</h4>
                      <p className="text-white/80 text-sm">Complete ownership and customization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/20 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Enterprise Security</h4>
                      <p className="text-white/80 text-sm">Bank-grade encryption and compliance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-white/20 rounded-2xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Lightning Fast</h4>
                      <p className="text-white/80 text-sm">Reduce signing time by 90%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Core Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Enterprise Document Signing
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Powerful features designed for modern lending operations that demand control, security, and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-lg">
                      {feature.icon}
                    </div>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-700">{feature.highlight}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1E51DB] transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Perfect for Every Use Case
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From loan documentation to compliance workflows, our solution adapts to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    {useCase.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1E51DB] transition-colors">{useCase.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 mb-3">Key Benefits:</div>
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Technical Specifications
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade architecture with the flexibility and security your business demands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {spec.category}
                </h3>
                
                <div className="space-y-4">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50/50 to-white/50 rounded-xl">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Flexible Pricing Options
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs, from growing operations to enterprise-scale deployments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`rounded-3xl p-8 shadow-xl border transition-all duration-300 hover:shadow-2xl ${
                tier.highlight 
                  ? 'bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white border-transparent transform scale-105' 
                  : 'bg-white border-gray-200/50 hover:border-[#1E51DB]/30'
              }`}>
                {tier.highlight && (
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <span className="text-sm font-medium text-white">Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-gray-900'}`}>
                    {tier.name}
                  </h3>
                  <div className={`text-3xl font-bold mb-2 ${tier.highlight ? 'text-white' : 'text-[#1E51DB]'}`}>
                    {tier.price}
                  </div>
                  <p className={`${tier.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.highlight 
                          ? 'bg-white/20 text-white' 
                          : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                      }`}>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`${tier.highlight ? 'text-white/90' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    tier.highlight
                      ? 'bg-white text-[#1E51DB] hover:bg-white/90 shadow-lg'
                      : 'bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white hover:shadow-xl'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
              <span className="block mb-2">Transform Your</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Document Workflows
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              Join leading financial institutions who have revolutionized their document signing processes.
              <span className="block mt-2 text-white/80 font-medium">Experience complete control with enterprise-grade security.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => setIsScheduleDemoModalOpen(true)}
                className="group px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Schedule Demo</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Get Custom Quote</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Rapid Deployment</h4>
                <p className="text-white/80 text-sm">Get up and running in days, not months</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
                <p className="text-white/80 text-sm">Bank-grade security with full compliance</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Expert Support</h4>
                <p className="text-white/80 text-sm">Dedicated implementation and success team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 