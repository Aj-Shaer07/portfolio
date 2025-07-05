import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline">
              Reactfolio
            </span>
          </Link>
          <nav className="hidden sm:flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </Link>
            <Link href="#skills" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Skills
            </Link>
            <Link href="#projects" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Projects
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
        </div>
      </div>
    </header>
  );
}
