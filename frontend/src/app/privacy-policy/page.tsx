"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <p className="text-white/60 text-sm md:text-base mt-4">
              Last updated: December 17, 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-2xl p-8 mb-12 border border-[#1E51DB]/10">
              <p className="text-lg text-gray-700 leading-relaxed">
                Lendro.AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-powered lending platform and services (collectively, the "Services").
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Please read this Privacy Policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1E51DB]">Personal Information</h3>
            
            <p className="text-gray-700 leading-relaxed">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            
            <ul className="list-none space-y-3 ml-0 mt-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Register for an account or request a demo</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Express interest in our AI lending solutions</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Apply for a loan or financial product through our platform</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Participate in activities on our Services</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Contact us or subscribe to our newsletter</span>
              </li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              The personal information we collect may include:
            </p>
            
            <ul className="list-none space-y-3 ml-0 mt-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Name, email address, phone number, and mailing address</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Date of birth, Social Insurance Number (SIN), and government-issued identification</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Financial information, including income, expenses, assets, and liabilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Employment information and business details</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Credit history and credit scores</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Banking information and transaction data</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Any other information you choose to provide</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1E51DB]">Information Automatically Collected</h3>
            
            <p className="text-gray-700 leading-relaxed">
              When you use our Services, we may automatically collect certain information through our AI systems and analytics tools, including:
            </p>
            
            <ul className="list-none space-y-3 ml-0 mt-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Device information (mobile device ID, model, manufacturer)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">IP address, browser type, operating system</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Location information (when permitted)</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Usage data, pages visited, time spent, and interaction patterns</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Cookies and similar tracking technologies</span>
              </li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">How We Use Your Information</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect to power our AI-driven lending platform and provide you with personalized financial solutions:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 border border-[#1E51DB]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Platform Operations</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Provide and maintain our AI lending platform</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Process loan applications and manage accounts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Assess creditworthiness using AI models</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 border border-[#65A8F3]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">User Experience</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Personalize your experience and content</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Communicate about our services and updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Respond to inquiries and provide support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <ul className="list-none space-y-3 ml-0 mt-6">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Monitor and analyze usage patterns to improve our AI algorithms</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Protect against fraudulent or unauthorized activity</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">Comply with legal and regulatory requirements</span>
              </li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">How We Share Your Information</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We may share your information with trusted partners and service providers to deliver our AI-powered lending solutions:
            </p>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 mt-6 border border-[#1E51DB]/10">
              <h4 className="font-bold text-[#1E51DB] mb-4">Trusted Partners & Service Providers</h4>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">AI and technology service providers that help power our platform</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Credit bureaus and credit reporting agencies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Financial institutions and payment processors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional advisors (lawyers, auditors, insurers)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Regulatory authorities and governmental agencies</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-6">
              We may also share your information in the following circumstances:
            </p>
            
            <ul className="list-none space-y-3 ml-0 mt-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">To comply with applicable laws and regulations</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">To respond to legal process or government requests</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">To protect our rights, privacy, safety, or property</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-[#65A8F3] to-[#9BD7FB] rounded-full mt-2.5 flex-shrink-0"></div>
                <span className="text-gray-700">With your explicit consent or at your direction</span>
              </li>
            </ul>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Data Security & AI Protection</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We implement industry-leading security measures to protect your personal information, including advanced encryption and AI-powered fraud detection. While we maintain reasonable security measures, no system is completely secure, and we cannot guarantee absolute security.
            </p>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 mt-6 border border-[#1E51DB]/10">
              <h4 className="font-bold text-[#1E51DB] mb-3">Our Security Measures Include:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">End-to-end encryption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Multi-factor authentication</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Regular security audits</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">AI-powered fraud detection</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Secure cloud infrastructure</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Data anonymization techniques</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Data Retention</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the type of information and applicable legal requirements.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Your Rights and Choices</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 border border-[#1E51DB]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Access & Control</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Access and receive a copy of your data</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Rectify or update your information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Request deletion of your data</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 border border-[#65A8F3]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Processing Rights</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Restrict or object to processing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Data portability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Withdraw consent</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Cookies and Tracking</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, and improve our AI algorithms. You can control cookie preferences through your browser settings, though some features may not function properly if cookies are disabled.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Children's Privacy</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Our Services are designed for adults and businesses. We do not knowingly collect personal information from individuals under 18. If you believe a child has provided us with personal information, please contact us immediately.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Changes to This Policy</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website and updating the "Last updated" date.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">Contact Us</h2>
            
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-8 mt-6 border border-[#1E51DB]/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#1E51DB] mb-4">Lendro.AI</h4>
                  <address className="not-italic text-gray-700 leading-relaxed">
                    <strong>Email:</strong> privacy@lendro.ai<br />
                    <strong>Website:</strong> www.lendro.ai<br />
                    <strong>Response Time:</strong> Within 48 hours
                  </address>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E51DB] mb-4">Data Protection Officer</h4>
                  <address className="not-italic text-gray-700 leading-relaxed">
                    <strong>Email:</strong> dpo@lendro.ai<br />
                    <strong>For:</strong> Privacy rights requests<br />
                    <strong>Response Time:</strong> Within 30 days
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1E51DB]/20">
            <div className="flex flex-wrap gap-6">
              <Link href="/terms-of-service" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
                Terms of Service
              </Link>
              <Link href="/security" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
                Security
              </Link>
              <Link href="/compliance" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
                Compliance
              </Link>
              <Link href="/contact" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 