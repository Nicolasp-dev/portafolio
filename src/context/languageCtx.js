import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../lang/en-US.json";
import Spanish from "../lang/es-ES.json";
// Documents
import EsCv from "../CV_Nicolas_Frontend_Es.pdf";
import UsCv from "../CV_Nicolas_Frontend_En.pdf";

const languageCtx = React.createContext();

const LanguageProvider = ({ children }) => {
  const [CV, setCV] = useState(UsCv);
  const [language, setLanguage] = useState(English);
  const [locale, setLocale] = useState("es-Es");

  const languageHandler = (language) => {
    if (language === "es-ES") {
      setLanguage(Spanish);
      setLocale(language);
      setCV(EsCv);
    }
    if (language === "en-US") {
      setLanguage(English);
      setLocale(language);
      setCV(UsCv);
    }
  };

  return (
    <languageCtx.Provider value={{ CV, languageHandler }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </languageCtx.Provider>
  );
};

export { LanguageProvider, languageCtx };
