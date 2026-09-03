"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { t, type Lang, type TranslationKey } from "./i18n";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  translate: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("esa-lang") as Lang | null;
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem("esa-lang", lang);
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const translate = useCallback(
    (key: TranslationKey) => t(lang, key),
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, translate }),
    [lang, setLang, translate],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
