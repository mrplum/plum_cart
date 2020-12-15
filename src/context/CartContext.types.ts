import { IProductShoppingCart, IProductActionPayload}  from "../components/IProductShoppingCart";

interface Cart {
  list: Array<IProductShoppingCart>;
  quantity: number;
}

interface CartAction {
  type: "addProduct" | "deleteProduct" | "cleanCart" | "changeQuantity";
  payload?: IProductActionPayload;
}

interface ICartContext {
  cart: Cart,
  dispatch({type, payload}: CartAction): void,
}

export type { Cart, CartAction, ICartContext };
