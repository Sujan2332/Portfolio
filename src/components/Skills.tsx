import { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', level: 90, color: '#61DAFB' },
      { name: 'Next.js', level: 85, color: '#ffffff' },
      { name: 'JavaScript', level: 88, color: '#F7DF1E' },
      { name: 'HTML5 & CSS3', level: 92, color: '#E34F26' },
      { name: 'TypeScript', level: 75, color: '#3178C6' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Node.js', level: 80, color: '#68A063' },
      { name: 'Express.js', level: 82, color: '#aaaaaa' },
      { name: 'REST APIs', level: 85, color: '#FF6B6B' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    skills: [
      { name: 'MongoDB', level: 80, color: '#13AA52' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'Git', level: 85, color: '#F05032' },
      { name: 'Postman', level: 80, color: '#FF6C37' },
      { name: 'Jest', level: 70, color: '#C21325' },
    ],
  },
];

function SkillBar({ name, level, color, delay = 0 }: { name: string; level: number; color: string; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
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
        <span className="text-xs font-mono text-gray-500">{level}%</span>
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

function RingSkill({ name, level, color }: { name: string; level: number; color: string }) {
  const ringRef = useRef<SVGCircleElement>(null);
  const triggered = useRef(false);
  const r = 38;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (level / 100) * circumference;

  useEffect(() => {
    const el = ringRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          setTimeout(() => {
            el.style.strokeDashoffset = String(offset);
          }, 200);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offset]);

  return (
    <div className="flex flex-col items-center gap-2 group cursor-hover">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
          <circle
            ref={ringRef}
            cx="50" cy="50" r={r}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
              transition: 'stroke-dashoffset 1.4s cubic-bezier(0.4,0,0.2,1)',
              filter: `drop-shadow(0 0 6px ${color}80)`,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold font-mono" style={{ color }}>{level}%</span>
        </div>
      </div>
      <span className="text-xs text-gray-400 group-hover:text-white transition-colors text-center">{name}</span>
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skill bars */}
          <div className="reveal-left space-y-5">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Proficiency Levels</h3>
            {activeCat.skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={i * 80} />
            ))}
          </div>

          {/* Rings */}
          <div className="reveal-right">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Visual Overview</h3>
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
              {activeCat.skills.map((skill) => (
                <RingSkill key={skill.name} {...skill} />
              ))}
            </div>
          </div>
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
