"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import CalendlyModal from '@/components/ui/CalendlyModal';

const Navbar: React.FC = () => {
  const { state, logout } = useAuth();
  const { isAuthenticated, user } = state;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-lendro-primary via-lendro-secondary to-lendro-tertiary text-white shadow-lg">
      <CalendlyModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <Image 
                  src="/lendro-logo-mixed.svg" 
                  alt="Lendro.AI" 
                  width={120} 
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:bg-white/10 p-2 rounded-lg transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/solutions" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
              Solutions
            </Link>
            <Link href="/platform" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
              Platform
            </Link>
            <Link href="/about" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/platform/dashboard" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
                  Dashboard
                </Link>
                <Link href="/loans" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
                  My Loans
                </Link>
                {user?.role === 'admin' && (
                  <Link href="/admin" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-white text-lendro-primary px-6 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors rounded-lg shadow-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/contact" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors">
                  Contact
                </Link>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-lendro-primary px-6 py-2 text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors rounded-lg shadow-md"
                >
                  Schedule a Demo
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} py-4 border-t border-white/20 animate-fadeIn`}>
          <div className="flex flex-col space-y-4">
            <Link href="/solutions" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
              Solutions
            </Link>
            <Link href="/platform" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
              Platform
            </Link>
            <Link href="/about" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
              About
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link href="/platform/dashboard" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
                  Dashboard
                </Link>
                <Link href="/loans" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
                  My Loans
                </Link>
                {user?.role === 'admin' && (
                  <Link href="/admin" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
                    Admin
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-white text-lendro-primary px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors rounded-lg shadow-md mt-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/contact" className="text-sm font-medium uppercase tracking-wider hover:text-white/80 transition-colors py-2">
                  Contact
                </Link>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-white text-lendro-primary px-6 py-3 text-sm font-medium uppercase tracking-wider hover:bg-white/90 transition-colors rounded-lg shadow-md mt-4"
                >
                  Schedule a Demo
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 