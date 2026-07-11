import { useState, useEffect, useRef } from 'react';

// Categorical tiers instead of arbitrary percentages (audit 4.4) — "82%" is unverifiable,
// a tier communicates real proficiency without inviting "why not 85%?" scrutiny.
// `barWidth` still drives the visual bar length so the existing bar-chart look is preserved.
type Tier = 'Daily driver' | 'Comfortable' | 'Familiar';

const tierWidth: Record<Tier, number> = {
  'Daily driver': 92,
  'Comfortable': 75,
  'Familiar': 55,
};

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', tier: 'Daily driver' as Tier, color: '#61DAFB' },
      { name: 'Next.js', tier: 'Daily driver' as Tier, color: '#ffffff' },
      { name: 'JavaScript', tier: 'Daily driver' as Tier, color: '#F7DF1E' },
      { name: 'HTML5 & CSS3', tier: 'Daily driver' as Tier, color: '#E34F26' },
      { name: 'Astro', tier: 'Daily driver' as Tier, color: '#7865F6' },
      { name: 'TypeScript', tier: 'Comfortable' as Tier, color: '#3178C6' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', tier: 'Comfortable' as Tier, color: '#68A063' },
      { name: 'Express.js', tier: 'Comfortable' as Tier, color: '#aaaaaa' },
      { name: 'REST APIs', tier: 'Daily driver' as Tier, color: '#FF6B6B' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', tier: 'Comfortable' as Tier, color: '#13AA52' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', tier: 'Comfortable' as Tier, color: '#F05032' },
      { name: 'Postman', tier: 'Comfortable' as Tier, color: '#FF6C37' },
      { name: 'Jest', tier: 'Familiar' as Tier, color: '#C21325' },
    ],
  },
];

function SkillBar({ name, tier, color, delay = 0 }: { name: string; tier: Tier; color: string; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);
  const [width, setWidth] = useState(0);
  const level = tierWidth[tier];

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setWidth(level);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: color }} />
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono text-gray-500">{tier}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const activeCat = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Technical Skills</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            A craftsman's{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>toolkit</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Carefully honed over <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.08em', color: '#93c5fd' }}>1.5+ years</em> of building production-grade applications.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap reveal">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2 text-sm font-medium rounded-xl border transition-all duration-200 ${
                activeTab === cat.id
                  ? 'tab-active'
                  : 'border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10 bg-white/2'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="max-w-2xl mx-auto reveal space-y-5">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Proficiency</h3>
          {activeCat.skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 80} />
          ))}
        </div>

        {/* All skills grid */}
        <div className="mt-20 reveal">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">All Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skillCategories.flatMap((c) => c.skills).map((skill) => (
              <div
                key={skill.name}
                className="glass glass-hover rounded-xl px-4 py-2 flex items-center gap-2 text-sm text-gray-300 hover:text-white cursor-hover"
                style={{ borderColor: `${skill.color}20` }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: skill.color }} />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
