import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

const experienceTags = [
  ['.NET', 'Node.js', 'Next.js', 'Microservices', 'REST API', 'Scrum', 'Azure DevOps'],
  ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vite', 'Node.js', 'Express'],
];

export function Experience() {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-8 bg-coal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.heading} subtitle={t.subtitle} />

        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {t.items.map((exp, index) => (
            <div
              key={exp.company}
              className={`anim-fade-up ${index === 1 ? 'anim-delay-150' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              <div aria-hidden="true" className="font-display text-7xl font-bold text-outline-brand mb-5">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-medium text-white">{exp.role}</h3>
              <div className="mt-1 mb-5 flex flex-wrap items-center gap-x-3 text-sm">
                <span className="text-brand-soft font-medium">{exp.company}</span>
                <span className="text-neutral-400">{exp.year}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-neutral-300 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 bg-brand flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {experienceTags[index].map((tag) => (
                  <span key={tag} className="chip">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
