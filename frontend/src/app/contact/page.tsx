"use client";

import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import axios from 'axios';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false,
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
      // Send email through our Next.js API route
      const response = await axios.post('/api/send-email', formData);
      
      console.log('Email API response:', response.data);
      
      // Display success message
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message. We will get back to you shortly.',
        loading: false
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending contact form email:', error);
      
      let errorMessage = 'There was an error submitting your form. Please try again later.';
      
      if (axios.isAxiosError(error) && error.response) {
        console.error('API response error:', error.response.data);
        
        if (error.response.data?.error) {
          errorMessage += ` (${error.response.data.error})`;
        }
      }
      
      // Handle error
      setFormStatus({
        submitted: true,
        error: true,
        message: errorMessage,
        loading: false
      });
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      description: 'Get in touch with our team',
      contact: 'hello@lendro.ai',
      action: 'mailto:hello@lendro.ai',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: '#',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Visit Us',
      description: 'Meet us in person',
      contact: 'San Francisco, CA',
      action: '#',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const departments = [
    {
      name: 'Sales',
      email: 'sales@lendro.ai',
      description: 'Product demos, pricing, and custom solutions for your lending operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'Support',
      email: 'support@lendro.ai',
      description: 'Technical assistance and customer service for existing clients.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Partnerships',
      email: 'partners@lendro.ai',
      description: 'Integration opportunities and strategic partnerships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-purple-500 to-violet-600'
    },
    {
      name: 'Careers',
      email: 'careers@lendro.ai',
      description: 'Join our team and help shape the future of AI lending.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-grid-white/10"></div>
        
        {/* Floating Color Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400/30 to-teal-500/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-emerald-400/30 to-green-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/30 to-indigo-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center">
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">
              Ready to experience the power of agentic AI? Our team is here to help you get started with autonomous lending solutions.
            </p>
            
            {/* Quick Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                  <p className="text-white/80 text-sm mb-3">{method.description}</p>
                  <p className="text-cyan-300 font-medium">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-lendro-primary/3 to-lendro-secondary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-r from-lendro-secondary/3 to-lendro-tertiary/3 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Contact Form</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Start Your AI Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your lending challenges and we'll show you how our AI agents can transform your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Lendro.AI?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h4>
                      <p className="text-gray-600">Deploy AI agents in weeks, not months, with our proven implementation process.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Enterprise Security</h4>
                      <p className="text-gray-600">Bank-grade security with SOC 2 compliance and end-to-end encryption.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
                      <p className="text-gray-600">Dedicated success team with deep lending and AI expertise.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Company Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Headquarters</h3>
                <div className="space-y-3 text-gray-600">
                  <p>San Francisco, CA</p>
                  <p>United States</p>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="font-medium text-gray-900">General Inquiries</p>
                    <a href="mailto:hello@lendro.ai" className="text-lendro-primary hover:text-lendro-secondary transition-colors">hello@lendro.ai</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              {formStatus.submitted ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 text-center">
                  {formStatus.error ? (
                    <>
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-red-800 mb-4">Oops!</h3>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                    </>
                  )}
                  <p className={`text-lg mb-8 ${formStatus.error ? 'text-red-700' : 'text-green-700'}`}>{formStatus.message}</p>
                  <button 
                    onClick={() => setFormStatus({ submitted: false, error: false, message: '', loading: false })}
                    className="px-8 py-4 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          id="name" 
                          name="name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all bg-white/50 backdrop-blur-sm" 
                          required 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email} 
                          onChange={handleChange} 
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all bg-white/50 backdrop-blur-sm" 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        value={formData.company} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all bg-white/50 backdrop-blur-sm" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select 
                        id="subject" 
                        name="subject" 
                        value={formData.subject} 
                        onChange={handleChange} 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all bg-white/50 backdrop-blur-sm" 
                        required
                      >
                        <option value="">Please select</option>
                        <option value="Product Demo">Product Demo</option>
                        <option value="Sales Inquiry">Sales Inquiry</option>
                        <option value="Support Request">Support Request</option>
                        <option value="Partnership Opportunity">Partnership Opportunity</option>
                        <option value="Press Inquiry">Press Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        rows={6} 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-lendro-primary/20 focus:border-lendro-primary transition-all bg-white/50 backdrop-blur-sm resize-none" 
                        placeholder="Tell us about your lending challenges and how we can help..."
                        required
                      ></textarea>
                    </div>
                    
                    <div className="pt-4">
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
                        disabled={formStatus.loading}
                      >
                        {formStatus.loading ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="bg-gradient-to-br from-white via-gray-50 to-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-lendro-primary/3 to-lendro-secondary/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-lendro-secondary/3 to-lendro-tertiary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Specialized Teams</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Connect with Experts
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Reach out directly to the team that can best assist with your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${dept.color} opacity-5 rounded-full blur-2xl`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${dept.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{dept.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{dept.description}</p>
                  <a 
                    href={`mailto:${dept.email}`} 
                    className="inline-flex items-center text-lendro-primary font-medium hover:text-lendro-secondary transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    {dept.email}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100/20"></div>
        <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-gradient-to-r from-lendro-tertiary/3 to-lendro-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Quick Answers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to common questions about our AI lending solutions
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How quickly can we implement Lendro.AI?</h3>
              <p className="text-gray-600 leading-relaxed">
                Most implementations are completed within 4-8 weeks, depending on your existing systems and requirements. Our dedicated implementation team guides you through setup, integration, and training to ensure a smooth transition.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">What makes your AI agents truly autonomous?</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI agents don't just analyze data—they take action. They can automatically approve loans, detect fraud, restructure payment plans, and optimize portfolios without human intervention, while learning and improving from every decision.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How do you ensure data security and compliance?</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain SOC 2 Type II compliance, use end-to-end encryption, and follow all major financial regulations including GDPR, CCPA, and banking standards. Your data never leaves your secure environment.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Can I see a demo of the AI agents in action?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We offer personalized demos where you can see our AI agents processing real lending scenarios. Contact our sales team to schedule a demo tailored to your specific use cases and requirements.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/solutions" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Our Solutions</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 