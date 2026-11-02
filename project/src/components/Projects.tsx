import { FolderGit2, ArrowRight } from 'lucide-react';
import FeaturedProjectCard, { type FeaturedProject } from './projects/FeaturedProjectCard';
import ProjectCard, { type Project } from './projects/ProjectCard';
import CodeEditorPreview from './projects/CodeEditorPreview';
import HomeFixPreview from './projects/HomeFixPreview';

const featuredProjects: FeaturedProject[] = [
  {
    name: 'CodeGenie',
    category: 'AI-Powered Coding Assistant',
    description:
      'CodeGenie is an AI-powered coding assistant that helps developers generate, understand and analyze code through intelligent AI models and developer-focused tools.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Hugging Face', 'AI/LLM'],
    features: [
      'AI code generation',
      'AI code explanation',
      'JWT authentication',
      'Role-Based Access Control',
      'User dashboard',
      'AST visualization',
      'Multiple AI model integration',
    ],
    githubUrl: 'https://github.com/Raman-engi/Infosys_Springboard',
    demoUrl: '',
    preview: <CodeEditorPreview />,
    tags: ['AI / Full-Stack'],
    accent: 'blue',
  },
  {
    name: 'HomeFix',
    subtitle: "India's Trusted Home Services Platform",
    category: 'MERN Full-Stack Application',
    description:
      'HomeFix is a MERN-stack platform designed to connect customers with trusted local service providers such as electricians, plumbers, AC technicians and other home-service professionals.',
    technologies: ['React.js', 'Tailwind CSS', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Axios'],
    features: [
      'User authentication',
      'Service discovery',
      'Provider profiles',
      'Worker verification',
      'Complaint system',
      'Payment integration',
      'WhatsApp / call support',
      'Responsive design',
    ],
    githubUrl: 'https://github.com/Raman-engi/homefix-on-demand-home-services',
    demoUrl: 'https://homefix-on-demand-home-services.vercel.app',
    preview: <HomeFixPreview />,
    tags: ['MERN / Full-Stack'],
    accent: 'emerald',
  },
];

const otherProjects: Project[] = [
  {
    name: 'Smart Crop Recommendation System',
    category: 'Machine Learning',
    description:
      'An ML-powered system that recommends the most suitable crops for a given soil and climate profile, helping farmers make data-driven decisions.',
    technologies: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NumPy'],
    features: [
      'Soil & climate parameter analysis',
      'Multi-crop recommendation engine',
      'Interactive recommendation dashboard',
    ],
    githubUrl: 'https://github.com/Raman-engi/Smart-Crop-Recommendation-System',
    demoUrl: '',
  },
  {
    name: 'E-Commerce Platform with Payment Gateway',
    category: 'Full-Stack Web App',
    description:
      'A full-featured e-commerce platform with product catalog, cart, checkout, and integrated payment gateway for seamless online shopping.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe'],
    features: [
      'Product catalog & search',
      'Shopping cart & checkout',
      'Stripe payment integration',
      'Order management dashboard',
    ],
    githubUrl: '',
    demoUrl: '',
  },
  {
    name: 'Rentronics — Electronics Buy & Rent Marketplace',
    category: 'Marketplace Concept',
    description:
      'An electronics marketplace concept designed to let users explore electronics for buying or renting.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Browse electronics for buying or renting',
      'Product catalog with filtering',
      'Responsive marketplace UI',
    ],
    githubUrl: 'https://github.com/Raman-engi/Rentronics-Electronics-Buy-Rent-Marketplace',
    demoUrl: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-ink-50 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-50 border border-accent-200 mb-5">
            <FolderGit2 className="w-4 h-4 text-accent-600" />
            <span className="text-xs font-bold text-accent-700 uppercase tracking-wider">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-ink-900 tracking-tight text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-ink-500 leading-relaxed text-balance">
            Real-world applications combining full-stack development, AI and
            practical problem solving.
          </p>
          <p className="mt-2 text-sm text-ink-400">
            Here are some of the projects I've built and worked on.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-6 sm:space-y-8">
          {featuredProjects.map((project, i) => (
            <FeaturedProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Other projects header */}
        <div className="mt-16 sm:mt-20 mb-5 sm:mb-6 flex items-center gap-4">
          <h3 className="text-xl font-bold text-ink-900 tracking-tight whitespace-nowrap">
            Other Projects
          </h3>
          <div className="h-px flex-1 bg-ink-200" />
          <span className="text-xs font-medium text-ink-400 whitespace-nowrap">
            {otherProjects.length} projects
          </span>
        </div>

        {/* Other projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {otherProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* See more CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="https://github.com/Raman-engi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-ink-200 hover:border-ink-300 text-ink-700 text-sm font-semibold transition-all hover:shadow-sm"
          >
            View all projects on GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
