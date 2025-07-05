import {
  Code,
  Database,
  Rocket,
  Shield,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code className="h-6 w-6 text-accent" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Rocket className="h-6 w-6 text-accent" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: <Database className="h-6 w-6 text-accent" />,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Shield className="h-6 w-6 text-accent" />,
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Genkit'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full section-padding">
      <div className="container">
        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-headline text-secondary-foreground">
            My Skills
          </div>
          <h2 className="section-heading">
            The Tools I Work With
          </h2>
          <p className="section-subheading">
            I have experience with a variety of technologies and I'm always eager
            to learn more.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {skillsData.map((category) => (
            <Card
              key={category.category}
              className="bg-card border transition-all duration-300 hover:border-accent"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-4">
                {category.icon}
                <CardTitle className="font-headline text-xl">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
