'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../_components/ui/Button';
import { ThemeProvider, useTheme } from './themes/ThemeProvider';
import { ThemeToggle } from './themes/ThemeToggle';

// The main login component that changes based on theme
function LoginContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeTab, setActiveTab] = useState('signup'); // 'signup' or 'signin'

  return (
    <div className={`w-full min-h-screen flex ${isDark ? 'bg-black' : ''}`}>
      {/* Left column - Decorative elements */}
      <div className={`hidden md:flex md:w-1/2 relative ${isDark ? 'bg-zinc-900' : 'bg-blue-50'}`}>
        {/* Background - only shown in light theme */}
        {!isDark && (
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/images/light-background.png"
              fill
              quality={100}
              priority
              alt="Colorful gradient background"
              className="object-cover opacity-30"
              sizes="50vw"
            />
          </div>
        )}
        
        {/* Creative elements resembling the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/loginleftlogo.png"
              fill
              priority
              alt="Login logo"
              className="object-cover"
              sizes="50vw"
            />
          </div>
        </div>
      </div>
      
      {/* Right column - Auth form */}
      <div className={`w-full md:w-1/2 flex flex-col ${isDark ? 'bg-zinc-900 text-white' : 'bg-white'}`}>
        {/* Mobile only logo */}
        <div className="md:hidden flex items-center justify-center mt-6 mb-4">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0">
              <Image
                src="/images/logo-polygon.svg"
                alt="Logo polygon"
                width={32}
                height={32}
              />
            </div>
            <div className="absolute inset-0">
              <Image
                src="/images/logo-ellipse.svg"
                alt="Logo ellipse"
                width={32}
                height={32}
              />
            </div>
          </div>
          <span className={`font-sans text-sm font-extrabold ml-2 ${isDark ? 'text-white' : 'text-gray-600'}`}>
            hacktbd
          </span>
        </div>
        
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
          {/* Tab switching */}
          <div className="flex border-b mb-8">
            <button 
              className={`text-xl font-semibold pb-2 w-1/2 text-center ${
                activeTab === 'signup' 
                  ? `border-b-2 ${isDark ? 'border-blue-400 text-white' : 'border-gray-800 text-gray-800'}` 
                  : `${isDark ? 'text-gray-400' : 'text-gray-400'}`
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
            <button 
              className={`text-xl font-semibold pb-2 w-1/2 text-center ${
                activeTab === 'signin' 
                  ? `border-b-2 ${isDark ? 'border-blue-400 text-white' : 'border-gray-800 text-gray-800'}` 
                  : `${isDark ? 'text-gray-400' : 'text-gray-400'}`
              }`}
              onClick={() => setActiveTab('signin')}
            >
              Sign In
            </button>
          </div>

          {activeTab === 'signup' ? (
            /* Sign Up Form */
            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  First name
                </label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Last name
                </label>
                <input
                  type="text"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="terms" className={`ml-2 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  By creating an account, I agree to our{' '}
                  <a href="#" className={`${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                    Terms of use
                  </a>{' '}
                  and{' '}
                  <a href="#" className={`${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <Button
                variant="default"
                className="w-full py-3 text-center rounded-lg"
              >
                Create an account
              </Button>
              
              <div className="relative flex items-center justify-center mt-6">
                <div className={`flex-grow border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
                <span className={`px-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>OR</span>
                <div className={`flex-grow border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
              </div>
              
              <button
                type="button"
                className={`w-full py-3 px-4 rounded-lg border flex items-center justify-center space-x-2 ${
                  isDark ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032
                    s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2
                    C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button
                type="button"
                className={`w-full py-3 px-4 rounded-lg border flex items-center justify-center space-x-2 ${
                  isDark ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <span>Continue with Github</span>
              </button>
            </form>
          ) : (
            /* Sign In Form */
            <form className="space-y-6">              
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Password
                </label>
                <input
                  type="password"
                  className={`w-full p-3 rounded-lg border ${
                    isDark ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-white border-gray-300'
                  }`}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="remember" className={`ml-2 block text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Remember me
                  </label>
                </div>
                
                <a href="#" className={`text-sm ${isDark ? 'text-blue-400' : 'text-blue-600'} hover:underline`}>
                  Forgot password?
                </a>
              </div>
              
              <Button
                variant="default"
                className="w-full py-3 text-center rounded-lg"
              >
                Sign in
              </Button>
              
              <div className="relative flex items-center justify-center mt-6">
                <div className={`flex-grow border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
                <span className={`px-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>OR</span>
                <div className={`flex-grow border-t ${isDark ? 'border-gray-700' : 'border-gray-300'}`}></div>
              </div>
              
              <button
                type="button"
                className={`w-full py-3 px-4 rounded-lg border flex items-center justify-center space-x-2 ${
                  isDark ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032
                    s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2
                    C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
              
              <button
                type="button"
                className={`w-full py-3 px-4 rounded-lg border flex items-center justify-center space-x-2 ${
                  isDark ? 'border-gray-700 text-white' : 'border-gray-300 text-gray-700'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                  <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                </svg>
                <span>Continue with Github</span>
              </button>
            </form>
          )}
        </div>
        
        {/* Theme toggle */}
        <div className="absolute bottom-6 right-6">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

// Wrap the login page with the theme provider
export default function LoginPage({
  defaultTheme = 'light' // Default theme can be set by the page that imports this component
}: {
  defaultTheme?: 'light' | 'dark';
}) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <LoginContent />
    </ThemeProvider>
  );
}