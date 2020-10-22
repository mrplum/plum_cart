import React, { createContext } from "react";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const [state, setState] = React.useState({
    locale: navigator.language.startsWith("es", 0) ? "es-AR" : "en-US",
    toggleLocale: (l) => {
      console.log(l);
      setState({
        ...state,
        locale: l,
      });
    },
  });

  return (
    <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
  );
};

let AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
