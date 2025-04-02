import { Metadata } from 'next';
import NotFoundPage from './NotFoundPage';

export const metadata: Metadata = {
  title: 'HackTBD - Find Your Perfect Hackathon Team',
  description:
    'HackTBD helps you find the perfect hackathon team based on your skills, goals, and experience.',
};

export default function NotFound() {
  return <NotFoundPage />;
}
