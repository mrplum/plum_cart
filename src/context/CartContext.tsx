import React, { createContext, useReducer } from "react";
import { defaultCartValue } from "./defaultValues";
import { IProductShoppingCart, IProductActionPayload } from "../components/IProductShoppingCart";
import { Cart, CartAction, ICartContext } from "./CartContext.types";

const CartContext = createContext<ICartContext>(defaultCartValue);

const addProduct = (
  list: Array<IProductShoppingCart>,
  payload: IProductActionPayload,
): Array<IProductShoppingCart> => {
  if (payload.quantity) {
    let newList = [] as IProductActionPayload[];
    if (list === null) {
      newList.push(payload);
    } else {
      const element = list.find((p) => p.id === payload.id);
      if (element) {
        newList = list.filter((p) => p.id !== payload.id);
        payload.quantity = payload.quantity + element.quantity;
        newList.push(payload);
      } else {
        newList = list;
        newList.push(payload);
      }
    }
    localStorage.setItem("shoppingcart", JSON.stringify(newList));

    return newList as IProductShoppingCart[];
  } else {
    throw new Error("Missing payload quantity");
  }
};

const deleteProduct = (
  list: Array<IProductShoppingCart>,
  id: string,
): { newList: Array<IProductShoppingCart>; qtyDeleted: number } => {
  const newList = list.filter((p) => p.id !== id);
  const deleted = list.find((p) => p.id === id);
  localStorage.setItem("shoppingcart", JSON.stringify(newList));
  return { newList: newList, qtyDeleted: deleted?.quantity || 0 };
};

const changeQuantity = (
  id: string,
  quantity: number,
  list: Array<IProductShoppingCart>,
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
const reducer = (cart: Cart, action: CartAction) => {
  switch (action.type) {
    case "addProduct": {
      if (action !== undefined && action.payload !== undefined && action.payload.quantity) {
        const qtyAdded = action.payload.quantity;
        const newList = addProduct(cart.list, action.payload);
        return { list: newList, quantity: cart.quantity + qtyAdded };
      } else {
        throw new Error("Missing action payload");
      }
    }
    case "deleteProduct": {
      if (action !== undefined && action.payload !== undefined) {
        const { newList, qtyDeleted } = deleteProduct(cart.list, action.payload.id);
        return { list: newList, quantity: cart.quantity - qtyDeleted };
      } else {
        throw new Error("Missing action payload");
      }
    }
    case "cleanCart": {
      localStorage.setItem("shoppingcart", "[]");
      return { list: [], quantity: 0 };
    }
    case "changeQuantity": {
      if (action !== undefined && action.payload !== undefined && action.payload.quantity) {
        const { newList, oldQty } = changeQuantity(
          action.payload.id,
          action.payload.quantity,
          cart.list,
        );
        return {
          list: newList,
          quantity: cart.quantity - oldQty + action.payload.quantity,
        };
      } else {
        throw new Error("Missing action payload");
      }
    }
    default:
      throw new Error();
  }
};

const CartContextProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const list = JSON.parse(localStorage.getItem("shoppingcart") || JSON.stringify([]));
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

  return <CartContext.Provider value={{ cart, dispatch }}>{children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
