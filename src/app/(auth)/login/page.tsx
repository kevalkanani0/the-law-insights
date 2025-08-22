'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useSignIn } from '@clerk/nextjs';

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      
      {/* Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-md mx-auto px-6 pt-32 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-thin text-white leading-tight tracking-tight mb-4">
            Welcome Back
          </h1>
          <p className="text-white/70 font-light">
            Sign in to access your legal insights dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-white font-light mb-3">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-white font-light mb-3">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300"
                placeholder="••••••••"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          {/* Links */}
          <div className="mt-8 text-center space-y-4">
            <a href="#" className="block text-white/60 hover:text-white font-light text-sm transition-colors duration-300">
              Forgot your password?
            </a>
            <div className="text-white/60 font-light text-sm">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-yellow-400 hover:text-yellow-300 font-light transition-colors duration-300">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}