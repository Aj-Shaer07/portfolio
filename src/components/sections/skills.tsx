import {
  Atom,
  BrainCircuit,
  Code,
  Container,
  Database,
  GitMerge,
  Github,
  Hexagon,
  Rocket,
  Server,
  Shield,
  Triangle,
  Wind,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code className="h-6 w-6" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Rocket className="h-6 w-6" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Shield className="h-6 w-6" />,
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Genkit'],
  },
];

const JsIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
    <path d="M4.24 18.84h2.92v-7.3c0-1.44.7-2.23 2.12-2.23c1.43 0 2.12.8 2.12 2.23v7.3h2.92v-8.1c0-2.4-1.4-3.83-3.8-3.83c-2.12 0-3.35 1.3-3.8 2.4h-.08V7.52H6.8v11.32h.36zm14.16-8.88c-2.36 0-3.92 1.5-3.92 3.64c0 2.14 1.56 3.64 3.92 3.64c2.36 0 3.92-1.5 3.92-3.64c0-2.14-1.56-3.64-3.92-3.64zm0 5.84c-1.16 0-1.72-.8-1.72-2.2c0-1.4.56-2.2 1.72-2.2s1.72.8 1.72 2.2c0 1.4-.56 2.2-1.72 2.2z"/>
  </svg>
);

const TsIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
    <path d="M11.84 11.2c0-1.4-.92-2.2-2.8-2.2H5.12v11.36h3.12v-4.96h.72l2.44 4.96h3.4l-3.2-5.92c1.48-.2 2.2-1.12 2.2-2.24zm-3.84 2.88H7.2V8.48h.8c1.2 0 1.84.52 1.84 1.64c0 1.16-.64 1.64-1.84 1.64zm10.4-2.88c-2.36 0-3.92 1.5-3.92 3.64c0 2.14 1.56 3.64 3.92 3.64c2.36 0 3.92-1.5 3.92-3.64c0-2.14-1.56-3.64-3.92-3.64zm0 5.84c-1.16 0-1.72-.8-1.72-2.2c0-1.4.56-2.2 1.72-2.2s1.72.8 1.72 2.2c0 1.4-.56 2.2-1.72 2.2z"/>
  </svg>
);

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
    <path d="M16.44 4.49a.66.66 0 0 0-.47.2l-2.9 2.9a.66.66 0 0 0 0 .93l.03.03a.66.66 0 0 0 .93 0l2.9-2.9a.66.66 0 0 0 0-.93l-.03-.03a.66.66 0 0 0-.46-.2Zm-8.45 0a.66.66 0 0 0-.46.2l-.03.03a.66.66 0 0 0 0 .93l2.9 2.9a.66.66 0 0 0 .93 0l.03-.03a.66.66 0 0 0 0-.93l-2.9-2.9a.66.66 0 0 0-.47-.2Zm-.5 5.56h-1.6v-1.6a.66.66 0 0 0-.67-.67H4.56a.66.66 0 0 0-.67.67v10.62c0 .37.3.67.67.67h1.6a.66.66 0 0 0 .67-.67V10.7a.66.66 0 0 0-.67-.65Zm11.23 0h-1.6a.66.66 0 0 0-.67.67v1.6h-2.13v-1.6a.66.66 0 0 0-.67-.67h-1.6a.66.66 0 0 0-.67.67v4.82a.66.66 0 0 0 .67.67h4.8a.66.66 0 0 0 .67-.67V10.7a.66.66 0 0 0-.67-.65Zm0 10.62h1.6a.66.66 0 0 0 .67-.67V10.7a.66.66 0 0 0-.67-.67h-1.6a.66.66 0 0 0-.67.67v1.6h2.13v1.6h-2.13v1.6h2.13v1.6h-2.13v2.85a.66.66 0 0 0 .67.67Zm-5.61-4.95h-1.6a.66.66 0 0 0-.67.67v1.6a.66.66 0 0 0 .67.67h4.8a.66.66 0 0 0 .67-.67v-1.6a.66.66 0 0 0-.67-.67h-3.2Z"/>
  </svg>
);

const JavaIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
    <path d="M18.5 7h-13A.5.5 0 0 0 5 7.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5m-13 7V8h13v6zM20 7.5a1.5 1.5 0 0 1-1.5 1.5h-.5v-2h.5A1.5 1.5 0 0 1 20 8.5zM4 11h-.5a1.5 1.5 0 1 1 0-3h.5z"/>
  </svg>
);

const CppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 fill-current">
    <path d="M12.42 11.26a3.8 3.8 0 0 0-3.32-1.92H7.28v9.32h2.24c2.08 0 3.36-1.3 3.36-3.32c0-1.42-.76-2.46-2-3.08Zm-2.2 5.06H8.7V8.8h1.22c1.2 0 1.94.86 1.94 2.22c0 1.52-.86 2.3-2.14 2.3Zm7.94-7.52h-1.4v-1.4h-1.6v1.4h-1.4v1.6h1.4v1.4h1.6v-1.4h1.4Zm3.6 0h-1.4v-1.4h-1.6v1.4h-1.4v1.6h1.4v1.4h1.6v-1.4h1.4Z"/>
  </svg>
);


const skillIcons: { [key: string]: React.ReactNode } = {
  JavaScript: <JsIcon />,
  TypeScript: <TsIcon />,
  Python: <PythonIcon />,
  Java: <JavaIcon />,
  'C++': <CppIcon />,
  React: <Atom className="h-8 w-8" />,
  'Next.js': <Triangle className="h-8 w-8" />,
  'Node.js': <Hexagon className="h-8 w-8" />,
  Express: <Server className="h-8 w-8" />,
  'Tailwind CSS': <Wind className="h-8 w-8" />,
  MongoDB: <Database className="h-8 w-8" />,
  PostgreSQL: <Database className="h-8 w-8" />,
  MySQL: <Database className="h-8 w-8" />,
  Firebase: <Database className="h-8 w-8" />,
  Git: <GitMerge className="h-8 w-8" />,
  GitHub: <Github className="h-8 w-8" />,
  Docker: <Container className="h-8 w-8" />,
  Vercel: <Triangle className="h-8 w-8" />,
  Genkit: <BrainCircuit className="h-8 w-8" />,
};

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-transparent py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm font-headline text-primary-foreground">
            My Skills
          </div>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
            The Tools I Work With
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I have experience with a variety of technologies and I'm always eager
            to learn more.
          </p>
        </div>
        <TooltipProvider>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {skillsData.map((category) => (
              <Card
                key={category.category}
                className="bg-card/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {category.icon}
                  <CardTitle className="font-headline text-2xl">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-4 p-6">
                  {category.skills.map((skill) => (
                    <Tooltip key={skill}>
                      <TooltipTrigger asChild>
                        <div className="relative group flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-card/60 p-4 transition-all duration-300 hover:bg-card/90">
                          {skillIcons[skill]}
                          <span className="absolute top-0 left-[-100%] block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 group-hover:left-[150%]"></span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{skill}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
