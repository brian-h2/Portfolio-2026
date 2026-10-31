import { Mail, Linkedin, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

export function Contact() {
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation({ threshold: 0.1 });

  const { lang } = useLanguage();
  const t = translations[lang].contact;

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-8 bg-coal overflow-hidden">
      <div
        ref={cardRef as React.RefObject<HTMLDivElement>}
        className={`relative max-w-4xl mx-auto bg-white px-6 py-14 md:px-16 md:py-20 overflow-hidden shadow-2xl shadow-black/40 anim-scale-in ${cardVisible ? 'is-visible' : ''}`}
      >
        <SectionHeading title={t.heading} subtitle={t.subtitle} dark />

        <div className="relative flex flex-col gap-4">
          {/* Email */}
          <a
            href="mailto:brianheredia200309@gmail.com"
            className="group flex items-center gap-4 p-5 bg-brand text-white shadow-lg shadow-brand/30 hover:bg-ink transition-colors"
          >
            <Mail className="w-6 h-6 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-xs mb-0.5">Email</div>
              <div className="font-medium text-sm sm:text-base break-all">brianheredia200309@gmail.com</div>
            </div>
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://www.linkedin.com/in/brian-heredia-4a7a12240/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border-b-2 border-neutral-300 text-ink hover:border-brand transition-colors"
            >
              <Linkedin className="w-5 h-5 text-brand flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-600 mb-0.5">LinkedIn</div>
                <div className="text-sm font-medium">{t.viewProfile}</div>
              </div>
            </a>

            <a
              href="https://github.com/brian-h2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border-b-2 border-neutral-300 text-ink hover:border-brand transition-colors"
            >
              <Github className="w-5 h-5 text-brand flex-shrink-0" />
              <div>
                <div className="text-xs text-neutral-600 mb-0.5">GitHub</div>
                <div className="text-sm font-medium">{t.viewProjects}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
