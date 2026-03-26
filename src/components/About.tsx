export function About() {
  return (
    <section id="about" className="py-32 px-8 relative overflow-hidden ">
      {/* Gradient Background */}
      <div className="absolute"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-14 shadow-2xl">
            <div className="mb-8">
              <h2 className="mb-3">Sobre mí</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Actualmente participo activamente en proyectos donde mi objetivo es desarrollar soluciones tecnologicas que no solo cumplan con las expectativas, sino que las superen. Desde 2022 que me 
                encuentro inmerso en el mundo del software, donde gran esfuerzo y dedicacion fui y soy empleado en Traditum, donde aplico mis conocimientos en proyectos reales y en 
                mis tiempos libres le dedico a desarrollos personales y clientes freelance. 
              </p>
              <p className="text-lg leading-relaxed">
                Busco continuamente nuevos desafíos que me permitan crecer profesionalmente mientras aporto resultados 
                concretos y medibles en cada proyecto.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="text-3xl mb-2">1+</div>
                <div className="text-sm text-neutral-600">Años de experiencia</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="text-3xl mb-2">5+</div>
                <div className="text-sm text-neutral-600">Proyectos completados</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="text-3xl mb-2">100%</div>
                <div className="text-sm text-neutral-600">Comprometido</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
