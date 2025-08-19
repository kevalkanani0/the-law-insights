'use client';

import { useState } from 'react';
import { useUser, SignOutButton } from '@clerk/nextjs';

export default function Navigation() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Law Insights
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-white/80 hover:text-white transition-colors font-medium">
              About
            </a>
            <a href="/tli-ai" className="text-white/80 hover:text-white transition-colors font-medium">
              AI Assistant
            </a>
            <a href="/calculators" className="text-white/80 hover:text-white transition-colors font-medium">
              Calculators
            </a>
            <a href="/shop" className="text-white/80 hover:text-white transition-colors font-medium">
              Shop
            </a>
            
            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>
                  {isSignedIn ? `Hi, ${user.firstName || 'User'}!` : 'Profile'}
                </span>
                <svg className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-64 backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                  {isSignedIn ? (
                    // Logged in user menu
                    <div className="py-2">
                      {/* User Info */}
                      <div className="px-4 py-3 border-b border-white/10">
                        <div className="text-white font-semibold">
                          {user.firstName} {user.lastName}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {user.primaryEmailAddress?.emailAddress}
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-2">
                        <a 
                          href="/dashboard" 
                          className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                          </svg>
                          Dashboard
                        </a>
                        
                        <a 
                          href="/profile" 
                          className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Settings
                        </a>
                        
                        <a 
                          href="/chat-history" 
                          className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          Chat History
                        </a>
                      </div>
                      
                      {/* Sign Out */}
                      <div className="border-t border-white/10 pt-2">
                        <SignOutButton>
                          <button 
                            className="flex items-center w-full px-4 py-3 text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors"
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
                      <a 
                        href="/login" 
                        className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Sign In
                      </a>
                      <a 
                        href="/signup" 
                        className="flex items-center px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Create Account
                      </a>
                      <div className="border-t border-white/10 mt-2 pt-2">
                        <div className="px-4 py-2 text-gray-400 text-xs">
                          Coming Soon: Dashboard, Settings, Chat History
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-xl font-semibold text-sm"
              >
                {isSignedIn ? `Hi, ${user.firstName}!` : 'Profile'}
              </button>
              
              {/* Mobile Dropdown - Same content but simplified */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-xl bg-black/80 border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                  {isSignedIn ? (
                    <div className="py-2">
                      <div className="px-4 py-2 border-b border-white/10">
                        <div className="text-white text-sm font-semibold">{user.firstName}</div>
                      </div>
                      <a href="/dashboard" className="block px-4 py-2 text-white/80 hover:text-white text-sm">Dashboard</a>
                      <SignOutButton>
                        <button className="block w-full text-left px-4 py-2 text-red-400 text-sm">Sign Out</button>
                      </SignOutButton>
                    </div>
                  ) : (
                    <div className="py-2">
                      <a href="/login" className="block px-4 py-2 text-white/80 hover:text-white text-sm">Sign In</a>
                      <a href="/signup" className="block px-4 py-2 text-white/80 hover:text-white text-sm">Create Account</a>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}