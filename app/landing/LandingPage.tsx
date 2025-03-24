'use client';

import Image from 'next/image';
import { Button } from '../_components/ui/button';
import { ThemeProvider, useTheme } from './themes/ThemeProvider';
import { ThemeToggle } from './themes/ThemeToggle';
import { Logo } from '../_components/ui/logo';
// The main content component that changes based on theme
function LandingContent() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full overflow-y-auto ${isDark ? 'bg-black' : ''}`}>
      {/* Background - only shown in light theme */}
      {!isDark && (
        <div className="fixed inset-0 w-full h-full z-0">
          <Image
            src="/images/light-background.png"
            fill
            quality={100}
            priority
            alt="Colorful gradient background"
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* Navigation bar - styled based on theme */}
      <div
        className={`
          sticky top-0 z-50 w-full py-4 px-4 md:px-8 lg:px-28
          ${isDark ? 'bg-black/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm shadow-md'}
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" />

          {/* Sign Up/Sign In buttons */}
          <div className="flex space-x-3">
            <Button
              variant="secondary"
              className="px-4 py-2 text-sm rounded-lg"
            >
              Sign in
            </Button>
            <Button variant="default" className="px-4 py-2 text-sm rounded-lg">
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Main content - either dark or light theme layout */}
      <div className="relative z-10">
        {isDark ? (
          // Dark theme layout - similar to light but with dark colors
          <div className="relative z-10 mt-8 md:mt-16 px-4 md:px-8 lg:px-28 flex flex-col md:flex-row justify-between items-center">
            {/* Left content - Text and CTA */}
            <div className="max-w-lg mb-10 md:mb-0 text-center md:text-left">
              <div className="space-y-6">
                <p className="py-1 px-3 bg-zinc-800/60 backdrop-blur-sm font-light rounded-full text-white inline-block">
                  Join 7.000+ Hackers
                </p>

                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-blue-500 text-transparent font-semibold">
                    HackTBD
                  </h1>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-purple-500 via-pink-400 to-blue-500 text-transparent font-semibold">
                    Hackathon&apos;s Matching
                  </h3>
                </div>

                <p className="text-gray-300 text-lg text-pretty">
                  50+{' '}
                  <span className="bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 text-transparent font-semibold">
                    free{' '}
                  </span>
                  and
                  <span className="bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 text-transparent font-semibold">
                    {' '}
                    sponsored{' '}
                  </span>
                  hackathons from around the world.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="default"
                    className="w-full md:w-auto rounded-lg"
                  >
                    Find Your Perfect Team
                  </Button>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 rounded-full">
                      Tech Matching
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 rounded-full">
                      Custom Profiles
                    </span>
                    <span className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 rounded-full">
                      Team Formation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Image gallery - dark theme version */}
            <div className="hidden md:flex space-x-2 lg:space-x-4 shadow-lg">
              {/* First column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-pink-800 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/portal.svg"
                    alt="Portal"
                    width={60}
                    height={60}
                    className="w-1/2 h-auto invert"
                  />
                </div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-amber-900 rounded-3xl"></div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-zinc-800 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/chess-symbol.svg"
                    alt="Chess Symbol"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto invert"
                  />
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-blue-900 rounded-3xl"></div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-teal-900 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/message-square.svg"
                    alt="Message Square"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto invert"
                  />
                </div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-rose-900/60 rounded-3xl"></div>
              </div>

              {/* Third column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-purple-900/70 rounded-3xl"></div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-cyan-900/60 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/chess-symbol-2.svg"
                    alt="Chess Symbol 2"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto invert"
                  />
                </div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-yellow-900/60 rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/butterfly.svg"
                    alt="Butterfly"
                    width={60}
                    height={60}
                    className="w-2/3 h-auto invert"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Light theme layout - side by side
          <div className="relative z-10 mt-8 md:mt-16 px-4 md:px-8 lg:px-28 flex flex-col md:flex-row justify-between items-center">
            {/* Left content - Text and CTA */}
            <div className="max-w-lg mb-10 md:mb-0 text-center md:text-left">
              <div className="space-y-6">
                <p className="py-1 px-3 bg-white/40 backdrop-blur-sm font-light rounded-full text-gray-800 inline-block">
                  Join 7.000+ Hackers
                </p>

                <div className="space-y-3">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-[#B9225C] via-[#428295] to-[#63CAAA] text-transparent font-semibold">
                    HackTBD
                  </h1>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-[#428295] via-[#B9225C] to-[#63CAAA] text-transparent font-semibold">
                    Hackathon&apos;s Matching
                  </h3>
                </div>

                <p className="text-gray-800 text-lg text-pretty">
                  50+{' '}
                  <span className="bg-clip-text bg-gradient-to-r from-[#428295] to-[#B9225C] text-transparent font-semibold">
                    free{' '}
                  </span>
                  and
                  <span className="bg-clip-text bg-gradient-to-r from-[#B9225C] to-[#428295] text-transparent font-semibold">
                    {' '}
                    sponsored{' '}
                  </span>
                  hackathons from around the world.
                </p>

                <div className="space-y-4">
                  <Button
                    variant="default"
                    className="w-full md:w-auto rounded-lg"
                  >
                    Find Your Perfect Team
                  </Button>

                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="px-3 py-1 bg-white/40 text-xs text-gray-700 rounded-full">
                      Tech Matching
                    </span>
                    <span className="px-3 py-1 bg-white/40 text-xs text-gray-700 rounded-full">
                      Custom Profiles
                    </span>
                    <span className="px-3 py-1 bg-white/40 text-xs text-gray-700 rounded-full">
                      Team Formation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Image gallery - only visible on larger screens or light theme */}
            <div className="hidden md:flex space-x-2 lg:space-x-4 shadow-lg">
              {/* First column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#B9225C] rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/portal.svg"
                    alt="Portal"
                    width={60}
                    height={60}
                    className="w-1/2 h-auto"
                  />
                </div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#FFBD6B] rounded-3xl"></div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-white rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/chess-symbol.svg"
                    alt="Chess Symbol"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto"
                  />
                </div>
              </div>

              {/* Second column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#036CA0] rounded-3xl"></div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#63CAAA] rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/message-square.svg"
                    alt="Message Square"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto"
                  />
                </div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-[#F2D4DC] rounded-3xl"></div>
              </div>

              {/* Third column */}
              <div className="flex flex-col space-y-2">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#D1CDEE] rounded-3xl"></div>
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 bg-[#D5E4E8] rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/chess-symbol-2.svg"
                    alt="Chess Symbol 2"
                    width={40}
                    height={40}
                    className="w-1/2 h-auto"
                  />
                </div>
                <div className="w-24 h-28 sm:w-28 sm:h-32 lg:w-40 lg:h-44 bg-[#FFDD81] rounded-3xl flex items-center justify-center">
                  <Image
                    src="/images/butterfly.svg"
                    alt="Butterfly"
                    width={60}
                    height={60}
                    className="w-2/3 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Feature highlights section */}
        <div
          className={`relative z-10 w-full mt-12 md:mt-24 px-4 md:px-8 lg:px-28 ${isDark ? 'text-white' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-2xl md:text-3xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-800'}`}
            >
              Streamline Your Hackathon Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900' : 'bg-white/70 backdrop-blur-sm'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-purple-900' : 'bg-purple-100'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-purple-200' : 'text-purple-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}
                >
                  Create Custom Profiles
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Showcase your skills, goals, and past experience to find the
                  perfect team match for each hackathon.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900' : 'bg-white/70 backdrop-blur-sm'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-blue-900' : 'bg-blue-100'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-blue-200' : 'text-blue-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}
                >
                  Smart Team Matching
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Filter potential teammates based on skills, goals, and
                  experience to find the right people quickly.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900' : 'bg-white/70 backdrop-blur-sm'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-teal-900' : 'bg-teal-100'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-teal-200' : 'text-teal-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}
                >
                  Team Management
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Join teams, manage your participation, and customize tags for
                  each hackathon you participate in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full mt-16 md:mt-24">
        <div
          className={`w-full ${isDark ? 'bg-zinc-900' : 'bg-[#696969]'} py-6 md:py-8`}
        >
          <div className="text-center">
            <p className="text-white text-lg md:text-xl font-medium">
              Built for hackers with 🤍
            </p>
          </div>
        </div>
      </div>

      {/* Theme toggle button */}
      <ThemeToggle />
    </div>
  );
}

// Wrap the landing page with the theme provider
export default function LandingPage({
  defaultTheme = 'light', // Default theme can be set by the page that imports this component
}: {
  defaultTheme?: 'light' | 'dark';
}) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <LandingContent />
    </ThemeProvider>
  );
}
