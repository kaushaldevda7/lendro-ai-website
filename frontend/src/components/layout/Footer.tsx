"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <Image 
                  src="/lendro-logo-mixed.svg" 
                  alt="Lendro.AI" 
                  width={120} 
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Autonomous AI agents that think, learn, and act—transforming lending operations with unprecedented intelligence and efficiency.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-xs">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Next-Generation AI Technology</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">AI Agents</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/ai-relations" className="text-white/70 hover:text-white text-sm transition-colors">
                  Relations AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-originations" className="text-white/70 hover:text-white text-sm transition-colors">
                  Originations AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-spreading" className="text-white/70 hover:text-white text-sm transition-colors">
                  Spreading AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-credit" className="text-white/70 hover:text-white text-sm transition-colors">
                  Credit AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-servicing" className="text-white/70 hover:text-white text-sm transition-colors">
                  Servicing AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-collections" className="text-white/70 hover:text-white text-sm transition-colors">
                  Collections AI Agent
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-treasury" className="text-white/70 hover:text-white text-sm transition-colors">
                  Treasury AI Agent
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/whitepaper" className="text-white/70 hover:text-white text-sm transition-colors">
                  White Paper
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-risk-models" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Risk Models
                </Link>
              </li>
              <li>
                <Link href="/blog/lending-ai-disruption" className="text-white/70 hover:text-white text-sm transition-colors">
                  AI Disruption
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-financial-opportunity" className="text-white/70 hover:text-white text-sm transition-colors">
                  Market Opportunity
                </Link>
              </li>
              <li>
                <Link href="/solutions/integrations" className="text-white/70 hover:text-white text-sm transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-white/70 hover:text-white text-sm transition-colors">
                  Security & Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; 2025 Lendro.AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-xs">
              <span>Built for the future of lending</span>
              <div className="w-1 h-1 bg-white/30 rounded-full"></div>
              <span>Enterprise-grade AI</span>
            </div>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="text-white/60 hover:text-white text-sm transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 