'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React, { useState, useRef } from 'react';

export default function Header() {
  const navRef = useRef<HTMLElement>(null);
  const [pillStyle, setPillStyle] = useState({
    opacity: 0,
    width: 0,
    height: 0,
    left: 0,
    top: 0,
  });

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = e.currentTarget;
    setPillStyle({
      opacity: 1,
      width: offsetWidth,
      height: offsetHeight,
      left: offsetLeft,
      top: offsetTop,
    });
  };

  const handleMouseLeave = () => {
    setPillStyle(prev => ({ ...prev, opacity: 0 }));
  };


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline">
              Portfolio
            </span>
          </Link>
          <nav 
            ref={navRef}
            onMouseLeave={handleMouseLeave}
            className="hidden sm:flex items-center space-x-2 text-sm font-medium relative"
          >
            <div
              className="absolute bg-accent rounded-md transition-all duration-300 ease-out pointer-events-none"
              style={pillStyle}
            />
            <Link 
              href="#about"
              onMouseEnter={handleMouseEnter}
              className="relative z-10 transition-colors text-foreground/60 hover:text-accent-foreground px-3 py-1"
            >
              About
            </Link>
            <Link
              href="#skills"
              onMouseEnter={handleMouseEnter}
              className="relative z-10 transition-colors text-foreground/60 hover:text-accent-foreground px-3 py-1"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              onMouseEnter={handleMouseEnter}
              className="relative z-10 transition-colors text-foreground/60 hover:text-accent-foreground px-3 py-1"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onMouseEnter={handleMouseEnter}
              className="relative z-10 transition-colors text-foreground/60 hover:text-accent-foreground px-3 py-1"
            >
              Projects
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button asChild variant="outline">
              <a href="#contact">Contact Me</a>
            </Button>
        </div>
      </div>
    </header>
  );
}
