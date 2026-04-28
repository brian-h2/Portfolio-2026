export function Footer() {
  return (
    <footer className="py-10 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 gradient-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div>
            <div className="text-sm text-white font-medium">Brian</div>
            <div className="text-xs text-neutral-500">Full Stack & AI Developer</div>
          </div>
        </div>
        <p className="text-sm text-neutral-600">
          © 2026 Brian. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
