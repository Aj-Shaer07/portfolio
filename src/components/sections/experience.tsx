import { Briefcase, School, Rocket } from 'lucide-react';

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
    <section id="experience" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-headline text-primary-foreground">
            My Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Experience & Milestones</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A timeline of my professional and academic journey so far.
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center z-10">
                  {item.icon}
                </div>
                {index < experienceData.length - 1 && (
                  <div className="w-px h-full bg-border"></div>
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-accent">{item.company}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
            <div className="relative w-full py-16">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
                <div className="relative flex justify-between w-full">
                    {experienceData.map((item, index) => {
                        const isAbove = index % 2 === 0;
                        return (
                            <div key={index} className="relative flex justify-center w-1/3">
                                <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-border ${isAbove ? 'h-16 bottom-1/2' : 'h-16 top-1/2'}`}></div>
                                <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background z-10">
                                    {item.icon}
                                </div>
                                <div className={`w-72 text-center transition-transform duration-300 ${isAbove ? 'hover:-translate-y-2 absolute bottom-[calc(50%_+_2.5rem)]' : 'hover:translate-y-2 absolute top-[calc(50%_+_2.5rem)]'}`}>
                                    <div className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/20 shadow-lg">
                                        <p className="font-mono text-sm text-muted-foreground">{item.date}</p>
                                        <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                                        <p className="text-sm font-medium text-accent">{item.company}</p>
                                        <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}