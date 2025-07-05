import ProjectCard from '@/components/project-card';

const projects = [
  {
    title: 'Project One',
    description: 'A cutting-edge web application that solves a real-world problem with an elegant design and powerful features.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'web application',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'An innovative mobile-first platform designed for seamless user interaction and engagement on the go.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile platform',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'A data visualization tool that transforms complex datasets into insightful and interactive dashboards.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    link: '#',
  },
   {
    title: 'Project Four',
    description: 'A creative e-commerce experience with a focus on product storytelling and a smooth checkout process.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce website',
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each one was a unique challenge that I enjoyed solving.
            </p>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 mt-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageHint={project.imageHint}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
