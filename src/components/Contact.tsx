import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Conectemos</h2>
            <p className="text-lg text-neutral-600">
              ¿Interesado en trabajar juntos? Estoy disponible para nuevas oportunidades
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-neutral-200 p-12 shadow-xl">
            <div className="flex flex-col gap-6">
              <a
                href="mailto:brian@example.com"
                className="group flex items-center gap-4 p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-sm text-white/80 mb-1">Email</div>
                  <div className="text-lg">brian@example.com</div>
                </div>
                <div className="text-white/80 group-hover:translate-x-1 transition-transform">→</div>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://linkedin.com/in/brian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Linkedin className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-neutral-500 mb-1">LinkedIn</div>
                    <div className="text-neutral-900">Ver perfil</div>
                  </div>
                </a>

                <a
                  href="https://github.com/brian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:border-indigo-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Github className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-neutral-500 mb-1">GitHub</div>
                    <div className="text-neutral-900">Ver proyectos</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
