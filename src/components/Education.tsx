import { GraduationCap, BookOpen, School, Calendar, Award, MapPin, Sparkles } from 'lucide-react';

type EducationEntry = {
  id: string;
  degree: string;
  institution: string;
  university?: string;
  graduation: string;
  scoreLabel: string;
  scoreValue: string;
  coursework?: string;
  stream?: string;
  icon: typeof GraduationCap;
  primary: boolean;
  accent: string;
  glow: string;
};

const education: EducationEntry[] = [
  {
    id: 'be',
    degree: 'Bachelor of Engineering (B.E.) in Computer Science & Engineering',
    institution: 'Jyothy Institute of Technology (JIT)',
    university: 'Visvesvaraya Technological University (VTU)',
    graduation: 'June 2024',
    scoreLabel: 'GPA',
    scoreValue: '7.5 / 10',
    coursework: 'Computer Science & Engineering',
    icon: GraduationCap,
    primary: true,
    accent: 'blue',
    glow: 'rgba(59,130,246,0.25)',
  },
  {
    id: 'puc',
    degree: 'Pre-University (PUC)',
    institution: 'St. Francis PU College',
    graduation: 'June 2020',
    scoreLabel: 'Percentage',
    scoreValue: '70%',
    stream: 'PCMC (Physics, Chemistry, Mathematics, Computer Science)',
    icon: BookOpen,
    primary: false,
    accent: 'purple',
    glow: 'rgba(139,92,246,0.22)',
  },
  {
    id: 'sslc',
    degree: 'S.S.L.C. (State Board)',
    institution: 'Indira Convent High School',
    graduation: 'June 2018',
    scoreLabel: 'Percentage',
    scoreValue: '84%',
    icon: School,
    primary: false,
    accent: 'cyan',
    glow: 'rgba(6,182,212,0.22)',
  },
];

const accentMap: Record<string, { text: string; bg: string; border: string; dot: string; ring: string }> = {
  blue: {
    text: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    dot: 'bg-blue-500',
    ring: 'border-blue-500',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    dot: 'bg-purple-500',
    ring: 'border-purple-500',
  },
  cyan: {
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    dot: 'bg-cyan-500',
    ring: 'border-cyan-500',
  },
};

export default function Education() {
  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-4">Education</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Academic{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>journey</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            The foundations that shaped my{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.08em', color: '#93c5fd' }}>
              engineering
            </em>{' '}
            path.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="pl-16 md:pl-24 space-y-8">
            {education.map((entry, i) => {
              const Icon = entry.icon;
              const a = accentMap[entry.accent];
              return (
                <div
                  key={entry.id}
                  className="reveal"
                  data-delay={i * 120}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute w-5 h-5 rounded-full border-2 ${a.ring} bg-[#050508] flex items-center justify-center`}
                    style={{ left: '1.375rem', top: '1.5rem' }}
                  >
                    <div className={`w-2 h-2 rounded-full ${a.dot}`} />
                  </div>

                  {/* Card */}
                  <div
                    className={`glass spotlight-card card-3d rounded-2xl p-6 md:p-8 border border-white/5 hover:${a.border} transition-all duration-300 ${
                      entry.primary ? 'gradient-border' : ''
                    }`}
                    style={entry.primary ? { boxShadow: `0 0 40px ${entry.glow}` } : undefined}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${a.bg} border ${a.border}`}
                        >
                          <Icon size={18} className={a.text} />
                        </div>
                        <div>
                          <h3 className="text-base md:text-lg font-bold text-white leading-snug">
                            {entry.degree}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5">
                            <span className={`font-medium text-sm ${a.text}`}>{entry.institution}</span>
                          </div>
                          {entry.university && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <MapPin size={11} className="text-gray-600" />
                              <span className="text-xs text-gray-500">{entry.university}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {entry.primary && (
                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                            <Sparkles size={11} />
                            Primary
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 font-mono text-xs text-gray-500">
                          <Calendar size={11} />
                          {entry.graduation}
                        </div>
                      </div>
                    </div>

                    {/* Score + details */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${a.bg} border ${a.border}`}>
                        <Award size={13} className={a.text} />
                        <span className="text-xs text-gray-400">{entry.scoreLabel}</span>
                        <span className={`text-sm font-bold font-mono ${a.text}`}>{entry.scoreValue}</span>
                      </div>
                    </div>

                    {entry.coursework && (
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <BookOpen size={14} className="shrink-0 mt-0.5 text-gray-600" />
                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Coursework</span>
                          <p className="text-sm text-gray-300 mt-0.5">{entry.coursework}</p>
                        </div>
                      </div>
                    )}

                    {entry.stream && (
                      <div className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <BookOpen size={14} className="shrink-0 mt-0.5 text-gray-600" />
                        <div>
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stream</span>
                          <p className="text-sm text-gray-300 mt-0.5">{entry.stream}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
