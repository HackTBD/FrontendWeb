'use client';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useTheme } from '../../_components/ui/ThemeProvider';
import Sidebar from '../../_components/ui/Sidebar';
import { Header } from '../../_components/ui/Header';
import { Button } from '../../_components/ui/Button';
import HackathonFormBasic from '../components/HackathonFormBasic';
import HackathonFormDetails from '../components/HackathonFormDetails';
import HackathonFormSubmit from '../components/HackathonFormSubmit';
import { useCreateHackathonEvent } from '../../_lib/graphql/mutations/hackathon-events/use-create-hackathon-events';

type HackathonFormState = {
  name: string;
  description: string;
  team_size: string;
  min_team_size: number;
  max_team_size: number;
  location: string;
  is_virtual: boolean;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all level';
  start_date: string;
  end_date: string;
  status: 'open' | 'closed' | 'happening' | 'completed';
  org_id: string;
  hackathon_organizations_id: string;
  logo?: File | null;
  coverImage?: File | null;
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
  level: 'beginner',
  start_date: '',
  end_date: '',
  status: 'open',
  logo: null,
  coverImage: null,
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
  const [createHackathonEvent, { loading, error }] = useCreateHackathonEvent();

  // Fetch or set org_id dynamically
  useEffect(() => {
    const fetchOrgId = async () => {
      // TODO: Replace with actual logic to fetch org_id from auth context
      const mockOrgId = '2d7a8f62-bf79-4d49-a4f4-0f7b2d83c90e'; // Verify this ID exists in the backend
      setFormState((prev) => ({
        ...prev,
        org_id: mockOrgId,
        hackathon_organizations_id: mockOrgId,
      }));
    };
    fetchOrgId();
  }, []);

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
      !formState.location ||
      !formState.hackathon_organizations_id
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all required fields (Name, Location, Start Date, End Date, Organization).',
      });
      return;
    }

    // Validate date format
    if (
      isNaN(new Date(formState.start_date).getTime()) ||
      isNaN(new Date(formState.end_date).getTime())
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Date',
        text: 'Please provide valid start and end dates.',
      });
      return;
    }

    // Prepare data for GraphQL mutation
    const input = {
      name: formState.name,
      description: formState.description,
      location: formState.location,
      isVirtual: formState.is_virtual,
      level: formState.level,
      minTeamSize: formState.min_team_size,
      maxTeamSize: formState.max_team_size,
      startDate: new Date(formState.start_date).toISOString(),
      endDate: new Date(formState.end_date).toISOString(),
      status: formState.status,
      hackathonOrganizationsId: formState.hackathon_organizations_id,
    };

    try {
      const { data } = await createHackathonEvent({
        variables: { input },
      });

      if (data?.createHackathonEvents?.hackathonEvent) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Hackathon created successfully!',
        });
        window.location.href = '/hackathons';
      } else {
        throw new Error('No hackathon event returned');
      }
    } catch (err: any) {
      console.error('Error creating hackathon:', err);
      let errorMessage = 'Failed to create hackathon. Please try again.';
      if (err.graphQLErrors && err.graphQLErrors.length > 0) {
        errorMessage = err.graphQLErrors[0].message;
      } else if (err.networkError) {
        errorMessage = 'Network error. Please check your connection.';
      }
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: errorMessage,
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
        <Header />
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
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
          <div
            className={`rounded-lg p-6 mb-8 ${isDark ? 'bg-zinc-800/50' : 'bg-white border border-gray-200'}`}
          >
            {renderStep()}
          </div>
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
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Hackathon'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
