import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Skills() {
  const coreSkills = [
    'JavaScript/TypeScript',
    'Node.js',
    'Next.js',
    'React',
    'SQL Server',
    'PostgreSQL',
    'MongoDB',
    'Express',
    '.NET (básico)',
  ];

  const technicalSkills = [
    'Clean Architecture',
    'API Design',
    'CI/CD',
    'Docker',
    'Git/GitHub',
    'Azure',
    'Agile Methodologies',
    'Jira',
  ];

  const softSkills = [
    'Comunicación efectiva',
    'Resolución de problemas',
    'Trabajo autónomo',
    'Colaboración en equipo',
  ];

  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="skills" className="py-32 px-8">
      <div className="max-w-7xl mx-auto ">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-4 text-5xl font-bold text-neutral-200">Skills</h2>
          <p className="text-lg text-neutral-200">Competencias técnicas y profesionales que aportan valor</p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Core Skills */}
          <div className={`group bg-white rounded-3xl border  p-10 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 neu-shadow anim-slide-left ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="mb-2">Core Skills</h3>
              <p className="text-sm text-neutral-500">Tecnologías principales</p>
            </div>
            <div className="space-y-4">
              {coreSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-neutral-700 group-hover/item:text-neutral-900 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className={`group bg-white rounded-3xl border  p-10 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 neu-shadow anim-slide-left ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4">
                <span className="text-xl">🛠️</span>
              </div>
              <h3 className="mb-2">Habilidades Técnicas</h3>
              <p className="text-sm text-neutral-500">Prácticas y metodologías</p>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-neutral-700 group-hover/item:text-neutral-900 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={`group bg-white rounded-3xl border  p-10 hover:border-indigo-200 hover:shadow-xl transition-all duration-300 neu-shadow anim-slide-left ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-4">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="mb-2">Soft Skills</h3>
              <p className="text-sm text-neutral-500">Competencias profesionales</p>
            </div>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group/item">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-neutral-700 group-hover/item:text-neutral-900 transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
