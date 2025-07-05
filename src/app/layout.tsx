import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Reactfolio | A Portfolio for Creative Developers',
  description: 'A portfolio webpage built with Next.js, React, and TypeScript, featuring an interactive UI and AI-powered bio generator.',
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
      <body className="font-body antialiased">
        <div className="relative min-h-dvh">
           <div className="aurora-wrapper">
            <div className="aurora-outer">
              <div className="aurora-inner" />
            </div>
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
