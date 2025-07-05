import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { AuroraBackground } from '@/components/ui/aurora';

export const metadata: Metadata = {
  title: 'Ajay Sharma | Creative Developer',
  description: 'The portfolio of Ajay Sharma, a creative developer specializing in React, Next.js, and modern web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased bg-background">
        <AuroraBackground>
            {children}
        </AuroraBackground>
        <Toaster />
      </body>
    </html>
  );
}
