import { Bot, Briefcase, ExternalLink, Github, Package, Scissors, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { SectionHeading } from './SectionHeading';

const projectIcons = [Bot, Briefcase, Scissors, Package, Wrench];
const projectTiles = ['bg-[#f6e6d8]', 'bg-[#ffc8bd]', 'bg-[#e8edf6]', 'bg-[#c9efa9]', 'bg-[#b9c8ff]'];
const projectImages = ['/projects/explain-my-code.jpg', '/projects/rrhh.jpg', null, null, null];
const projectSpans = [
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2 lg:col-start-2',
  'md:col-span-2 lg:col-span-2',
];
const projectStacks = [
  ['Node.js', 'Express', 'OpenAI API', 'SQL Lite', 'WebSockets', 'React', 'Next.js', 'TypeScript'],
  ['React', 'TailwindCSS', 'JavaScript', 'Next.js', 'TypeScript', 'Railway', 'MongoDB'],
  ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS', 'React'],
  ['Node.js', 'Express', 'MongoDB', 'React', 'REST API'],
  ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'React'],
];
const projectLinks = [
  { demo: 'https://explain-my-code-green.vercel.app/#', code: 'https://github.com/brian-h2/ExplainMyCode' },
  { demo: 'https://ceciliamentarrhh.com/', code: 'https://github.com/brian-h2/Aplicacion-RRHH' },
  { demo: 'https://barber-saa-s-one.vercel.app/', code: 'https://github.com/fmbpartnersorg/BarberSaaS' },
  { demo: 'https://sistema-modular-de-ventas-avaporu.vercel.app/login', code: 'https://github.com/brian-h2/Sistema-modular-de-ventas-AVAPORU' },
  { demo: 'https://mecanicsaas.vercel.app/', code: 'https://github.com/fmbpartnersorg/mecanicsaas' },
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
        className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6"
      >
        {t.items.map((project, index) => {
          const Icon = projectIcons[index];
          const image = projectImages[index];
          return (
            <article
              key={project.name}
              className={`group flex flex-col anim-fade-up ${projectSpans[index]} ${index % 3 === 1 ? 'anim-delay-150' : index % 3 === 2 ? 'anim-delay-300' : ''} ${gridVisible ? 'is-visible' : ''}`}
            >
              {/* Pastel tile */}
              <div className={`${projectTiles[index]} flex items-center justify-center p-6`}>
                <div className="w-full max-w-md overflow-hidden rounded-sm bg-white shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center gap-1.5 bg-neutral-200 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-brand" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                    <span className="w-2 h-2 rounded-full bg-neutral-400" />
                  </div>
                  {image ? (
                    <img src={image} alt={project.name} loading="lazy" className="w-full aspect-video object-cover object-top" />
                  ) : (
                    <div className="w-full aspect-video bg-ink flex flex-col items-center justify-center gap-3">
                      <Icon className="w-10 h-10 text-brand-soft" />
                      <span className="font-display text-2xl uppercase tracking-wide text-white">{project.name}</span>
                    </div>
                  )}
                </div>
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
                  <a
                    href={projectLinks[index].code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 font-display text-sm uppercase tracking-widest text-neutral-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {t.code}
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
