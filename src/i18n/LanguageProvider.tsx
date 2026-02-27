"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
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

const TELUGU_STATES = ["Telangana", "Andhra Pradesh"];
const HINDI_STATES = [
  "Delhi",
  "Uttar Pradesh",
  "Bihar",
  "Rajasthan",
  "Madhya Pradesh",
  "Haryana",
  "Himachal Pradesh",
  "Uttarakhand",
  "Chhattisgarh",
  "Jharkhand",
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check local storage first
    const savedLocale = localStorage.getItem("kartmithra_locale") as Locale;
    if (savedLocale && ["en", "te", "hi"].includes(savedLocale)) {
      setLocaleState(savedLocale);
      setIsLoaded(true);
      return;
    }

    // Auto-detect based on location if no saved preference
    const detectLocationAndLanguage = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        const region = data.region;

        if (region) {
          if (TELUGU_STATES.includes(region)) {
            setLocaleState("te");
          } else if (HINDI_STATES.includes(region)) {
            setLocaleState("hi");
          }
        }
      } catch (error) {
        console.error("Failed to auto-detect location", error);
        // Fallback to English is handled by initial state
      } finally {
        setIsLoaded(true);
      }
    };

    detectLocationAndLanguage();
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("kartmithra_locale", newLocale);
  }, []);

  const t = dictionaries[locale];

  // Prevent hydration mismatch by returning a bare shell until state resolves
  // or handle normally since Next.js hydration allows simple wrapper
  if (!isLoaded) {
    return (
      <LanguageContext.Provider value={{ locale: "en", setLocale, t: en }}>
        <div style={{ visibility: "hidden" }}>{children}</div>
      </LanguageContext.Provider>
    );
  }

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

