'use client';

import { useState } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function Navigation() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Added this state
  const { isSignedIn, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/[0.03] border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-thin text-white tracking-tight hover:text-yellow-400 transition-colors duration-300">
            The Law Insights
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
              Home
            </Link>
            <Link href="/about" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
              About
            </Link>
            <Link href="/tli-ai" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
              AI Assistant
            </Link>
            <Link href="/calculators" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
              Calculators
            </Link>
            <Link href="/shop" className="text-white/70 hover:text-white transition-colors duration-300 font-light">
              Shop
            </Link>
            
            {/* Desktop Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>
                  {isSignedIn ? `Hi, ${user?.firstName || 'User'}!` : 'Profile'}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Desktop Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl shadow-2xl overflow-hidden hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                  {isSignedIn ? (
                    // Logged in user menu
                    <div className="py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-white/[0.08]">
                        <div className="text-white font-light text-xl">
                          {user?.firstName} {user?.lastName}
                        </div>
                        <div className="text-white/60 text-sm font-light">
                          {user?.primaryEmailAddress?.emailAddress}
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-2">
                        <Link 
                          href="/dashboard" 
                          className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          </svg>
                          Dashboard
                        </Link>
                        
                        <Link 
                          href="/profile" 
                          className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Settings
                        </Link>
                        
                        <Link 
                          href="/chat-history" 
                          className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Chat History
                        </Link>
                      </div>
                      
                      {/* Sign Out */}
                      <div className="border-t border-white/[0.08] pt-2">
                        <SignOutButton>
                          <button 
                            className="flex items-center w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-white/[0.05] transition-colors duration-300"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                            Sign Out
                          </button>
                        </SignOutButton>
                      </div>
                    </div>
                  ) : (
                    // Not logged in menu
                    <div className="py-2">
                      <Link 
                        href="/login" 
                        className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign In
                      </Link>
                      <Link 
                        href="/signup" 
                        className="flex items-center px-4 py-3 text-white/70 hover:text-white hover:bg-white/[0.05] transition-colors duration-300"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Create Account
                      </Link>
                      
                      {/* Coming Soon Section */}
                      <div className="border-t border-white/[0.08] mt-2 pt-2">
                        <div className="px-4 py-2 text-white/60 text-xs font-light">
                          Coming Soon: Dashboard, Settings, Chat History
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-4 py-2 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 text-sm"
              >
                {isSignedIn ? `Hi, ${user?.firstName}!` : 'Profile'}
              </button>
              
              {/* Mobile Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl shadow-2xl overflow-hidden">
                  {isSignedIn ? (
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-white/[0.08]">
                        <div className="text-white text-sm font-light">{user?.firstName}</div>
                      </div>
                      <Link href="/dashboard" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/[0.05] text-sm font-light transition-colors duration-300" onClick={() => setIsProfileOpen(false)}>Dashboard</Link>
                      <SignOutButton>
                        <button className="block w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-white/[0.05] text-sm font-light transition-colors duration-300" onClick={() => setIsProfileOpen(false)}>Sign Out</button>
                      </SignOutButton>
                    </div>
                  ) : (
                    <div className="py-2">
                      <Link href="/login" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/[0.05] text-sm font-light transition-colors duration-300" onClick={() => setIsProfileOpen(false)}>Sign In</Link>
                      <Link href="/signup" className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/[0.05] text-sm font-light transition-colors duration-300" onClick={() => setIsProfileOpen(false)}>Create Account</Link>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Hamburger Menu Button - NOW WITH FUNCTIONALITY */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-2xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger icon when menu is closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu - NOW FUNCTIONAL */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/[0.08] pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white/70 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white/70 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/tli-ai" 
                className="text-white/70 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI Assistant
              </Link>
              <Link 
                href="/calculators" 
                className="text-white/70 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Calculators
              </Link>
              <Link 
                href="/shop" 
                className="text-white/70 hover:text-white transition-colors duration-300 font-light py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}