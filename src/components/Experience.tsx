const experiences = [
  {
    role: 'Full Stack Developer',
    year: '2022 - Presente',
    impact: 'Desarrollo de sistemas modulares que aumentaron la eficiencia operativa en 40%',
  },
  {
    role: 'Backend Developer',
    year: '2021 - 2022',
    impact: 'Implementación de microservicios que redujeron tiempos de respuesta en 60%',
  },
  {
    role: 'Junior Developer',
    year: '2020 - 2021',
    impact: 'Automatización de procesos clave y desarrollo de APIs RESTful',
  },
  {
    role: 'Formación Técnica',
    year: '2019 - 2020',
    impact: 'Especialización en desarrollo web y arquitectura de software',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="mb-4">Experiencia</h2>
          <p className="text-lg text-neutral-600">Trayectoria profesional con resultados concretos</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-300"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-16">
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
