import { useState, useRef } from 'react';
import { Mail, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate async send
    await new Promise((r) => setTimeout(r, 1500));
    setStatus('success');
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">Get In Touch</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Let's build something{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>great</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Open to full-time roles, freelance projects, and collaborations. I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="flex flex-col gap-6 reveal-left">
            {/* Email card */}
            <a
              href="mailto:saisujans.dev@gmail.com"
              className="glass glass-hover spotlight-card rounded-2xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 flex items-center gap-5 group cursor-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</div>
                <div className="font-medium text-gray-200 group-hover:text-white transition-colors text-sm">saisujans.dev@gmail.com</div>
              </div>
            </a>

            {/* GitHub card */}
            <a
              href="https://github.com/sujan2332"
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-hover spotlight-card rounded-2xl p-6 border border-white/5 hover:border-purple-500/20 transition-all duration-300 flex items-center gap-5 group cursor-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Github size={20} className="text-purple-400" />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">GitHub</div>
                <div className="font-medium text-gray-200 group-hover:text-white transition-colors text-sm">github.com/sujan2332</div>
              </div>
            </a>

            {/* Availability note */}
            <div className="glass rounded-2xl p-6 border border-green-500/10" style={{ background: 'rgba(16,185,129,0.04)' }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-xs leading-relaxed">
                Currently open to full-time frontend or full-stack roles. Interested in React, Next.js, or Node.js projects at product-led companies.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form onSubmit={handleSubmit} className="glass spotlight-card rounded-2xl p-6 md:p-8 border border-white/5">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <div className="mb-6">
                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 disabled:hover:translate-y-0"
              >
                {status === 'loading' && <Loader2 size={16} className="animate-spin" />}
                {status === 'success' && <CheckCircle2 size={16} />}
                {status === 'error' && <AlertCircle size={16} />}
                {status === 'idle' && <Send size={16} />}
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message sent!' : status === 'error' ? 'Try again' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
