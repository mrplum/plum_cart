import React, { useContext, useState } from "react";
import Main from "./components/Main";
import data from "./data.json";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header";
import { IntlProvider } from "react-intl";
import messages from "./languages/messages";
import { LOCALES } from "./languages/locales";
import { LanguageContext } from "./context";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2286c3',
    },
    secondary: {
      main: green[500],
    },
  },
});

const App = (): JSX.Element => {
  const [state, setState] = useState<{ card: boolean }>({
    card: true,
  });

  const toggleViewHandler = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    ev.preventDefault();
    setState({
      card: !state.card,
    });
  };
  const { locale } = useContext(LanguageContext);
  return (
    <MuiThemeProvider theme={theme}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={LOCALES.ENGLISH}
      >
        <Router>
          <Header />

          <Route exact path="/">
            <Main
              status={state.card}
              toggleViewHandler={toggleViewHandler}
              data={data}
            />
          </Route>
          <Route
            exact
            path="/products/:id"
            render={withRouter(({ location }) => (
              <Product data={location.state.data} />
            ))}
          />
          <Route exact path="/shoppingcart/">
            <ShoppingCart />
          </Route>
        </Router>
      </IntlProvider>
    </MuiThemeProvider>
  );
};

export default App;
