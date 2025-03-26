import { Metadata } from 'next';
import AllHackathonsPage from '../components/AllHackathonsPage';

/**
 * All Hackathons Event page component - Entry point for the /hackathons/all route
 *
 * This component serves as the main page for displaying all available hackathons events
 * with a UI that matches the provided Figma design.
 *
 * @returns {React.ReactNode} The rendered all hackathons events page
 */
export const metadata: Metadata = {
  title: 'HackTBD - All Hackathons Events',
  description:
    'Discover and browse all available hackathon events, filter by date, skill level, and more.',
};

export default function AllHackathonsEvents() {
  return <AllHackathonsPage />;
}
