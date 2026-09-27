import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ProjectPulse — AI Project Risk Manager | CPSC 8820 Phase 1',
  description:
    'ProjectPulse is an AI-assisted software project risk management platform developed for CPSC 8820 - Planning and Management of Software Projects at Governors State University.',
  authors: [{ name: 'ProjectPulse Team' }],
  keywords: [
    'ProjectPulse',
    'AI Risk Management',
    'Software Engineering',
    'CPSC 8820',
    'Governors State University',
    'Project Management',
    'Risk Register',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-secondary/30 selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
