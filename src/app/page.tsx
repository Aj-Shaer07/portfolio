import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <div className="container">
          <Separator />
        </div>
        <Skills />
        <div className="container">
          <Separator />
        </div>
        <Experience />
        <div className="container">
          <Separator />
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
