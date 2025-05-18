'use client';

import { use } from 'react';
import { useGetTeamsByEventId } from '../../../_lib/graphql/queries/teams/use-get-team';
import { useTheme } from '../../../_components/ui/ThemeProvider';
import Sidebar from '../../../_components/ui/Sidebar';
import { Header } from '../../../_components/ui/Header';
import Link from 'next/link';

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

  return (
    <div
      className={`flex min-h-screen ${isDark ? 'bg-zinc-900' : 'bg-gray-100'}`}
    >
      <Sidebar activePath="/hackathons" hideLogo />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full py-10 px-4 sm:px-6 lg:px-8">
          <div
            className={`mb-8 border-b ${isDark ? 'border-zinc-700' : 'border-gray-200'} pb-5`}
          >
            <div className="flex justify-between items-center">
              <h1
                className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                Teams for Hackathon
              </h1>
              <Link href={`/hackathons/${id}`}>
                <button
                  className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center ${
                    isDark
                      ? 'bg-pink-600 hover:bg-pink-700 text-white'
                      : 'bg-[#036CA0] hover:bg-[#036CA0]/90 text-white'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Hackathon Details
                </button>
              </Link>
            </div>
            <p
              className={`mt-2 text-lg ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
            >
              Browse all registered teams and their requirements
            </p>
          </div>

          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    Error loading teams: {error.message}
                  </p>
                </div>
              </div>
            </div>
          )}

          {!loading &&
            !error &&
            (!hackathonTeams || hackathonTeams.length === 0) && (
              <div
                className={`text-center py-16 ${isDark ? 'bg-zinc-800' : 'bg-white'} rounded-lg shadow-sm`}
              >
                <svg
                  className={`mx-auto h-12 w-12 ${isDark ? 'text-zinc-600' : 'text-gray-400'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <p
                  className={`mt-4 text-lg font-medium ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
                >
                  No teams found for this hackathon.
                </p>
                <p
                  className={`mt-2 ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}
                >
                  Be the first to create a team and start collaborating!
                </p>
              </div>
            )}

          {!loading && !error && hackathonTeams?.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hackathonTeams.map((team: any) => (
                <div
                  key={team.teamId || team.id}
                  className={`p-6 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md ${
                    isDark
                      ? 'bg-zinc-800 border border-zinc-700 text-white'
                      : 'bg-white border border-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">
                      {team.teamName || team.name}
                    </h2>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        team.status === 'OPEN'
                          ? isDark
                            ? 'bg-green-900/30 text-green-400'
                            : 'bg-green-100 text-green-800'
                          : team.status === 'CLOSED'
                            ? isDark
                              ? 'bg-red-900/30 text-red-400'
                              : 'bg-red-100 text-red-800'
                            : isDark
                              ? 'bg-blue-900/30 text-blue-400'
                              : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {team.status}
                    </span>
                  </div>

                  <div
                    className={`space-y-3 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
                  >
                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        Created:{' '}
                        <time dateTime={team.createdAt}>
                          {new Date(team.createdAt).toLocaleDateString(
                            undefined,
                            { year: 'numeric', month: 'short', day: 'numeric' }
                          )}
                        </time>
                      </span>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Skills Needed:</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {(Array.isArray(team.skillsNeeded)
                            ? team.skillsNeeded
                            : typeof team.skillsNeeded === 'string' &&
                                team.skillsNeeded.trim()
                              ? team.skillsNeeded.split(',')
                              : []
                          ).map((skill: string, index: number) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded ${
                                isDark
                                  ? 'bg-pink-900/30 text-pink-300'
                                  : 'bg-pink-100 text-pink-800'
                              }`}
                            >
                              {skill.trim()}
                            </span>
                          ))}
                          {!Array.isArray(team.skillsNeeded) &&
                            typeof team.skillsNeeded !== 'string' && (
                              <span className="text-sm italic">
                                None specified
                              </span>
                            )}
                          {(Array.isArray(team.skillsNeeded) &&
                            team.skillsNeeded.length === 0) ||
                            (typeof team.skillsNeeded === 'string' &&
                              !team.skillsNeeded.trim() && (
                                <span className="text-sm italic">
                                  None specified
                                </span>
                              ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg
                        className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <div>
                        <p className="font-medium">Background Needed:</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {(Array.isArray(team.backgroundNeeded)
                            ? team.backgroundNeeded
                            : typeof team.backgroundNeeded === 'string' &&
                                team.backgroundNeeded.trim()
                              ? team.backgroundNeeded.split(',')
                              : []
                          ).map((background: string, index: number) => (
                            <span
                              key={index}
                              className={`px-2 py-1 text-xs rounded ${
                                isDark
                                  ? 'bg-blue-900/30 text-blue-300'
                                  : 'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {background.trim()}
                            </span>
                          ))}
                          {!Array.isArray(team.backgroundNeeded) &&
                            typeof team.backgroundNeeded !== 'string' && (
                              <span className="text-sm italic">
                                None specified
                              </span>
                            )}
                          {(Array.isArray(team.backgroundNeeded) &&
                            team.backgroundNeeded.length === 0) ||
                            (typeof team.backgroundNeeded === 'string' &&
                              !team.backgroundNeeded.trim() && (
                                <span className="text-sm italic">
                                  None specified
                                </span>
                              ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
