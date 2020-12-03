import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  LanguageContextProvider,
  CartContextProvider,
  UserContextProvider,
} from "./context";

ReactDOM.render(
  <LanguageContextProvider>
    <UserContextProvider>
      <CartContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartContextProvider>
    </UserContextProvider>
  </LanguageContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
