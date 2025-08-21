import Navigation from '@/components/Navigation';
import Link from 'next/link';
export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 via-blue-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Premium Shop
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated templates, guides, and starter kits for your German journey
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-3xl blur"></div>
          <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl text-center">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="text-3xl font-bold text-white mb-6">Coming Soon</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We&apos;re preparing premium templates, legal document starters, 
              budgeting tools, and comprehensive guides. Everything you need 
              to navigate German bureaucracy with confidence.
            </p>

            {/* Preview Items */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-semibold text-white mb-2">The Law Bag</h3>
                <p className="text-gray-400 text-sm">Premium briefcase for professionals & students</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="font-semibold text-white mb-2">Legal Templates</h3>
                <p className="text-gray-400 text-sm">Invoice templates, contracts, registration forms</p>
              </div>
              
              <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-white mb-2">Starter Kits</h3>
                <p className="text-gray-400 text-sm">Complete guides for students, professionals, founders</p>
              </div>
            </div>
            
            {/* Back to Home Button */}
            <link 
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              ← Back to Home
            </link>
          </div>
        </div>
      </div>
    </div>
  );
}