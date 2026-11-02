import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  name: string;
  category: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-white rounded-xl border border-ink-200/60 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 p-6 flex flex-col">
      {/* Category */}
      <span className="text-[10px] font-bold text-accent-600 uppercase tracking-wider mb-1.5">
        {project.category}
      </span>

      {/* Title */}
      <h4 className="text-lg font-bold text-ink-900 tracking-tight">{project.name}</h4>

      {/* Description */}
      <p className="mt-2 text-sm text-ink-500 leading-relaxed">{project.description}</p>

      {/* Technologies */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded-md bg-ink-50 border border-ink-200/60 text-[10px] font-medium text-ink-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}
      <ul className="mt-4 space-y-1">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-ink-300 shrink-0" />
            <span className="text-[12px] text-ink-500 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="mt-auto pt-5 flex flex-wrap gap-3">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} on GitHub`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-ink-100 hover:bg-ink-900 text-ink-700 hover:text-white text-xs font-semibold transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-ink-50 text-ink-300 text-xs font-semibold cursor-not-allowed"
          >
            <Github className="w-3.5 h-3.5" />
            GitHub
          </span>
        )}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.name} live demo`}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent-50 hover:bg-accent-500 text-accent-600 hover:text-white text-xs font-semibold border border-accent-200 hover:border-accent-500 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-ink-50 text-ink-300 text-xs font-semibold border border-ink-200/60 cursor-not-allowed"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Live Demo
          </span>
        )}
      </div>
    </article>
  );
}
