import { Download } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg text-white">Brian</span>
          <span className="text-neutral-300">•</span>
          <span className="text-white text-sm text-slate-50">Full Stack & AI Developer</span>
        </div>

        <nav className="hidden md:flex items-center gap-1 bg-neutral-100/80 rounded-2xl p-1.5">
          <button
            onClick={() => scrollToSection('about')}
            className="text-sm text-neutral-800 hover:text-neutral-900 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200"
          >
            Sobre mí
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-sm text-neutral-800 hover:text-neutral-900 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200"
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-sm text-neutral-800 hover:text-neutral-900 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-sm text-neutral-800 hover:text-neutral-900 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200"
          >
            Experiencia
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-sm text-neutral-800 hover:text-neutral-900 hover:bg-white px-4 py-2 rounded-xl transition-all duration-200"
          >
            Contacto
          </button>
        </nav>

        <button className="flex items-center gap-2 px-5 py-2.5 gradient-accent text-white text-sm rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-200">
          <Download className="w-4 h-4" />
          Descargar CV
        </button>
      </div>
    </header>
  );
}
