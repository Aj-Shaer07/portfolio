"use client";

import { useState } from 'react';
import { handleRewriteBio } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast"
import { Wand2, Loader2 } from 'lucide-react';
import Image from 'next/image';

const writingStyles = ["Professional", "Casual", "Humorous", "Concise", "Enthusiastic"];
const initialBio = `I am Ajay Sharma, undergrad student of the 2028-NITK batch

I am currently pursuing my B.Tech in Artificial Intelligence and i am passionate about technology and innovation involving other branches of Engineering. I love to explore new ideas and work on projects that challenge my skills.

I love questionning things and exploring activities I never did, trying to perfect them and learn from them. My goal is to learn as much as I can and provide my maximum to make this world better, be it through my work, my ideas, just by being a good person or as an Engineer.

I am always open to new opportunities and collaborations, so feel free to reach out if you share similar interests or have any exciting projects in mind.`;

export default function About() {
  const [bioDraft, setBioDraft] = useState(initialBio);
  const [writingStyle, setWritingStyle] = useState(writingStyles[0]);
  const [rewrittenBio, setRewrittenBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onRewrite = async () => {
    setIsLoading(true);
    setRewrittenBio('');
    const result = await handleRewriteBio({ bioDraft, writingStyle });
    setIsLoading(false);

    if (result.success && result.data?.rewrittenBio) {
      setRewrittenBio(result.data.rewrittenBio);
    } else {
      toast({
        title: "Error",
        description: result.error || "Failed to rewrite bio. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="about" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">AI-Powered Bio Generator</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Craft the perfect professional bio. Write a draft, choose a style, and let AI polish it for you.
            </p>
            <div className="relative">
              <Image 
                src="https://placehold.co/600x400.png"
                alt="AI illustration"
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint="AI illustration"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="font-headline">Rewrite Your Bio</CardTitle>
                <CardDescription>Enter your bio and select a writing style.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="bio-draft">Your Bio Draft</Label>
                    <Textarea
                      id="bio-draft"
                      value={bioDraft}
                      onChange={(e) => setBioDraft(e.target.value)}
                      placeholder="Enter your current bio..."
                      rows={10}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="writing-style">Writing Style</Label>
                    <Select value={writingStyle} onValueChange={setWritingStyle}>
                      <SelectTrigger id="writing-style">
                        <SelectValue placeholder="Select a style" />
                      </SelectTrigger>
                      <SelectContent>
                        {writingStyles.map(style => (
                          <SelectItem key={style} value={style}>{style}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={onRewrite} disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Rewrite with AI
                  </Button>
                  {(isLoading || rewrittenBio) && (
                    <div className="grid gap-2 rounded-lg border bg-background p-4">
                      <Label>AI-Generated Bio</Label>
                      {isLoading ? (
                        <div className="space-y-2">
                            <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
                            <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
                            <div className="h-4 w-3/4 animate-pulse rounded-md bg-muted" />
                        </div>
                      ) : (
                        <p className="text-sm text-foreground">{rewrittenBio}</p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
