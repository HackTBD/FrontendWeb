// Import the ThemeProvider from the UI components
import { ThemeProvider } from '../_components/ui/ThemeProvider';
import Link from 'next/link';

// TODO: Make it pretty Tonny help how the hell
// TODO: my intention for this page is for when unauthorized user try to get into hackathons
function NotFoundContent() {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ fontSize: '72px', fontWeight: 'bold' }}>404</h1>
      <h2 style={{ fontSize: '24px', margin: '20px 0' }}>
        Oops! Page Not Found.
      </h2>
      <p style={{ fontSize: '18px', marginBottom: '30px' }}>
        Sorry, the page you&apos;re looking for doesn&apos;t exist. Please check
        the URL or go back to the homepage.
      </p>
      <Link
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        Go to homepage
      </Link>
    </div>
  );
}

export default function NotFoundPage({
  defaultTheme = 'light', // Default theme can be set by the page that imports this component
}: {
  defaultTheme?: 'light' | 'dark';
}) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      <NotFoundContent />
    </ThemeProvider>
  );
}
