import React, { createContext, useState } from "react";
import { defaultCartValue } from "./defaultValues.tsx";

const CartContext = createContext(defaultCartValue);

const CartContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const list = JSON.parse(localStorage.getItem("shoppingcart"));
  const [state, setState] = useState({
    list: list,
  });

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

const CartContextConsumer = CartContext.Consumer;

export { CartContext, CartContextProvider, CartContextConsumer };
