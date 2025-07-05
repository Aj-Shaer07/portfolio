import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Hi, I am Ajay Sharma, undergrad student of the 2028-NITK batch
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I design and build beautiful and functional web applications. Explore my work and let's create something amazing together.
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
          </div>
          <div className="hidden lg:flex items-center justify-center">
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
