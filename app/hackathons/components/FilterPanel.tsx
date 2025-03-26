'use client';

import { useState } from 'react';
import { Button } from '../../_components/ui/Button';

export interface FilterSettings {
  organizations: string[];
  experience: string[];
  location: string;
  timing: string;
  teamSize: string;
}

interface FilterPanelProps {
  isDark: boolean;
  organizers: string[];
  currentFilters: FilterSettings;
  onApplyFilters: (filters: FilterSettings) => void;
  onClose: () => void;
}

/**
 * FilterPanel component for advanced hackathon filtering
 *
 * Provides a comprehensive set of filtering options for hackathons including:
 * - Organization filters (UC Berkeley, MIT, etc.)
 * - Experience level filters
 * - Location type (in-person, remote, hybrid)
 * - Timing preferences
 * - Team size options
 *
 * @param {FilterPanelProps} props - Component props
 * @returns {JSX.Element} Rendered FilterPanel component
 */
export default function FilterPanel({
  isDark,
  organizers = [],
  currentFilters = {
    organizations: [],
    experience: [],
    location: 'any',
    timing: 'any',
    teamSize: 'any',
  },
  onApplyFilters,
  onClose,
}: FilterPanelProps) {
  const [filters, setFilters] = useState({
    organizations: currentFilters.organizations || [],
    experience: currentFilters.experience || [],
    location: currentFilters.location || 'any',
    timing: currentFilters.timing || 'any',
    teamSize: currentFilters.teamSize || 'any',
  });

  // Helper function to toggle filters in an array
  const toggleFilter = (category: string, value: string) => {
    setFilters((prev) => {
      const currentArray = prev[category as keyof typeof prev] as string[];

      if (!Array.isArray(currentArray)) {
        return prev;
      }

      const updatedArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [category]: updatedArray,
      };
    });
  };

  // Update single value filters
  const updateFilter = (category: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      organizations: [],
      experience: [],
      location: 'any',
      timing: 'any',
      teamSize: 'any',
    });
  };

  return (
    <div
      className={`mb-8 p-5 rounded-lg ${isDark ? 'bg-zinc-800/90 border border-zinc-700/50' : 'bg-white border border-gray-200'}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3
          className={`font-medium ${isDark ? 'text-white' : 'text-theme-primary'}`}
        >
          Advanced Filters
        </h3>
        <button
          onClick={onClose}
          className={`p-1 rounded-full ${isDark ? 'text-zinc-400 hover:text-white hover:bg-zinc-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`}
        >
          <CloseIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Organizations Section */}
        <div>
          <h4
            className={`text-sm font-medium mb-3 ${isDark ? 'text-zinc-300' : 'text-theme-primary'}`}
          >
            Organizations
          </h4>
          <div className="space-y-2">
            {organizers.map((org) => (
              <label
                key={org}
                className={`flex items-center space-x-2 cursor-pointer ${isDark ? 'text-zinc-300' : 'text-theme-secondary'}`}
              >
                <input
                  type="checkbox"
                  checked={(filters.organizations as string[]).includes(org)}
                  onChange={() => toggleFilter('organizations', org)}
                  className={`rounded ${isDark ? 'bg-zinc-700 border-zinc-600 text-pink-500 focus:ring-pink-500/20' : 'bg-gray-50 border-gray-300 text-[#036CA0] focus:ring-[#036CA0]/20'}`}
                />
                <span className="text-sm">{org}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Participant Experience */}
        <div>
          <h4
            className={`text-sm font-medium mb-3 ${isDark ? 'text-zinc-300' : 'text-theme-primary'}`}
          >
            Experience Level
          </h4>
          <div className="space-y-2">
            {[
              'Beginner-friendly',
              'Intermediate',
              'Advanced',
              'All Levels',
            ].map((level) => (
              <label
                key={level}
                className={`flex items-center space-x-2 cursor-pointer ${isDark ? 'text-zinc-300' : 'text-theme-secondary'}`}
              >
                <input
                  type="checkbox"
                  checked={(filters.experience as string[]).includes(level)}
                  onChange={() => toggleFilter('experience', level)}
                  className={`rounded ${isDark ? 'bg-zinc-700 border-zinc-600 text-pink-500 focus:ring-pink-500/20' : 'bg-gray-50 border-gray-300 text-[#036CA0] focus:ring-[#036CA0]/20'}`}
                />
                <span className="text-sm">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Filters */}
        <div className="space-y-4">
          {/* Location */}
          <div>
            <h4
              className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-theme-primary'}`}
            >
              Location
            </h4>
            <select
              value={filters.location}
              onChange={(e) => updateFilter('location', e.target.value)}
              className={`w-full p-2 rounded-lg text-sm border ${
                isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-gray-200 text-theme-primary focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            >
              <option value="any">Any Location</option>
              <option value="in-person">In-Person</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Timing */}
          <div>
            <h4
              className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-theme-primary'}`}
            >
              Timing
            </h4>
            <select
              value={filters.timing}
              onChange={(e) => updateFilter('timing', e.target.value)}
              className={`w-full p-2 rounded-lg text-sm border ${
                isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-gray-200 text-theme-primary focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            >
              <option value="any">Any Timing</option>
              <option value="weekend">Weekend</option>
              <option value="weekday">Weekday</option>
              <option value="1-day">1-Day</option>
              <option value="2-3-days">2-3 Days</option>
              <option value="week-long">Week-long</option>
            </select>
          </div>

          {/* Team Size */}
          <div>
            <h4
              className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-theme-primary'}`}
            >
              Team Size
            </h4>
            <select
              value={filters.teamSize}
              onChange={(e) => updateFilter('teamSize', e.target.value)}
              className={`w-full p-2 rounded-lg text-sm border ${
                isDark
                  ? 'bg-zinc-800 border-zinc-700 text-white'
                  : 'bg-white border-gray-200 text-theme-primary focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            >
              <option value="any">Any Size</option>
              <option value="solo">Solo (1)</option>
              <option value="small">Small (2-3)</option>
              <option value="medium">Medium (4-5)</option>
              <option value="large">Large (6+)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end mt-6 space-x-3">
        <Button
          variant={isDark ? 'outline' : 'secondary'}
          className={`py-1.5 px-4 text-sm rounded-lg ${
            isDark
              ? 'text-zinc-300 border-zinc-600'
              : 'text-gray-700 border-gray-200 hover:bg-gray-50'
          }`}
          onClick={resetFilters}
        >
          Reset
        </Button>
        <Button
          variant="primary"
          className={`py-1.5 px-4 text-sm rounded-lg ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
          onClick={() => {
            onApplyFilters(filters);
            onClose();
          }}
        >
          Apply Filters
        </Button>
      </div>
    </div>
  );
}

// Close Icon
const CloseIcon = ({ className = '' }) => (
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
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
