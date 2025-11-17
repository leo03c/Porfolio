"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type Language = "es" | "en";

type Translation = {
  name: string;
  role: string;
  heroPitch: string;
  projectsTitle: string;
  contactTitle: string;
  viewRepo: string;
  changeLang: string;
  downloadCV: string;
  about: string;
  seeMore: string;
};

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language | ((prev: Language) => Language)) => void;
  t: Translation;
};

const translations: Record<Language, Translation> = {
  es: {
    name: "Leonardo Castillo Díaz",
    role: "Desarrollador Fullstack • React Native (Android)",
    heroPitch: "Construyo aplicaciones móviles y web con buen diseño y código limpio.",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    viewRepo: "Ver código",
    changeLang: "EN",
    downloadCV: "Descargar CV",
    about: "Sobre mí",
    seeMore: "Ver más",
  },
  en: {
    name: "Leonardo Castillo Díaz",
    role: "Fullstack Developer • React Native (Android)",
    heroPitch: "I build mobile and web apps with clean code and clear UX.",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    viewRepo: "View repo",
    changeLang: "ES",
    downloadCV: "Download CV",
    about: "About me",
    seeMore: "See more",
  },
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);
const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }): JSX.Element {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "es" || stored === "en") {
        setLang(stored);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] ?? translations.es,
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}