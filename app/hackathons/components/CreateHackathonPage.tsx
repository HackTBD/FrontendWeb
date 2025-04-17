'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { useTheme } from '../../_components/ui/ThemeProvider';
import Sidebar from '../../_components/ui/Sidebar';
import { Header } from '../../_components/ui/Header';
import { Button } from '../../_components/ui/Button';
import HackathonFormBasic from '../components/HackathonFormBasic';
import HackathonFormDetails from '../components/HackathonFormDetails';
import HackathonFormSubmit from '../components/HackathonFormSubmit';

type HackathonFormState = {
  // Required database fields
  name: string;
  description: string;
  team_size: string;
  min_team_size: number;
  max_team_size: number;
  location: string;
  is_virtual: boolean;
  level: string;
  start_date: string;
  end_date: string;
  status: 'open' | 'happening' | 'closed' | 'completed';
  // Additional fields for the form
  org_id: string;
  hackathon_organizations_id: string;
  timezone: string;
};

const initialFormState: HackathonFormState = {
  name: '',
  org_id: '',
  hackathon_organizations_id: '',
  description: '',
  team_size: '1-4',
  min_team_size: 1,
  max_team_size: 4,
  location: '',
  is_virtual: false,
  level: 'all-levels',
  start_date: '',
  end_date: '',
  status: 'open',
  timezone: 'EST',
};

export default function CreateHackathonPage() {
  const { theme } = useTheme();
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] =
    useState<HackathonFormState>(initialFormState);

  // Simulate fetching org_id from user context
  useState(() => {
    const mockOrgId = '2d7a8f62-bf79-4d49-a4f4-0f7b2d83c90e';
    setFormState((prev) => ({
      ...prev,
      org_id: mockOrgId,
      hackathon_organizations_id: mockOrgId,
    }));
  });

  const updateFormState = (updates: Partial<HackathonFormState>) => {
    setFormState((prev) => {
      const newState = { ...prev, ...updates };

      // Handle team size parsing
      if (updates.team_size) {
        const [min, max] = updates.team_size.split('-').map(Number);
        newState.min_team_size = min;
        newState.max_team_size = max || min;
      }

      // Handle virtual format
      if (updates.hasOwnProperty('is_virtual')) {
        if (updates.is_virtual && newState.location === '') {
          newState.location = 'Virtual';
        }
      }

      return newState;
    });
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    console.log(
      'handleSubmit triggered, currentStep:',
      currentStep,
      'formState:',
      formState
    );

    // Validate required fields
    if (
      !formState.name ||
      !formState.start_date ||
      !formState.end_date ||
      !formState.location
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields (Name, Location, Start Date, End Date).',
      });
      return;
    }

    // Prepare data for database
    const hackathonData = {
      event_id: null,
      org_id: formState.org_id,
      name: formState.name,
      description: formState.description,
      team_size: formState.team_size,
      location: formState.location,
      is_virtual: formState.is_virtual,
      level: formState.level,
      start_date: formState.start_date,
      end_date: formState.end_date,
      created_at: new Date().toISOString(),
      hackathon_organizations_id: formState.hackathon_organizations_id,
      max_team_size: formState.max_team_size,
      min_team_size: formState.min_team_size,
      status: formState.status,
    };

    console.log('Form data for database insertion:', hackathonData);

    try {
      // Simulate API call (uncomment when backend is ready)
      // await createHackathon(hackathonData);
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Hackathon created successfully!',
      });
      window.location.href = '/hackathons';
    } catch (error) {
      console.error('Error creating hackathon:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to create hackathon. Please try again.',
      });
    }
  };

  const renderStep = () => {
    console.log('Rendering step:', currentStep);
    switch (currentStep) {
      case 1:
        return (
          <HackathonFormBasic
            formState={formState}
            updateFormState={updateFormState}
            isDark={isDark}
          />
        );
      case 2:
        return (
          <HackathonFormDetails
            formState={formState}
            updateFormState={updateFormState}
            isDark={isDark}
          />
        );
      case 3:
        return <HackathonFormSubmit formState={formState} isDark={isDark} />;
      default:
        return null;
    }
  };

  return (
    <div className={`flex h-screen ${isDark ? 'bg-zinc-900/40' : 'bg-white'}`}>
      <Sidebar activePath="/hackathons" hideLogo={true} />

      <div className="flex-1 overflow-auto">
        {/* Header */}
        <Header />

        {/* Main content */}
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Page title */}
          <div className="mb-8">
            <h1
              className={`text-3xl font-bold ${isDark ? 'text-theme-gradient-primary' : 'text-theme-gradient-primary'}`}
            >
              Create New Hackathon
            </h1>
            <p
              className={`mt-2 ${isDark ? 'text-zinc-400' : 'text-theme-secondary'}`}
            >
              Fill in the details to create and publish your hackathon event
            </p>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {['Basic Info', 'Details', 'Review'].map((step, index) => (
                <span
                  key={index}
                  className={`text-sm font-medium ${
                    currentStep > index + 1
                      ? isDark
                        ? 'text-pink-400'
                        : 'text-[#036CA0]'
                      : currentStep === index + 1
                        ? isDark
                          ? 'text-white'
                          : 'text-gray-900'
                        : isDark
                          ? 'text-zinc-500'
                          : 'text-gray-400'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
            <div
              className={`w-full h-2 rounded-full ${isDark ? 'bg-zinc-800' : 'bg-gray-100'}`}
            >
              <div
                className={`h-full rounded-full ${isDark ? 'bg-pink-500' : 'bg-[#036CA0]'}`}
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Form container */}
          <div
            className={`rounded-lg p-6 mb-8 ${isDark ? 'bg-zinc-800/50' : 'bg-white border border-gray-200'}`}
          >
            {renderStep()}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              className={`rounded-lg ${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:border-gray-300'}`}
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              Back
            </Button>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                className={`rounded-lg ${isDark ? 'border-zinc-700 hover:border-zinc-600' : 'border-gray-200 hover:border-gray-300'}`}
                onClick={() => (window.location.href = '/hackathons')}
              >
                Cancel
              </Button>

              {currentStep < 4 ? (
                <Button
                  variant="primary"
                  className={`rounded-lg ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
                  onClick={nextStep}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  variant="primary"
                  className={`rounded-lg ${!isDark && 'bg-[#036CA0] hover:bg-[#036CA0]/90'}`}
                  onClick={() => {
                    console.log('Create Hackathon button clicked');
                    handleSubmit();
                  }}
                >
                  Create Hackathon
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
