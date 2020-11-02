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
import { AppContext } from "./context/index";
import Sidebar from "./components/Sidebar";

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
  const { locale } = useContext(AppContext);
  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale={LOCALES.ENGLISH}
    >
      <Router>
        <Header />
        <Sidebar />
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
  );
};

export default App;
