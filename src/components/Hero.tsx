import { Briefcase, Rocket, Layers } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="pt-40 py-16 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Text Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6 text-center">

              {/* Badge */}
              <div
                ref={badgeRef as React.RefObject<HTMLDivElement>}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full anim-fade-up ${badgeVisible ? 'is-visible' : ''}`}
              >
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-indigo-700">Actualmente ejerciendo mi rol como programador en Traditum</span>
              </div>

              {/* Title block */}
              <div
                ref={titleRef as React.RefObject<HTMLDivElement>}
                className={`space-y-4 anim-fade-up anim-delay-150 ${titleVisible ? 'is-visible' : ''}`}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Desarrollador Full Stack orientado a soluciones reales 💻
                </h1>
                <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed mx-auto">
                  Experiencia con React, Typescript, Node.js, MongoDB, SQL Server, integración de IA y arquitectura escalable.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div
              ref={cardsRef as React.RefObject<HTMLDivElement>}
              className={`grid grid-cols-1 md:grid-cols-3 gap-5 pt-10 stagger-children ${cardsVisible ? 'is-visible' : ''}`}
            >
              <div className={`group p-7 bg-white backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl anim-fade-up ${cardsVisible ? 'is-visible' : ''}`}>
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Experiencia</p>
                <p className="text-neutral-900">1/2 año de experiencia</p>
              </div>

              <div className={`group p-7 bg-white backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl anim-fade-up anim-delay-150 ${cardsVisible ? 'is-visible' : ''}`}>
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Producción</p>
                <p className="text-neutral-900">Proyectos reales en desarrollo constante</p>
              </div>

              <div className={`group p-7 bg-white backdrop-blur-sm rounded-[2.5rem] border border-white/50 shadow-2xl anim-fade-up anim-delay-300 ${cardsVisible ? 'is-visible' : ''}`}>
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Especialización</p>
                <p className="text-neutral-900">Sistemas modulares y microservicios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
