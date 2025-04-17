import { FormEvent } from 'react';

type HackathonFormBasicProps = {
  formState: any;
  updateFormState: (updates: any) => void;
  isDark: boolean;
};

export default function HackathonFormBasic({
  formState,
  updateFormState,
  isDark,
}: HackathonFormBasicProps) {
  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    updateFormState({ [name]: value });
  };

  const handleVirtualToggle = (e: FormEvent<HTMLInputElement>) => {
    const isVirtual = e.currentTarget.checked;
    updateFormState({ is_virtual: isVirtual });
  };

  return (
    <div className="space-y-6">
      <h2
        className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        Basic Information
      </h2>

      <div className="space-y-4">
        {/* Hackathon Name */}
        <div>
          <label
            htmlFor="name"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Hackathon Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            required
            placeholder="e.g., HackTX 2024"
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          />
        </div>

        {/* Virtual Event Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="is_virtual"
            name="is_virtual"
            checked={formState.is_virtual}
            onChange={handleVirtualToggle}
            className={`h-4 w-4 rounded focus:ring-2 focus:ring-offset-0 transition-colors ${
              isDark
                ? 'bg-zinc-800 border-zinc-700 text-pink-500 focus:ring-pink-500/20'
                : 'border-gray-300 text-[#036CA0] focus:ring-[#036CA0]/20'
            }`}
          />
          <label
            htmlFor="is_virtual"
            className={`ml-2 block text-sm font-medium ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            This is a virtual/online event
          </label>
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            {formState.is_virtual
              ? 'Virtual Platform/URL'
              : 'Physical Location'}{' '}
            *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
            required
            placeholder={
              formState.is_virtual
                ? 'e.g., Zoom, Discord, etc.'
                : 'e.g., Austin, TX'
            }
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          />
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            Event Status *
          </label>
          <select
            id="status"
            name="status"
            value={formState.status}
            onChange={handleChange}
            required
            className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
              isDark
                ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
            }`}
          >
            <option value="open">Open for Registration</option>
            <option value="closed">Registration Closed</option>
            <option value="happening">Currently Happening</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Date Inputs - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Start Date */}
          <div>
            <label
              htmlFor="start_date"
              className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
            >
              Start Date *
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              value={formState.start_date}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
                isDark
                  ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                  : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            />
          </div>

          {/* End Date */}
          <div>
            <label
              htmlFor="end_date"
              className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
            >
              End Date *
            </label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              value={formState.end_date}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
                isDark
                  ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                  : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            />
          </div>

          

          {/* Timezone */}
          <div>
            <label
              htmlFor="timezone"
              className={`block text-sm font-medium mb-1 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
            >
              Timezone *
            </label>
            <select
              id="timezone"
              name="timezone"
              value={formState.timezone}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2.5 rounded-lg text-sm border focus:ring-2 focus:outline-none transition-colors ${
                isDark
                  ? 'bg-zinc-800/60 text-white border-zinc-700/50 focus:border-pink-500/30 focus:ring-pink-500/20'
                  : 'bg-white border-gray-200 focus:border-[#036CA0]/30 focus:ring-[#036CA0]/20'
              }`}
            >
              <option value="EST">Eastern Time (EST)</option>
              <option value="CST">Central Time (CST)</option>
              <option value="MST">Mountain Time (MST)</option>
              <option value="PST">Pacific Time (PST)</option>
              <option value="UTC">Coordinated Universal Time (UTC)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
