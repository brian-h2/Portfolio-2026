import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const icons: Record<string, string> = {
  'TypeScript': '#3178c6',
  'JavaScript': '#f7df1e',
  'React': '#61dafb',
  'Next.js': '#ffffff',
  'Node.js': '#68a063',
  'Express': '#ffffff',
  'MongoDB': '#47a248',
  'PostgreSQL': '#336791',
  'SQL Server': '#cc2927',
  '.NET': '#512bd4',
  'Docker': '#2496ed',
  'Azure': '#0078d4',
  'Git': '#f05032',
  'CI/CD': '#00d4aa',
  'Clean Arch': '#a855f7',
  'REST API': '#00d4aa',
  'OpenAI': '#ffffff',
  'Tailwind': '#06b6d4',
  'Agile': '#0052cc',
  'Jira': '#0052cc',
};

const coreSkills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js',
  'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'SQL Server', '.NET',
];

const devOpsSkills = [
  'Docker', 'Azure', 'Git', 'CI/CD', 'Clean Arch', 'REST API', 'OpenAI', 'Tailwind',
];

function TechBadge({ name }: { name: string }) {
  const color = icons[name] ?? '#94a3b8';
  return (
    <div className="tech-badge group">
      <span
        className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-200 group-hover:scale-125"
        style={{ backgroundColor: color }}
      />
      {name}
    </div>
  );
}

export function Skills() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-32 px-8 section-alt">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-3 text-5xl font-bold text-white">{t.heading}</h2>
          <p className="text-neutral-400">{t.subtitle}</p>
        </div>

        {/* Bento grid */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {/* Core — ocupa 2 columnas en lg */}
          <div className={`lg:col-span-2 skill-tile rounded-2xl p-8 anim-slide-left ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2L3 11h7l-1 7 8-9h-7l1-7z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">{t.coreLabel}</h3>
                <p className="text-neutral-500 text-sm">{t.coreSubLabel}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>

          {/* DevOps */}
          <div className={`skill-tile rounded-2xl p-8 anim-slide-right ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l.3-.3-3-3-.3.3zM9 11L3 17l1 1 6-6" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 5l2 2-8 8-3 1 1-3 8-8z" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">{t.devopsLabel}</h3>
                <p className="text-neutral-500 text-sm">{t.devopsSubLabel}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devOpsSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>

          {/* Soft skills — full width */}
          <div className={`lg:col-span-3 skill-tile rounded-2xl p-8 anim-fade-up anim-delay-150 ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a6 6 0 100 12 6 6 0 000-12zM7 10h6M10 7v6" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M10 2v1M10 17v1M2 10h1M17 10h1" stroke="#00d4aa" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white text-lg font-semibold">{t.softLabel}</h3>
                <p className="text-neutral-500 text-sm">{t.softSubLabel}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {t.methodSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
