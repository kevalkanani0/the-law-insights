'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-32">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-8">
            About The Law Insights
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Empowering individuals and businesses in Germany with accessible legal information, 
            AI-powered assistance, and practical tools for navigating German law.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">🎯</div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                We believe that understanding German law shouldn&apos;t be overwhelming or expensive. 
                Our platform bridges the gap between complex legal regulations and everyday people who need 
                clear, actionable guidance for work, business, and life in Germany.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Assistant */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Legal Assistant</h3>
                <p className="text-gray-300 leading-relaxed">
                  Get instant answers to German law questions with our AI-powered assistant. 
                  Available 24/7 to help with employment, business, and administrative matters.
                </p>
              </div>
            </div>

            {/* Calculators */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Legal Calculators</h3>
                <p className="text-gray-300 leading-relaxed">
                  Calculate work hours compliance, tax estimates, and business requirements 
                  with our specialized tools designed for German regulations.
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="text-2xl font-bold text-white mb-4">Legal Resources</h3>
                <p className="text-gray-300 leading-relaxed">
                  Access curated guides, templates, and resources covering employment law, 
                  business formation, and essential legal procedures in Germany.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Who We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur"></div>
                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="text-6xl mb-6">🎓</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Students</h3>
                  <p className="text-gray-300 leading-relaxed">
                    International and domestic students navigating work regulations, 
                    visa requirements, and student employment laws in Germany.
                  </p>
                </div>
              </div>
            </div>

            {/* Professionals */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur"></div>
                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="text-6xl mb-6">💼</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Professionals</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Working professionals seeking clarity on employment rights, 
                    tax obligations, and workplace regulations in Germany.
                  </p>
                </div>
              </div>
            </div>

            {/* Entrepreneurs */}
            <div className="text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl blur"></div>
                <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Entrepreneurs</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Business founders and freelancers understanding German business law, 
                    registration requirements, and compliance obligations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Why Choose The Law Insights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Accessible & Free</h4>
                      <p className="text-gray-300">Core features available at no cost, making legal information accessible to everyone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">AI-Powered</h4>
                      <p className="text-gray-300">Advanced AI technology provides instant, relevant answers to your legal questions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">German-Focused</h4>
                      <p className="text-gray-300">Specifically designed for German law and regulations, ensuring relevant and accurate guidance.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Practical Tools</h4>
                      <p className="text-gray-300">Calculators and resources that provide actionable insights for real-world situations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">User-Friendly</h4>
                      <p className="text-gray-300">Intuitive interface designed for users without legal background or technical expertise.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Always Updated</h4>
                      <p className="text-gray-300">Content regularly updated to reflect the latest changes in German law and regulations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-yellow-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-4xl">⚠️</div>
                <div>
                  <h3 className="text-2xl font-bold text-yellow-300 mb-4">Important Legal Disclaimer</h3>
                  <p className="text-yellow-100 leading-relaxed mb-4">
                    <strong>The Law Insights provides educational information only, not legal advice.</strong> While we strive for accuracy, 
                    German law is complex and constantly evolving. Our AI assistant and resources are designed to help you understand 
                    general legal concepts and requirements.
                  </p>
                  <p className="text-yellow-100 leading-relaxed">
                    For specific legal situations, important decisions, or complex matters, always consult with a qualified German lawyer 
                    or legal professional. We are not liable for decisions made based on information from our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore our AI assistant, try our calculators, and access the resources you need to navigate German law with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tli-ai"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Try AI Assistant
                </Link>
                <Link 
                  href="/calculators"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Calculators
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}