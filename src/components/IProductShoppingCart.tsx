interface IProductShoppingCart {
  id: string;
  title: string;
  unit_price: number;
  quantity: number;
}

interface IProductActionPayload {
  id: string;
  title?: string;
  unit_price?: number;
  quantity?: number;
}

export default IProductShoppingCart;
export type { IProductShoppingCart, IProductActionPayload };
