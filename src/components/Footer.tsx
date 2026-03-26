export function Footer() {
  return (
    <footer className="py-12 px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white">B</span>
            </div>
            <div>
              <div className="text-sm text-neutral-900">Brian</div>
              <div className="text-xs text-neutral-500">Full Stack & AI Developer</div>
            </div>
          </div>

          <p className="text-sm text-neutral-500">
            © 2024 Brian. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
