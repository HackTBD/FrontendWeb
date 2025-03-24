'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../_components/ui/Button';
import { ThemeProvider, useTheme } from './themes/ThemeProvider';
import { ThemeToggle } from './themes/ThemeToggle';
import Sidebar from '../_components/sidebar';
import { Logo } from '../_components/ui/Logo';

function UserProfileContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: 'Alexa',
    lastName: 'Rawles',
    pronouns: 'she/her',
    email: 'alexa.rawles@example.com',
    phone: '+1 (555) 123-4567',
    password: '',
    devpost: 'alexarawles',
    github: 'alexarawles',
    linkedin: 'in/alexarawles'
  });

  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here (e.g., API call)
  };

  return (
    <div className={`flex h-screen ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}>
      <Sidebar activePath="/profile" />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className={`sticky top-0 z-10 ${isDark ? 'bg-zinc-800' : 'bg-white'} border-b ${isDark ? 'border-zinc-700' : 'border-gray-200'} shadow-sm`}>
          <div className="flex items-center justify-between px-6 py-4">
            {/* Left side - Logo and Title */}
            <div className="flex items-center space-x-4">
              <Logo size="lg" isDarkOverride={isDark} />
            </div>

            {/* Middle - Search Bar */}
            <div className="flex-1 mx-4 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                    isDark 
                      ? 'bg-zinc-700 border-zinc-600 text-white placeholder-gray-400' 
                      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500'
                  } focus:outline-none focus:ring-2 ${
                    isDark ? 'focus:ring-indigo-500' : 'focus:ring-blue-500'
                  }`}
                />
                <svg
                  className={`absolute right-3 top-3 h-5 w-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Right side - Theme Toggle and Profile */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src="https://i.pravatar.cc/150?img=10"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile content */}
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className={`overflow-hidden rounded-2xl shadow-xl ${isDark ? 'bg-zinc-800' : 'bg-white'}`}>
            {/* Profile header */}
            <div className="relative h-48 bg-gradient-to-r from-blue-400 to-indigo-500">
              <div className="absolute left-0 right-0 -bottom-16 flex justify-between items-end px-8">
                <div className="flex items-end">
                  <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg">
                    <Image
                      src="https://i.pravatar.cc/150?img=10"
                      alt="Alexa Rawles"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-6 mb-4">
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {userData.firstName} {userData.lastName}
                    </h2>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{userData.pronouns}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Button
                    variant={isDark ? "outline" : "default"}
                    className={`rounded-lg px-6 py-3 transition-all ${isDark ? 
                      "hover:bg-zinc-700 border-zinc-600" : 
                      "hover:bg-blue-500 hover:text-white"}`}
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                  >
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile form */}
            <div className="pt-20 pb-8 px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {[
                  { label: 'First Name', field: 'firstName', type: 'text' },
                  { label: 'Last Name', field: 'lastName', type: 'text' },
                  { label: 'Pronouns', field: 'pronouns', type: 'text' },
                  { label: 'Email', field: 'email', type: 'email' },
                  { label: 'Phone number', field: 'phone', type: 'tel' },
                  { label: 'Password', field: 'password', type: 'password' },
                ].map(({ label, field, type }) => (
                  <div key={field}>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label}
                    </label>
                    <input
                      type={type}
                      value={userData[field as keyof typeof userData]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      disabled={!isEditing && field !== 'password'}
                      className={`w-full p-3 rounded-lg border transition-colors ${
                        isDark 
                          ? `bg-zinc-800 border-zinc-700 text-white ${isEditing ? 'hover:bg-zinc-700 focus:bg-zinc-700' : ''}` 
                          : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''}`
                      } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                      placeholder={type === 'password' && isEditing ? 'Enter new password' : ''}
                    />
                  </div>
                ))}

                {[
                  { label: 'Devpost', field: 'devpost', prefix: 'devpost.com/' },
                  { label: 'GitHub', field: 'github', prefix: 'github.com/' },
                  { label: 'LinkedIn', field: 'linkedin', prefix: 'linkedin.com/' },
                ].map(({ label, field, prefix }) => (
                  <div key={field}>
                    <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {label}
                    </label>
                    <div className={`w-full p-3 rounded-lg border flex items-center transition-colors ${
                      isDark 
                        ? `bg-zinc-800 border-zinc-700 ${isEditing ? 'hover:bg-zinc-700' : ''}` 
                        : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50' : ''}`
                    }`}>
                      <span className={`shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {prefix}
                      </span>
                      <input
                        type="text"
                        value={userData[field as keyof typeof userData]}
                        onChange={(e) => handleInputChange(field, e.target.value)}
                        disabled={!isEditing}
                        className={`flex-1 bg-transparent focus:outline-none ml-2 ${
                          !isEditing ? 'cursor-not-allowed opacity-80' : ''
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserProfilePage({
  defaultTheme = 'light'
}: {
  defaultTheme?: 'light' | 'dark';
}) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <UserProfileContent />
    </ThemeProvider>
  );
}