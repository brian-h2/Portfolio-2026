import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '+2', label: 'Años de experiencia' },
  { value: '+7', label: 'Proyectos completados' },
  { value: '100%', label: 'Comprometido' },
];

export function About() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 px-8 section-alt relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto">

          {/* Heading */}
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className={`mb-10 anim-slide-left ${headingVisible ? 'is-visible' : ''}`}
          >
            <h2 className="text-white text-5xl font-bold mb-3">Sobre mí</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-violet-500 rounded-full" />
          </div>

          {/* Text */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`space-y-5 anim-fade-up anim-delay-150 ${textVisible ? 'is-visible' : ''}`}
          >
            <p className="text-lg text-neutral-300 leading-relaxed">
              Desde 2022 inmerso en el mundo del software, con gran esfuerzo y dedicación.
              Actualmente trabajo en <span className="text-teal-400 font-medium">Traditum</span>, donde aplico mis conocimientos
              en proyectos reales, y en mis tiempos libres desarrollo proyectos personales y trabajo con clientes freelance.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed">
              Mi objetivo es desarrollar soluciones tecnológicas que no solo cumplan con las expectativas, sino que las superen.
              Busco continuamente nuevos desafíos que me permitan crecer profesionalmente mientras aporto resultados concretos.
            </p>
          </div>

          {/* Stats */}
          <div
            ref={statsRef as React.RefObject<HTMLDivElement>}
            className={`mt-12 grid grid-cols-3 gap-4 ${statsVisible ? 'is-visible' : ''}`}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`text-center p-6 skill-tile rounded-2xl anim-scale-in ${i === 1 ? 'anim-delay-150' : i === 2 ? 'anim-delay-300' : ''} ${statsVisible ? 'is-visible' : ''}`}
              >
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
