import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function Education() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].education;

  return (
    <section id="education" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <span aria-hidden="true" className="ghost-word left-0 top-16">{t.heading}</span>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">

        {/* Heading + languages */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`anim-slide-left ${headingVisible ? 'is-visible' : ''}`}
        >
          <div className="dash" />
          <h2 className="text-4xl md:text-6xl font-semibold text-white">
            {t.heading}<span className="text-brand">.</span>
          </h2>
          <p className="mt-4 text-neutral-400">{t.subtitle}</p>

          <p className="mt-10 mb-3 font-display text-sm uppercase tracking-widest text-neutral-300">{t.languagesLabel}</p>
          <div className="flex flex-wrap gap-3">
            {t.languages.map((language, index) => (
              <span
                key={language.name}
                className={`px-5 py-2.5 border-2 font-display text-sm uppercase tracking-widest text-white ${index === 0 ? 'border-white' : 'border-brand bg-brand'}`}
              >
                {language.name}: {language.level}
              </span>
            ))}
          </div>
        </div>

        {/* Studies */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12"
        >
          {t.items.map((item, index) => (
            <div
              key={item.title}
              className={`anim-fade-up ${index % 2 === 1 ? 'anim-delay-150' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              <p className="font-display uppercase tracking-widest text-sm text-brand-soft mb-2">{item.year}</p>
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              {'institution' in item && (
                <p className="mt-1 text-sm text-neutral-300">{item.institution}</p>
              )}
              {'note' in item && (
                <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{item.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
