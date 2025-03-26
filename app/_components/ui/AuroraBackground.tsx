'use client';
import { cn } from '../utils';
import React, { ReactNode, useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  /** Child elements to render inside the aurora background */
  children: ReactNode;
  /** Whether to show the radial gradient mask on the aurora effect */
  showRadialGradient?: boolean;
}

/**
 * AuroraBackground component creates a dynamic animated gradient background
 *
 * Renders differently based on the current theme (light/dark)
 * Handles server-side rendering appropriately with mounting checks
 */
export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Server-side or pre-mount rendering fallback
  if (!mounted) {
    return (
      <div className="h-full w-full">
        <div className="relative flex min-h-full w-full flex-col items-center justify-start bg-zinc-50 dark:bg-zinc-900">
          <div className="relative w-full h-full">{children}</div>
        </div>
      </div>
    );
  }

  // Determine if dark mode based on theme and system preference
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // CSS variables for the aurora effect
  const auroraVariables = {
    '--dark-aurora':
      'repeating-linear-gradient(100deg,rgba(59,130,246,0.5) 10%,rgba(165,180,252,0.5) 15%,rgba(147,197,253,0.5) 20%,rgba(221,214,254,0.5) 25%,rgba(96,165,250,0.5) 30%)',
    '--light-aurora':
      'repeating-linear-gradient(100deg,rgba(3,108,160,0.5) 10%,rgba(65,157,197,0.5) 15%,rgba(99,202,170,0.5) 20%,rgba(99,202,170,0.5) 25%,rgba(59,130,246,0.5) 30%)',
    '--dark-gradient':
      'repeating-linear-gradient(100deg,#000 0%,#000 7%,transparent 10%,transparent 12%,#000 16%)',
    '--white-gradient':
      'repeating-linear-gradient(100deg,#fff 0%,#fff 7%,transparent 10%,transparent 12%,#fff 16%)',
  } as React.CSSProperties;

  // Class names for the aurora effect based on theme
  const auroraEffectClasses = cn(
    'after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] filter will-change-transform after:absolute after:inset-0 after:mix-blend-difference after:content-[""]',
    isDark
      ? // Dark theme styling
        '[background-image:var(--dark-gradient),var(--dark-aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] invert-0 after:[background-image:var(--dark-gradient),var(--dark-aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]'
      : // Light theme styling
        '[background-image:var(--white-gradient),var(--light-aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] invert after:[background-image:var(--white-gradient),var(--light-aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed]',
    showRadialGradient &&
      `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
  );

  return (
    <div className="h-full w-full">
      <div
        className={cn(
          'transition-bg relative flex min-h-full w-full flex-col items-center justify-start bg-zinc-50 text-slate-950 dark:bg-zinc-900',
          className
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={auroraVariables}
        >
          {/* Only show the aurora effect if mounted to prevent hydration mismatch */}
          {mounted && <div className={auroraEffectClasses}></div>}
        </div>
        <div className="relative w-full h-full">{children}</div>
      </div>
    </div>
  );
};
