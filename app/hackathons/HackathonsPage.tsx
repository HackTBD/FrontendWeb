'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '../_components/ui/ThemeProvider';
import Sidebar from '../_components/ui/Sidebar';
import { Header } from '../_components/ui/Header';
import { Button } from '../_components/ui/Button';
import HackathonCard from './components/HackathonCard';
import FilterPanel from './components/FilterPanel';
import type { FilterSettings } from './components/FilterPanel';

const mockHackathons = [
  {
    id: '1',
    title: 'HackTX 2024',
    organizer: 'University of Texas',
    location: 'Austin, TX',
    startDate: '2024-04-10',
    endDate: '2024-04-12',
    timezone: 'CST',
    logo: '/images/hackathon-logos/HackTxLogo.png',
    coverImage: '/images/hackathon-covers/HackTxCover.png',
    registrationDeadline: '2024-03-30',
    teamSize: '1-4',
    prizes: '$10,000 in prizes',
    tags: ['beginner-friendly', 'in-person', 'hardware'],
    status: 'open', // open, closed, happening, ended
  },
  {
    id: '2',
    title: 'CalHacks 2024',
    organizer: 'UC Berkeley',
    location: 'Berkeley, CA',
    startDate: '2024-05-15',
    endDate: '2024-05-17',
    timezone: 'PST',
    logo: '/images/hackathon-logos/CalHacksLogo.png',
    coverImage: '/images/hackathon-covers/CalHacksCover.jpg',
    registrationDeadline: '2024-05-01',
    teamSize: '1-5',
    prizes: '$20,000+ in prizes',
    tags: ['all-levels', 'in-person', 'ai-ml'],
    status: 'open',
  },
  {
    id: '3',
    title: 'Hack the North 2024',
    organizer: 'University of Waterloo',
    location: 'Waterloo, Canada',
    startDate: '2024-06-20',
    endDate: '2024-06-22',
    timezone: 'EST',
    logo: '/images/hackathon-logos/HackTheNorthLogo.svg',
    coverImage: '/images/hackathon-covers/HackTheNorthCover.png',
    registrationDeadline: '2024-05-30',
    teamSize: '1-4',
    prizes: 'Over $30,000 in prizes',
    tags: ['international', 'in-person', 'sponsor-challenges'],
    status: 'open',
  },
  {
    id: '4',
    title: 'SB Hacks XI',
    organizer: 'UC Santa Barbara',
    location: 'Santa Barbara, CA',
    startDate: '2024-05-01',
    endDate: '2024-05-03',
    timezone: 'PST',
    logo: '/images/hackathon-logos/SBHacksLogo.png',
    coverImage: '/images/hackathon-covers/SBHacksCover.png',
    registrationDeadline: '2024-04-15',
    teamSize: '1-4',
    prizes: '$5,000 in prizes',
    tags: ['beginner-friendly', 'in-person', 'web3'],
    status: 'open',
  },
  {
    id: '5',
    title: 'HackMIT 2024',
    organizer: 'Massachusetts Institute of Technology',
    location: 'Cambridge, MA',
    startDate: '2024-09-15',
    endDate: '2024-09-17',
    timezone: 'EST',
    logo: '/images/hackathon-logos/HackMITLogo.jpg',
    coverImage: '/images/hackathon-covers/HackMITCover.png',
    registrationDeadline: '2024-08-15',
    teamSize: '1-4',
    prizes: 'Over $15,000 in prizes',
    tags: ['advanced', 'in-person', 'hardware'],
    status: 'coming-soon',
  },
  {
    id: '6',
    title: 'DubHacks 2024',
    organizer: 'University of Washington',
    location: 'Seattle, WA',
    startDate: '2024-10-10',
    endDate: '2024-10-12',
    timezone: 'PST',
    logo: '/images/hackathon-logos/DubHacksLogo.png',
    coverImage: '/images/hackathon-covers/DubHacksCover.png',
    registrationDeadline: '2024-09-20',
    teamSize: '1-4',
    prizes: '$12,000+ in prizes',
    tags: ['all-levels', 'in-person', 'design'],
    status: 'coming-soon',
  },
];

// Get unique organizers for filter
const uniqueOrganizers = [
  ...new Set(mockHackathons.map((hackathon) => hackathon.organizer)),
];

/**
 * Main Hackathons Page component
 * Displays a list of hackathon events with filtering options
 */
