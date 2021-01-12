interface IAttribute {
  //company-id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  order: number;
}

interface IProduct {
  id: string;
  type: string;
  attributes: IAttribute;
}
export default IProduct;
