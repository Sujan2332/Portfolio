'use client';

import { Github, Mail, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button onClick={scrollTop} className="font-mono text-xl font-bold text-gradient-blue cursor-hover" style={{ fontFamily: "'Syne', sans-serif", letterSpacing: '-0.01em' }}>
              Sai Sujan S
            </button>
            <p className="text-xs text-gray-600 text-center md:text-left">
              Full Stack Developer · React.js · Next.js · Node.js
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + scroll top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sujan2332"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Sai Sujan's GitHub profile"
              title="Visit GitHub"
              className="w-9 h-9 rounded-xl glass border border-white/5 hover:border-white/15 flex items-center justify-center text-gray-500 hover:text-gray-200 transition-all cursor-hover"
            >
              <Github size={15} />
            </a>
            <a
              href="mailto:saisujans.dev@gmail.com"
              aria-label="Send an email to Sai Sujan"
              title="Email Sai Sujan"
              className="w-9 h-9 rounded-xl glass border border-white/5 hover:border-white/15 flex items-center justify-center text-gray-500 hover:text-gray-200 transition-all cursor-hover"
            >
              <Mail size={15} />
            </a>
            <button
              onClick={scrollTop}
              className="w-9 h-9 rounded-xl glass border border-white/5 hover:border-blue-500/30 flex items-center justify-center text-gray-500 hover:text-blue-400 transition-all cursor-hover"
              aria-label="Scroll to top"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Sai Sujan S. Built with React.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}