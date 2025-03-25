'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';

/**
 * Theme options available in the application
 */
export type Theme = 'dark' | 'light' | 'system';

/**
 * Interface for the theme context value
 */
interface ThemeContextValue {
  /** Current theme setting */
  theme: Theme;
  /** Function to update the theme */
  setTheme: (theme: Theme) => void;
}

/**
 * Props for the ThemeProvider component
 */
interface ThemeProviderProps {
  /** Default theme to use if no theme is stored */
  defaultTheme?: Theme;
  /** Children to render within the provider */
  children: ReactNode;
}

// Create a context with a default value (never actually used if Provider is in place)
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Hook to access the theme context value
 * @returns The theme context value containing current theme and setTheme function
 * @throws Error if used outside of a ThemeProvider
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

/**
 * ThemeProvider component for managing application theme
 *
 * Handles theme persistence in localStorage and sync with system preference
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultTheme = 'system',
  children,
}) => {
  // Initialize theme state from localStorage or default
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  // Update localStorage and HTML attributes when theme changes
  const applyTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    const isDark =
      newTheme === 'dark' ||
      (newTheme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    // Toggle the dark class on the root HTML element
    root.classList.toggle('dark', isDark);

    // Set the color-scheme CSS property
    root.style.colorScheme = isDark ? 'dark' : 'light';

    // Store the theme preference in localStorage
    localStorage.setItem('theme', newTheme);
  };

  // Handle theme change
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Initialize theme from localStorage or default on mount
  useEffect(() => {
    // Check if a theme is stored in localStorage
    const storedTheme = localStorage.getItem('theme') as Theme | null;

    // Use stored theme or default
    const initialTheme = storedTheme || defaultTheme;
    setTheme(initialTheme);
    applyTheme(initialTheme);

    // Monitor system preference changes when using 'system' setting
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleSystemThemeChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    // Add listener for system preference changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    // Clean up listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [defaultTheme, theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
