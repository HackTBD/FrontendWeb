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
import { useGetAllHackathonEvents } from '../_lib/graphql/queries/hackathon-events/use-get-all-hackathon-events';
import type { HackathonEventsNode } from '../_lib/graphql/__generated__/graphql';

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

  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState({
    organizations: [] as string[],
    experience: [] as string[],
    location: 'any',
    timing: 'any',
    teamSize: 'any',
  });

  // Fetch hackathon events using the GraphQL query hook
  const { hackathonEvents, loading, error, refetch } =
    useGetAllHackathonEvents();

  // Deduplicate hackathonEvents by id
  const uniqueHackathonEvents = Array.from(
    new Map(hackathonEvents.map((event) => [event.id, event])).values()
  );

  // Log for debugging
  useEffect(() => {
    console.log('Raw hackathonEvents:', hackathonEvents);
    console.log('Unique hackathonEvents:', uniqueHackathonEvents);
    if (hackathonEvents.length !== uniqueHackathonEvents.length) {
      console.warn('Duplicates detected:', hackathonEvents);
    }
  }, [hackathonEvents]);

  // Handler for Create Hackathon button
  const handleCreateHackathon = () => {
    window.location.href = '/hackathons/create';
  };

  // Filter hackathon events based on activeFilter, searchQuery, and advancedFilters
  const filteredHackathons = uniqueHackathonEvents.filter(
    (event: HackathonEventsNode) => {
      const now = new Date();
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      // Filter by status (activeFilter)
      let statusMatch = true;
      if (activeFilter === 'open') {
        statusMatch = event.status === 'OPEN';
      } else if (activeFilter === 'happening') {
        statusMatch = event.status === 'HAPPENING';
      } else if (activeFilter === 'closed') {
        statusMatch = event.status === 'CLOSED';
      } else if (activeFilter === 'completed') {
        statusMatch = event.status === 'COMPLETED';
      }

      // Filter by search query
      const searchMatch = event.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Filter by advanced filters
      const orgMatch =
        advancedFilters.organizations.length === 0 ||
        (Array.isArray(event.hackathonOrganizations) &&
          event.hackathonOrganizations.some((org) =>
            advancedFilters.organizations.includes(org?.name || '')
          ));

      const expMatch =
        advancedFilters.experience.length === 0 ||
        advancedFilters.experience.includes(event.level || '');

      const locationMatch =
        advancedFilters.location === 'any' ||
        (advancedFilters.location === 'virtual' && event.isVirtual) ||
        (advancedFilters.location === 'in-person' && !event.isVirtual);

      const timingMatch =
        advancedFilters.timing === 'any' ||
        (advancedFilters.timing === 'upcoming' && startDate > now) ||
        (advancedFilters.timing === 'ongoing' &&
          now >= startDate &&
          now <= endDate);

      const teamSizeMatch =
        advancedFilters.teamSize === 'any' ||
        (advancedFilters.teamSize === 'small' &&
          (event.maxTeamSize || 0) <= 4) ||
        (advancedFilters.teamSize === 'large' && (event.maxTeamSize || 0) > 4);

      return (
        statusMatch &&
        searchMatch &&
        orgMatch &&
        expMatch &&
        locationMatch &&
        timingMatch &&
        teamSizeMatch
      );
    }
  );

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
                onClick={handleCreateHackathon}
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
                {['all', 'open', 'happening', 'closed', 'completed'].map(
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

          {/* Hackathon events list */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && (
              <div className="col-span-full text-center">
                <p className={`${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                  Loading hackathons...
                </p>
              </div>
            )}
            {error && (
              <div className="col-span-full text-center">
                <p className="text-red-500">
                  Error loading hackathons: {error.message}
                </p>
                <Button
                  variant="outline"
                  onClick={() => refetch()}
                  className="mt-4"
                >
                  Retry
                </Button>
              </div>
            )}
            {!loading && !error && filteredHackathons.length === 0 && (
              <div className="col-span-full text-center">
                <p className={`${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>
                  No hackathons found matching your criteria.
                </p>
              </div>
            )}
            {!loading &&
              !error &&
              filteredHackathons.map((event: HackathonEventsNode) => (
                <HackathonCard
                  key={event.id}
                  hackathon={{
                    id: event.id,
                    title: event.name,
                    organizer: Array.isArray(event.hackathonOrganizations)
                      ? event.hackathonOrganizations[0]?.name ||
                        'Unknown Organizer'
                      : 'Unknown Organizer',
                    location: event.isVirtual
                      ? 'Virtual'
                      : event.location || 'Location TBD',
                    startDate: event.startDate,
                    endDate: event.endDate,
                    status: event.status.toLowerCase(),
                  }}
                  isDark={isDark}
                />
              ))}
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
