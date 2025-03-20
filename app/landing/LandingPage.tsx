import { Button } from '../_components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="text-center space-y-5 max-w-2xl z-10">
        <p
          className="py-1 px-2 bg-zinc-900/40 backdrop-drop-sm font-light
                rounded-full text-white inline-block"
        >
          Join 7.000+ Hackers
        </p>
        <div className="space-y-3">
          <h1
            className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r 
                from-pink-500 via-purple-400 to-blue-500 text-transparent h-20
                font-semibold"
          >
            HackTBD
          </h1>
          <h3
            className="text-6xl tracking-tight bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-400 to-blue-500 text-transparent h-auto
                font-semibold"
          >
            Hackathon&apos;s Matching
          </h3>
        </div>

        <p className="text-gray-400 text-lg text-pretty">
          {' '}
          50+{' '}
          <span className="bg-clip-text bg-gradient-to-r from-purple-500 to-rose-500 text-transparent font-semibold">
            {' '}
            free{' '}
          </span>{' '}
          and
          <span className="bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 text-transparent font-semibold">
            {' '}
            sponsored{' '}
          </span>{' '}
          hackathons from around the world.
        </p>

        <div className="space-x-3">
          <Button variant="default" className="rounded-lg">
            Sign Up
          </Button>
          <Button variant="secondary" className="rounded-lg">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
