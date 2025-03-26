'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../../_components/ui/ThemeProvider';
import Sidebar from '../../_components/ui/Sidebar';
import { Header } from '../../_components/ui/Header';
import { Button } from '../../_components/ui/Button';
import AllHackathonCard from './AllHackathonCard';
import HackathonFilters from './HackathonFilters';

interface Organizer {
  id: number;
  name: string;
  website: string;
}

interface Hackathon {
  id: number;
  title: string;
  organizer: Organizer;
  location: string;
  startDate: string;
  endDate: string;
  timezone: string;
  logo: string;
  coverImage: string;
  registrationDeadline: string;
  teamSize: string;
  prizes: string;
  tags: string[];
  status: string;
  description: string;
  level: string;
}

// Mock data for hackathons - Updated to match the backend schema structure
const mockHackathons: Hackathon[] = [
  {
    id: 1,
    title: "CalHacks",
    organizer: {
      id: 1,
      name: "UC Berkeley",
      website: "https://calhacks.io"
    },
    location: "Berkeley, CA",
    startDate: "2023-10-27",
    endDate: "2023-10-29",
    timezone: "America/Los_Angeles",
    logo: "https://images.unsplash.com/photo-1593642702909-dec73df255d7",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    registrationDeadline: "2023-10-15",
    teamSize: "1-4",
    prizes: "$50,000+",
    tags: ["AI", "Blockchain", "Web3"],
    status: "Upcoming",
    description: "Cal Hacks is a leading collegiate hackathon in the world, bringing together student developers and designers from across the country.",
    level: "INTERMEDIATE"
  },
  {
    id: 2,
    title: "Hack the North",
    organizer: {
      id: 2,
      name: "University of Waterloo",
      website: "https://hackthenorth.com"
    },
    location: "Waterloo, Canada",
    startDate: "2023-09-15",
    endDate: "2023-09-17",
    timezone: "America/Toronto",
    logo: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6",
    coverImage: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    registrationDeadline: "2023-08-30",
    teamSize: "1-4",
    prizes: "$100,000+",
    tags: ["ML", "Frontend", "Hardware"],
    status: "Upcoming",
    description: "Canada's biggest hackathon, bringing together 1,000+ students from around the world for 36 hours of creation, innovation, and learning.",
    level: "BEGINNER"
  },
  {
    id: 3,
    title: "HackMIT",
    organizer: {
      id: 3,
      name: "Massachusetts Institute of Technology",
      website: "https://hackmit.org"
    },
    location: "Cambridge, MA",
    startDate: "2023-09-18",
    endDate: "2023-09-19",
    timezone: "America/New_York",
    logo: "https://images.unsplash.com/photo-1593642634443-44adaa06623a",
    coverImage: "https://images.unsplash.com/photo-1515187029135-18ee286d815b",
    registrationDeadline: "2023-08-15",
    teamSize: "1-4",
    prizes: "$30,000+",
    tags: ["AR/VR", "Mobile", "Robotics"],
    status: "Open",
    description: "HackMIT is a weekend-long event where students from around the world come together to turn their ideas into reality.",
    level: "ADVANCED"
  },
  {
    id: 4,
    title: "TreeHacks",
    organizer: {
      id: 4,
      name: "Stanford University",
      website: "https://www.treehacks.com"
    },
    location: "Stanford, CA",
    startDate: "2024-02-16",
    endDate: "2024-02-18",
    timezone: "America/Los_Angeles",
    logo: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    registrationDeadline: "2024-01-10",
    teamSize: "1-4",
    prizes: "$20,000+",
    tags: ["Health", "Climate", "Education"],
    status: "Coming Soon",
    description: "TreeHacks is Stanford University's premier hackathon, bringing together over 1,000 hackers from around the world.",
    level: "BEGINNER"
  },
  {
    id: 5,
    title: "HackHarvard",
    organizer: {
      id: 5,
      name: "Harvard University",
      website: "https://hackharvard.io"
    },
    location: "Cambridge, MA",
    startDate: "2023-10-20",
    endDate: "2023-10-22",
    timezone: "America/New_York",
    logo: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4",
    coverImage: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    registrationDeadline: "2023-10-01",
    teamSize: "1-4",
    prizes: "$15,000+",
    tags: ["Social Impact", "Fintech", "Health"],
    status: "Open",
    description: "HackHarvard is an annual hackathon hosted at Harvard University, bringing together students to solve real-world problems.",
    level: "INTERMEDIATE"
  },
  {
    id: 6,
    title: "PennApps",
    organizer: {
      id: 6,
      name: "University of Pennsylvania",
      website: "https://pennapps.com"
    },
    location: "Philadelphia, PA",
    startDate: "2023-09-08",
    endDate: "2023-09-10",
    timezone: "America/New_York",
    logo: "https://images.unsplash.com/photo-1593642532781-03e79bf5bec2",
    coverImage: "https://images.unsplash.com/photo-1550645612-83f5d594b671",
    registrationDeadline: "2023-08-20",
    teamSize: "1-4",
    prizes: "$40,000+",
    tags: ["Gaming", "Blockchain", "AI"],
    status: "Upcoming",
    description: "PennApps is the original college hackathon, bringing together students from around the world for a weekend of innovation.",
    level: "ADVANCED"
  }
];

