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

        {/* Coming Soon - Premium glass design */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Coming Soon
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  🤖
                </div>
                <div>
                  <div className="font-semibold text-white">TLI AI Assistant</div>
                  <div className="text-gray-400 text-sm">Instant legal guidance</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  🛍️
                </div>
                <div>
                  <div className="font-semibold text-white">Premium Shop</div>
                  <div className="text-gray-400 text-sm">Templates and starter kits</div>
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
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  📚
                </div>
                <div>
                  <div className="font-semibold text-white">Legal Guides</div>
                  <div className="text-gray-400 text-sm">Comprehensive resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}