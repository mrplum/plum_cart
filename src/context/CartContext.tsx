import React, { createContext, useReducer } from "react";
import { defaultCartValue } from "./defaultValues.tsx";

const CartContext = createContext(defaultCartValue);

const reducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      const newP = action.payload;
      const newQty = action.payload.qty;
      let newList = [];
      if (state.list === null) {
        newList.push(newP);
      } else {
        const element = state.list.find((p) => p.id === newP.id);
        if (element) {
          newList = state.list.filter((p) => p.id !== newP.id);
          newP.qty = newP.qty + parseInt(element.qty, 10);
          newP.price = newP.price + parseInt(element.price, 10);
          newList.push(newP);
        } else {
          newList = state.list;
          newList.push(newP);
        }
      }
      localStorage.setItem("shoppingcart", JSON.stringify(newList));
      return { list: newList, quantity: state.quantity + newQty };
    }
    case "deleteProduct": {
      const id = action.payload.id;
      const list = state.list;
      const newList = list.filter((p) => p.id !== id);
      const deleted = list.find((p) => p.id === id);
      localStorage.setItem("shoppingcart", JSON.stringify(newList));
      return { list: newList, quantity: state.quantity - deleted.qty };
    }
    default:
      throw new Error();
  }
};

const CartContextProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const list = JSON.parse(localStorage.getItem("shoppingcart"));
  const quantity =
    list.length !== 0
      ? list.map((item) => item.qty).reduce((prev, next) => prev + next)
      : 0;

  const [state, dispatch] = useReducer(reducer, {
    list: list,
    quantity: quantity,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
