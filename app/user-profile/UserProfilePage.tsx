'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../_components/ui/Button';
import { useTheme } from '../_components/ui/ThemeProvider';
import Sidebar from '../_components/ui/Sidebar';
import { Header } from '../_components/ui/Header';

export default function UserProfilePage() {
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
    linkedin: 'in/alexarawles',
  });

  const handleInputChange = (field: string, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add your save logic here (e.g., API call)
  };

  return (
    <div
      className={`flex h-screen ${isDark ? 'bg-zinc-900/40' : 'bg-gray-50/40'}`}
    >
      <Sidebar activePath="/profile" hideLogo={true} />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Profile content */}
        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div
            className={`overflow-hidden rounded-2xl shadow-xl ${isDark ? 'bg-zinc-800/90 border border-pink-500/20' : 'bg-white'}`}
          >
            {/* Profile header */}
            <div
              className={`relative h-48 ${isDark ? 'bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-blue-500/80' : 'bg-gradient-to-r from-blue-400 to-indigo-500'}`}
            >
              <div className="absolute left-0 right-0 -bottom-16 flex justify-between items-end px-8">
                <div className="flex items-end">
                  <div
                    className={`h-32 w-32 rounded-full border-4 ${isDark ? 'border-purple-300' : 'border-white'} overflow-hidden bg-white shadow-lg`}
                  >
                    <Image
                      src="https://i.pravatar.cc/150?img=10"
                      alt="Alexa Rawles"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-6 mb-4">
                    <h2
                      className={`text-2xl font-bold ${isDark ? 'text-theme-gradient-primary' : 'text-theme-primary'}`}
                    >
                      {userData.firstName} {userData.lastName}
                    </h2>
                    <p className="text-theme-secondary">{userData.pronouns}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <Button
                    variant={isDark ? 'outline' : 'primary'}
                    className={`rounded-lg px-6 py-3 transition-all ${
                      isDark
                        ? 'hover:bg-zinc-700 border-pink-500/30 hover:border-pink-500/50 text-theme-primary'
                        : 'hover:bg-blue-500 hover:text-white'
                    }`}
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
                    <label className="block text-sm font-medium mb-2 text-theme-secondary">
                      {label}
                    </label>
                    <input
                      type={type}
                      value={userData[field as keyof typeof userData]}
                      onChange={(e) => handleInputChange(field, e.target.value)}
                      disabled={!isEditing && field !== 'password'}
                      className={`w-full p-3 rounded-lg border transition-colors ${
                        isDark
                          ? `bg-zinc-800 border-pink-500/30 text-theme-primary placeholder:text-pink-300/40 ${isEditing ? 'hover:bg-zinc-700 focus:bg-zinc-700 focus:border-pink-500/50' : ''}`
                          : `bg-white border-gray-300 text-theme-primary ${isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''}`
                      } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                      placeholder={
                        type === 'password' && isEditing
                          ? 'Enter new password'
                          : ''
                      }
                    />
                  </div>
                ))}

                {[
                  {
                    label: 'Devpost',
                    field: 'devpost',
                    prefix: 'devpost.com/',
                  },
                  { label: 'GitHub', field: 'github', prefix: 'github.com/' },
                  {
                    label: 'LinkedIn',
                    field: 'linkedin',
                    prefix: 'linkedin.com/',
                  },
                ].map(({ label, field, prefix }) => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-2 text-theme-secondary">
                      {label}
                    </label>
                    <div
                      className={`w-full p-3 rounded-lg border flex items-center transition-colors ${
                        isDark
                          ? `bg-zinc-800 border-purple-500/30 ${isEditing ? 'hover:bg-zinc-700 focus-within:border-purple-500/50' : ''}`
                          : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50' : ''}`
                      }`}
                    >
                      <span className="shrink-0 text-theme-tertiary font-medium opacity-70">
                        {prefix}
                      </span>
                      <input
                        type="text"
                        value={userData[field as keyof typeof userData]}
                        onChange={(e) =>
                          handleInputChange(field, e.target.value)
                        }
                        disabled={!isEditing}
                        className={`flex-1 bg-transparent focus:outline-none ml-2 text-theme-primary ${
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
