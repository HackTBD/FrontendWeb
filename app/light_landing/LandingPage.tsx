'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import { Button } from '../_components/ui/Button';

export default function LightLandingPage() {
  // State to track if the page has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/images/light-background.png" 
          fill
          quality={100}
          priority
          alt="Colorful gradient background"
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* Navigation bar */}
      <div className="relative z-10 w-full py-4 px-28 bg-white/80 backdrop-blur-sm shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0">
                <Image
                  src="/images/logo-polygon.svg"
                  alt="Logo polygon"
                  width={32}
                  height={32}
                />
              </div>
              <div className="absolute inset-0">
                <Image
                  src="/images/logo-ellipse.svg"
                  alt="Logo ellipse"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <span className="font-sans text-sm font-extrabold text-gray-600">hacktbd</span>
          </div>

          {/* Sign Up/Sign In buttons */}
          <div className="flex space-x-3">
            <Button 
              variant="secondary"
              className="px-6 py-2 text-sm rounded-lg"
            >
              Sign in
            </Button>
            <Button 
              variant="default"
              className="px-6 py-2 text-sm rounded-lg"
            >
              Sign up
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mt-16 px-28 flex flex-col md:flex-row justify-between">
        {/* Left content - Text and CTA */}
        <div className="max-w-lg mb-10 md:mb-0">
          <div className="space-y-6">
            <p className="py-1 px-3 bg-white/40 backdrop-blur-sm font-light rounded-full text-gray-800 inline-block">
              Join 7.000+ Hackers
            </p>
            
            <div className="space-y-3">
              <h1 className="text-7xl tracking-tight bg-clip-text bg-gradient-to-r from-[#B9225C] via-[#428295] to-[#63CAAA] text-transparent h-auto font-semibold">
                HackTBD
              </h1>
              <h3 className="text-6xl tracking-tight bg-clip-text bg-gradient-to-r from-[#428295] via-[#B9225C] to-[#63CAAA] text-transparent h-auto font-semibold">
                Hackathon&apos;s Matching
              </h3>
            </div>

            <p className="text-gray-800 text-lg text-pretty">
              50+{' '}
              <span className="bg-clip-text bg-gradient-to-r from-[#428295] to-[#B9225C] text-transparent font-semibold">
                free{' '}
              </span>
              and
              <span className="bg-clip-text bg-gradient-to-r from-[#B9225C] to-[#428295] text-transparent font-semibold">
                {' '}sponsored{' '}
              </span>
              hackathons from around the world.
            </p>
            
            <div className="space-x-3">
              <Button 
                variant="default"
                className="rounded-lg"
              >
                Sign Up
              </Button>
              <Button 
                variant="secondary"
                className="rounded-lg"
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>

        {/* Right content - Image gallery */}
        <div className="flex space-x-5 shadow-lg">
          {/* First column */}
          <div className="flex flex-col space-y-2">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#B9225C] rounded-3xl flex items-center justify-center">
              <Image src="/images/portal.svg" alt="Portal" width={90} height={90} />
            </div>
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#FFBD6B] rounded-3xl"></div>
            <div className="w-36 h-40 md:w-44 md:h-48 bg-white rounded-3xl flex items-center justify-center">
              <Image src="/images/chess-symbol.svg" alt="Chess Symbol" width={60} height={60} />
            </div>
          </div>

          {/* Second column */}
          <div className="flex flex-col space-y-2">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#036CA0] rounded-3xl"></div>
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#63CAAA] rounded-3xl flex items-center justify-center">
              <Image src="/images/message-square.svg" alt="Message Square" width={60} height={60} />
            </div>
            <div className="w-36 h-40 md:w-44 md:h-48 bg-[#F2D4DC] rounded-3xl"></div>
          </div>

          {/* Third column */}
          <div className="flex flex-col space-y-2">
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#D1CDEE] rounded-3xl"></div>
            <div className="w-36 h-36 md:w-44 md:h-44 bg-[#D5E4E8] rounded-3xl flex items-center justify-center">
              <Image src="/images/chess-symbol-2.svg" alt="Chess Symbol 2" width={60} height={60} />
            </div>
            <div className="w-36 h-40 md:w-44 md:h-48 bg-[#FFDD81] rounded-3xl flex items-center justify-center">
              <Image src="/images/butterfly.svg" alt="Butterfly" width={90} height={90} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full mt-16">
        <div className="w-full bg-[#696969] py-10 text-center">
          <p className="text-white text-xl font-medium">
            Built for hackers with 🤍
          </p>
        </div>
      </div>

      {/* Dark mode toggle button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link href="/">
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <span>Try Dark Theme</span>
          </button>
        </Link>
      </div>
    </div>
  );
} 