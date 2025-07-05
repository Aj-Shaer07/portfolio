import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-transparent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground font-headline">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              A Glimpse Into My Journey
            </h2>
            <div className="space-y-4 text-muted-foreground md:text-lg/relaxed">
              <p>
                I am Ajay Sharma, undergrad student of the 2028-NITK batch
              </p>
              <p>
                I am currently pursuing my B.Tech in Artificial Intelligence and i am passionate about technology and innovation involving other branches of Engineering. I love to explore new ideas and work on projects that challenge my skills.
              </p>
              <p>
                I love questionning things and exploring activities I never did, trying to perfect them and learn from them. My goal is to learn as much as I can and provide my maximum to make this world better, be it through my work, my ideas, just by being a good person or as an Engineer.
              </p>
              <p>
                I am always open to new opportunities and collaborations, so feel free to reach out if you share similar interests or have any exciting projects in mind.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/500x500.png"
              alt="A picture of Ajay Sharma"
              width={500}
              height={500}
              className="rounded-full object-cover aspect-square shadow-2xl"
              data-ai-hint="portrait man"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
