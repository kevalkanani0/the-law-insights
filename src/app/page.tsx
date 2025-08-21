import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navigation />
      
      {/* Apple-style background with subtle gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Subtle floating elements for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 pt-32">
        
        {/* Hero Section - Ultra clean */}
        <div className="text-center mb-32">
          <h1 className="text-7xl md:text-8xl font-thin text-white mb-8 leading-tight tracking-tight">
            The Law Insights
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-12"></div>
          <p className="text-2xl md:text-3xl text-white/80 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
            Navigate work, taxes, and side-hustles in Germany with confidence.
          </p>
          <p className="text-xl text-yellow-400/90 mt-6 font-light">
            For international students, expats, and young founders.
          </p>
        </div>

        {/* Language Toggle - Glass morphism
        <div className="flex justify-center mb-32">
          <div className="backdrop-blur-xl bg-white/[0.05] border border-white/[0.08] rounded-2xl p-1 shadow-2xl">
            <button className="backdrop-blur-md bg-white/10 text-white px-10 py-4 rounded-xl font-medium transition-all duration-500 shadow-lg">
              English
            </button>
            <button className="px-10 py-4 text-white/60 font-medium hover:text-white/80 transition-all duration-300">
              Deutsch
            </button>
          </div>
        </div>
 */}
        {/* User Type Cards - Glass morphism style */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-thin text-center text-white mb-6">
            What describes you?
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Student Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
                <div className="text-6xl mb-8 text-center opacity-80">🎓</div>
                <h3 className="text-2xl font-light text-white mb-6 text-center">Student</h3>
                <p className="text-white/70 leading-relaxed text-center mb-8 font-light">
                  Work limits, visa rules, and side-hustle basics for your academic journey
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-yellow-400/90 font-light group-hover:text-yellow-400 transition-colors text-lg">
                    Explore →
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
                <div className="text-6xl mb-8 text-center opacity-80">💼</div>
                <h3 className="text-2xl font-light text-white mb-6 text-center">Professional</h3>
                <p className="text-white/70 leading-relaxed text-center mb-8 font-light">
                  Tax classes, side businesses, and employment law for your career
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-yellow-400/90 font-light group-hover:text-yellow-400 transition-colors text-lg">
                    Explore →
                  </span>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className="group cursor-pointer">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
                <div className="text-6xl mb-8 text-center opacity-80">🚀</div>
                <h3 className="text-2xl font-light text-white mb-6 text-center">Founder</h3>
                <p className="text-white/70 leading-relaxed text-center mb-8 font-light">
                  Business registration, VAT, and startup essentials for your venture
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center text-yellow-400/90 font-light group-hover:text-yellow-400 transition-colors text-lg">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions - Glass cards */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-thin text-center text-white mb-6">
            Get Started Today
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-20"></div>
          
          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* AI Assistant */}
            <Link href="/tli-ai" className="group">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
                <div className="text-6xl mb-8 text-center opacity-80">🤖</div>
                <h3 className="text-3xl font-light text-white mb-6 text-center">Ask TLI AI</h3>
                <p className="text-white/70 leading-relaxed text-center mb-10 font-light text-lg">
                  Get instant answers to your German law questions with our AI assistant
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 text-lg">
                    Try Now →
                  </span>
                </div>
              </div>
            </Link>

            {/* Calculators */}
            <Link href="/calculators" className="group">
              <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-12 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:transform hover:scale-[1.02]">
                <div className="text-6xl mb-8 text-center opacity-80">📊</div>
                <h3 className="text-3xl font-light text-white mb-6 text-center">Calculators</h3>
                <p className="text-white/70 leading-relaxed text-center mb-10 font-light text-lg">
                  Calculate work hours, tax estimates, and business requirements
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-8 py-4 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 text-lg">
                    Calculate →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Features Grid - Large glass panel */}
        <div className="mb-32">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-16 shadow-2xl">
            <h3 className="text-4xl font-thin text-white mb-16 text-center">
              What We Offer
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="text-center group">
                <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/[0.08] transition-all duration-500">
                  <span className="text-3xl opacity-80">🤖</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">AI Assistant</h4>
                <p className="text-white/60 font-light">24/7 legal guidance</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/[0.08] transition-all duration-500">
                  <span className="text-3xl opacity-80">📊</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">Smart Calculators</h4>
                <p className="text-white/60 font-light">Work hours & tax estimates</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/[0.08] transition-all duration-500">
                  <span className="text-3xl opacity-80">📚</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">Legal Guides</h4>
                <p className="text-white/60 font-light">Comprehensive resources</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/[0.08] transition-all duration-500">
                  <span className="text-3xl opacity-80">🛍️</span>
                </div>
                <h4 className="font-light text-white mb-3 text-lg">Premium Shop</h4>
                <p className="text-white/60 font-light">Templates & starter kits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Glass panels */}
        <div className="mb-32">
          <h2 className="text-4xl md:text-5xl font-thin text-center text-white mb-6">
            Why The Law Insights?
          </h2>
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 text-center shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl opacity-80">🎯</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-6">German-Focused</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Specifically designed for German law and regulations, ensuring relevant and accurate guidance
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 text-center shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl opacity-80">🆓</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-6">Free & Accessible</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Core features available at no cost, making legal information accessible to everyone
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-10 text-center shadow-2xl hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700">
              <div className="w-20 h-20 backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl opacity-80">🔄</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-6">Always Updated</h3>
              <p className="text-white/70 leading-relaxed font-light">
                Content regularly updated to reflect the latest changes in German law and regulations
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - Hero glass panel */}
        <div className="text-center mb-20">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-16 max-w-5xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-thin text-white mb-8">Ready to Get Started?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Join thousands who trust The Law Insights for their German legal guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/signup"
                className="inline-flex items-center px-10 py-5 backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 rounded-2xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 text-lg">
                Create Free Account
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center px-10 py-5 backdrop-blur-md bg-white/[0.05] border border-white/[0.15] text-white/80 rounded-2xl font-light hover:bg-white/[0.08] hover:border-white/[0.25] hover:text-white transition-all duration-500 text-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer - Subtle glass panel */}
        <div className="max-w-5xl mx-auto">
          <div className="backdrop-blur-xl bg-yellow-400/[0.02] border border-yellow-400/[0.08] rounded-3xl p-10 shadow-2xl">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 text-3xl text-yellow-400/80">⚠️</div>
              <div>
                <h3 className="text-xl font-light text-yellow-400/90 mb-4">Educational Information Only</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  The Law Insights provides educational information only, not legal advice. While we strive for accuracy, 
                  always consult with a qualified German lawyer for specific legal situations and important decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}