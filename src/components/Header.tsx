import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const t = translations[lang].header;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-ink/95 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between gap-4">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display text-2xl font-bold uppercase tracking-wide text-white"
        >
          Brian<span className="text-brand">.</span>
        </button>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display text-sm uppercase tracking-widest text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            className="h-10 px-3 border border-white/20 font-display text-sm tracking-widest text-neutral-300 hover:text-white hover:border-white transition-colors"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          {/* CTA */}
          <button
            onClick={() => window.open('/cv.pdf', '_blank')}
            className="h-10 px-4 flex items-center gap-2 bg-brand font-display text-sm uppercase tracking-widest text-white hover:bg-brand-soft transition-colors"
          >
            <Download className="w-4 h-4" />
            {t.cv}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t.menu}
            aria-expanded={menuOpen}
            className="lg:hidden h-10 w-10 flex items-center justify-center text-white"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden flex flex-col px-6 pb-4">
          {t.nav.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-3 text-left font-display uppercase tracking-widest text-neutral-300 hover:text-white border-t border-white/10"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
