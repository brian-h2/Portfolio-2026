import { Download } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-white font-semibold">Brian</span>
          <span className="text-neutral-600 hidden sm:inline">·</span>
          <span className="text-neutral-400 text-sm hidden sm:inline">Full Stack & AI</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Sobre mí', id: 'about' },
            { label: 'Proyectos', id: 'projects' },
            { label: 'Skills', id: 'skills' },
            { label: 'Experiencia', id: 'experience' },
            { label: 'Contacto', id: 'contact' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-neutral-400 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => window.open('/cv.pdf', '_blank')}
          className="flex items-center gap-2 px-4 py-2 gradient-accent text-white text-sm font-medium rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          <Download className="w-4 h-4" />
          CV
        </button>
      </div>
    </header>
  );
}