// Get unique organizations for filter
const uniqueOrganizers = [...new Set(mockHackathons.map(hackathon => hackathon.organizer.name))];

// Get unique tech tags for filter
const uniqueTechTags = [...new Set(mockHackathons.flatMap(hackathon => hackathon.tags))].sort();

/**
 * AllHackathonsPage component
 * 
 * Displays all hackathon events in a grid format with filtering options,
 * following the design from the Figma mockup
 * 
 * @returns {JSX.Element} Rendered AllHackathonsPage component
 */
export default function AllHackathonsPage() {
  // Use state to track theme on client-side only
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme } = useTheme();
  
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedOrganizer, setSelectedOrganizer] = useState('');
  const [selectedTechTags, setSelectedTechTags] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  
  // Determine dark mode after component mounts to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(
      theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  }, [theme]);

  // Handle toggle of tech tag filter
  const handleTechTagToggle = (tag: string) => {
    setSelectedTechTags(prevTags => 
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Filter hackathons based on search query and selected filters
  const filteredHackathons = mockHackathons.filter(hackathon => {
    // Match search query
    const matchesSearch = 
      searchQuery === '' || 
      hackathon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hackathon.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Match level filter
    const matchesLevel = selectedLevel === '' || hackathon.level === selectedLevel;
    
    // Match organizer filter
    const matchesOrganizer = selectedOrganizer === '' || hackathon.organizer.name === selectedOrganizer;
    
    // Match tech stack tags
    const matchesTechTags = selectedTechTags.length === 0 || 
      selectedTechTags.some(tag => hackathon.tags.includes(tag));
    
    return matchesSearch && matchesLevel && matchesOrganizer && matchesTechTags;
  });

  if (!mounted) {
    return null;
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-zinc-900/40' : 'bg-white'}`}>
      {/* Sidebar with navigation links */}
      <Sidebar activePath="/hackathons" hideLogo={true} />

      <div className="flex-1 overflow-auto">
        {/* Top navigation bar */}
        <Header />

        {/* Main content area */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="mb-8">
            <h1 className={`text-3xl font-extrabold ${isDarkMode ? 'text-white' : 'text-theme-primary'}`}>
              All Hackathons
            </h1>
            <p className={`text-lg mt-2 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
              Discover upcoming hackathon events and start your journey
            </p>
          </div>
          
          {/* Filter Component */}
          <div className="mb-8">
            <HackathonFilters
              organizers={uniqueOrganizers}
              techTags={uniqueTechTags}
              selectedLevel={selectedLevel}
              selectedOrganizer={selectedOrganizer}
              selectedTechTags={selectedTechTags}
              searchQuery={searchQuery}
              isDarkMode={isDarkMode}
              onLevelChange={setSelectedLevel}
              onOrganizerChange={setSelectedOrganizer}
              onTechTagToggle={handleTechTagToggle}
              onSearchChange={setSearchQuery}
            />
          </div>
          
          {/* Hackathon cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.length > 0 ? (
              filteredHackathons.map((hackathon) => (
                <AllHackathonCard
                  key={hackathon.id}
                  hackathon={{
                    id: String(hackathon.id),
                    title: hackathon.title,
                    organizer: hackathon.organizer.name,
                    location: hackathon.location,
                    startDate: hackathon.startDate,
                    endDate: hackathon.endDate,
                    timezone: hackathon.timezone,
                    logo: hackathon.logo,
                    coverImage: hackathon.coverImage,
                    registrationDeadline: hackathon.registrationDeadline,
                    teamSize: hackathon.teamSize,
                    prizes: hackathon.prizes,
                    tags: hackathon.tags,
                    status: hackathon.status,
                    description: hackathon.description,
                    level: hackathon.level
                  }}
                  isDark={isDarkMode}
                />
              ))
            ) : (
              <div className={`col-span-full text-center py-12 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                <p className="text-lg font-medium mb-2">No hackathons found</p>
                <p>Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

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