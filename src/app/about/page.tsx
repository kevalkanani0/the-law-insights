import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (

    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>


      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8">
            About The Law Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Making German legal guidance accessible for everyone
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We&apos;re crafting our story, mission, and the team behind The Law Insights. 
              This page will include our journey, values, and commitment to helping 
              international students, expats, and founders in Germany.
            </p>
            
            {/* Back to Home Button */}
            <link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ← Back to Home
            </link>
          </div>
        </div>
      </div>
    </div>
  );
}