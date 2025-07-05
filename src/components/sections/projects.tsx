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
    <section id="projects" className="w-full section-padding">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-headline text-secondary-foreground">
            My Work
          </div>
          <h2 className="section-heading">Featured Projects</h2>
          <p className="section-subheading">
            Here are some of the projects I'm proud of. Each one was a unique challenge that I enjoyed solving.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
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
