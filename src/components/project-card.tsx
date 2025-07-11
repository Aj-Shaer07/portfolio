import Image from 'next/image';
import Link from 'next/link';
import { Card, CardDescription, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link?: string;
};

export default function ProjectCard({ title, description, imageUrl, imageHint, link }: ProjectCardProps) {
  const CardWrapper = link ? Link : 'div';

  return (
    <Card className="group overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card border">
       <CardWrapper href={link || '#'} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={imageHint}
            />
          </div>
          <CardContent className="p-6 flex flex-col flex-grow">
            <CardTitle className="font-headline text-2xl mb-2">{title}</CardTitle>
            <CardDescription className="flex-grow text-muted-foreground">{description}</CardDescription>
            {link && (
                <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                    View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
            )}
          </CardContent>
       </CardWrapper>
    </Card>
  );
}
