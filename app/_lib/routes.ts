/**
 * Application routes configuration
 *
 * This module centralizes all route definitions for the application.
 * It makes routes easier to maintain and ensures consistency across the app.
 */

// Main route paths
export const ROUTES = {
  HOME: '/',
  LANDING: '/landing',
  LOGIN: '/login-signup',

  HACKATHONS: '/hackathons',
  HACKATHON_DETAILS: (id: string) => `/hackathons/${id}`,

  USER_PROFILE: '/user-profile',
  MY_HACKATHONS: '/my-hackathon',

  MY_MATCH: '/my-match',
  MY_TEAM: '/my-team',

  HELP: '/help',
  LOGOUT: '/logout',

  NOT_FOUND: '/not-found',
};

// Navigation menu items for main navbar
export const MAIN_NAV_ITEMS = [
  { label: 'Home', path: ROUTES.LANDING },
  { label: 'Hackathons', path: ROUTES.HACKATHONS },
  { label: 'Find Team', path: ROUTES.MY_MATCH },
  { label: 'About', path: `${ROUTES.LANDING}#about` },
];

// Navigation for authenticated user dropdown
export const USER_NAV_ITEMS = [
  { label: 'Profile', path: ROUTES.USER_PROFILE },
  { label: 'My Hackathons', path: ROUTES.MY_HACKATHONS },
  { label: 'My Teams', path: ROUTES.MY_TEAM },
  { label: 'Settings', path: `${ROUTES.USER_PROFILE}/settings` },
  { label: 'Log Out', path: ROUTES.LOGOUT },
];

// Function to check if a path is active (exact match or startsWith for nested routes)
export const isActivePath = (
  currentPath: string,
  targetPath: string,
  exact = false
): boolean => {
  if (exact) return currentPath === targetPath;
  return currentPath === targetPath || currentPath.startsWith(`${targetPath}/`);
};
