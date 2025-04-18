'use client';

interface HackathonDetailInfoProps {
  hackathon: {
    description: string;
  };
  isDark: boolean;
}

/**
 * HackathonDetailInfo component
 *
 * Displays the main information section about a hackathon, including:
 * - Description
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
          Description
        </h2>
        <div className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}>
          <p className={`${isDark ? 'text-zinc-300' : 'text-gray-700'}`}>
            {hackathon.description}
          </p>
        </div>
      </section>
    </div>
  );
}
