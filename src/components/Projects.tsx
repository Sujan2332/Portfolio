import { useState } from 'react';
import { ExternalLink, Github, X, Zap, MessageSquare, ShoppingBag } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDesc: string;
  tech: string[];
  color: string;
  accentColor: string;
  icon: typeof MessageSquare;
  features: string[];
  github: string;
  demo?: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 'chat',
    title: 'Real-Time Chat Application',
    subtitle: 'MERN Stack • WebSockets',
    description: 'Full-featured real-time messaging platform with WebSocket communication, dynamic UI updates, and responsive design.',
    longDesc: 'A production-grade real-time chat application built with the MERN stack. Features include WebSocket-powered instant messaging, room-based communication, online presence indicators, message history persistence in MongoDB, and a pixel-perfect responsive UI that works seamlessly across all devices.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
    color: '#3b82f6',
    accentColor: 'rgba(59,130,246,0.15)',
    icon: MessageSquare,
    features: ['WebSocket real-time communication', 'Room-based messaging', 'Online presence indicators', 'Message history persistence', 'JWT authentication', 'Mobile-responsive design'],
    github: 'https://github.com/sujan2332',
    gradient: 'from-blue-600/20 to-blue-900/10',
  },
  {
    id: 'ecommerce',
    title: 'Sare E-Commerce Platform',
    subtitle: 'MERN Stack • Full E-Commerce',
    description: 'Complete e-commerce platform with product catalog, advanced search & filtering, checkout workflow, and reusable component library.',
    longDesc: 'A complete end-to-end e-commerce platform built from scratch using the MERN stack. Includes a dynamic product catalog with advanced filtering, a streamlined checkout flow, cart & wishlist management, and a library of reusable UI components built for scalability and performance.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS Modules'],
    color: '#8b5cf6',
    accentColor: 'rgba(139,92,246,0.15)',
    icon: ShoppingBag,
    features: ['Dynamic product catalog', 'Advanced search & filtering', 'Shopping cart & wishlist', 'Checkout workflow', 'Reusable component library', 'Responsive design'],
    github: 'https://github.com/sujan2332',
    gradient: 'from-purple-600/20 to-purple-900/10',
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const Icon = project.icon;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl glass rounded-2xl p-8 border border-white/8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X size={16} className="text-gray-400" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: project.accentColor, border: `1px solid ${project.color}30` }}>
            <Icon size={22} style={{ color: project.color }} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            <div className="text-sm font-mono" style={{ color: project.color }}>{project.subtitle}</div>
          </div>
        </div>

        <p className="text-gray-300 leading-relaxed mb-6 text-sm">{project.longDesc}</p>

        <div className="mb-6">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Key Features</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                <Zap size={12} style={{ color: project.color }} />
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg"
              style={{ background: project.accentColor, color: project.color, border: `1px solid ${project.color}20` }}>
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 glass border border-white/10 hover:border-white/20 text-gray-200 text-sm font-medium rounded-xl transition-all"
          >
            <Github size={15} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl text-white transition-all"
              style={{ background: project.color }}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onCaseStudy }: { project: Project; onCaseStudy: () => void }) {
  const Icon = project.icon;

  return (
    <div
      className="group relative glass spotlight-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-400 cursor-hover"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty('--mouse-x', `${x}%`);
        e.currentTarget.style.setProperty('--mouse-y', `${y}%`);
      }}
    >
      {/* Gradient top */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Icon size={80} style={{ color: project.color }} />
        </div>
        <div className="absolute bottom-4 left-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: project.accentColor, border: `1px solid ${project.color}40` }}>
            <Icon size={20} style={{ color: project.color }} />
          </div>
        </div>
        <div className="absolute bottom-4 right-6 flex gap-2">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs font-mono rounded-md bg-black/40 text-gray-300 border border-white/10">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gradient-blue transition-all">{project.title}</h3>
        <div className="text-xs font-mono mb-3" style={{ color: project.color }}>{project.subtitle}</div>
        <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 text-xs text-gray-500 bg-white/3 border border-white/5 rounded-md">{t}</span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 glass border border-white/10 hover:border-white/20 text-gray-300 text-xs font-medium rounded-lg transition-all"
          >
            <Github size={13} />
            GitHub
          </a>
          <button
            onClick={onCaseStudy}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all text-white"
            style={{ background: project.color }}
          >
            <ExternalLink size={13} />
            Case Study
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Featured Projects</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Work I'm{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>proud of</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Handpicked projects that showcase end-to-end development skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className={`reveal${i % 2 === 0 ? '-left' : '-right'}`} data-delay={i * 120}>
              <ProjectCard project={project} onCaseStudy={() => setModalProject(project)} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/sujan2332"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-white/20 text-gray-300 hover:text-white text-sm font-medium rounded-xl transition-all"
          >
            <Github size={16} />
            View all on GitHub
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </section>
  );
}
