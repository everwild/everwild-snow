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

export function I18nProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    setLangState(initialLang);
    document.documentElement.lang = initialLang === "zh" ? "zh-CN" : "en";
    try {
      localStorage.setItem("esa-lang", initialLang);
    } catch {
      // Ignore browsers that block storage.
    }
    document.cookie = `esa-lang=${initialLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }, [initialLang]);

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
