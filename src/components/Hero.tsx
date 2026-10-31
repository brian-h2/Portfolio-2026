import { Download, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const socials = [
  { label: 'GitHub', href: 'https://github.com/brian-h2' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brian-heredia-4a7a12240/' },
];

export function Hero() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });

  const { lang } = useLanguage();
  const t = translations[lang].hero;

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">

      {/* Portrait */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-30 lg:opacity-100">
        <img src="/brian.jpg" alt="Brian Heredia" className="hero-portrait w-full h-full object-cover object-top" />
      </div>

      {/* Social rail */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 rotate-180 [writing-mode:vertical-rl] hidden 2xl:flex gap-10">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
          >
            {social.label}
          </a>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-8">
        <div className="max-w-2xl">

          {/* Title */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`anim-fade-up ${titleVisible ? 'is-visible' : ''}`}
          >
            <div className="dash" />
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.08] text-white">
              {t.greeting} <span className="text-outline">{t.name}</span>
              <br />
              {t.title1}
              <br />
              {t.title2}<span className="text-brand">.</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 max-w-xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div
            ref={ctaRef as React.RefObject<HTMLDivElement>}
            className={`mt-10 flex flex-wrap gap-4 anim-fade-up anim-delay-150 ${ctaVisible ? 'is-visible' : ''}`}
          >
            <button onClick={scrollToProjects} className="btn-outline">
              {t.viewProjects}
              <ArrowDown className="w-4 h-4" />
            </button>
            <button onClick={() => window.open('/cv.pdf', '_blank')} className="btn-brand">
              <Download className="w-4 h-4" />
              {t.downloadCV}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
