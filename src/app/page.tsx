'use client';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import AnimatedSection from '@/components/animated-section';

import { motion } from 'framer-motion';
export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
 <AnimatedSection>
 <Hero />
 </AnimatedSection>
 <AnimatedSection>
 <About />
 </AnimatedSection>
 <AnimatedSection>
 <Skills />
 </AnimatedSection>
 <AnimatedSection>
 <Experience />
 </AnimatedSection>
 <AnimatedSection>
 <Projects />
 </AnimatedSection>
      </main>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.3,
        }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
