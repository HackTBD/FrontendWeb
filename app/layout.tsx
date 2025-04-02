import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AuroraBackground } from './_components/ui/AuroraBackground';
import { ThemeProvider } from './_components/ui/ThemeProvider';
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'HackTBD',
  description: 'A place to match hackers together',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full h-full overflow-y-auto`}
        >
          <ThemeProvider defaultTheme="system">
            <main className="relative h-full w-full overflow-auto">
              <AuroraBackground>{children}</AuroraBackground>
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
