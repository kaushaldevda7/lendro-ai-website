"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const PlatformHeader: React.FC = () => {
  const { state, logout, hasRole } = useAuth();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  // Get user initials for avatar fallback
  const getUserInitials = () => {
    if (!state.user?.name) return '?';
    
    const nameParts = state.user.name.split(' ');
    if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
    
    return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
  };

  // Check if user has admin role
  const isAdmin = hasRole('ADMIN');

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/platform" className="flex items-center">
          <div className="bg-gradient-to-r from-lendro-primary/5 to-lendro-secondary/5 rounded-lg px-3 py-2 border border-lendro-primary/10">
            <Image 
              src="/lendro-logo.svg" 
              alt="Lendro.AI" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </Link>

        {/* Right side - Avatar and user info */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="flex items-center focus:outline-none hover:bg-gray-50 p-2 rounded-lg transition-colors"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="mr-3 text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">{state.user?.name}</p>
              <p className="text-xs text-gray-500">{state.user?.email}</p>
            </div>
            
            {/* Avatar - either image or initials */}
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-lendro-primary to-lendro-secondary text-white flex items-center justify-center font-medium">
              {getUserInitials()}
            </div>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10 border border-gray-200">
              <Link 
                href="/platform/profile" 
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-lendro-tertiary/10 hover:text-lendro-primary transition-colors"
                onClick={() => setDropdownOpen(false)}
              >
                My Profile
              </Link>
              
              {isAdmin && (
                <>
                  <Link 
                    href="/platform/admin" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-lendro-tertiary/10 hover:text-lendro-primary transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Admin Panel
                  </Link>
                </>
              )}
              
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-lendro-tertiary/10 hover:text-lendro-primary transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Debug tools - Only visible in development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-2 right-2 z-50 bg-gray-800 text-white p-2 rounded text-xs">
          <button 
            className="px-2 py-1 bg-lendro-primary rounded mr-2"
            onClick={() => {
              // Force ADMIN role for testing
              if (state.user) {
                const user = {...state.user, role: 'ADMIN'};
                localStorage.setItem('user', JSON.stringify(user));
                window.location.reload();
              }
            }}
          >
            Set Admin Role
          </button>
          <span>Role: {state.user?.role || 'none'}</span>
        </div>
      )}
    </header>
  );
};

export default PlatformHeader; 