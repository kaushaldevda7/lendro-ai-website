"use client";

import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function AIRiskModelsPage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll detection for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-grid-gray-100/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 via-indigo-600/10 to-purple-700/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-500/10 via-purple-600/10 to-pink-700/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <Link href="/#knowledge-hub" className="hover:text-blue-600 transition-colors">Knowledge Hub</Link>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-gray-900 font-medium">AI Risk Models</span>
              </div>
            </nav>

            {/* Article Header */}
            <div className="text-center mb-1">
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200/50 shadow-sm mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-semibold text-blue-700">Technical Deep Dive</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Building the Next Generation
                </span>
                <span className="block text-gray-900 text-3xl md:text-4xl lg:text-5xl mt-2">
                  of AI Risk Models
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                An in-depth exploration of modern machine learning approaches to credit risk assessment, comparing traditional statistical methods with cutting-edge AI techniques.
              </p>
              
              {/* Article Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a2 2 0 012-2z" />
                  </svg>
                  <span>Technical</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pt-2 pb-12 md:pt-4 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  The financial services industry stands at a critical juncture. Traditional credit risk models, built on decades-old statistical methods, are increasingly inadequate for today's complex lending landscape. As we move into 2025, the question isn't whether AI will transform risk assessment—it's how quickly institutions can adapt to stay competitive.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Traditional risk models miss 40% of predictive signals available in modern data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>AI-powered models can reduce default rates by 35% while increasing approval rates by 23%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Ensemble methods combining multiple AI techniques show 96% prediction accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time model adaptation enables dynamic risk pricing and instant decisions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 1: The Evolution of Risk Assessment */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Evolution of Risk Assessment</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Models</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>FICO scores and credit bureau data</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>Linear regression and logistic models</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>Static rules and thresholds</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span>Monthly or quarterly updates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Models</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Alternative data and behavioral signals</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Neural networks and ensemble methods</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Dynamic risk scoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>Real-time model updates</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  The shift from traditional to AI-powered risk models represents more than a technological upgrade—it's a fundamental reimagining of how we understand and predict credit risk. While traditional models rely on historical patterns and limited data points, AI models can process thousands of variables in real-time, identifying subtle patterns that human analysts would never detect.
                </p>
              </div>

              {/* Section 2: Technical Architecture */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Architecture of Modern AI Risk Models</h2>
                
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200/50 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Multi-Layer Ensemble Approach</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Data Ingestion Layer</h4>
                        <p className="text-gray-700">Real-time processing of structured and unstructured data from multiple sources including credit bureaus, bank statements, social signals, and behavioral patterns.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Feature Engineering Engine</h4>
                        <p className="text-gray-700">Automated feature extraction and transformation using deep learning techniques to identify non-obvious risk indicators and interaction effects.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Ensemble Prediction Models</h4>
                        <p className="text-gray-700">Combination of gradient boosting, neural networks, and transformer models that vote on risk predictions with weighted confidence scores.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Continuous Learning System</h4>
                        <p className="text-gray-700">Real-time model updates based on new data and performance feedback, ensuring models adapt to changing market conditions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Performance Metrics */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Performance Comparison: Traditional vs AI Models</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Prediction Accuracy</div>
                    <div className="text-xs text-gray-600">vs 73% traditional</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Default Reduction</div>
                    <div className="text-xs text-gray-600">Lower portfolio risk</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">23%</div>
                    <div className="text-sm font-medium text-gray-900 mb-1">Approval Increase</div>
                    <div className="text-xs text-gray-600">More qualified borrowers</div>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  These performance improvements translate directly to bottom-line impact. A mid-size lender processing 10,000 applications monthly could see annual savings of $2.4M through reduced defaults and increased approval rates, while maintaining or improving risk standards.
                </p>
              </div>

              {/* Section 4: Implementation Considerations */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Considerations</h2>
                
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                    <p className="text-gray-700 mb-4">
                      AI risk models must maintain explainability for regulatory compliance. Modern techniques like SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) provide the transparency required by regulators while preserving model performance.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>Model interpretability and audit trails</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>Fair lending compliance monitoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span>Stress testing and scenario analysis</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Data Quality and Governance</h3>
                    <p className="text-gray-700 mb-4">
                      The success of AI risk models depends heavily on data quality. Implementing robust data governance frameworks ensures model reliability and performance consistency over time.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Real-time data validation and cleansing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Feature drift detection and monitoring</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span>Privacy-preserving data processing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">The Path Forward</h2>
                
                <div className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-800 rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-2xl font-bold mb-4">Key Success Factors</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3">Technical Excellence</h4>
                      <ul className="space-y-2 text-white/90">
                        <li>• Robust model architecture</li>
                        <li>• Continuous learning capabilities</li>
                        <li>• Scalable infrastructure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">Organizational Readiness</h4>
                      <ul className="space-y-2 text-white/90">
                        <li>• Data-driven culture</li>
                        <li>• Cross-functional collaboration</li>
                        <li>• Change management</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  The transition to AI-powered risk models isn't just about technology—it's about transforming how financial institutions understand and manage risk. Organizations that embrace this transformation today will have a significant competitive advantage in tomorrow's lending landscape.
                </p>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200/50 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Risk Models?</h3>
                <p className="text-gray-700 mb-6">
                  Discover how Lendro.AI's advanced risk modeling platform can help your institution achieve these performance improvements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/#roi-calculator"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Calculate Your ROI
                  </Link>
                  <Link 
                    href="/#contact"
                    className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </div>
    </Layout>
  );
} 