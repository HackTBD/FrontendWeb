'use client';

import { FormEvent, useState } from 'react';

type HackathonFormDetailsProps = {
  formState: any;
  updateFormState: (updates: any) => void;
  isDark: boolean;
};

// Available tags for hackathons
const availableTags = [
  'ai-ml',
  'web3',
  'blockchain',
  'mobile',
  'hardware',
  'iot',
  'web-dev',
  'cloud',
  'cybersecurity',
  'game-dev',
  'design',
  'sustainability',
  'social-impact',
  'healthcare',
  'fintech',
  'sponsor-challenges',
  'international',
];

// ENUM values for experience level
const experienceLevels = ['beginner', 'intermediate', 'advanced', 'all level'];

export default function HackathonFormDetails({
  formState,
  updateFormState,
  isDark,
}: HackathonFormDetailsProps) {
  const [tagInput, setTagInput] = useState('');

  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget;
    updateFormState({ [name]: value });
  };

  const handleNumericChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    // Convert to integer and ensure it's a valid positive number
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 1) {
      updateFormState({ [name]: numValue });
    } else if (value === '') {
      // Allow empty field for user input
      updateFormState({ [name]: '' });
    }
  };

  const addTag = (tag: string) => {
    if (tag && !formState.tags.includes(tag)) {
      updateFormState({ tags: [...formState.tags, tag] });
    }
  };

  const removeTag = (tag: string) => {
    updateFormState({ tags: formState.tags.filter((t: string) => t !== tag) });
  };

  const handleTagInput = (e: FormEvent<HTMLInputElement>) => {
    setTagInput(e.currentTarget.value);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      addTag(tagInput.trim().toLowerCase());
      setTagInput('');
    }
  };

  return (
    <div className="space-y-6">
      <h2
        className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        Event Details
      </h2>

      <div className="space-y-4">
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Event Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Provide a detailed description of your hackathon..."
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          />
        </div>

        {/* Min Team Size - Number input */}
        <div>
          <label
            htmlFor="min_team_size"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Min Team Size *
          </label>
          <input
            type="number"
            id="min_team_size"
            name="min_team_size"
            value={formState.min_team_size}
            onChange={handleNumericChange}
            min="1"
            required
            placeholder="1"
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          />
          <p
            className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
          >
            Minimum number of participants per team
          </p>
        </div>

        {/* Max Team Size - Number input */}
        <div>
          <label
            htmlFor="max_team_size"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Max Team Size *
          </label>
          <input
            type="number"
            id="max_team_size"
            name="max_team_size"
            value={formState.max_team_size}
            onChange={handleNumericChange}
            min={formState.min_team_size || 1}
            required
            placeholder="4"
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          />
          <p
            className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
          >
            Maximum number of participants per team
          </p>
        </div>

        {/* Experience Level - Dropdown */}
        <div>
          <label
            htmlFor="level"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Experience Level *
          </label>
          <select
            id="level"
            name="level"
            value={formState.level}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          >
            <option value="" disabled>
              Select experience level
            </option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level.charAt(0).toUpperCase() +
                  level.slice(1).replace('level', 'Level')}
              </option>
            ))}
          </select>
          <p
            className={`text-xs mt-1 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}
          >
            Select the experience level for participants
          </p>
        </div>
      </div>
    </div>
  );
}
