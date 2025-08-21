import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 leading-tight">
            The Law Insights
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate work, taxes, and side-hustles in Germany with confidence.
            <br />
            <span className="text-blue-400">For international students, expats, and young founders.</span>
          </p>
        </div>

        {/* Language Toggle - Floating glass style */}
        <div className="flex justify-center mb-16">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-2 shadow-2xl">
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
              English
            </button>
            <button className="px-6 py-3 text-white/80 font-semibold hover:text-white transition-all duration-300">
              Deutsch
            </button>
          </div>
        </div>

        {/* User Type Cards - 3D Glass Morphism */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">
            What describes you?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl cursor-pointer">
                <div className="text-6xl mb-6">🎓</div>
                <h3 className="text-2xl font-bold text-white mb-4">Student</h3>
                <p className="text-gray-300 leading-relaxed">
                  Work limits, visa rules, and side-hustle basics for your academic journey
                </p>
                <div className="mt-6 inline-flex items-center text-blue-400 font-semibold">
                  Explore → 
                </div>
              </div>
            </div>

            {/* Professional Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl cursor-pointer">
                <div className="text-6xl mb-6">💼</div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <p className="text-gray-300 leading-relaxed">
                  Tax classes, side businesses, and employment law for your career
                </p>
                <div className="mt-6 inline-flex items-center text-purple-400 font-semibold">
                  Explore →
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl cursor-pointer">
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-4">Founder</h3>
                <p className="text-gray-300 leading-relaxed">
                  Business registration, VAT, and startup essentials for your venture
                </p>
                <div className="mt-6 inline-flex items-center text-orange-400 font-semibold">
                  Explore →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">
            Get Started Today
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Assistant Action */}
            <Link href="/tli-ai" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">Ask TLI AI</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Get instant answers to your German law questions with our AI assistant
                </p>
                <div className="inline-flex items-center text-green-400 font-semibold">
                  Try Now →
                </div>
              </div>
            </Link>

            {/* Calculators Action */}
            <Link href="/calculators" className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/15 transition-all duration-500 shadow-2xl">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold text-white mb-4">Calculators</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Calculate work hours, tax estimates, and business requirements
                </p>
                <div className="inline-flex items-center text-purple-400 font-semibold">
                  Calculate →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <div className="font-semibold text-white">AI Assistant</div>
                  <div className="text-gray-400 text-sm">24/7 legal guidance</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  📊
                </div>
                <div>
                  <div className="font-semibold text-white">Smart Calculators</div>
                  <div className="text-gray-400 text-sm">Work hours & tax estimates</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  📚
                </div>
                <div>
                  <div className="font-semibold text-white">Legal Guides</div>
                  <div className="text-gray-400 text-sm">Comprehensive resources</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  🛍️
                </div>
                <div>
                  <div className="font-semibold text-white">Premium Shop</div>
                  <div className="text-gray-400 text-sm">Templates & starter kits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why The Law Insights?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">German-Focused</h3>
                <p className="text-gray-300 leading-relaxed">
                  Specifically designed for German law and regulations, ensuring relevant and accurate guidance
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl mb-6">🆓</div>
                <h3 className="text-xl font-bold text-white mb-4">Free & Accessible</h3>
                <p className="text-gray-300 leading-relaxed">
                  Core features available at no cost, making legal information accessible to everyone
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-3xl blur"></div>
              <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl mb-6">🔄</div>
                <h3 className="text-xl font-bold text-white mb-4">Always Updated</h3>
                <p className="text-gray-300 leading-relaxed">
                  Content regularly updated to reflect the latest changes in German law and regulations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands who trust The Law Insights for their German legal guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/signup"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                  Create Free Account
                </Link>
                <Link 
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg border border-white/20">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Important Disclaimer */}
        <div className="mt-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-3xl blur"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-yellow-500/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-3xl">⚠️</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-300 mb-4">Educational Information Only</h3>
                  <p className="text-yellow-100 leading-relaxed">
                    The Law Insights provides educational information only, not legal advice. While we strive for accuracy, 
                    always consult with a qualified German lawyer for specific legal situations and important decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}