import Image from 'next/image';
import img from "@/components/IMG_3515.jpeg"

export default function About() {
  return (
    <section id="about" className="w-full section-padding bg-card/50">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-headline text-secondary-foreground">
              About Me
            </div>
            <h2 className="section-heading">
              A Glimpse Into My Journey
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I am currently pursuing my B.Tech in Artificial Intelligence and i am passionate about technology and innovation involving other branches of Engineering. I love to explore new ideas and work on projects that challenge my skills.
              </p>
              <p>
                My goal is to learn as much as I can and provide my maximum to make this world better, be it through my work, my ideas, just by being a good person or as an Engineer.
              </p>
              <p>
                I am always open to new opportunities and collaborations.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src={img}
              alt="A picture of Ajay Sharma"
              width={380}
              height={380}
              className="rounded-full object-cover aspect-square shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
