import { ExternalLink, Github } from 'lucide-react';

const projects = [
   {
    name: 'ExplainMyCode',
    description: 'Plataforma de chat inteligente con IA generativa para atención automatizada y asistencia en tiempo real',
    stack: ['Node.js', 'Express', 'OpenAI API', 'SQL Lite', 'WebSockets', 'React', 'Next.js', 'TypeScript'],
    impact: 'Permite proponer mejoras en tu codigo y resolver dudas técnicas de forma rápida y eficiente.',
    demo: 'https://explain-my-code-green.vercel.app/#',
    code: 'https://github.com/brian-h2/ExplainMyCode',
  },
  {
    name: 'Web para Sistema de RRHH',
    description: 'Sitio web profesional orientado a RRHH con enfoque en branding personal y captación de clientes',
    stack: ['React', 'CSS', 'JavaScript', 'Next.js', 'TypeScript'],
    impact: 'Gestion de clientes y oportunidades laborales, permitiendo encontrar un trabajo profesional para el usuario que ingrese.',
    demo: 'https://ceciliamentarrhh.com/',
    code: 'https://github.com/brian-h2/Aplicacion-RRHH',
  },
  {
    name: 'Avaporu',
    description: 'Plataforma de gestión, control y distribucion de gastos, stock y recursos para local',
    stack: ['Node.js', 'Express', 'MongoDB', 'React', 'REST API'],
    impact: 'Optimización en la distribución de recursos y gestión solidaria',
    demo: 'https://sistema-modular-de-ventas-avaporu.vercel.app/login',
    code: 'https://github.com/brian-h2/Sistema-modular-de-ventas-AVAPORU',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h2 className="text-neutral-200 mb-3 text-5xl font-bold">Proyectos</h2>
          <p className="text-neutral-300">Soluciones reales implementadas en producción</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur rounded-xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-neutral-900 mb-2">{project.name}</h3>
              <p className="text-sm text-neutral-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-neutral-900 mb-4">{project.impact}</p>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors "
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Ver código
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
