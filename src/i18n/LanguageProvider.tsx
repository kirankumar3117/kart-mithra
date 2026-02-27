"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { en, type Translations } from "./en";
import { te } from "./te";
import { hi } from "./hi";

export type Locale = "en" | "te" | "hi";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  te: "తె",
  hi: "हि",
};

export const localeFullNames: Record<Locale, string> = {
  en: "English",
  te: "తెలుగు",
  hi: "हिंदी",
};

const dictionaries: Record<Locale, Translations> = { en, te, hi };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = dictionaries[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
