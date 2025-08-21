'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useSignIn } from '@clerk/nextjs';
import Link from 'next/link';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

const { signIn, setActive } = useSignIn();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    console.log('Attempting login with:', email);
    
    // Check if signIn is available
    if (!signIn) {
      alert('Authentication not available. Please try again.');
      return;
    }
    
    // Real Clerk authentication
    const result = await signIn.create({
      identifier: email,
      password,
    });

    if (result.status === 'complete') {
      await setActive({ session: result.createdSessionId });
      alert('Login successful!');
      window.location.href = '/'; // Redirect to home
    } else {
      alert('Login requires additional steps (email verification, etc.)');
    }
    
  } catch (error: unknown) {
    console.error('Login error:', error);

    // Handle Clerk-specific errors with proper type checking
    if (error && typeof error === 'object' && 'errors' in error) {
      const clerkError = error as { errors: Array<{ message: string }> };
      if (clerkError.errors && clerkError.errors[0]) {
        alert('Login failed: ' + clerkError.errors[0].message);
      } else {
        alert('Login failed: Invalid email or password.');
      }
    } else if (error instanceof Error) {
      alert('Login failed: ' + error.message);
    } else {
      alert('Login failed: Invalid email or password.');
    }
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-md mx-auto px-6 pt-32 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Welcome Back
          </h1>
          <p className="text-gray-300">
            Sign in to access your legal insights dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="••••••••"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
            </form>
            
            {/* Links */}
            <div className="mt-6 text-center space-y-3">
              <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">
                Forgot your password?
              </a>
              <div className="text-gray-400 text-sm">
                Don&apos;t have an account?{' '}
                <a href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}