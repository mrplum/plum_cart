import React from "react";
import Main from "./components/Main";
import data from "./data.json";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Header from "./components/Header/Header";
import { IntlProvider } from "react-intl";
import messages from "./languages/messages";
import { LOCALES } from "./languages/locales";

interface IProps {}

interface IState {
  card: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      card: true,
    };
  }

  toggleViewHandler = (ev: React.ChangeEvent<HTMLInputElement>): void => {
    ev.preventDefault();
    this.setState((state) => ({
      card: !state.card,
    }));
  };

  render(): JSX.Element {
    const locale = navigator.language;
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Router>
          <Header />
          <Route exact path="/">
            <Main
              status={this.state.card}
              toggleViewHandler={this.toggleViewHandler}
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
  }
}

export default App;
