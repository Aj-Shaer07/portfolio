import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none font-headline">
              Ajay Sharma
            </h1>
            <p className="text-xl font-medium text-accent md:text-2xl">
              AI Student & Developer
            </p>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              A student at NITK Surathkal (Class of 2028), passionate about Artificial Intelligence, development, and building innovative projects.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
          <div className="w-full max-w-[550px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              data-ai-hint="abstract developer"
              height="550"
              src="https://placehold.co/550x550.png"
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
