import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Contact() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="contact" className="py-32 px-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-teal-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <div
            ref={headingRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
          >
            <h2 className="mb-3 text-5xl font-bold text-white">Conectemos</h2>
            <p className="text-neutral-400">
              ¿Interesado en trabajar juntos? Estoy disponible para nuevas oportunidades.
            </p>
          </div>

          {/* Contact card */}
          <div
            ref={cardRef as React.RefObject<HTMLDivElement>}
            className={`skill-tile rounded-2xl p-8 anim-scale-in ${cardVisible ? 'is-visible' : ''}`}
          >
            <div className="flex flex-col gap-4">

              {/* Email — destacado */}
              <a
                href="mailto:brianheredia200309@gmail.com"
                className={`group flex items-center gap-4 p-5 gradient-accent rounded-xl hover:opacity-90 hover:scale-[1.02] transition-all duration-200 anim-fade-up anim-delay-150 ${cardVisible ? 'is-visible' : ''}`}
              >
                <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-white/70 mb-0.5">Email</div>
                  <div className="text-white font-medium truncate">brianheredia200309@gmail.com</div>
                </div>
                <span className="text-white/60 group-hover:translate-x-1 transition-transform">→</span>
              </a>

              {/* Social links */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-5 project-card rounded-xl anim-slide-left anim-delay-250 ${cardVisible ? 'is-visible' : ''}`}
                >
                  <div className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 mb-0.5">LinkedIn</div>
                    <div className="text-white text-sm font-medium">Ver perfil</div>
                  </div>
                </a>

                <a
                  href="https://github.com/brian-h2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 p-5 project-card rounded-xl anim-slide-right anim-delay-250 ${cardVisible ? 'is-visible' : ''}`}
                >
                  <div className="w-10 h-10 bg-white/10 border border-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Github className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 mb-0.5">GitHub</div>
                    <div className="text-white text-sm font-medium">Ver proyectos</div>
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
