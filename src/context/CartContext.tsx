import React, { createContext, useState } from "react";
import { defaultCartValue } from "./defaultValues.tsx";

const CartContext = createContext(defaultCartValue);

const CartContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const deleteProduct = (id: string): void => {
    const newList = state.list.filter((p) => p.id !== id);
    setState({
      ...state,
      list: newList,
    });
    localStorage.setItem("shoppingcart", JSON.stringify(newList));
  };

  const addProduct = (
    id: string,
    price: number,
    qty: number,
    message: string
  ): void => {
    const old = JSON.parse(localStorage.getItem("shoppingcart"));
    const newP = {
      id: id,
      price: price * qty,
      qty: qty,
    };
    let newList = [];
    if (old === null) {
      newList.push(newP);
    } else {
      const element = old.find((p) => p.id === newP.id);
      if (element) {
        newList = old.filter((p) => p.id !== newP.id);
        newP.qty = newP.qty + parseInt(element.qty, 10);
        newP.price = newP.price + parseInt(element.price, 10);
        newList.push(newP);
      } else {
        newList = old;
        newList.push(newP);
      }
    }
    setState({
      ...state,
      list: newList,
    });
    localStorage.setItem("shoppingcart", JSON.stringify(newList));
    alert(message);
  };

  const list = JSON.parse(localStorage.getItem("shoppingcart"));
  const [state, setState] = useState({
    list: list,
    deleteProduct: deleteProduct,
    addProduct: addProduct,
  });

  return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

//const CartContextConsumer = CartContext.Consumer;

export { CartContext, CartContextProvider };
