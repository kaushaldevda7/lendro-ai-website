"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityPage() {
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
              <span className="text-sm font-medium text-white">Bank-Grade Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-8">
              <span className="block">Enterprise</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                Security & Trust
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Protecting your financial data with military-grade security and industry-leading compliance standards.
              <span className="block mt-2 text-white/80">Your trust is our foundation.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="#security-measures" 
                className="px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 shadow-xl"
              >
                View Security Features
              </Link>
              <Link 
                href="mailto:security@lendro.ai" 
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Contact Security Team
              </Link>
            </div>
            
            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Uptime SLA</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">256-bit</div>
                <p className="text-white/80 text-sm">Encryption</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">SOC 2</div>
                <p className="text-white/80 text-sm">Compliant</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <p className="text-white/80 text-sm">Monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Security First</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Our Security Philosophy
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Security isn't an afterthought—it's the foundation of everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Built for Financial Services</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Lendro.AI, security is fundamental to everything we do. We've built our AI lending platform with security at its core, implementing multiple layers of protection to safeguard sensitive financial data and maintain customer trust.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our security team works proactively to protect against emerging threats while ensuring compliance with industry regulations and standards. We regularly review and enhance our security measures to address evolving risks in the financial technology landscape.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Zero-trust security architecture</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Continuous security monitoring</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Regular third-party security audits</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-3xl p-8 border border-[#65A8F3]/20">
              <div className="grid grid-cols-1 gap-6">
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Multi-Layered Protection</h4>
                  <p className="text-gray-600">Defense in depth with multiple security layers protecting your data</p>
                </div>
                
                <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">End-to-End Encryption</h4>
                  <p className="text-gray-600">Military-grade encryption protecting data in transit and at rest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section id="security-measures" className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-[#9BD7FB]/5 to-[#65A8F3]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Security Measures
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection through multiple layers of enterprise-grade security
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Encryption</h3>
                <p className="text-gray-600 leading-relaxed">
                  We implement end-to-end encryption for all data, both in transit and at rest, using industry-standard AES-256 encryption protocols to ensure sensitive information remains secure.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Multi-Factor Authentication</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform requires multi-factor authentication, providing an additional layer of security beyond passwords to verify user identities and prevent unauthorized access.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9BD7FB]/10 to-[#1E51DB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Regular Security Audits</h3>
                <p className="text-gray-600 leading-relaxed">
                  We conduct comprehensive security audits and vulnerability assessments on a regular schedule to identify and address potential weaknesses in our systems.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our development team follows secure coding practices and conducts regular code reviews to identify and remediate potential security vulnerabilities before they reach production.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Logging</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain detailed logs of all system activities and access, enabling us to monitor for suspicious activities and maintain compliance with regulatory requirements.
                </p>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#9BD7FB]/10 to-[#1E51DB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our dedicated security team has established procedures for quickly responding to potential security incidents, minimizing impact and ensuring timely resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-gradient-to-r from-[#1E51DB]/3 to-[#65A8F3]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Industry Standards</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Certifications & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our commitment to meeting industry standards and regulatory requirements
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SOC 2 Type II Certification</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-700">Compliant</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We maintain SOC 2 Type II certification, validating our controls related to security, availability, processing integrity, confidentiality, and privacy. This certification demonstrates our commitment to protecting customer data and maintaining the highest security standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our SOC 2 compliance is audited annually by independent third-party assessors to ensure we continue to meet these rigorous standards and maintain the trust our customers place in us.
                </p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Regulatory Compliance</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full border border-blue-200 mb-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-blue-700">Multi-Jurisdiction</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is designed to comply with relevant regulations including PIPEDA (Personal Information Protection and Electronic Documents Act), GDPR, and other applicable financial regulations across multiple jurisdictions where we operate.
                </p>
              </div>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#9BD7FB]/10 to-[#1E51DB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Security Standards</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full border border-purple-200 mb-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-purple-700">Best Practices</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We adhere to industry best practices and security frameworks including NIST Cybersecurity Framework, ISO 27001 principles, and OWASP guidelines to guide our security program and ensure comprehensive protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/3 via-[#65A8F3]/3 to-[#9BD7FB]/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                Security Best Practices
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Recommendations for maintaining security when using our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1E51DB]/10 to-[#65A8F3]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Account Security</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Use strong, unique passwords</h4>
                      <p className="text-gray-600 text-sm">Create complex passwords and change them regularly for maximum security.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Enable multi-factor authentication</h4>
                      <p className="text-gray-600 text-sm">Add an extra layer of security to your account with MFA.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Be cautious of phishing attempts</h4>
                      <p className="text-gray-600 text-sm">Verify emails claiming to be from Lendro.AI before clicking links.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Keep your devices secure</h4>
                      <p className="text-gray-600 text-sm">Update operating systems and use antivirus software regularly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Platform Usage</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Log out of shared computers</h4>
                      <p className="text-gray-600 text-sm">Always log out when using public or shared devices.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#9BD7FB] to-[#1E51DB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Review your account activity</h4>
                      <p className="text-gray-600 text-sm">Regularly monitor and report any suspicious transactions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Keep contact information updated</h4>
                      <p className="text-gray-600 text-sm">Ensure you receive security alerts and notifications promptly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Protect sensitive information</h4>
                      <p className="text-gray-600 text-sm">Never share your login credentials with others.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Security Concerns */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-orange-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Security Alert</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-none">
              <span className="block mb-1">Report Security</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-1">
                Concerns
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              We take security concerns seriously and encourage responsible disclosure of potential vulnerabilities.
              <span className="block mt-2 text-white/80 font-medium">Help us keep everyone secure.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="mailto:security@lendro.ai" 
                className="group px-8 py-4 bg-white text-[#1E51DB] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">Contact Security Team</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </Link>
              
              <Link 
                href="/contact" 
                className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">General Contact</span>
                  <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </Link>
            </div>
            
            {/* Security Response Promise */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">24-Hour Response</h4>
                <p className="text-white/80 text-sm">We respond to security reports within 24 hours</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Responsible Disclosure</h4>
                <p className="text-white/80 text-sm">We follow responsible disclosure practices</p>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Confidential Process</h4>
                <p className="text-white/80 text-sm">Your reports are handled confidentially</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Links */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/privacy-policy" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 