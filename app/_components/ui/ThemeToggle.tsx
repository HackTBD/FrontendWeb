'use client';

import { useTheme } from './ThemeProvider';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  /** Additional CSS classes to apply to the button */
  className?: string;
}

/**
 * ThemeToggle component for switching between light and dark modes
 *
 * Handles server-side rendering appropriately by only rendering after mounting.
 * Shows different icons based on the current theme.
 */
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  // Handle the theme detection after mounting to avoid SSR issues
  useEffect(() => {
    setMounted(true);

    // Determine if dark mode is active based on theme context and system preference
    const isDarkMode =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    setIsDark(isDarkMode);
  }, [theme]);

  // If not mounted yet, return a placeholder with the same dimensions
  // This prevents layout shift during hydration
  if (!mounted) {
    return (
      <button
        className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full border bg-transparent ${className}`}
        aria-label="Loading theme toggle"
        disabled
      />
    );
  }

  // Button styling based on the current theme
  const buttonClasses = `
    relative inline-flex h-9 w-9 items-center justify-center 
    rounded-full border transition-colors 
    ${
      isDark
        ? 'bg-zinc-800 border-pink-500/30 hover:border-pink-500/50'
        : 'bg-white border-gray-200 hover:bg-gray-50'
    } ${className}
  `;

  return (
    <button
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {isDark ? (
        // Sun icon for dark mode (to switch to light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-pink-400"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        // Moon icon for light mode (to switch to dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-700"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
};
