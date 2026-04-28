import { useScrollAnimation } from '../hooks/useScrollAnimation';

// SVG icons inline para no depender de librerías extra
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

const methodSkills = [
  'Agile', 'Jira',
  'Comunicación efectiva', 'Resolución de problemas',
  'Trabajo autónomo', 'Colaboración en equipo',
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

  return (
    <section id="skills" className="py-32 px-8 section-alt">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 text-center max-w-3xl mx-auto anim-fade-up ${headingVisible ? 'is-visible' : ''}`}
        >
          <h2 className="mb-3 text-5xl font-bold text-white">Skills</h2>
          <p className="text-neutral-400">Stack técnico y competencias profesionales</p>
        </div>

        {/* Bento grid */}
        <div
          ref={cardsRef as React.RefObject<HTMLDivElement>}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {/* Core — ocupa 2 columnas en lg */}
          <div className={`lg:col-span-2 skill-tile rounded-2xl p-8 anim-slide-left ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center text-lg">⚡</div>
              <div>
                <h3 className="text-white text-lg font-semibold">Core Stack</h3>
                <p className="text-neutral-500 text-sm">Tecnologías principales</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>

          {/* DevOps */}
          <div className={`skill-tile rounded-2xl p-8 anim-slide-right ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-lg">🛠️</div>
              <div>
                <h3 className="text-white text-lg font-semibold">DevOps & Tools</h3>
                <p className="text-neutral-500 text-sm">Infraestructura y prácticas</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {devOpsSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>

          {/* Soft skills — full width */}
          <div className={`lg:col-span-3 skill-tile rounded-2xl p-8 anim-fade-up anim-delay-150 ${cardsVisible ? 'is-visible' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-lg">💡</div>
              <div>
                <h3 className="text-white text-lg font-semibold">Soft Skills & Metodologías</h3>
                <p className="text-neutral-500 text-sm">Competencias profesionales</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {methodSkills.map((s) => <TechBadge key={s} name={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
