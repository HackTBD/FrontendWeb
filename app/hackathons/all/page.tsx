import { Metadata } from 'next';
import AllHackathonsPage from '../components/AllHackathonsPage';

export const metadata: Metadata = {
  title: 'All Hackathons | HackTBD',
  description: 'Browse and filter all available hackathons from around the world.',
};

/**
 * AllHackathons page
 * 
 * Displays all available hackathons with filtering capabilities
 */
export default function AllHackathonsRoute() {
  return <AllHackathonsPage />;
} 