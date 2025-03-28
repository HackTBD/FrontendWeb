'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../utils';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from './ThemeProvider';
import { ROUTES, MAIN_NAV_ITEMS, USER_NAV_ITEMS } from '../../_lib/routes';

/**
 * Props for the Header component
 */
interface HeaderProps {
  /** Additional classes for the header */
  className?: string;
}

/**
 * Navigation link definition
 */
interface NavLink {
  /** Display text for the navigation link */
  label: string;
  /** URL path for the navigation link */
  href: string;
  /** Whether this link is for authenticated users only */
  authRequired?: boolean;
}

/**
 * Header component displays the main navigation bar at the top of the application
 *
 * Includes logo, navigation links, theme toggle, and authentication controls
 * Adjusts styling based on the current theme
 */
export const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();

  // Determine if dark mode based on theme and system preference
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Define navigation links using MAIN_NAV_ITEMS but map it to match NavLink interface
  const navLinks: NavLink[] = MAIN_NAV_ITEMS.map((item) => ({
    label: item.label,
    href: item.path,
    authRequired: false,
  }));

  // Define authentication links
  const authLinks: NavLink[] = [
    { label: 'Profile', href: ROUTES.USER_PROFILE, authRequired: true },
    { label: 'Login / Sign Up', href: ROUTES.LOGIN, authRequired: false },
  ];

  // Calculate header background styles based on scroll state and theme
  const headerBgClasses = cn(
    'transition-all duration-200',
    isScrolled
      ? isDark
        ? 'bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 shadow-md'
        : 'bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-md'
      : isDark
        ? 'bg-transparent'
        : 'bg-transparent'
  );

  // Mobile menu toggle button styles
  const menuButtonClasses = cn(
    'flex items-center justify-center p-2 rounded-md transition-colors',
    isDark
      ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
      : 'text-zinc-700 hover:bg-zinc-100 hover:text-black'
  );

  return (
    <header
      className={cn('sticky top-0 z-50 w-full', headerBgClasses, className)}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo section */}
        <div className="flex items-center">
          <Link href="/" aria-label="Go to homepage">
            <Logo showText size="md" disableLink={true} />
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex space-x-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === link.href
                      ? isDark
                        ? 'text-white bg-zinc-800'
                        : 'text-[#036CA0] bg-blue-50'
                      : isDark
                        ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                        : 'text-zinc-700 hover:text-[#036CA0] hover:bg-blue-50'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme toggle and auth links */}
          <div className="flex items-center pl-2 ml-2 border-l border-zinc-200 dark:border-zinc-700">
            <ThemeToggle className="mr-2" />

            {/* Auth links */}
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative ml-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  link.href === '/login-signup'
                    ? isDark
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      : 'bg-[#036CA0] text-white'
                    : isDark
                      ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                      : 'text-zinc-700 hover:text-[#036CA0] hover:bg-blue-50'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle className="mr-2" />

          <button
            type="button"
            className={menuButtonClasses}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div
            className={cn(
              'px-2 pt-2 pb-3 space-y-1 border-b',
              isDark
                ? 'bg-zinc-900 border-zinc-800'
                : 'bg-white border-zinc-200'
            )}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  pathname === link.href
                    ? isDark
                      ? 'bg-zinc-800 text-white'
                      : 'bg-blue-50 text-[#036CA0]'
                    : isDark
                      ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      : 'text-zinc-700 hover:bg-blue-50 hover:text-[#036CA0]'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}

            {/* Auth links for mobile */}
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  link.href === '/login-signup'
                    ? isDark
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                      : 'bg-[#036CA0] text-white'
                    : isDark
                      ? 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                      : 'text-zinc-700 hover:bg-blue-50 hover:text-[#036CA0]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
