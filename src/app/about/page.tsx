'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-auto scroll-smooth">
      <Navigation />
      
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Ambient lighting effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      <div className="fixed bottom-20 left-1/2 w-96 h-96 bg-white/[0.01] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-32">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-thin text-white leading-tight tracking-tight mb-8">
            About The Law Insights
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light max-w-4xl mx-auto leading-relaxed">
            Empowering individuals and businesses in Germany with accessible legal information, 
            AI-powered assistance, and practical tools for navigating German law.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <div className="text-center mb-8">
                <div className="text-6xl mb-6">🎯</div>
                <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Our Mission</h2>
              </div>
              <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed text-center max-w-4xl mx-auto">
                We believe that understanding German law shouldn&apos;t be overwhelming or expensive. 
                Our platform bridges the gap between complex legal regulations and everyday people who need 
                clear, actionable guidance for work, business, and life in Germany.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Assistant */}
            <div className="group relative">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">🤖</div>
                <h3 className="text-2xl font-light text-white mb-4">AI Legal Assistant</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Get instant answers to German law questions with our AI-powered assistant. 
                  Available 24/7 to help with employment, business, and administrative matters.
                </p>
              </div>
            </div>

            {/* Calculators */}
            <div className="group relative">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">📊</div>
                <h3 className="text-2xl font-light text-white mb-4">Legal Calculators</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Calculate work hours compliance, tax estimates, and business requirements 
                  with our specialized tools designed for German regulations.
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="group relative">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:transform hover:scale-[1.02]">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="text-2xl font-light text-white mb-4">Legal Resources</h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Access curated guides, templates, and resources covering employment law, 
                  business formation, and essential legal procedures in Germany.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Serve Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12">Who We Serve</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Students */}
            <div className="text-center">
              <div className="relative">
                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                  <div className="text-6xl mb-6">🎓</div>
                  <h3 className="text-2xl font-light text-white mb-4">Students</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    International and domestic students navigating work regulations, 
                    visa requirements, and student employment laws in Germany.
                  </p>
                </div>
              </div>
            </div>

            {/* Professionals */}
            <div className="text-center">
              <div className="relative">
                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                  <div className="text-6xl mb-6">💼</div>
                  <h3 className="text-2xl font-light text-white mb-4">Professionals</h3>
                  <p className="text-white/70 font-light leading-relaxed">
                    Working professionals seeking clarity on employment rights, 
                    tax obligations, and workplace regulations in Germany.
                  </p>
                </div>
              </div>
            </div>

            {/* Entrepreneurs */}
            <div className="text-center">
              <div className="relative">
                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-light text-white mb-4">Entrepreneurs</h3>
                  <p className="text-white/70 font-light leading-relaxed">
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
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-light text-center text-white mb-12">Why Choose The Law Insights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-400/20 border border-green-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-green-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">Accessible & Free</h4>
                      <p className="text-white/70 font-light">Core features available at no cost, making legal information accessible to everyone.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-400/20 border border-blue-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-blue-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">AI-Powered</h4>
                      <p className="text-white/70 font-light">Advanced AI technology provides instant, relevant answers to your legal questions.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-400/20 border border-purple-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-purple-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">German-Focused</h4>
                      <p className="text-white/70 font-light">Specifically designed for German law and regulations, ensuring relevant and accurate guidance.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-400/20 border border-orange-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-orange-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">Practical Tools</h4>
                      <p className="text-white/70 font-light">Calculators and resources that provide actionable insights for real-world situations.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-400/20 border border-pink-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-pink-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">User-Friendly</h4>
                      <p className="text-white/70 font-light">Intuitive interface designed for users without legal background or technical expertise.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-teal-400/20 border border-teal-400/30 rounded-full flex items-center justify-center backdrop-blur-md">
                      <span className="text-teal-400 font-light">✓</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-light text-white mb-2">Always Updated</h4>
                      <p className="text-white/70 font-light">Content regularly updated to reflect the latest changes in German law and regulations.</p>
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
            <div className="backdrop-blur-xl bg-yellow-400/[0.03] border border-yellow-400/[0.15] rounded-3xl p-8 shadow-2xl hover:bg-yellow-400/[0.06] hover:border-yellow-400/[0.25] transition-all duration-700">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-4xl">⚠️</div>
                <div>
                  <h3 className="text-2xl font-light text-yellow-400 mb-4">Important Legal Disclaimer</h3>
                  <p className="text-yellow-300 font-light leading-relaxed mb-4">
                    <strong>The Law Insights provides educational information only, not legal advice.</strong> While we strive for accuracy, 
                    German law is complex and constantly evolving. Our AI assistant and resources are designed to help you understand 
                    general legal concepts and requirements.
                  </p>
                  <p className="text-yellow-300 font-light leading-relaxed">
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
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 md:p-12 shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/70 font-light mb-8 max-w-2xl mx-auto">
                Explore our AI assistant, try our calculators, and access the resources you need to navigate German law with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/tli-ai"
                  className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 shadow-lg">
                  Try AI Assistant
                </Link>
                <Link 
                  href="/calculators"
                  className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-2xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 shadow-lg">
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
            className="inline-flex items-center px-8 py-4 backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-2xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 shadow-lg">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}