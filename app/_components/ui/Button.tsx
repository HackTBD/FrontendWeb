import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';
import { useTheme } from './ThemeProvider';

/**
 * Button variants available in the application
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

/**
 * Button sizes available in the application
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props for the Button component
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button variant that determines the styling */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Whether the button is in loading state */
  isLoading?: boolean;
  /** Whether the button is in disabled state */
  disabled?: boolean;
  /** Icon to display at the start of the button text */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the button text */
  endIcon?: React.ReactNode;
  /** Additional classes to apply to the button */
  className?: string;
  /** Button content */
  children: React.ReactNode;
}

/**
 * Button component that provides a customizable button with different variants and sizes
 *
 * Adapts styling based on the current theme (light/dark)
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  startIcon,
  endIcon,
  className,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  // Determine if dark mode based on theme and system preference
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Define the base button styles and specific styles for each variant
  const baseButtonClasses =
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: isDark
      ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-md disabled:opacity-50 focus-visible:ring-pink-500'
      : 'bg-[#036CA0] hover:bg-[#045F8C] text-white shadow-md disabled:opacity-50 focus-visible:ring-blue-500',
    secondary: isDark
      ? 'bg-zinc-800 text-zinc-50 hover:bg-zinc-700 shadow-sm focus-visible:ring-zinc-500 disabled:bg-zinc-700'
      : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 shadow-sm focus-visible:ring-zinc-400 disabled:bg-zinc-200',
    outline: isDark
      ? 'border border-pink-500/30 bg-transparent hover:border-pink-500/50 hover:bg-zinc-800/40 text-zinc-50 focus-visible:ring-zinc-500'
      : 'border border-[#036CA0]/30 bg-transparent hover:border-[#036CA0]/50 hover:bg-zinc-100/40 text-zinc-900 focus-visible:ring-zinc-400',
    text: isDark
      ? 'bg-transparent text-zinc-50 hover:bg-zinc-800/40 hover:text-zinc-50 focus-visible:ring-zinc-500'
      : 'bg-transparent text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 focus-visible:ring-zinc-400',
  };

  return (
    <button
      className={cn(
        baseButtonClasses,
        sizeClasses[size],
        variantClasses[variant],
        isLoading && 'opacity-70 cursor-not-allowed',
        className
      )}
      disabled={disabled || isLoading}
      aria-disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {startIcon && !isLoading && (
        <span className="mr-2 inline-flex">{startIcon}</span>
      )}

      <span>{children}</span>

      {endIcon && <span className="ml-2 inline-flex">{endIcon}</span>}
    </button>
  );
};
