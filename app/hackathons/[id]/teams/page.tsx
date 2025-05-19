'use client';

import { useState } from 'react';
import { use } from 'react';
import { useGetTeamsByEventId } from '../../../_lib/graphql/queries/teams/use-get-team';
import { useTheme } from '../../../_components/ui/ThemeProvider';
import Sidebar from '../../../_components/ui/Sidebar';
import { Header } from '../../../_components/ui/Header';
import Link from 'next/link';

interface MatchingResult {
  user_id: string;
  score: number;
  details: {
    skill_score_norm: number;
    background_score: number;
    size_score: number;
    raw_skill_score: number;
  };
  username?: string;
  skills?: string[];
  background?: string[];
  userId?: string; // Mapped in frontend
  matchScore?: number; // Mapped in frontend
  [key: string]: any; // For additional fields
}

export default function HackathonTeams({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [matchingResults, setMatchingResults] = useState<MatchingResult[]>([]);
  const [modalError, setModalError] = useState<string | null>(null);

  function decodeGlobalId(globalId: string): string | null {
    try {
      const decoded = atob(globalId);
      const [, uuid] = decoded.split(':');
      return uuid || null;
    } catch {
      return null;
    }
  }

  function startMatching(
    teamId: string,
    backgroundNeeded: string,
    skillsNeeded: string
  ) {
    console.log('Starting matching process...');
    console.log(`Team ID: ${teamId}, Background: ${backgroundNeeded}, Skills: ${skillsNeeded}`);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
    const requestBody = {
      team_id: teamId,
      background_needed: backgroundNeeded,
      skills_needed: skillsNeeded,
    };

    console.log('Request body:', JSON.stringify(requestBody, null, 2));

    fetch(`${apiUrl}/api/matching_users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        console.log('API Response Status:', response.status);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Matching API endpoint not found. Ensure Django server is running.');
          }
          return response.text().then((text) => {
            console.error(`API error (${response.status}):`, text);
            throw new Error(`API request failed: ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log('Raw API Response:', JSON.stringify(data, null, 2));
        const results = Array.isArray(data)
          ? data
          : data.results || data.users || [];
        if (!Array.isArray(results)) {
          throw new Error('Unexpected API response format: results is not an array');
        }
        const validatedResults = results.filter(
          (item): item is MatchingResult =>
            item &&
            typeof item === 'object' &&
            'user_id' in item &&
            'score' in item
        ).map((item) => ({
          ...item,
          userId: item.user_id,
          matchScore: item.score,
          username: item.username || `User ${item.user_id.slice(0, 8)}`,
          skills: item.skills || [],
          background: item.background || [],
        }));
        console.log('Validated Results:', validatedResults);
        setMatchingResults(validatedResults);
        setModalError(null);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error('Matching error:', error);
        setModalError(error.message || 'Failed to fetch matching results');
        setMatchingResults([]);
        setIsModalOpen(true);
      });
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

                    <div className="pt-4 mt-2 border-t border-dashed flex justify-end">
                      <button
                        className={`px-4 py-2 rounded-md flex items-center justify-center transform transition-transform duration-200 hover:scale-105 ${
                          team.status === 'OPEN' || team.status === 'FORMING'
                            ? isDark
                              ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                              : 'bg-gradient-to-r from-[#036CA0] to-[#1A4971] text-white hover:from-[#025d89] hover:to-[#153e61]'
                            : isDark
                              ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={
                          team.status !== 'OPEN' && team.status !== 'FORMING'
                        }
                        onClick={() => {
                          if (
                            team.status === 'OPEN' ||
                            team.status === 'FORMING'
                          ) {
                            const backgroundNeeded = Array.isArray(
                              team.backgroundNeeded
                            )
                              ? team.backgroundNeeded.join(',')
                              : typeof team.backgroundNeeded === 'string'
                                ? team.backgroundNeeded
                                : '';

                            const skillsNeeded = Array.isArray(
                              team.skillsNeeded
                            )
                              ? team.skillsNeeded.join(',')
                              : typeof team.skillsNeeded === 'string'
                                ? team.skillsNeeded
                                : '';

                            startMatching(
                              team.teamId || team.id,
                              backgroundNeeded,
                              skillsNeeded
                            );
                          }
                        }}
                      >
                        <svg
                          className="h-5 w-5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        Start Matching
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Modal for Matching Results */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div
                className={`rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto ${
                  isDark ? 'bg-zinc-800 text-white' : 'bg-white text-gray-900'
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Matching Results</h2>
                    <button
                      onClick={() => {
                        console.log('Closing modal');
                        setIsModalOpen(false);
                      }}
                      className={`p-1 rounded-full ${
                        isDark
                          ? 'hover:bg-zinc-700 text-zinc-300'
                          : 'hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {modalError ? (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
                      <div className="flex items-center">
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
                        <p className="ml-3 text-sm text-red-700">
                          {modalError}
                        </p>
                      </div>
                    </div>
                  ) : matchingResults.length === 0 ? (
                    <div className="text-center py-8">
                      <p
                        className={`text-lg ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
                      >
                        No matching users found.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {matchingResults.map((result) => (
                        <div
                          key={result.userId}
                          className={`p-4 rounded-md border ${
                            isDark ? 'border-zinc-700' : 'border-gray-200'
                          }`}
                        >
                          <h3 className="text-lg font-semibold">
                            {result.username}
                          </h3>
                          <p
                            className={`text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
                          >
                            Match Score: {((result.matchScore ?? 0) * 100).toFixed(2)}%
                          </p>
                          <div className="mt-2">
                           
                            <div className="flex flex-wrap gap-2 mt-1">
                              {(Array.isArray(result.skills) ? result.skills : []).map(
                                (skill: string, index: number) => (
                                  <span
                                    key={index}
                                    className={`px-2 py-1 text-xs rounded ${
                                      isDark
                                        ? 'bg-pink-900/30 text-pink-300'
                                        : 'bg-pink-100 text-pink-800'
                                    }`}
                                  >
                                    {skill}
                                  </span>
                                )
                              )}
                             
                            </div>
                          </div>
                          <div className="mt-2">
                            
                            <div className="flex flex-wrap gap-2 mt-1">
                              {(Array.isArray(result.background) ? result.background : []).map(
                                (bg: string, index: number) => (
                                  <span
                                    key={index}
                                    className={`px-2 py-1 text-xs rounded ${
                                      isDark
                                        ? 'bg-blue-900/30 text-blue-300'
                                        : 'bg-blue-100 text-blue-800'
                                    }`}
                                  >
                                    {bg}
                                  </span>
                                )
                              )}
                              
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`p-4 border-t ${isDark ? 'border-zinc-700' : 'border-gray-200'}`}
                >
                  <button
                    onClick={() => {
                      console.log('Closing modal via button');
                      setIsModalOpen(false);
                    }}
                    className={`w-full px-4 py-2 rounded-md ${
                      isDark
                        ? 'bg-pink-600 hover:bg-pink-700 text-white'
                        : 'bg-[#036CA0] hover:bg-[#036CA0]/90 text-white'
                    }`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}