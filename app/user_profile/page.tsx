import { Metadata } from 'next';
import UserProfilePage from './UserProfilePage';

export const metadata: Metadata = {
  title: 'HackTBD - Find Your Perfect Hackathon Team',
  description: 'Connect with talented individuals and form the perfect team for your next hackathon. Browse hackathons, create a profile, and match with teammates.',
};

export default function Login() {
  // Using 'light' as default, but the ThemeProvider will also check user preferences
  return <UserProfilePage defaultTheme="light" />;
} 