import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Full Stack Developer - TraditumSA',
    year: '2024 - Presente',
    impact: 'Desarrollo y mantenimiento de aplicaciones web, contribuyendo a la mejora continua de los procesos internos, decisiones operativas y satisfacción del cliente.',
  },
  {
    role: 'Frelancer',
    year: '2024 - Presente',
    impact: 'Implementación de soluciones personalizadas para clientes, logrando una satisfacción del 100%',
  }
];

const itemDelays = ['', 'anim-delay-250'];

export function Experience() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-4 text-5xl font-bold text-neutral-200">Experiencia</h2>
          <p className="text-lg text-neutral-200">Trayectoria profesional con resultados concretos</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            ref={timelineRef as React.RefObject<HTMLDivElement>}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-16 anim-slide-right ${itemDelays[index] || ''} ${timelineVisible ? 'is-visible' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full ring-4 ring-white shadow-lg"></div>
                  </div>

                  <div className="group bg-white rounded-3xl border border-neutral-200 p-8 hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <h3 className="mb-2 sm:mb-0">{exp.role}</h3>
                      <span className="inline-flex items-center gap-2 text-sm text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-neutral-600 leading-relaxed">{exp.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
