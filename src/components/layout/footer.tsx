import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Reactfolio</h3>
            <p className="text-primary-foreground/80">A portfolio built with Next.js, Tailwind CSS, and GenAI.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-headline mb-4">Contact Me</h4>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@reactfolio.com" className="hover:underline text-primary-foreground/80">
                hello@reactfolio.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-headline mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Reactfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
