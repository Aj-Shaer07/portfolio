import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block font-headline">
              Portfolio
            </span>
          </Link>
          <nav className="hidden sm:flex items-center space-x-2 text-sm font-medium">
            <Link href="#about" className="transition-colors text-foreground/60 hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-md">
              About
            </Link>
            <Link href="#skills" className="transition-colors text-foreground/60 hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-md">
              Skills
            </Link>
            <Link href="#experience" className="transition-colors text-foreground/60 hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-md">
              Experience
            </Link>
            <Link href="#projects" className="transition-colors text-foreground/60 hover:bg-accent hover:text-accent-foreground px-3 py-1 rounded-md">
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
