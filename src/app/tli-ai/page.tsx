'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main chat container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-8 h-screen flex flex-col">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            The Law Insights AI
          </h1>
          <p className="text-gray-300">
            Ask me anything about German law, work regulations, or business requirements
          </p>
        </div>

        {/* Chat messages */}
        <div className="flex-1 backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-6 mb-6 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              <div className="text-6xl mb-4">🤖</div>
              <p className="text-lg mb-8">Hi! I'm The Law Insights AI. Ask me about:</p>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-sm">
                <div className="bg-white/5 rounded-lg p-3">💼 Student work limits</div>
                <div className="bg-white/5 rounded-lg p-3">🏢 Business registration</div>
                <div className="bg-white/5 rounded-lg p-3">💰 Tax questions</div>
                <div className="bg-white/5 rounded-lg p-3">📄 Visa requirements</div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-3xl rounded-2xl p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-white/10 border border-white/20 text-white'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/20 rounded-2xl p-4">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full"></div>
                      <span className="text-gray-300">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-4">
            <div className="flex items-center space-x-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about German law, taxes, work regulations..."
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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