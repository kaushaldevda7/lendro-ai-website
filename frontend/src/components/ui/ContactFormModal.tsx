import React, { useState } from 'react';
import axios from 'axios';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  formType?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose, heading, formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      ...formStatus,
      loading: true,
      error: false,
      message: ''
    });
    
    console.log('Submitting contact form:', formData);
    
    try {
      // Send email through our Next.js API route
      const response = await axios.post('/api/send-email', {
        ...formData,
        formType: formType || heading
      });
      
      console.log('Email API response:', response.data);
      
      // Display success message
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your interest. We will get back to you shortly.',
        loading: false
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#1E51DB]/10 via-[#65A8F3]/10 to-[#9BD7FB]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#9BD7FB]/10 via-[#65A8F3]/10 to-[#1E51DB]/10 rounded-full blur-3xl"></div>
      
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-lg w-full max-h-[95vh] overflow-hidden border border-gray-200/50 relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#1E51DB] via-[#65A8F3] to-[#9BD7FB] p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{heading}</h2>
                <p className="text-blue-100 text-sm">Let's start your AI transformation journey</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-200 group"
              aria-label="Close"
            >
              <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          {formStatus.submitted ? (
            <div className="text-center py-8">
              {formStatus.error ? (
                <>
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Something went wrong</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{formStatus.message}</p>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank you!</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{formStatus.message}</p>
                </>
              )}
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] text-white font-semibold rounded-xl hover:from-[#1a47c4] hover:to-[#5a96e0] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Introduction */}
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to transform your lending operations?</h3>
                <p className="text-gray-600 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] transition-all duration-200 shadow-sm hover:shadow-md" 
                    placeholder="John Doe"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] transition-all duration-200 shadow-sm hover:shadow-md" 
                    placeholder="john@company.com"
                    required 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] transition-all duration-200 shadow-sm hover:shadow-md" 
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] transition-all duration-200 shadow-sm hover:shadow-md" 
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E51DB]/50 focus:border-[#1E51DB] transition-all duration-200 shadow-sm hover:shadow-md resize-none" 
                  placeholder="Tell us about your lending operations and how we can help transform them with AI..."
                  required
                ></textarea>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={onClose} 
                  className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 border border-gray-200 hover:border-gray-300"
                  disabled={formStatus.loading}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-[#1E51DB] to-[#65A8F3] hover:from-[#1a47c4] hover:to-[#5a96e0] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    <>
                      <svg className="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

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
                    <p className="text-xs text-[#1E51DB]/80">We respect your privacy and will never share your information with third parties. This data is used solely to provide you with relevant information about our AI lending solutions.</p>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal; 