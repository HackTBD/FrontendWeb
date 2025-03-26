'use client';

import { useState, useEffect, useRef } from 'react';

interface HackathonFiltersProps {
  organizers: string[];
  techTags: string[];
  selectedLevel: string;
  selectedOrganizer: string;
  selectedTechTags: string[];
  searchQuery: string;
  isDarkMode: boolean;
  onLevelChange: (level: string) => void;
  onOrganizerChange: (organizer: string) => void;
  onTechTagToggle: (tag: string) => void;
  onSearchChange: (query: string) => void;
}

/**
 * HackathonFilters component
 * 
 * Provides filtering controls for hackathons, including level and organization filters,
 * as well as a search input.
 * 
 * @param {HackathonFiltersProps} props - Component props
 * @returns {JSX.Element} Rendered HackathonFilters component
 */
export default function HackathonFilters({
  organizers,
  techTags,
  selectedLevel,
  selectedOrganizer,
  selectedTechTags,
  searchQuery,
  isDarkMode,
  onLevelChange,
  onOrganizerChange,
  onTechTagToggle,
  onSearchChange
}: HackathonFiltersProps) {
  // State for dropdown visibility
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);
  const [showOrganizerDropdown, setShowOrganizerDropdown] = useState(false);
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);
  
  // Refs for handling clickaway
  const levelDropdownRef = useRef<HTMLDivElement>(null);
  const organizerDropdownRef = useRef<HTMLDivElement>(null);
  const filtersPanelRef = useRef<HTMLDivElement>(null);

  // Handle level selection
  const handleLevelSelect = (level: string) => {
    onLevelChange(level);
    setShowLevelDropdown(false);
  };

  // Handle organizer selection
  const handleOrganizerSelect = (organizer: string) => {
    onOrganizerChange(organizer);
    setShowOrganizerDropdown(false);
  };

  // Handle clicks outside the dropdowns to close them
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (levelDropdownRef.current && !levelDropdownRef.current.contains(event.target as Node)) {
        setShowLevelDropdown(false);
      }
      if (organizerDropdownRef.current && !organizerDropdownRef.current.contains(event.target as Node)) {
        setShowOrganizerDropdown(false);
      }
      if (filtersPanelRef.current && !filtersPanelRef.current.contains(event.target as Node) && 
          !event.composedPath().some(el => (el as HTMLElement)?.dataset?.filtersToggle === 'true')) {
        setShowFiltersPanel(false);
      }
    }

    // Add click event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search Hackathons"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-full text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDarkMode
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20 placeholder:text-zinc-500'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20 placeholder:text-gray-400'
            }`}
          />
          <div className={`absolute left-3 top-2.5 ${isDarkMode ? 'text-zinc-500' : 'text-gray-400'}`}>
            <SearchIcon />
          </div>
        </div>

        {/* Filters button */}
        <button 
          data-filters-toggle="true"
          onClick={() => setShowFiltersPanel(!showFiltersPanel)}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            isDarkMode 
              ? 'bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          } ${selectedTechTags.length > 0 || selectedLevel || selectedOrganizer ? 'border-pink-500/50' : ''}`}
        >
          <FilterIcon className="h-3.5 w-3.5" />
          <span>Filters</span>
          {(selectedTechTags.length > 0 || selectedLevel || selectedOrganizer) && (
            <span className={`inline-flex items-center justify-center w-5 h-5 text-xs rounded-full ${
              isDarkMode ? 'bg-pink-500/20 text-pink-200' : 'bg-pink-100 text-pink-600'
            }`}>
              {selectedTechTags.length + (selectedLevel ? 1 : 0) + (selectedOrganizer ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Filters panel */}
      {showFiltersPanel && (
        <div 
          ref={filtersPanelRef}
          className={`rounded-xl p-6 ${
            isDarkMode 
              ? 'bg-zinc-800/90 border border-zinc-700/50' 
              : 'bg-white border border-gray-200'
          }`}
        >
          <div className="flex flex-col space-y-5">
            <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Advanced Filters
            </h3>

            {/* Tech stack section */}
            <div>
              <h4 className={`text-sm font-medium mb-3 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                Tech Stack
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {techTags.map(tag => (
                  <div key={tag} className="flex items-center">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedTechTags.includes(tag)}
                        onChange={() => onTechTagToggle(tag)}
                        className={`w-4 h-4 rounded border ${
                          isDarkMode 
                            ? 'bg-zinc-700 border-zinc-600 text-pink-500 focus:ring-pink-600/25' 
                            : 'bg-gray-100 border-gray-300 text-blue-600 focus:ring-blue-500/25'
                        }`}
                      />
                      <span className={`text-sm ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                        {tag}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizer and level filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Level filter */}
              <div>
                <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                  Experience Level
                </h4>
                <select
                  value={selectedLevel}
                  onChange={(e) => onLevelChange(e.target.value)}
                  className={`block w-full rounded-lg px-3 py-2 text-sm border ${
                    isDarkMode
                      ? 'bg-zinc-700 border-zinc-600 text-white focus:border-pink-500 focus:ring-pink-500/20'
                      : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                >
                  <option value="">All Levels</option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCED">Advanced</option>
                </select>
              </div>

              {/* Organization filter */}
              <div>
                <h4 className={`text-sm font-medium mb-2 ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                  Organization
                </h4>
                <select
                  value={selectedOrganizer}
                  onChange={(e) => onOrganizerChange(e.target.value)}
                  className={`block w-full rounded-lg px-3 py-2 text-sm border ${
                    isDarkMode
                      ? 'bg-zinc-700 border-zinc-600 text-white focus:border-pink-500 focus:ring-pink-500/20'
                      : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                >
                  <option value="">All Organizations</option>
                  {organizers.map(org => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Map level codes to display names
const levelNameMap: Record<string, string> = {
  'BEGINNER': 'Beginner',
  'INTERMEDIATE': 'Intermediate',
  'ADVANCED': 'Advanced'
};

// Icon components
const SearchIcon = ({ className = '' }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`h-5 w-5 ${className}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    />
  </svg>
);

const ChevronDownIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const FilterIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
    />
  </svg>
);

const BuildingIcon = ({ className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
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
); 