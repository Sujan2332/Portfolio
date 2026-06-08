import { Home, List, Package, CreditCard, Lock, ShoppingCart, Heart, RotateCcw, User } from 'lucide-react';

const modules = [
  { icon: Home,         label: 'Home Page',       desc: 'Hero banners, featured collections, dynamic content', color: '#3b82f6' },
  { icon: List,         label: 'PLP',             desc: 'Product Listing with filters, sorting, pagination', color: '#8b5cf6' },
  { icon: Package,      label: 'PDP',             desc: 'Product Detail with variants, zoom, reviews, Q&A', color: '#06b6d4' },
  { icon: Lock,         label: 'Authentication',  desc: 'Secure login, register, forgot/reset password flows', color: '#f59e0b' },
  { icon: ShoppingCart, label: 'Checkout',         desc: 'Multi-step checkout with payment & address management', color: '#10b981' },
  { icon: Package,      label: 'Orders',           desc: 'Order history, tracking, status updates, invoices', color: '#f43f5e' },
  { icon: Heart,        label: 'Wishlist',         desc: 'Save & manage favorite products, move to cart', color: '#ec4899' },
  { icon: RotateCcw,    label: 'Returns',          desc: 'Return & refund requests, status tracking', color: '#a78bfa' },
  { icon: User,         label: 'Account Module',   desc: 'Profile, addresses, preferences, security settings', color: '#34d399' },
  { icon: CreditCard,   label: 'Cart & Payments',  desc: 'Dynamic cart, promo codes, multi-payment gateway', color: '#60a5fa' },
];

export default function EcommerceExpertise() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">E-Commerce Expertise</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gradient-hero" style={{ fontFamily: "'Syne', sans-serif" }}>
            Full ecosystem{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 600 }}>architect</em>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            From homepage to checkout — I've built every module of a production e-commerce platform{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.08em', color: '#93c5fd' }}>end-to-end</em>, fully integrated and performance-optimized.
          </p>
        </div>

        {/* Architecture diagram grid */}
        <div className="relative">
          {/* Connection lines SVG overlay - decorative */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.label}
                  className="reveal reveal-scale group spotlight-card module-card-glow glass rounded-2xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-hover"
                  data-delay={i * 60}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}30` }}
                  >
                    <Icon size={17} style={{ color: mod.color }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-gradient-blue transition-all">{mod.label}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{mod.desc}</p>

                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                    style={{ background: `linear-gradient(90deg, transparent, ${mod.color}, transparent)` }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom accent */}
        <div className="mt-16 reveal">
          <div className="glass rounded-2xl p-6 border border-blue-500/10 text-center">
            <div className="text-sm text-gray-400">
              Every module built with <span className="text-blue-400">React.js</span> components, connected via{' '}
              <span className="text-purple-400">REST APIs</span>, persisted in{' '}
              <span className="text-green-400">MongoDB</span>, and tested with{' '}
              <span className="text-red-400">Jest</span>.
              Fully <span className="text-cyan-400">ADA-compliant</span> and <span className="text-yellow-400">cross-browser</span> compatible.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
