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

const projects = [
  {
    name: 'ExplainMyCode',
    emoji: '🤖',
    description: 'Chat inteligente con IA generativa para asistencia en código en tiempo real.',
    stack: ['Node.js', 'Express', 'OpenAI API', 'SQL Lite', 'WebSockets', 'React', 'Next.js', 'TypeScript'],
    impact: 'Propone mejoras en tu código y resuelve dudas técnicas de forma rápida.',
    demo: 'https://explain-my-code-green.vercel.app/#',
    code: 'https://github.com/brian-h2/ExplainMyCode',
    accent: 'from-teal-500/20 to-cyan-600/10',
  },
  {
    name: 'Web RRHH',
    emoji: '👔',
    description: 'Sitio profesional orientado a RRHH con branding y captación de clientes.',
    stack: ['React', 'TailwindCSS', 'JavaScript', 'Next.js', 'TypeScript', 'Railway', 'MongoDB'],
    impact: 'Gestión de clientes y oportunidades laborales para conectar profesionales.',
    demo: 'https://ceciliamentarrhh.com/',
    code: 'https://github.com/brian-h2/Aplicacion-RRHH',
    accent: 'from-violet-500/20 to-purple-600/10',
  },
  {
    name: 'Barbería Online',
    emoji: '✂️',
    description: 'App web para gestión de reservas, clientes y servicios de barbería.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'React'],
    impact: 'Agiliza reservas y mejora la experiencia del negocio y sus clientes.',
    demo: 'https://barber-saa-s-one.vercel.app/',
    code: 'https://github.com/fmbpartnersorg/BarberSaaS',
    accent: 'from-orange-500/20 to-amber-600/10',
  },
  {
    name: 'Avaporu',
    emoji: '📦',
    description: 'Plataforma de gestión, control y distribución de gastos, stock y recursos.',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'REST API'],
    impact: 'Optimización en distribución de recursos y gestión solidaria.',
    demo: 'https://sistema-modular-de-ventas-avaporu.vercel.app/login',
    code: 'https://github.com/brian-h2/Sistema-modular-de-ventas-AVAPORU',
    accent: 'from-green-500/20 to-emerald-600/10',
  },
  {
    name: 'Mecanic SaaS',
    emoji: '🔧',
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
                  <span className="text-3xl">{project.emoji}</span>
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
