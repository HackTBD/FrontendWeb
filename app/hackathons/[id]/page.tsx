'use client';

import { useGetHackathonEventById } from '../../_lib/graphql/queries/hackathon-events/use-get-hackathon-event';
import type { HackathonEventsNode } from '../../_lib/graphql/__generated__/graphql';
import { useTheme } from '../../_components/ui/ThemeProvider';
import { Header } from '../../_components/ui/Header';
import { Button } from '../../_components/ui/Button';
import Sidebar from '../../_components/ui/Sidebar';
import Modal from '../../_components/ui/Modal';
import EditHackathonForm from '../components/EditHackathonForm';
import Link from 'next/link';
import HackathonDetailInfo from '../components/HackathonDetailInfo';
import { use, useState } from 'react';

/**
 * Decode a Relay-style global ID to extract the plain UUID.
 * @param globalId - The base64-encoded global ID
 * @returns The plain UUID or null if invalid
 */
function decodeGlobalId(globalId: string): string | null {
  try {
    const decoded = atob(globalId);
    const [, uuid] = decoded.split(':');
    if (!uuid) {
      console.warn('Invalid global ID format:', decoded);
      return null;
    }
    return uuid;
  } catch (error) {
    console.error('Error decoding global ID:', globalId, error);
    return null;
  }
}

/**
 * Hackathon Details Page
 *
 * Displays detailed information about a single hackathon event with enhanced design and edit functionality.
 *
 * @param {Object} params - Route parameters (Promise)
 */
