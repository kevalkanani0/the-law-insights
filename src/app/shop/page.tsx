import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      
      {/* Background System */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 pt-32">
        {/* Header */}
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-7xl font-thin text-white leading-tight tracking-tight mb-8">
            Premium Shop
          </h1>
          <p className="text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Curated templates, guides, and starter kits for your German journey
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02] text-center">
          <div className="text-6xl mb-8">🛍️</div>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-8">Coming Soon</h2>
          <p className="text-white/70 font-light leading-relaxed text-lg mb-12">
            We&apos;re preparing premium templates, legal document starters, 
            budgeting tools, and comprehensive guides. Everything you need 
            to navigate German bureaucracy with confidence.
          </p>

          {/* Preview Items */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">The Law Bag</h3>
              <p className="text-white/60 font-light">Premium briefcase for professionals & students</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">Legal Templates</h3>
              <p className="text-white/60 font-light">Invoice templates, contracts, registration forms</p>
            </div>
            
            <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-500">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl md:text-2xl font-light text-white mb-3">Starter Kits</h3>
              <p className="text-white/60 font-light">Complete guides for students, professionals, founders</p>
            </div>
          </div>
          
          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-flex items-center backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 shadow-lg hover:shadow-xl">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}