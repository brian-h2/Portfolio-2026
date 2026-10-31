import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

const socials = [
  { label: 'Email', href: 'mailto:brianheredia200309@gmail.com', Icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brian-heredia-4a7a12240/', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/brian-h2', Icon: Github },
];

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer>
      {/* Red band */}
      <div className="bg-brand px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-display text-3xl font-bold uppercase tracking-wide text-white">Brian.</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label={t.backToTop}
            title={t.backToTop}
            className="w-12 h-12 bg-white flex items-center justify-center text-ink hover:bg-ink hover:text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="px-6 md:px-8 py-14">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-medium text-white max-w-md leading-tight">{t.thanks}</h2>
            <p className="mt-3 text-sm text-neutral-400">{t.copyright}</p>
          </div>
          <div className="flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand hover:border-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
