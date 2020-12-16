interface IProductShoppingCart {
  id: string;
  image: string;
  title: string;
  unit_price: number;
  quantity: number;
}

interface IProductActionPayload {
  id: string;
  image?: string;
  title?: string;
  unit_price?: number;
  quantity?: number;
}

export default IProductShoppingCart;
export type { IProductShoppingCart, IProductActionPayload };
