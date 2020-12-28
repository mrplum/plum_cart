import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider, useIntl } from "react-intl";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Main from "./components/Main";
import { ProductSceneWithRouter } from "./components/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header";
import SearchPage from "./components/SearchPage";
import ShippingForm from "./components/ShippingForm";
import messages from "./languages/messages";
import { LOCALES } from "./languages/locales";
import { LanguageContext } from "./context";
import SuccessfulPurchase from "./components/SuccessfulPurchase/SuccessfulPurchase";

const theme = createMuiTheme({
  palette: {
    text: {
      primary: blue[600],
      secondary: blue[400],
      disabled: blue["A100"],
      hint: blue[100],
    },
    primary: {
      main: blue[600],
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
      <IntlProvider locale={locale} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
        <Router>
          <Header />

          <Route exact path="/">
            <Main status={state.card} toggleViewHandler={toggleViewHandler} />
          </Route>
          <Route exact path="/products/:id" render={ProductSceneWithRouter} />
          <Route path="/success">
            <SuccessfulPurchase />
          </Route>
          <Route exact path="/shoppingcart/">
            <ShoppingCart />
          </Route>
          <Route exact path="/shipping">
            <ShippingForm />
          </Route>
          <Route exact path="/search">
            <SearchPage status={state.card} toggleViewHandler={toggleViewHandler} />
          </Route>
        </Router>
      </IntlProvider>
    </MuiThemeProvider>
  );
};

export default App;
