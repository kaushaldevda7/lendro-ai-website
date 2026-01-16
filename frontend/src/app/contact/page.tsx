"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import axios from 'axios';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus({
      ...formStatus,
      loading: true,
      error: false,
      message: ''
    });

    try {
      const response = await axios.post('/api/send-email', {
        ...formData,
        formType: `Contact Page - ${formData.inquiryType}`
      });

      console.log('Email API response:', response.data);

      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for reaching out! We\'ll get back to you within 24 hours.',
        loading: false
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'general',
        message: '',
      });
    } catch (error) {
      console.error('Error sending contact form email:', error);

      let errorMessage = 'There was an error submitting your form. Please try again later.';

      if (axios.isAxiosError(error) && error.response?.data?.error) {
        errorMessage += ` (${error.response.data.error})`;
      }

      setFormStatus({
        submitted: true,
        error: true,
        message: errorMessage,
        loading: false
      });
    }
  };

  const resetForm = () => {
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      loading: false
    });
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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-white/5 to-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="block">Let's Start Your</span>
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent py-2">
                AI Transformation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Connect with our team of lending and AI experts to discover how Lendro.AI can revolutionize your operations
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/30"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/5 via-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-[#9BD7FB]/5 via-[#65A8F3]/5 to-[#1E51DB]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] p-6 md:p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold">Send Us a Message</h2>
                        <p className="text-blue-100 text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6 md:p-8">
                  {formStatus.submitted ? (
                    <div className="text-center py-12">
                      {formStatus.error ? (
                        <>
                          <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h3>
                          <p className="text-gray-600 mb-8 leading-relaxed">{formStatus.message}</p>
                          <button
                            onClick={resetForm}
                            className="px-8 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:from-[#1a47c4] hover:to-[#5a96e0] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            Try Again
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="relative w-20 h-20 mx-auto mb-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] rounded-full opacity-20 animate-ping"></div>
                            <div className="relative w-20 h-20 bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] rounded-full flex items-center justify-center shadow-lg">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] bg-clip-text text-transparent mb-3">Message Sent!</h3>
                          <p className="text-gray-600 mb-8 leading-relaxed">{formStatus.message}</p>
                          <button
                            onClick={resetForm}
                            className="px-8 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:from-[#1a47c4] hover:to-[#5a96e0] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            Send Another Message
                          </button>
                        </>
                      )}
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 hover:border-[#65A8F3]/50"
                            placeholder="John Doe"
                            required
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 hover:border-[#65A8F3]/50"
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      {/* Company & Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 hover:border-[#65A8F3]/50"
                            placeholder="Your Company"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 hover:border-[#65A8F3]/50"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>

                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-semibold text-gray-700 mb-2">
                          What can we help you with?
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 hover:border-[#65A8F3]/50 appearance-none cursor-pointer"
                          style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                        >
                          <option value="general">General Inquiry</option>
                          <option value="demo">Schedule a Demo</option>
                          <option value="sales">Sales & Pricing</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership Opportunity</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/30 focus:border-[#1E51DB] transition-all duration-200 resize-none hover:border-[#65A8F3]/50"
                          placeholder="Tell us about your lending operations and how we can help transform them with AI..."
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] hover:from-[#1a47c4] hover:to-[#5a96e0] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        disabled={formStatus.loading}
                      >
                        {formStatus.loading ? (
                          <>
                            <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>

                      {/* Privacy Notice */}
                      <div className="bg-gradient-to-r from-[#9BD7FB]/20 to-[#65A8F3]/20 rounded-xl p-4 border border-[#65A8F3]/30">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-[#1E51DB] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm text-[#1E51DB] font-medium mb-1">Your privacy is protected</p>
                            <p className="text-xs text-[#1E51DB]/80">We respect your privacy and will never share your information with third parties.</p>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Info Side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] bg-clip-text text-transparent">
                    Let's Connect
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Ready to transform your lending operations with AI? Our team of experts is here to help you get started on your AI journey.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a href="mailto:hello@lendro.ai" className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                      <p className="text-[#1E51DB] font-medium group-hover:text-[#65A8F3] transition-colors">hello@lendro.ai</p>
                    </div>
                  </div>
                </a>

                <a href="tel:+1-855-LENDRO1" className="block bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                      <p className="text-[#1E51DB] font-medium group-hover:text-[#65A8F3] transition-colors">+1 (855) LENDRO-1</p>
                    </div>
                  </div>
                </a>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM PT</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Promise */}
              <div className="bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-lg">24-Hour Response Guarantee</h3>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We're committed to fast responses. Expect to hear from our team within 24 hours on business days.
                  </p>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50">
                <h3 className="font-bold text-gray-900 mb-2">Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Check out our FAQ for quick answers to common questions.
                </p>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-2 text-[#1E51DB] font-semibold hover:text-[#65A8F3] transition-colors"
                >
                  <span>View FAQ</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Commitment to You
            </h2>
            <p className="text-gray-600">
              What you can expect when you reach out to Lendro.AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">We respond to all inquiries within 24 hours during business days</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Direct access to our lending and AI experts</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Secure & Confidential</h3>
              <p className="text-gray-600 text-sm">All communications are encrypted and confidential</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
