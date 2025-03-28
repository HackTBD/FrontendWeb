'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTheme } from '../../_components/ui/ThemeProvider';
import Sidebar from '../../_components/ui/Sidebar';
import { Header } from '../../_components/ui/Header';
import { Button } from '../../_components/ui/Button';
import HackathonDetailHeader from '../components/HackathonDetailHeader';
import HackathonDetailInfo from '../components/HackathonDetailInfo';
import HackathonDetailTeam from '../components/HackathonDetailTeam';

/**
 * HackathonDetailsPage component
 * 
 * Displays detailed information about a specific hackathon, including:
 * - Cover image and title
 * - Dates, location, and status
 * - Description and requirements
 * - Team formation options
 * - Prize information
 * - Registration buttons
 * 
 * @returns {JSX.Element} The rendered page component
 */
export default function HackathonDetailsPage() {
  const params = useParams();
  const hackathonId = params.id;
  const { theme } = useTheme();
  const isDark = theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  
  const [isLoading, setIsLoading] = useState(true);
  const [hackathon, setHackathon] = useState<HackathonDetail | null>(null);
  
  // Fetch hackathon data (using mock data for now)
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchedHackathon = mockHackathonDetails.find(h => h.id === hackathonId);
    setHackathon(fetchedHackathon || null);
    setIsLoading(false);
  }, [hackathonId]);

  if (isLoading) {
    return (
      <div className={`flex h-screen items-center justify-center ${isDark ? 'bg-zinc-900/40' : 'bg-white'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!hackathon) {
    return (
      <div className={`flex h-screen items-center justify-center ${isDark ? 'bg-zinc-900/40' : 'bg-white'}`}>
        <div className="text-center">
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hackathon Not Found
          </h2>
          <p className={`mb-4 ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}>
            The hackathon you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link href="/hackathons">
            <Button 
              variant={isDark ? "outline" : "primary"}
              className={`mt-4 ${isDark ? 'border-pink-500/30 hover:border-pink-500/50' : ''}`}
            >
                All Hackathons
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen ${isDark ? 'bg-zinc-900/40' : 'bg-white'}`}>
      <Sidebar activePath="/hackathons" hideLogo={true} />
      
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />
        
        {/* Hackathon detail content */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs and back button */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/hackathons" className={`text-sm ${isDark ? 'text-zinc-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'}`}>
                    All Hackathons
                  </Link>
                </li>
                <li>
                  <svg className={`w-4 h-4 ${isDark ? 'text-zinc-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {hackathon.title}
                  </span>
                </li>
              </ol>
            </nav>
            
            {/* Back button */}
            <Link href="/hackathons" className="mt-3 sm:mt-0">
              <Button 
                variant={isDark ? "outline" : "secondary"}
                className={`px-4 py-2 ${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <div className="flex items-center">
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-4 h-4 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                    </svg>
                    All Hackathons
                </div>
              </Button>
            </Link>
          </div>
          
          {/* Hackathon Header with cover image, title, and key details */}
          <HackathonDetailHeader hackathon={hackathon} isDark={isDark} />
          
          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Left column - Details and description */}
            <div className="lg:col-span-2">
              <HackathonDetailInfo hackathon={hackathon} isDark={isDark} />
            </div>
            
            {/* Right column - Team information and registration */}
            <div className="lg:col-span-1">
              <HackathonDetailTeam hackathon={hackathon} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Types for Hackathon Detail
interface HackathonDetail {
  id: string;
  title: string;
  organizer: string;
  organizerLogo?: string;
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
  requirements?: string;
  eligibility?: string;
  resources?: string[];
  judges?: {
    name: string;
    role: string;
    image?: string;
  }[];
  sponsors?: {
    name: string;
    tier: string;
    logo: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  teamFormationEnabled: boolean;
  currentParticipants?: number;
  maxParticipants?: number;
  website?: string;
  level: string;
}

// Mock data for detailed hackathon information
const mockHackathonDetails: HackathonDetail[] = [
  {
    id: '1',
    title: 'HackTX 2024',
    organizer: 'University of Texas',
    organizerLogo: '/images/organizer-logos/ut-austin.png',
    location: 'Austin, TX',
    startDate: '2024-04-10',
    endDate: '2024-04-12',
    timezone: 'CST',
    logo: '/images/hackathon-logos/HackTxLogo.png',
    coverImage: '/images/hackathon-covers/HackTxCover.png',
    registrationDeadline: '2024-03-30',
    teamSize: '1-4',
    prizes: '$10,000 in prizes',
    tags: ['beginner-friendly', 'in-person', 'hardware'],
    status: 'open',
    description: 'HackTX is the largest hackathon in Texas, bringing together over 1,000 students for a weekend of innovation, creativity, and learning. Join us for 24 hours of coding, workshops, and networking with industry professionals. Whether you&apos;re a coding newbie or a hackathon veteran, HackTX has something for everyone!',
    requirements: 'Participants must be currently enrolled in a college or university. High school students are also welcome to apply. All skill levels are welcome!',
    eligibility: 'Open to all university students. You must be at least 18 years old or have parental consent.',
    resources: [
      'Mentors from leading tech companies',
      'Hardware lab with various devices for testing',
      'Workshops on emerging technologies',
      'Free meals and snacks throughout the event'
    ],
    judges: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Professor of Computer Science, UT Austin',
        image: '/images/judges/sarah-johnson.jpg'
      },
      {
        name: 'Alex Wong',
        role: 'CTO, TechStart Inc.',
        image: '/images/judges/alex-wong.jpg'
      }
    ],
    sponsors: [
      {
        name: 'Microsoft',
        tier: 'Platinum',
        logo: '/images/sponsors/microsoft.png'
      },
      {
        name: 'Google',
        tier: 'Gold',
        logo: '/images/sponsors/google.png'
      }
    ],
    faq: [
      {
        question: 'Do I need to know how to code?',
        answer: 'No prior coding experience is necessary! We welcome students of all skill levels and backgrounds.'
      },
      {
        question: 'What should I bring?',
        answer: 'Bring your laptop, charger, student ID, and any other items you&apos;ll need for an overnight stay.'
      }
    ],
    teamFormationEnabled: true,
    currentParticipants: 450,
    maxParticipants: 1000,
    website: 'https://hacktx.com',
    level: 'BEGINNER'
  },
  {
    id: '2',
    title: 'CalHacks 2024',
    organizer: 'UC Berkeley',
    organizerLogo: '/images/organizer-logos/uc-berkeley.png',
    location: 'Berkeley, CA',
    startDate: '2024-05-15',
    endDate: '2024-05-17',
    timezone: 'PST',
    logo: '/images/hackathon-logos/CalHacksLogo.png',
    coverImage: '/images/hackathon-covers/CalHacksCover.jpg',
    registrationDeadline: '2024-05-01',
    teamSize: '1-5',
    prizes: '$20,000+ in prizes',
    tags: ['all-levels', 'in-person', 'ai-ml'],
    status: 'open',
    description: 'CalHacks is UC Berkeley&apos;s premier hackathon, bringing together the most creative and innovative students from around the world. With a focus on tackling real-world problems through technology, CalHacks offers participants the opportunity to develop groundbreaking solutions while connecting with industry leaders and like-minded peers.',
    requirements: 'All university students are welcome. You&apos;ll need to bring your own laptop and any hardware you plan to use.',
    eligibility: 'Open to all university students globally. You must be at least 18 years old.',
    resources: [
      'Access to cutting-edge AI tools and platforms',
      'Computing resources for machine learning tasks',
      'Industry mentors from leading tech companies',
      'Networking opportunities with Silicon Valley professionals'
    ],
    teamFormationEnabled: true,
    currentParticipants: 600,
    maxParticipants: 1500,
    website: 'https://calhacks.io',
    level: 'INTERMEDIATE'
  },
  {
    id: '3',
    title: 'Hack the North 2024',
    organizer: 'University of Waterloo',
    location: 'Waterloo, Canada',
    startDate: '2024-06-20',
    endDate: '2024-06-22',
    timezone: 'EST',
    logo: '/images/hackathon-logos/HackTheNorthLogo.svg',
    coverImage: '/images/hackathon-covers/HackTheNorthCover.png',
    registrationDeadline: '2024-05-30',
    teamSize: '1-4',
    prizes: 'Over $30,000 in prizes',
    tags: ['international', 'in-person', 'sponsor-challenges'],
    status: 'open',
    description: 'Hack the North is Canada&apos;s biggest hackathon, bringing together 1,000+ students from around the world for 36 hours of creation, innovation, and learning. Located at the University of Waterloo, this event offers a unique opportunity to collaborate with peers, learn from industry experts, and build something amazing from scratch.',
    requirements: 'Open to all students globally. You&apos;ll need to arrange your own travel to Waterloo, Canada.',
    eligibility: 'Students from any educational institution worldwide. You must be at least 18 years old or have guardian permission.',
    resources: [
      'Travel reimbursements available for selected participants',
      'Hardware lab with various components',
      'Technical workshops and career sessions',
      'Meals and accommodation provided'
    ],
    teamFormationEnabled: true,
    currentParticipants: 800,
    maxParticipants: 1200,
    website: 'https://hackthenorth.com',
    level: 'ADVANCED'
  }
]; 