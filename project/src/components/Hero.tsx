import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code2, Brain, Server } from 'lucide-react';

const highlights = [
  { Icon: Code2, label: 'Full-Stack', value: 'MERN / React / Node' },
  { Icon: Brain, label: 'AI Integration', value: 'LLM / Hugging Face' },
  { Icon: Server, label: 'Backend', value: 'Express / MongoDB / JWT' },
];

const stats = [
  { value: '4+', label: 'Projects Shipped' },
  { value: '9+', label: 'Technologies' },
  { value: '2', label: 'Featured Builds' },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink-950 overflow-hidden scroll-mt-16"
    >
      {/* Background accents — subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-800/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Left: Identity + intro */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-ink-200 tracking-wide">
                Available for new opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.08] tracking-tight">
              Raman Singh
            </h1>

            {/* Role */}
            <p className="mt-1.5 text-lg sm:text-xl font-semibold text-accent-400 tracking-tight">
              Full-Stack Software Engineer
            </p>

            {/* Value proposition */}
            <p className="mt-4 text-base text-ink-300 leading-relaxed max-w-xl">
              I build production-ready web applications with a focus on
              AI-powered tooling and full-stack MERN architecture — from
              intelligent coding assistants to nationwide service platforms.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold transition-all shadow-glow hover:scale-[1.02]"
              >
                View featured projects
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-all"
              >
                Get in touch
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              {[
                { Icon: Github, href: 'https://github.com/Raman-engi', label: 'GitHub' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/raman-singh-cse/', label: 'LinkedIn' },
                { Icon: Mail, href: 'mailto:ramansingh.cse@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => {
                const isExternal = href.startsWith('http');
                return (
                  <a
                    key={label}
                    href={href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-ink-400 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: At-a-glance card */}
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm p-6">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pb-5 border-b border-white/10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-white tracking-tight">
                      {s.value}
                    </div>
                    <div className="text-[11px] font-medium text-ink-400 mt-0.5 leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Focus areas */}
              <div className="pt-5 space-y-3.5">
                <div className="text-[10px] font-bold text-ink-500 uppercase tracking-wider">
                  Core Focus
                </div>
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <h.Icon className="w-4 h-4 text-accent-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">{h.label}</div>
                      <div className="text-xs text-ink-400">{h.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom note */}
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs text-ink-400">
                  <Sparkles className="w-3.5 h-3.5 text-accent-400 shrink-0" />
                  <span>Open to full-time &amp; contract roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
