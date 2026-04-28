import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'TraditumSA',
    year: '2024 – Presente',
    impact: 'Desarrollo y mantenimiento de aplicaciones web, contribuyendo a la mejora continua de los procesos internos, decisiones operativas y satisfacción del cliente.',
    tags: ['React', 'Node.js', '.NET', 'ASP.NET Core', 'SQL Server', 'Azure', 'Scrum'],
  },
  {
    role: 'Freelancer',
    company: 'Proyectos propios',
    year: '2024 – Presente',
    impact: 'Implementación de soluciones personalizadas para clientes, logrando una satisfacción del 100% en cada entrega.',
    tags: ['Next.js','Typescript', 'Node.Js', 'Express', 'Supabase', 'MongoDB', 'OpenAI', 'Scrum'],
  },
];

export function Experience() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="experience" className="py-32 px-8 section-alt">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-3 text-5xl font-bold text-white">Experiencia</h2>
          <p className="text-neutral-400">Trayectoria profesional con resultados concretos</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            ref={timelineRef as React.RefObject<HTMLDivElement>}
            className="relative space-y-6"
          >
            {/* Timeline line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-teal-500 via-violet-500 to-transparent" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-14 anim-slide-right ${index === 1 ? 'anim-delay-200' : ''} ${timelineVisible ? 'is-visible' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-10 h-10 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-teal-400 ring-4 ring-teal-400/20 shadow-lg shadow-teal-500/30" />
                </div>

                <div className="project-card rounded-2xl p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                      <span className="text-teal-400 text-sm font-medium">{exp.company}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full whitespace-nowrap">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                      {exp.year}
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{exp.impact}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
