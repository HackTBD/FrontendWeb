'use client';

import Swal from 'sweetalert2';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../_components/ui/Button';
import { useTheme } from '../_components/ui/ThemeProvider';
import Sidebar from '../_components/ui/Sidebar';
import { Header } from '../_components/ui/Header';
import { useUpdateUser } from '../_lib/graphql/mutations/users/use-update-users';

interface UserData {
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  devpost: string;
  github: string;
  linkedin: string;
  isAdmin: boolean;
  authProvider: string;
  authProviderId: string;
}

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [userData, setUserData] = useState<UserData>({
    user_id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    firstName: 'Alexa',
    lastName: 'Rawles',
    email: 'alexa.rawles@example.com',
    phone: '+1 (555) 123-4567',
    devpost: 'alexarawles',
    github: 'alexarawles',
    linkedin: 'in/alexarawles',
    isAdmin: false,
    authProvider: 'google',
    authProviderId: 'google-oauth2|123456789012345678901',
  });

  const [updateUser, { loading }] = useUpdateUser();

  const handleInputChange = (
    field: keyof UserData,
    value: string | boolean
  ) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    try {
      await updateUser({
        variables: {
          input: {
            userId: userData.user_id,
            authProvider: userData.authProvider,
            authProviderId: userData.authProviderId,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            phoneNumber: userData.phone,
            github: userData.github,
            linkedin: userData.linkedin,
            devpost: userData.devpost,
            isAdmin: userData.isAdmin,
          },
        },
      });
      setIsEditing(false);
    } catch (error) {
      const errorMessage =
        error instanceof Error && 'graphQLErrors' in error
          ? (error as any).graphQLErrors.map((e: any) => e.message).join(', ')
          : 'An unknown error occurred';
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: errorMessage,
      });
    }
  };

  return (
    <div
      className={`flex h-screen ${isDark ? 'bg-zinc-900/40' : 'bg-gray-50/40'}`}
    >
      <Sidebar activePath="/profile" hideLogo={true} />

      <div className="flex-1 overflow-auto">
        <Header />

        <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div
            className={`overflow-hidden rounded-2xl shadow-xl ${
              isDark ? 'bg-zinc-800/90 border border-pink-500/20' : 'bg-white'
            }`}
          >
            {/* Profile Header */}
            <div
              className={`relative h-48 ${
                isDark
                  ? 'bg-gradient-to-r from-pink-500/80 via-purple-500/80 to-blue-500/80'
                  : 'bg-gradient-to-r from-blue-400 to-indigo-500'
              }`}
            >
              <div className="absolute left-0 right-0 -bottom-16 flex justify-between items-end px-8">
                <div className="flex items-end">
                  <div
                    className={`h-32 w-32 rounded-full border-4 ${
                      isDark ? 'border-purple-300' : 'border-white'
                    } overflow-hidden bg-white shadow-lg`}
                  >
                    <Image
                      src="https://i.pravatar.cc/150?img=10"
                      alt="User Avatar"
                      width={128}
                      height={128}
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-6 mb-4">
                    <h2
                      className={`text-2xl font-bold ${
                        isDark
                          ? 'text-theme-gradient-primary'
                          : 'text-theme-primary'
                      }`}
                    >
                      {userData.firstName} {userData.lastName}
                    </h2>
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
                    disabled={loading}
                  >
                    {loading
                      ? 'Saving...'
                      : isEditing
                        ? 'Save Changes'
                        : 'Edit Profile'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Profile Form với layout 2 cột - 4 hàng */}
            <div className="pt-20 pb-8 px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Row 1: First Name / Last Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={userData.firstName}
                    onChange={(e) =>
                      handleInputChange('firstName', e.target.value)
                    }
                    disabled={!isEditing}
                    className={`w-full p-3 rounded-lg border transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-pink-500/30 text-theme-primary placeholder:text-pink-300/40 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus:bg-zinc-700 focus:border-pink-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 text-theme-primary ${
                            isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''
                          }`
                    } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={userData.lastName}
                    onChange={(e) =>
                      handleInputChange('lastName', e.target.value)
                    }
                    disabled={!isEditing}
                    className={`w-full p-3 rounded-lg border transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-pink-500/30 text-theme-primary placeholder:text-pink-300/40 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus:bg-zinc-700 focus:border-pink-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 text-theme-primary ${
                            isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''
                          }`
                    } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                  />
                </div>

                {/* Row 2: Email / Phone number */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full p-3 rounded-lg border transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-pink-500/30 text-theme-primary placeholder:text-pink-300/40 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus:bg-zinc-700 focus:border-pink-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 text-theme-primary ${
                            isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''
                          }`
                    } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className={`w-full p-3 rounded-lg border transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-pink-500/30 text-theme-primary placeholder:text-pink-300/40 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus:bg-zinc-700 focus:border-pink-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 text-theme-primary ${
                            isEditing ? 'hover:bg-gray-50 focus:bg-gray-50' : ''
                          }`
                    } ${!isEditing ? 'cursor-not-allowed opacity-80' : ''}`}
                  />
                </div>

                {/* Row 3: Devpost (có prefix) */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    Devpost
                  </label>
                  <div
                    className={`w-full p-3 rounded-lg border flex items-center transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-purple-500/30 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus-within:border-purple-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50' : ''}`
                    }`}
                  >
                    <span className="shrink-0 text-theme-tertiary font-medium opacity-70">
                      devpost.com/
                    </span>
                    <input
                      type="text"
                      value={userData.devpost}
                      onChange={(e) =>
                        handleInputChange('devpost', e.target.value)
                      }
                      disabled={!isEditing}
                      className={`flex-1 bg-transparent focus:outline-none ml-2 text-theme-primary ${
                        !isEditing ? 'cursor-not-allowed opacity-80' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Row 4: GitHub / LinkedIn */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    GitHub
                  </label>
                  <div
                    className={`w-full p-3 rounded-lg border flex items-center transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-purple-500/30 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus-within:border-purple-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50' : ''}`
                    }`}
                  >
                    <span className="shrink-0 text-theme-tertiary font-medium opacity-70">
                      github.com/
                    </span>
                    <input
                      type="text"
                      value={userData.github}
                      onChange={(e) =>
                        handleInputChange('github', e.target.value)
                      }
                      disabled={!isEditing}
                      className={`flex-1 bg-transparent focus:outline-none ml-2 text-theme-primary ${
                        !isEditing ? 'cursor-not-allowed opacity-80' : ''
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-theme-secondary">
                    LinkedIn
                  </label>
                  <div
                    className={`w-full p-3 rounded-lg border flex items-center transition-colors ${
                      isDark
                        ? `bg-zinc-800 border-purple-500/30 ${
                            isEditing
                              ? 'hover:bg-zinc-700 focus-within:border-purple-500/50'
                              : ''
                          }`
                        : `bg-white border-gray-300 ${isEditing ? 'hover:bg-gray-50' : ''}`
                    }`}
                  >
                    <span className="shrink-0 text-theme-tertiary font-medium opacity-70">
                      linkedin.com/
                    </span>
                    <input
                      type="text"
                      value={userData.linkedin}
                      onChange={(e) =>
                        handleInputChange('linkedin', e.target.value)
                      }
                      disabled={!isEditing}
                      className={`flex-1 bg-transparent focus:outline-none ml-2 text-theme-primary ${
                        !isEditing ? 'cursor-not-allowed opacity-80' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Profile Form */}
          </div>
        </div>
      </div>
    </div>
  );
}
