import { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp, ExternalLink, CheckCircle2, FolderGit2, Trophy, Star } from 'lucide-react';

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

const techStack = ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Jest', 'REST APIs', 'Javascript', 'Astro', 'HTML', 'CSS', 'BootStrap CSS', 'Tailwind CSS', 'Git'];

type Project = {
  name: string;
  tag?: string;
  description: string;
  achievements: string[];
  tech: string[];
  ongoing?: boolean;
};

const projects: Project[] = [
  {
    name: 'VSO Inc.',
    tag: 'Ongoing — Sole Developer',
    description:
      'Leading a ground-up rebuild of the parent company\'s corporate website on the same Astro/GCP stack, replacing legacy WordPress with a modern, redesigned UI tailored to a compliance-focused enterprise audience, while carrying forward the proven SEO foundation.',
    achievements: [
      'Selected to rebuild a second, independent client property entirely from scratch',
      'Entrusted with both technical execution and design direction, based on FogLifter\'s outcome',
    ],
    tech: ['Astro', 'GCP'],
    ongoing: true,
  },
  {
    name: 'FogLifter®',
    tag: 'Sole Developer',
    description:
      'Independently designed, built, and shipped a 60+ page marketing platform on Astro, owning architecture through deployment — including technical SEO (JSON-LD schema, sitemap.xml, robots.txt, llms.txt, manifest.json, full OG/Twitter metadata), reusable components, an interactive ROI calculator, and Core Web Vitals/SEO audits.',
    achievements: [
      'Received direct client appreciation for the delivered platform',
      'Client trust in the build led to a second engagement on their parent company\'s website',
    ],
    tech: ['Astro', 'GCP', 'HTML', 'CSS', 'WordPress'],
  },
  {
    name: 'BrandsMartUSA®',
    tag: 'Major Modules Ownerships',
    description:
      'Owned the Account module (14 pages) end-to-end and led the Checkout module, engineering a dynamic multi-step checkout (shipping-type dependent) with full back-and-edit navigation, plus order confirmation and cart save-for-later/summary sections. Partnered directly with design, QA, and API teams; improved site accessibility; shipped dynamic support-call UI based on business hours. Contributed to code architecture — API response aggregation, reusable CSS variables, and a custom internal npm library sharing context across Account, Checkout, Browse, and Shop modules. Delivered 800+ stories, resolved ~300 defects, ensured full cross-browser support.',
    achievements: [
      'Awarded Spot Award — ranked #1 among 8+ senior developers',
      'One of 3 developers promoted to a billing role',
      'Assigned 2 additional projects directly by the CFO, based on ownership and delivery track record',
    ],
    tech: ['React.js', 'Next.js'],
  },
  {
    name: 'Allen Brothers Inc.',
    tag: 'First Enterprise Project',
    description:
      'Designed and built homepage banners, product cards, PDP UI, quick-view sidebars, and hover-based image magnification for product pages on a live enterprise engagement.',
    achievements: [
      'First fresher in the company assigned to a client project',
      'Delivered pixel-perfect UI, earning appreciation from senior developers and the client',
      'Selected for major module ownership on the next project (BrandsMart USA)',
    ],
    tech: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Fresh Cart',
    tag: 'Training Project',
    description: 'Built a full-stack MERN e-commerce application solo in 6 weeks, including test coverage with Jest.',
    achievements: [
      'Ranked #1 among 4 fresher UI developers',
      'Earned direct assignment to a real-world enterprise client project',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Jest'],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const visible = expanded ? achievements : achievements.slice(0, 6);

  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
  const visibleProjects = projectsExpanded || !isMobile ? projects : projects.slice(0, 2);
  const hiddenCount = projects.length - 2;

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="mx-auto px-6 md:px-8">
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

              <div className="glass spotlight-card rounded-2xl p-6 md:p-8 border border-white/5 hover:border-blue-500/20 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <Briefcase size={16} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">Software Engineer</h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-blue-400 font-medium text-sm">AIEnterprise Inc.</span>
                          <a
                            href="https://www.aienterprise.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit AIEnterprise Inc. website"
                            title="Visit AIEnterprise Inc. website"
                          >
                            <ExternalLink size={12} className="text-gray-600" />
                          </a>
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

                {/* Projects subsection */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <FolderGit2 size={15} className="text-blue-400" />
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Projects</h4>
                  </div>

                  {/* Projects timeline */}
                  <div className="relative ml-1">
                    {/* Connecting line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/30 to-transparent" />

                    <div className="space-y-5">
                      {visibleProjects.map((project, i) => (
                        <div key={i} className="relative pl-7">
                          {/* Node dot */}
                          <div
                            className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-[#0a0a0f] flex items-center justify-center ${project.ongoing ? 'border-green-500' : 'border-blue-500'
                              }`}
                          >
                            <div className={`w-1.5 h-1.5 rounded-full ${project.ongoing ? 'bg-green-500' : 'bg-blue-500'}`} />
                          </div>

                          {/* Project content */}
                          <div className="rounded-xl p-4  bg-white/[0.02] border border-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/20 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                            {/* Name + tag */}
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h5 className="text-base font-bold text-white">{project.name}</h5>
                              {project.tag && (
                                <span
                                  className={`px-2 py-0.5 text-[0.65rem] font-medium rounded-full border ${project.ongoing
                                    ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                    : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                                    }`}
                                >
                                  {project.tag}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-400 leading-relaxed mb-3">{project.description}</p>

                            {/* Project achievements */}
                            <div className="space-y-1.5 mb-3">
                              {project.achievements.map((ach, j) => (
                                <div key={j} className="flex items-start gap-2">
                                  <Trophy size={13} className="shrink-0 mt-0.5 text-amber-400/80" />
                                  <span className="text-xs text-gray-300 leading-relaxed">{ach}</span>
                                </div>
                              ))}
                            </div>

                            {/* Tech chips */}
                            <div className="flex flex-wrap gap-1.5">
                              {project.tech.map((t) => (
                                <span
                                  key={t}
                                  className="px-2 py-0.5 text-[0.65rem] font-medium text-blue-300 bg-blue-500/10 border border-blue-500/15 rounded-md"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile expand toggle */}
                  {hiddenCount > 0 && (
                    <button
                      onClick={() => setProjectsExpanded(!projectsExpanded)}
                      className="mt-4 flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors md:hidden"
                    >
                      {projectsExpanded ? (
                        <>Show less <ChevronUp size={14} /></>
                      ) : (
                        <>Show {hiddenCount} more projects <ChevronDown size={14} /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Achievements subsection */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={15} className="text-blue-400" />
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest">Achievements</h4>
                  </div>

                  <div className="space-y-3">
                    {visible.map((ach, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-colors ${ach.highlight ? 'bg-blue-500/5 border border-blue-500/10' : 'hover:bg-white/2'
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
    </section>
  );
}
