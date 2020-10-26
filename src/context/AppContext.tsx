import React, { createContext } from "react";
import defaultValue from "./defaultValue.tsx";

const AppContext = createContext(defaultValue);

const AppContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const languages = ["en-US", "es-AR"];
  const [state, setState] = React.useState({
    languages: languages,
    locale: navigator.language.startsWith("es", 0) ? "es-AR" : "en-US",
    toggleLocale: (l: string) => {
      setState({
        ...state,
        locale: l,
      });
    },
  });

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
