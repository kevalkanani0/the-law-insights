// src/app/profile/page.tsx
'use client';

import { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    userType: 'student',
    euStatus: 'eu',
    city: '',
    preferences: {
      emailNotifications: true,
      saveChatHistory: true,
      autoSaveCalculations: true,
      language: 'en'
    }
  });

  if (!user) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-gray-400 mb-6">Please sign in to access your profile</p>
          <a href="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Sign In
          </a>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    // TODO: Implement actual save functionality
    console.log('Saving profile data:', formData);
    setIsEditing(false);
    // Show success message
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black"></div>
      
      {/* Animated background orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Profile Settings
          </h1>
          <p className="text-gray-300 text-lg">
            Manage your account information and preferences
          </p>
        </div>

        {/* Profile Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          
          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                {user.firstName?.[0]}{user.lastName?.[0]}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{user.firstName} {user.lastName}</h2>
                <p className="text-gray-400">{user.primaryEmailAddress?.emailAddress}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm">Active Account</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                isEditing 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105'
              }`}
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </button>
          </div>

          {/* Profile Form */}
          <div className="space-y-8">
            
            {/* Personal Information */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user.primaryEmailAddress?.emailAddress || ''}
                    disabled
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 opacity-60 cursor-not-allowed"
                  />
                  <p className="text-gray-400 text-sm mt-1">Email cannot be changed here. Use Clerk settings.</p>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">User Type</label>
                  <select 
                    value={formData.userType}
                    onChange={(e) => setFormData({...formData, userType: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    <option value="student">🎓 Student</option>
                    <option value="professional">💼 Professional</option>
                    <option value="founder">🚀 Founder</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">EU Status</label>
                  <select 
                    value={formData.euStatus}
                    onChange={(e) => setFormData({...formData, euStatus: e.target.value})}
                    disabled={!isEditing}
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    <option value="eu">🇪🇺 EU/EEA Citizen</option>
                    <option value="non-eu">🌍 Non-EU Citizen</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    disabled={!isEditing}
                    placeholder="Berlin, Munich, Hamburg..."
                    className={`w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Preferences</h3>
              <div className="space-y-6">
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Email Notifications</div>
                    <div className="text-gray-400 text-sm">Receive updates about new features and tips</div>
                  </div>
                  <button 
                    onClick={() => isEditing && setFormData({
                      ...formData, 
                      preferences: {
                        ...formData.preferences, 
                        emailNotifications: !formData.preferences.emailNotifications
                      }
                    })}
                    disabled={!isEditing}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                      formData.preferences.emailNotifications ? 'bg-blue-500' : 'bg-gray-600'
                    } ${!isEditing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`bg-white w-5 h-5 rounded-full absolute top-0.5 transition-all duration-300 ${
                      formData.preferences.emailNotifications ? 'right-0.5' : 'left-0.5'
                    }`}></div>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Save Chat History</div>
                    <div className="text-gray-400 text-sm">Automatically save your AI conversations</div>
                  </div>
                  <button 
                    onClick={() => isEditing && setFormData({
                      ...formData, 
                      preferences: {
                        ...formData.preferences, 
                        saveChatHistory: !formData.preferences.saveChatHistory
                      }
                    })}
                    disabled={!isEditing}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                      formData.preferences.saveChatHistory ? 'bg-blue-500' : 'bg-gray-600'
                    } ${!isEditing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`bg-white w-5 h-5 rounded-full absolute top-0.5 transition-all duration-300 ${
                      formData.preferences.saveChatHistory ? 'right-0.5' : 'left-0.5'
                    }`}></div>
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">Auto-save Calculations</div>
                    <div className="text-gray-400 text-sm">Automatically save calculator results</div>
                  </div>
                  <button 
                    onClick={() => isEditing && setFormData({
                      ...formData, 
                      preferences: {
                        ...formData.preferences, 
                        autoSaveCalculations: !formData.preferences.autoSaveCalculations
                      }
                    })}
                    disabled={!isEditing}
                    className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                      formData.preferences.autoSaveCalculations ? 'bg-blue-500' : 'bg-gray-600'
                    } ${!isEditing ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className={`bg-white w-5 h-5 rounded-full absolute top-0.5 transition-all duration-300 ${
                      formData.preferences.autoSaveCalculations ? 'right-0.5' : 'left-0.5'
                    }`}></div>
                  </button>
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Language</label>
                  <select 
                    value={formData.preferences.language}
                    onChange={(e) => setFormData({
                      ...formData, 
                      preferences: {...formData.preferences, language: e.target.value}
                    })}
                    disabled={!isEditing}
                    className={`w-full md:w-1/3 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                      !isEditing ? 'opacity-60 cursor-not-allowed' : ''
                    }`}
                  >
                    <option value="en">🇺🇸 English</option>
                    <option value="de">🇩🇪 Deutsch</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-3 bg-gray-600/50 rounded-xl font-semibold hover:bg-gray-600/70 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
                >
                  Save Changes
                </button>
              </div>
            )}

            {/* Account Stats */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Account Statistics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-white font-semibold">Member Since</div>
                  <div className="text-gray-400 text-sm">
                    {new Date(user.createdAt || '').toLocaleDateString()}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">🕐</div>
                  <div className="text-white font-semibold">Last Active</div>
                  <div className="text-gray-400 text-sm">
                    {new Date(user.lastSignInAt || '').toLocaleDateString()}
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="text-white font-semibold">Email Verified</div>
                  <div className="text-green-400 text-sm">
                    {user.primaryEmailAddress?.verification?.status === 'verified' ? 'Verified' : 'Pending'}
                  </div>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div>
              <h3 className="text-xl font-semibold text-red-400 mb-6">Danger Zone</h3>
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Export Account Data</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Download all your data including saved calculations, chat history, and preferences.
                    </p>
                    <button className="bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500/30 transition-all duration-300">
                      Export Data
                    </button>
                  </div>
                  
                  <hr className="border-red-500/20" />
                  
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2">Delete Account</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                    <button className="bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-lg font-semibold hover:bg-red-500/30 transition-all duration-300">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <a 
            href="/dashboard"
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-blue-500/30"
          >
            <div className="text-2xl">📊</div>
            <div>
              <div className="text-white font-semibold">Dashboard</div>
              <div className="text-gray-300 text-sm">View your overview</div>
            </div>
          </a>
          
          <a 
            href="/tli-ai"
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-green-500/30"
          >
            <div className="text-2xl">🤖</div>
            <div>
              <div className="text-white font-semibold">TLI AI</div>
              <div className="text-gray-300 text-sm">Ask legal questions</div>
            </div>
          </a>
          
          <a 
            href="/calculators"
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl hover:scale-105 transition-all duration-300 border border-orange-500/30"
          >
            <div className="text-2xl">🧮</div>
            <div>
              <div className="text-white font-semibold">Calculators</div>
              <div className="text-gray-300 text-sm">Work hours & taxes</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}