'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../../_components/ui/Button';
import { ROUTES } from '../../_lib/routes';

/**
 * Props for the HackathonCard component
 */
interface HackathonCardProps {
  hackathon: {
    id: string;
    title: string;
    organizer: string;
    location: string;
    /** Start date in ISO format (YYYY-MM-DD) */
    startDate: string;
    /** End date in ISO format (YYYY-MM-DD) */
    endDate: string;
    status: string;
  };
  isDark: boolean;
}

/**
 * HackathonCard component
 *
 * Displays a card for an individual hackathon with key information including:
 * - Title, organizer, and location
 * - Dates and status
 * - Visual indicators for status (open, happening, etc.)
 * - Link to view details
 *
 * The component adjusts styling based on theme.
 *
 * @param {HackathonCardProps} props - The component props
 * @returns {JSX.Element} Rendered HackathonCard component
 */
export default function HackathonCard({
  hackathon,
  isDark,
}: HackathonCardProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Get status style based on hackathon status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'open':
        return {
          bgColor: isDark ? 'bg-green-500/20' : 'bg-green-100',
          textColor: isDark ? 'text-green-400' : 'text-green-800',
          label: 'Registration Open',
        };
      case 'happening':
        return {
          bgColor: isDark ? 'bg-purple-500/20' : 'bg-purple-100',
          textColor: isDark ? 'text-purple-400' : 'text-purple-800',
          label: 'Happening Now',
        };
      case 'closed':
        return {
          bgColor: isDark ? 'bg-blue-500/20' : 'bg-blue-100',
          textColor: isDark ? 'text-blue-400' : 'text-blue-800',
          label: 'Closed',
        };
      case 'completed':
        return {
          bgColor: isDark ? 'bg-gray-500/20' : 'bg-gray-100',
          textColor: isDark ? 'text-gray-400' : 'text-gray-800',
          label: 'Completed',
        };
      default:
        return {
          bgColor: isDark ? 'bg-gray-500/20' : 'bg-gray-100',
          textColor: isDark ? 'text-gray-400' : 'text-gray-800',
          label: 'Unknown Status',
        };
    }
  };

  const statusStyles = getStatusStyles(hackathon.status);

  return (
    <div
      className={`group rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md ${
        isDark
          ? 'bg-zinc-800/90 border border-zinc-700/50 hover:border-zinc-600/80'
          : 'bg-white border border-gray-200 hover:border-[#036CA0]/20'
      }`}
    >
      {/* Card header */}
      <div className="relative h-40">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 z-10" />

        {/* Default fallback image handling */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${isDark ? 'bg-zinc-700' : 'bg-gray-100'}`}
        >
          <span
            className={`text-4xl font-bold ${isDark ? 'text-zinc-600' : 'text-gray-300'}`}
          >
            {hackathon.title.substring(0, 2)}
          </span>
        </div>

        {/* Status badge */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles.bgColor} ${statusStyles.textColor}`}
          >
            {statusStyles.label}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="px-4 pt-10 pb-5">
        <h3
          className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          {hackathon.title}
        </h3>
        <p
          className={`text-sm mb-2 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
        >
          {hackathon.organizer}
        </p>

        {/* Event details */}
        <div
          className={`flex items-center text-sm mb-3 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
        >
          <CalendarIcon className="mr-2 w-4 h-4 opacity-70" />
          <span>
            {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}
          </span>
        </div>

        <div
          className={`flex items-center text-sm mb-3 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}
        >
          <LocationIcon className="mr-2 w-4 h-4 opacity-70" />
          <span>{hackathon.location}</span>
        </div>
      </div>

      {/* Card footer */}
      <div
        className={`px-4 py-4 flex justify-end border-t ${
          isDark ? 'border-zinc-700/80' : 'border-gray-100'
        }`}
      >
        <Link href={ROUTES.HACKATHON_DETAILS(hackathon.id)}>
          <Button
            variant={isDark ? 'outline' : 'primary'}
            className={`py-1.5 px-3 text-sm rounded-lg ${
              isDark ? 'border-pink-500/30 hover:border-pink-500/50' : ''
            }`}
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}

// Calendar icon
const CalendarIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// Location icon
const LocationIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
