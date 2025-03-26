import { Metadata } from 'next';
import UserProfilePage from './UserProfilePage';

export const metadata: Metadata = {
  title: 'HackTBD - User Profile',
  description:
    'Manage your HackTBD profile, update your information, and customize your preferences to find the perfect hackathon team.',
};

export default function UserProfile() {
  return <UserProfilePage />;
}
