'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../_components/ui/Button';
import { useTheme } from '../_components/ui/ThemeProvider';
import { ThemeToggle } from '../_components/ui/ThemeToggle';
import { Logo } from '../_components/ui/Logo';
import { ROUTES, MAIN_NAV_ITEMS } from '../_lib/routes';

// The main content component that changes based on theme
export default function LandingPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`w-full overflow-y-auto ${isDark ? 'bg-black/40 backdrop-blur-sm' : ''}`}
    >
      {/* Background - only shown in light theme */}
      {!isDark && (
        <div className="fixed inset-0 w-full h-full z-0">
          <Image
            src="/images/light-background.png"
            fill
            quality={100}
            priority
            alt="Colorful gradient background"
            className="object-cover opacity-90"
            sizes="100vw"
          />
        </div>
      )}

      {/* Navigation bar - styled based on theme */}
      <div
        className={`
          sticky top-0 z-50 w-full py-4 px-4 md:px-8 lg:px-28
          ${isDark ? 'bg-zinc-900/70 backdrop-blur-sm border-b border-pink-500/10' : 'bg-white/80 backdrop-blur-sm shadow-md'}
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" isDarkOverride={isDark} />

          {/* Sign Up/Sign In buttons */}
          <div className="flex items-center space-x-3">
            <ThemeToggle className="mr-3" />
            <Link href={ROUTES.USER_PROFILE}>
              <Button
                variant="outline"
                className={`p-2 rounded-full ${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:bg-gray-50'}`}
                aria-label="Profile"
              >
                <UserIcon className={`h-5 w-5 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`} />
              </Button>
            </Link>
            <Link href={ROUTES.LOGIN}>
              <Button
                variant="secondary"
                className={`px-4 py-2 text-sm rounded-lg ${isDark ? 'border-purple-500/30 hover:border-purple-500/50' : ''}`}
              >
                Sign in
              </Button>
            </Link>
            <Link href={ROUTES.LOGIN}>
              <Button
                variant="primary"
                className={`px-4 py-2 text-sm rounded-lg ${isDark ? 'bg-pink-600/80 hover:bg-pink-600' : ''}`}
              >
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content - either dark or light theme layout */}
      <div className="relative z-10">
        {isDark ? (
          // Dark theme layout - similar to light but with dark colors
          <div className="relative z-10 mt-8 md:mt-16 px-4 md:px-8 lg:px-28 flex flex-col md:flex-row justify-between items-center">
            {/* Left content - Text and CTA */}
            <div className="w-full md:max-w-lg mb-10 md:mb-0 text-center">
              <div className="space-y-6">
                <p
                  className={`py-1 px-3 ${isDark ? 'bg-zinc-900/60' : 'bg-white/40'} backdrop-blur-sm font-light rounded-full text-theme-primary inline-block`}
                >
                  Join 7.000+ Hackers
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-gradient-primary">
                  Find Your Perfect{' '}
                  <span className="text-theme-gradient-secondary">
                    Hackathon
                  </span>{' '}
                  Team
                </h1>
                <p className="text-lg text-theme-secondary">
                  HackTBD matches you with teammates that complement your skills
                  and goals. Collaborate to build winning projects.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href={ROUTES.HACKATHONS}>
                    <Button
                      variant="outline"
                      className={`px-8 py-3 rounded-lg text-theme-primary bg-transparent ${
                        isDark
                          ? 'border-pink-500/30 hover:border-pink-500/50 hover:bg-zinc-800'
                          : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 hover:bg-gray-50'
                      }`}
                    >
                      Hackathon Events
                    </Button>
                  </Link>
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
            <div className="w-full md:max-w-lg mb-10 md:mb-0 text-center">
              <div className="space-y-6">
                <p
                  className={`py-1 px-3 ${isDark ? 'bg-zinc-900/60' : 'bg-white/40'} backdrop-blur-sm font-light rounded-full text-theme-primary inline-block`}
                >
                  Join 7.000+ Hackers
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme-gradient-primary">
                  Find Your Perfect{' '}
                  <span className="text-theme-gradient-secondary">
                    Hackathon
                  </span>{' '}
                  Team
                </h1>
                <p className="text-lg text-theme-secondary">
                  HackTBD matches you with teammates that complement your skills
                  and goals. Collaborate to build winning projects.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href={ROUTES.HACKATHONS}>
                    <Button
                      variant="outline"
                      className={`px-8 py-3 rounded-lg text-theme-primary bg-transparent ${
                        isDark
                          ? 'border-pink-500/30 hover:border-pink-500/50 hover:bg-zinc-800'
                          : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 hover:bg-gray-50'
                      }`}
                    >
                      Hackathon Events
                    </Button>
                  </Link>
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
        <div className="relative z-10 w-full mt-12 md:mt-24 px-4 md:px-8 lg:px-28">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-theme-gradient-primary">
              Streamline Your Hackathon Experience
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900/90 border border-pink-500/20' : 'bg-white/70 backdrop-blur-sm border border-[#63CAAA]/20'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-pink-500/20' : 'bg-[#63CAAA]/20'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-pink-400' : 'text-[#036CA0]'}`}
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
                <h3 className="text-xl font-semibold mb-2 text-theme-gradient-primary">
                  Create Custom Profiles
                </h3>
                <p className="text-theme-secondary">
                  Showcase your skills, goals, and past experience to find the
                  perfect team match for each hackathon.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900/90 border border-purple-500/20' : 'bg-white/70 backdrop-blur-sm border border-[#036CA0]/20'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-purple-500/20' : 'bg-[#036CA0]/20'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-purple-400' : 'text-[#036CA0]'}`}
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
                <h3 className="text-xl font-semibold mb-2 text-theme-gradient-secondary">
                  Smart Team Matching
                </h3>
                <p className="text-theme-secondary">
                  Filter potential teammates based on skills, goals, and
                  experience to find the right people quickly.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className={`rounded-xl p-6 ${isDark ? 'bg-zinc-900/90 border border-blue-500/20' : 'bg-white/70 backdrop-blur-sm border border-[#3B82F6]/20'} shadow-lg`}
              >
                <div
                  className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center ${isDark ? 'bg-blue-500/20' : 'bg-[#3B82F6]/20'}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isDark ? 'text-blue-400' : 'text-[#3B82F6]'}`}
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
                <h3 className="text-xl font-semibold mb-2 text-theme-gradient-accent">
                  Team Management
                </h3>
                <p className="text-theme-secondary">
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
          className={`w-full ${isDark ? 'bg-zinc-900/80 border-t border-purple-500/20' : 'bg-[#696969]'} py-6 md:py-8`}
        >
          <div className="text-center">
            <p
              className={`${isDark ? 'text-theme-gradient-primary' : 'text-theme-inverse'} text-lg md:text-xl font-medium`}
            >
              Built for hackers with 🤍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add user icon component at the end of the file
const UserIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
