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
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current">
    <path d="M0 0h24v24H0V0zm22.034 18.277c-.153-1.393-.735-2.583-1.744-3.571-1.01-1.01-2.328-1.515-3.955-1.515-1.122 0-2.116.243-2.984.728-.868.485-1.547 1.14-2.036 1.965s-.735 1.776-.735 2.853c0 1.021.233 1.938.698 2.752.465.814 1.112 1.475 1.943 1.983s1.785.761 2.863.761c1.643 0 3.013-.505 4.108-1.515 1.095-1.01 1.723-2.263 1.866-3.754zm-6.108 4.542c-.618 0-1.166-.192-1.644-.576-.479-.384-.814-.89-.996-1.515-.183-.625-.274-1.306-.274-2.043 0-.698.1-1.33.3-1.896.2-.566.544-1.047 1.033-1.442.49-.395.99-.593 1.505-.593.618 0 1.156.2 1.614.6.458.4.787.915.987 1.547.2.632.3 1.33.3 2.094 0 .787-.112 1.49-.335 2.108-.224.618-.586 1.122-.987 1.515-.401.394-.88.591-1.423.591zm-6.22-11.25h2.133v7.098c0 .485.01.88.03 1.185.02.305.094.562.223.77.129.208.287.312.475.312.233 0 .42-.084.56-.252.14-.168.21-.42.21-.756v-8.355h2.134v8.27c0 .88-.13 1.593-.389 2.14-.26.546-.648.977-1.167 1.294-.518.317-1.122.475-1.812.475-.465 0-.89-.084-1.274-.252-.384-.168-.698-.41-.943-.728-.245-.318-.41-.713-.49-1.185-.08-.472-.119-1.098-.119-1.88v-7.857z"/>
  </svg>
);

const TsIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current">
    <path d="M1.5 0C.675 0 0 .675 0 1.5v21C0 23.325.675 24 1.5 24h21c.825 0 1.5-.675 1.5-1.5v-21C24 .675 23.325 0 22.5 0H1.5zM4.322 17.585h3.511V7.078H4.322v10.507zM13.964 17.585h3.616V7.078h-3.616c-1.33 0-2.396.23-3.196.69-.8.46-1.415 1.13-1.845 2.01-.43.88-.645 1.945-.645 3.195s.215 2.315.645 3.195c.43.88 1.045 1.55 1.845 2.01.8.46 1.865.69 3.196.69zm-.09-2.59c-.495 0-.89-.12-1.185-.36-.295-.24-.52-.565-.675-.975-.155-.41-.232-.89-.232-1.44s.077-.995.232-1.4.38-.73.675-.955c.295-.225.69-.337 1.185-.337v2.58zm5.646-7.645l-3.42 3.42-1.285-1.285 2.135-2.135-2.135-2.135 1.285-1.285 3.42 3.42z"/>
  </svg>
);

const PythonIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current">
    <path d="M12.235 5.088c-.286-1.047-.733-1.488-1.576-1.523-.873-.035-1.53.435-2.02 1.047l-1.31 1.637-.453.565-1.42 1.79c-.588.7-1.01 1.12-1.01 1.928 0 .42.21.734.63 1.013l-2.056 2.055v.07h.034c.455 0 .838-.14 1.155-.42l1.996-1.996c.386.104.7.175 1.048.175.77 0 1.294-.21 1.927-.84l.455-.455.454-.455 1.398-1.4c.42-.42.665-.804.665-1.398 0-.315-.07-.594-.21-.838zm-1.01 1.328l-1.398 1.4c-.42.42-.665.805-.665 1.398 0 .315.07.595.21.84l-.454.453-.455.455c-.525.525-.91.7-1.522.7-.315 0-.595-.035-.84-.105l1.96-1.96 1.435-1.826.454-.564 1.31-1.638c.385-.49.77-.735 1.294-.7.49 0 .805.21 1.014.665.21.455 0 .91-.35 1.295zm-1.22 6.544c.286 1.047.733 1.488 1.576 1.523.873.035 1.53-.435 2.02-1.047l1.31-1.637.453-.565 1.42-1.79c.588-.7 1.01-1.12 1.01-1.928 0-.42-.21-.734-.63-1.013l2.056-2.055v-.07h-.034c-.455 0-.838.14-1.155-.42l-1.996 1.996c-.386-.104-.7-.175-1.048-.175-.77 0-1.294.21-1.927.84l-.455-.455-.454-.455-1.398 1.4c-.42.42-.665-.804-.665 1.398 0 .315.07.594.21.838zm1.01-1.328l1.398-1.4c.42-.42.665-.805.665-1.398 0-.315-.07-.595-.21-.84l.454-.453.455-.455c.525.525.91-.7 1.522-.7.315 0 .595.035.84.105l-1.96 1.96-1.435 1.826-.454.564-1.31 1.638c-.385.49-.77.735-1.294-.7-.49 0-.805-.21-1.014-.665-.21-.455 0-.91.35-1.295zM4.323 10.368c-1.33 0-2.02.49-2.02 1.434 0 .945.7 1.434 2.02 1.434h.735v-2.868h-.735zm15.354 0c-1.33 0-2.02.49-2.02 1.434 0 .945.7 1.434 2.02 1.434h.735v-2.868h-.735z"/>
  </svg>
);

const JavaIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current">
    <path d="M18.109 23.999c-2.895-.286-5.825-1.323-5.32-6.178l1.522-.178c.287 2.18 1.683 3.572 4.144 3.572 2.32 0 3.82-1.25 3.82-2.928 0-1.858-1.612-2.5-4.25-3.5-3.036-1.18-5.32-2.5-5.32-5.5 0-2.535 1.964-4.82 5.036-5.178 2.5-.286 5.108.857 5.108 4.607l-1.523.107c-.215-1.857-1.358-2.928-3.5-2.928-1.82 0-3.107 1.036-3.107 2.428 0 1.608 1.43 2.18 3.536 3.036 3.322 1.393 6.036 2.57 6.036 5.82 0 3.25-2.43 5.43-5.714 5.68zm-12.879 0c-2.895-.286-5.825-1.323-5.32-6.178l1.522-.178c.287 2.18 1.683 3.572 4.144 3.572 2.32 0 3.82-1.25 3.82-2.928 0-1.858-1.612-2.5-4.25-3.5-3.036-1.18-5.32-2.5-5.32-5.5 0-2.535 1.964-4.82 5.036-5.178 2.5-.286 5.108.857 5.108 4.607l-1.523.107c-.215-1.857-1.358-2.928-3.5-2.928-1.82 0-3.107 1.036-3.107 2.428 0 1.608 1.43 2.18 3.536 3.036 3.322 1.393 6.036 2.57 6.036 5.82 0 3.25-2.43 5.43-5.714 5.68z"/>
  </svg>
);

const CppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current">
    <path d="M16.143 0l-5.6 13.44L4.943 0H0l8.071 19.2L4.018 24h4.929l4.053-4.8-4.053 4.8h4.928l8.072-19.2L11.893 0h4.25zM21.053 13.92h-2.1v-2.1h2.1v2.1zm-2.1 2.1v2.1h2.1v-2.1h-2.1zM24 13.92h-2.1v-2.1H24v2.1zM21.053 11.82h-2.1v-2.1h2.1v2.1z"/>
  </svg>
);


const skillIcons: { [key: string]: React.ReactNode } = {
  JavaScript: <JsIcon />,
  TypeScript: <TsIcon />,
  Python: <PythonIcon />,
  Java: <JavaIcon />,
  'C++': <CppIcon />,
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
