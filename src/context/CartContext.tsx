import React, { createContext, useReducer } from "react";
import { defaultCartValue } from "./defaultValues";
import IProductShoppingCart from "../components/IProductShoppingCart";

const CartContext = createContext(defaultCartValue);

const addProduct = (
  list: Array<IProductShoppingCart>,
  newP: IProductShoppingCart
): Array<IProductShoppingCart> => {
  let newList = [];
  if (list === null) {
    newList.push(newP);
  } else {
    const element = list.find((p) => p.id === newP.id);
    if (element) {
      newList = list.filter((p) => p.id !== newP.id);
      newP.quantity = newP.quantity + element.quantity;
      newList.push(newP);
    } else {
      newList = list;
      newList.push(newP);
    }
  }
  localStorage.setItem("shoppingcart", JSON.stringify(newList));
  return newList;
};

const deleteProduct = (list: Array<IProductShoppingCart>, id: string) => {
  const newList = list.filter((p) => p.id !== id);
  const deleted = list.find((p) => p.id === id);
  localStorage.setItem("shoppingcart", JSON.stringify(newList));
  return { newList: newList, qtyDeleted: deleted.quantity };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      const qtyAdded = action.payload.quantity;
      const newList = addProduct(state.list, action.payload);
      return { list: newList, quantity: state.quantity + qtyAdded };
    }
    case "deleteProduct": {
      const { newList, qtyDeleted } = deleteProduct(
        state.list,
        action.payload.id
      );
      return { list: newList, quantity: state.quantity - qtyDeleted };
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
    list && list.length !== 0
      ? list
          .map((item: IProductShoppingCart) => item.quantity)
          .reduce((prev: number, next: number) => prev + next)
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
