'use client';

import { useEffect, useRef } from 'react';
import { TrendingUp, Bug, Zap, Building2 } from 'lucide-react';

const impacts = [
  {
    value: 800,
    suffix: '+',
    label: 'User Stories',
    sub: 'Delivered in production',
    icon: TrendingUp,
    color: '#3b82f6',
    gradient: 'from-blue-600/15 to-transparent',
  },
  {
    value: 300,
    suffix: '+',
    label: 'Production Issues',
    sub: 'Resolved & shipped',
    icon: Bug,
    color: '#8b5cf6',
    gradient: 'from-purple-600/15 to-transparent',
  },
  {
    value: 12,
    suffix: '+',
    label: 'Pages in 11 Days',
    sub: 'Enterprise velocity',
    icon: Zap,
    color: '#06b6d4',
    gradient: 'from-cyan-600/15 to-transparent',
  },
  {
    value: 4,
    suffix: '',
    label: 'Enterprise Project',
    sub: 'Live in production',
    icon: Building2,
    color: '#10b981',
    gradient: 'from-emerald-600/15 to-transparent',
  },
];

function ImpactCard({ value, suffix, label, sub, icon: Icon, color, gradient }: typeof impacts[0]) {
  const numRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 2200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(eased * value);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
            else el.textContent = value.toLocaleString() + suffix;
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <div
      className={`reveal reveal-scale glass spotlight-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 cursor-hover`}
    >
      <div className={`bg-gradient-to-br ${gradient} p-6`}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ background: `${color}20`, border: `1px solid ${color}30` }}
        >
          <Icon size={20} style={{ color }} />
        </div>

        <div
          ref={numRef}
          className="text-4xl md:text-5xl font-black font-mono mb-2"
          style={{ color }}
        >
          0{suffix}
        </div>

        <div className="text-base font-semibold text-white mb-1">{label}</div>
        <div className="text-xs text-gray-500">{sub}</div>
      </div>
    </div>
  );
}

export default function Impact() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Developer Impact</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Numbers that{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>speak</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Measurable contributions delivered in enterprise environments with speed and quality.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {impacts.map((impact, i) => (
            <div key={impact.label} data-delay={i * 100}>
              <ImpactCard {...impact} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}