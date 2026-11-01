import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

const projectTiles = ['bg-[#f6e6d8]', 'bg-[#ffc8bd]', 'bg-[#c9efa9]', 'bg-[#b9c8ff]'];
const projectImages = ['/projects/explain-my-code.jpg', '/projects/rrhh.jpg', '/projects/terruno-web.jpg', '/projects/posada.jpg'];
const projectPanels: (string | null)[] = [null, null, '/projects/terruno-admin.jpg', null];
const projectStacks = [
  ['Node.js', 'Express', 'OpenAI API', 'SQLite', 'WebSockets', 'React', 'Next.js', 'TypeScript'],
  ['React', 'TailwindCSS', 'JavaScript', 'Next.js', 'TypeScript', 'Railway', 'MongoDB'],
  ['Next.js', 'React', 'TailwindCSS', 'Node.js'],
  ['Next.js', 'React', 'TailwindCSS', 'Node.js'],
];
const projectLinks: { demo: string; code?: string }[] = [
  { demo: 'https://explain-my-code-green.vercel.app/#', code: 'https://github.com/brian-h2/ExplainMyCode' },
  { demo: 'https://ceciliamentarrhh.com/', code: 'https://github.com/brian-h2/Aplicacion-RRHH' },
  { demo: 'https://elterrunoalmacen.com.ar/' },
  { demo: 'https://posada-los-platanos-teal.vercel.app/' },
];

export function Projects() {
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <section id="projects" className="relative py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <SectionHeading title={t.heading} subtitle={t.subtitle} />

      {/* Grid */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {t.items.map((project, index) => {
          const panel = projectPanels[index];
          const codeLink = projectLinks[index].code;
          return (
            <article
              key={project.name}
              className={`group flex flex-col anim-fade-up ${index % 2 === 1 ? 'anim-delay-150' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Pastel tile */}
              <div className={`${projectTiles[index]} relative flex items-center justify-center p-6`}>
                <div className="w-full max-w-md overflow-hidden rounded-sm bg-white shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center gap-1.5 bg-neutral-200 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-brand" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                  <img src={projectImages[index]} alt={project.name} loading="lazy" className="w-full aspect-video object-cover object-top" />
                </div>
                {panel && (
                  <img
                    src={panel}
                    alt={`${project.name} admin`}
                    loading="lazy"
                    className="absolute right-3 bottom-3 w-1/2 rounded-sm shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:-translate-y-1"
                  />
                )}
              </div>

              {/* Caption */}
              <div className="flex-1 flex flex-col gap-4 p-6 bg-coal">
                <h3 className="text-2xl font-medium text-white">{project.name}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{project.description}</p>
                <p className="text-sm text-neutral-400 leading-relaxed border-l-2 border-brand pl-3">{project.impact}</p>
                <div className="flex flex-wrap gap-1.5">
                  {projectStacks[index].map((tech) => (
                    <span key={tech} className="chip">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto flex gap-6 pt-2">
                  <a
                    href={projectLinks[index].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-display text-sm uppercase tracking-widest text-brand-soft hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t.demo}
                  </a>
                  {codeLink && (
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-display text-sm uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t.code}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
