import { useState, useEffect } from 'react';
import { Users, PlusCircle, UserPlus, Search, Filter, ChevronRight } from 'lucide-react';

// Mock data based on your schema
const mockTeams = [
  {
    team_id: "123e4567-e89b-12d3-a456-426614174000",
    event_id: "123e4567-e89b-12d3-a456-426614174001",
    team_name: "Code Wizards",
    status: "forming",
    team_size: 4,
    created_at: "2025-05-10T15:30:00Z",
    skills_needed: ["React", "Node.js", "UI/UX"],
    background_needed: ["Software Development", "Design"]
  },
  {
    team_id: "223e4567-e89b-12d3-a456-426614174002",
    event_id: "123e4567-e89b-12d3-a456-426614174001",
    team_name: "Data Miners",
    status: "complete",
    team_size: 3,
    created_at: "2025-05-09T12:15:00Z",
    skills_needed: ["Python", "Data Science", "Machine Learning"],
    background_needed: ["Data Analytics", "Statistics"]
  },
  {
    team_id: "323e4567-e89b-12d3-a456-426614174003",
    event_id: "123e4567-e89b-12d3-a456-426614174001",
    team_name: "AI Innovators",
    status: "forming",
    team_size: 5,
    created_at: "2025-05-12T09:45:00Z",
    skills_needed: ["TensorFlow", "NLP", "Computer Vision"],
    background_needed: ["Machine Learning", "AI Research"]
  }
];

// Main App Component
export default function TeamsFrontend() {
  const [page, setPage] = useState('home');
  const [teams, setTeams] = useState(mockTeams);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Navigation functions
  const navigateToTeams = () => setPage('teams');
  const navigateToHome = () => setPage('home');

  // Filter functions
  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.team_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || team.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Render based on current page
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer" onClick={navigateToHome}>Hackathon Platform</h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="cursor-pointer hover:underline">Events</li>
              <li 
                className={`cursor-pointer ${page === 'teams' ? 'underline font-bold' : 'hover:underline'}`}
                onClick={navigateToTeams}
              >
                Teams
              </li>
              <li className="cursor-pointer hover:underline">Profile</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-grow p-6">
        {page === 'home' ? (
          <HomePage onNavigateToTeams={navigateToTeams} />
        ) : (
          <TeamsPage 
            teams={filteredTeams} 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Hackathon Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// Teams Page Component
function TeamsPage({ teams, searchTerm, setSearchTerm, statusFilter, setStatusFilter }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Teams</h2>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
          <PlusCircle size={18} />
          <span>Create Team</span>
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="pl-10 pr-8 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="forming">Forming</option>
            <option value="complete">Complete</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map(team => (
          <TeamCard key={team.team_id} team={team} />
        ))}
      </div>

      {teams.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No teams found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

// Team Card Component
function TeamCard({ team }) {
  const statusColors = {
    forming: 'bg-blue-100 text-blue-800',
    complete: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{team.team_name}</h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[team.status]}`}>
            {team.status.charAt(0).toUpperCase() + team.status.slice(1)}
          </span>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-2">
            <Users size={16} className="text-gray-500 mr-2" />
            <span className="text-gray-700">{team.team_size} members</span>
          </div>
          <div className="text-gray-500 text-sm">
            Created on {new Date(team.created_at).toLocaleDateString()}
          </div>
        </div>

        {team.skills_needed && team.skills_needed.length > 0 && (
          <div className="mb-3">
            <p className="text-sm font-medium text-gray-700 mb-1">Skills needed:</p>
            <div className="flex flex-wrap gap-1">
              {team.skills_needed.map((skill, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {team.background_needed && team.background_needed.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">Background needed:</p>
            <div className="flex flex-wrap gap-1">
              {team.background_needed.map((bg, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {bg}
                </span>
              ))}
            </div>
          </div>
        )}

        <button className="flex items-center justify-between w-full mt-2 text-blue-600 hover:text-blue-800 font-medium">
          <span>View Details</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="bg-gray-50 px-5 py-3 border-t">
        <button className="flex items-center text-sm text-green-600 hover:text-green-800 font-medium">
          <UserPlus size={16} className="mr-1" />
          <span>Request to Join</span>
        </button>
      </div>
    </div>
  );
}

// Placeholder HomePage component
function HomePage({ onNavigateToTeams }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-3xl font-bold mb-4">Welcome to the Hackathon Platform!</h2>
      <p className="text-gray-600 mb-6">Find or create your dream team today.</p>
      <button
        onClick={onNavigateToTeams}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Explore Teams
      </button>
    </div>
  );
}
