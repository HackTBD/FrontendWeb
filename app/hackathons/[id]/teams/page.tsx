'use client';

import { use } from 'react';
import { useGetTeamsByEventId } from '../../../_lib/graphql/queries/teams/use-get-team';
import { useTheme } from '../../../_components/ui/ThemeProvider';
import Sidebar from '../../../_components/ui/Sidebar';
import { Header } from '../../../_components/ui/Header';
import Link from 'next/link';

const hardcodedTeams = [
  {
    teamId: '1',
    teamName: 'Alpha Team',
    status: 'Active',
    createdAt: '2024-05-01',
    skillsNeeded: ['React', 'GraphQL'],
    backgroundNeeded: ['Frontend Development', 'UI/UX'],
  },
  {
    teamId: '2',
    teamName: 'Beta Squad',
    status: 'Forming',
    createdAt: '2024-04-20',
    skillsNeeded: ['Python', 'Data Analysis'],
    backgroundNeeded: ['Data Science', 'Machine Learning'],
  },
  {
    teamId: '3',
    teamName: 'Gamma Group',
    status: 'Completed',
    createdAt: '2024-03-15',
    skillsNeeded: [],
    backgroundNeeded: [],
  },
];

export default function HackathonTeams({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params); // unwrap the promise
  const { id } = resolvedParams;

  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

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
  const {
    teams: hackathonTeams,
    loading,
    error,
  } = useGetTeamsByEventId(eventId);

  const teamsToRender =
    !loading && !error && hackathonTeams?.length
      ? hackathonTeams
      : hardcodedTeams;

  return (
    <div
      className={`flex min-h-screen ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}
    >
      <Sidebar activePath="/hackathons" hideLogo />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 max-w-5xl mx-auto w-full py-8 px-4 sm:px-6 lg:px-8">
          <h1
            className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Teams for Hackathon
          </h1>

          {loading && <p className="text-center">Loading teams...</p>}
          {error && (
            <p className="text-red-600 text-center">
              Error loading teams: {error.message}
            </p>
          )}

          {!loading && !error && teamsToRender.length === 0 && (
            <p className="text-center text-gray-500">
              No teams found for this hackathon.
            </p>
          )}

          {!loading && teamsToRender.length > 0 && (
            <ul className="space-y-4">
              {teamsToRender.map((team: any) => (
                <li
                  key={team.teamId || team.id}
                  className={`p-4 rounded-md border ${
                    isDark
                      ? 'border-zinc-700 bg-zinc-800 text-white'
                      : 'border-gray-200 bg-white text-gray-900'
                  }`}
                >
                  <h2 className="text-xl font-semibold">
                    {team.teamName || team.name}
                  </h2>
                  <p>Status: {team.status}</p>
                  <p>
                    Created At: {new Date(team.createdAt).toLocaleDateString()}
                  </p>
                  <p>
                    Skills Needed:{' '}
                    {Array.isArray(team.skillsNeeded)
                      ? team.skillsNeeded.length > 0
                        ? team.skillsNeeded.join(', ')
                        : 'None'
                      : typeof team.skillsNeeded === 'string' &&
                          team.skillsNeeded.trim()
                        ? team.skillsNeeded.split(',').join(', ')
                        : 'None'}
                  </p>

                  <p>
                    Background Needed:{' '}
                    {Array.isArray(team.backgroundNeeded)
                      ? team.backgroundNeeded.length > 0
                        ? team.backgroundNeeded.join(', ')
                        : 'None'
                      : typeof team.backgroundNeeded === 'string' &&
                          team.backgroundNeeded.trim()
                        ? team.backgroundNeeded.split(',').join(', ')
                        : 'None'}
                  </p>
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
