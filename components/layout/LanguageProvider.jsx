'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { defaultLanguage, languageOptions, translations } from '@/i18n';

const STORAGE_KEY = 'horoscopes-love-language';

const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: () => {},
  translate: (path, fallback) => fallback ?? path,
  dictionary: translations[defaultLanguage],
  options: languageOptions
});

function getNestedValue(dictionary, pathSegments) {
  return pathSegments.reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return acc[key];
    }
    return undefined;
  }, dictionary);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) {
        return stored;
      }
    }
    return defaultLanguage;
  });

  useEffect(() => {
    if (language) {
      window.localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.setAttribute('lang', language);
    }
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations[defaultLanguage];
    const translate = (path, fallback) => {
      const segments = path.split('.');
      const found = getNestedValue(dictionary, segments);
      if (found === undefined || found === null) {
        return fallback ?? path;
      }
      return found;
    };

    return {
      language,
      setLanguage,
      translate,
      dictionary,
      options: languageOptions
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
