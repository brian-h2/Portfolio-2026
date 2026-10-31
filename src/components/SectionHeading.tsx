import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  dark?: boolean;
}

export function SectionHeading({ title, subtitle, dark = false }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative mb-16 text-center anim-fade-up ${isVisible ? 'is-visible' : ''}`}
    >
      <span
        aria-hidden="true"
        className={`ghost-word left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${dark ? 'ghost-word-dark' : ''}`}
      >
        {title}
      </span>
      <h2 className={`relative text-4xl md:text-6xl font-semibold ${dark ? 'text-ink' : 'text-white'}`}>
        {title}<span className="text-brand">.</span>
      </h2>
      {subtitle && (
        <p className={`relative mt-4 ${dark ? 'text-neutral-600' : 'text-neutral-400'}`}>{subtitle}</p>
      )}
    </div>
  );
}
