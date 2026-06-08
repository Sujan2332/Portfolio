import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, ExternalLink, CheckCircle2 } from 'lucide-react';

const achievements = [
  { text: 'Ranked among top UI developers in the team for pixel-perfect implementation', highlight: true },
  { text: 'Selected for major module ownership due to speed and code quality', highlight: true },
  { text: 'Built complete E-Commerce systems: PLP, PDP, Checkout, Auth, Orders', highlight: false },
  { text: 'Developed RESTful APIs with Node.js and Express.js for product data', highlight: false },
  { text: 'Created fully responsive, production-grade interfaces from design mocks', highlight: false },
  { text: 'Implemented Jest unit & integration testing for critical user flows', highlight: false },
  { text: 'Built advanced PDP features: image zoom, variant selection, reviews', highlight: false },
  { text: 'Optimized product tiles, cart interactions, and listing page performance', highlight: false },
  { text: 'Improved Hero Banner performance — reduced LCP by significant margin', highlight: true },
  { text: 'Developed Authentication flows with JWT and session management', highlight: false },
  { text: 'Built Account Module: profile, addresses, orders history, returns', highlight: false },
  { text: 'Developed Dynamic Checkout with multi-step form and payment integration', highlight: false },
  { text: 'Implemented cross-browser support (Chrome, Firefox, Safari, Edge)', highlight: false },
  { text: 'Ensured full ADA / WCAG 2.1 accessibility compliance across all modules', highlight: true },
];

const techStack = ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 'REST APIs', 'TypeScript'];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? achievements : achievements.slice(0, 6);

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <div className="section-label mb-4">Experience</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Where I've{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>worked</em>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="pl-16 md:pl-24">
            {/* Company card */}
            <div className="reveal">
              {/* Timeline dot */}
              <div className="absolute left-3.5 md:left-5.5 w-5 h-5 rounded-full border-2 border-blue-500 bg-[#050508] flex items-center justify-center"
                style={{ left: '1.375rem', top: '1rem' }}>
                <div className="w-2 h-2 rounded-full bg-blue-500" />
              </div>

              <div className="glass spotlight-card card-3d rounded-2xl p-6 md:p-8 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Briefcase size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Frontend Software Engineer</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-blue-400 font-medium text-sm">AIEnterprise Inc.</span>
                          <ExternalLink size={12} className="text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      Current
                    </div>
                    <span className="font-mono text-xs text-gray-500">Feb 2025 — Present</span>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/15 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {visible.map((ach, i) => (
                    <div
                      key={i}
                      className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${
                        ach.highlight ? 'bg-blue-500/5 border border-blue-500/10' : 'hover:bg-white/2'
                      }`}
                    >
                      <CheckCircle2
                        size={15}
                        className={`shrink-0 mt-0.5 ${ach.highlight ? 'text-blue-400' : 'text-gray-600'}`}
                      />
                      <span className={`text-sm leading-relaxed ${ach.highlight ? 'text-gray-200' : 'text-gray-400'}`}>
                        {ach.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Expand toggle */}
                {achievements.length > 6 && (
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {expanded ? (
                      <>Show less <ChevronUp size={14} /></>
                    ) : (
                      <>Show {achievements.length - 6} more achievements <ChevronDown size={14} /></>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Future / placeholder */}
            <div className="mt-8 reveal">
              <div
                className="rounded-2xl p-6 border border-dashed border-white/5 text-center"
                style={{ background: 'rgba(255,255,255,0.01)' }}
              >
                <div className="text-xs text-gray-600 font-mono tracking-widest uppercase">Next chapter loading...</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
