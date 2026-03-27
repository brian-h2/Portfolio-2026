import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">

          {/* Heading */}
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-16 anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
          >
            <h2 className="mb-4 text-5xl font-bold text-neutral-200">Conectemos</h2>
            <p className="text-lg text-neutral-200">
              ¿Interesado en trabajar juntos? Estoy disponible para nuevas oportunidades
            </p>
          </div>

          {/* Contact card */}
          <div
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`bg-white rounded-[2.5rem] border border-neutral-200 p-12 shadow-xl anim-scale-in ${cardVisible ? 'is-visible' : ''}`}
          >
            <div className="flex flex-col gap-6">
              <a
                href="mailto:brianheredia200309@gmail.com"
                className={`group flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 anim-fade-up anim-delay-150 ${cardVisible ? 'is-visible' : ''}`}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-white/80 mb-1">Email</div>
                  <div className="text-lg">brianheredia200309@gmail.com</div>
                </div>
                <div className="text-white/80 group-hover:translate-x-1 transition-transform">→</div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg transition-all duration-300 anim-slide-left anim-delay-250 ${cardVisible ? 'is-visible' : ''}`}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Linkedin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-neutral-500 mb-1">LinkedIn</div>
                    <div className="text-neutral-900">Ver perfil</div>
                  </div>
                </a>

                <a
                  href="https://github.com/brian-h2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg transition-all duration-300 anim-slide-right anim-delay-250 ${cardVisible ? 'is-visible' : ''}`}
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Github className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-neutral-500 mb-1">GitHub</div>
                    <div className="text-neutral-900">Ver proyectos</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
