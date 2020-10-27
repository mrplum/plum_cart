import React, { createContext, useState } from "react";
import defaultValue from "./defaultValue.tsx";

const AppContext = createContext(defaultValue);

const AppContextProvider = ({
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

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
