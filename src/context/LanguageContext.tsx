import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
