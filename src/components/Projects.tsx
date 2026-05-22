import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const techColors: Record<string, string> = {
  'React': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'Next.js': 'bg-white/5 text-white border-white/10',
  'TypeScript': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  'Node.js': 'bg-green-500/10 text-green-400 border-green-500/20',
  'Express': 'bg-white/5 text-neutral-300 border-white/10',
  'MongoDB': 'bg-green-600/10 text-green-400 border-green-600/20',
  'SQL Lite': 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  'WebSockets': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'OpenAI API': 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  'CSS': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'Supabase': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'TailwindCSS': 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20',
  'REST API': 'bg-orange-500/10 text-orange-400 border-orange-500/20'
};

const defaultTechClass = 'bg-white/5 text-neutral-400 border-white/10';

// SVG icons per project type
const AiIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="8" y="14" width="24" height="18" rx="4" fill="none" stroke="#00d4aa" strokeWidth="1.8"/>
    <rect x="15" y="10" width="10" height="5" rx="2" fill="#00d4aa" opacity="0.25" stroke="#00d4aa" strokeWidth="1.5"/>
    <circle cx="15" cy="23" r="2.5" fill="#00d4aa" opacity="0.85"/>
    <circle cx="25" cy="23" r="2.5" fill="#00d4aa" opacity="0.85"/>
    <path d="M17.5 28.5 Q20 30.5 22.5 28.5" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="4" y1="20" x2="8" y2="20" stroke="#00d4aa" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="32" y1="20" x2="36" y2="20" stroke="#00d4aa" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="20" cy="7" r="1.2" fill="#00d4aa"/>
  </svg>
);

const HrIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="6" y="16" width="28" height="18" rx="3" fill="none" stroke="#a78bfa" strokeWidth="1.8"/>
    <path d="M14 16V13C14 11.343 15.343 10 17 10H23C24.657 10 26 11.343 26 13V16" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="6" y1="22" x2="34" y2="22" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <circle cx="20" cy="22" r="2.5" fill="#a78bfa" opacity="0.9"/>
    <line x1="20" y1="22" x2="20" y2="19.5" stroke="#a78bfa" strokeWidth="1.5"/>
    <rect x="14" y="27" width="12" height="2" rx="1" fill="#a78bfa" opacity="0.4"/>
  </svg>
);

const BarberIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="13" cy="13" r="4" fill="none" stroke="#fb923c" strokeWidth="1.8"/>
    <circle cx="27" cy="27" r="4" fill="none" stroke="#fb923c" strokeWidth="1.8"/>
    <line x1="16.5" y1="16.5" x2="23.5" y2="23.5" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="8" y1="32" x2="16" y2="24" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="32" y1="8" x2="24" y2="16" stroke="#fb923c" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="13" cy="13" r="1.8" fill="#fb923c" opacity="0.5"/>
    <circle cx="27" cy="27" r="1.8" fill="#fb923c" opacity="0.5"/>
  </svg>
);

const InventoryIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="7" y="18" width="26" height="16" rx="2" fill="none" stroke="#34d399" strokeWidth="1.8"/>
    <path d="M7 22H33" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M13 18V14C13 11.791 14.791 10 17 10H23C25.209 10 27 11.791 27 14V18" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round"/>
    <rect x="16" y="25" width="8" height="5" rx="1.5" fill="#34d399" opacity="0.3" stroke="#34d399" strokeWidth="1.2"/>
    <line x1="20" y1="25" x2="20" y2="30" stroke="#34d399" strokeWidth="1.2"/>
  </svg>
);

const MechanicIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="20" cy="20" r="7" fill="none" stroke="#60a5fa" strokeWidth="1.8"/>
    <circle cx="20" cy="20" r="2.5" fill="#60a5fa" opacity="0.7"/>
    <path d="M20 7V11M20 29V33M7 20H11M29 20H33" stroke="#60a5fa" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11.1 11.1L13.9 13.9M26.1 26.1L28.9 28.9M11.1 28.9L13.9 26.1M26.1 13.9L28.9 11.1" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const projects = [
  {
    name: 'ExplainMyCode',
    icon: <AiIcon />,
    description: 'Chat inteligente con IA generativa para asistencia en código en tiempo real.',
    stack: ['Node.js', 'Express', 'OpenAI API', 'SQL Lite', 'WebSockets', 'React', 'Next.js', 'TypeScript'],
    impact: 'Propone mejoras en tu código y resuelve dudas técnicas de forma rápida.',
    demo: 'https://explain-my-code-green.vercel.app/#',
    code: 'https://github.com/brian-h2/ExplainMyCode',
    accent: 'from-teal-500/20 to-cyan-600/10',
  },
  {
    name: 'Web RRHH',
    icon: <HrIcon />,
    description: 'Sitio profesional orientado a RRHH con branding y captación de clientes.',
    stack: ['React', 'TailwindCSS', 'JavaScript', 'Next.js', 'TypeScript', 'Railway', 'MongoDB'],
    impact: 'Gestión de clientes y oportunidades laborales para conectar profesionales.',
    demo: 'https://ceciliamentarrhh.com/',
    code: 'https://github.com/brian-h2/Aplicacion-RRHH',
    accent: 'from-violet-500/20 to-purple-600/10',
  },
  {
    name: 'Barbería Online',
    icon: <BarberIcon />,
    description: 'App web para gestión de reservas, clientes y servicios de barbería.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'React'],
    impact: 'Agiliza reservas y mejora la experiencia del negocio y sus clientes.',
    demo: 'https://barber-saa-s-one.vercel.app/',
    code: 'https://github.com/fmbpartnersorg/BarberSaaS',
    accent: 'from-orange-500/20 to-amber-600/10',
  },
  {
    name: 'Avaporu',
    icon: <InventoryIcon />,
    description: 'Plataforma de gestión, control y distribución de gastos, stock y recursos.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'REST API'],
    impact: 'Optimización en distribución de recursos y gestión solidaria.',
    demo: 'https://sistema-modular-de-ventas-avaporu.vercel.app/login',
    code: 'https://github.com/brian-h2/Sistema-modular-de-ventas-AVAPORU',
    accent: 'from-green-500/20 to-emerald-600/10',
  },
  {
    name: 'Mecanic SaaS',
    icon: <MechanicIcon />,
    description: 'Gestión de talleres mecánicos: servicios, clientes y registros diarios.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'React'],
    impact: 'Optimiza la operación diaria de talleres con interfaz intuitiva.',
    demo: 'https://mecanicsaas.vercel.app/',
    code: 'https://github.com/fmbpartnersorg/mecanicsaas',
    accent: 'from-blue-500/20 to-indigo-600/10',
  },
];

export function Projects() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="projects" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-white mb-3 text-5xl font-bold">Proyectos</h2>
          <p className="text-neutral-400">Soluciones reales implementadas en producción</p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card rounded-2xl overflow-hidden anim-fade-up ${index % 3 === 1 ? 'anim-delay-150' : index % 3 === 2 ? 'anim-delay-300' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-br ${project.accent} p-6 border-b border-white/5`}>
                <div className="flex items-center gap-3">
                  {project.icon}
                  <h3 className="text-white font-semibold text-lg">{project.name}</h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex flex-col gap-4">
                <p className="text-neutral-400 text-sm leading-relaxed">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${techColors[tech] ?? defaultTechClass}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <p className="text-xs text-neutral-500 border-l-2 border-teal-500/40 pl-3 leading-relaxed">
                  {project.impact}
                </p>

                {/* Links */}
                <div className="flex gap-4 pt-1">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-teal-400 hover:text-teal-300 transition-colors font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
