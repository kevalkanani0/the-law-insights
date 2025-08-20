// src/app/dashboard/page.tsx
'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Navigation from '@/components/Navigation';

export default function DashboardPage() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for the dashboard
  const mockSavedItems = [
    {
      id: '1',
      title: 'Student Work Hours Calculator Result',
      type: 'calculator',
      savedAt: '2025-01-15',
      data: { hoursPerWeek: 20, isCompliant: true }
    },
    {
      id: '2', 
      title: 'Tax Estimation for €35,000 salary',
      type: 'calculator',
      savedAt: '2025-01-14',
      data: { annualIncome: 35000, netIncome: 26450 }
    },
    {
      id: '3',
      title: 'Kleinunternehmer Eligibility Check',
      type: 'calculator',
      savedAt: '2025-01-13',
      data: { isEligible: true, currentYearRevenue: 18000 }
    }
  ];

  const mockChatHistory = [
    {
      id: '1',
      title: 'Working as a student in Germany',
      lastMessage: 'Can I work more than 20 hours during semester break?',
      timestamp: '2025-01-15 14:30',
      messageCount: 8
    },
    {
      id: '2',
      title: 'Business registration questions',
      lastMessage: 'What documents do I need for Gewerbeanmeldung?',
      timestamp: '2025-01-14 09:15',
      messageCount: 12
    },
    {
      id: '3',
      title: 'Tax class information',
      lastMessage: 'Should I choose tax class 1 or 3?',
      timestamp: '2025-01-13 16:45',
      messageCount: 6
    }
  ];

  const recentActivity = [
    { type: 'calculator', action: 'Used Work Hours Calculator', timestamp: '2 hours ago' },
    { type: 'chat', action: 'Asked about visa requirements', timestamp: '1 day ago' },
    { type: 'calculator', action: 'Saved tax estimation', timestamp: '2 days ago' },
    { type: 'profile', action: 'Updated profile information', timestamp: '3 days ago' }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">Please sign in to access your dashboard</p>
          <a href="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Welcome back, {user.firstName}!
          </h1>
          <p className="text-gray-300 text-lg">
            Your personal legal guidance dashboard
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-2 mb-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-2">
          {[
            { id: 'overview', label: 'Overview', icon: '📊' },
            { id: 'saved', label: 'Saved Items', icon: '💾' },
            { id: 'history', label: 'Chat History', icon: '💬' },
            { id: 'profile', label: 'Profile', icon: '👤' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">🧮</div>
                  <div className="text-2xl font-bold text-white">{mockSavedItems.length}</div>
                </div>
                <div className="text-gray-300">Saved Calculations</div>
              </div>
              
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">💬</div>
                  <div className="text-2xl font-bold text-white">{mockChatHistory.length}</div>
                </div>
                <div className="text-gray-300">AI Conversations</div>
              </div>
              
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">📅</div>
                  <div className="text-2xl font-bold text-white">15</div>
                </div>
                <div className="text-gray-300">Days Active</div>
              </div>
              
              <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">✅</div>
                  <div className="text-2xl font-bold text-white">87%</div>
                </div>
                <div className="text-gray-300">Compliance Score</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                    <div className="text-2xl">
                      {activity.type === 'calculator' && '🧮'}
                      {activity.type === 'chat' && '💬'}
                      {activity.type === 'profile' && '👤'}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{activity.action}</div>
                      <div className="text-gray-400 text-sm">{activity.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a 
                  href="/tli-ai"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-blue-500/30"
                >
                  <div className="text-2xl">🤖</div>
                  <div>
                    <div className="text-white font-semibold">Ask TLI AI</div>
                    <div className="text-gray-300 text-sm">Get instant legal guidance</div>
                  </div>
                </a>
                
                <a 
                  href="/calculators"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-green-500/30"
                >
                  <div className="text-2xl">📊</div>
                  <div>
                    <div className="text-white font-semibold">Use Calculators</div>
                    <div className="text-gray-300 text-sm">Calculate work hours & taxes</div>
                  </div>
                </a>
                
                <a 
                  href="/shop"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-orange-500/30"
                >
                  <div className="text-2xl">🛍️</div>
                  <div>
                    <div className="text-white font-semibold">Browse Shop</div>
                    <div className="text-gray-300 text-sm">Premium templates & guides</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Saved Items</h3>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Export All
              </button>
            </div>
            
            <div className="grid gap-4">
              {mockSavedItems.map((item) => (
                <div key={item.id} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <span>📅</span>
                          <span>{item.savedAt}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>🏷️</span>
                          <span className="capitalize">{item.type}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-sm text-gray-300">
                      {JSON.stringify(item.data, null, 2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Chat History</h3>
              <button className="bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                Clear All
              </button>
            </div>
            
            <div className="grid gap-4">
              {mockChatHistory.map((chat) => (
                <div key={chat.id} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2">{chat.title}</h4>
                      <p className="text-gray-300 mb-4">{chat.lastMessage}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <span>🕒</span>
                          <span>{chat.timestamp}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <span>💬</span>
                          <span>{chat.messageCount} messages</span>
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Profile Management</h3>
            
            {/* Profile Info */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Personal Information</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    defaultValue={user.firstName || ''}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    defaultValue={user.lastName || ''}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue={user.primaryEmailAddress?.emailAddress || ''}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    disabled
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">User Type</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="student">Student</option>
                    <option value="professional">Professional</option>
                    <option value="founder">Founder</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">EU Status</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="eu">EU/EEA Citizen</option>
                    <option value="non-eu">Non-EU Citizen</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">City</label>
                  <input
                    type="text"
                    placeholder="Berlin, Munich, Hamburg..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Preferences */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Preferences</h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Email Notifications</div>
                    <div className="text-gray-400 text-sm">Receive updates about new features and tips</div>
                  </div>
                  <button className="bg-blue-500 w-12 h-6 rounded-full relative">
                    <div className="bg-white w-5 h-5 rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Save Chat History</div>
                    <div className="text-gray-400 text-sm">Automatically save your AI conversations</div>
                  </div>
                  <button className="bg-blue-500 w-12 h-6 rounded-full relative">
                    <div className="bg-white w-5 h-5 rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Auto-save Calculations</div>
                    <div className="text-gray-400 text-sm">Automatically save calculator results</div>
                  </div>
                  <button className="bg-blue-500 w-12 h-6 rounded-full relative">
                    <div className="bg-white w-5 h-5 rounded-full absolute right-0.5 top-0.5"></div>
                  </button>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Language</label>
                  <select className="w-full md:w-1/3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="en">English</option>
                    <option value="de">Deutsch</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Account Actions</h4>
              
              <div className="space-y-4">
                <button className="w-full md:w-auto bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500/30 transition-all duration-300">
                  Export Account Data
                </button>
                
                <button className="w-full md:w-auto bg-red-500/20 border border-red-500/30 text-red-300 px-6 py-3 rounded-xl font-semibold hover:bg-red-500/30 transition-all duration-300 ml-0 md:ml-4">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}