import { Button } from '../../_components/ui/Button';

// Define ENUM types for TypeScript
type EventStatus = 'open' | 'happening' | 'closed' | 'completed';
type EventLevel = 'beginner' | 'intermediate' | 'advanced' | 'all level';

/**
 * Props for the AllHackathonCard component
 */
interface AllHackathonCardProps {
  hackathon: {
    id: string;
    title: string;
    organizer: string;
    location: string;
    /** Start date in ISO format (YYYY-MM-DD) */
    startDate: string;
    /** End date in ISO format (YYYY-MM-DD) */
    endDate: string;
    status: EventStatus;
    description?: string;
    level?: EventLevel;
  };
  /** Whether the current theme is dark mode */
  isDark: boolean;
}

/**
 * AllHackathonCard component
 *
 * Displays a card for an individual hackathon in the All Hackathons page
 * with a design that matches the Figma mockup.
 *
 * @param {AllHackathonCardProps} props - The component props
 * @returns {JSX.Element} Rendered AllHackathonCard component
 */
export default function AllHackathonCard({
  hackathon,
  isDark,
}: AllHackathonCardProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const formattedDateRange = `${formatDate(hackathon.startDate)} - ${formatDate(hackathon.endDate)}`;

  // Capitalize status and level for display
  const formatTag = (value: string) =>
    value
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md transition-all hover:shadow-lg ${
        isDark
          ? 'bg-zinc-800/90 border border-zinc-700/50'
          : 'bg-white border border-gray-200'
      }`}
    >
      {/* Card header */}
      <div className="relative h-40">
        {/* Fallback background */}
        <div
          className={`absolute inset-0 flex items-center justify-center ${
            isDark ? 'bg-zinc-700' : 'bg-gray-100'
          }`}
        >
          <span
            className={`text-4xl font-bold ${
              isDark ? 'text-zinc-600' : 'text-gray-300'
            }`}
          >
            {hackathon.title.substring(0, 2)}
          </span>
        </div>
      </div>

      {/* Card content */}
      <div className="p-6 flex flex-col gap-4">
        {/* Hackathon title */}
        <h3
          className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-theme-primary'
          }`}
        >
          {hackathon.title}
        </h3>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2">
          {/* Location tag */}
          <div
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
              isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <LocationIcon className="w-3 h-3" />
            <span>{hackathon.location}</span>
          </div>

          {/* Date tag */}
          <div
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
              isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <CalendarIcon className="w-3 h-3" />
            <span>{formattedDateRange}</span>
          </div>

          {/* Status tag */}
          <div
            className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
              isDark ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            <StatusIcon className="w-3 h-3" />
            <span>{formatTag(hackathon.status)}</span>
          </div>

          {/* Level tag (if available) */}
          {hackathon.level && (
            <div
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs ${
                isDark
                  ? 'bg-zinc-700 text-zinc-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              <LevelIcon className="w-3 h-3" />
              <span>{formatTag(hackathon.level)}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <p className={`text-sm ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}>
          {hackathon.description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum neque et massa dapibus sodales. Nulla condimentum hendrerit mi, eget ultrices purus auctor placerat.'}
        </p>

        {/* Action buttons */}
        <div className="flex flex-col gap-3 mt-2">
          <Button
            variant={isDark ? 'outline' : 'outline'}
            className={`w-full justify-center text-sm ${
              isDark
                ? 'border-pink-500/30 hover:border-pink-500/50 text-white'
                : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0]'
            }`}
          >
            View Details
          </Button>

          <Button
            variant={isDark ? 'primary' : 'primary'}
            className="w-full justify-center text-sm"
          >
            Join Hack
          </Button>
        </div>
      </div>
    </div>
  );
}

// Icon components
const LocationIcon = ({ className = '' }) => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CalendarIcon = ({ className = '' }) => (
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
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const StatusIcon = ({ className = '' }) => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const LevelIcon = ({ className = '' }) => (
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
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);
