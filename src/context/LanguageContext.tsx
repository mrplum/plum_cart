import React, { createContext, useState } from "react";
import { defaultLanguageValue } from "./defaultValues.tsx";

const LanguageContext = createContext(defaultLanguageValue);

const LanguageContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const getLanguages = () =>
    navigator.language.startsWith("es", 0) ? "es-AR" : "en-US";
  const languages = ["en-US", "es-AR"];
  const [state, setState] = useState({
    languages: languages,
    locale: getLanguages(),
    toggleLocale: (locale: string) => {
      setState({
        ...state,
        locale: locale,
      });
    },
  });

  return (
    <LanguageContext.Provider value={state}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageContextProvider };
