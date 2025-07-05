import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black/30 backdrop-blur-sm">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Portfolio</h3>
            <p className="text-foreground/80">A portfolio for creative developers.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-headline mb-4">Contact Me</h4>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:hello@yourdomain.com" className="hover:underline text-foreground/80">
                hello@yourdomain.com
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold font-headline mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-foreground transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-foreground/10 pt-6 text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
