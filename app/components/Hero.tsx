'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight } from 'lucide-react';
import { useMouseParallax } from '../hooks';

const resumeUrl = '/resume.pdf';

const codeSnippets = [
  { lines: ['const App = () => {', '  return <Hero />', '}'], color: 'blue' },
  { lines: ['await fetch("/api/products")', '.then(r => r.json())'], color: 'purple' },
  { lines: ['db.collection("orders")', '.find({ status: "active" })'], color: 'cyan' },
];

const techLogos = [
  { name: 'React', symbol: '⚛', color: '#61DAFB', orbit: 1 },
  { name: 'Next.js', symbol: 'N', color: '#ffffff', orbit: 1 },
  { name: 'Node.js', symbol: '⬡', color: '#68A063', orbit: 2 },
  { name: 'MongoDB', symbol: '🍃', color: '#13AA52', orbit: 2 },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ['rgba(59,130,246,', 'rgba(139,92,246,', 'rgba(6,182,212,'];

    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity})`;
        ctx.fill();
      });

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function WorkspaceOrb() {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let frame: number;
    let last = 0;
    const animate = (now: number) => {
      if (now - last > 16) {
        setAngle((a) => a + 0.4);
        last = now;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const orbit1R = 110;
  const orbit2R = 155;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Center orb */}
      <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 35% 35%, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(5,5,8,0.9))',
          boxShadow: '0 0 60px rgba(59,130,246,0.3), 0 0 120px rgba(139,92,246,0.15), inset 0 0 40px rgba(59,130,246,0.1)',
          border: '1px solid rgba(59,130,246,0.3)',
        }}>
        <span className="font-mono font-bold text-2xl text-gradient-blue" style={{ fontFamily: "'Fira Code', monospace" }}>SS</span>
      </div>

      {/* Orbit rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute rounded-full border border-blue-500/10" style={{ width: orbit1R * 2, height: orbit1R * 2 }} />
        <div className="absolute rounded-full border border-purple-500/10" style={{ width: orbit2R * 2, height: orbit2R * 2 }} />
      </div>

      {/* Orbiting tech icons */}
      {techLogos.map((tech, i) => {
        const r = tech.orbit === 1 ? orbit1R : orbit2R;
        const offset = tech.orbit === 1 ? i * 180 : (i - 2) * 180 + 90;
        const a = ((angle + offset) * Math.PI) / 180;
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        return (
          <div
            key={tech.name}
            className="absolute flex items-center justify-center w-10 h-10 rounded-xl glass"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              border: `1px solid ${tech.color}30`,
              boxShadow: `0 0 15px ${tech.color}20`,
            }}
          >
            <span style={{ color: tech.color, fontSize: 18 }}>{tech.symbol}</span>
          </div>
        );
      })}

      {/* Floating code snippets */}
      {codeSnippets.map((snippet, i) => {
        const positions = [
          { top: '8%', right: '5%' },
          { bottom: '18%', right: '2%' },
          { bottom: '10%', left: '0%' },
        ];
        const colorMap: Record<string, string> = {
          blue: 'rgba(59,130,246,0.7)',
          purple: 'rgba(139,92,246,0.7)',
          cyan: 'rgba(6,182,212,0.7)',
        };
        return (
          <div
            key={i}
            className="absolute glass rounded-xl p-3 code-block text-gray-400 max-w-[180px] animate-float"
            style={{
              ...positions[i],
              animationDelay: `${i * 0.8}s`,
              borderColor: `${colorMap[snippet.color]}30`,
              fontSize: '0.65rem',
            }}
          >
            {snippet.lines.map((line, j) => (
              <div key={j} style={{ color: j === 0 ? colorMap[snippet.color] : '#888' }}>{line}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const parallaxRef = useMouseParallax();
  const [typed, setTyped] = useState('');
  const roles = [
    'Full Stack Developer (MERN)',
    'React.js Developer',
    'Enterprise E-commerce Platform Enginner',
    'Frontend Systems & Component Architecture Engineer',
    'JAMstack / Static Site Engineer',
    'Web Performance & Accessibility Engineer',
    'Software Engineer'
  ];

  useEffect(() => {
    let currentRoleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeText = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      setTyped(currentRole.slice(0, charIndex));

      // Finished typing a role
      if (!isDeleting && charIndex === currentRole.length) {
        // Pause before deleting
        setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 2000);
        return;
      }

      // Finished deleting
      if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      }

      const speed = isDeleting ? 50 : 80;
      setTimeout(typeText, speed);
    };

    typeText();
  }, []);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" aria-label="Introduction" className="relative min-h-screen flex items-center overflow-hidden hero-grid">
      {/* Background effects */}
      <div className="absolute inset-0">
        <ParticleCanvas />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6), transparent)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-10 animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6), transparent)', animationDelay: '1.5s' }} />
      </div>

      <div ref={parallaxRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full min-w-0 pt-4 sm:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-8 items-center min-h-[80vh] min-w-0">

          {/* Left content */}
          <div className="flex flex-col gap-4 sm:gap-6 min-w-0 w-full">
            {/* Badge */}
            <div data-depth="0.3" className="inline-flex items-center gap-2 self-start max-w-full">
              <div className="flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full glass border border-green-500/20 text-green-400 text-xs font-medium max-w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="max-[469px]:break-words">Available for opportunities</span>
              </div>
            </div>

            {/* Role badge */}
            <div data-depth="0.2" className="min-w-0 max-w-full">
              <div className="section-label mb-1 flex flex-wrap items-center gap-1 min-w-0 max-w-full normal-case !tracking-normal max-[469px]:break-words">
                <span className="text-xs md:text-sm lg:text-sm  max-[469px]:break-words">{typed}</span>
                <span className="w-0.5 h-4 bg-blue-400 animate-pulse inline-block self-center shrink-0" />
              </div>
            </div>

            {/* Headline — 3 lines above 469px, 2 lines at/below */}
            <div data-depth="0.15" className="min-w-0 max-w-full">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight max-[469px]:break-words" style={{ fontFamily: "'Syne', sans-serif" }}>
                <span className="text-gradient-hero">Building </span>
                <span className="italic-hero text-gradient-blue max-[469px]:break-words" style={{ fontSize: '1.05em' }}>High</span>
                {/* <br className="hidden min-[470px]:block" /> */}
                <span className="italic-hero text-gradient-blue max-[469px]:break-words" style={{ fontSize: '1.05em' }}>-Performance</span>
                <br />
                <span className="text-gradient-hero">Digital </span>
                <span className="relative inline-block max-w-full max-[469px]:break-words">
                  <span className="text-gradient-blue">Experiences</span>
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-blue-500 to-purple-500 opacity-50" />
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p data-depth="0.1" className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg min-w-0 max-[469px]:break-words" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Full Stack Developer specializing in{' '}
              <em className="italic-accent text-gray-300 not-italic" style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1em' }}>scalable e-commerce platforms</em>, modern web applications, and{' '}
              <em style={{ fontStyle: 'italic', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1em' }} className="text-gray-300">pixel-perfect user experiences</em> with{' '}
              <span className="text-blue-400 font-semibold">React.js</span> &amp; <span className="text-purple-400 font-semibold">Next.js</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" data-depth="0.05">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={resumeUrl}
                download="Sai_Sujan_S_Resume.pdf"
                className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 hover:border-white/20 text-gray-200 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={15} />
                Resume
              </a>
              <a
                href="mailto:saisujans.dev@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 glass border border-white/10 hover:border-white/20 text-gray-200 text-sm font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={15} />
                Contact
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 min-w-0 max-w-full" data-depth="0.05">
              <a
                href="https://github.com/sujan2332"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-200 text-sm transition-colors min-w-0 max-[469px]:break-words"
              >
                <Github size={16} className="shrink-0" />
                <span className="max-[469px]:break-all">github.com/sujan2332</span>
              </a>
              <span className="hidden min-[469px]:block w-px h-4 bg-white/10 shrink-0" />
              <a
                href="https://www.linkedin.com/in/sai-sujan-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-gray-200 text-sm transition-colors min-w-0 max-[469px]:break-words"
              >
                <Linkedin size={16} className="shrink-0" />
                <span className="max-[469px]:break-all">linkedin.com/in/sai-sujan-s/</span>
              </a>
            </div>
          </div>

          {/* Right — workspace */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            <WorkspaceOrb />
          </div>
          {/* Scroll indicator — wrapper keeps centering separate from float transform */}
          <div className="absolute bottom-2 md:bottom-12 left-1/2 -translate-x-1/2">
            <button
              onClick={scrollDown}
              className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors animate-float"
              aria-label="Scroll down"
            >
              <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
              <ArrowDown size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}