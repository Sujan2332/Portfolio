import { Star, Quote } from 'lucide-react';

const placeholders = [
  {
    name: 'Team Lead',
    role: 'Senior Engineer',
    company: 'AIEnterprise Inc.',
    avatar: 'TL',
    color: '#3b82f6',
    quote: 'Outstanding pixel-perfect implementation skills. Consistently delivers ahead of schedule with exceptional attention to detail.',
    stars: 5,
  },
  {
    name: 'Product Manager',
    role: 'Product Lead',
    company: 'AIEnterprise Inc.',
    avatar: 'PM',
    color: '#8b5cf6',
    quote: 'Sai Sujan\'s ability to independently own full modules while maintaining code quality is remarkable for someone with 1.5 years of experience.',
    stars: 5,
  },
  {
    name: 'Tech Architect',
    role: 'Solutions Architect',
    company: 'AIEnterprise Inc.',
    avatar: 'TA',
    color: '#06b6d4',
    quote: 'The e-commerce modules he built are clean, scalable, and well-tested. A developer who thinks beyond just the task at hand.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Testimonials</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            What colleagues{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>say</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Feedback from team members at AIEnterprise Inc.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {placeholders.map((t, i) => (
            <div
              key={t.name}
              className="reveal reveal-scale spotlight-card glass rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-hover flex flex-col"
              data-delay={i * 100}
            >
              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={20} style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} fill={t.color} style={{ color: t.color }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-gray-300 leading-relaxed flex-1 mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.65 }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${t.color}20`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA for future testimonials */}
        <div className="mt-12 text-center reveal">
          <div className="inline-block glass rounded-2xl px-8 py-4 border border-dashed border-white/10 text-sm text-gray-600">
            More testimonials coming soon...
          </div>
        </div>
      </div>
    </section>
  );
}
