import { Briefcase, School, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

const experienceData = [
  {
    icon: <School className="h-5 w-5 text-primary-foreground" />,
    date: '2024 - Present',
    title: 'B.Tech in Artificial Intelligence',
    company: 'NITK Surathkal',
    description: 'Pursuing my undergraduate degree, focusing on core AI concepts, machine learning, and software development principles.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-primary-foreground" />,
    date: 'Project',
    title: 'Portfolio Website',
    company: 'Personal Project',
    description: 'Designed and built this personal portfolio using Next.js, React, Tailwind CSS, and Genkit to showcase my skills and projects.',
  },
  {
    icon: <Briefcase className="h-5 w-5 text-primary-foreground" />,
    date: 'Future Goal',
    title: 'Software Development Intern',
    company: 'Dream Tech Company',
    description: 'Aiming to gain hands-on experience in a professional environment, contributing to real-world software projects and learning from mentors.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full section-padding">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-headline text-secondary-foreground">
            My Journey
          </div>
          <h2 className="section-heading">Experience & Milestones</h2>
          <p className="section-subheading">
            A timeline of my professional and academic journey so far.
          </p>
        </div>
        
        {/* Mobile Timeline */}
        <div className="relative max-w-2xl mx-auto md:hidden">
          <div className="absolute left-4 top-0 h-full border-l border-dashed border-foreground -translate-x-1/2"></div>
          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute top-1 left-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center border-4 border-background -translate-x-1/2">
                  {item.icon}
                </div>
                <div className="p-6 rounded-lg bg-card border w-full">
                  <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm font-medium text-accent mt-1">{item.company}</p>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 top-0 h-full w-px border-l border-dashed border-foreground"></div>
            {experienceData.map((item, index) => (
              <div key={index} className="relative my-16">
                <div className={cn("w-1/2 p-6 rounded-lg bg-card border", 
                  index % 2 === 0 ? "float-left -translate-x-12 text-right" : "float-right translate-x-12 text-left"
                )}>
                  <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="font-headline text-xl font-semibold mt-1">{item.title}</h3>
                  <p className="text-sm font-medium text-accent mt-1">{item.company}</p>
                  <p className="text-muted-foreground mt-2">{item.description}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center border-4 border-background z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                  {item.icon}
                </div>
                <div className="clear-both"></div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}