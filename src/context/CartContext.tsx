import React, { createContext, useReducer } from "react";
import { defaultCartValue } from "./defaultValues";
import IProductShoppingCart from "../components/IProductShoppingCart";

interface ICart {
  list: Array<IProductShoppingCart>;
  quantity: number;
}

interface IAction {
  type: "addProduct" | "deleteProduct" | "cleanCart" | "changeQuantity";
  payload: IProductShoppingCart;
}

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

const deleteProduct = (
  list: Array<IProductShoppingCart>,
  id: string
): { newList: Array<IProductShoppingCart>; qtyDeleted: number } => {
  const newList = list.filter((p) => p.id !== id);
  const deleted = list.find((p) => p.id === id);
  localStorage.setItem("shoppingcart", JSON.stringify(newList));
  return { newList: newList, qtyDeleted: deleted?.quantity || 0 };
};

const changeQuantity = (
  id: string,
  quantity: number,
  list: Array<IProductShoppingCart>
): { newList: Array<IProductShoppingCart>; oldQty: number } => {
  let oldQty: number;
  oldQty = quantity;
  list.forEach((element) => {
    if (element.id === id) {
      oldQty = element.quantity;
      element.quantity = quantity;
    }
  });
  localStorage.setItem("shoppingcart", JSON.stringify(list));
  return { newList: list, oldQty: oldQty };
};
const reducer = (cart: ICart, action: IAction) => {
  switch (action.type) {
    case "addProduct": {
      const qtyAdded = action.payload.quantity;
      const newList = addProduct(cart.list, action.payload);
      return { list: newList, quantity: cart.quantity + qtyAdded };
    }
    case "deleteProduct": {
      const { newList, qtyDeleted } = deleteProduct(
        cart.list,
        action.payload.id
      );
      return { list: newList, quantity: cart.quantity - qtyDeleted };
    }
    case "cleanCart": {
      localStorage.setItem("shoppingcart", "[]");
      return { list: [], quantity: 0 };
    }
    case "changeQuantity": {
      const { newList, oldQty } = changeQuantity(
        action.payload.id,
        action.payload.quantity,
        cart.list
      );
      return {
        list: newList,
        quantity: cart.quantity - oldQty + action.payload.quantity,
      };
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
  const list = JSON.parse(localStorage.getItem("shoppingcart") || "{}");
  const quantity =
    list && list.length !== 0
      ? list
          .map((item: IProductShoppingCart) => item.quantity)
          .reduce((prev: number, next: number) => prev + next)
      : 0;

  const [cart, dispatch] = useReducer(reducer, {
    list: list,
    quantity: quantity,
  });

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartContextProvider };
