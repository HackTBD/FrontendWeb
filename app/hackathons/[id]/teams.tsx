'use client';

import { use } from 'react';
import { useGetAllTeams} from '../../_lib/graphql/queries/teams/use-get-all-teams';
import { useTheme } from '../../_components/ui/ThemeProvider';
import Sidebar from '../../_components/ui/Sidebar';
import { Header } from '../../_components/ui/Header';
import Link from 'next/link';

export default function HackathonTeams({ params }: { params: { id: string } }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Unwrap the param if you want to use the suspense approach with 'use'
  const { id } = params;

  // Decode the hackathon global ID if you need (same decodeGlobalId logic can be copied)
  function decodeGlobalId(globalId: string): string | null {
    try {
      const decoded = atob(globalId);
      const [, uuid] = decoded.split(':');
      return uuid || null;
    } catch {
      return null;
    }
  }
  const eventId = decodeGlobalId(decodeURIComponent(id)) || '';

  // Use your query hook to fetch teams for the hackathon event
  const { teams: hackathonTeams, loading, error } = useGetAllTeams();

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}>
      <Sidebar activePath="/hackathons" hideLogo />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full py-8 px-4 sm:px-6 lg:px-8">
          <h1 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Teams for Hackathon
          </h1>

          {loading && <p className="text-center">Loading teams...</p>}
          {error && <p className="text-red-600 text-center">Error loading teams: {error.message}</p>}

          {!loading && !error && hackathonTeams?.length === 0 && (
            <p className="text-center text-gray-500">No teams found for this hackathon.</p>
          )}

          {!loading && !error && hackathonTeams?.length > 0 && (
            <ul className="space-y-4">
              {hackathonTeams.map((team: any) => (
                <li
                  key={team.id}
                  className={`p-4 rounded-md border ${isDark ? 'border-zinc-700 bg-zinc-800 text-white' : 'border-gray-200 bg-white text-gray-900'}`}
                >
                  <h2 className="text-xl font-semibold">{team.name}</h2>
                  <p className="mt-1">Members: {team.members.length}</p>
                  {/* Add more team info as needed */}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8">
            <Link href={`/hackathons/${id}`}>
              <button
                className={`px-4 py-2 rounded-md ${
                  isDark
                    ? 'bg-pink-600 hover:bg-pink-700 text-white'
                    : 'bg-[#036CA0] hover:bg-[#036CA0]/90 text-white'
                }`}
              >
                Back to Hackathon Details
              </button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
