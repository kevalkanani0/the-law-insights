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
      
      // Check if signUp is available
      if (!signUp) {
        alert('Authentication not available. Please try again.');
        return;
      }
      
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
      
      // Check if signUp is available
      if (!signUp) {
        alert('Authentication not available. Please try again.');
        return;
      }
      
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
        if (signUp) {
          await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });
        }
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-32 pb-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-thin text-white leading-tight tracking-tight mb-6">
            {needsVerification ? 'Verify Your Email' : 'Join The Law Insights'}
          </h1>
          <p className="text-white/70 font-light text-lg leading-relaxed">
            {needsVerification 
              ? 'Enter the verification code sent to your email' 
              : 'Create your account and get personalized legal guidance'
            }
          </p>
        </div>

        {/* Signup Form */}
        <div className="relative">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
            
            {!needsVerification ? (
              // Regular Signup Form
              <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Personal Information */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-8">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-light mb-3 text-lg">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                        placeholder="John"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white font-light mb-3 text-lg">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                {/* Account Details */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-8">Account Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white font-light mb-3 text-lg">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-light mb-3 text-lg">
                          Password
                        </label>
                        <input
                          type="password"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          required
                          className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white font-light mb-3 text-lg">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required
                          className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Profile Information */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-8">Your Profile</h3>
                  
                  {/* User Type */}
                  <div className="mb-8">
                    <label className="block text-white font-light mb-6 text-lg">
                      What describes you best?
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { value: 'student' as const, label: '🎓 Student', desc: 'Studying in Germany' },
                        { value: 'professional' as const, label: '💼 Professional', desc: 'Working or job-seeking' },
                        { value: 'founder' as const, label: '🚀 Founder', desc: 'Self-employed or starting business' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => handleInputChange('userType', type.value)}
                          className={`p-6 rounded-2xl text-left transition-all duration-500 ${
                            formData.userType === type.value 
                              ? 'backdrop-blur-md bg-yellow-400/20 border-2 border-yellow-400/30 hover:bg-yellow-400/30' 
                              : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] hover:bg-white/[0.08] hover:border-white/[0.25]'
                          }`}
                        >
                          <div className={`font-light text-lg ${formData.userType === type.value ? 'text-yellow-400' : 'text-white'}`}>
                            {type.label}
                          </div>
                          <div className="text-white/60 text-sm mt-2 font-light">{type.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* EU Status */}
                  <div className="mb-8">
                    <label className="block text-white font-light mb-6 text-lg">
                      Your Status
                    </label>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => handleInputChange('euStatus', 'eu')}
                        className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 flex-1 ${
                          formData.euStatus === 'eu' 
                            ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/30' 
                            : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
                        }`}
                      >
                        EU/EEA Citizen
                      </button>
                      <button
                        type="button"
                        onClick={() => handleInputChange('euStatus', 'non-eu')}
                        className={`px-8 py-4 rounded-2xl font-light transition-all duration-500 flex-1 ${
                          formData.euStatus === 'non-eu' 
                            ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/30' 
                            : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white'
                        }`}
                      >
                        Non-EU Citizen
                      </button>
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-white font-light mb-3 text-lg">
                      City (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light"
                      placeholder="Berlin, Munich, Hamburg..."
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                    className="mt-1 w-5 h-5 text-yellow-400 bg-white/[0.05] border-white/[0.15] rounded focus:ring-yellow-400/50 focus:ring-2"
                  />
                  <label className="text-white/70 font-light leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                      Privacy Policy
                    </a>. I understand this platform provides educational information only, not legal advice.
                  </label>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading || !formData.agreeToTerms}
                  className="w-full backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            ) : (
              // Email Verification Form
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl mb-6">📧</div>
                  <p className="text-white/70 font-light text-lg leading-relaxed mb-8">
                    We sent a verification code to <span className="text-yellow-400 font-light">{formData.email}</span>
                  </p>
                </div>

                <form onSubmit={handleVerification} className="space-y-6">
                  <div>
                    <label className="block text-white font-light mb-3 text-lg">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      placeholder="Enter 6-digit code"
                      className="w-full backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 text-center text-2xl tracking-widest font-light"
                      maxLength={6}
                      autoFocus
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading || verificationCode.length !== 6}
                    className="w-full backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isLoading ? 'Verifying...' : 'Verify Email'}
                  </button>
                </form>

                <div className="text-center">
                  <button
                    onClick={() => setNeedsVerification(false)}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-light"
                  >
                    ← Back to signup form
                  </button>
                </div>
              </div>
            )}
            
            {/* Login Link */}
            {!needsVerification && (
              <div className="mt-8 text-center">
                <div className="text-white/60 font-light">
                  Already have an account?{' '}
                  <a href="/login" className="text-yellow-400 hover:text-yellow-300 font-light transition-colors duration-300">
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