import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Code2 className="w-5 h-5 text-accent-400" />
              <span>AM<span className="text-accent-400">.</span></span>
            </div>
            <p className="text-ink-400 text-sm max-w-sm leading-relaxed">
              Full-stack software engineer open to roles in AI, full-stack
              development, and product engineering.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: 'https://github.com/Raman-engi', label: 'GitHub', external: true },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/raman-singh-cse/', label: 'LinkedIn', external: true },
              { Icon: Mail, href: 'mailto:ramansingh.cse@gmail.com', label: 'Email', external: false },
            ].map(({ Icon, href, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-ink-300 hover:text-white border border-white/10 transition-all"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Contact email */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-ink-400 text-sm font-medium shrink-0">
            <Mail className="w-4 h-4 text-accent-400" />
            <span>Get in touch:</span>
          </div>
          <a
            href="mailto:ramansingh.cse@gmail.com"
            className="text-sm font-medium text-ink-200 hover:text-white transition-colors break-all"
          >
            ramansingh.cse@gmail.com
          </a>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 text-ink-500 text-xs text-center">
          &copy; {new Date().getFullYear()} Raman Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
