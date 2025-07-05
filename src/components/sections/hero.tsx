import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full section-padding flex items-center justify-center text-center min-h-[80dvh]">
      <div className="container">
        <div className="flex flex-col items-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline">
              Ajay Sharma
            </h1>
            <p className="text-xl font-medium text-accent md:text-2xl">
              AI Student & Developer
            </p>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              A student at NITK Surathkal (Class of 2028), passionate about Artificial Intelligence, development, and building innovative projects.
            </p>
          </div>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
