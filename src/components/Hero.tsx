import { Download, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Hero() {
  const { ref: badgeRef, isVisible: badgeVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: avatarRef, isVisible: avatarVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-8 relative overflow-hidden">

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left — Text */}
          <div className="flex-1 space-y-8">

            {/* Status badge */}
            <div
              ref={badgeRef as React.RefObject<HTMLDivElement>}
              className={`anim-fade-up ${badgeVisible ? 'is-visible' : ''}`}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">
                <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                Disponible para nuevas oportunidades
              </span>
            </div>

            {/* Title */}
            <div
              ref={titleRef as React.RefObject<HTMLDivElement>}
              className={`space-y-4 anim-fade-up anim-delay-150 ${titleVisible ? 'is-visible' : ''}`}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Desarrollador
                <br />
                <span className="text-accent">Full Stack</span>
                <br />
                <span className="text-neutral-400 text-4xl md:text-5xl">& IA </span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
                Construyo productos digitales con React, Node.js, TypeScript e integración de IA.
                Enfocado en arquitectura limpia y resultados que cumplen con las expectactivas.
              </p>
            </div>

            {/* CTAs */}
            <div
              ref={ctaRef as React.RefObject<HTMLDivElement>}
              className={`flex flex-wrap gap-4 anim-fade-up anim-delay-300 ${ctaVisible ? 'is-visible' : ''}`}
            >
              <button
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="flex items-center gap-2 px-6 py-3 gradient-accent text-white font-medium rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 glow-accent"
              >
                <Download className="w-4 h-4" />
                Descargar CV
              </button>
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 border border-white/15 text-neutral-300 font-medium rounded-xl hover:border-teal-500/50 hover:text-teal-400 transition-all duration-200"
              >
                Ver proyectos
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Terminal decoration */}
            <div
              className={`anim-fade-up anim-delay-400 ${ctaVisible ? 'is-visible' : ''} hidden md:block`}
            >
              <div className="inline-flex flex-col gap-1 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] font-mono text-sm">
                <span className="terminal-line text-neutral-400">Next.JS, React · TypeScript · Node.js</span>
                <span className="terminal-line text-neutral-400">MongoDB · SQL Server · Docker</span>
                <span className="terminal-line text-neutral-400">
                  OpenAI API · Azure · AWS
                  <span className="cursor-blink" />
                </span>
              </div>
            </div>
          </div>

          {/* Right — Avatar */}
          <div
            ref={avatarRef as React.RefObject<HTMLDivElement>}
            className={`relative flex-shrink-0 anim-scale-in anim-delay-200 ${avatarVisible ? 'is-visible' : ''}`}
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 blob-shape bg-gradient-to-br from-teal-500/20 to-violet-600/20 blur-2xl scale-110" />

            {/* Avatar blob */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 blob-shape bg-gradient-to-br from-[#0f2027] via-[#1a3a4a] to-[#0f2027] border border-teal-500/20 flex items-center justify-center overflow-hidden">
              {/* Initials fallback */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-7xl lg:text-8xl font-bold text-accent select-none">B</span>
                <span className="text-sm text-neutral-500 tracking-widest uppercase">Brian</span>
              </div>
              {/* Subtle grid inside */}
              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(0,212,170,0.15) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              />
            </div>

            {/* Floating badge — stack */}
            <div className="absolute -bottom-4 -left-6 px-4 py-2 rounded-xl bg-[#0a0f1e] border border-white/10 shadow-xl">
              <span className="text-xs text-neutral-400">Full Stack</span>
              <div className="text-sm font-semibold text-white">Next.JS + React + Node.js</div>
            </div>

            {/* Floating badge — AI */}
            <div className="absolute -top-4 -right-6 px-4 py-2 rounded-xl bg-[#0a0f1e] border border-teal-500/30 shadow-xl">
              <span className="text-xs text-teal-400">AI Integration</span>
              <div className="text-sm font-semibold text-white">OpenAI · Azure</div>
            </div>

            {/* Floating badge — .NET */}
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#0a0f1e] border border-violet-500/30 shadow-xl">
              <span className="text-xs text-violet-400">.Microsoft</span>
              <div className="text-sm font-semibold text-white">.NET + ASP.NET Core</div>
            </div>

            {/* Floating badge — AWS */}
            <div className="absolute bottom-12 -right-8 px-4 py-2 rounded-xl bg-[#0a0f1e] border border-orange-500/30 shadow-xl">
              <span className="text-xs text-orange-400">Cloud</span>
              <div className="text-sm font-semibold text-white">AWS</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
