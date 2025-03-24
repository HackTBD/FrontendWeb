'use client';

import { useState, useCallback, useEffect, MouseEventHandler } from 'react';
import Link from 'next/link';
import { Logo } from './ui/logo';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  href: string;
  isCollapsed: boolean;
}

const SidebarItem = ({
  icon,
  label,
  isActive,
  href,
  isCollapsed,
}: SidebarItemProps) => {
  return (
    <Link
      href={href}
      className={`flex items-center py-2.5 ${
        isCollapsed ? 'justify-center px-2' : 'px-4'
      } rounded-lg text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
      }`}
      title={isCollapsed ? label : ''}
    >
      <span className={isActive ? 'text-blue-600' : 'text-gray-500'}>
        {icon}
      </span>
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
}

const SidebarSection = ({
  title,
  children,
  isCollapsed,
}: SidebarSectionProps) => {
  return (
    <div className="mt-5">
      {!isCollapsed ? (
          <Logo size="md" linkTo="/" isDarkOverride={false} />
        ) : (
          <Logo size="sm" showText={false} linkTo="/" isDarkOverride={false} />
      )}
      <div className="mt-2 space-y-1">{children}</div>
    </div>
  );
};

export default function Sidebar({ activePath = '/' }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(256);

  const toggleSidebar = () => {
    const newWidth = isCollapsed ? 256 : 64;
    setSidebarWidth(newWidth);
    setIsCollapsed(!isCollapsed);
  };

  const startResizing = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setIsResizing(true);
      const startX = e.clientX;
      const startWidth = sidebarWidth;

      const handleMouseMove = (e: MouseEvent) => {
        const newWidth = startWidth + e.clientX - startX;
        setSidebarWidth(Math.min(Math.max(64, newWidth), 384));
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    },
    [sidebarWidth]
  );

  useEffect(() => {
    if (sidebarWidth <= 96) setIsCollapsed(true);
    else if (sidebarWidth >= 200) setIsCollapsed(false);
  }, [sidebarWidth]);

  // Add search functionality
  const [searchQuery, setSearchQuery] = useState('');

  // Search component
  const SearchBar = () => (
    <div className={`relative ${isCollapsed ? 'mx-1' : 'mx-3'}`}>
      {isCollapsed ? (
        <button className="w-full flex items-center justify-center text-gray-500 hover:text-gray-600">
          <SearchIcon />
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 rounded-lg bg-gray-50 text-sm border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <SearchIcon />
          </div>
        </>
      )}
    </div>
  );

  // Add SearchIcon component
  const SearchIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );

  // Simplified monochrome icons
  const GridIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );

  const BoxIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3" />
      <path d="M12 12l8-4.5" />
      <path d="M12 12v9" />
      <path d="M12 12L4 7.5" />
    </svg>
  );

  const MessageIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const HelpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );

  const LogoutIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );

  return (
    <div
      className="flex flex-col h-full bg-white border-r border-gray-100 relative transition-all"
      style={{
        width: `${sidebarWidth}px`,
        transition: isResizing ? 'none' : 'width 300ms ease',
      }}
    >
      <div
        className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize z-20"
        onMouseDown={startResizing}
      >
        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-gray-300 rounded-full opacity-0 hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex items-center h-16 px-4 border-b border-gray-100 relative">
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white text-gray-600 rounded-full p-1.5 hover:bg-gray-100 focus:outline-none z-30 shadow-md border border-gray-200"
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          <svg
            className={`transform transition-transform ${isCollapsed ? 'rotate-180' : ''}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
      </div>

      <nav
        className={`flex-1 ${isCollapsed ? 'px-2' : 'px-3'} py-4 overflow-y-auto`}
      >
        <SidebarSection title="HACKATHON" isCollapsed={isCollapsed}>
          <SidebarItem
            icon={<GridIcon />}
            label="All Hackathons"
            isActive={activePath === '/hackathons'}
            href="/hackathons"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<BoxIcon />}
            label="My Hackathon"
            isActive={activePath === '/my-hackathon'}
            href="/my-hackathon"
            isCollapsed={isCollapsed}
          />
        </SidebarSection>

        <SidebarSection title="TEAMS" isCollapsed={isCollapsed}>
          <SidebarItem
            icon={<MessageIcon />}
            label="My Match"
            isActive={activePath === '/my-match'}
            href="/my-match"
            isCollapsed={isCollapsed}
          />
          <SidebarItem
            icon={<UsersIcon />}
            label="My Team"
            isActive={activePath === '/my-team'}
            href="/my-team"
            isCollapsed={isCollapsed}
          />
        </SidebarSection>
      </nav>

      <div
        className={`border-t border-gray-100 ${isCollapsed ? 'px-2' : 'px-3'} py-4 space-y-2`}
      >
        <SidebarItem
          icon={<HelpIcon />}
          label="Help"
          isActive={activePath === '/help'}
          href="/help"
          isCollapsed={isCollapsed}
        />
        <SidebarItem
          icon={<LogoutIcon />}
          label="Log out"
          isActive={false}
          href="/logout"
          isCollapsed={isCollapsed}
        />
      </div>
    </div>
  );
}
