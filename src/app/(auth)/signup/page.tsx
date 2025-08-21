'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { useSignUp } from '@clerk/nextjs';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student' as 'student' | 'professional' | 'founder',
    euStatus: 'eu' as 'eu' | 'non-eu',
    city: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const { signUp, setActive } = useSignUp();
  
  const handleInputChange = <K extends keyof typeof formData>(field: K, value: typeof formData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVerification = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      console.log('✅ Verifying with code:', verificationCode);
      
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        alert('Email verified! You are now logged in.');
        window.location.href = '/';
      } else {
        alert('Verification incomplete. Please try again.');
      }
    } catch (error: unknown) {
      console.error('❌ Verification error:', error);
      if (error && typeof error === 'object' && 'errors' in error) {
        const clerkError = error as { errors: Array<{ message: string }> };
        if (clerkError.errors && clerkError.errors[0]) {
          alert('Verification failed: ' + clerkError.errors[0].message);
        } else {
          alert('Verification failed. Please check your code.');
        }
      } else {
        alert('Verification failed. Please check your code.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      setIsLoading(false);
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions.');
      setIsLoading(false);
      return;
    }
    
    try {
      console.log('✅ Creating account for:', formData.email);
      
      // Create account with Clerk (simplified - no firstName/lastName for now)
      const result = await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
      });

      console.log('✅ Signup result:', result);
      console.log('✅ Status:', result.status);

      // Check if email verification is needed
      if (result.status === 'missing_requirements') {
        console.log('📧 Email verification needed');
        await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        setNeedsVerification(true);  // Show verification form
        alert('Account created! Please check your email for a verification code and enter it below.');
      } else if (result.status === 'complete') {
        console.log('🎉 Account complete, setting session');
        await setActive({ session: result.createdSessionId });
        alert('Account created successfully! You are now logged in.');
        window.location.href = '/';
      } else {
        console.log('🤔 Unexpected status:', result.status);
        alert('Account created but needs additional steps. Status: ' + result.status);
      }
      
    } catch (error: unknown) {
      // Handle signup errors: show specific Clerk error messages if available, otherwise show a generic error.
      if (process.env.NODE_ENV === 'development') {
        console.error('❌ Signup error:', error);
      }
      console.error('❌ Signup error:', error);
      
      if (error && typeof error === 'object' && 'errors' in error) {
        const clerkError = error as { errors: Array<{ message: string }> };
        if (clerkError.errors && clerkError.errors[0]) {
          alert('Signup failed: ' + clerkError.errors[0].message);
        } else {
          alert('Signup failed: Please try again.');
        }
      } else if (error instanceof Error) {
        alert('Signup failed: ' + error.message);
      } else {
        alert('Signup failed: Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {needsVerification ? 'Verify Your Email' : 'Join The Law Insights'}
          </h1>
          <p className="text-gray-300">
            {needsVerification 
              ? 'Enter the verification code sent to your email' 
              : 'Create your account and get personalized legal guidance'
            }
          </p>
        </div>

        {/* Signup Form */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            
            {!needsVerification ? (
              // Regular Signup Form
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Account Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Your Profile</h3>
                  
                  {/* User Type */}
                  <div className="mb-4">
                    <label className="block text-white font-medium mb-3">
                      What describes you best?
                    </label>
                    <div className="grid md:grid-cols-3 gap-3">
                      {[
                        { value: 'student' as const, label: '🎓 Student', desc: 'Studying in Germany' },
                        { value: 'professional' as const, label: '💼 Professional', desc: 'Working or job-seeking' },
                        { value: 'founder' as const, label: '🚀 Founder', desc: 'Self-employed or starting business' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleInputChange('userType', type.value)}
                          className={`p-4 rounded-xl text-left transition-all ${
                            formData.userType === type.value 
                              ? 'bg-purple-500/30 border-2 border-purple-400' 
                              : 'bg-white/5 border border-white/20 hover:bg-white/10'
                          }`}
                        >
                          <div className="font-semibold text-white">{type.label}</div>
                          <div className="text-gray-300 text-sm mt-1">{type.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* EU Status */}
                  <div className="mb-4">
                    <label className="block text-white font-medium mb-3">
                      Your Status
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('euStatus', 'eu')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all flex-1 ${
                          formData.euStatus === 'eu' 
                            ? 'bg-purple-500 text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        EU/EEA Citizen
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange('euStatus', 'non-eu')}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all flex-1 ${
                          formData.euStatus === 'non-eu' 
                            ? 'bg-purple-500 text-white' 
                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                        }`}
                      >
                        Non-EU Citizen
                      </button>
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-white font-medium mb-2">
                      City (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      placeholder="Berlin, Munich, Hamburg..."
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-400"
                  />
                  <label className="text-gray-300 text-sm">
                    I agree to the{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-purple-400 hover:text-purple-300">
                      Privacy Policy
                    </a>. I understand this platform provides educational information only, not legal advice.
                  </label>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !formData.agreeToTerms}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            ) : (
              // Email Verification Form
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">📧</div>
                  <p className="text-gray-300 mb-6">
                    We sent a verification code to <span className="text-purple-400 font-semibold">{formData.email}</span>
                  </p>
                </div>

                <form onSubmit={handleVerification} className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 text-center text-2xl tracking-widest"
                      maxLength={6}
                      autoFocus
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading || verificationCode.length !== 6}
                    className="w-full bg-gradient-to-r from-green-500 to-blue-500 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? 'Verifying...' : 'Verify Email'}
                  </button>
                </form>

                <div className="text-center">
                  <button
                    onClick={() => setNeedsVerification(false)}
                    className="text-purple-400 hover:text-purple-300 text-sm"
                  >
                    ← Back to signup form
                  </button>
                </div>
              </div>
            )}
            
            {/* Login Link */}
            {!needsVerification && (
              <div className="mt-6 text-center">
                <div className="text-gray-400 text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                    Sign in
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}