"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ContactFormModal from '@/components/ui/ContactFormModal';

const breadcrumbItems = [
  { name: "Home", url: "https://lendro.ai" },
  { name: "Contact", url: "https://lendro.ai/contact" }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Lendro.AI",
  "description": "Autonomous AI agents that transform lending operations with unprecedented intelligence",
  "url": "https://lendro.ai",
  "telephone": "+1-855-LENDRO1",
  "email": "hello@lendro.ai",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US",
    "addressRegion": "CA"
  },
  "openingHours": "Mo-Fr 09:00-17:00",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-855-LENDRO1",
      "email": "hello@lendro.ai",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "technical support",
      "email": "support@lendro.ai",
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "contactType": "sales",
      "email": "sales@lendro.ai",
      "availableLanguage": "English"
    }
  ],
  "sameAs": [
    "https://twitter.com/LendroAI",
    "https://linkedin.com/company/lendro-ai"
  ]
};

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');

  const contactMethods = [
    {
      title: "Schedule a Demo",
      description: "See Lendro.AI in action with a personalized demonstration",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      action: "Book Demo",
      color: "from-blue-500 to-indigo-600",
      href: "#demo"
    },
    {
      title: "Sales Inquiry",
      description: "Discuss pricing, features, and implementation options",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      action: "Contact Sales",
      color: "from-green-500 to-emerald-600",
      href: "mailto:sales@lendro.ai"
    },
    {
      title: "Technical Support",
      description: "Get help with implementation and technical questions",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
        </svg>
      ),
      action: "Get Support",
      color: "from-purple-500 to-violet-600",
      href: "mailto:support@lendro.ai"
    },
    {
      title: "Partnership",
      description: "Explore integration and partnership opportunities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      action: "Partner with Us",
      color: "from-orange-500 to-red-600",
      href: "mailto:partnerships@lendro.ai"
    }
  ];

  const handleContactClick = (type: string) => {
    if (type === '#demo') {
      setSelectedContact('Schedule Demo');
      setIsModalOpen(true);
    }
  };

  return (
    <Layout>
      <BreadcrumbSchema items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      
      <ContactFormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        heading={selectedContact}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Your Lending Operations?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with our team of lending and AI experts to discover how Lendro.AI can revolutionize your operations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                How Can We Help?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to connect with our team based on your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{method.description}</p>
                    {method.href.startsWith('#') ? (
                      <button
                        onClick={() => handleContactClick(method.href)}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        <span>{method.action}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    ) : (
                      <a
                        href={method.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${method.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        <span>{method.action}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm mb-3">General inquiries and support</p>
              <a href="mailto:hello@lendro.ai" className="text-[#1E51DB] font-medium hover:text-[#65A8F3] transition-colors">
                hello@lendro.ai
              </a>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm mb-3">Speak with our team directly</p>
              <a href="tel:+1-855-LENDRO1" className="text-[#1E51DB] font-medium hover:text-[#65A8F3] transition-colors">
                +1 (855) LENDRO-1
              </a>
            </div>

            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm mb-3">Pacific Time Zone</p>
              <p className="text-[#1E51DB] font-medium">
                Mon-Fri: 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>

          {/* FAQ Link */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Check out our comprehensive FAQ section for quick answers to common questions about Lendro.AI
              </p>
              <a
                href="/faq"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>View FAQ</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Guarantee */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Commitment to You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">24-Hour Response</h3>
              <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours during business days</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Direct access to our lending and AI experts, not just support staff</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure & Confidential</h3>
              <p className="text-gray-600 text-sm">All communications are encrypted and handled with strict confidentiality</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 