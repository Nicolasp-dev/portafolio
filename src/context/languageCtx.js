import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en-US.json";
import Spanish from "../lang/es-ES.json";

const languageCtx = React.createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(English);
  const [locale, setLocale] = useState("es-Es");

  const languageHandler = (language) => {
    if (language === "es-ES") {
      setLanguage(Spanish);
      setLocale(language);
    }
    if (language === "en-US") {
      setLanguage(English);
      setLocale(language);
    }
  };

  return (
    <languageCtx.Provider value={{ languageHandler }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </languageCtx.Provider>
  );
};

export { LanguageProvider, languageCtx };
