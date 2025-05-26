'use client';

import { use, useEffect, useState } from 'react';
import { useGetHackathonUserProfilesByEventId } from '../../../_lib/graphql/queries/hackathon-user-profiles/use-get-all-hackathon-user-profiles';
import { useTheme } from '../../../_components/ui/ThemeProvider';
import Sidebar from '../../../_components/ui/Sidebar';
import { Header } from '../../../_components/ui/Header';
import Link from 'next/link';

interface HackathonProfileProps {
  user_id: string;
  profile_id: string;
  event_id: string;
  team_id: string;
  skills: string;
  bio: string;
  preferences: string;
  created_at: string;
  updated_at: string;
}

export default function HackathonUserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const { theme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(dark);
  }, [theme]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);

  const eventId = decodeGlobalId(id) || '';

  const {
    hackathonUserProfiles,
    loading: userProfileLoading,
    error: userProfileError,
  } = useGetHackathonUserProfilesByEventId(eventId || '');

  function decodeGlobalId(globalId: string): string | null {
    try {
      const decoded = atob(globalId);
      const [, uuid] = decoded.split(':');
      return uuid || null;
    } catch {
      return null;
    }
  }

  if (userProfileLoading) return <p className="p-4">Loading...</p>;
  if (userProfileError || !hackathonUserProfiles)
    return <p className="p-4 text-red-500">Error loading profile.</p>;

  const profile: HackathonProfileProps = hackathonUserProfiles;
  const decodedEventId = decodeGlobalId(decodeURIComponent(id)) || '';

  return (
    <div
      className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}
    >
      <Sidebar />
      <div className="ml-64 p-6">
        <Header title="Hackathon User Profile" />
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">User Bio</h2>
          <p>{profile.bio}</p>

          <h2 className="text-xl font-bold mt-4 mb-2">Skills</h2>
          <p>{profile.skills}</p>

          <h2 className="text-xl font-bold mt-4 mb-2">Preferences</h2>
          <p>{profile.preferences}</p>

          <h2 className="text-xl font-bold mt-4 mb-2">Event ID</h2>
          <p>{profile.event_id}</p>

          <h2 className="text-xl font-bold mt-4 mb-2">Team ID</h2>
          <p>{profile.team_id}</p>
        </div>

        <Link href="/dashboard">
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Back to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
