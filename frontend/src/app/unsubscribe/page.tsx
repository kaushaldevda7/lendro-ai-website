"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

function UnsubscribeContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email');
  
  const [email, setEmail] = useState(emailParam || '');
  const [reason, setReason] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const reasonOptions = [
    'Too many emails',
    'Content not relevant',
    'Found a better alternative',
    'No longer interested in AI lending',
    'Email frequency too high',
    'Technical issues with emails',
    'Other'
  ];

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      const response = await axios.post('/api/unsubscribe', {
        email,
        reason,
        feedback
      });
      
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: '' });
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      let errorMessage = 'Failed to process unsubscribe request. Please try again.';
      
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      
      setStatus({ loading: false, success: false, error: errorMessage });
    }
  };

  if (status.success) {
    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              {/* Success Animation */}
              <div className="mb-8">
                <div className="relative w-20 h-20 mx-auto mb-6">
                  {/* Subtle outer ring */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20 animate-ping"></div>
                  {/* Main success icon */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Successfully Unsubscribed
                  </span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  You have been removed from our newsletter. We're sorry to see you go!
                </p>
              </div>

              {/* Thank You Message */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
                <h2 className="text-xl font-semibold text-green-800 mb-3">Thank You for Your Feedback</h2>
                <p className="text-green-700 text-sm">
                  Your feedback helps us improve our content and communication. 
                  We appreciate the time you've spent with us.
                </p>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  Changed your mind? You can always resubscribe or update your preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Back to Homepage
                  </button>
                  <button
                    onClick={() => window.location.href = '/preferences'}
                    className="px-6 py-3 bg-white border-2 border-lendro-primary text-lendro-primary font-semibold rounded-xl hover:bg-lendro-primary hover:text-white transition-all duration-300"
                  >
                    Update Preferences Instead
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-600 to-rose-600 bg-clip-text text-transparent">
                  Unsubscribe from Newsletter
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                We're sorry to see you go! Help us improve by telling us why you're leaving.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUnsubscribe} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lendro-primary/50 focus:border-lendro-primary transition-all"
                  placeholder="Enter your email address"
                  required
                  disabled={status.loading}
                />
              </div>

              {/* Reason Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Why are you unsubscribing? (Optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {reasonOptions.map((option) => (
                    <label key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="reason"
                        value={option}
                        checked={reason === option}
                        onChange={(e) => setReason(e.target.value)}
                        className="mr-3 text-lendro-primary focus:ring-lendro-primary"
                        disabled={status.loading}
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Feedback */}
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Feedback (Optional)
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-lendro-primary/50 focus:border-lendro-primary transition-all resize-none"
                  placeholder="Tell us how we can improve our newsletter..."
                  disabled={status.loading}
                />
              </div>

              {/* Error Message */}
              {status.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm text-center">
                    ❌ {status.error}
                  </p>
                </div>
              )}

              {/* Alternative Options */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Before you go...
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Consider updating your preferences instead of unsubscribing completely. 
                  You can choose what content you receive and how often.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.href = '/preferences'}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm underline"
                >
                  Update Preferences Instead →
                </button>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => window.location.href = '/'}
                  className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all duration-300"
                  disabled={status.loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status.loading ? 'Processing...' : 'Unsubscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="animate-pulse">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    }>
      <UnsubscribeContent />
    </Suspense>
  );
} 