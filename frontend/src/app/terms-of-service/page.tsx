"use client";

import React from 'react';
import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-white/80 text-lg md:text-xl mt-6">
              Clear terms for using our AI-powered lending platform and services.
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
                These Terms of Service ("Terms") govern your access to and use of the Lendro.AI website, AI-powered lending platform, and related services (collectively, the "Services"). Please read these Terms carefully before using our Services.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">1. Definitions</h2>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 mb-6 border border-[#1E51DB]/10">
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong className="text-[#1E51DB]">"Lendro.AI"</strong> (or "we," "our," or "us") refers to Lendro.AI Inc., a technology company providing AI-powered lending solutions.
                </p>
                
                <p className="text-gray-700">
                  <strong className="text-[#1E51DB]">"User"</strong> (or "you" or "your") refers to any individual or entity that accesses or uses our Services.
                </p>
                
                <p className="text-gray-700">
                  <strong className="text-[#1E51DB]">"Content"</strong> refers to any information, data, text, software, graphics, messages, or other materials that are posted, uploaded, or otherwise made available through our Services.
                </p>
                
                <p className="text-gray-700">
                  <strong className="text-[#1E51DB]">"AI Services"</strong> refers to our artificial intelligence and machine learning capabilities used for credit assessment, risk analysis, and lending decisions.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">2. Account Registration and Security</h2>
            
            <p className="text-gray-700 leading-relaxed">
              To access our AI-powered lending platform, you may be required to register for an account. When you register, you agree to provide accurate, current, and complete information about yourself and your business as prompted by our registration process.
            </p>
            
            <div className="bg-gradient-to-r from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 mt-6 border border-[#65A8F3]/10">
              <h4 className="font-bold text-[#1E51DB] mb-3">Account Security Requirements:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Safeguard your account credentials and login information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Notify us immediately of any unauthorized access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Accept responsibility for all activities under your account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Maintain current and accurate account information</span>
                </li>
              </ul>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              We reserve the right to disable your account if we determine, in our sole discretion, that you have violated these Terms or engaged in activity that may harm our platform or other users.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">3. Acceptable Use of Services</h2>
            
            <p className="text-gray-700 leading-relaxed">
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to engage in any of the following prohibited activities:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gradient-to-br from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 border border-[#1E51DB]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Legal & Ethical Violations</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Violating any applicable laws or regulations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Impersonating Lendro.AI or other users</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Providing false or misleading information</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Engaging in fraudulent activities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 border border-[#65A8F3]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Technical Violations</h4>
                <ul className="list-none space-y-2">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Attempting to bypass security measures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Using automated tools without permission</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Introducing malicious software</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700">Interfering with platform operations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">4. Intellectual Property Rights</h2>
            
            <p className="text-gray-700 leading-relaxed">
              The Services and their entire contents, features, and functionality (including our AI algorithms, software, text, displays, images, and design) are owned by Lendro.AI, its licensors, or other providers and are protected by intellectual property laws.
            </p>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 mt-6 border border-[#1E51DB]/10">
              <h4 className="font-bold text-[#1E51DB] mb-3">Our Intellectual Property Includes:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Proprietary AI algorithms and models</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Platform software and architecture</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#1E51DB] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Trademarks and brand elements</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">User interface and experience design</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Documentation and content</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">Data processing methodologies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              These Terms do not grant you any right, title, or interest in the Services or any content, features, or functionality of the Services beyond the limited use rights explicitly granted herein.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">5. User Content and Data</h2>
            
            <p className="text-gray-700 leading-relaxed">
              You retain all rights in any Content you submit to our Services. By submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, process, and analyze such Content to provide and improve our AI-powered Services.
            </p>
            
            <div className="bg-gradient-to-r from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 mt-6 border border-[#65A8F3]/10">
              <h4 className="font-bold text-[#1E51DB] mb-3">Your Content Responsibilities:</h4>
              <ul className="list-none space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Ensure all submitted information is accurate and truthful</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Maintain necessary rights to grant us the required license</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Respect third-party rights and intellectual property</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">6. AI Services and Lending Terms</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1E51DB]">6.1 AI-Powered Decisions</h3>
            
            <p className="text-gray-700 leading-relaxed">
              Our platform uses artificial intelligence to assess creditworthiness, analyze risk, and make lending recommendations. While our AI systems are sophisticated, all decisions are subject to human oversight and regulatory compliance.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1E51DB]">6.2 Fees and Charges</h3>
            
            <p className="text-gray-700 leading-relaxed">
              We may charge fees for certain aspects of our Services, including platform access, loan processing, or premium features. All fees and charges will be clearly disclosed before you agree to them.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1E51DB]">6.3 Loan Terms</h3>
            
            <p className="text-gray-700 leading-relaxed">
              If you use our Services to apply for or manage loans, additional terms and conditions will apply, including interest rates, repayment schedules, and penalties. These terms will be provided in your loan agreement.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">7. Disclaimers and Warranties</h2>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 border border-[#1E51DB]/10">
              <p className="text-gray-700 leading-relaxed font-medium">
                <strong className="text-[#1E51DB]">IMPORTANT DISCLAIMER:</strong> The Services are provided "as is" and "as available," without warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, non-infringement, or course of performance.
              </p>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Lendro.AI does not warrant that the Services will function uninterrupted, secure, or available at any particular time or location, or that any errors or defects will be corrected. Our AI systems, while advanced, are not infallible and should not be relied upon as the sole basis for financial decisions.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">8. Limitation of Liability</h2>
            
            <div className="bg-gradient-to-r from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 border border-[#65A8F3]/10">
              <p className="text-gray-700 leading-relaxed font-medium">
                <strong className="text-[#1E51DB]">LIABILITY LIMITATION:</strong> In no event shall Lendro.AI, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              
              <ul className="list-none space-y-2 mt-4">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Your access to or use of or inability to access or use the Services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Any conduct or content of any third party on the Services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Any content obtained from the Services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">Unauthorized access, use, or alteration of your transmissions or content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#65A8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-gray-700">AI system errors or inaccuracies in automated decisions</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">9. Indemnification</h2>
            
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless Lendro.AI, its affiliates, licensors, and service providers from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Services.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">10. Termination</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your access to all or part of the Services, with or without notice, for any conduct that we believe violates these Terms or is harmful to other users, our platform, or third parties.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may contact us or simply discontinue using the Services.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">11. Governing Law and Jurisdiction</h2>
            
            <p className="text-gray-700 leading-relaxed">
              These Terms and your use of the Services shall be governed by and construed in accordance with the laws of the jurisdiction where Lendro.AI is incorporated, without giving effect to any choice or conflict of law provision or rule.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Any legal suit, action, or proceeding arising out of or related to these Terms or the Services shall be instituted in the courts of competent jurisdiction, although we retain the right to bring any suit, action, or proceeding against you for breach of these Terms in your country of residence or any other relevant jurisdiction.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">12. Changes to Terms</h2>
            
            <p className="text-gray-700 leading-relaxed">
              We may revise and update these Terms from time to time to reflect changes in our services, technology, or applicable laws. All changes are effective immediately when we post them and apply to all access to and use of the Services thereafter.
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Your continued use of the Services following the posting of revised Terms means that you accept and agree to the changes. We encourage you to review these Terms periodically.
            </p>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">13. Miscellaneous</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-6 border border-[#1E51DB]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Entire Agreement</h4>
                <p className="text-sm text-gray-700">
                  These Terms constitute the entire agreement between you and Lendro.AI regarding our Services and supersede all prior agreements.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#65A8F3]/5 to-[#9BD7FB]/5 rounded-xl p-6 border border-[#65A8F3]/10">
                <h4 className="font-bold text-[#1E51DB] mb-3">Severability</h4>
                <p className="text-sm text-gray-700">
                  If any provision is held invalid, illegal, or unenforceable, the remaining provisions will continue in full force and effect.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mt-12 mb-6 text-[#1E51DB] border-b-2 border-[#65A8F3] pb-2">14. Contact Information</h2>
            
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            
            <div className="bg-gradient-to-r from-[#1E51DB]/5 to-[#65A8F3]/5 rounded-xl p-8 mt-6 border border-[#1E51DB]/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[#1E51DB] mb-4">Lendro.AI</h4>
                  <address className="not-italic text-gray-700 leading-relaxed">
                    <strong>Email:</strong> legal@lendro.ai<br />
                    <strong>Website:</strong> www.lendro.ai<br />
                    <strong>Support:</strong> support@lendro.ai
                  </address>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E51DB] mb-4">Legal Department</h4>
                  <address className="not-italic text-gray-700 leading-relaxed">
                    <strong>Terms Questions:</strong> legal@lendro.ai<br />
                    <strong>Compliance:</strong> compliance@lendro.ai<br />
                    <strong>Response Time:</strong> Within 5 business days
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#1E51DB]/20">
            <div className="flex flex-wrap gap-6">
              <Link href="/privacy-policy" className="text-[#1E51DB] hover:text-[#65A8F3] font-medium transition-colors">
                Privacy Policy
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