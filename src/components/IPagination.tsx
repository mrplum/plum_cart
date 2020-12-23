import IProduct from "./IProduct";

interface IPagination {
  products: Array<IProduct>;
  page: number;
}

export default IPagination;
