'use client';

import { useState } from 'react';
import { Button } from '../../_components/ui/Button';

interface HackathonDetailHeaderProps {
  hackathon: {
    id: string;
    title: string;
    organizer: string;
    location: string;
    startDate: string;
    endDate: string;
    registrationDeadline: string;
    status: string;
  };
  isDark: boolean;
}

/**
 * HackathonDetailHeader component
 *
 * Displays the header section of a hackathon detail page, including:
 * - Title and organizer
 * - Key metadata (dates, location, status)
 * - Action buttons (Apply, Share, Save)
 *
 * @param {HackathonDetailHeaderProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export default function HackathonDetailHeader({
  hackathon,
  isDark,
}: HackathonDetailHeaderProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate days remaining until registration deadline
  const calculateDaysRemaining = () => {
    const today = new Date();
    const deadline = new Date(hackathon.registrationDeadline);
    const diffTime = Math.abs(deadline.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (deadline < today) {
      return 'Registration closed';
    }

    return `${diffDays} days remaining`;
  };

  // Get status badge style based on hackathon status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'open':
        return {
          bgColor: isDark ? 'bg-green-500/20' : 'bg-green-100',
          textColor: isDark ? 'text-green-400' : 'text-green-700',
          label: 'Registration Open',
        };
      case 'happening':
        return {
          bgColor: isDark ? 'bg-purple-500/20' : 'bg-[#036CA0]/20',
          textColor: isDark ? 'text-purple-400' : 'text-[#036CA0]',
          label: 'Happening Now',
        };
      case 'coming-soon':
        return {
          bgColor: isDark ? 'bg-blue-500/20' : 'bg-blue-100',
          textColor: isDark ? 'text-blue-400' : 'text-blue-700',
          label: 'Coming Soon',
        };
      case 'ended':
        return {
          bgColor: isDark ? 'bg-gray-500/20' : 'bg-gray-100',
          textColor: isDark ? 'text-gray-400' : 'text-gray-600',
          label: 'Ended',
        };
      default:
        return {
          bgColor: isDark ? 'bg-gray-500/20' : 'bg-gray-100',
          textColor: isDark ? 'text-gray-400' : 'text-gray-600',
          label: 'Unknown Status',
        };
    }
  };

  const statusStyles = getStatusStyles(hackathon.status);

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md ${isDark ? 'bg-zinc-800' : 'bg-white'}`}
    >
      {/* Header section */}
      <div className="relative h-64 md:h-80">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 z-10" />

        {/* Fallback background */}
        <div
          className={`absolute inset-0 ${isDark ? 'bg-zinc-700' : 'bg-gray-200'}`}
        >
          <div className="h-full w-full flex items-center justify-center">
            <span className="text-5xl font-bold text-gray-400 opacity-30">
              {hackathon.title.substring(0, 2)}
            </span>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <div className="flex items-end gap-4">
            {/* Title and organizer */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-bold text-white line-clamp-1">
                  {hackathon.title}
                </h1>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles.bgColor} ${statusStyles.textColor}`}
                >
                  {statusStyles.label}
                </span>
              </div>
              <p className="text-gray-300">{hackathon.organizer}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details and action buttons */}
      <div
        className={`p-6 border-t ${isDark ? 'border-zinc-700' : 'border-gray-100'}`}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Key details */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <p
                className={`text-xs uppercase ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
              >
                Dates
              </p>
              <p
                className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {formatDate(hackathon.startDate)} -{' '}
                {formatDate(hackathon.endDate)}
              </p>
            </div>
            <div>
              <p
                className={`text-xs uppercase ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
              >
                Location
              </p>
              <p
                className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {hackathon.location}
              </p>
            </div>
            <div>
              <p
                className={`text-xs uppercase ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
              >
                Registration
              </p>
              <p
                className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {calculateDaysRemaining()}
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-3">
            <Button
              variant="primary"
              className={`px-6 py-2 ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
            >
              Apply Now
            </Button>
            <Button
              variant={isDark ? 'outline' : 'secondary'}
              className={`${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <div className="flex items-center">
                <ShareIcon className="w-5 h-5 mr-2" />
                Share
              </div>
            </Button>
            <Button
              variant={isDark ? 'outline' : 'secondary'}
              className={`px-3 ${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:bg-gray-50'}`}
            >
              <BookmarkIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Icon components
const ShareIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);

const BookmarkIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
  </svg>
);
