'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface LogoProps {
  /** Size variant for the logo */
  size?: 'sm' | 'md' | 'lg';
  /** Whether to show the text part of the logo */
  showText?: boolean;
  /** Link destination when logo is clicked */
  linkTo?: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Override for dark mode (useful when ThemeProvider isn't available) */
  isDarkOverride?: boolean;
  /** Whether to disable the internal link (useful when Logo is already wrapped in a Link) */
  disableLink?: boolean;
}

/**
 * Logo component that displays the application logo
 *
 * Can be used with or without ThemeProvider context.
 * Falls back to media query for dark mode when ThemeProvider isn't available.
 */
export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  linkTo = '/',
  className = '',
  isDarkOverride,
  disableLink = false,
}) => {
  // Use a state to track dark mode with a safe fallback
  const [isDark, setIsDark] = useState(false);

  // Set up the effect to check for dark mode
  useEffect(() => {
    // If an override is provided, use that
    if (isDarkOverride !== undefined) {
      setIsDark(isDarkOverride);
      return;
    }

    // Check for dark mode preference
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Check for a theme stored in localStorage
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
      setIsDark(true);
    } else if (storedTheme === 'light') {
      setIsDark(false);
    } else {
      // Use the system preference
      setIsDark(prefersDark);
    }

    // Listen for changes to system dark mode preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      // Only update if we're using system preference
      if (storedTheme !== 'dark' && storedTheme !== 'light') {
        setIsDark(mediaQuery.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [isDarkOverride]);

  // Define different sizes for the logo
  const dimensions = {
    sm: { width: 32, height: 28, textSize: 'text-xs' },
    md: { width: 43, height: 37, textSize: 'text-sm' },
    lg: { width: 57, height: 49, textSize: 'text-base' },
  };

  // Determine the width, height, and text size based on the logo size
  const { width, height, textSize } = dimensions[size];

  // Render the logo content
  const logoContent = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex-shrink-0">
        <svg
          width={width}
          height={height}
          viewBox="0 0 57 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="HackTBD Logo"
        >
          <path
            d="M4.97607 13.8743L26.0223 1.74997V8.6243C26.0223 8.6243 19.6447 8.33264 19.9636 13.8743C20.2824 19.4161 26.0223 19.1243 26.0223 19.1243V25.9987L4.97607 13.8743Z"
            fill="#FFDD81"
          />
          <path
            d="M52.0239 14L30.9777 26.1244V1.8756L52.0239 14Z"
            fill="#428295"
          />
          <path
            d="M32.5722 14.5833C32.5722 16.625 32.4028 17.7917 29.6267 17.7917C26.8506 17.7917 24.8069 16.256 24.8069 13.8816C24.8069 11.5072 26.8506 10.2083 29.6267 10.2083C33.5288 10.2083 32.5722 11.7171 32.5722 14.5833Z"
            fill="#428295"
          />
          {/* Only render the logo text path if showText is true */}
          {showText && (
            <path
              d="M8.77511 42H6.26955V38.0648C6.26955 37.0975 5.98407 36.6138 5.41312 36.6138C4.99789 36.6138 4.69354 36.7884 4.50008 37.1376C4.31134 37.482 4.21697 38.0459 4.21697 38.8292V42H1.72556V32.091H4.21697V33.4995C4.21697 34.1035 4.18394 34.8278 4.11788 35.6724H4.23112C4.46705 35.3091 4.74545 35.0496 5.06631 34.8939C5.38717 34.7334 5.77174 34.6532 6.22 34.6532C7.03159 34.6532 7.65916 34.8868 8.10271 35.3539C8.55097 35.8164 8.77511 36.4675 8.77511 37.3074V42ZM16.8957 42H15.1757L14.6944 41.0445H14.6449C14.3193 41.4551 13.9772 41.7382 13.6186 41.8939C13.2647 42.0496 12.8141 42.1274 12.2667 42.1274C11.5825 42.1274 11.047 41.9222 10.6601 41.5117C10.2731 41.1012 10.0797 40.5302 10.0797 39.7988C10.0797 38.3172 11.1201 37.5339 13.201 37.449L14.4113 37.4065V37.3074C14.4113 36.7129 14.1164 36.4156 13.5266 36.4156C13.0076 36.4156 12.3399 36.5926 11.5236 36.9465L10.8016 35.3044C11.6463 34.8703 12.7079 34.6532 13.9867 34.6532C14.9115 34.6532 15.6264 34.8844 16.1313 35.3469C16.6409 35.8093 16.8957 36.4486 16.8957 37.265V42ZM12.6206 39.7068C12.6206 40.1504 12.8566 40.3721 13.3284 40.3721C13.6304 40.3721 13.8876 40.2778 14.0999 40.089C14.3122 39.9003 14.4184 39.6502 14.4184 39.3388V38.7796L13.8451 38.8009C13.0288 38.8386 12.6206 39.1406 12.6206 39.7068ZM21.8742 42.1274C20.6993 42.1274 19.8051 41.8113 19.1917 41.179C18.5783 40.542 18.2716 39.6242 18.2716 38.4257C18.2716 37.2272 18.5995 36.3 19.2554 35.6441C19.916 34.9835 20.855 34.6532 22.0724 34.6532C22.9028 34.6532 23.6908 34.8373 24.4364 35.2053L23.7003 37.0455C23.0397 36.7577 22.5018 36.6138 22.0865 36.6138C21.6713 36.6138 21.3528 36.7719 21.131 37.088C20.914 37.3994 20.8054 37.8406 20.8054 38.4116C20.8054 39.5676 21.2325 40.1456 22.0865 40.1456C22.8132 40.1456 23.5139 39.9333 24.1886 39.5086V41.4904C23.5422 41.9151 22.7707 42.1274 21.8742 42.1274ZM28.1296 42H25.624V32.091H28.1296V35.9839C28.1296 36.6397 28.0824 37.2933 27.988 37.9444H28.0446C28.3419 37.4631 28.5967 37.088 28.809 36.8191L30.4299 34.7806H33.2044L30.7059 37.8524L33.3672 42H30.5219L28.9364 39.4166L28.1296 40.0324V42ZM37.0901 39.4591C37.0901 39.9262 37.3143 40.1598 37.7625 40.1598C38.0928 40.1598 38.4939 40.0772 38.9658 39.9121V41.724C38.6591 41.8608 38.3476 41.9623 38.0315 42.0284C37.7201 42.0944 37.3567 42.1274 36.9415 42.1274C36.1158 42.1274 35.5141 41.9245 35.1367 41.5188C34.7639 41.113 34.5775 40.4807 34.5775 39.6219V36.6492H33.7069V35.6371L34.8111 34.8514L35.4552 33.3367H37.0901V34.7806H38.8596V36.6492H37.0901V39.4591ZM44.6634 38.3479C44.6634 37.1918 44.352 36.6138 43.7291 36.6138C43.3799 36.6138 43.1228 36.7341 42.9576 36.9748C42.7972 37.2154 42.717 37.5953 42.717 38.1143V38.4682C42.717 39.058 42.7972 39.4827 42.9576 39.7422C43.1228 39.997 43.387 40.1244 43.7503 40.1244C44.0476 40.1244 44.2741 39.9734 44.4298 39.6714C44.5855 39.3694 44.6634 38.9283 44.6634 38.3479ZM42.717 35.7149C43.1841 35.0071 43.8164 34.6532 44.6138 34.6532C45.4113 34.6532 46.0412 34.9835 46.5036 35.6441C46.966 36.3047 47.1973 37.2178 47.1973 38.3833C47.1973 39.5487 46.9637 40.4642 46.4965 41.1295C46.0388 41.7948 45.3924 42.1274 44.5572 42.1274C44.0712 42.1274 43.6489 42.0213 43.2903 41.8089C43.1204 41.7004 42.9293 41.5282 42.717 41.2923H42.5683L42.172 42H40.2256V32.091H42.717V34.3276C42.717 34.5919 42.6887 35.0543 42.632 35.7149H42.717ZM50.9492 34.6532C51.355 34.6532 51.7089 34.7358 52.0109 34.901C52.3176 35.0661 52.5936 35.3374 52.839 35.7149H52.8885C52.8083 35.1298 52.7682 34.5636 52.7682 34.0162V32.091H55.2808V42H53.3981L52.8673 41.087H52.7682C52.3388 41.7806 51.6994 42.1274 50.8501 42.1274C50.081 42.1463 49.4605 41.816 48.9886 41.1365C48.5215 40.4571 48.2879 39.537 48.2879 38.3762C48.2926 37.2154 48.5309 36.3047 49.0028 35.6441C49.4794 34.9835 50.1282 34.6532 50.9492 34.6532ZM51.8481 36.6633C51.5178 36.6633 51.263 36.8167 51.0837 37.1234C50.9044 37.4301 50.8147 37.8666 50.8147 38.4328C50.8147 38.999 50.9044 39.4284 51.0837 39.721C51.2677 40.0135 51.5414 40.1598 51.9047 40.1598C52.2728 40.1598 52.5393 40.0395 52.7045 39.7988C52.8744 39.5535 52.9664 39.1618 52.9805 38.6239V38.4257C52.9805 37.7982 52.8885 37.3475 52.7045 37.0739C52.5252 36.8002 52.2397 36.6633 51.8481 36.6633Z"
              fill={isDark ? '#E0E0E0' : '#696969'}
            />
          )}
        </svg>
      </div>
    </div>
  );

  // Wrap the logo in a clickable link if linkTo is provided AND disableLink is false
  return !disableLink && linkTo ? (
    <Link href={linkTo}>{logoContent}</Link>
  ) : (
    logoContent
  );
};