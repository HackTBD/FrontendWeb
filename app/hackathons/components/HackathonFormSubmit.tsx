import { format } from 'date-fns';

type HackathonFormSubmitProps = {
  formState: any;
  isDark: boolean;
};

export default function HackathonFormSubmit({
  formState,
  isDark,
}: HackathonFormSubmitProps) {
  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not set';
    try {
      return format(new Date(dateString), 'MMM d, yyyy h:mm a');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="space-y-6">
      <h2
        className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
      >
        Review Your Hackathon
      </h2>

      <div>
        <p className={`mb-4 ${isDark ? 'text-zinc-300' : 'text-gray-600'}`}>
          Please review all information before creating your hackathon.
        </p>

        <div
          className={`rounded-lg border ${isDark ? 'border-zinc-700' : 'border-gray-200'}`}
        >
          {/* Header with logo */}
          <div
            className={`rounded-t-lg p-4 flex items-center space-x-4 ${isDark ? 'bg-zinc-800/30' : 'bg-gray-50'}`}
          >
            <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-200">
              {formState.logo ? (
                <img
                  src={URL.createObjectURL(formState.logo)}
                  alt="Hackathon logo"
                  className="h-full w-full object-contain"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
            <div>
              <h3
                className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
              >
                {formState.name || 'Hackathon Name'}
              </h3>
              <p
                className={`text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
              >
                {formState.organizer || 'Organizer'}
              </p>
            </div>
          </div>

          {/* Cover image if available */}
          {formState.coverImage && (
            <div className="h-40 w-full">
              <img
                src={URL.createObjectURL(formState.coverImage)}
                alt="Hackathon cover"
                className="h-full w-full object-cover"
              />
            </div>
          )}

          {/* Content sections */}
          <div className="p-4 space-y-6">
            {/* Basic Info */}
            <div>
              <h4
                className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
              >
                Basic Information
              </h4>
              <div
                className={`space-y-2 text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
              >
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="font-medium">
                    {formState.is_virtual
                      ? 'Virtual'
                      : formState.location || 'Not set'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Start Date:</span>
                  <span className="font-medium">
                    {formatDate(formState.start_date)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>End Date:</span>
                  <span className="font-medium">
                    {formatDate(formState.end_date)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Time Zone:</span>
                  <span className="font-medium">
                    {formState.timezone || 'Not set'}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <h4
                className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
              >
                Event Details
              </h4>
              <div
                className={`space-y-2 text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
              >
                <div className="flex justify-between">
                  <span>Team Size:</span>
                  <span className="font-medium">
                    {formState.min_team_size} - {formState.max_team_size}{' '}
                    members
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Experience Level:</span>
                  <span className="font-medium">{formState.level}</span>
                </div>

               
              </div>
            </div>

            {/* Description */}
            <div>
              <h4
                className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
              >
                Description
              </h4>
              <div
                className={`text-sm whitespace-pre-wrap ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
              >
                {formState.description || 'No description provided'}
              </div>
            </div>

            {/* Requirements if provided */}
            {formState.requirements && (
              <div>
                <h4
                  className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
                >
                  Special Requirements
                </h4>
                <div
                  className={`text-sm whitespace-pre-wrap ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
                >
                  {formState.requirements}
                </div>
              </div>
            )}

            {/* Rules if provided */}
            {formState.rules && (
              <div>
                <h4
                  className={`text-sm font-medium mb-2 ${isDark ? 'text-zinc-300' : 'text-gray-700'}`}
                >
                  Rules & Guidelines
                </h4>
                <div
                  className={`text-sm whitespace-pre-wrap ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
                >
                  {formState.rules}
                </div>
              </div>
            )}
          </div>

          {/* Footer with status */}
          <div
            className={`p-4 rounded-b-lg border-t ${isDark ? 'border-zinc-700 bg-zinc-800/30' : 'border-gray-200 bg-gray-50'}`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-sm ${isDark ? 'text-zinc-400' : 'text-gray-600'}`}
              >
                Initial Status:
              </span>
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  formState.status === 'draft'
                    ? isDark
                      ? 'bg-yellow-400/10 text-yellow-300'
                      : 'bg-yellow-100 text-yellow-800'
                    : isDark
                      ? 'bg-green-400/10 text-green-300'
                      : 'bg-green-100 text-green-800'
                }`}
              >
                {formState.status === 'draft'
                  ? 'Draft'
                  : 'Open for Registration'}
              </span>
            </div>
            <p
              className={`mt-2 text-xs ${isDark ? 'text-zinc-500' : 'text-gray-500'}`}
            >
              You can change the status after creation from the hackathon
              dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
