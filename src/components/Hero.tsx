import { ImageWithFallback } from './figma/ImageWithFallback';
import { Briefcase, Rocket, Layers } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-40 py-16 px-8 relative overflow-hidden">
      {/* Gradient Background Accent */}      
      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Text Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-indigo-700">Actualmente ejerciendo mi rol como programador en Traditum</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Desarrollador Full Stack orientado a soluciones reales 💻
              </h1>
              <p className="text-xl text-neutral-300 max-w-2xl leading-relaxed mx-auto">
                Experiencia con React, Typescript, Node.js, MongoDB, SQL Server, integración de IA y arquitectura escalable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-10">
              <div className="group p-7 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-14 shadow-2xl">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Experiencia</p>
                <p className="text-neutral-900">1/2 año de experiencia</p>
              </div>

              <div className="group p-7 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-14 shadow-2xl">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Producción</p>
                <p className="text-neutral-900">Proyectos reales en desarrollo constante</p>
              </div>

              <div className="group p-7 bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-14 shadow-2xl">
                <div className="w-12 h-12 mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-neutral-500 mb-2">Especialización</p>
                <p className="text-neutral-900">Sistemas modulares y microservicios</p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          {/* <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] blur-2xl opacity-20"></div>
            <div className="w-72 h-82 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
              <ImageWithFallback
                src={imagehero}
                alt="Brian - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
