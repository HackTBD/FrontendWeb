'use client';

interface HackathonDetailInfoProps {
  hackathon: {
    description: string;
    requirements?: string;
    eligibility?: string;
    resources?: string[];
    prizes: string;
    tags: string[];
    level: string;
  };
  isDark: boolean;
}

/**
 * HackathonDetailInfo component
 *
 * Displays the main information sections about a hackathon, including:
 * - Description
 * - Requirements and eligibility
 * - Resources provided
 * - Prizes information
 * - Tags and categories
 *
 * @param {HackathonDetailInfoProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export default function HackathonDetailInfo({
  hackathon,
  isDark,
}: HackathonDetailInfoProps) {
  return (
    <div className="space-y-8">
      {/* Description section */}
      <section>
        <h2
          className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          About
        </h2>
        <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
          <p className={`${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
            {hackathon.description}
          </p>
        </div>
      </section>

      {/* Requirements section */}
      {hackathon.requirements && (
        <section>
          <h2
            className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Requirements
          </h2>
          <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <p className={`${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
              {hackathon.requirements}
            </p>
          </div>
        </section>
      )}

      {/* Eligibility section */}
      {hackathon.eligibility && (
        <section>
          <h2
            className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Eligibility
          </h2>
          <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
            <p className={`${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
              {hackathon.eligibility}
            </p>
          </div>
        </section>
      )}

      {/* Resources section */}
      {hackathon.resources && hackathon.resources.length > 0 && (
        <section>
          <h2
            className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
          >
            Resources
          </h2>
          <ul
            className={`list-disc pl-5 space-y-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
          >
            {hackathon.resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Prizes section */}
      <section>
        <h2
          className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Prizes
        </h2>
        <div
          className={`p-6 rounded-lg ${isDark ? 'bg-zinc-800/50' : 'bg-[#036CA0]/5'}`}
        >
          <div className="flex items-center mb-3">
            <TrophyIcon
              className={`w-6 h-6 mr-2 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}
            />
            <span
              className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Prize Pool
            </span>
          </div>
          <p
            className={`text-xl font-bold ${isDark ? 'text-yellow-400' : 'text-[#036CA0]'}`}
          >
            {hackathon.prizes}
          </p>
        </div>
      </section>

      {/* Tags and categories */}
      <section>
        <h2
          className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
        >
          Categories
        </h2>
        <div className="flex flex-wrap gap-2">
          {/* Level tag */}
          <div
            className={`px-3 py-1.5 rounded-full text-sm font-medium ${
              isDark
                ? 'bg-indigo-500/20 text-indigo-400'
                : 'bg-indigo-100 text-indigo-800'
            }`}
          >
            {hackathon.level.charAt(0) + hackathon.level.slice(1).toLowerCase()}{' '}
            Level
          </div>

          {/* Other tags */}
          {hackathon.tags.map((tag, index) => (
            <div
              key={index}
              className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                isDark
                  ? 'bg-zinc-700/80 text-zinc-300'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Trophy icon
const TrophyIcon = ({ className = '' }) => (
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
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);
