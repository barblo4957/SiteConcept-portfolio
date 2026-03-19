"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import plMessages from "../../messages/pl.json";
import enMessages from "../../messages/en.json";

type Locale = "pl" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const localeMessages: Record<Locale, typeof plMessages> = {
  pl: plMessages,
  en: enMessages,
};

export function IntlProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pl");
  const messages = localeMessages[locale];

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleSwitcher() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocaleSwitcher must be used within IntlProvider");
  }

  return context;
}
