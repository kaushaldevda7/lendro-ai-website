"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import FAQSchema from '@/components/seo/FAQSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { Metadata } from 'next';

const faqs = [
  {
    question: "What is Agentic AI in lending?",
    answer: "Agentic AI refers to autonomous artificial intelligence agents that can think, learn, and act independently to transform lending operations. These agents handle tasks like loan origination, risk assessment, servicing, and collections without constant human intervention, making decisions based on real-time data and machine learning models."
  },
  {
    question: "How does Lendro.AI improve loan processing times?",
    answer: "Lendro.AI reduces loan processing times by up to 85% through automated document processing, real-time risk assessment, parallel workflow execution, and intelligent decision routing. Our AI agents work 24/7 to process applications, verify information, and make lending decisions in minutes rather than days."
  },
  {
    question: "Is Lendro.AI secure and compliant with banking regulations?",
    answer: "Yes, Lendro.AI is built with bank-grade security including SOC 2 Type II compliance, 256-bit encryption, multi-factor authentication, and comprehensive audit trails. We comply with all major lending regulations including FCRA, ECOA, and state lending laws."
  },
  {
    question: "What types of loans can Lendro.AI handle?",
    answer: "Lendro.AI supports multiple loan products including personal loans, business loans, auto loans, lines of credit, SBA loans, equipment financing, and merchant cash advances. Our platform is configurable for any lending product with customizable workflows and risk parameters."
  },
  {
    question: "How long does it take to implement Lendro.AI?",
    answer: "Implementation typically takes 4-8 weeks depending on your current systems and requirements. Our proven deployment process includes data migration, system integration, staff training, and gradual rollout to ensure smooth transition with minimal disruption to operations."
  },
  {
    question: "What ROI can I expect from Lendro.AI?",
    answer: "Most clients see 200-400% ROI within the first year through reduced processing costs, lower default rates, increased loan volume capacity, and improved operational efficiency. Our ROI calculator can provide personalized projections based on your current operations."
  },
  {
    question: "Does Lendro.AI integrate with existing lending systems?",
    answer: "Yes, Lendro.AI offers 40+ pre-built integrations with major core banking systems, credit bureaus, payment processors, and document management platforms. Our open API architecture ensures seamless integration with your existing technology stack."
  },
  {
    question: "How does AI risk assessment compare to traditional methods?",
    answer: "AI risk assessment analyzes thousands of data points in real-time, including alternative data sources, to provide more accurate risk predictions than traditional credit scoring. This results in 35% lower default rates while approving more qualified borrowers."
  },
  {
    question: "What support is provided during and after implementation?",
    answer: "We provide comprehensive support including dedicated implementation specialists, 24/7 technical support, ongoing training, regular system optimization, and a customer success manager to ensure you maximize value from the platform."
  },
  {
    question: "Can Lendro.AI scale with my business growth?",
    answer: "Absolutely. Lendro.AI is built on cloud-native architecture that automatically scales to handle increased loan volumes. Our clients typically see 300% increase in processing capacity without adding staff, supporting growth from startup to enterprise scale."
  }
];

const breadcrumbItems = [
  { name: "Home", url: "https://lendro.ai" },
  { name: "FAQ", url: "https://lendro.ai/faq" }
];

export default function FAQPage() {
  return (
    <Layout>
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block">Everything You Need</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                to Know About Lendro.AI
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get answers to the most common questions about our agentic AI lending platform
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50/50 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team of lending and AI experts is here to help you understand how Lendro.AI can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Our Experts
                </a>
                <a
                  href="/solutions"
                  className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-xl hover:border-[#1E51DB] hover:text-[#1E51DB] transition-all duration-300"
                >
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 