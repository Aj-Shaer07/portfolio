import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold font-headline">Ajay Sharma</h3>
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div className="flex items-center space-x-4">
             <a href="mailto:ajaysharmasam.241ai002@nitk.edu.in" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <Link href="https://github.com/Aj-Shaer07" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/ajayshaersamb070692" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com/ajay._.2907" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
