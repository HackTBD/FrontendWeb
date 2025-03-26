import { Metadata } from 'next';
import HackathonsPage from './HackathonsPage';

/**
 * All Hackathons page component - Entry point for the /hackathons route
 * 
 * This component serves as the main page for displaying all available hackathons.
 * It imports and renders the HackathonsPage component which contains all the 
 * hackathon listing functionality.
 * 
 * @returns {React.ReactNode} The rendered hackathons page
 */
export const metadata: Metadata = {
  title: 'HackTBD - Browse All Hackathons',
  description:
    'Discover upcoming hackathons, filter by technology and skill level, and find your next coding challenge.',
};

export default function AllHackathons() {
  return <HackathonsPage />;
} 