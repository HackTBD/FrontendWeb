'use client';

import { useState, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { Button } from '../../_components/ui/Button';
import type { HackathonEventsNode } from '../../_lib/graphql/__generated__/graphql';

const UPDATE_HACKATHON_EVENTS = gql`
  mutation UpdateHackathonEvents($id: ID!, $input: HackathonEventsInput!) {
    updateHackathonEvents(id: $id, input: $input) {
      hackathonEvent {
        __typename
        id
        eventId
        name
        description
        startDate
        endDate
        location
        isVirtual
        level
        maxTeamSize
        minTeamSize
        status
        hackathonOrganizations {
          id
          orgId
          name
        }
      }
    }
  }
`;

interface HackathonFormState {
  name: string;
  description: string;
  team_size: string;
  minTeamSize: number;
  maxTeamSize: number;
  location: string;
  isVirtual: boolean;
  level: 'beginner' | 'intermediate' | 'advanced' | 'all level';
  startDate: string;
  endDate: string;
  status: 'open' | 'closed' | 'happening' | 'completed';
  hackathonOrganizationsId: string;
}

interface EditHackathonFormProps {
  hackathon: HackathonEventsNode & {
    hackathonOrganizations?: { id: string; orgId: string; name: string; website?: string; contactEmail?: string }[] | null;
  };
  isDark: boolean;
  onClose: () => void;
}

export default function EditHackathonForm({ hackathon, isDark, onClose }: EditHackathonFormProps) {
  console.log('Hackathon Prop:', hackathon);

  const [formData, setFormData] = useState<HackathonFormState>({
    name: hackathon.name || '',
    description: hackathon.description || '',
    team_size: `${hackathon.minTeamSize || 1}-${hackathon.maxTeamSize || 4}`,
    minTeamSize: hackathon.minTeamSize || 1,
    maxTeamSize: hackathon.maxTeamSize || 4,
    location: hackathon.location || '',
    isVirtual: hackathon.isVirtual ?? false,
    level: (hackathon.level?.toLowerCase() as HackathonFormState['level']) || 'beginner',
    startDate: hackathon.startDate ? hackathon.startDate.split('T')[0] : '',
    endDate: hackathon.endDate ? hackathon.endDate.split('T')[0] : '',
    status: (hackathon.status?.toLowerCase() as HackathonFormState['status']) || 'open',
    hackathonOrganizationsId: hackathon.hackathonOrganizations?.[0]?.orgId || '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const [updateHackathon, { loading, error }] = useMutation(UPDATE_HACKATHON_EVENTS, {
    update(cache, { data }) {
      if (data?.updateHackathonEvents?.hackathonEvent) {
        cache.modify({
          id: cache.identify(data.updateHackathonEvents.hackathonEvent),
          fields: {
            name() {
              return data.updateHackathonEvents.hackathonEvent.name;
            },
            description() {
              return data.updateHackathonEvents.hackathonEvent.description;
            },
            startDate() {
              return data.updateHackathonEvents.hackathonEvent.startDate;
            },
            endDate() {
              return data.updateHackathonEvents.hackathonEvent.endDate;
            },
            location() {
              return data.updateHackathonEvents.hackathonEvent.location;
            },
            isVirtual() {
              return data.updateHackathonEvents.hackathonEvent.isVirtual;
            },
            level() {
              return data.updateHackathonEvents.hackathonEvent.level;
            },
            maxTeamSize() {
              return data.updateHackathonEvents.hackathonEvent.maxTeamSize;
            },
            minTeamSize() {
              return data.updateHackathonEvents.hackathonEvent.minTeamSize;
            },
            status() {
              return data.updateHackathonEvents.hackathonEvent.status;
            },
          },
        });
      }
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validate = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (formData.isVirtual === false && !formData.location.trim()) {
      newErrors.location = 'Location is required for in-person events';
    }
    if (formData.maxTeamSize < 1) {
      newErrors.maxTeamSize = 'Max team size must be at least 1';
    }
    if (formData.minTeamSize < 1) {
      newErrors.minTeamSize = 'Min team size must be at least 1';
    }
    if (formData.maxTeamSize < formData.minTeamSize) {
      newErrors.maxTeamSize = 'Max team size must be greater than or equal to min team size';
    }
    if (!formData.hackathonOrganizationsId) {
      newErrors.hackathonOrganizationsId = 'Organization ID is required';
    } else if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
        formData.hackathonOrganizationsId
      )
    ) {
      newErrors.hackathonOrganizationsId = 'Invalid UUID format';
    }
    if (!hackathon.id) {
      newErrors.id = 'Invalid hackathon ID';
    }
    return newErrors;
  }, [formData, hackathon.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const input = {
      name: formData.name,
      description: formData.description || null,
      minTeamSize: formData.minTeamSize,
      maxTeamSize: formData.maxTeamSize,
      location: formData.isVirtual ? null : formData.location,
      isVirtual: formData.isVirtual,
      level: formData.level.toUpperCase().replace(' ', '_') as
        | 'BEGINNER'
        | 'INTERMEDIATE'
        | 'ADVANCED'
        | 'ALL_LEVEL',
      startDate: formData.startDate ? `${formData.startDate}T00:00:00Z` : null,
      endDate: formData.endDate ? `${formData.endDate}T00:00:00Z` : null,
      status: formData.status.toUpperCase() as 'OPEN' | 'CLOSED' | 'HAPPENING' | 'COMPLETED',
      hackathonOrganizationsId: formData.hackathonOrganizationsId,
    };

    console.log('Mutation Input:', { id: hackathon.id, input });

    try {
      const { data } = await updateHackathon({
        variables: {
          id: hackathon.id,
          input,
        },
      });
      console.log('Mutation Response:', data);
      if (data?.updateHackathonEvents?.errors?.length) {
        const serverErrors: { [key: string]: string } = {};
        data.updateHackathonEvents.errors.forEach((err: { field: string; message: string }) => {
          serverErrors[err.field] = err.message;
        });
        setErrors(serverErrors);
      } else {
        console.log('Mutation Success:', data);
        onClose();
      }
    } catch (err) {
      console.error('Error updating hackathon:', err);
      setErrors({ general: 'Failed to update hackathon. Please try again.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.general && (
        <p className="text-red-500 text-sm">{errors.general}</p>
      )}
      <div>
        <label
          htmlFor="name"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label
          htmlFor="description"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
        />
        {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="minTeamSize"
            className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
          >
            Min Team Size
          </label>
          <input
            type="number"
            id="minTeamSize"
            name="minTeamSize"
            value={formData.minTeamSize}
            onChange={handleChange}
            min="1"
            className={`mt-1 block w-full rounded-md border ${
              isDark
                ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
            } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          />
          {errors.minTeamSize && (
            <p className="mt-1 text-sm text-red-500">{errors.minTeamSize}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="maxTeamSize"
            className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
          >
            Max Team Size
          </label>
          <input
            type="number"
            id="maxTeamSize"
            name="maxTeamSize"
            value={formData.maxTeamSize}
            onChange={handleChange}
            min="1"
            className={`mt-1 block w-full rounded-md border ${
              isDark
                ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
            } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          />
          {errors.maxTeamSize && (
            <p className="mt-1 text-sm text-red-500">{errors.maxTeamSize}</p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="team_size"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Team Size (Display)
        </label>
        <input
          type="text"
          id="team_size"
          name="team_size"
          value={formData.team_size}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          placeholder="e.g., 1-4"
        />
        {errors.team_size && <p className="mt-1 text-sm text-red-500">{errors.team_size}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="startDate"
            className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              isDark
                ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
            } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          />
          {errors.startDate && <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>}
        </div>

        <div>
          <label
            htmlFor="endDate"
            className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              isDark
                ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
                : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
            } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          />
          {errors.endDate && <p className="mt-1 text-sm text-red-500">{errors.endDate}</p>}
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          disabled={formData.isVirtual}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2 ${formData.isVirtual ? 'opacity-50' : ''}`}
        />
        {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
      </div>

      <div>
        <label
          htmlFor="isVirtual"
          className={`flex items-center text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          <input
            type="checkbox"
            id="isVirtual"
            name="isVirtual"
            checked={formData.isVirtual}
            onChange={handleChange}
            className={`mr-2 rounded border ${
              isDark ? 'border-zinc-700 text-pink-500' : 'border-gray-300 text-[#036CA0]'
            } focus:ring focus:ring-opacity-50`}
          />
          Virtual Event
        </label>
      </div>

      <div>
        <label
          htmlFor="level"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Experience Level
        </label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
        >
          <option value="">Select level</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="all level">All Level</option>
        </select>
        {errors.level && <p className="mt-1 text-sm text-red-500">{errors.level}</p>}
      </div>

      <div>
        <label
          htmlFor="status"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
        >
          <option value="">Select status</option>
          <option value="open">Open</option>
          <option value="happening">Happening</option>
          <option value="closed">Closed</option>
          <option value="completed">Completed</option>
        </select>
        {errors.status && <p className="mt-1 text-sm text-red-500">{errors.status}</p>}
      </div>

      <div>
        <label
          htmlFor="hackathonOrganizationsId"
          className={`block text-sm font-medium ${isDark ? 'text-zinc-200' : 'text-gray-700'}`}
        >
          Organization ID
        </label>
        <input
          type="text"
          id="hackathonOrganizationsId"
          name="hackathonOrganizationsId"
          value={formData.hackathonOrganizationsId}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            isDark
              ? 'bg-zinc-800 border-zinc-700 text-zinc-200 focus:border-pink-500'
              : 'bg-white border-gray-300 text-gray-900 focus:border-[#036CA0]'
          } shadow-sm focus:ring focus:ring-opacity-50 p-2`}
          placeholder="e.g., 2d7a8f62-bf79-4d49-a4f4-0f7b2d83c90e"
        />
        {errors.hackathonOrganizationsId && (
          <p className="mt-1 text-sm text-red-500">{errors.hackathonOrganizationsId}</p>
        )}
      </div>

      {error && (
        <p className="text-red-500 text-sm">Error updating hackathon: {error.message}</p>
      )}

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onClose}
          className={`${
            isDark
              ? 'border-pink-500/30 hover:border-pink-500/50 text-pink-400 hover:bg-pink-500/10'
              : 'border-[#036CA0]/30 hover:border-[#036CA0]/50 text-[#036CA0] hover:bg-[#036CA0]/10'
          }`}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className={`${
            isDark
              ? 'bg-pink-500 hover:bg-pink-600 text-white'
              : 'bg-[#036CA0] hover:bg-[#036CA0]/90 text-white'
          } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}