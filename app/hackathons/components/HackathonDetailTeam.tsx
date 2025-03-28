'use client';

import Link from 'next/link';
import { Button } from '../../_components/ui/Button';

interface HackathonDetailTeamProps {
  hackathon: {
    id: string;
    teamSize: string;
    teamFormationEnabled: boolean;
    currentParticipants?: number;
    maxParticipants?: number;
    registrationDeadline: string;
    status: string;
    website?: string;
  };
  isDark: boolean;
}

/**
 * HackathonDetailTeam component
 * 
 * Displays team-related information for a hackathon including:
 * - Team size requirements
 * - Registration status and deadlines
 * - Participant counts
 * - Team formation and registration buttons
 * - External links
 * 
 * @param {HackathonDetailTeamProps} props - Component props
 * @returns {JSX.Element} Rendered component
 */
export default function HackathonDetailTeam({ hackathon, isDark }: HackathonDetailTeamProps) {
  // Format date to readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Calculate percentage of spots filled
  const calculateProgress = () => {
    if (!hackathon.currentParticipants || !hackathon.maxParticipants) return 0;
    return Math.min((hackathon.currentParticipants / hackathon.maxParticipants) * 100, 100);
  };
  
  // Check if registration is closed
  const isRegistrationClosed = () => {
    return hackathon.status === 'ended' || 
           new Date(hackathon.registrationDeadline) < new Date() || 
           (hackathon.currentParticipants && 
            hackathon.maxParticipants && 
            hackathon.currentParticipants >= hackathon.maxParticipants);
  };

  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${isDark ? 'bg-zinc-800' : 'bg-white'}`}>
      {/* Header */}
      <div className={`p-6 border-b ${isDark ? 'border-zinc-700' : 'border-gray-100'}`}>
        <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Team Requirements</h2>
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Team Size */}
        <div>
          <h3 className={`text-sm uppercase mb-1.5 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>Team Size</h3>
          <div className="flex items-center">
            <UsersIcon className={`w-5 h-5 mr-2 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`} />
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{hackathon.teamSize} Members</p>
          </div>
        </div>
        
        {/* Registration deadline */}
        <div>
          <h3 className={`text-sm uppercase mb-1.5 ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>Registration Deadline</h3>
          <div className="flex items-center">
            <CalendarIcon className={`w-5 h-5 mr-2 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`} />
            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {formatDate(hackathon.registrationDeadline)}
            </p>
          </div>
        </div>
        
        {/* Participants */}
        {hackathon.currentParticipants !== undefined && hackathon.maxParticipants !== undefined && (
          <div>
            <div className="flex justify-between mb-1.5">
              <h3 className={`text-sm uppercase ${isDark ? 'text-zinc-400' : 'text-gray-500'}`}>Participants</h3>
              <span className={`text-sm ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}>
                {hackathon.currentParticipants}/{hackathon.maxParticipants}
              </span>
            </div>
            
            {/* Progress bar */}
            <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-zinc-700' : 'bg-gray-200'}`}>
              <div 
                className={`h-full rounded-full ${isDark ? 'bg-pink-500' : 'bg-[#036CA0]'}`}
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {/* Team formation */}
        {hackathon.teamFormationEnabled && (
          <div className={`p-4 rounded-lg ${isDark ? 'bg-zinc-700/50' : 'bg-[#036CA0]/5'}`}>
            <div className="flex items-center mb-2">
              <SearchIcon className={`w-5 h-5 mr-2 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`} />
              <h3 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Team Formation</h3>
            </div>
            <p className={`text-sm mb-4 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}>
              Looking for teammates? Use our team formation tool to find the perfect match for your hackathon team.
            </p>
            <Button
              variant={isDark ? "outline" : "secondary"}
              className={`w-full ${
                isDark 
                  ? 'border-pink-500/30 hover:border-pink-500/50 text-white' 
                  : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0]'
              }`}
            >
              Find Teammates
            </Button>
          </div>
        )}
        
        {/* Action buttons */}
        <div className="space-y-3">
          <Button
            variant="primary"
            className={`w-full ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
            disabled={isRegistrationClosed() ? true : false}
          >
            {isRegistrationClosed() ? 'Registration Closed' : 'Register Now'}
          </Button>
          
          {hackathon.website && (
            <Link href={hackathon.website} target="_blank" rel="noopener noreferrer" className="block w-full">
              <Button
                variant={isDark ? "outline" : "secondary"}
                className={`w-full ${
                  isDark 
                    ? 'border-zinc-700 hover:border-zinc-600' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                    <ExternalLinkIcon className="w-4 h-4 mr-2" />
                    <span>Visit Website</span>
                </div>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// Icon components
const UsersIcon = ({ className = '' }) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const CalendarIcon = ({ className = '' }) => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const SearchIcon = ({ className = '' }) => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const ExternalLinkIcon = ({ className = '' }) => (
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
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
); 