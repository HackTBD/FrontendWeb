import { Metadata } from 'next';
import LightLandingPage from './LandingPage';

export const metadata: Metadata = {
  title: 'HackTBD - Find Your Perfect Hackathon Team',
  description: 'Find your perfect hackathon team with HackTBD - A platform designed to streamline the team formation process at hackathons.',
};

export default function LightLanding() {
  return <LightLandingPage />;
} 