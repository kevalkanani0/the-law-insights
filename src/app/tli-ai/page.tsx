'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function TLIAIPage() {
  const [messages, setMessages] = useState<Array<{id: string, role: string, content: string}>>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now().toString(), role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      const aiMessage = { id: Date.now().toString() + '1', role: 'assistant', content: data.message || 'Sorry, I had trouble responding. Please try again.' };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = { id: Date.now().toString() + '2', role: 'assistant', content: 'Sorry, I had trouble connecting. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-auto scroll-smooth">
      <Navigation />
      
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/[0.03] rounded-full blur-3xl"></div>
      
      {/* Main chat container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-6 min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white leading-tight tracking-tight mb-3 md:mb-4">
            The Law Insights AI
          </h1>
          <p className="text-white/70 font-light leading-relaxed text-base md:text-lg">
            Ask me anything about German law, work regulations, or business requirements
          </p>
        </div>

        {/* Chat messages - Expanded area */}
        <div className="flex-1 backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-4 md:p-6 lg:p-8 mb-4 md:mb-6 overflow-y-auto hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl min-h-[60vh] max-h-[70vh]">
          {messages.length === 0 ? (
            <div className="text-center text-white/60 flex flex-col justify-center h-full min-h-[400px]">
              <div className="text-5xl md:text-6xl mb-6">🤖</div>
              <p className="text-lg md:text-xl mb-8 font-light">Hi! I&apos;m The Law Insights AI. Ask me about:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm md:text-base">
                <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500">💼 Student work limits</div>
                <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500">🏢 Business registration</div>
                <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500">💰 Tax questions</div>
                <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500">📄 Visa requirements</div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] md:max-w-3xl rounded-2xl p-3 md:p-4 ${
                      message.role === 'user'
                        ? 'backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 font-light'
                        : 'backdrop-blur-md bg-white/[0.05] border border-white/[0.08] text-white font-light'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">{message.content}</div>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="backdrop-blur-md bg-white/[0.05] border border-white/[0.08] rounded-2xl p-3 md:p-4">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="animate-spin w-4 h-4 md:w-5 md:h-5 border-2 border-yellow-400/50 border-t-yellow-400 rounded-full"></div>
                      <span className="text-white/70 font-light text-sm md:text-base">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="relative sticky bottom-0 bg-black/20 backdrop-blur-sm rounded-2xl p-2">
          <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-2xl p-3 md:p-4 hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-700 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 md:gap-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about German law, taxes, work regulations..."
                className="flex-1 backdrop-blur-md bg-white/[0.05] border border-white/[0.15] rounded-xl px-3 md:px-4 py-3 md:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all duration-300 font-light text-sm md:text-base"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="backdrop-blur-md bg-yellow-400/20 border border-yellow-400/30 text-yellow-400 px-4 md:px-6 py-3 rounded-xl font-light hover:bg-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base min-w-[70px] md:min-w-[80px]"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}