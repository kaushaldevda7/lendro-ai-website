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
              Enterprise-grade AI platform for loan management with configurable modules for every stage of the loan lifecycle.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3">
              {["AI Relations", "AI Originations", "AI Credit", "AI Servicing", "AI Collections", "AI Treasury", "Lending as a Service"].map((item) => (
                <li key={item}>
                  <Link href={`/solutions/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {["About", "Leadership", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {["Documentation", "API Reference", "Support", "Community", "Blog"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; 2024 Lendro.AI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 