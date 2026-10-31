import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setWidth(scrolled * 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
    />
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-ink relative">
        <ScrollProgress />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}
