import { useEffect, useRef } from 'react';
import { Code2, ShoppingCart, Cpu, Users, Building } from 'lucide-react';

const stats = [
  { value: 1000, suffix: '+', label: 'User Stories Delivered', icon: Users },
  { value: 300, suffix: '+', label: 'Production Bugs Resolved', icon: Code2 },
  { value: 12, suffix: '+', label: 'Pages Built in 11 Days', icon: Cpu },
  { value: 1.5, suffix: '+ Yrs', label: 'Industry Experience', icon: ShoppingCart },
  { value: 4, suffix: '', label: 'Enterprise Projects', icon: Building },
];

const highlights = [
  {
    title: 'Frontend-Focused',
    desc: 'Crafting pixel-perfect interfaces with React.js and Next.js that delight users and drive engagement.',
    color: 'blue',
  },
  {
    title: 'Full Stack Capable',
    desc: 'End-to-end development from REST APIs with Node.js and Express.js to MongoDB data modeling.',
    color: 'purple',
  },
  {
    title: 'E-Commerce Expert',
    desc: 'Architected complete e-commerce ecosystems — PLP, PDP, Checkout, Auth, Orders, Wishlist, Returns.',
    color: 'cyan',
  },
  {
    title: 'Performance Driven',
    desc: 'Obsessed with Core Web Vitals, accessibility (ADA compliance), and cross-browser compatibility.',
    color: 'green',
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  blue:   { bg: 'rgba(59,130,246,0.06)',   border: 'rgba(59,130,246,0.2)',   text: '#60a5fa', dot: '#3b82f6' },
  purple: { bg: 'rgba(139,92,246,0.06)',   border: 'rgba(139,92,246,0.2)',   text: '#a78bfa', dot: '#8b5cf6' },
  cyan:   { bg: 'rgba(6,182,212,0.06)',    border: 'rgba(6,182,212,0.2)',    text: '#22d3ee', dot: '#06b6d4' },
  green:  { bg: 'rgba(16,185,129,0.06)',   border: 'rgba(16,185,129,0.2)',   text: '#34d399', dot: '#10b981' },
};

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const elRef = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const isFloat = value % 1 !== 0;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;
            el.textContent = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
            if (progress < 1) requestAnimationFrame(animate);
            else el.textContent = isFloat ? value.toFixed(1) : value.toLocaleString();
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span>
      <span ref={elRef}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function About() {
  return (
    <section id="about" aria-label="About" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-4">About Me</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
            Crafting the future, one<br />
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>component</em> at a time
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            I'm <span className="text-white font-semibold">Sai Sujan S</span> —{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.08em', color: '#c4b5fd' }}>a Frontend-focused Full Stack Developer</em>{' '}
            with <span className="text-blue-400 font-semibold">1.5+ years</span> of experience building enterprise-grade web applications. I specialize in creating
            high-performance, scalable systems with clean, maintainable code.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="reveal reveal-scale glass rounded-2xl p-6 text-center spotlight-card card-3d"
                data-delay={i * 100}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-1 font-mono">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 leading-snug">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {highlights.map((h, i) => {
            const c = colorMap[h.color];
            return (
              <div
                key={h.title}
                className="reveal glass-hover rounded-2xl p-6 border transition-all duration-300 spotlight-card"
                data-delay={i * 80}
                style={{ borderColor: c.border, background: c.bg }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
                  <h3 className="font-semibold" style={{ color: c.text }}>{h.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
