import { Metadata } from 'next';
import LandingPage from './LandingPage';

export const metadata: Metadata = {
  title: 'HackTBD - Find Your Perfect Hackathon Team',
  description:
    'HackTBD helps you find the perfect hackathon team based on your skills, goals, and experience.',
};

export default function Landing() {
  return <LandingPage />;
}
