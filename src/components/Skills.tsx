import { Cloud, Database, Monitor, Server, Sparkles, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

const groupIcons = [Server, Sparkles, Monitor, Cloud, Database, Wrench];

export function Skills() {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.heading} subtitle={t.subtitle} />

        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
        >
          {t.groups.map((group, index) => {
            const Icon = groupIcons[index];
            return (
              <div
                key={group.label}
                className={`p-6 lg:p-8 anim-fade-up ${index % 3 === 1 ? 'anim-delay-150' : index % 3 === 2 ? 'anim-delay-300' : ''} ${cardsVisible ? 'is-visible' : ''}`}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white">{group.label}</h3>
                    <p className="text-sm text-neutral-400">{group.subLabel}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
