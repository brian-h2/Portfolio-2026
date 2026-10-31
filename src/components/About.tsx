import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

export function About() {
  const { ref: ringRef, isVisible: ringVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  const { lang } = useLanguage();
  const t = translations[lang].about;
  const [mainStat, ...otherStats] = t.stats;

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-8 bg-coal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t.heading} subtitle={t.headline} />

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[auto_1fr] items-center gap-12 lg:gap-20">

          {/* Ring */}
          <div
            ref={ringRef as React.RefObject<HTMLDivElement>}
            className={`relative w-44 h-44 mx-auto anim-scale-in ${ringVisible ? 'is-visible' : ''}`}
          >
            <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90" aria-hidden="true">
              <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle cx="80" cy="80" r="72" fill="none" stroke="#d92b38" strokeWidth="4" strokeLinecap="round" strokeDasharray="340 453" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="font-display text-5xl font-bold text-white">{mainStat.value}</span>
              <span className="mt-1 text-xs leading-tight text-neutral-400">{mainStat.label}</span>
            </div>
          </div>

          {/* Text */}
          <div
            ref={textRef as React.RefObject<HTMLDivElement>}
            className={`space-y-4 anim-slide-right anim-delay-150 ${textVisible ? 'is-visible' : ''}`}
          >
            <p className="text-neutral-300 leading-relaxed">
              {t.p1}{' '}
              <span className="text-brand-soft font-medium">{t.p1company}</span>
              {t.p1end}
            </p>
            <p className="text-neutral-400 leading-relaxed">{t.p2}</p>
            <div className="flex gap-10 pt-4">
              {otherStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
