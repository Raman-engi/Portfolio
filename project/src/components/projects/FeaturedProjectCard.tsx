import type { ReactNode } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

export interface FeaturedProject {
  name: string;
  subtitle?: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
  preview: ReactNode;
  tags: string[];
  /** Used for the tag pills and accent */
  accent: 'blue' | 'emerald';
}

interface Props {
  project: FeaturedProject;
  index: number;
}

export default function FeaturedProjectCard({ project, index }: Props) {
  const isReversed = index % 2 === 1;

  return (
    <article
      className="group relative bg-white rounded-2xl border border-ink-200/60 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Featured label bar */}
      <div className="flex flex-wrap items-center gap-2 px-4 sm:px-6 pt-4 sm:pt-5">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-ink-900 text-white text-[10px] font-bold tracking-wider uppercase">
          <Star className="w-3 h-3 fill-accent-400 text-accent-400" />
          Featured Project
        </span>
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full bg-ink-100 text-ink-500 text-[10px] font-semibold tracking-wider uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className={`flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Preview — ~58% on desktop */}
        <div className="lg:w-[58%] p-4 sm:p-6 lg:p-7 lg:pb-6">
          <div className="transition-transform duration-500 group-hover:scale-[1.015]">
            {project.preview}
          </div>
        </div>

        {/* Info — ~42% on desktop */}
        <div className="lg:w-[42%] px-4 sm:px-6 lg:px-7 lg:py-7 pt-2 sm:pt-4 pb-6 flex flex-col">
          {/* Category */}
          <span className="text-xs font-bold text-accent-600 uppercase tracking-wider mb-1.5">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-extrabold text-ink-900 tracking-tight leading-tight">
            {project.name}
          </h3>
          {project.subtitle && (
            <p className="text-sm font-medium text-ink-400 mt-0.5">{project.subtitle}</p>
          )}

          {/* Description */}
          <p className="mt-3 text-sm text-ink-600 leading-relaxed">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4">
            <div className="text-[10px] font-bold text-ink-400 uppercase tracking-wider mb-2">
              Technologies
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-ink-50 border border-ink-200/60 text-[11px] font-medium text-ink-700 hover:bg-accent-50 hover:border-accent-200 hover:text-accent-700 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-4">
            <div className="text-[10px] font-bold text-ink-400 uppercase tracking-wider mb-2">
              Key Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-500 shrink-0" />
                  <span className="text-[12px] text-ink-600 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-auto pt-5 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink-900 hover:bg-ink-800 text-white text-sm font-semibold transition-all hover:scale-[1.02] shadow-sm"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink-100 text-ink-400 text-sm font-semibold cursor-not-allowed"
              >
                <Github className="w-4 h-4" />
                GitHub
              </span>
            )}
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} live demo`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-400 text-white text-sm font-semibold transition-all hover:scale-[1.02] shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-ink-100 text-ink-400 text-sm font-semibold cursor-not-allowed"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