export default function HackathonsPage() {
  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const [hackathons, setHackathons] = useState(mockHackathons);
  const [activeFilter, setActiveFilter] = useState('all'); // all, open, closed, happening, etc.
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    organizations: [] as string[],
    experience: [] as string[],
    location: 'any',
    timing: 'any',
    teamSize: 'any',
  });

  // Filter hackathons based on active filter, search query, and advanced filters
  const filteredHackathons = hackathons.filter((hackathon) => {
    // First apply status filter
    if (activeFilter !== 'all' && hackathon.status !== activeFilter) {
      return false;
    }

    // Then apply search query filter
    if (
      searchQuery &&
      !hackathon.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Apply organization filter
    if (
      advancedFilters.organizations.length > 0 &&
      !advancedFilters.organizations.includes(hackathon.organizer)
    ) {
      return false;
    }

    // Apply experience level filter
    if (advancedFilters.experience.length > 0) {
      const experienceMatch = advancedFilters.experience.some((exp) => {
        if (
          exp === 'Beginner-friendly' &&
          hackathon.tags.includes('beginner-friendly')
        )
          return true;
        if (exp === 'Intermediate' && hackathon.tags.includes('intermediate'))
          return true;
        if (exp === 'Advanced' && hackathon.tags.includes('advanced'))
          return true;
        if (exp === 'All Levels' && hackathon.tags.includes('all-levels'))
          return true;
        return false;
      });

      if (!experienceMatch) return false;
    }

    // Apply location filter
    if (advancedFilters.location !== 'any') {
      if (
        advancedFilters.location === 'in-person' &&
        !hackathon.tags.includes('in-person')
      )
        return false;
      if (
        advancedFilters.location === 'remote' &&
        !hackathon.tags.includes('remote')
      )
        return false;
      if (
        advancedFilters.location === 'hybrid' &&
        !hackathon.tags.includes('hybrid')
      )
        return false;
    }

    // Apply team size filter (using the teamSize property for simple filtering)
    if (advancedFilters.teamSize !== 'any') {
      if (
        advancedFilters.teamSize === 'solo' &&
        !hackathon.teamSize.includes('1')
      )
        return false;
      if (
        advancedFilters.teamSize === 'small' &&
        !(hackathon.teamSize.includes('2') || hackathon.teamSize.includes('3'))
      )
        return false;
      if (
        advancedFilters.teamSize === 'medium' &&
        !(hackathon.teamSize.includes('4') || hackathon.teamSize.includes('5'))
      )
        return false;
      if (
        advancedFilters.teamSize === 'large' &&
        parseInt(hackathon.teamSize.split('-')[1] || '0') < 6
      )
        return false;
    }

    return true;
  });

  const handleApplyFilters = (filters: FilterSettings) => {
    setAdvancedFilters(filters);
  };

  return (
    <div className={`flex h-screen ${isDark ? 'bg-zinc-900/40' : 'bg-white'}`}>
      <Sidebar activePath="/hackathons" hideLogo={true} />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Main content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page title and actions */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1
                className={`text-3xl font-bold ${isDark ? 'text-theme-gradient-primary' : 'text-theme-gradient-primary'}`}
              >
                All Hackathons
              </h1>
              <p
                className={`mt-2 ${isDark ? 'text-zinc-400' : 'text-theme-secondary'}`}
              >
                Discover upcoming hackathons and find your next challenge
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button
                variant="outline"
                className={`rounded-lg ${isDark ? 'border-pink-500/30 hover:border-pink-500/50' : 'border-[#036CA0]/30 hover:border-[#036CA0]/50'}`}
                onClick={() => setIsFiltersVisible(!isFiltersVisible)}
              >
                Filter
              </Button>
              <Button
                variant="primary"
                className={`rounded-lg ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
              >
                + Create Hackathon
              </Button>
            </div>
          </div>

          {/* Search and filter bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search hackathons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
                    isDark
                      ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20 placeholder:text-zinc-500'
                      : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20 placeholder:text-gray-400'
                  }`}
                />
                <div
                  className={`absolute left-3 top-2.5 ${isDark ? 'text-zinc-500' : 'text-gray-400'}`}
                >
                  <SearchIcon />
                </div>
              </div>
              <div className="flex flex-wrap space-x-2">
                {['all', 'open', 'happening', 'coming-soon', 'ended'].map(
                  (filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeFilter === filter
                          ? isDark
                            ? 'bg-zinc-800 text-pink-400 border border-pink-500/30'
                            : 'bg-[#036CA0]/10 text-[#036CA0] border border-[#036CA0]/20'
                          : isDark
                            ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/70'
                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() +
                        filter.slice(1).replace('-', ' ')}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Filter panel (collapsible) */}
          {isFiltersVisible && (
            <FilterPanel
              isDark={isDark}
              organizers={uniqueOrganizers}
              currentFilters={advancedFilters}
              onApplyFilters={handleApplyFilters}
              onClose={() => setIsFiltersVisible(false)}
            />
          )}

          {/* Hackathon cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map((hackathon) => (
              <HackathonCard
                key={hackathon.id}
                hackathon={hackathon}
                isDark={isDark}
              />
            ))}

            {filteredHackathons.length === 0 && (
              <div
                className={`col-span-3 p-8 rounded-lg text-center ${
                  isDark
                    ? 'bg-zinc-800/50 text-zinc-400'
                    : 'bg-gray-50 text-gray-500'
                }`}
              >
                <div className="mx-auto w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-opacity-20">
                  <SearchIcon className="w-10 h-10 opacity-30" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-theme-primary'}`}
                >
                  No hackathons found
                </h3>
                <p
                  className={isDark ? 'text-zinc-400' : 'text-theme-secondary'}
                >
                  Try adjusting your filters or search query to find more
                  hackathons.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// SearchIcon component
const SearchIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

// FilterIcon component - Original (big size)
const FilterIcon = ({ className = '' }) => (
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
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);

// FilterIcon component - Smaller and more compact
const FilterIconSmall = ({ className = '' }) => (
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
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="10" y1="17" x2="14" y2="17" />
  </svg>
);