export default function HackathonDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Unwrap params using React.use()
  const { id } = use(params);

  // Decode URL-encoded global ID
  const decodedId = decodeURIComponent(id);
  console.log('Raw ID:', id, 'Decoded ID:', decodedId);

  // Extract UUID from global ID
  const eventId = decodeGlobalId(decodedId);
  console.log('Extracted eventId:', eventId);

  // Use the UUID for the query
  const { hackathonEvent, loading, error, refetch } = useGetHackathonEventById(
    eventId || ''
  );

  // State for modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Log fetched data for debugging
  console.log('Hackathon event details:', {
    hackathonEvent,
    loading,
    error,
    decodedId,
    eventId,
  });

  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Map status to badge colors
  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return isDark
          ? 'bg-green-600/20 text-green-400 border-green-600/30'
          : 'bg-green-100 text-green-800 border-green-200';
      case 'happening':
        return isDark
          ? 'bg-blue-600/20 text-blue-400 border-blue-600/30'
          : 'bg-blue-100 text-blue-800 border-blue-200';
      case 'closed':
      case 'completed':
        return isDark
          ? 'bg-red-600/20 text-red-400 border-red-600/30'
          : 'bg-red-100 text-red-800 border-red-200';
      default:
        return isDark
          ? 'bg-zinc-600/20 text-zinc-400 border-zinc-600/30'
          : 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Map level to badge colors
  const getLevelBadgeColor = (level: string | null | undefined) => {
    switch (level?.toLowerCase()) {
      case 'beginner':
        return isDark
          ? 'bg-teal-600/20 text-teal-400 border-teal-600/30'
          : 'bg-teal-100 text-teal-800 border-teal-200';
      case 'intermediate':
        return isDark
          ? 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30'
          : 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced':
        return isDark
          ? 'bg-purple-600/20 text-purple-400 border-purple-600/30'
          : 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return isDark
          ? 'bg-zinc-600/20 text-zinc-400 border-zinc-600/30'
          : 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div
      className={`flex min-h-screen ${isDark ? 'bg-zinc-900' : 'bg-gray-50'}`}
    >
      <Sidebar activePath="/hackathons" hideLogo={true} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="flex-1 max-w-5xl mx-auto w-full py-8 px-4 sm:px-6 lg:px-8">
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
            </div>
          )}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-medium">
                {error.message.includes('No HackathonEventsNode found')
                  ? 'Invalid hackathon ID. The event may not exist.'
                  : `Error: ${error.message}`}
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => refetch()}
                  className={`${
                    isDark
                      ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                      : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
                  }`}
                >
                  Retry
                </Button>
                <Link href="/hackathons">
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                        : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
                    }`}
                  >
                    Back to Hackathons
                  </Button>
                </Link>
              </div>
            </div>
          )}
          {!loading && !error && !hackathonEvent && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600 font-medium">
                No hackathon found for the provided ID.
              </p>
              <Link href="/hackathons">
                <Button
                  variant="outline"
                  className={`mt-6 ${
                    isDark
                      ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                      : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
                  }`}
                >
                  Back to Hackathons
                </Button>
              </Link>
            </div>
          )}
          {hackathonEvent && (
            <div className="space-y-8">
              {/* Hero Section */}
              <div
                className={`rounded-xl p-8 ${
                  isDark
                    ? 'bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700/50'
                    : 'bg-gradient-to-r from-white to-gray-100 border border-gray-200/50'
                }`}
              >
                <h1
                  className={`text-4xl font-bold tracking-tight ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {hackathonEvent.name}
                </h1>
                <p
                  className={`mt-2 text-lg ${
                    isDark ? 'text-zinc-300' : 'text-gray-600'
                  }`}
                >
                  Organized by:{' '}
                  {hackathonEvent.hackathonOrganizations?.[0]?.name ||
                    'Unknown Organizer'}
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadgeColor(
                      hackathonEvent.status
                    )}`}
                  >
                    {hackathonEvent.status.charAt(0).toUpperCase() +
                      hackathonEvent.status.slice(1).toLowerCase()}
                  </span>
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getLevelBadgeColor(
                      hackathonEvent.level
                    )}`}
                  >
                    {hackathonEvent.level || 'Not specified'}
                  </span>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button
                    variant="primary"
                    className={`${
                      isDark
                        ? 'bg-pink-500 hover:bg-pink-600 text-white'
                        : 'bg-[#036CA0] hover:bg-[#036CA0]/90 text-white'
                    }`}
                    onClick={() => alert('Join functionality coming soon!')}
                  >
                    Join Hackathon
                  </Button>
                  <Link href={`/hackathons/${id}/teams`}>
                    <Button
                      variant="primary"
                      className={`${
                        isDark
                          ? 'bg-purple-500 hover:bg-purple-600 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      View Teams
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className={`${
                      isDark
                        ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                        : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
                    }`}
                    onClick={() => setIsEditModalOpen(true)}
                  >
                    Edit Hackathon
                  </Button>
                  <Link href="/hackathons">
                    <Button
                      variant="outline"
                      className={`${
                        isDark
                          ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
                          : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
                      }`}
                    >
                      Back to Hackathons
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Details Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`rounded-lg p-6 ${
                    isDark
                      ? 'bg-zinc-800/50 border border-zinc-700/50'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <h2
                    className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Event Details
                  </h2>
                  <dl className="space-y-4">
                    <div>
                      <dt
                        className={`text-sm font-medium ${
                          isDark ? 'text-zinc-400' : 'text-gray-500'
                        }`}
                      >
                        Date
                      </dt>
                      <dd
                        className={`text-base ${
                          isDark ? 'text-zinc-200' : 'text-gray-900'
                        }`}
                      >
                        {formatDate(hackathonEvent.startDate)} -{' '}
                        {formatDate(hackathonEvent.endDate)}
                      </dd>
                    </div>
                    <div>
                      <dt
                        className={`text-sm font-medium ${
                          isDark ? 'text-zinc-400' : 'text-gray-500'
                        }`}
                      >
                        Location
                      </dt>
                      <dd
                        className={`text-base ${
                          isDark ? 'text-zinc-200' : 'text-gray-900'
                        }`}
                      >
                        {hackathonEvent.isVirtual
                          ? 'Virtual'
                          : hackathonEvent.location || 'In-Person'}
                      </dd>
                    </div>
                    <div>
                      <dt
                        className={`text-sm font-medium ${
                          isDark ? 'text-zinc-400' : 'text-gray-500'
                        }`}
                      >
                        Team Size
                      </dt>
                      <dd
                        className={`text-base ${
                          isDark ? 'text-zinc-200' : 'text-gray-900'
                        }`}
                      >
                        {hackathonEvent.minTeamSize || 1} -{' '}
                        {hackathonEvent.maxTeamSize || 'Not specified'}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Description Section */}
                <div
                  className={`rounded-lg p-6 ${
                    isDark
                      ? 'bg-zinc-800/50 border border-zinc-700/50'
                      : 'bg-white border border-gray-200'
                  }`}
                >
                  <h2
                    className={`text-xl font-semibold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    About
                  </h2>
                  <HackathonDetailInfo
                    hackathon={{
                      description:
                        hackathonEvent.description ||
                        'No description available',
                    }}
                    isDark={isDark}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Edit Modal - Rendered outside the conditional to avoid prop issues */}
          <Modal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            isDark={isDark}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Edit Hackathon
            </h2>
            {hackathonEvent ? (
              <EditHackathonForm
                hackathon={hackathonEvent}
                isDark={isDark}
                onClose={() => setIsEditModalOpen(false)}
              />
            ) : (
              <p className="text-red-500">
                Cannot edit: Hackathon data not available.
              </p>
            )}
          </Modal>
        </main>
      </div>
    </div>
  );
}
