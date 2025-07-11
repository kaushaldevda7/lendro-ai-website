"use client";

import React, { useState, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

function PreferencesContent() {
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email');
  
  const [email, setEmail] = useState(emailParam || '');
  const [frequency, setFrequency] = useState('weekly');
  const [preferences, setPreferences] = useState<string[]>([
    'industry-insights',
    'product-updates'
  ]);
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const frequencyOptions = [
    { value: 'daily', label: 'Daily', description: 'Get updates every day' },
    { value: 'weekly', label: 'Weekly', description: 'Perfect balance of updates' },
    { value: 'bi-weekly', label: 'Bi-weekly', description: 'Every two weeks' },
    { value: 'monthly', label: 'Monthly', description: 'Just the highlights' }
  ];

  const contentOptions = [
    {
      id: 'industry-insights',
      title: 'Industry Insights & Trends',
      description: 'Latest trends in AI lending and financial technology',
      icon: '📊'
    },
    {
      id: 'product-updates',
      title: 'Product Updates & Features',
      description: 'New features, improvements, and product announcements',
      icon: '🚀'
    },
    {
      id: 'case-studies',
      title: 'Case Studies & Success Stories',
      description: 'Real-world examples and customer success stories',
      icon: '📖'
    },
    {
      id: 'webinars',
      title: 'Webinars & Events',
      description: 'Educational webinars and industry events',
      icon: '🎓'
    },
    {
      id: 'research',
      title: 'Research & Whitepapers',
      description: 'In-depth research reports and technical whitepapers',
      icon: '📄'
    }
  ];

  const handlePreferenceChange = (preferenceId: string) => {
    setPreferences(prev => 
      prev.includes(preferenceId)
        ? prev.filter(id => id !== preferenceId)
        : [...prev, preferenceId]
    );
  };

  const handleUpdatePreferences = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setStatus({ loading: true, success: false, error: '' });
    
    try {
      const response = await axios.post('/api/preferences', {
        email,
        preferences,
        frequency
      });
      
      if (response.data.success) {
        setStatus({ loading: false, success: true, error: '' });
      }
    } catch (error) {
      console.error('Preferences update error:', error);
      let errorMessage = 'Failed to update preferences. Please try again.';
      
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
                  <div className="absolute inset-0 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full opacity-20 animate-ping"></div>
                  {/* Main success icon */}
                  <div className="relative w-20 h-20 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-lendro-primary to-lendro-secondary bg-clip-text text-transparent">
                    Preferences Updated!
                  </span>
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  Your newsletter preferences have been successfully updated.
                </p>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-r from-lendro-primary/10 to-lendro-secondary/10 rounded-2xl p-6 mb-8 border border-lendro-primary/20">
                <h2 className="text-xl font-semibold text-lendro-primary mb-3">Your New Preferences</h2>
                <div className="text-left space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Email Frequency:</span> {frequencyOptions.find(f => f.value === frequency)?.label}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Content Types:</span> {preferences.length} selected
                  </p>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <p className="text-gray-600 mb-6">
                  You'll receive your next newsletter according to your updated preferences.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.href = '/'}
                    className="px-6 py-3 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Back to Homepage
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-3 bg-white border-2 border-lendro-primary text-lendro-primary font-semibold rounded-xl hover:bg-lendro-primary hover:text-white transition-all duration-300"
                  >
                    Update Again
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
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-lendro-primary to-lendro-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-lendro-primary to-lendro-secondary bg-clip-text text-transparent">
                  Update Your Preferences
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                Customize your newsletter experience to get exactly what you want.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleUpdatePreferences} className="space-y-8">
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

              {/* Frequency Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  How often would you like to receive emails?
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {frequencyOptions.map((option) => (
                    <label key={option.value} className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      frequency === option.value 
                        ? 'border-lendro-primary bg-lendro-primary/5' 
                        : 'border-gray-200 hover:border-lendro-primary/50'
                    }`}>
                      <input
                        type="radio"
                        name="frequency"
                        value={option.value}
                        checked={frequency === option.value}
                        onChange={(e) => setFrequency(e.target.value)}
                        className="sr-only"
                        disabled={status.loading}
                      />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 ${
                          frequency === option.value 
                            ? 'border-lendro-primary bg-lendro-primary' 
                            : 'border-gray-300'
                        }`}>
                          {frequency === option.value && (
                            <div className="w-full h-full rounded-full bg-white scale-50"></div>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Content Preferences */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What content would you like to receive?
                </label>
                <div className="space-y-3">
                  {contentOptions.map((option) => (
                    <label key={option.id} className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      preferences.includes(option.id) 
                        ? 'border-lendro-primary bg-lendro-primary/5' 
                        : 'border-gray-200 hover:border-lendro-primary/50'
                    }`}>
                      <input
                        type="checkbox"
                        checked={preferences.includes(option.id)}
                        onChange={() => handlePreferenceChange(option.id)}
                        className="sr-only"
                        disabled={status.loading}
                      />
                      <div className="flex items-start w-full">
                        <div className="text-2xl mr-4">{option.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{option.title}</div>
                          <div className="text-sm text-gray-500">{option.description}</div>
                        </div>
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          preferences.includes(option.id) 
                            ? 'border-lendro-primary bg-lendro-primary' 
                            : 'border-gray-300'
                        }`}>
                          {preferences.includes(option.id) && (
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {status.error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                  <p className="text-red-800 text-sm text-center">
                    ❌ {status.error}
                  </p>
                </div>
              )}

              {/* Unsubscribe Option */}
              <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  Want to unsubscribe completely?
                </h3>
                <p className="text-red-700 text-sm mb-4">
                  If you no longer want to receive any emails from us, you can unsubscribe completely.
                </p>
                <button
                  type="button"
                  onClick={() => window.location.href = '/unsubscribe'}
                  className="text-red-600 hover:text-red-800 font-medium text-sm underline"
                >
                  Unsubscribe from all emails →
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
                  disabled={status.loading || preferences.length === 0}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {status.loading ? 'Updating...' : 'Update Preferences'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function PreferencesPage() {
  return (
    <Suspense fallback={
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-3xl">
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
      <PreferencesContent />
    </Suspense>
  );
} 