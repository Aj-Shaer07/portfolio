import {
  Atom,
  BrainCircuit,
  Code,
  Container,
  Database,
  FileCode2,
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

const skillIcons: { [key: string]: React.ReactNode } = {
  JavaScript: <FileCode2 className="h-10 w-10" />,
  TypeScript: <FileCode2 className="h-10 w-10" />,
  Python: <FileCode2 className="h-10 w-10" />,
  Java: <FileCode2 className="h-10 w-10" />,
  'C++': <FileCode2 className="h-10 w-10" />,
  React: <Atom className="h-10 w-10" />,
  'Next.js': <Triangle className="h-10 w-10" />,
  'Node.js': <Hexagon className="h-10 w-10" />,
  Express: <Server className="h-10 w-10" />,
  'Tailwind CSS': <Wind className="h-10 w-10" />,
  MongoDB: <Database className="h-10 w-10" />,
  PostgreSQL: <Database className="h-10 w-10" />,
  MySQL: <Database className="h-10 w-10" />,
  Firebase: <Database className="h-10 w-10" />,
  Git: <GitMerge className="h-10 w-10" />,
  GitHub: <Github className="h-10 w-10" />,
  Docker: <Container className="h-10 w-10" />,
  Vercel: <Triangle className="h-10 w-10" />,
  Genkit: <BrainCircuit className="h-10 w-10" />,
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
                <CardContent className="flex flex-wrap justify-start gap-4">
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
